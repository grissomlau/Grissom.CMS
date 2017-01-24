using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ILogger
{
    /// <summary>
    /// 日志类
    /// </summary>
    public interface ILogHandle
    {
        void LogInfo(string log, string ip = null, string userid = null);
        void LogWarn(string log, string ip, string userid = null);
        void LogError(string log, string ip = null, string userid = null);
        void LogException(Exception ex, string msg = null, string ip = null, string userid = null);
    }
}
