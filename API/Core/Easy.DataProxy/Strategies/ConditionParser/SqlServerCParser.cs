using Easy.SqlConfiguration;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;

namespace Easy.DataProxy
{
    public class SqlServerCParser : ICParser
    {
        string DateFormat { get; set; }
        string Culture { get; set; }
        public string ParameterPrefix { get; private set; }

        public SqlServerCParser(string dateFormat, string culture)
        {
            this.Culture = string.IsNullOrEmpty(this.Culture) ? "en-US" : culture;
            this.DateFormat = string.IsNullOrWhiteSpace(dateFormat) ? "yyyy-MM-dd" : dateFormat;
            this.ParameterPrefix = "@";
        }

        public string GetSql(string cp, string paraName, string dbname, string value, string sqlExpress = null, string dataType = null, bool isAnd = true, bool isAddQuotes = true)
        {
            string sql = "";
            if (!string.IsNullOrEmpty(sqlExpress))
            {
                if (isAddQuotes)
                {
                    sql = sqlExpress.Replace("@" + paraName, "'" + ParseValue(value, dataType) + "'");
                }
                else
                {
                    //sql = sqlExpress.Replace("@" + paraName, ParseValue(value, dataType));
                    sql = sqlExpress.Replace("@" + paraName, "'" + ParseValue(value, dataType) + "'");
                }
            }
            else
            {
                value = string.IsNullOrEmpty(dataType) ? value : ParseValue(value, dataType);
                string orAnd = isAnd ? "And" : "Or";
                switch (cp.ToLower())
                {
                    case "equal":
                        sql = Equal(dbname, value, orAnd);
                        break;
                    case "like":
                        sql = Like(dbname, value, orAnd);
                        break;
                    case "notequal":
                        sql = NotEqual(dbname, value, orAnd);
                        break;
                    case "daterange":
                        sql = DateRange(dbname, value, orAnd);
                        break;
                    case "bigger":
                        sql = Bigger(dbname, value, orAnd);
                        break;
                    case "smaller":
                        sql = Smaller(dbname, value, orAnd);
                        break;
                    case "in":
                        sql = In(dbname, value, orAnd);
                        break;
                }
            }
            return sql;
        }

        public string GetSql(Field field)
        {
            //return GetSql(field.Cp, field.DbName, field.NewValue + "", field.SqlExpress, field.DataType);
            return GetSql(field.Cp, field.Name, field.DbName, field.NewValue + "", field.SqlExpress, field.DataType, true, field.IsAutoAddQuotes);
        }
        public string ParseValue(string value, string dataType)
        {
            int gmtDateMinLen = 24;
            value = FilterSql.FilterValue(value);
            switch (dataType)
            {
                case "datetime":
                    //Mon Sep 01 2014 00:00:00 GMT+0800 (China Standard Time)
                    if (value.Length > gmtDateMinLen)
                    {
                        DateTime newDate;
                        if (DateTime.TryParseExact(value.Substring(0, 24), "ddd MMM dd yyyy HH:mm:ss", new CultureInfo("en-US"), DateTimeStyles.None, out newDate))
                        {
                            value = newDate.ToString("yyyy-MM-dd HH:mm:ss");
                        }
                        else if (DateTime.TryParse(value, out newDate))
                        {
                            value = newDate.ToString("yyyy-MM-dd");
                        }

                    }
                    break;
                case "date":
                    //Mon Sep 01 2014 00:00:00 GMT+0800 (China Standard Time)
                    //Fri Jun 5 00:00:00 UTC+0800 2015
                    if (value.Length > gmtDateMinLen)
                    {
                        DateTime newDate;
                        if (DateTime.TryParseExact(value.Substring(0, 24), "ddd MMM dd yyyy HH:mm:ss", new CultureInfo("en-US"), DateTimeStyles.None, out newDate))
                        {
                            value = newDate.ToString("yyyy-MM-dd");
                        }
                        else if (DateTime.TryParse(value, out newDate))
                        {
                            value = newDate.ToString("yyyy-MM-dd");
                        }
                    }

                    break;
                case "int":
                    int iVal;
                    if (int.TryParse(value, out iVal))
                    {
                        value = iVal + "";
                    }
                    else
                    {
                        value = "";
                    }
                    break;
                case "decimal":
                    decimal dVal;
                    if (decimal.TryParse(value, out dVal))
                    {
                        value = dVal + "";
                    }
                    else
                    {
                        value = "";
                    }
                    break;
            }
            return value;
        }

        public string In(string fieldName, string value, string orAnd = "And")
        {
            return string.Format(" {2} {0} in ('{1}')", fieldName, FilterSql.FilterValue(value).Replace(",", "','"), orAnd);
        }
        public string Equal(string fieldName, string value, string OrAnd = "And")
        {
            return string.Format(" {2} {0} = '{1}'", fieldName, FilterSql.FilterValue(value), OrAnd);
        }
        public string Like(string fieldName, string value, string OrAnd = "And")
        {
            return string.Format(" {2} {0} like '%{1}%'", fieldName, FilterSql.FilterValue(value), OrAnd);
        }
        public string NotEqual(string fieldName, string value, string OrAnd = "And")
        {
            return string.Format(" {2} {0} <> '{1}'", fieldName, FilterSql.FilterValue(value), OrAnd);
        }
        public string Bigger(string fieldName, string value, string OrAnd = "And")
        {
            return string.Format(" {2} {0} >= '{1}'", fieldName, FilterSql.FilterValue(value), OrAnd);
        }
        public string Smaller(string fieldName, string value, string OrAnd = "And")
        {
            return string.Format(" {2} {0} <= '{1}'", fieldName, FilterSql.FilterValue(value), OrAnd);
        }
        public string DateRange(string fieldName, string value, string OrAnd = "And")
        {
            var seperator = new string[] { "~", "to", "到" };
            var arr = value.Split(seperator, StringSplitOptions.None);
            if (arr.Length > 1)
            {
                DateTime d1;
                DateTime.TryParseExact(arr[0].Trim(), DateFormat, new CultureInfo(Culture).DateTimeFormat,
                DateTimeStyles.None, out d1);

                DateTime d2;
                DateTime.TryParseExact(arr[1].Trim(), DateFormat, new CultureInfo(Culture).DateTimeFormat,
                DateTimeStyles.None, out d2);
                if (d1 != DateTime.MinValue && d2 != DateTime.MinValue)
                {
                    return string.Format(" {3} ({0} >= '{1}' And {0} <= '{2}')", fieldName, d1.ToString("yyyy-MM-dd"),
                    d2.ToString("yyyy-MM-dd 23:59:59"), OrAnd);
                }
            }
            return "";
        }

        public class FilterSql
        {
            public static string FilterValue(object value)
            {
                // filter using regular expression
                if (value == null)
                    return null;
                return (value + "").Replace("'", "''");
            }

            public static string FilterField(string fieldName)
            {
                if (fieldName == null)
                    return null;
                // filter using regular expression
                return fieldName.Replace("'", "");
            }

            public static string FilterInsertFieldName(string name)
            {
                // drop prefix for insert field name 
                if (name != null && name.Contains("."))
                {
                    return name.Split('.')[1];
                }
                return name;
            }
        }
    }
}
