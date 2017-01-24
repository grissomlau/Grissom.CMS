/*============================
 * 该文件由模板生成，请不要修改
 =============================*/
using System;
namespace Model
{
    /// <summary>
    /// 评分 
    /// </summary>    
    public partial class VideoMark
    {
        /// <summary>
        /// 
        /// </summary>

		[PK]
		public long Id { get; set; }
    
        /// <summary>
        /// 视频id
        /// </summary>
        public long VideoId { get; set; }
    
        /// <summary>
        /// 分数
        /// </summary>
        public int Mark { get; set; }
    
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
    }
}
