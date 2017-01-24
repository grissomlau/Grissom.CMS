using Easy.SqlConfiguration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Easy.DataProxy
{
    public interface ICParser
    {
        string ParameterPrefix { get; }
        string DateRange(string fieldName, string value, string OrAnd = "And");
        string Smaller(string fieldName, string value, string OrAnd = "And");
        string Bigger(string fieldName, string value, string OrAnd = "And");
        string NotEqual(string fieldName, string value, string OrAnd = "And");
        string Like(string fieldName, string value, string OrAnd = "And");
        string Equal(string fieldName, string value, string OrAnd = "And");
        string In(string fieldName, string value, string orAnd = "And");
        string ParseValue(string value, string dataType);
        string GetSql(Field field);
        string GetSql(string cp, string paraName, string dbname, string value, string sqlExpress = null, string dataType = null, bool isAnd = true, bool isAddQuotes = true);
    }
}
