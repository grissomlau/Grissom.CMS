using Easy.SqlConfiguration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Easy.DataProxy
{
    public class DbBuilder : IDbBuilder
    {
        public BuilderData Data { get; set; }

        public DbBuilder(SqlConfig setting) {
            this.Data = new BuilderData(setting);
            if (setting != null)
                this.Data.TableName = setting.Table;
        }

        public IDbBuilder AddChild(IDbBuilder child) {
            child.Data.Parent = this;
            this.Data.Children.Add(child);
            return this;
        }

        public IDbBuilder SetFieldValue(string name, object value) {
            var field = this.Data.AllFields.FirstOrDefault(x => x.Name == name);
            field.Value = value;
            return this;
        }

        public object GetFieldValue(string name) {
            return this.Data.AllFields.FirstOrDefault(x => x.Name == name);
        }

        public DbField GetField(string name) {
            return this.Data.AllFields.FirstOrDefault(x => x.Name == name);
        }

        public IDbBuilder AndWhere(string dbName, object value, string paramName = null) {
            paramName = !string.IsNullOrEmpty(paramName) ? paramName : dbName.Replace('.', '_');
            this.Data.Wheres.Add(new DbField(dbName, value) {
                ParamName = paramName,
                LogicalKey = LogicalKeyType.And
            });

            this.AddParam(paramName, value);
            return this;
        }
        public IDbBuilder OrWhere(string dbName, object value, string paramName = null) {
            paramName = !string.IsNullOrEmpty(paramName) ? paramName : dbName.Replace('.', '_');
            this.Data.Wheres.Add(new DbField(dbName, value) {
                ParamName = paramName,
                LogicalKey = LogicalKeyType.Or
            });

            this.AddParam(paramName, value);
            return this;
        }

        public IDbBuilder AddWhere(string sql) {
            this.Data.Where += " " + sql;
            return this;
        }

        public IDbBuilder AddParam(string paramName, object value) {
            if (this.Data.Params.Any(x => x.ParamName.Trim() == paramName.Trim())) {
                throw new Exception("Params already exist " + paramName + ", please assign another name for this added param!");
            }
            this.Data.Params.Add(new DbField { Name = paramName, Value = value, ParamName = paramName });
            return this;
        }


        public IDbBuilder AddField(DbField field) {
            this.Data.AllFields.Add(field);
            this.Data.Fields.Add(field);
            return this;
        }

        public IDbBuilder AddAllField(DbField field) {
            this.Data.AllFields.Add(field);
            return this;
        }
    }
}
