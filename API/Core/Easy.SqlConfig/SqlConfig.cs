using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Easy.SqlConfiguration
{
    public class SqlConfig
    {
        public SqlConfig()
        {
            this.Where = new Where();
            this.Children = new List<SqlConfig>();
            this.OrderBy = new OrderBy();
            this.GroupBy = new GroupBy();
            this.Dependency = new Dependency();
            this.Insert = new Insert();
            this.Update = new Update();
            this.Delete = new Delete();
            this.SingleQuery = new SingleQuery();
            this.Export = new Export();
            this.Import = new Import();
            this.BillCodeRule = new BillCodeRule();
        }

        private string _settingName;
        /// <summary>
        /// 配置名称，默认和表名一致，一般不会用到，方法以后扩展,如一个配置文件出现相同的表时，用来区分不同的配置
        /// </summary>
        public string SettingName
        {
            get
            {
                if (string.IsNullOrEmpty(_settingName))
                {
                    _settingName = Table;
                }
                return _settingName;
            }
            set
            {
                _settingName = value;
            }
        }

        #region 查询配置
        /// <summary>
        /// 查询的字段
        /// </summary>
        public string Select { get; set; }
        /// <summary>
        /// 查询的表名以及关联的表名，如 left join, right join
        /// </summary>
        public string From { get; set; }
        /// <summary>
        /// 查询的条件
        /// 前端返回的查询条件，只有出现在这些配置好的字段，才会生成为了 sql 的 where 条件，
        /// 没出现的字段会被忽略
        /// </summary>
        public Where Where { get; set; }
        /// <summary>
        /// 分页时必须会乃至的排序规则
        /// </summary>
        public OrderBy OrderBy { get; set; }

        public GroupBy GroupBy { get; set; }
        /// <summary>
        /// 页码
        /// </summary>
        public int PageNumber { get; set; }
        /// <summary>
        /// 页大小
        /// </summary>
        public int PageSize { get; set; }


        #endregion 查询配置

        /// <summary>
        /// 指定该配置所属于的表
        /// </summary>
        public string Table { get; set; }

        #region 增删改配置
        /// <summary>
        /// 对应前端返回的 json 格式数据的键名
        /// e.g.: {master:{inserted:[{data:{}}]}} 中的 master 就是这里要对应的 JsonName
        /// 注意默认主表的 jsonName 是 master， 所以主表一般可省略不写, 但子表必须得指定
        /// </summary>
        public string JsonName { get; set; }
        /// <summary>
        /// 自增的字段,指定了自增的字段，在 insert 时会自动忽略该字段
        /// </summary>
        public string ID { get; set; }
        /// <summary>
        /// 主键, 在保存成功后会返回主键的值; 
        /// </summary>
        public string PKs { get; set; }
        /// <summary>
        /// 唯一值的字段，对应数据库 unique, 在 insert,update 前会判断是否已存在
        /// </summary>
        public string Uniques { get; set; }
        /// <summary>
        /// 唯一值的字段的值是否允许为空
        /// </summary>
        public string UniqueAllowEmptys { get; set; }
        /// <summary>
        /// 所属的父级配置, 在 xml 中不用指定，程序会自动分析
        /// </summary>
        public SqlConfig Parent { get; set; }
        /// <summary>
        /// 包含的子级配置, 即子表的配置，需要在 xml 中配置
        /// </summary>
        public List<SqlConfig> Children { get; set; }
        /// <summary>
        /// 依赖父表的字段
        /// </summary>
        public Dependency Dependency { get; set; }
        /// <summary>
        /// insert 的配置
        /// </summary>
        public Insert Insert { get; set; }
        /// <summary>
        /// update 的配置
        /// </summary>
        public Update Update { get; set; }
        /// <summary>
        /// delete 的配置
        /// </summary>
        public Delete Delete { get; set; }
        #endregion
        /// <summary>
        /// 单条记录查询的配置，一般用在配置列表双击弹出那条记录的获取的 sql 
        /// </summary>
        public SingleQuery SingleQuery { get; set; }
        /// <summary>
        /// 导出配置
        /// </summary>
        public Export Export { get; set; }
        /// <summary>
        /// 导入配置
        /// </summary>
        public Import Import { get; set; }
        /// <summary>
        /// 是否物理删除?
        /// </summary>
        public bool DeleteAnyway { get; set; }
        /// <summary>
        /// 表单编码的生成配置
        /// </summary>
        public BillCodeRule BillCodeRule { get; set; }



        public SqlConfig ReInit()
        {
            this.Where.Fields.ForEach(x => x.NewValue = x.Value);
            this.Delete.Where.Fields.ForEach(x => x.NewValue = x.Value);
            this.SingleQuery.Where.Fields.ForEach(x => x.NewValue = x.Value);
            this.Update.Where.Fields.ForEach(x => x.NewValue = x.Value);
            return this;
        }

        public string[] PkArr
        {
            get
            {
                if (string.IsNullOrEmpty((PKs + "").Trim()))
                    return new string[] { };
                return PKs.Trim().Split(',');
            }
        }

        public string[] UniqueArr
        {
            get
            {
                if (string.IsNullOrEmpty((Uniques + "").Trim()))
                    return new string[] { };
                return Uniques.Trim().Split(',');
            }
        }

        public string[] UniqueAllowEmptyArr
        {
            get
            {
                if (string.IsNullOrEmpty((UniqueAllowEmptys + "").Trim()))
                    return new string[] { };
                return UniqueAllowEmptys.Trim().Split(',');
            }
        }

        public SqlConfig AddChild(SqlConfig setting)
        {
            setting.Parent = this;
            if (Children == null)
                Children = new List<SqlConfig>();
            Children.Add(setting);
            return this;
        }
    }
}
