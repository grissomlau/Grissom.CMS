using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Controllers;
using System.Collections.Specialized;
using System.Threading.Tasks;

namespace WebApi
{
    public class NameValueCollectioinParameterBinding : HttpParameterBinding
    {
        private struct AsyncVoid
        {
        }

        public NameValueCollectioinParameterBinding(HttpParameterDescriptor desc)
            : base(desc) {
        }

        public override System.Threading.Tasks.Task ExecuteBindingAsync(System.Web.Http.Metadata.ModelMetadataProvider metadataProvider, HttpActionContext actionContext, System.Threading.CancellationToken cancellationToken) {
            var request = System.Web.HttpUtility.ParseQueryString(actionContext.Request.RequestUri.Query);
            SetValue(actionContext, new NameValueCollection(request));

            TaskCompletionSource<AsyncVoid> tcs = new TaskCompletionSource<AsyncVoid>();
            tcs.SetResult(default(AsyncVoid));
            return tcs.Task;
        }
    }
}
