
using System;
using System.Collections.Generic;
using System.Linq;
using Model;
using Easy.DataProxy;

namespace Services
{
    /// <summary>
    /// 评分 
    /// </summary>    
    public partial class VideoMarkService : BaseService<VideoMark>
    {
        public static List<VideoMark> GetByMainId(string mainId)
        {
            var sql = @"
Select mark.*,owner.Name as _OwnerName
From VideoMark mark
Join BasOwner owner on owner.Id = mark.OwnerId
Where mark.MainId = @mainId
";
            return DbHelper.GetModels<VideoMark>(sql, new DbField("mainId", mainId));
        }


    }
}
