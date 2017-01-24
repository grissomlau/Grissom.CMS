using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Easy.SqlConfiguration
{
    public class Update : IOperate
    {
        public Update() {
            this.Where = new Where();
            this.Fields = new List<Field>();
        }

        /// <summary>
        /// 执行插入操作前是否删除所有行， 默认 false , 执行批处理时有效；
        /// </summary>
        public bool DeleteAnyway { get; set; }
        /// <summary>
        /// 需要更新的字段
        /// </summary>
        public List<Field> Fields { get; set; }
        /// <summary>
        /// 更新的条件
        /// </summary>
        public Where Where { get; set; }
    }
}
