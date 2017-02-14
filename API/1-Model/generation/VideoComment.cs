/*============================
 * 该文件由模板生成，请不要修改
 =============================*/
using System;
namespace Model
{
    /// <summary>
    /// 视频评论 
    /// </summary>    
    public partial class VideoComment
    {
        /// <summary>
        /// 
        /// </summary>

		[PK]
		public long Id { get; set; }
    
        /// <summary>
        /// 视频id
        /// </summary>
        public long MainId { get; set; }
    
        /// <summary>
        /// 评论内容
        /// </summary>
        public string Comment { get; set; }
    
        /// <summary>
        /// 顶数
        /// </summary>
        public int UpCount { get; set; }
    
        /// <summary>
        /// 踩数
        /// </summary>
        public int DownCount { get; set; }
    
        /// <summary>
        /// 是否已删除
        /// </summary>
        public bool IsDeleted { get; set; }
    
        /// <summary>
        /// 拥有者Id
        /// </summary>
        public long OwnerId { get; set; }
    
        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime CreatedDate { get; set; }
    }
}
