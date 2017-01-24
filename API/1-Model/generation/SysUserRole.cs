/*============================
 * 该文件由模板生成，请不要修改
 =============================*/
using System;
namespace Model
{
    /// <summary>
    /// 用户角色 
    /// </summary>    
    public partial class SysUserRole
    {
        /// <summary>
        /// 用户id
        /// </summary>

		[PK]
		public long UserId { get; set; }
    
        /// <summary>
        /// 角色id
        /// </summary>
        public long RoleId { get; set; }
    }
}
