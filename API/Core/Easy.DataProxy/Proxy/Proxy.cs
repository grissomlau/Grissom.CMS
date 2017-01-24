using Easy.SqlConfiguration;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Text;

namespace Easy.DataProxy
{
    public class Proxy
    {

        public ProxyData Data { get; private set; }

        public Proxy() {
            this.Data = new ProxyData();
        }

        public Proxy(ProxyData data) {
            this.Data = data;
        }

        public Proxy(string systemUserId) {
            this.Data = new ProxyData() {
                SystemUserId = systemUserId
            };
        }

        public Proxy(string systemUserId, DateTime systemDateTime, string dateFormat, string culture) {
            this.Data = new ProxyData() {
                SystemUserId = systemUserId,
                SystemDateTime = systemDateTime,
                DateFormat = dateFormat,
                Culture = culture
            };
        }

        public TReturn ToBuilders<T, TReturn>(IStrategy<T> strategy, SqlConfig setting, T rawData) where TReturn : class {
            return strategy.GetBuilder<TReturn>(this.Data, setting, rawData);
        }

        public ISelectBuilder ToSelectBuilder<T>(SqlConfig setting, T rawData, OperateType ot = OperateType.MutipleSelect) {
            return this.ToBuilders<T, ISelectBuilder>(new SelectStrategy<T>(ot), setting, rawData);
        }

        public List<IDbBuilder> ToDbBuilders<T>(SqlConfig setting, T rawData) where T : JObject {
            return this.ToBuilders<JObject, List<IDbBuilder>>(new DbStrategy(), setting, rawData);
        }

        public static IDbBuilder GetDbBuilderInstance() {
            return new DbBuilder(null);
        }

        public static ISelectBuilder GetSelectBuilderInstance() {
            return new SelectBuilder();
        }

    }
}
