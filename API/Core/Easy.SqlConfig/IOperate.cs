using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Easy.SqlConfiguration
{
    public interface IOperate
    {
        bool DeleteAnyway { get; set; }
        List<Field> Fields { get; set; }
        Where Where { get; set; }
    }
}
