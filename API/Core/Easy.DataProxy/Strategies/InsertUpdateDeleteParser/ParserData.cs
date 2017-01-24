using Easy.SqlConfiguration;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Easy.DataProxy
{
    class ParserData
    {
        public IDbBuilder Builder { get; private set; }
        public StrategyData<JObject> StrategyData { get; private set; }
        public JObject RawData { get; private set; }

        public ParserData(StrategyData<JObject> sd, JObject rawData, SqlConfig setting, OperateType operateType, IDbBuilder parent) {
            this.StrategyData = sd;
            this.RawData = rawData;
            this.Builder = new DbBuilder(setting);
            Builder.Data.Operator = operateType;
            parent.AddChild(this.Builder);
        }
    }
}
