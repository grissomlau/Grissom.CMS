using Easy.DataProxy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class Trace
    {
        public static void WriteLine(FluentData.IDbCommand command, string sql = null, DbField[] paras = null)
        {
            var traceEnable = System.Configuration.ConfigurationManager.AppSettings["traceEnable"];
            if (traceEnable != "true")
            {
                return;
            }
            System.Diagnostics.Trace.WriteLine("===============************* Command Begin *************===============");
            System.Diagnostics.Trace.WriteLine("***** Connection：");
            System.Diagnostics.Trace.WriteLine(command.Data.InnerCommand.Connection.ConnectionString);
            System.Diagnostics.Trace.WriteLine("***** CommandType：");
            System.Diagnostics.Trace.WriteLine(command.Data.InnerCommand.CommandType);
            System.Diagnostics.Trace.WriteLine("***** T-SQL：");
            System.Diagnostics.Trace.WriteLine(sql);
            if (paras != null)
            {
                System.Diagnostics.Trace.WriteLine("***** Parameters：");
                foreach (var dbField in paras)
                {
                    System.Diagnostics.Trace.WriteLine(string.Format("@{0}：{1}", dbField.Name, dbField.Value));
                }
            }
            System.Diagnostics.Trace.WriteLine("===============************* End Command *************===============");
            System.Diagnostics.Trace.WriteLine("");
            System.Diagnostics.Trace.WriteLine("");
        }
    }
}
