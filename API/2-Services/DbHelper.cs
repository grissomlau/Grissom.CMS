using EasyJsonToSql;


using FluentData;
using Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Dynamic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class DbHelper
    {
        public static IDbContext Db
        {
            get
            {
                //return new DbContext().ConnectionStringName("DefaultConnection", new SqlServerProvider()).IgnoreIfAutoMapFails(true);
                var connection = System.Configuration.ConfigurationManager.AppSettings["defaultConnection"];
                if (string.IsNullOrEmpty(connection))
                {
                    connection = "DefaultConnection";
                }
                return new DbContext().ConnectionStringName(connection, new MySqlProvider()).IgnoreIfAutoMapFails(true);
            }
        }

        public static string TableName<T>()
        {
            string name = "";
            var filed = typeof(T).GetField("TableName");
            if (filed != null)
                name = filed.GetValue(null) + "";

            if (string.IsNullOrEmpty(name))
                name = typeof(T).Name;
            return name;
        }

        public static T GetModel<T>(ISelectBuilder sb)
        {
            var data = sb.Data;
            if (string.IsNullOrEmpty(data.Select))
                data.Select = "*";
            if (string.IsNullOrEmpty(data.From))
                data.From = TableName<T>();
            if ((data.Where + "").Trim() == "")
                data.Where = " 1=1 ";


            var builder = Db.Select<T>(data.Select).From(data.From).Where(data.Where);
            if (data.Wheres.Any())
            {
                data.Wheres.ForEach(x =>
                {
                    if (x.LogicalKey == LogicalKeyType.And)
                    {
                        builder.AndWhere(string.Format("{0} = @{1}", x.DbName, x.ParamName));
                    }
                    else if (x.LogicalKey == LogicalKeyType.Or)
                    {
                        builder.OrWhere(string.Format("{0} = @{1}", x.DbName, x.ParamName));
                    }
                });
            }
            if (!string.IsNullOrEmpty(data.OrderBy.Trim()))
            {
                builder.OrderBy(data.OrderBy);
            }
            if (data.Params.Any())
            {
                data.Params.ForEach(x =>
                {
                    builder.Parameter(x.ParamName, x.Value);
                });
            }
            return builder.QuerySingle();
        }

        public static T GetModel<T>(string sql, params DbField[] paras)
        {
            var build = Db.Sql(sql);
            if (paras != null)
            {
                foreach (var dbField in paras)
                {
                    build.Parameter(dbField.ParamName, dbField.Value);
                }
            }
            return build.QuerySingle<T>();
        }

        public static dynamic GetModelDynamic(ISelectBuilder sb)
        {
            var data = sb.Data;
            if (string.IsNullOrEmpty(data.Select))
                data.Select = "*";
            if (string.IsNullOrEmpty(data.From))
                throw new Exception("From cannot be empty or nothing");
            if ((data.Where + "").Trim() == "")
                data.Where = " 1=1 ";

            var builder = Db.Select<dynamic>(data.Select).From(data.From).Where(data.Where);
            if (data.Wheres.Any())
            {
                data.Wheres.ForEach(x =>
                {
                    if (x.LogicalKey == LogicalKeyType.And)
                    {
                        builder.AndWhere(string.Format("{0} = @{1}", x.DbName, x.ParamName));
                    }
                    else if (x.LogicalKey == LogicalKeyType.Or)
                    {
                        builder.OrWhere(string.Format("{0} = @{1}", x.DbName, x.ParamName));
                    }
                });
            }
            if (!string.IsNullOrEmpty(data.OrderBy.Trim()))
            {
                builder.OrderBy(data.OrderBy);
            }
            if (data.Params.Any())
            {
                data.Params.ForEach(x =>
                {
                    builder.Parameter(x.ParamName, x.Value);
                });
            }
            return builder.QuerySingle();
        }

        public static dynamic GetModelDynamic(string sql, params DbField[] paras)
        {
            var build = Db.Sql(sql);
            if (paras != null)
            {
                foreach (var dbField in paras)
                {
                    build.Parameter(dbField.ParamName, dbField.Value);
                }
            }
            return build.QuerySingle<dynamic>();
        }

        public static List<T> GetModels<T>(ISelectBuilder sb)
        {
            var data = sb.Data;
            if (string.IsNullOrEmpty(data.Select))
                data.Select = "*";
            if (string.IsNullOrEmpty(data.From))
                data.From = TableName<T>();
            if ((data.Where + "").Trim() == "")
                data.Where = " 1=1 ";

            var builder = Db.Select<T>(data.Select).From(data.From).Where(data.Where);
            if (data.Wheres.Any())
            {
                data.Wheres.ForEach(x =>
                {
                    if (x.LogicalKey == LogicalKeyType.And)
                    {
                        builder.AndWhere(string.Format("{0} = @{1}", x.DbName, x.ParamName));
                    }
                    else if (x.LogicalKey == LogicalKeyType.Or)
                    {
                        builder.OrWhere(string.Format("{0} = @{1}", x.DbName, x.ParamName));
                    }
                });
            }
            if (!string.IsNullOrEmpty(data.OrderBy.Trim()))
            {
                builder.OrderBy(data.OrderBy);
            }
            if (!string.IsNullOrEmpty(data.GroupBy.Trim()))
            {
                builder.GroupBy(data.GroupBy);
            }

            if (data.Params.Any())
            {
                data.Params.ForEach(x =>
                {
                    builder.Parameter(x.ParamName, x.Value);
                });
            }

            return builder.QueryMany();
        }

        public static List<T> GetModels<T>(string sql, params DbField[] paras)
        {
            var build = Db.Sql(sql);
            if (paras != null)
            {
                foreach (var dbField in paras)
                {
                    build.Parameter(dbField.ParamName, dbField.Value);
                }
            }
            return build.QueryMany<T, List<T>>();
        }

        public static List<T> GetModelsProc<T>(string sql, params DbField[] paras)
        {
            // return Db.Select<T>(sql).Parameters(paras).QueryMany();
            var build = Db.Sql(sql).CommandType(DbCommandTypes.StoredProcedure);
            if (paras != null)
            {
                foreach (var dbField in paras)
                {
                    build.Parameter(dbField.ParamName, dbField.Value);
                }
            }
            return build.QueryMany<T, List<T>>();
        }

        public static dynamic GetDynamicList(ISelectBuilder sb)
        {
            var data = sb.Data;
            if ((data.Select + "").Trim() == "")
                data.Select = "*";
            if ((data.From + "").Trim() == "")
                throw new Exception("From cannot be empty or nothing");
            if ((data.Where + "").Trim() == "")
                data.Where = " 1=1 ";

            var builder = Db.Select<dynamic>(data.Select).From(data.From).Where(data.Where);
            if (data.Wheres.Any())
            {
                data.Wheres.ForEach(x =>
                {
                    if (x.LogicalKey == LogicalKeyType.And)
                    {
                        builder.AndWhere(string.Format("{0} = @{1}", x.DbName, x.ParamName));
                    }
                    else if (x.LogicalKey == LogicalKeyType.Or)
                    {
                        builder.OrWhere(string.Format("{0} = @{1}", x.DbName, x.ParamName));
                    }
                });
            }
            if (!string.IsNullOrEmpty(data.GroupBy.Trim()))
            {
                builder.GroupBy(data.GroupBy);
            }
            if (!string.IsNullOrEmpty(data.OrderBy.Trim()))
            {
                builder.OrderBy(data.OrderBy);
            }

            if (data.Params.Any())
            {
                data.Params.ForEach(x =>
                {
                    builder.Parameter(x.ParamName, x.Value);
                });
            }

            return new { rows = builder.QueryMany() };
        }

        public static dynamic GetDynamic(ISelectBuilder sb)
        {
            var data = sb.Data;
            if ((data.Select + "").Trim() == "")
                data.Select = "*";
            if ((data.From + "").Trim() == "")
                throw new Exception("From cannot be empty or nothing");
            if ((data.Where + "").Trim() == "")
                data.Where = " 1=1 ";

            var builder = Db.Select<dynamic>(data.Select).From(data.From).Where(data.Where);
            if (data.Wheres.Any())
            {
                data.Wheres.ForEach(x =>
                {
                    if (x.LogicalKey == LogicalKeyType.And)
                    {
                        builder.AndWhere(string.Format("{0} = @{1}", x.DbName, x.ParamName));
                    }
                    else if (x.LogicalKey == LogicalKeyType.Or)
                    {
                        builder.OrWhere(string.Format("{0} = @{1}", x.DbName, x.ParamName));
                    }
                });
            }
            if (!string.IsNullOrEmpty(data.GroupBy.Trim()))
            {
                builder.GroupBy(data.GroupBy);
            }
            if (!string.IsNullOrEmpty(data.OrderBy.Trim()))
            {
                builder.OrderBy(data.OrderBy);
            }

            if (data.Params.Any())
            {
                data.Params.ForEach(x =>
                {
                    builder.Parameter(x.ParamName, x.Value);
                });
            }

            return builder.QueryMany();
        }

        public static dynamic GetDynamic(string sql, params DbField[] paras)
        {
            var build = Db.Sql(sql);
            Trace.WriteLine(build, sql, paras);
            if (paras != null)
            {
                foreach (var dbField in paras)
                {
                    build.Parameter(dbField.ParamName, dbField.Value);
                }
            }

            return build.QueryMany<dynamic>();
        }

        public static dynamic GetDynamicProc(string procName, params DbField[] paras)
        {
            var build = Db.Sql(procName).CommandType(DbCommandTypes.StoredProcedure);
            if (paras != null)
            {
                foreach (var dbField in paras)
                {
                    build.Parameter(dbField.ParamName, dbField.Value);
                }
            }
            return build.QueryMany<dynamic>();
        }

        public static dynamic GetDynamicListProc(string procName, params DbField[] paras)
        {
            var build = Db.Sql(procName).CommandType(DbCommandTypes.StoredProcedure);
            if (paras != null)
            {
                foreach (var dbField in paras)
                {
                    build.Parameter(dbField.ParamName, dbField.Value);
                }
            }
            return new { rows = build.QueryMany<dynamic>() };
        }

        public static dynamic GetDynamicList(string sql, params DbField[] paras)
        {
            var build = Db.Sql(sql);
            if (paras != null)
            {
                foreach (var dbField in paras)
                {
                    build.Parameter(dbField.ParamName, dbField.Value);
                }
            }
            return new { rows = build.QueryMany<dynamic>() };
        }

        public static dynamic GetDynamicWithPaging(string select, string from, string where, string groupBy, string orderBy, int pageNumber, int pageSize, out int total, params DbField[] paras)
        {
            return GetDynamicWithPaging(select, from, where, groupBy, orderBy, "", pageNumber, pageSize, out total, null, paras);
        }

        private static dynamic GetDynamicWithPaging(string select, string from, string where, string groupBy, string orderBy, string rowNumberOrderBy, int pageNumber, int pageSize, out int total, List<DbField> wheres, params DbField[] paras)
        {
            if (Db.Data.FluentDataProvider.GetType() == typeof(MySqlProvider))
            {
                return GetDynamicWithPagingForMysql(select, from, where, groupBy, orderBy, rowNumberOrderBy, pageNumber, pageSize, out total, wheres, paras);
            }
            else
            {
                return GetDynamicWithPagingForOtherSql(select, from, where, groupBy, orderBy, rowNumberOrderBy, pageNumber, pageSize, out total, wheres, paras);
            }
        }

        private static dynamic GetDynamicWithPagingForMysql(string select, string from, string where, string groupBy, string orderBy, string rowNumberOrderBy, int pageNumber, int pageSize, out int total, List<DbField> wheres, params DbField[] paras)
        {
            var ib = Db.Select<DataTable>(select).From(from).Where(where).Distinct();
            if (!string.IsNullOrEmpty(orderBy))
            {
                ib.OrderBy(orderBy);
            }
            if (!string.IsNullOrWhiteSpace(rowNumberOrderBy))
            {
                ib.RowNumberOrderBy(rowNumberOrderBy);
            }
            if (!string.IsNullOrEmpty(groupBy))
            {
                ib.GroupBy(groupBy);
            }

            ib.FoundRows();


            if (wheres != null)
            {
                wheres.ForEach(x =>
                {
                    if (x.LogicalKey == LogicalKeyType.And)
                    {
                        ib.AndWhere(string.Format("{0} = @{1}", x.DbName, x.ParamName));
                    }
                    else if (x.LogicalKey == LogicalKeyType.Or)
                    {
                        ib.OrWhere(string.Format("{0} = @{1}", x.DbName, x.ParamName));
                    }
                });
            }
            if (paras != null)
            {
                paras.ToList().ForEach(x =>
                {
                    ib.Parameter(x.ParamName, x.Value);
                });
            }

            dynamic rows;
            if (pageSize == 0)
            {
                var results = ib.QueryMany<List<DataTable>>();
                rows = results[0];
                total = Convert.ToInt32(results[1].Rows[0][0]);
            }
            else
            {
                IList<DataTable> results = ib.Paging(pageNumber, pageSize).QueryMany<List<DataTable>>();
                rows = results[0];
                total = Convert.ToInt32(results[1].Rows[0][0]);
            }
            return rows;
        }

        private static dynamic GetDynamicWithPagingForOtherSql(string select, string from, string where, string groupBy, string orderBy, string rowNumberOrderBy, int pageNumber, int pageSize, out int total, List<DbField> wheres, params DbField[] paras)
        {
            var ib = Db.Select<dynamic>(select).From(from).Where(where).Distinct();
            if (!string.IsNullOrEmpty(orderBy))
            {
                ib.OrderBy(orderBy);
            }
            if (!string.IsNullOrWhiteSpace(rowNumberOrderBy))
            {
                ib.RowNumberOrderBy(rowNumberOrderBy);
            }
            if (!string.IsNullOrEmpty(groupBy))
            {
                ib.GroupBy(groupBy);
            }

            var ibCount = Db.Select<int>("Count(0)").From(from).Where(where);

            if (wheres != null)
            {
                wheres.ForEach(x =>
                {
                    if (x.LogicalKey == LogicalKeyType.And)
                    {
                        ib.AndWhere(string.Format("{0} = @{1}", x.DbName, x.ParamName));
                        ibCount.AndWhere(string.Format("{0} = @{1}", x.DbName, x.ParamName));
                    }
                    else if (x.LogicalKey == LogicalKeyType.Or)
                    {
                        ib.OrWhere(string.Format("{0} = @{1}", x.DbName, x.ParamName));
                        ibCount.OrWhere(string.Format("{0} = @{1}", x.DbName, x.ParamName));
                    }
                });
            }
            if (!string.IsNullOrEmpty(groupBy))
            {
                ibCount.GroupBy(groupBy);
            }

            if (paras != null)
            {
                paras.ToList().ForEach(x =>
                {
                    ib.Parameter(x.ParamName, x.Value);
                    ibCount.Parameter(x.ParamName, x.Value);
                });
            }

            dynamic rows;
            if (pageSize == 0)
            {
                rows = ib.QueryMany();
            }
            else
            {
                rows = ib.Paging(pageNumber, pageSize).QueryMany();
            }
            if (!string.IsNullOrEmpty(groupBy))
            {
                total = ibCount.QueryMany().Count();
            }
            else
            {
                total = ibCount.QuerySingle();
            }
            return rows;
        }

        public static dynamic GetDynamicWithPaging(ISelectBuilder sb, out int total)
        {
            var data = sb.Data;
            var rows = GetDynamicWithPaging(data.Select, data.From, data.Where, data.GroupBy.Trim(), data.OrderBy.Trim(),
           data.RowNumberOrderBy.Trim(), data.PageNumber, data.PageSize, out total, data.Wheres, data.Params.ToArray());
            return rows;
        }

        public static dynamic GetDynamicListWithPaging(ISelectBuilder sb)
        {
            var data = sb.Data;
            int total;
            var rows = GetDynamicWithPaging(data.Select, data.From, data.Where, data.GroupBy.Trim(), data.OrderBy.Trim(),
            data.RowNumberOrderBy.Trim(), data.PageNumber, data.PageSize, out total, data.Wheres, data.Params.ToArray());

            return new { rows = rows, total = total };
        }

        public static int ExecuteSql(string sql, params DbField[] paras)
        {
            var build = Db.Sql(sql);
            Trace.WriteLine(build, sql, paras);
            if (paras != null)
            {
                foreach (var dbField in paras)
                {
                    build.Parameter(dbField.ParamName, dbField.Value);
                }
            }
            return build.Execute();
        }

        public static int ExecuteSql(IDbContext db, string sql, params DbField[] paras)
        {
            var build = db.Sql(sql);
            Trace.WriteLine(build, sql, paras);
            if (paras != null)
            {
                foreach (var dbField in paras)
                {
                    build.Parameter(dbField.ParamName, dbField.Value);
                }
            }
            return build.Execute();
        }

        public static bool ExecuteProc(string procName, params DbField[] paras)
        {
            using (var db = Db.UseTransaction(true))
            {
                var build = db.Sql(procName).CommandType(DbCommandTypes.StoredProcedure);
                if (paras != null)
                {
                    foreach (var dbField in paras)
                    {
                        if (dbField.IsOut)
                            build.ParameterOut(dbField.ParamName, DataTypes.Object, dbField.Size);
                        else
                            build.Parameter(dbField.ParamName, dbField.Value);
                    }
                }
                build.Execute();
                db.Commit();

                if (paras != null)
                {
                    foreach (var dbField in paras.Where(x => x.IsOut))
                    {
                        dbField.Value = build.ParameterValue<object>(dbField.ParamName);
                    }
                }
            }

            return true;
        }

        public static int ExecuteProc(IDbContext db, string procName, params DbField[] paras)
        {
            var build = db.Sql(procName).CommandType(DbCommandTypes.StoredProcedure);
            if (paras != null)
            {
                foreach (var dbField in paras)
                {
                    if (dbField.IsOut)
                        build.ParameterOut(dbField.ParamName, DataTypes.Object);
                    else
                        build.Parameter(dbField.ParamName, dbField.Value);
                }
            }
            var ret = build.Execute();
            if (paras != null)
            {
                foreach (var dbField in paras.Where(x => x.IsOut))
                {
                    dbField.Value = build.ParameterValue<object>(dbField.ParamName);
                }
            }

            return ret;
        }

        public static void Insert(IDbBuilder dbb, IDbContext db)
        {
            if (db == null)
                db = Db;
            var data = dbb.Data;

            // update dependency filed value
            if (data.Parent != null)
                data.AllFields.ForEach(x =>
                {
                    if (x.DependencyField != null)
                        x.Value = x.DependencyField.Value;
                });

            var ib = db.Insert(data.TableName);
            data.Fields.ForEach(x =>
            {
                if (x.IsId)
                    return;
                if (!string.IsNullOrEmpty(x.DbName) && !string.IsNullOrEmpty(x.Value + ""))
                    ib.Column(x.DbName, x.Value);
            });

            var idField = data.AllFields.FirstOrDefault(x => x.IsId);
            if (idField == null)
            {
                idField = data.Fields.FirstOrDefault(x => x.IsId);
            }

            if (idField != null)
            {
                // update id field for later using
                idField.Value = ib.ExecuteReturnLastId<string>();
            }
            else
            {
                ib.Execute();
            }
        }

        public static int Update(IDbBuilder dbb)
        {
            return Update(dbb, null);
        }

        public static int Update(IDbBuilder dbb, IDbContext db)
        {
            var data = dbb.Data;
            if (!data.Fields.Any())
                return 0;
            if (string.IsNullOrEmpty(data.TableName))
                throw new Exception("Table cannot be empty or nothing");
            if (db == null)
                db = Db;
            var builder = db.Update(data.TableName);
            if (data.Wheres.Any())
            {
                data.Wheres.ForEach(x =>
                {
                    builder.AddWhere(string.Format(" {0} {1} = @{2}", x.LogicalKey, x.DbName, x.ParamName));
                });
            }
            if (!string.IsNullOrEmpty(data.Where))
            {
                builder.AddWhere(data.Where);
            }
            data.Fields.ForEach(x =>
            {
                if (x.IsId)
                    return;
                if (x.Value + "" == "")
                    x.Value = DBNull.Value;
                builder.Column(x.DbName, x.Value);
            });
            if (data.Params.Any())
            {
                data.Params.ForEach(x =>
                {
                    if (!builder.Data.Columns.Any(o => o.ParameterName == x.ParamName))
                        builder.AddWhereParam(x.ParamName, x.Value);
                });
            }
            return builder.Execute();
        }

        public static int Delete(IDbBuilder dbb)
        {
            using (var db = Db.UseTransaction(true))
            {
                try
                {
                    var count = Delete(dbb, db);
                    db.Commit();
                    return count;
                }
                catch (Exception ex)
                {
                    db.Rollback();
                    throw ex;
                }
            }
        }

        public static int Delete(IDbBuilder dbb, IDbContext db)
        {
            if (db == null)
                db = Db;

            var data = dbb.Data;
            if (!data.DeleteAnyway)
            {
                return StatusDelete(dbb, db);
            }


            // delete children
            if (data.Setting != null && data.Setting.Children.Any())
            {
                data.Setting.Children.ForEach(c =>
                {
                    if (!c.Dependency.Fields.Any())
                        return;
                    var dependencyFields = new List<DbField>();
                    c.Dependency.Fields.ForEach(df =>
                    {
                        //dependencyFields.Add(new DbField { DbName = df.DbName, DependencyField = data.AllFields.FirstOrDefault(x => x.DbName == df.DependencyName) });

                        //var child = data.Children.FirstOrDefault(o => o.Data.TableName == c.Table);
                        var pdf = data.AllFields.FirstOrDefault(x => x.DbName == df.DependencyName);
                        if (pdf == null)
                        {
                            pdf = data.Fields.FirstOrDefault(x => x.DbName == df.DependencyName);
                        }
                        if (pdf == null)
                        {
                            pdf = data.Parent.Data.AllFields.FirstOrDefault(m => m.Name == df.DependencyName);
                        }
                        dependencyFields.Add(new DbField { DbName = df.DbName, DependencyField = pdf });
                    });
                    DeleteChildrenBySetting(db, c, dependencyFields);
                });
            }

            var buider = db.Delete(data.TableName);

            if (data.Wheres.Any())
            {
                foreach (var ws in data.Wheres)
                {
                    buider.AddWhere(string.Format(" {0} {1} = @{2} ", ws.LogicalKey.ToString(), ws.DbName, ws.ParamName));
                }
                data.Params.ForEach(x =>
                {
                    buider.AddWhereParam(x.ParamName, x.Value);
                });
            }
            if (!string.IsNullOrEmpty(data.Where))
            {
                buider.AddWhere(data.Where);
            }

            return buider.Execute();
        }

        public static int StatusDelete(IDbBuilder dbb, IDbContext db)
        {
            var builder = db.Update(dbb.Data.TableName);
            var data = dbb.Data;
            //builder.Column("is_deleted", true);
            builder.Column("IsDeleted", true);
            if (data.Wheres.Any())
            {
                foreach (var ws in data.Wheres)
                {
                    builder.AddWhere(string.Format(" {0} {1} = @{2} ", ws.LogicalKey.ToString(), ws.DbName, ws.ParamName));
                }
                data.Params.ForEach(x =>
                {
                    builder.AddWhereParam(x.ParamName, x.Value);
                });
            }
            return builder.Execute();
        }

        public static bool Edit(List<IDbBuilder> dbbList)
        {
            using (var db = Db.UseTransaction(true))
            {
                foreach (var p in dbbList.OrderBy(x => x.Data.Operator))
                {
                    //if (p.Operator != OperateType.NA)
                    Edit(p, db);
                }
                db.Commit();
            }
            return true;
        }

        public static bool Edit(List<IDbBuilder> dbbList, IDbContext db)
        {
            foreach (var p in dbbList.OrderBy(x => x.Data.Operator))
            {
                Edit(p, db);
            }
            return true;
        }

        public static MsgModel<dynamic> EditRetUpdateForm(IDbBuilder dbb)
        {
            return EditRetUpdateForm(new List<IDbBuilder>() { dbb });
        }

        public static MsgModel<dynamic> EditRetUpdateForm(List<IDbBuilder> dbbList)
        {
            var success = Edit(dbbList);

            if (success && dbbList.Count > 0)
            {
                var master = dbbList[0].Data;
                if (master.AllFields.Any(x => x.IsPk || x.IsId))
                {
                    dynamic updateForm = new ExpandoObject();
                    var updateFormDic = (IDictionary<string, object>)updateForm;
                    foreach (var field in master.AllFields.Where(x => x.IsPk || x.IsId))
                    {
                        updateFormDic.Add(field.Name, field.Value);
                    }
                    return new MsgModel<dynamic> { Status = true, Data = updateForm };
                }
                else
                {
                    return new MsgModel<dynamic> { Status = true };
                }
            }
            else
            {
                return new MsgModel<dynamic> { Status = false };
            }
        }

        public static void Edit(IDbBuilder dbb, IDbContext db)
        {
            var data = dbb.Data;

            switch (data.Operator)
            {
                case OperateType.Insert:
                    CheckUnique(db, dbb);
                    Insert(dbb, db);
                    break;
                case OperateType.Update:
                    CheckUnique(db, dbb);
                    Update(dbb, db);
                    break;
                case OperateType.Delete:
                    Delete(dbb, db);
                    break;
                default:
                    break;
            }

            if (data.Setting != null && data.Setting.Children.Where(x => x.DeleteAnyway).Any())
            {
                // delete children
                // 任何情况下都对子表进行删除操作
                data.Setting.Children.Where(x => x.DeleteAnyway).ToList().ForEach(c =>
                {
                    if (!c.Dependency.Fields.Any())
                        return;
                    var dependencyFields = new List<DbField>();
                    c.Dependency.Fields.ForEach(df =>
                    {
                        dependencyFields.Add(new DbField { DbName = df.DbName, DependencyField = data.AllFields.FirstOrDefault(x => x.DbName == df.DependencyName) });
                    });
                    DeleteChildrenBySetting(db, c, dependencyFields);
                });
            }


            // all delete operation has been excute iterally in DeleteCheck method
            // 只是在进行 插入和更新操作时，对子表进行删除操作
            if (data.Operator != OperateType.Delete && data.Children != null && data.Children.Count > 0)
            {
                if (data.Children[0].Data.DeleteAnyway && data.Children[0].Data.Operator != OperateType.Delete)
                {
                    StringBuilder sb = new StringBuilder();
                    sb.AppendFormat("delete from {0} ", data.Children[0].Data.TableName);
                    var depFields = data.Children[0].Data.AllFields.Where(x => x.DependencyField != null);
                    var para = new List<DbField>();
                    if (depFields.Count() > 0)
                    {
                        sb.Append(" where 1=1 ");
                        int i = 0;
                        foreach (var field in depFields)
                        {
                            sb.AppendFormat(" And {0} = @__p{1} ", field.DbName, ++i);
                            para.Add(new DbField { ParamName = "__p" + i, Value = field.DependencyField.Value });
                        }
                        ExecuteSql(db, sb.ToString(), para.ToArray());
                    }
                }

                foreach (var paramBase in data.Children.ToList().OrderByDescending(x => x.Data.Operator))
                {
                    Edit(paramBase, db);
                }
            }
        }

        public static void DeleteChildrenBySetting(IDbContext db, SqlConfig setting, List<DbField> dependencyFields)
        {
            StringBuilder sqlSb = new StringBuilder();
            sqlSb.AppendFormat("Delete From {0} Where ", setting.Table);
            int idx = 0;
            var para = new List<DbField>();
            dependencyFields.ForEach(f =>
            {
                if (idx == 0)
                {
                    sqlSb.AppendFormat(" {0} = @__P{1}", f.DbName, ++idx);
                }
                else
                {
                    sqlSb.AppendFormat(" And {0} = @__P{1}", f.DbName, ++idx);
                }
                para.Add(new DbField { ParamName = "__p" + idx, Value = f.DependencyField.Value });
            });

            //delete it's children
            if (setting.Children.Any())
            {
                setting.Children.ForEach(cSetting =>
                {
                    //iterate it to get the dependency data 
                    StringBuilder sqlQuerySb = new StringBuilder();
                    sqlQuerySb.AppendFormat("Select * From {0} Where ", setting.Table);
                    int cIdx = 0;
                    var cPara = new List<DbField>();
                    dependencyFields.ForEach(f =>
                    {
                        if (cIdx == 0)
                        {
                            sqlQuerySb.AppendFormat(" {0} = @__P{1}", f.DbName, ++cIdx);
                        }
                        else
                        {
                            sqlQuerySb.AppendFormat(" And {0} = @__P{1}", f.DbName, ++cIdx);
                        }
                        cPara.Add(new DbField { ParamName = "__p" + cIdx, Value = f.DependencyField.Value });
                    });

                    var builderQuery = db.Sql(sqlQuerySb.ToString());
                    cPara.ForEach(x =>
                    {
                        builderQuery.Parameter(x.ParamName, x.Value);
                    });
                    // delete it's children
                    var table = builderQuery.QuerySingle<DataTable>();
                    if (table.Rows.Count > 0 && cSetting.Dependency.Fields.Any())
                    {
                        table.Rows.Cast<DataRow>().ToList().ForEach(r =>
                        {
                            var cDependencyFields = new List<DbField>();
                            cSetting.Dependency.Fields.ForEach(df =>
                            {
                                cDependencyFields.Add(new DbField { DbName = df.DbName, DependencyField = new DbField { DbName = df.DependencyName, Value = r[df.DependencyName] } });
                            });
                            // delete children
                            DeleteChildrenBySetting(db, cSetting, cDependencyFields);
                        });

                    }
                    //DeleteChildrenBySetting(cSetting);
                });
            }
            var builder = db.Sql(sqlSb.ToString());
            para.ForEach(p =>
            {
                builder.Parameter(p.ParamName, p.Value);
            });
            builder.Execute();
        }

        public static void CheckUnique(IDbContext db, IDbBuilder dbb)
        {
            string fieldStr = "";
            var data = dbb.Data;
            List<DbField> chkUinqueFailedFields = new List<DbField>();
            if (!Unique(db, dbb, out chkUinqueFailedFields))
            {
                chkUinqueFailedFields.ForEach(x =>
                {
                    fieldStr += x.Name + ",";
                });
                throw new UniqueException("验证唯一性失败：" + fieldStr.TrimEnd(','));
            }
        }

        public static bool Unique(IDbContext db, IDbBuilder dbb, out List<DbField> fields)
        {
            var data = dbb.Data;
            fields = new List<DbField>();
            string sql = "select count(0) from " + data.TableName + " where 1=1 ";
            var paras = new List<object>();
            if (data.Operator == OperateType.Update)
            {
                int i = 0;
                foreach (var field in data.AllFields.Where(x => x.IsPk))
                {
                    sql += " And " + field.Name + " <> @" + i++;
                    paras.Add(field.Value);
                }
            }

            foreach (var f in data.AllFields.Where(x => x.IsUnique))
            {
                var builder = db.Sql(sql + " And " + f.Name + " = @" + f.Name, paras.ToArray()).Parameter(f.Name, f.Value);
                var isUnique = builder.QuerySingle<int>() == 0;
                if (!isUnique)
                {
                    fields.Add(f);
                }
            }
            return !fields.Any();
        }

        public static bool CheckExist(Field field, string tableName, List<Field> fields = null)
        {
            StringBuilder sbSql = new StringBuilder();
            sbSql.AppendFormat("Select 1 From {0} Where ", tableName);

            sbSql.AppendFormat("{0} = @{0} And Isnull({0},'') <> ''", field.DbName);
            if (fields != null)
                foreach (var pkField in fields.Where(x => x.IsPk))
                {
                    sbSql.AppendFormat(" And {0} <>  @{0}", pkField.DbName);
                }


            var cmd = Db.Sql(sbSql.ToString());
            cmd.Parameter(field.DbName, field.Value);

            if (fields != null)
                foreach (var pkField in fields.Where(x => x.IsPk))
                {
                    cmd.Parameter(pkField.DbName, pkField.Value);
                }

            var affected = cmd.QuerySingle<int>();
            return affected > 0;
        }

        // import 
        public static bool CheckExist(List<Field> fields, string tableName, IDbContext db)
        {
            StringBuilder sbSql = new StringBuilder();
            sbSql.AppendFormat("Select 1 From {0} Where ", tableName);

            foreach (var pkField in fields.Where(x => x.IsPk))
            {
                sbSql.AppendFormat("{0} = @{0}", pkField.DbName);
            }
            var cmd = db.Sql(sbSql.ToString());
            foreach (var pkField in fields.Where(x => x.IsPk))
            {
                cmd.Parameter(pkField.DbName, pkField.Value);
            }
            var affected = cmd.QuerySingle<int>();
            return affected > 0;
        }

        public static void Import(List<ImportRow> rows, string tableName, string userId)
        {
            using (var db = Db.UseTransaction(true))
            {
                rows.ForEach(row =>
                {
                    if (!CheckExist(row.Fields, tableName, db))
                    {
                        var ib = db.Insert(tableName);
                        row.Fields.ForEach(x =>
                        {
                            ib.Column(x.DbName, x.Value);
                        });
                        ib.Column("CreatedUserId", userId);
                        ib.Column("CreatedDate", DateTime.Now, DataTypes.DateTime);
                        ib.Execute();
                    }
                    else
                    {
                        var ub = db.Update(tableName);
                        row.Fields.Where(x => !x.IsPk).ToList().ForEach(x =>
                        {
                            ub.Column(x.DbName, x.Value);
                        });
                        ub.Column("UpdatedUserId", userId);
                        ub.Column("UpdatedDate", DateTime.Now, DataTypes.DateTime);
                        row.Fields.Where(x => x.IsPk).ToList().ForEach(x =>
                        {
                            ub.Where(x.DbName, x.Value);
                        });
                        ub.Execute();
                    }

                });
                db.Commit();
            }

        }
    }

}
