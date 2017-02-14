using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Security;
using Services;
using Easy.DataProxy;

namespace WebApi.APIs.Sys
{
    public class UserController : BaseApiController<SysUser>
    {
        [HttpGet]
        public MsgModel<List<SysMenu>> Menus()
        {
            return new MsgModel<List<SysMenu>>
            {
                Data = SysMenuService.GetMenus(),
                Status = true,
                Msg = ""
            };
        }

        protected override void BeforeEdit(List<IDbBuilder> builders)
        {
            if (builders[0].Data.Operator == OperateType.Insert)
            {
                var password = builders[0].Data.Fields.FirstOrDefault(x => x.Name == "Pwd");
                if (!string.IsNullOrWhiteSpace(password.Value + ""))
                {
                    password.Value = Commons.HashString(password.Value + "");
                }
            }
            base.BeforeEdit(builders);
        }



    }
}
