using Easy.SqlConfiguration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Easy.Office
{
    public class ImportRow
    {

        public int ExcelRowNum { get; set; }

        private List<Field> _fields = new List<Field>();
        public List<Field> Fields
        {
            get { return _fields; }
            set { _fields = value; }
        }

        private bool _isCanBeImport = true;

        public bool IsCanBeImport
        {
            get { return _isCanBeImport; }
            set { _isCanBeImport = value; }
        }

        public bool IsUpdate { get; set; }
        public string Msg { get; set; }

        public string CheckMsg
        {
            get
            {
                StringBuilder sbMsg = new StringBuilder();

                sbMsg.AppendFormat("{0} {1}: ", "__rowNum", this.ExcelRowNum + "");
                if (this.IsCanBeImport && this.IsUpdate)
                {
                    sbMsg.AppendFormat(" {0},", Msg);
                }
                else if (!this.IsCanBeImport)
                {
                    sbMsg.AppendFormat(" {0},", Msg);
                }
                return (sbMsg + "").TrimEnd(',');
            }
        }

        public string ImportMsg
        {
            get
            {
                StringBuilder sbMsg = new StringBuilder();

                sbMsg.AppendFormat("{0} {1} ", "__rowNum", this.ExcelRowNum + "");
                if (this.IsCanBeImport && this.IsUpdate)
                {
                    sbMsg.AppendFormat(" {0}: {1},", "__updatedSuccessfully", Msg);
                }
                else if (!this.IsCanBeImport)
                {
                    sbMsg.AppendFormat(" {0}: {1},", "__failed", Msg);
                }
                else {
                    return "";
                }
                return (sbMsg + "").TrimEnd(',');

            }
        }
    }
}
