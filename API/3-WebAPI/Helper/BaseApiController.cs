using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.IO;
using System.Diagnostics;
using System.Text;
using Newtonsoft.Json.Linq;
using System.Web.Http.Filters;
using System.Web.Http.Controllers;
using System.Net.Http;
using System.Net;
using System.Web.Configuration;
using System.Web.Security;
using System.Collections.Specialized;
using Services;
using Easy.SqlConfiguration;
using Easy.Office;
using Easy.DataProxy;
using Model;

namespace WebApi
{
    //[BasicAuthentication]
    public class BaseApiController<T> : ApiController
    {
        private BaseService<T> _service;
        public BaseService<T> Service
        {
            get
            {
                if (_service == null)
                    _service = new BaseService<T>();
                return _service;
            }
            set
            {
                _service = value;
            }
        }

        string _tableName;
        public string TableName
        {
            get
            {
                if (string.IsNullOrEmpty(_tableName))
                {
                    _tableName = typeof(T).Name;
                }
                return _tableName;
            }
            set
            {
                _tableName = value;
            }
        }

        protected string XmlName { get; set; }

        private string _xml;
        protected string Xml
        {
            get
            {
                if (string.IsNullOrEmpty(_xml))
                {
                    if (string.IsNullOrEmpty(XmlName))
                        XmlName = typeof(T).Name;
                    _xml = HttpContext.Current.Server.MapPath("~/SqlConfigs/" + XmlName + ".xml");
                }
                return _xml;
            }

            set
            {
                _xml = value;
                Setting = XmlHelper.LoadFromXml<SqlConfig>(XmlHelper.GetXml(value));
            }
        }

        protected delegate SqlConfig GetSettingDel();
        protected GetSettingDel GetSetting;


        protected static SqlConfig _setting;
        /// <summary>
        /// 用缓存处理 setting， 加快效率
        /// </summary>
        public SqlConfig Setting
        {
            get
            {
                SqlConfig setting;
                if (GetSetting != null)
                {
                    setting = GetSetting();
                }
                else
                {
                    if (_setting == null)
                    {
                        _setting = XmlHelper.LoadFromXml<SqlConfig>(XmlHelper.GetXml(Xml));
                    }
                    setting = _setting;
                }
                return setting.ReInit();
            }
            set
            {
                _setting = value;
            }
        }


        protected dynamic BeforeImport(List<ImportRow> importRows, bool isCheck = false, bool isRepeatedUpdate = false)
        {
            StringBuilder sbMsg = new StringBuilder();
            importRows.ForEach(row =>
            {
                row.Fields.ForEach(x =>
                {
                    if ((x.IsPk || x.IsMandatory) && string.IsNullOrEmpty(x.Value))
                    {
                        row.Msg += string.Format("{0} {1},", x.DbName, "__empty");
                        row.IsCanBeImport = false;
                    }
                    if (x.IsRepeated)
                    {
                        row.Msg += string.Format("{0} {1},", x.DbName, "__repeated");
                    }
                });
                if (isCheck && !string.IsNullOrEmpty(row.Msg))
                {
                    sbMsg.AppendLine(row.CheckMsg);
                }
            });
            if (isCheck && importRows.Any(x => x.IsUpdate))
            {
                return new { status = "confirm", msg_code = "__confirm_repeated_record", content = sbMsg + "" };
            }
            return null;
        }

        protected dynamic AfterImport(List<ImportRow> importRows, int successCount, int failedCount, bool isQuiet = true)
        {
            if (isQuiet)
                return null;
            StringBuilder sbMsg = new StringBuilder();
            importRows.ForEach(x =>
            {
                if (!string.IsNullOrEmpty(x.ImportMsg.Trim()))
                    sbMsg.AppendLine(x.ImportMsg);
            });
            var attachSavePath = System.Web.Configuration.WebConfigurationManager.AppSettings["tmpFileSavePath"];
            var relativeSavePath = Path.Combine(attachSavePath, Commons.ServerDateTime.ToString("yyyy-MM"));
            var abstractSavePath = System.Web.HttpContext.Current.Server.MapPath(relativeSavePath);
            if (!Directory.Exists(abstractSavePath))
            {
                Directory.CreateDirectory(abstractSavePath);
            }
            var saveName = DateTime.Now.ToString("yyyyMMddHHmmssfffff") + ".txt";
            var relSaveName = Path.Combine(relativeSavePath, saveName);
            var absSaveName = Path.Combine(abstractSavePath, saveName);

            using (var sm = new StreamWriter(absSaveName, false))
            {
                sm.WriteLine(string.Format("{0}, {1} {2}, {3} {4}", "__import_complete", "__success", successCount, "__failed", failedCount));
                sm.WriteLine();
                sm.Write(sbMsg);
            }
            return new { status = true, msg_code = "__import_complete", right_msg = new { __success = successCount, __failed = failedCount }, content = sbMsg + "", logPath = relSaveName, logName = saveName };
        }

        [System.Web.Http.AcceptVerbs("GET", "POST")]
        public virtual dynamic Import(string filePath, bool isCheck = false, bool isRepeatedUpdate = true, bool isQuiet = true)
        {
            string fileFullName = HttpContext.Current.Server.MapPath(filePath);
            int failedCount = 0;
            int successCount = 0;
            List<ImportRow> importRows = new List<ImportRow>();
            try
            {
                importRows = Excel.Import(Setting.Import.Fields, fileFullName, new Action<ImportRow, Field, Field>((row, field, newField) =>
                {
                    if (field.IsPk || field.IsCheckRepeated)
                    {
                        if (!field.IsPk)
                            newField.IsRepeated = DbHelper.CheckExist(newField, Setting.Table, row.Fields);
                        else
                            newField.IsRepeated = DbHelper.CheckExist(newField, Setting.Table);
                    }
                }));

                var before = BeforeImport(importRows, isCheck, isRepeatedUpdate);
                if (before != null)
                    return before;
                var canBeImportRows = importRows.Where(x => x.IsCanBeImport);
                if (!isRepeatedUpdate)
                    canBeImportRows = importRows.Where(x => x.IsCanBeImport && !x.IsUpdate);

                if (canBeImportRows.Any())
                {
                    DbHelper.Import(canBeImportRows.ToList(), Setting.Table, Commons.UserId);
                }

                successCount = canBeImportRows.Count();
                failedCount = importRows.Count(x => !x.IsCanBeImport);

                var after = AfterImport(importRows, successCount, failedCount, isQuiet);
                if (after != null)
                    return after;


            }
            catch (Exception ex)
            {
                return new { status = false, msg_code = ex.Message };
            }

            return new { status = true, msg_code = "__import_complete", right_msg = new { __success = successCount, __failed = failedCount } };
        }


        [System.Web.Http.AcceptVerbs("GET", "POST")]
        public virtual dynamic ExportExcel(NameValueCollection data)
        {
            var builder = new Proxy(Commons.UserId, Commons.ServerDateTime, Commons.DateFormat, Commons.Culture).ToSelectBuilder<NameValueCollection>(Setting, data);

            //builder.AddWhere(string.Format(" And (isnull(A.is_deleted,0) <> 1)"));
            var ret = DbHelper.GetDynamic(builder) as List<dynamic>;

            if (!Directory.Exists(HttpContext.Current.Server.MapPath("~/attachments/")))
            {

                Directory.CreateDirectory(HttpContext.Current.Server.MapPath("~/attachments/"));
            }
            if (!Directory.Exists(HttpContext.Current.Server.MapPath("~/attachments/" + Commons.UserId)))
            {
                Directory.CreateDirectory(HttpContext.Current.Server.MapPath("~/attachments/" + Commons.UserId));
            }
            string relPath = "~/attachments/" + Commons.UserId + "/" + Guid.NewGuid() + ".xls";
            string absPath = HttpContext.Current.Server.MapPath(relPath);
            Excel.Export(ret, Setting.Export.Fields, absPath);
            //return "{\"status\":true,\"downloadName\":\"" + Setting.FieldExport.FileName + "\",\"relativeFileFullName\":\"" + relPath + "\"}";
            return new { status = true, downloadName = Setting.Export.FileName, relativeFileFullName = relPath };
        }


        /// <summary>
        /// 可以修改 ISelectBuilder 的 Select, From , Where 语句
        /// </summary>
        /// <param name="pq"></param>
        protected virtual void BeforeList(ISelectBuilder builder)
        {
        }

        [HttpGet]
        public virtual dynamic List(DataProxyHelper<NameValueCollection> proxy)
        {
            var builder = proxy.ToSelectBuilder(this.Setting);
            BeforeList(builder);
            var ret = DbHelper.GetDynamicListWithPaging(builder);
            return ret;
        }


        protected virtual void BeforeGetMaster(ISelectBuilder builder)
        {
        }

        [HttpGet]
        public virtual dynamic Master([FromUri] string[] values)
        {
            var builder = new Proxy(Commons.UserId, Commons.ServerDateTime, Commons.DateFormat, Commons.Culture).ToSelectBuilder(Setting, values, OperateType.SingleSelect);
            BeforeGetMaster(builder);
            var model = DbHelper.GetModelDynamic(builder);
            return model;
        }

        protected virtual void BeforeEdit(List<IDbBuilder> builders)
        {
        }

        [HttpGet, HttpPost]
        public virtual MsgModel<dynamic> Edit(JObject data)
        {
            var builder = new Proxy(Commons.UserId, Commons.ServerDateTime, Commons.DateFormat, Commons.Culture).ToDbBuilders(Setting, data);
            BeforeEdit(builder);
            var ret = DbHelper.EditRetUpdateForm(builder);
            AfterEdit(builder);
            return ret;
        }

        protected virtual void AfterEdit(List<IDbBuilder> builders)
        {
        }

        public virtual string SaveFile(System.Web.HttpPostedFile file)
        {

            if (file == null || file.ContentLength <= 0)
            {
                return null;
            }
            else
            {
                var fileName = Path.GetFileName(file.FileName);
                var fileExt = Path.GetExtension(file.FileName);
                var attachSavePath = System.Web.Configuration.WebConfigurationManager.AppSettings["attachSavePath"];

                if (string.IsNullOrEmpty(attachSavePath))
                {
                    return null;
                }
                var relativeSavePath = Path.Combine(attachSavePath, Commons.ServerDateTime.ToString("yyyy-MM"));
                var abstractSavePath = HttpContext.Current.Server.MapPath(relativeSavePath);
                if (!Directory.Exists(abstractSavePath))
                {
                    Directory.CreateDirectory(abstractSavePath);
                }
                var saveName = Guid.NewGuid().ToString() + fileExt;
                file.SaveAs(Path.Combine(abstractSavePath, saveName));
                var relativeFileFullName = Path.Combine(relativeSavePath, saveName).Replace("\\", "/");
                // 保存进数据库的路径，去掉根目录符，方便以后扩展
                if (relativeFileFullName.StartsWith("~"))
                    relativeFileFullName = relativeFileFullName.TrimStart('~');

                return relativeFileFullName;
            }

        }


        public String GetCookie(string name)
        {
            var cookie = HttpContext.Current.Request.Cookies.Get(name);
            if (cookie == null) return "";
            return cookie.Value;
        }

        [HttpGet]
        public virtual List<SysMenuPoint> Tools(string pointGroup)
        {
            var menuCode = typeof(T).Name;
            var tools = SysMenuPointService.GetByUserId(RequestHelper.GetCurrentUserId());
            if (!string.IsNullOrEmpty(pointGroup))
                return
                (from x in tools
                 where (x.MenuCode == menuCode) && (x.Group.Split(',').Contains(pointGroup)
                 //where (x.point_group.Split(',').Contains(pointGroup)
                 // || (pointGroup == "edit" && x.point_code == "add")
                 )
                 select x).OrderBy(x => x.Seq).ToList();
            else
                return
                (from x in tools
                     //where x.menu_code == menuCode
                 select x).OrderBy(x => x.Seq).ToList();
        }

        [HttpGet]
        public virtual ConfigModel GridConfig(string pointGroup = null)
        {
            var fullNameArr = this.GetType().BaseType.FullName.Split('.');
            var query = string.Format("/{0}/{1}/list", fullNameArr[fullNameArr.Length - 2], fullNameArr[fullNameArr.Length - 1].Replace("Controller", ""));

            List<string> keyFields = new List<string>();
            foreach (var p in typeof(T).GetProperties())
            {
                if (p.GetCustomAttributes(typeof(PK), false).Any())
                {
                    keyFields.Add(p.Name);
                }
            }

            return new ConfigModel
            {
                urls = new
                {
                    query = query
                },
                keyField = string.Join(",", keyFields.ToArray()),
                common = new
                {
                    tools = Tools(string.IsNullOrEmpty(pointGroup) ? "index" : pointGroup)
                }
            };

        }

        [HttpGet]
        public virtual ConfigModel EditConfig([FromUri] string[] values, string pointGroup = "edit")
        {
            var master = Master(values);
            List<string> keyFields = new List<string>();
            foreach (var p in typeof(T).GetProperties())
            {
                if (p.GetCustomAttributes(typeof(PK), false) != null)
                {
                    keyFields.Add(p.Name);
                }
            }

            return new ConfigModel
            {
                form = master,
                keyField = string.Join(",", keyFields.ToArray()),
                defaultForm = (T)Activator.CreateInstance(typeof(T)),
                common = new
                {
                    tools = Tools(pointGroup)
                },
                isEditing = master != null
            };
        }
    }
}
