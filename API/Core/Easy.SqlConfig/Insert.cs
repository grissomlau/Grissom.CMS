using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Easy.SqlConfiguration
{
    public class Insert : IOperate
    {
        public Insert() {
            this.Fields = new List<Field>();
            this.Where = new Where();
        }

        /// <summary>
        /// 执行插入操作前是否删除所有行， 默认 false , 执行批处理时有效；
        /// </summary>
        public bool DeleteAnyway { get; set; }
        /// <summary>
        /// 需要插入或需要忽略的字段，
        /// 如果指定了 IsIgnore=false， 则只是插入当前配置了 IsIgnore=false 的字段
        /// 否则如果指定了 IsIgnore=true， 则会忽略该字段
        /// </summary>
        public List<Field> Fields { get; set; }
        /// <summary>
        /// 不会用到
        /// </summary>
        public Where Where { get; set; }
    }
}
