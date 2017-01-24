using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Easy.SqlConfiguration
{
    public class BillCodeRule
    {
        public BillCodeRule() {
            this.Where = new Where();
        }

        /// <summary>
        /// 自动生成编码时的条件, 如果不满足该条件则不会进行自动生成
        /// </summary>
        public Where Where { get; set; }
    }
}
