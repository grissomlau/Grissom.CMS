using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml.Serialization;

namespace Easy.SqlConfiguration
{
    public partial class Field
    {
        // 优先级 SqlExpress >  Cp 
        // 如果有 paramName, 但Value 为空时，该条件不会添加到 Sql 去；

        public Field(string name = null, string value = null)
        {
            this.Name = name;
            this.Value = value;
            IgnoreEmpty = true;
            FuzzySearch = true;
            CellIndex = -1;
            IsAutoAddQuotes = true;
        }

        public Field()
        {
            IgnoreEmpty = true;
            FuzzySearch = true;
            CellIndex = -1;
        }

        [XmlAttribute]
        public string Name { get; set; }
        [XmlAttribute]
        public string ParamName { get; set; }
        private string _dbName = "";
        [XmlAttribute]
        public string DbName
        {
            get
            {
                if (string.IsNullOrEmpty(_dbName))
                {
                    if (!string.IsNullOrEmpty(Prefix))
                        _dbName = Prefix + "." + Name;
                    else
                        _dbName = Name;
                }
                return _dbName;
            }
            set
            {
                _dbName = value;
            }
        }
        [XmlAttribute]
        public string Cp { get; set; }
        // value can not be object, cause xmldoc would failed to reflect complex type
        [XmlAttribute]
        public string Value { get; set; }
        /// <summary>
        /// 只作参数传递，而是属于 sql 中的一部分
        /// </summary>
        [XmlAttribute]
        public bool OnlyParam { get; set; }
        private string _newValue;
        /// <summary>
        /// 用来保存新赋的值，因 setting 对象是 static 成员，所以每次使用它都要初始化一下，把 newValue = Value
        /// </summary>
        public string NewValue
        {
            get
            {
                if (string.IsNullOrEmpty(_newValue))
                {
                    _newValue = Value;
                }
                return _newValue;
            }
            set
            {
                _newValue = value;
            }
        }
        [XmlText]
        public string SqlExpress { get; set; }
        [XmlAttribute]
        public string DependencyName { get; set; }
        [XmlAttribute]
        public bool IsIgnore { get; set; }
        /// <summary>
        /// 查询时是否忽略未赋值的字段
        /// </summary>
        [XmlAttribute]
        public bool IgnoreEmpty { get; set; }
        [XmlAttribute]
        public bool FuzzySearch { get; set; }
        [XmlAttribute]
        public string IgnoreValue { get; set; }
        /// <summary>
        /// 查询时是否忽略 sql 语句未赋值的字段
        /// </summary>
        [XmlAttribute]
        public bool ExpressIgnoreEmpty { get; set; }
        /// <summary>
        /// 判断该条件是否为 From 中的关联 sql  条件; 
        /// eg: From sys_user A
        ///     Left Join bas_department B On A.department_code = @department
        /// 那么在 Where 中就要有 <Field Name='department' IsInFrom='true'></Field>
        /// </summary>
        [XmlAttribute]
        public bool IsInFrom { get; set; }


        [XmlAttribute]
        public bool IsInSelect { get; set; }

        [XmlAttribute]
        public bool IsUniqueIgnoreEmpty { get; set; }
        /// <summary>
        /// 字段所属的表名或表的别名， 如 A.name, name 的prefix 就是 A
        /// </summary>
        [XmlAttribute]
        public string Prefix { get; set; }
        /// <summary>
        /// 数据类型，用来处理查询时返回的 string 类型的值，主要是处理时间字符串,
        /// 如 Mon Sep 01 2014 00:00:00 GMT+0800 (China Standard Time)
        /// eg: datetime,date,int,decimal
        /// </summary>
        [XmlAttribute]
        public string DataType { get; set; }
        /// <summary>
        /// 用了 fluentdata 类库的方法进行分页查询，查询语句中调用 row_number() 生成序号时会用到 orderby 语句；
        /// 一般是用了别名的列需求指定 orderby
        /// eg: select A.staff_name +'(' + B.dep_code + ')' as _staff_name from A,B
        /// 那么  OrderBy就是 A.staff_name + '(' + B.dep_code +')' 而不是 _staff_name
        /// </summary>
        [XmlAttribute]
        public string OrderBy { get; set; }
        [XmlAttribute]
        public string RowNumberOrderBy { get; set; }

        /// <summary>
        /// 导出时，将key转成指定的value,键和值之间用冒号分隔，对之间用逗号分隔
        /// e.g.: KeyValueStr="1:是,0:否"
        /// </summary>
        [XmlAttribute]
        public string KeyValueStr { get; set; }

        /// <summary>
        /// 自动添加单引号, 在 express 中起作用
        /// </summary>
        [XmlAttribute]
        public bool IsAutoAddQuotes { get; set; }
    }

}
