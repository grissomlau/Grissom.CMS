using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Easy.DataProxy
{
    public class DbField
    {
        public DbField() {
        }

        public DbField(string name, object value = null) {
            this.Name = name;
            this.Value = value;
        }

        public string Name { get; set; }

        private string _dbName = "";
        public string DbName {
            get {
                if (string.IsNullOrEmpty(_dbName))
                    _dbName = Name;
                return _dbName;
            }
            set {
                _dbName = value;
            }
        }

        private string _paramName;
        /// <summary>
        /// paramName 不要带 @ 前缀
        /// </summary>
        public string ParamName {
            get {
                if (string.IsNullOrEmpty(_paramName))
                    _paramName = Name;
                return _paramName;
            }
            set {
                _paramName = value;
            }
        }

        private object _value;
        public object Value {
            get {
                //if (string.IsNullOrEmpty(_value + "") && this.DependencyField != null)
                if (this.DependencyField != null)
                    _value = this.DependencyField.Value;
                return _value;
            }
            set {
                _value = value;
            }
        }

        public bool IsId { get; set; }
        public bool IsPk { get; set; }
        public bool IsUnique { get; set; }
        public bool IsUniqueAllowEmpty { get; set; }
        public bool OnlyParam { get; set; }
        public bool IsOut { get; set; }
        public DbField DependencyField { get; set; }
        public LogicalKeyType LogicalKey { get; set; }

        private int _size = 4;
        /// <summary>
        /// 当是存储过程的 output 参数时，要指定 size
        /// </summary>
        public int Size {
            get {
                return _size;
            }
            set {
                _size = value;
            }
        }

    }
}
