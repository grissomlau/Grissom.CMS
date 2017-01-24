
using System;
using System.Collections.Generic;
using System.Linq;
using Model;
using Easy.DataProxy;

namespace Services
{
    /// <summary>
    /// 菜单按钮 
    /// </summary>    
    public partial class SysMenuPointService : BaseService<SysMenuPoint>
    {
        public static List<SysMenuPoint> GetByUserId(long userId)
        {
            var sql = @"
Select point.*
From SysMenuPoint point
Join SysRoleMenuPoint rolePoint On rolePoint.MenuCode = point.MenuCode And rolePoint.PointCode = point.Code
Join SysUserRole userRole On userRole.RoleId =  rolePoint.RoleId
Where userRole.UserId = @userId;
";
            return DbHelper.GetModels<SysMenuPoint>(sql, new DbField("userId", userId));
        }


    }
}
