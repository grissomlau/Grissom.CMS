using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Easy.SqlConfiguration
{
    public class SingleQuery
    {
        public SingleQuery() {
            this.Where = new Where();
        }

        public string Select { get; set; }
        public string From { get; set; }
        public Where Where { get; set; }
    }
}
