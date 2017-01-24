using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml.Serialization;

namespace Easy.SqlConfiguration
{
    public class Export
    {
        public Export() {
            Fields = new List<Field>();
        }
        /// <summary>
        /// 导出的表名
        /// </summary>
        public string FileName { get; set; }
        /// <summary>
        /// 需要导出的字段
        /// </summary>
        public List<Field> Fields { get; set; }
    }
}
