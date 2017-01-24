using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml.Serialization;

namespace Easy.SqlConfiguration
{
    public partial class Field
    {
        /// <summary>
        /// 是否为主键，主要在处理数据导入时用到
        /// </summary>
        [XmlAttribute]
        public bool IsPk { get; set; }
        /// <summary>
        /// 在 excel 中的列索引，处理excel 数据导入时用到
        /// </summary> 
        [XmlAttribute]
        public int CellIndex { get; set; }
        [XmlAttribute]
        public int Width { get; set; }
        /// <summary>
        /// 查询时是否忽略未赋值的字段
        /// </summary>
        [XmlAttribute]
        public bool IsMandatory { get; set; }
        // private bool _isCheckRepeated = false;
        /// <summary>
        /// 查询时是否忽略未赋值的字段
        /// </summary>
        [XmlAttribute]
        public bool IsCheckRepeated { get; set; }
        /// <summary>
        /// 导入时判断是否为重复的
        /// </summary>
        [XmlAttribute]
        public bool IsRepeated { get; set; }
    }
}
