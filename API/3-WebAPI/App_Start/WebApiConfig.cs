using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Dispatcher;
using System.Web.Routing;

namespace WebApi
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API 配置和服务

            // Web API 路由
            config.MapHttpAttributeRoutes();

            //config.Routes.MapHttpRoute(
            //    name: "DefaultApi",
            //    routeTemplate: "api/{controller}/{id}",
            //    defaults: new { id = RouteParameter.Optional }
            //);


            // 要注册的 api 前缀链表
            //List<string> areaNames = new List<string>
            //{
            //    "sys",
            //    "bas",
            //};


            //areaNames.ForEach(x =>
            //{
            //    config.Routes.MapHttpRoute(
            //               name: x + "Api",
            //              routeTemplate: "api/" + x + "/{controller}/{id}",
            //              defaults: new
            //              {
            //                  action = RouteParameter.Optional,
            //                  id = RouteParameter.Optional,
            //                  namespaceName = new string[] { string.Format("WebApi.{0}", x) }
            //              });
            //});
            // Register default route
            //config.Routes.MapHttpRoute(
            //    name: "DefaultApi",
            //    routeTemplate: "api/{namespace}/{controller}/{id}/{action}",
            //    defaults: new { id = RouteParameter.Optional, action= "DefaultAction" }
            //);
            //  config.Routes.MapHttpRoute(
            //     "DefaultApi",
            //     "api/{namespace}/{controller}/{action}/{id}",
            //     new
            //     {
            //         action = "get",
            //         id = RouteParameter.Optional
            //     }
            //);

            // Map this rule first

            config.Routes.MapHttpRoute(
               name: "DefaultApi",
               routeTemplate: "{namespace}/{controller}/{id}",
               defaults: new { action = "DefaultAction" },
                constraints: new
                {
                    id = @"\d"
                }
           );
            config.Routes.MapHttpRoute(
                name: "DefaultApi1",
                routeTemplate: "{namespace}/{controller}/{action}/{id}",
                defaults: new
                {
                },
                constraints: new{
                    id = @"\d"
                }
            );
            config.Routes.MapHttpRoute(
                name: "DefaultApi2",
                
                routeTemplate: "{namespace}/{controller}/{action}/{id}",
                defaults: new {
                    action = "DefaultAction",
                    id = System.Web.Http.RouteParameter.Optional
                }
            );

            //    config.Routes.MapHttpRoute(
            //    name: "DefaultApi1",
            //    routeTemplate: "api/{namespace}/{controller}/{id}/{action}",
            //    defaults: new {id=RouteParameter.Optional, action = "DefaultAction"}
            //);
            config.ParameterBindingRules.Insert(0, param =>
            {
                if (param.ParameterType == typeof(JObject))
                {
                    return new JObjectWrapperParameterBinding(param);
                }
                else if (param.ParameterType == typeof(NameValueCollection))
                {
                    return new NameValueCollectioinParameterBinding(param);
                }
                else if (param.ParameterType == typeof(DataProxyHelper<NameValueCollection>))
                {
                    return new ProxyHelperForNVCParameterBinding(param);
                }
                return null;
            });


            config.Services.Replace(typeof(IHttpControllerSelector), new NamespaceHttpControllerSelector(config));


            //var cors = new EnableCorsAttribute("*", "*", "*");
            //config.EnableCors(cors);
            //config.MessageHandlers.Add(new CorsHandler());

        }

    }
}
