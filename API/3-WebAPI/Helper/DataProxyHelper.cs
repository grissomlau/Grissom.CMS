using Easy.DataProxy;
using Easy.SqlConfiguration;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Web;

namespace WebApi
{
    public class DataProxyHelper<T>
    {
        public Proxy Proxy { get; set; }
        public T RawData { get; set; }
        public DataProxyHelper(Proxy proxy, T data) {
            this.Proxy = proxy;
            this.RawData = data;
        }
        
        public ISelectBuilder ToSelectBuilder(SqlConfig setting, OperateType ot = OperateType.MutipleSelect) {
            return this.Proxy.ToSelectBuilder<T>(setting,this.RawData, ot);
        }

        public List<IDbBuilder> ToDbBuilder(SqlConfig setting) {
            return this.Proxy.ToDbBuilders<JObject>(setting,this.RawData as JObject);
        }
    }
}