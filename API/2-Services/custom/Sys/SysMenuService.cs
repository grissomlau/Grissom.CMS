
using System;
using System.Collections.Generic;
using System.Linq;
using Model;
using Easy.DataProxy;
using ILogger;

namespace Services
{
    /// <summary>
    /// 系统菜单 
    /// </summary>    
    public partial class SysMenuService : BaseService<SysMenu>
    {
        public static List<SysMenu> GetMenus()
        {
            var sql = @"
Select menu.*
From SysMenu menu
Where menu.IsDeleted = 0;
";
            return DbHelper.GetModels<SysMenu>(sql);
        }

    }
}
