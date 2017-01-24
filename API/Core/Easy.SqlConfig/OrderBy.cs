using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml.Serialization;

namespace Easy.SqlConfiguration
{
    public class OrderBy
    {
        public OrderBy() {
            this.Fields = new List<Field>();
        }

        public string Default { get; set; }
        /// <summary>
        /// 定义字段所属的表，在分页排序时会用到， 如 A.name 中字段 name 的表别名是 A
        /// 就定义为 <Field Name="name" Prefix ="A"></Field>
        /// </summary>
        public List<Field> Fields { get; set; }
    }
}
