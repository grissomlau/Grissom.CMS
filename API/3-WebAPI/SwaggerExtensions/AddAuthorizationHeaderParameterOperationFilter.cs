using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.Http.Filters;
using Swashbuckle.Swagger;

namespace WebApi.SwaggerExtensions
{
    /// <summary>
    /// 添加授权认证请求头参数操作过滤
    /// </summary>
    public class AddAuthorizationHeaderParameterOperationFilter:IOperationFilter
    {
        public void Apply(Operation operation, SchemaRegistry schemaRegistry, ApiDescription apiDescription)
        {
            var filtetPipeline = apiDescription.ActionDescriptor.GetFilterPipeline();
            var isAuthorized =
                filtetPipeline.Select(filterInfo => filterInfo.Instance).Any(filter => filter is IAuthorizationFilter);

            var allowAnonymous = apiDescription.ActionDescriptor.GetCustomAttributes<AllowAnonymousAttribute>().Any();

            if (isAuthorized && !allowAnonymous)
            {
                operation.parameters.Add(new Parameter
                {
                    name = "Authorization",
                    @in="header",
                    description = "访问令牌",
                    required = true,
                    type = "string",
                    @default = "Bearer "
                });
            }
        }
    }
}