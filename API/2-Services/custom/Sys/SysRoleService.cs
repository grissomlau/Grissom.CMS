
using System;
using System.Collections.Generic;
using System.Linq;
using Model;
using Easy.DataProxy;

namespace Services
{
    /// <summary>
    /// 角色 
    /// </summary>    
    public partial class SysRoleService : BaseService<SysRole>
    {
        public static List<SysUser> GetSelectedUser(string roleId)
        {
            var sql = @"
select user.*
from SysUser user
Join SysUserRole userRole on userRole.UserId = user.Id
where userRole.RoleId = @roleId
";
            return DbHelper.GetModels<SysUser>(sql, new DbField("roleId", roleId));
        }

        public static List<SysUser> GetUnSelectedUser(string roleId)
        {
            var sql = @"
select user.*
from SysUser user
left Join SysUserRole userRole on userRole.UserId = user.Id and userRole.RoleId = @roleId
where userRole.UserId is null
";
            return DbHelper.GetModels<SysUser>(sql, new DbField("roleId", roleId));
        }


        public static dynamic GetRoleRightMenu(string roleid)
        {
            List<dynamic> RightMenu = new List<dynamic>();
            var sql1 = @"
select A.*, Case When ifnull(B.MenuCode,1) then 0 else 1 end as checked 
from SysMenu A 
left join SysRoleMenu B on A.Code=B.MenuCode and B.roleid=@roleid
order by A.Seq asc ";

            var sql2 = @"
select A.*, Case When ifnull(B.MenuCode,1) then 0 else 1 end as checked 
from SysMenuPoint A 
left join SysRoleMenuPoint B on A.MenuCode=B.MenuCode and A.Code=B.PointCode and B.RoleId=@roleid
order by A.Seq asc ";

            RightMenu.Add(DbHelper.GetModels<dynamic>(sql1, new DbField("roleid", roleid)));
            RightMenu.Add(DbHelper.GetModels<dynamic>(sql2, new DbField("roleid", roleid)));
            return RightMenu;
        }

    }
}
