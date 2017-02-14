
using System;
using System.Collections.Generic;
using System.Linq;
using Model;
using Easy.DataProxy;

namespace Services
{
    /// <summary>
    /// 视频评论 
    /// </summary>    
    public partial class VideoCommentService : BaseService<VideoComment>
    {

        public static List<VideoComment> GetByMainId(string mainId)
        {
            var sql = @"
Select comment.*,owner.Name as _OwnerName
From VideoComment comment
Join BasOwner owner on owner.Id = comment.OwnerId
Where comment.MainId = @mainId
";
            return DbHelper.GetModels<VideoComment>(sql, new DbField("mainId", mainId));
        }

    }
}
