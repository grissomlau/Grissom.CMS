using Easy.SqlConfiguration;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Easy.DataProxy
{
    public class DbStrategy : IStrategy<JObject>
    {

        private StrategyData<JObject> Data { get; set; }

        public TReturn GetBuilder<TReturn>(ProxyData proxyData, SqlConfig setting, JObject rawData) where TReturn : class
        {
            this.Data = new StrategyData<JObject>(proxyData, setting, rawData);
            return this.Parse(setting) as TReturn;
        }

        List<IDbBuilder> Parse(SqlConfig setting)
        {
            var tmpRoot = new DbBuilder(setting);
            setting.JsonName = string.IsNullOrEmpty((setting.JsonName + "").Trim()) ? "master" : setting.JsonName;
            this.ParseChild(tmpRoot, setting, this.Data.RawData);
            return tmpRoot.Data.Children;
        }

        void ParseChild(IDbBuilder parent, SqlConfig sqlSetting, JObject jobj)
        {
            JArray jArray = null;
            var data = (JObject)jobj[sqlSetting.JsonName.Trim()];
            if (data == null)
                return;
            if (data["inserted"] != null && data["inserted"].HasValues)
            {
                jArray = data["inserted"] as JArray;
                PopulateParaList(sqlSetting, jArray, OperateType.Insert, parent);
            }
            if (data["updated"] != null && data["updated"].HasValues)
            {
                jArray = data["updated"] as JArray;
                PopulateParaList(sqlSetting, jArray, OperateType.Update, parent);
            }
            if (data["deleted"] != null && data["deleted"].HasValues)
            {
                jArray = data["deleted"] as JArray;
                PopulateParaList(sqlSetting, jArray, OperateType.Delete, parent);
            }
            if (data["na"] != null && data["na"].HasValues)
            {
                jArray = data["na"] as JArray;
                PopulateParaList(sqlSetting, jArray, OperateType.NA, parent);
            }
        }

        void PopulateParaList(SqlConfig setting, JArray dataArray, OperateType type, IDbBuilder parent)
        {
            dataArray.ToList().ForEach(x =>
            {
                var parserData = new ParserData(this.Data, (JObject)x["data"], setting, type, parent);
                IDbBuilder builder = new Parser(parserData, GetSystemFieldValue).ToBuilder();
                InitSystemField(builder);

                if (setting.Children != null && setting.Children.Any() && (JObject)x["children"] != null)
                {
                    foreach (var sqlSetting in setting.Children)
                    {
                        ParseChild(builder, sqlSetting, (JObject)x["children"]);
                    }
                }
            });
        }

        void InitSystemField(IDbBuilder builder)
        {
            var fields = builder.Data.AllFields;
            //created user id 
            var f = fields.FirstOrDefault(x => x.DbName.EndsWith("CreatedUserId"));
            if (f != null)
                f.Value = this.Data.ProxyData.SystemUserId;
            //created date
            f = fields.FirstOrDefault(x => x.DbName.EndsWith("CreatedDate"));
            if (f != null)
                f.Value = this.Data.ProxyData.SystemDateTime;
            //updated user id
            f = fields.FirstOrDefault(x => x.DbName.EndsWith("UpdatedUserId"));
            if (f != null)
                f.Value = this.Data.ProxyData.SystemUserId;
            //updated date
            f = fields.FirstOrDefault(x => x.DbName.EndsWith("UpdatedDate"));
            if (f != null)
                f.Value = this.Data.ProxyData.SystemDateTime;

            //if (builder.Data.Operator == OperateType.Insert)
            //{
            //    //updated user id
            //    f = fields.FirstOrDefault(x => x.DbName.EndsWith("creater"));
            //    if (f != null)
            //        f.Value = this.Data.ProxyData.SystemUserId;
            //    //updated date
            //    f = fields.FirstOrDefault(x => x.DbName.EndsWith("createtime"));
            //    if (f != null)
            //        f.Value = this.Data.ProxyData.SystemDateTime;
            //}
            //updated user id
            //f = fields.FirstOrDefault(x => x.DbName.EndsWith("updater"));
            //if (f != null)
            //    f.Value = this.Data.ProxyData.SystemUserId;
            ////updated date
            //f = fields.FirstOrDefault(x => x.DbName.EndsWith("updatetime"));
            //if (f != null)
            //    f.Value = this.Data.ProxyData.SystemDateTime;
        }

        object GetSystemFieldValue(string fieldValue)
        {
            switch (fieldValue)
            {
                case "@SystemUserId":
                    return this.Data.ProxyData.SystemUserId;
                case "@SystemDateTime":
                    return this.Data.ProxyData.SystemDateTime;
                default:
                    return fieldValue;
            }
        }

    }
}
