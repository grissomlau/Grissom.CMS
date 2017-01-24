using Easy.SqlConfiguration;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Easy.DataProxy
{
    class Parser
    {

        public Func<string, object> GetSystemFieldValue;
        public ParserData Data;
        public Parser(ParserData data, Func<string, object> getSystemFieldValue)
        {
            this.Data = data;
            this.GetSystemFieldValue = getSystemFieldValue;
        }

        public IDbBuilder ToBuilder()
        {
            ParseFields();
            ParseId();
            ParsePk();
            ParseDependency();
            ParseUnique();

            IOperate operate = null;
            switch (this.Data.Builder.Data.Operator)
            {
                case OperateType.Update:
                    operate = this.Data.Builder.Data.Setting.Update;
                    break;
                case OperateType.Delete:
                    operate = this.Data.Builder.Data.Setting.Delete;
                    break;
                case OperateType.Insert:
                    operate = this.Data.Builder.Data.Setting.Insert;
                    break;
            }
            if (operate != null)
            {
                ParseOperate(operate);
            }
            return this.Data.Builder;
        }

        private void ParseFields()
        {
            this.Data.Builder.Data.AllFields = (from x in this.Data.RawData.Properties()
                                                where x.Value is JValue
                                                select new DbField() { Name = x.Name, Value = ((JValue)x.Value).Value }).ToList();
        }
        private void ParseId()
        {
            string id = (this.Data.Builder.Data.Setting.ID + "").Trim();
            if (!string.IsNullOrEmpty(id))
            {
                DbField idField = this.Data.Builder.Data.AllFields.FirstOrDefault(x => x.Name == id);
                if (idField == null)
                {
                    this.Data.Builder.Data.AllFields.Add(new DbField { IsId = true, Name = id });
                }
                else
                {
                    idField.IsId = true;
                }
            }
        }
        private void ParsePk()
        {
            this.Data.Builder.Data.Setting.PkArr.ToList().ForEach(x =>
            {
                var pkField = this.Data.Builder.Data.AllFields.FirstOrDefault(o => o.Name == x);
                if (pkField != null)
                {
                    pkField.IsPk = true;
                }
                else
                {
                    this.Data.Builder.Data.AllFields.Add(new DbField() { IsPk = true, Name = x });
                }
            });
        }
        private void ParseDependency()
        {
            this.Data.Builder.Data.Setting.Dependency.Fields.ForEach(o =>
            {
                var dF = this.Data.Builder.Data.AllFields.FirstOrDefault(m => m.Name == o.Name);
                if (dF == null)
                {
                    dF = new DbField { Name = o.Name, Value = o.Value };
                    this.Data.Builder.Data.AllFields.Add(dF);
                }
                var parentField = this.Data.Builder.Data.Parent.Data.AllFields.FirstOrDefault(m => m.Name == o.DependencyName);
                if (parentField == null)
                {
                    parentField = this.Data.Builder.Data.Parent.Data.Parent.Data.AllFields.FirstOrDefault(m => m.Name == o.DependencyName);
                }
                dF.DependencyField = parentField;
            });
        }
        private void ParseUnique()
        {
            //-- check unique field
            this.Data.Builder.Data.Setting.UniqueArr.ToList().ForEach(x =>
            {
                var uniqueField = this.Data.Builder.Data.AllFields.FirstOrDefault(o => o.Name == x);
                if (uniqueField != null)
                {
                    uniqueField.IsUnique = true;
                }
                else
                {
                    this.Data.Builder.Data.AllFields.Add(new DbField() { IsUnique = true, Name = x });
                }
            });

            //-- check unique ignore empty field
            this.Data.Builder.Data.Setting.UniqueAllowEmptyArr.ToList().ForEach(x =>
            {
                var uniqueField = this.Data.Builder.Data.AllFields.FirstOrDefault(o => o.Name == x);
                if (uniqueField != null)
                {
                    uniqueField.IsUniqueAllowEmpty = true;
                }
                else
                {
                    this.Data.Builder.Data.AllFields.Add(new DbField() { IsUniqueAllowEmpty = true, Name = x });
                }
            });
        }
        private void ParseWhere(List<Field> fields)
        {
            fields.ForEach(x =>
            {
                var f = this.Data.Builder.Data.AllFields.FirstOrDefault(o => o.Name == x.Name);
                if (!string.IsNullOrEmpty(x.SqlExpress))
                {
                    this.Data.Builder.AddWhere(x.SqlExpress);
                    if (!string.IsNullOrEmpty(x.Value) && f == null)
                    {
                        f = new DbField() { Name = x.Name, Value = x.Value, OnlyParam = true };
                        this.Data.Builder.Data.AllFields.Add(f);
                        this.Data.Builder.AndWhere(f.DbName, f.Value);
                    }
                }
                else
                {
                    if (f != null)
                    {
                        if (!string.IsNullOrEmpty(x.Value + "") && string.IsNullOrEmpty(f.Value + ""))
                        {
                            f.Value = x.Value;
                        }
                        f.ParamName = x.ParamName;
                        f.DbName = x.DbName;
                        f.OnlyParam = x.OnlyParam;
                        this.Data.Builder.AndWhere(f.DbName, f.Value, f.ParamName);
                    }
                    else if (!string.IsNullOrEmpty(x.Value + ""))
                    {
                        f = new DbField() { Name = x.Name, Value = x.Value };
                        this.Data.Builder.Data.AllFields.Add(f);
                        this.Data.Builder.AndWhere(f.DbName, f.Value);
                    }
                }
            });
        }
        private void ParseOperate(IOperate operate)
        {
            //-- check physical deleted or whether delete all data in db before insert 
            this.Data.Builder.Data.DeleteAnyway = operate.DeleteAnyway || this.Data.Builder.Data.Setting.DeleteAnyway;
            //-- check whether delete it's children first
            this.Data.Builder.Data.DeleteChildren = operate.Where.DeleteChildren;

            // populate insert ,update, where field
            if (operate.Fields.Any())
            {
                if (operate.Fields.Any(x => !x.IsIgnore))
                {
                    this.Data.Builder.Data.Fields = this.Data.Builder.Data.AllFields.Where(x =>
                        operate.Fields.Any(o =>
                            o.Name == x.Name
                            && !o.IsIgnore
                            && !this.Data.StrategyData.ProxyData.IgnoreColArr.Contains(x.Name)
                            && !x.Name.StartsWith(this.Data.StrategyData.ProxyData.IgnoreColPrefixArr)
                            && !x.IsId)).ToList();
                }
                else
                {
                    this.Data.Builder.Data.Fields = this.Data.Builder.Data.AllFields.Where(x =>
                        !operate.Fields.Any(o => o.Name == x.Name && o.IsIgnore)
                        && !x.Name.StartsWith(this.Data.StrategyData.ProxyData.IgnoreColPrefixArr)
                        && !this.Data.StrategyData.ProxyData.IgnoreColArr.Contains(x.Name)
                        && !x.IsId).ToList();
                }
            }
            else
            {
                this.Data.Builder.Data.Fields = this.Data.Builder.Data.AllFields.Where(x =>
                    !x.Name.StartsWith(this.Data.StrategyData.ProxyData.IgnoreColPrefixArr)
                    && !this.Data.StrategyData.ProxyData.IgnoreColArr.Contains(x.Name)
                    && !x.IsId).ToList();
            }
            //分析指定值的 field
            if (operate.Fields.Any(x => (x.Value + "").Trim() != "" && !x.IsIgnore))
            {
                operate.Fields.Where(x => (x.Value + "").Trim() != "" && !x.IsIgnore).ToList().ForEach(x =>
                {
                    var field = this.Data.Builder.Data.Fields.FirstOrDefault(o => o.Name == x.Name);
                    if (GetSystemFieldValue != null)
                    {
                        if (field == null)
                        {
                            field = new DbField(x.DbName, GetSystemFieldValue(x.Value));
                            this.Data.Builder.Data.Fields.Add(field);
                        }
                        else
                        {
                            field.Value = GetSystemFieldValue(x.Value);
                        }
                    }
                });
            }

            // -- 处理 DbName
            operate.Fields.Where(x => !string.IsNullOrEmpty(x.DbName) && x.DbName != x.Name && !x.IsIgnore).ToList().ForEach(x =>
            {
                var field = this.Data.Builder.Data.Fields.FirstOrDefault(o => o.Name == x.Name);
                if (field != null)
                {
                    field.DbName = x.DbName;
                }
            });

            ParseWhere(operate.Where.Fields);
        }
    }
}
