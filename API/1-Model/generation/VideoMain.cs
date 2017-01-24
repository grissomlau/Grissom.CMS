/*============================
 * 该文件由模板生成，请不要修改
 =============================*/
using System;
namespace Model
{
    /// <summary>
    /// 视频 
    /// </summary>    
    public partial class VideoMain
    {
        /// <summary>
        /// 
        /// </summary>

		[PK]
		public long Id { get; set; }
    
        /// <summary>
        /// 视频名称
        /// </summary>
        public string Name { get; set; }
    
        /// <summary>
        /// 视频描述
        /// </summary>
        public string Desc { get; set; }
    
        /// <summary>
        /// 视频地址
        /// </summary>
        public string Path { get; set; }
    
        /// <summary>
        /// 视频小图
        /// </summary>
        public string Thunbnail { get; set; }
    
        /// <summary>
        /// 总评分
        /// </summary>
        public int TotalMark { get; set; }
    
        /// <summary>
        /// 是否已删除
        /// </summary>
        public bool IsDeleted { get; set; }
    
        /// <summary>
        /// 创建人Id
        /// </summary>
        public long CreatedUserId { get; set; }
    
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
