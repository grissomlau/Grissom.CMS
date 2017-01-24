/*============================
 * 该文件由模板生成，请不要修改
 =============================*/
using System;
namespace Model
{
    /// <summary>
    /// 系统菜单 
    /// </summary>    
    public partial class SysMenu
    {
        /// <summary>
        /// 菜单编码
        /// </summary>

		[PK]
		public string Code { get; set; }
    
        /// <summary>
        /// 父级菜单编码
        /// </summary>
        public string ParentCode { get; set; }
    
        /// <summary>
        /// 菜单名称
        /// </summary>
        public string Name { get; set; }
    
        /// <summary>
        /// 菜单链接
        /// </summary>
        public string Url { get; set; }
    
        /// <summary>
        /// 菜单排序
        /// </summary>
        public int Seq { get; set; }
    
        /// <summary>
        /// 菜单icon 样式
        /// </summary>
        public string Icon { get; set; }
    
        /// <summary>
        /// 备注
        /// </summary>
        public string Remark { get; set; }
    
        /// <summary>
        /// 是否已删除
        /// </summary>
        public bool IsDeleted { get; set; }
    }
}
