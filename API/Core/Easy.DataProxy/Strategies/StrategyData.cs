using Easy.SqlConfiguration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Easy.DataProxy
{
    public class StrategyData<T>
    {
        public ProxyData ProxyData { get; private set; }
        public T RawData { get; set; }
        public SqlConfig Setting { get; set; }
        public ICParser CParser { get; set; }

        public StrategyData(ProxyData proxyData, SqlConfig setting, T rawData) {
            this.ProxyData = proxyData;
            this.RawData = rawData;
            this.Setting = setting;
        }
    }
}
