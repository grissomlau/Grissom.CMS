using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ILogger;
using System.Diagnostics;

namespace Log4netLogger
{
    /// <summary>
    /// log4net 日志处理类
    /// </summary>
    public class Log4netLogHandle : ILogger.ILogHandle
    {
        private static readonly log4net.ILog _loginfo = log4net.LogManager.GetLogger("loginfo");
        //private static readonly log4net.ILog _logwarn = log4net.LogManager.GetLogger("logwarn");
        private static readonly log4net.ILog _logerror = log4net.LogManager.GetLogger("logerror");

        private void Log(string log, LogTypeEnum logType = LogTypeEnum.Info)
        {
            switch (logType)
            {
                case LogTypeEnum.Info:
                    Debug.WriteLine(log);
                    if (_loginfo.IsInfoEnabled)
                    {
                        _loginfo.Info(log);
                    }
                    break;
                case LogTypeEnum.Warn:
                    Debug.WriteLine(log);
                    if (_loginfo.IsWarnEnabled)
                    {
                        _loginfo.Warn(log);
                    }
                    break;
                case LogTypeEnum.Debug:
                    Debug.WriteLine(log);
                    if (_loginfo.IsDebugEnabled)
                    {
                        _loginfo.Debug(log);
                    }
                    break;


                case LogTypeEnum.Error:
                    if (_logerror.IsErrorEnabled)
                    {
                        _loginfo.Error(log);
                    }
                    break;
                default:
                    break;
            }
        }

        private void Set(string key, string value)
        {
            log4net.MDC.Set(key, value);
        }

        public void LogInfo(string log, string ip = null, string userid = null)
        {
            Set("userid", userid);
            Set("ip", ip);
            Log(log, LogTypeEnum.Info);
        }

        public void LogWarn(string log, string ip, string userid = null)
        {
            Set("userid", userid);
            Set("ip", ip);
            Log(log, LogTypeEnum.Warn);
        }

        public void LogError(string log, string ip = null, string userid = null)
        {
            Set("userid", userid);
            Set("ip", ip);
            Log(log, LogTypeEnum.Error);
        }

        public void LogException(Exception ex, string msg, string ip = null, string userid = null)
        {
            Set("userid", userid);
            Set("ip", ip);
            if (_logerror.IsErrorEnabled)
            {
                _logerror.Error(msg,ex);
            }
        }

    }
}
