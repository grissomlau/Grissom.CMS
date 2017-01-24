using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml.Serialization;

namespace Easy.SqlConfiguration
{
    public class Delete : IOperate
    {
        public Delete() {
            Fields = new List<Field>();
            Where = new Where();
            DeleteAnyway = true;
        }

        /// <summary>
        /// 删除时，是否进行物理删除
        /// </summary>
        public bool DeleteAnyway { get; set; }
        /// <summary>
        /// 删除的条件
        /// </summary>
        public Where Where { get; set; }
        /// <summary>
        /// 不会用到
        /// </summary>
        public List<Field> Fields { get; set; }
    }
}
