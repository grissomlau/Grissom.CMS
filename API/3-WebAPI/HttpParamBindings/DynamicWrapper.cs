using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Controllers;
using System.Collections.Specialized;
using System.Threading.Tasks;
using System.IO;
using Newtonsoft.Json.Linq;

namespace WebApi
{
    public class DynamicWrapperParameterBinding : HttpParameterBinding
    {
        private struct AsyncVoid
        {
        }

        public DynamicWrapperParameterBinding(HttpParameterDescriptor desc)
            : base(desc) {
        }

        public override System.Threading.Tasks.Task ExecuteBindingAsync(System.Web.Http.Metadata.ModelMetadataProvider metadataProvider, HttpActionContext actionContext, System.Threading.CancellationToken cancellationToken) {
            if (actionContext.Request.Method.Equals(System.Net.Http.HttpMethod.Get)) {
                var request = System.Web.HttpUtility.ParseQueryString(actionContext.Request.RequestUri.Query);
                SetValue(actionContext, new NameValueCollection(request));
            } else
                if (actionContext.Request.Method.Equals(System.Net.Http.HttpMethod.Post)) {
                    object outObj;
                    var jsonText = "";
                    if (actionContext.Request.Properties.TryGetValue("MS_HttpContext", out outObj)) {
                        var context = outObj as HttpContextWrapper;
                        context.Request.InputStream.Position = 0;
                        using (StreamReader sr = new StreamReader(context.Request.InputStream)) {
                            jsonText = sr.ReadToEnd();
                        }
                    }
                    var jobj = JObject.Parse(jsonText);
                    SetValue(actionContext, jobj);
                }

            TaskCompletionSource<AsyncVoid> tcs = new TaskCompletionSource<AsyncVoid>();
            tcs.SetResult(default(AsyncVoid));
            return tcs.Task;
        }
    }
}
