using Newtonsoft.Json.Linq;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Text;

namespace Easy.DataProxy
{
    public class ProxyData
    {
        public string SystemUserId { get; set; }
        public DateTime SystemDateTime { get; set; }
        public string FuzzySearchField = "_value";
        public string DateFormat { get; set; }
        public string Culture { get; set; }
        public string[] IgnoreColArr { get; set; }
        public string[] IgnoreColPrefixArr { get; set; }

        public ProxyData() {
            this.Culture = "en";
            this.DateFormat = "yyyy-MM-dd";
            this.IgnoreColArr = new string[] { "_isnew", "_rowState" };
            this.IgnoreColPrefixArr = new string[] { "_" };
        }
    }
}
