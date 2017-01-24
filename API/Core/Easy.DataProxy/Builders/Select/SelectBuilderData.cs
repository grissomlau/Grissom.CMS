using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Easy.DataProxy
{
    public class SelectBuilderData
    {
        public string Select { get; set; }
        public string From { get; set; }
        public string Where { get; set; }
        public string OrderBy { get; set; }
        public string RowNumberOrderBy { get; set; }
        public string GroupBy { get; set; }
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
        public string TableName { get; set; }
        public string CustTableName { get; set; }
        public List<DbField> Params { get; set; }
        public List<DbField> Wheres { get; set; }

        public SelectBuilderData() {
            this.Select = "";
            this.From = "";
            this.Where = " 1=1 ";
            this.RowNumberOrderBy = "";
            this.GroupBy = "";
            this.OrderBy = "";
            this.PageSize = 10;
            this.PageNumber = 1;
            this.Params = new List<DbField>();
            this.Wheres = new List<DbField>();
        }
    }
}
