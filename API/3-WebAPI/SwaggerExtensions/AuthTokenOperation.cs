using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Description;
using Swashbuckle.Swagger;

namespace WebApi.SwaggerExtensions
{
    /// <summary>
    /// 认证令牌操作
    /// </summary>
    public class AuthTokenOperation:IDocumentFilter
    {
        public void Apply(SwaggerDocument swaggerDoc, SchemaRegistry schemaRegistry, IApiExplorer apiExplorer)
        {
            swaggerDoc.paths.Add("/oauth2/token", new PathItem()
            {
                post = new Operation
                {
                    tags = new List<string>() {"Auth"},
                    consumes = new List<string>()
                    {
                        "application/x-www-form-urlencoded"
                    },
                    parameters = new List<Parameter>()
                    {
                        new Parameter()
                        {
                            name = "username",
                            @in = "formData",
                            required = true,
                            type = "string"
                        },
                        new Parameter()
                        {
                            name = "password",
                            @in = "formData",
                            @default = null,
                            type = "string",
                            required = false
                        },
                        new Parameter()
                        {
                            name = "grant_type",
                            @in = "formData",
                            @default = "password",
                            required = true,
                            type = "string"
                        }
                    }
                }
            });
        }
    }
}