using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Controllers;
using System.Collections.Specialized;
using System.Threading.Tasks;
using EasyJsonToSql;

namespace WebApi
{
    public class ProxyHelperForNVCParameterBinding : HttpParameterBinding
    {
        private struct AsyncVoid
        {
        }

        public ProxyHelperForNVCParameterBinding(HttpParameterDescriptor desc)
            : base(desc) {
        }

        public override System.Threading.Tasks.Task ExecuteBindingAsync(System.Web.Http.Metadata.ModelMetadataProvider metadataProvider, HttpActionContext actionContext, System.Threading.CancellationToken cancellationToken) {
            var request = System.Web.HttpUtility.ParseQueryString(actionContext.Request.RequestUri.Query);
            var proxy = new Proxy(Commons.UserId, Commons.ServerDateTime, Commons.DateFormat, Commons.Culture);
            var proxyHelper = new DataProxyHelper<NameValueCollection>(proxy, new NameValueCollection(request));
            SetValue(actionContext, proxyHelper);

            TaskCompletionSource<AsyncVoid> tcs = new TaskCompletionSource<AsyncVoid>();
            tcs.SetResult(default(AsyncVoid));
            return tcs.Task;
        }
    }
}
