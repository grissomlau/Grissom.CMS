
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace WebApi
{
    public static class RequestHelper
    {
        public static dynamic GetCurrentUser()
        {
            //var userid = GetCurrentUserId();
            //var loginService = AutoFacManager.Resolve<ILoginService>();
            //return loginService.GetUserByUserId(userid);
            throw new NotImplementedException();
        }

        public static long GetCurrentUserId()
        {
            var identity = (ClaimsPrincipal)Thread.CurrentPrincipal;
            var userid = identity.Claims.Where(c => c.Type == "userid")
                    .Select(c => c.Value).SingleOrDefault();
            return Convert.ToInt64(userid);
        }

        public static string GetClientIp()
        {
            return HttpContext.Current.Request.UserHostAddress;
        }

    }
}
