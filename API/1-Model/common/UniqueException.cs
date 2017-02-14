using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Model
{
    public class UniqueException : Exception
    {
        public UniqueException(string msg) : base(msg)
        {

        }
    }
}
