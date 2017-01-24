/*============================
 * 该文件由模板生成，请不要修改
 =============================*/
using System;
namespace Model
{
    /// <summary>
    /// 系统用户 
    /// </summary>    
    public partial class SysUser
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
        /// 登录名
        /// </summary>
        public string Account { get; set; }
    
        /// <summary>
        /// 登录密码
        /// </summary>
        public string Pwd { get; set; }
    
        /// <summary>
        /// 性别
        /// </summary>
        public string Gender { get; set; }
    
        /// <summary>
        /// 是否已删除
        /// </summary>
        public bool IsDeleted { get; set; }
    
        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime CreatedDate { get; set; }
    
        /// <summary>
        /// 修改时间
        /// </summary>
        public DateTime UpdatedDate { get; set; }
    }
}
