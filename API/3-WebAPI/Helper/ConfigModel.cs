using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi
{
    public class ConfigModel
    {
        /// <summary>
        /// 关键字段，如表的主键 
        ///主要作用是在列表(Index.cshtml) : 双击编辑或删除会到对应的记录获取该字段的值，并传回后台
        ///结合 sqlconfig 的配置，到数据查询出该行的数据
        /// </summary>
        public string keyField { get; set; }
        /// <summary>
        /// 在编辑页面中是主表的记录
        /// 在列表页面是用来配置搜索条件的初始值
        /// </summary>
        public dynamic form { get; set; }

        public dynamic defaultForm { get; set; }
        /// <summary>
        /// 默认的数据，如新增时， form 为 null， 则会到了defaultData 中获取它的默认值，主要是取得它的js结构
        /// e.g. 在common js 中： me.form = ko.mapping.fromJS($.extend({}, (data.form || me.defaultData.formMaster || me.defaultData.form || {}), data.otherData.form));
        /// </summary>
        public object defaultData;
        /// <summary>
        /// 是页面需要用到的 url， 当然也不一定要写在后端，url 也可直接写在前端; 
        /// 但Index页面的列表一定要配置 query url 才能取得列表数据
        /// </summary>
        public object urls;
        /// <summary>
        /// 页面初始时用到的其它一些数据源，如下拉控件的data,
        /// </summary>
        public object datasource;
        /// <summary>
        /// 共用的一些配置数据，如 菜单、工具按钮、翻译、用户
        /// </summary>
        public object common;
        /// <summary>
        /// 也是配置一些自定义的数据，
        /// 但 setting 中一个最重要的属性是 disabledFieldsInEdit 数组，数组里面的字段在页面中，如果是修改状态则变成不可编辑，
        /// 如果新增就可输入,如下面的 unit_code 是一个主键，在新增时可输入，但修改时不可编辑
        /// setting = new { disabledFieldsInEdit = new string[] { "unit_code", "premise", "premise_shortname", "unit_name", "floor" } },
        /// </summary>
        public object setting;
        /// <summary>
        /// 配置其它的一些自定义数据
        /// </summary>
        public object otherData;
        /// <summary>
        /// 视图的类型, 如 general, approval etc. 不同的项目会有不同定义，根据需要而修改; 
        /// 一般会在视图大部分相同只是部分模块会根据不同的类型显示不同的界面，这时会在界面用 mvc 的 @if(Model.viewType =='') 来判断显示
        /// </summary>
        public object viewType;
        /// <summary>
        /// 视图名字，很少用到
        /// </summary>
        public object viewName;
        /// <summary>
        /// 是否为修改状态，一个视图可能会有新增与修改状态，而在前端的 common 会根据返回的 form 是否为了null isEditing 进行修改,如果不为 null 是修改，否则是新增
        /// 而如果这些指定了值，则以这里优先
        /// </summary>
        public object isEditing;
    }
}
