using Easy.SqlConfiguration;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Text;

namespace Easy.DataProxy
{
    public class SelectStrategy<T> : IStrategy<T>
    {
        OperateType _ot;
        public SelectStrategy(OperateType ot = OperateType.MutipleSelect)
        {
            _ot = ot;
        }

        static SelectStrategy()
        {
            InitNameValueCollectionCaller();
            InitStringArrCaller();
        }

        public TReturn GetBuilder<TReturn>(ProxyData parserData, SqlConfig setting, T rawData) where TReturn : class
        {
            return Caller<T>.GetBuilder(parserData, setting, rawData, _ot) as TReturn;
        }

        static class Caller<TC>
        {
            public static Func<ProxyData, SqlConfig, TC, OperateType, ISelectBuilder> GetBuilder;
        }

        // init caller
        static void InitNameValueCollectionCaller()
        {
            Caller<NameValueCollection>.GetBuilder = (ProxyData proxyData, SqlConfig setting, NameValueCollection rawData, OperateType ot) =>
            {
                ISelectBuilder builder = new SelectBuilder();
                var data = new StrategyData<NameValueCollection>(proxyData, setting, rawData);

                data.CParser = new SqlServerCParser(proxyData.DateFormat, proxyData.Culture);
                InitBuilder(builder, data.Setting);

                var orderBy = string.IsNullOrWhiteSpace(data.RawData["orderBy"]) ? data.Setting.OrderBy.Default : data.RawData["orderBy"];
                string rowNumberOrderBy = orderBy;
                orderBy = ParseOrderBy(data.Setting, orderBy.Trim(), ref rowNumberOrderBy);

                builder.SetOrderBy(string.Format(" {0} ", orderBy));
                builder.SetRowNumberOrderBy(string.Format(" {0} ", rowNumberOrderBy));

                builder.SetPageSize(string.IsNullOrWhiteSpace(data.RawData["pageSize"]) ? data.Setting.PageSize : Convert.ToInt32(data.RawData["pageSize"]));
                builder.SetPageNumber(string.IsNullOrWhiteSpace(data.RawData["pageNumber"]) ? data.Setting.PageNumber : Convert.ToInt32(data.RawData["pageNumber"]));

                //模糊搜索
                if (!string.IsNullOrEmpty(data.RawData[data.ProxyData.FuzzySearchField] + ""))
                {
                    StringBuilder sbWhere = new StringBuilder();
                    StringBuilder sbExpressWhere = new StringBuilder();
                    data.Setting.Where.Fields.Where(x => x.FuzzySearch && !string.IsNullOrEmpty(x.SqlExpress)).ToList().ForEach(x =>
                    {
                        if (!string.IsNullOrEmpty(x.DataType) && x.ExpressIgnoreEmpty)
                        {
                            var val = data.CParser.ParseValue(data.RawData[data.ProxyData.FuzzySearchField] + "", x.DataType);
                            if (!string.IsNullOrEmpty(val))
                            {
                                //builder.AddWhere(data.CParser.GetSql(x.Cp, x.DbName, data.RawData[data.ProxyData.FuzzySearchField] + "", x.SqlExpress, x.DataType, true));
                                var retSql = data.CParser.GetSql(x.Cp, x.Name, x.DbName, data.RawData[data.ProxyData.FuzzySearchField] + "", x.SqlExpress, x.DataType, true, x.IsAutoAddQuotes);
                                //sbWhere.AppendFormat((" And (1=1 " + retSql + ")"));
                                sbExpressWhere.AppendFormat(retSql);
                            }
                        }
                        else
                        {
                            //builder.AddWhere(data.CParser.GetSql(x.Cp, x.DbName, data.RawData[data.ProxyData.FuzzySearchField] + "", x.SqlExpress, x.DataType, true));
                            var retSql = data.CParser.GetSql(x.Cp, x.Name, x.DbName, data.RawData[data.ProxyData.FuzzySearchField] + "", x.SqlExpress, x.DataType, true, x.IsAutoAddQuotes);
                            //sbWhere.AppendFormat((" And (1=1 " + retSql + ")"));
                            sbExpressWhere.AppendFormat(retSql);
                        }
                    });
                    if (sbExpressWhere.Length > 0)
                    {
                        builder.AddWhere(sbExpressWhere.ToString());
                    }
                    data.Setting.Where.Fields.Where(x => x.FuzzySearch && string.IsNullOrEmpty(x.SqlExpress)).ToList().ForEach(x =>
                    {
                        if (x.IgnoreEmpty && !string.IsNullOrEmpty(x.DataType))
                        {
                            var val = data.CParser.ParseValue(data.RawData[data.ProxyData.FuzzySearchField] + "", x.DataType);
                            if (!string.IsNullOrEmpty(val))
                            {
                                sbWhere.AppendFormat("{0}", data.CParser.GetSql(x.Cp, x.Name, x.DbName, data.RawData[data.ProxyData.FuzzySearchField] + "", x.SqlExpress, x.DataType, false, x.IsAutoAddQuotes));
                            }
                        }
                        else
                        {
                            sbWhere.AppendFormat("{0}", data.CParser.GetSql(x.Cp, x.Name, x.DbName, data.RawData[data.ProxyData.FuzzySearchField] + "", x.SqlExpress, x.DataType, false, x.IsAutoAddQuotes));
                        }
                    });
                    if (sbWhere.Length > 0)
                    {
                        builder.AddWhere(" And ( 1=2 " + sbWhere + ")");
                    }
                }

                // 单个实体查询语句
                if (ot == OperateType.SingleSelect)
                {
                    if (!string.IsNullOrEmpty(data.Setting.SingleQuery.Select))
                        builder.SetSelect(data.Setting.SingleQuery.Select);
                    if (!string.IsNullOrEmpty(data.Setting.SingleQuery.From))
                        builder.SetFrom(data.Setting.SingleQuery.From);

                    for (var i = 0; i < data.Setting.SingleQuery.Where.Fields.Count; ++i)
                    {
                        var x = data.Setting.SingleQuery.Where.Fields[i];
                        if (!string.IsNullOrWhiteSpace(data.RawData[x.Name]))
                        {
                            x.NewValue = data.RawData[x.Name];
                        }
                        builder.AddWhere(data.CParser.GetSql(x));
                    }
                }

                // where 条件
                if (ot == OperateType.MutipleSelect)
                {
                    StringBuilder sbWhere = new StringBuilder();
                    data.Setting.Where.Fields.ForEach(x =>
                    {
                        if (!string.IsNullOrWhiteSpace(data.RawData[x.Name]))
                        {
                            x.NewValue = data.RawData[x.Name];
                        }
                        if (x.IsInFrom && !string.IsNullOrEmpty(x.NewValue + ""))
                        {
                            builder.ReplaceFrom(data.CParser.ParameterPrefix + x.DbName, "'" + data.CParser.ParseValue(x.NewValue, x.DataType) + "'");

                        }
                        else if (x.IsInSelect && !string.IsNullOrEmpty(x.NewValue + ""))
                        {
                            builder.ReplaceSelect(data.CParser.ParameterPrefix + x.DbName, "'" + data.CParser.ParseValue(x.NewValue, x.DataType) + "'");
                        }
                        else
                        {
                            // ignore empty
                            if (x.IgnoreValue != null && (x.NewValue + "").Trim().ToLower() == x.IgnoreValue.Trim().ToLower())
                            {

                            }
                            else
                            {
                                if (x.IgnoreEmpty || x.ExpressIgnoreEmpty)
                                {
                                    if (!string.IsNullOrEmpty(x.DataType))
                                    {
                                        var val = data.CParser.ParseValue(x.NewValue, x.DataType);
                                        if (!string.IsNullOrEmpty(val))
                                        {
                                            builder.AddWhere(data.CParser.GetSql(x));
                                        }
                                    }
                                    else if (!string.IsNullOrEmpty(x.NewValue + "") || (!string.IsNullOrEmpty(x.SqlExpress) && !x.ExpressIgnoreEmpty))
                                    {
                                        builder.AddWhere(data.CParser.GetSql(x));
                                    }
                                }
                                else
                                {
                                    builder.AddWhere(data.CParser.GetSql(x));
                                }
                            }
                        }
                    });
                }

                //添加系统数据
                builder.AddParam("system_user_id", data.ProxyData.SystemUserId);
                builder.AddParam("system_datetime", data.ProxyData.SystemDateTime);

                return builder;
            };
        }

        static void InitStringArrCaller()
        {
            Caller<string[]>.GetBuilder = (ProxyData proxyData, SqlConfig setting, string[] rawData, OperateType ot) =>
            {
                ISelectBuilder builder = new SelectBuilder();
                var data = new StrategyData<string[]>(proxyData, setting, rawData);
                data.CParser = new SqlServerCParser(proxyData.DateFormat, proxyData.Culture);
                InitBuilder(builder, data.Setting);

                //单个查询
                if (ot == OperateType.SingleSelect)
                {
                    if (!string.IsNullOrEmpty(data.Setting.SingleQuery.Select))
                        builder.SetSelect(data.Setting.SingleQuery.Select);
                    if (!string.IsNullOrEmpty(data.Setting.SingleQuery.From))
                        builder.SetFrom(data.Setting.SingleQuery.From);

                    for (var i = 0; i < data.Setting.SingleQuery.Where.Fields.Count; ++i)
                    {
                        var x = data.Setting.SingleQuery.Where.Fields[i];
                        if (data.RawData.Length > i)
                        {
                            x.NewValue = data.RawData[i];
                        }
                        builder.AddWhere(data.CParser.GetSql(x));
                    }
                }

                //添加系统数据
                builder.AddParam("system_user_id", data.ProxyData.SystemUserId);
                builder.AddParam("system_datetime", data.ProxyData.SystemDateTime);
                return builder;
            };
        }

        // common methods
        static void InitBuilder(ISelectBuilder builder, SqlConfig setting)
        {
            builder.SetSelect(setting.Select);
            builder.SetFrom(setting.From);
            var orderBy = setting.OrderBy.Default;
            string rowNumberOrderBy = orderBy;
            orderBy = ParseOrderBy(setting, orderBy.Trim(), ref rowNumberOrderBy);

            builder.AddOrderBy(string.Format(" {0} ", orderBy));
            builder.AddRowNumberOrderBy(string.Format(" {0} ", rowNumberOrderBy));

            var groupBy = setting.GroupBy.Default + "";
            groupBy = ParseGroupBy(setting, groupBy.Trim());
            builder.AddGroupBy(groupBy);

            builder.SetPageSize(setting.PageSize);
            builder.SetPageNumber(setting.PageNumber);

        }

        static SqlConfig GetSpecifySetting(SqlConfig setting, string settingName)
        {
            if (setting.SettingName.Trim() == settingName.Trim())
            {
                return setting;
            }
            else
            {
                if (setting.Children != null)
                {
                    SqlConfig found = null;
                    foreach (var c in setting.Children)
                    {
                        found = GetSpecifySetting(c, settingName);
                        if (found != null)
                            return found;
                    }
                }
            }
            return null;
        }

        static string ParseOrderBy(SqlConfig setting, string orderBy, ref string rowNumberOrderBy)
        {
            if (!setting.OrderBy.Fields.Any())
                return orderBy;

            var fieldArr = orderBy.Split(',');
            StringBuilder orderBySb = new StringBuilder();
            StringBuilder rowNumberOrderBySb = new StringBuilder();

            for (int i = 0; i < fieldArr.Length; i++)
            {
                string fieldName = "";
                string direction = "";
                string rowNumberFieldName = "";
                if (fieldArr[i].IndexOf('.') < 0)
                {
                    var arr = fieldArr[i].Trim().Split(' ');
                    fieldName = arr[0].Trim();
                    direction = arr.Length == 2 ? arr[1].Trim() : "";
                    rowNumberFieldName = fieldName;

                    var field = setting.OrderBy.Fields.FirstOrDefault(x => x.Name == fieldName);
                    if (field != null)
                    {
                        fieldName = field.DbName;
                        if (!string.IsNullOrEmpty(field.OrderBy))
                        {
                            fieldName = field.OrderBy;
                        }
                        if (!string.IsNullOrEmpty(field.Prefix) && fieldName.IndexOf('.') < 0)
                        {
                            string prefix = field.Prefix;
                            fieldName = prefix + "." + fieldName;
                        }

                        // rownumber order by 
                        rowNumberFieldName = fieldName;
                        if (!string.IsNullOrWhiteSpace(field.RowNumberOrderBy))
                        {
                            rowNumberFieldName = field.RowNumberOrderBy;
                        }
                    }
                }
                else
                {
                    fieldName = fieldArr[i];
                }

                orderBySb.AppendFormat("{0} {1},", fieldName, direction);
                rowNumberOrderBySb.AppendFormat("{0} {1},", rowNumberFieldName, direction);
            }
            rowNumberOrderBy = rowNumberOrderBySb.ToString().TrimEnd(',');
            return orderBySb.ToString().TrimEnd(',');
        }

        static string ParseGroupBy(SqlConfig setting, string groupBy)
        {
            if (!setting.GroupBy.Fields.Any())
                return groupBy;

            var fieldArr = groupBy.Split(',');
            StringBuilder groupBySb = new StringBuilder();

            for (int i = 0; i < fieldArr.Length; i++)
            {
                string fieldName = "";
                string direction = "";
                if (fieldArr[i].IndexOf('.') < 0)
                {
                    var arr = fieldArr[i].Trim().Split(' ');
                    fieldName = arr[0].Trim();
                    direction = arr.Length == 2 ? arr[1].Trim() : "";

                    var field = setting.OrderBy.Fields.FirstOrDefault(x => x.Name == fieldName);
                    if (field != null)
                    {
                        fieldName = field.DbName;
                        if (!string.IsNullOrEmpty(field.OrderBy))
                        {
                            fieldName = field.OrderBy;
                        }
                        if (!string.IsNullOrEmpty(field.Prefix) && fieldName.IndexOf('.') < 0)
                        {
                            string prefix = field.Prefix;
                            fieldName = prefix + "." + fieldName;
                        }

                    }
                }
                else
                {
                    fieldName = fieldArr[i];
                }

                groupBySb.AppendFormat("{0} {1},", fieldName, direction);
            }
            return groupBySb.ToString().TrimEnd(',');
        }
    }
}
