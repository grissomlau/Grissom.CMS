using Easy.SqlConfiguration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Easy.DataProxy
{
    public class BuilderData
    {
        public string TableName { get; set; }
        public SqlConfig Setting { get; set; }
        public List<DbField> AllFields { get; set; }
        public List<DbField> Fields { get; set; }
        public string Where { get; set; }
        public List<DbField> Params { get; set; }
        public List<DbField> Wheres { get; set; }
        public bool IsAutoGenerateCode { get; set; }
        public bool DeleteAnyway { get; set; }
        public IDbBuilder Parent { get; set; }
        public List<IDbBuilder> Children { get; set; }
        public OperateType Operator { get; set; }
        public bool DeleteChildren { get; set; }
        public bool PhysicalDelete { get; set; }

        public BuilderData(SqlConfig setting) {
            this.Setting = setting;
            this.Children = new List<IDbBuilder>();
            this.Params = new List<DbField>();
            this.Wheres = new List<DbField>();
            this.IsAutoGenerateCode = false;
            this.PhysicalDelete = true;
            this.Fields = new List<DbField>();
            this.AllFields = new List<DbField>();
        }
    }
}
