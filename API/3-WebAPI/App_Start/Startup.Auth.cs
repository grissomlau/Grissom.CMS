using System;
using System.Configuration;
using Microsoft.AspNet.Identity;
using Microsoft.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.DataHandler.Encoder;
using Microsoft.Owin.Security.OAuth;
using Owin;
using Microsoft.Owin.Security.Jwt;

namespace WebApi
{
    public partial class Startup
    {
        public void ConfigureAuth(IAppBuilder app)
        {

            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);

            var issuer = ConfigurationManager.AppSettings["issuer"];
            var secret = TextEncodings.Base64Url.Decode(Convert.ToBase64String(System.Text.Encoding.Default.GetBytes(ConfigurationManager.AppSettings["secret"])));

            app.UseJwtBearerAuthentication(new JwtBearerAuthenticationOptions
            {
                AuthenticationMode = AuthenticationMode.Active,
                AllowedAudiences = new[] { "Any" },
                IssuerSecurityTokenProviders = new IIssuerSecurityTokenProvider[]
    {
        new SymmetricKeyIssuerSecurityTokenProvider(issuer, secret)
    }
            });

            app.UseOAuthAuthorizationServer(new OAuthAuthorizationServerOptions
            {
                //生产环境设为false
                AllowInsecureHttp = true,
                //请求token的路径
                TokenEndpointPath = new PathString("/oauth2/token"),
                AccessTokenExpireTimeSpan = TimeSpan.FromDays(30),
                //请求获取token时，验证username, password
                Provider = new CustomOAuthProvider(),
                //定义token信息格式 
                AccessTokenFormat = new CustomJwtFormat(issuer, secret),
            });
        }
    }

}
