/*============================
 * 该文件由模板生成，请不要修改
 =============================*/
using System;
namespace Model
{
    /// <summary>
    /// 角色 
    /// </summary>    
    public partial class SysRole
    {
        /// <summary>
        /// 
        /// </summary>

		[PK]
		public long Id { get; set; }
    
        /// <summary>
        /// 名称
        /// </summary>
        public string Name { get; set; }
    
        /// <summary>
        /// 是否已删除
        /// </summary>
        public bool IsDeleted { get; set; }
    }
}
