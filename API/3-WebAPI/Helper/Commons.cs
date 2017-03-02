using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Authentication;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using Newtonsoft.Json;
using System.IO;
using System.Text;
using EasyJsonToSql;

namespace WebApi
{
    public class Commons
    {
        public static string UserId
        {
            get
            {
                return RequestHelper.GetCurrentUserId() + "";
                //return HttpContext.Current.User.Identity.Name;
            }
        }

        public static DateTime ServerDateTime
        {
            get
            {
                return DateTime.Now;
            }
        }

        public static string DateFormat
        {
            get
            {
                return System.Configuration.ConfigurationManager.AppSettings["dateFormat"];
            }
        }

        public static string Culture
        {
            get
            {
                return System.Configuration.ConfigurationManager.AppSettings["culture"];
            }
        }

        public static string HashString(string sourceString)
        {
            return FormsAuthentication.HashPasswordForStoringInConfigFile(sourceString, "md5");

        }
        public static string GetIP()
        {
            string ip;
            if (HttpContext.Current.Request.ServerVariables["HTTP_VIA"] != null)
            {
                ip = HttpContext.Current.Request.ServerVariables["HTTP_X_FORWARDED_FOR"].ToString();
            }
            else
            {
                ip = HttpContext.Current.Request.ServerVariables["REMOTE_ADDR"].ToString();
            }
            return ip;

        }

    }
}
