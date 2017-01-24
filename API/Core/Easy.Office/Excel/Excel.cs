using Easy.SqlConfiguration;
using NPOI.HSSF.UserModel;
using NPOI.SS.UserModel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace Easy.Office
{
    public class Excel
    {
        public static string Export(List<dynamic> data, List<Field> exportFields, string excelFullName)
        {
            HSSFWorkbook wb = new HSSFWorkbook();
            var sheet = wb.CreateSheet("Sheet1");
            int indexRow = 0;
            int indexCol = 0;

            var row = sheet.CreateRow(indexRow++);
            for (int i = 0; i < exportFields.Count; ++i)
            {
               
                    string colName = "";
                    colName = exportFields[i].Name;
                    row.CreateCell(indexCol);
                    row.Cells[indexCol].SetCellValue(colName);
                    int width = exportFields[i].Width > 0 ? exportFields[i].Width * 256 : colName.Length * 256 + 100;
                    sheet.SetColumnWidth(indexCol, width > 2560 ? width : 2560);
                    indexCol++;
            }

            data.ForEach(x =>
            {
                indexCol = 0;
                var dr = sheet.CreateRow(indexRow++);

                IDictionary<string, object> idc = x as IDictionary<string, object>;
                foreach (var field in exportFields)
                {
                    object value;
                    if (idc.TryGetValue(field.DbName, out value))
                    {
                        dr.CreateCell(indexCol);
                        var val = TranKeyToValue(field.KeyValueStr, value);
                        switch (field.DataType)
                        {
                            case "int":
                            case "decimal":
                            case "double":
                                double outValue = 0;
                                if (double.TryParse(val + "", out outValue))
                                {
                                    dr.Cells[indexCol].SetCellValue(outValue);
                                }
                                else
                                {
                                    dr.Cells[indexCol].SetCellValue(val + "");
                                }
                                break;
                            default:
                                dr.Cells[indexCol].SetCellValue(val + "");
                                break;
                        }
                        indexCol++;
                    }
                }
            });
            using (FileStream file = new FileStream(excelFullName, FileMode.Create))
            {
                wb.Write(file);
            }
            return excelFullName;
        }

        public static object TranKeyToValue(string dataStr, object value)
        {
            object newValue = value;
            string valueStr = value + "";

            if (!string.IsNullOrEmpty(dataStr) && !string.IsNullOrEmpty(valueStr))
            {
                if (!dataStr.StartsWith(",")) dataStr = "," + dataStr;
                if (!dataStr.EndsWith(",")) dataStr += ",";
                var patten = string.Format(",{0}:[^:,]*,", valueStr);
                Regex reg = new Regex(patten, RegexOptions.IgnoreCase);
                var match = reg.Match(dataStr);
                if (match != null && match.Success)
                {
                    newValue = match.Value.Split(':')[1].TrimEnd(',');
                }
            }
            return newValue;
        }

        /// <summary>
        /// import excel data
        /// </summary>
        /// <param name="exportFields"></param>
        /// <param name="excelFullName"></param>
        /// <returns>can be import rows</returns>
        public static List<ImportRow> Import(List<Field> importFields, string excelFullName, Action<ImportRow, Field, Field> action = null)
        {
            string extension = Path.GetExtension(excelFullName);
            if (string.IsNullOrEmpty(extension) || (extension.Trim() != ".xls" && extension.Trim() != ".xlsx"))
            {
                throw new Exception("__fileNotExcel");
            }
            if (!File.Exists(excelFullName))
            {
                throw new FileNotFoundException("__fileNotExists");
            }
            if (!importFields.Any(x => x.IsPk))
            {
                throw new Exception("__primaryKeyNotExists");
            }
            IWorkbook wb = null;
            using (FileStream fs = new FileStream(excelFullName, FileMode.Open))
            {
                //if(extension.Trim() == ".xls")
                //wb = new HSSFWorkbook(fs);
                //else 
                wb = WorkbookFactory.Create(fs);
            }
            var sheet = wb.GetSheetAt(0);
            var headerRow = sheet.GetRow(0);
            if (headerRow == null)
            {
                throw new Exception("__wrongFormat");
            }
            //importFields.ForEach(x => x.CellIndex = -1);
            for (var i = 0; i < headerRow.LastCellNum; ++i)
            {

                var field = importFields.FirstOrDefault(x => x.Name == headerRow.GetCell(i).ToString());
                if (field == null)
                    continue;
                field.CellIndex = i;

            }
            if (importFields.Any(x => x.IsPk && x.CellIndex == -1))
            {
                throw new Exception("__wrongFormat");
            }
            //failedRowNums = new List<int>();
            List<ImportRow> retList = new List<ImportRow>();

            for (var i = 1; i <= sheet.LastRowNum; ++i)
            {
                var row = sheet.GetRow(i);
                var fieldRow = new ImportRow();
                fieldRow.ExcelRowNum = row.RowNum;
                bool canContinue = true;
                foreach (var field in importFields.Where(x => x.CellIndex > -1))
                {
                    var cell = row.GetCell(field.CellIndex);
                    string cellValue = (cell + "").ToString().Trim();
                    /*if ((string.IsNullOrEmpty(cellValue) && field.IsPk)) {
                        failedRowNums.Add(row.RowNum);
                        canContinue = false;
                        break;
                    }*/

                    var newField = new Field();
                    newField.IsPk = field.IsPk;
                    newField.DbName = field.DbName;
                    newField.Name = field.Name;
                    newField.Value = (cell + "").Trim();
                    newField.IsMandatory = field.IsMandatory;
                    if (action != null)
                        action(fieldRow, field, newField);

                    fieldRow.Fields.Add(newField);
                }
                if (!canContinue)
                    continue;

                retList.Add(fieldRow);
            }
            return retList;
        }
    }
}
