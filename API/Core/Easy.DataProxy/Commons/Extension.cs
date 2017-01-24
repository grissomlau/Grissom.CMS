using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Easy.DataProxy
{
    internal static class Extension
    {
        /// <summary>
        /// 是否以指定字符串数组中的值为字符串的开头
        /// </summary>
        /// <param name="str">string</param>
        /// <param name="startWithArr">start with array</param>
        /// <returns></returns>
        public static bool StartsWith(this string str, string[] startWithArr)
        {
            bool startWith = false;
            if (startWithArr.Length > 0)
            {
                foreach (string s in startWithArr)
                {
                    startWith = str.StartsWith(s, StringComparison.InvariantCultureIgnoreCase);
                    if (startWith)
                    {
                        return startWith;
                    }
                }
            }
            return startWith;
        }
    }
}
