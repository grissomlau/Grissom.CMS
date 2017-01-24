using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Easy.DataProxy
{
    public interface ISelectBuilder
    {
        SelectBuilderData Data { get; set; }
        ISelectBuilder AddSelect(string sql);
        ISelectBuilder SetSelect(string select);
        ISelectBuilder AddFrom(string sql);
        ISelectBuilder SetFrom(string from);
        ISelectBuilder ReplaceFrom(string oldValue, string newValue);
        ISelectBuilder ReplaceSelect(string oldValue, string newValue);
        ISelectBuilder OrWhere(string dbName, object value, string paramName = null);
        ISelectBuilder AndWhere(string dbName, object value, string paramName = null);
        ISelectBuilder AddParam(string paramName, object value);
        ISelectBuilder AddWhere(string AndOrWhere);
        ISelectBuilder AddGroupBy(string groupBy);
        ISelectBuilder AddRowNumberOrderBy(string order);
        ISelectBuilder SetRowNumberOrderBy(string order);
        ISelectBuilder AddOrderBy(string order);
        ISelectBuilder SetOrderBy(string order);
        ISelectBuilder SetPageSize(int size);
        ISelectBuilder SetPageNumber(int number);
    }
}
