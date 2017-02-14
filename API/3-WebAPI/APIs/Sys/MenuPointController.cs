using Model;
using Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi.APIs.Sys
{
    public class MenuPointController : BaseApiController<SysMenuPoint>
    {
     
        [HttpGet]
        public List<SysMenuPoint> ListByMenu(string menu)
        {
            return SysMenuPointService.GetByMenuCode(menu);
        }
    }
}
