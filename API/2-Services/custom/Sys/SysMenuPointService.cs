
using System;
using System.Collections.Generic;
using System.Linq;
using Model;
using EasyJsonToSql;

namespace Services
{
    /// <summary>
    /// 菜单按钮 
    /// </summary>    
    public partial class SysMenuPointService : BaseService<SysMenuPoint>
    {
        public static List<SysMenuPoint> GetByUserId(long userId)
        {
            var user = new SysUserService().GetModel("Id", userId + "");

            var sql = @"
Select point.*
From SysMenuPoint point
Join SysRoleMenuPoint rolePoint On rolePoint.MenuCode = point.MenuCode And rolePoint.PointCode = point.Code
Join SysUserRole userRole On userRole.RoleId =  rolePoint.RoleId
Where userRole.UserId = @userId;
";

            if (user != null && user.Account == "admin")
            {
                sql = @"
Select *
From SysMenuPoint
";

            }

            return DbHelper.GetModels<SysMenuPoint>(sql, new DbField("userId", userId));
        }

        public static List<SysMenuPoint> GetByMenuCode(string menuCode)
        {
            var sql = @"
Select *
From SysMenuPoint 
Where  MenuCode = @MenuCode
";
            return DbHelper.GetModels<SysMenuPoint>(sql, new DbField("MenuCode", menuCode));
        }
    }
}
