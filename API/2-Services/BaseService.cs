using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using FluentData;
using System.Data.SqlClient;
using System.Data;
using EasyJsonToSql;



namespace Services
{

    // 注意 Db.Sql(sql).QueryMany<T>() 与 Db.Select<T>().QueryMany<List<T>>() 的区别
    public class BaseService<T>
    {
        public static BaseService<T> Instance()
        {
            return new BaseService<T>();
        }

        /// <summary>
        /// 根据字段名称和值获取实体
        /// </summary>
        /// <param name="fieldValue">字段值</param>
        /// <param name="fieldName">字段名</param>
        /// <returns></returns>
        public T GetModel(string fieldName, string fieldValue)
        {

            string sql = String.Format("Select * From {0} Where {1}=@{1}", this.TableName, fieldName);
            return DbHelper.GetModel<T>(sql, new DbField(fieldName, fieldValue));
        }

        public T GetModel(ISelectBuilder sb)
        {
            return DbHelper.GetModel<T>(sb);
        }
        public string TableName
        {
            get
            {
                string name = "";
                var filed = typeof(T).GetField("TableName");
                if (filed != null)
                    name = filed.GetValue(null) + "";

                if (string.IsNullOrEmpty(name))
                    name = typeof(T).Name;
                return name;
            }
        }
    }
}
