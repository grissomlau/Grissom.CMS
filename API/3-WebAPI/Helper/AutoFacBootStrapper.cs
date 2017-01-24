using Autofac;
using Autofac.Extras.DynamicProxy2;
using Autofac.Integration.WebApi;
using WebApi;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using Autofac.Core;

namespace WebApi
{
    /// <summary>
    /// 用autofac 实现 ioc
    /// </summary>
    public class AutoFacManager
    {
        private static IContainer _container { get; set; }

        public static void AutoFacAllInit()
        {
            var builder = new ContainerBuilder();
            HttpConfiguration config = GlobalConfiguration.Configuration;

            SetupResolveRules(builder);

            //api横向切入日志功能
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly())
                .PropertiesAutowired()
                .EnableClassInterceptors(new Castle.DynamicProxy.ProxyGenerationOptions(new ProxyGenerationHook()))
                .InterceptedBy(typeof(LogInterceptor));
            var log = new LogInterceptor();
            builder.Register(x => log);
            _container = builder.Build();

            //注册api容器需要使用HttpConfiguration对象
            config.DependencyResolver = new AutofacWebApiDependencyResolver(_container);

            var logger = _container.Resolve<ILogger.ILogHandle>();
            log = new LogInterceptor(logger);
            builder.Register(x => log);

        }

        private static void SetupResolveRules(ContainerBuilder builder)
        {
            var iLogger = Assembly.Load("ILogger");
            var log4netLogger = Assembly.Load("Log4netLogger");
            //根据名称约定（日志处理层的接口和实现均以LogHandle结尾），实现日志处理接口和日志实现的依赖
            builder.RegisterAssemblyTypes(iLogger, log4netLogger)
              .Where(t => t.Name.EndsWith("LogHandle"))
              .AsImplementedInterfaces();

            var services = Assembly.Load("Services");
            builder.RegisterAssemblyTypes(services).Where(x => x.Name.EndsWith("Service")).AsSelf();
        }

        public static T Resolve<T>() where T : class
        {
            using (var scope = _container.BeginLifetimeScope())
            {
                return scope.Resolve<T>();
            }
        }
    }
}
