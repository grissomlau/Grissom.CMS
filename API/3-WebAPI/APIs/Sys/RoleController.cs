using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Security;
using Services;
using EasyJsonToSql;

namespace WebApi.APIs.Sys
{
    public class RoleController : BaseApiController<SysRole>
    {
        [HttpGet]
        public List<SysUser> SelectedUser(string role)
        {
            return SysRoleService.GetSelectedUser(role);
        }
        [HttpGet]
        public List<SysUser> UnSelectedUser(string role)
        {
            return SysRoleService.GetUnSelectedUser(role);
        }

        [HttpGet]
        public List<dynamic> MenuRights(string role)
        {
            return SysRoleService.GetRoleRightMenu(role);
        }
    }
}
