/*============================
 * 该文件由模板生成，请不要修改
 =============================*/
using System;
namespace Model
{
    /// <summary>
    /// 视频顶/踩 
    /// </summary>    
    public partial class VideoCommentUpdown
    {
        /// <summary>
        /// 
        /// </summary>

		[PK]
		public long Id { get; set; }
    
        /// <summary>
        /// 评论id
        /// </summary>
        public long CommentId { get; set; }
    
        /// <summary>
        /// 是否为顶
        /// </summary>
        public bool IsUp { get; set; }
    
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
