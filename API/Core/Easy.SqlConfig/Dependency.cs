using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Easy.SqlConfiguration
{
    public class Dependency
    {
        public Dependency() {
            Fields = new List<Field>();
        }
        /// <summary>
        /// 依赖的字段
        /// </summary>
        public List<Field> Fields { get; set; }
    }
}
