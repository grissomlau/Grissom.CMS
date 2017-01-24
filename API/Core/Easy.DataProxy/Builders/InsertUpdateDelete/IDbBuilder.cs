using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Easy.DataProxy
{
    public interface IDbBuilder
    {
        BuilderData Data { get; set; }
        IDbBuilder AddChild(IDbBuilder child);
        IDbBuilder SetFieldValue(string name, object value);
        object GetFieldValue(string name);
        DbField GetField(string name);
        IDbBuilder AddField(DbField field);
        IDbBuilder AddAllField(DbField field);
        IDbBuilder AndWhere(string dbName, object value, string paramName = null);
        IDbBuilder OrWhere(string dbName, object value, string paramName = null);
        IDbBuilder AddParam(string paramName, object value);
        IDbBuilder AddWhere(string sql);
    }
}
