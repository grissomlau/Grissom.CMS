using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace WebApi
{
    /// <summary>
    /// 日志帮助类
    /// </summary>
    public class LogHelper
    {

        static ILogger.ILogHandle _logger = AutoFacManager.Resolve<ILogger.ILogHandle>();
        public static void LogInfo(string value)
        {
            var userid = RequestHelper.GetCurrentUserId() + "";
            var ip = HttpContext.Current.Request.UserHostAddress;
            _logger.LogInfo(value, ip, userid);
        }
        public static void LogWarn(string value)
        {
            var userid = RequestHelper.GetCurrentUserId() + "";
            var ip = HttpContext.Current.Request.UserHostAddress;
            _logger.LogWarn(value, ip, userid);
        }
        public static void LogError(string value)
        {
            var userid = RequestHelper.GetCurrentUserId() + "";
            var ip = HttpContext.Current.Request.UserHostAddress;
            _logger.LogError(value, ip, userid);
        }
        public static void LogException(Exception ex, string msg = null)
        {
            var userid = RequestHelper.GetCurrentUserId() + "";
            var ip = HttpContext.Current.Request.UserHostAddress;
            _logger.LogException(ex, msg, ip, userid);
        }

    }
}
