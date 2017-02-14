using Model;
using Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi.APIs.Video
{
    public class MainController : BaseApiController<VideoMain>
    {

        [HttpGet]
        public List<VideoMark> Marks(string video)
        {
            return VideoMarkService.GetByMainId(video);
        }

        [HttpGet]
        public List<VideoComment> Comments(string video)
        {
            return VideoCommentService.GetByMainId(video);
        }

        [HttpGet]
        public List<VideoCommentUpdown> UpDowns(string comment)
        {
            return VideoCommentUpdownService.GetByCommentId(comment);
        }
    }
}
