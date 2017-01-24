/*============================
 * 该文件由模板生成，请不要修改
 =============================*/
using System;
namespace Model
{
    /// <summary>
    /// 菜单按钮 
    /// </summary>    
    public partial class SysMenuPoint
    {
        /// <summary>
        /// 按钮编码
        /// </summary>

		[PK]
		public string Code { get; set; }
    
        /// <summary>
        /// 按钮名称
        /// </summary>
        public string Name { get; set; }
    
        /// <summary>
        /// 菜单编码
        /// </summary>
        public string MenuCode { get; set; }
    
        /// <summary>
        /// 按钮组别
        /// </summary>
        public string Group { get; set; }
    
        /// <summary>
        /// 按钮链接
        /// </summary>
        public string Url { get; set; }
    
        /// <summary>
        /// 按钮点击触发的js方法
        /// </summary>
        public string Method { get; set; }
    
        /// <summary>
        /// 按钮排序
        /// </summary>
        public int Seq { get; set; }
    
        /// <summary>
        /// 按钮样式
        /// </summary>
        public string Icon { get; set; }
    
        /// <summary>
        /// 是否隐藏
        /// </summary>
        public bool IsHidden { get; set; }
    
        /// <summary>
        /// 是否已删除
        /// </summary>
        public bool IsDeleted { get; set; }
    
        /// <summary>
        /// 窗体类型
        /// </summary>
        public string WinType { get; set; }
    }
}
