using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml.Serialization;

namespace Easy.SqlConfiguration
{
    public class Import
    {
        public Import() {
            Fields = new List<Field>();
        }

        /// <summary>
        /// 
        /// </summary>
        [XmlAttribute]
        public string FileName { get; set; }
        /// <summary>
        /// 需要导入的字段
        /// </summary>
        public List<Field> Fields { get; set; }
    }
}
