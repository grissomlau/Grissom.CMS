
using System;
using System.Collections.Generic;
using System.Linq;
using Model;
using EasyJsonToSql;

namespace Services
{
    /// <summary>
    /// 视频顶/踩 
    /// </summary>    
    public partial class VideoCommentUpdownService : BaseService<VideoCommentUpdown>
    {
        public static List<VideoCommentUpdown> GetByCommentId(string commentId)
        {
            var sql = @"
Select updown.*,owner.Name as _OwnerName
From VideoCommentUpdown updown
Join BasOwner owner on owner.Id = updown.OwnerId
Where updown.CommentId = @commentId
";
            return DbHelper.GetModels<VideoCommentUpdown>(sql, new DbField("commentId", commentId));
        }

    }
}
