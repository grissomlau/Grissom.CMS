using Castle.DynamicProxy;
using ILogger;
using Model;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApi
{
    /// <summary>
    /// 日志模块的横向切入实现类
    /// </summary>
    public class LogInterceptor : IInterceptor
    {
        ILogger.ILogHandle _logger;
        public LogInterceptor(ILogger.ILogHandle logger)
        {
            _logger = logger;
        }
        public LogInterceptor()
        {
        }

        public void Intercept(IInvocation invocation)
        {
            try
            {
                invocation.Proceed();
            }
            catch (Exception ex)
            {
                _logger.LogException(ex);
                if (ex is UniqueException)
                {
                    invocation.ReturnValue = MsgModel<dynamic>.Failure(ex.Message);
                }
                else
                {
                    throw;
                }
            }

        }
    }
}
