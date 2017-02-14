/*============================
 * 该文件由模板生成，请不要修改
 =============================*/
using System;
namespace Model
{
    /// <summary>
    /// 基础用户 
    /// </summary>    
    public partial class BasOwner
    {
        /// <summary>
        /// 
        /// </summary>

		[PK]
		public long Id { get; set; }
    
        /// <summary>
        /// 拥有者名称
        /// </summary>
        public string Name { get; set; }
    
        /// <summary>
        /// 登录账号
        /// </summary>
        public string Account { get; set; }
    
        /// <summary>
        /// 登录密码
        /// </summary>
        public string Pwd { get; set; }
    
        /// <summary>
        /// 是否已删除
        /// </summary>
        public bool IsDeleted { get; set; }
    
        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime CreatedDate { get; set; }
    
        /// <summary>
        /// 更新时间
        /// </summary>
        public DateTime UpdatedDate { get; set; }
    }
}
