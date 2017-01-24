using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Easy.DataProxy
{
    public class SelectBuilder : ISelectBuilder
    {
        public SelectBuilderData Data { get; set; }

        public SelectBuilder()
        {
            this.Data = new SelectBuilderData();
        }

        public ISelectBuilder AddSelect(string sql)
        {
            this.Data.Select += ", " + sql;
            return this;
        }

        public ISelectBuilder SetSelect(string select)
        {
            this.Data.Select = select;
            return this;
        }

        public ISelectBuilder AddFrom(string sql)
        {
            this.Data.From += " " + sql;
            return this;
        }

        public ISelectBuilder SetFrom(string from)
        {
            this.Data.From = from;
            return this;
        }

        public ISelectBuilder OrWhere(string name, object value, string paramName = null)
        {
            paramName = !string.IsNullOrEmpty(paramName) ? paramName : name.Replace('.', '_');
            this.Data.Wheres.Add(new DbField() { Name = name, ParamName = paramName, LogicalKey = LogicalKeyType.Or });
            this.AddParam(paramName, value);
            return this;
        }

        public ISelectBuilder AndWhere(string name, object value, string paramName = null)
        {
            paramName = !string.IsNullOrEmpty(paramName) ? paramName : name.Replace('.', '_');
            this.Data.Wheres.Add(new DbField() { Name = name, ParamName = paramName, LogicalKey = LogicalKeyType.And });
            this.AddParam(paramName, value);
            return this;
        }


        public ISelectBuilder AddWhere(string AndOrWhere)
        {
            this.Data.Where += string.Format(" {0} ", AndOrWhere);
            return this;
        }

        public ISelectBuilder AddParam(string paramName, object value)
        {
            if (this.Data.Params.Any(x => x.ParamName.Trim() == paramName.Trim()))
            {
                throw new Exception("Params already exist " + paramName + ", please assign another name for this added param!");
            }
            this.Data.Params.Add(new DbField { Name = paramName, Value = value, ParamName = paramName });
            return this;
        }

        public ISelectBuilder AddGroupBy(string groupBy)
        {
            if (groupBy.Contains(";"))
                throw new Exception("Illegal group by!");
            this.Data.GroupBy += groupBy;
            return this;

        }

        public ISelectBuilder AddRowNumberOrderBy(string order)
        {
            if (order.Contains(";"))
                throw new Exception("Illegal rownumber order by!");
            this.Data.RowNumberOrderBy += order;
            return this;
        }

        public ISelectBuilder SetRowNumberOrderBy(string order)
        {
            this.Data.RowNumberOrderBy = order;
            return this;
        }

        public ISelectBuilder AddOrderBy(string order)
        {
            if (order.Contains(";"))
                throw new Exception("Illegal order by!");
            this.Data.OrderBy += order;
            return this;
        }

        public ISelectBuilder SetOrderBy(string order)
        {
            this.Data.OrderBy = order;
            return this;
        }

        public ISelectBuilder ReplaceFrom(string oldValue, string newValue)
        {
            this.Data.From = this.Data.From.Replace(oldValue, newValue);
            return this;
        }

        public ISelectBuilder ReplaceSelect(string oldValue, string newValue)
        {
            this.Data.Select = this.Data.Select.Replace(oldValue, newValue);
            return this;
        }

        public ISelectBuilder SetPageSize(int size)
        {
            this.Data.PageSize = size;
            return this;
        }

        public ISelectBuilder SetPageNumber(int number)
        {
            this.Data.PageNumber = number;
            return this;
        }
    }
}
