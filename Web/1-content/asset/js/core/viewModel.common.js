var com = com || {};
com.viewModel = com.viewModel || {};

com.viewModel.common = function (data) {
    var me = this;
    if (Object.prototype.toString.call(data) === '[object Arguments]')
        data = data[0];
    data.otherData = data.otherData || {};
    me.otherData = data.otherData || {};

    me.keyField = data.keyField;
    me.tools = data.common.tools;
    data.defaultData = data.defaultData || {};
    data.common.resx = this.resx || {};
    me.resx = data.common.resx;
    me.viewType = data.viewType;
    //me.resx.form = ko.mapping.fromJS(data.resx.form);
    me.common = data.common;
    //me.common.form = ko.mapping.fromJS(data.common.form);

    // extend from other
    me.urls = $.extend({}, data.urls, data.otherData.urls);
    me.datasource = $.extend({}, data.datasource, data.otherData.datasource);
    me.defaultData = $.extend({}, data.defaultData);
    me.form = ko.mapping.fromJS($.extend({}, data.form || data.defaultForm));
    me.setting = $.extend({}, data.setting, data.otherData.setting);
    me._formPassword = {
        old_password: ko.observable(),
        new_password: ko.observable()
    };
    me.data = data;

    me.signout = function (form) {
        //com.showComfirm("comfirm", resx.__want_to_sign_out, function (b) {
        //    if (!b) return;
        //window.location.href = '/Home/SignOut';
        //return;

        com.ajax({
            type: "GET",
            url: "/Home/SignOut",
            data: ko.toJSON(me.common.form.user),
            success: function (retJson) {
                if (retJson && retJson.status === "success") {
                    location.reload();
                } else {
                    Utils.log(retJson);
                }
            }
        });

        //});
    };


    me.__winChangePassword = {
        //title: resx['__change_password'],
        title: '修改密码',
        width: 450,
        height: 200,
        buttons: [
            {
                //text: resx.__save,
                text: '保存',
                iconCls: 'icon-save',
                handler: function () {
                    if (!me.__winChangePassword._$elem().form("validate")) {
                        me.message(me.resx.__input_required_field);
                        return false;
                    }
                    com.ajax({
                        type: 'GET',
                        data: { old_password: me._formPassword.old_password(), new_password: me._formPassword.new_password() },
                        // url: '/api/sys/user/changePassword/',
                        url: '/api/bas/user/changePassword/',
                        success: function (resp, status, xhr) {
                            com.handleResp(resp, undefined, undefined, function () {
                                me.__winChangePassword._close();
                            });
                        }
                    });
                }

            },
            {
                //text: resx.__close,
                text: '关闭',
                iconCls: 'icon-close',
                handler: function () {
                    me.__winChangePassword._close();
                }
            }
        ]

    };
    me._changePwd = function () {
        me.__winChangePassword._open();
    }


    me.init = function () {
        /*if (top != window) {
        top.window.location = window.location;
        }
        */

        //$(document).ready(function () {
        if (me.common.menus) {
            //me.loadNavMenus(me.common.menus);
            me.loadMenus(me.common.menus);
            var mainHeaderHeight = 0;
            var $mainHeader = $("#mainHeader")[0];
            if ($mainHeader) {
                mainHeaderHeight = $("#mainHeader")[0].scrollHeight;
                $('#mainContainer').height($('body').height() - mainHeaderHeight);
                $(".easyui-uc_layout").uc_layout('resize');
            }


            var $content = $('.quicklinks .dropdown .dropdown_content');
            $('.quicklinks .dropdown a:first').click(function () {
                $content.slideToggle(200);
                if ($content.css('display') === 'block') {
                    $('.quicklinks .dropdown').css('background-color', '#0078B1');
                } else {
                    $('.quicklinks .dropdown').css('background-color', 'white');
                }
                //$('.quicklinks .dropdown .dropdown_content').css("display", "block");
            });
            $('.quicklinks').mouseleave(function () {
                $content.css('display', 'none');
                $('.quicklinks .dropdown').css('background-color', 'white');
            });
        }

        me.loadTools(me.common.tools);
        //});
    }

    me.loadMenus = function (menus) {
        var parents = $.grep(menus, function (menu, index) {
            return !menu.ParentCode;
        });
        $.each(parents, function (index, menu) {
            var ul = document.createElement("ul");
            ul.style.padding = '8px';
            ul.className = 'easyui-tree';
            $("#menu").accordion("add", { title: menu.Name, content: ul,selected:false });
            var json = getChildren(menus, menu.Code);
            $(ul).tree({ data: json });

            $(ul).tree({
                onSelect: function (node) {
                    addTab(node.text, node.attributes.url);
                }
            });
        });
    };

    me.loadNavMenus = function (menus) {
        var parents = $.grep(menus, function (menu, index) {
            return !menu.ParentCode;
        });
        var menuHtml = '';
        $.each(parents, function (index, menu) {
            //<a href="javascript:void(0)" class="easyui-menubutton" data-options="menu:'#mm',iconCls:'icon-edit'">System</a>

            var div = document.createElement("div");
            div.style.width = 150;
            div.id = "m_" + menu.Code;
            var json = me.getChildren(menus, menu.Code);

            if (!json.length) {
                menuHtml += "<li><a url='{0}' onclick='addTab(\"{1}\",\"{0}\")'>".format(menu.Url, (menu.Name || resx[menu.Code])) + (menu.Name || resx[menu.Code]) + '</a>';
            }
            else {
                menuHtml += '<li><a>' + (menu.Name || resx[menu.Code]) + '</a>' + '<i class="fa fa-caret-down"></i>';
            }

            menuHtml += "<ul>";
            $.each(json, function (idx, m) {

                if (m.children && m.children.length > 0) {
                    var childHtml = "";
                    menuHtml += "<ul>";
                    $.each(m.children, function (i, gm) {
                        menuHtml += "<li><a>" + gm.text + "</a></li>"
                        // childHtml += "<div data-options='iconCls:\"{0}\"' url='{1}' onclick='redirect(\"{2}\",\"{1}\")'>{2}</div>".format(gm.iconCls, gm.attributes.url, gm.text);
                        childHtml += "<div data-options='iconCls:\"{0}\"' url='{1}' onclick='addTab(\"{2}\",\"{1}\")'>{2}</div>".format(gm.iconCls, gm.attributes.url, gm.text);
                    });
                    menuHtml += "</ul>";

                    var html = "<div data-options='iconCls:\"{2}\"' id='m_{0}'><span>{1}</span><div style='width:150px;'>{3}</div></div>".format(m.Code, m.text, m.iconCls, childHtml);
                    $(div).append(html);
                } else {
                    //menuHtml += "<li><a url='{0}' onclick='redirect(\"{1}\",\"{0}\")'>".format(m.attributes.url, resx[m.menu_code]) + (resx[m.menu_name] || resx[m.menu_code]) + "</a></li>"
                    menuHtml += "<li><a url='{0}' onclick='addTab(\"{1}\",\"{0}\")'>".format(m.attributes.url, m.text) + m.text + "</a></li>"
                    //$(div).append("<div data-options='iconCls:\"{0}\"' url='{1}' onclick='redirect(\"{2}\",\"{1}\")'>{2}</div>".format(m.iconCls, m.attributes.url, resx[m.menu_code]));
                    $(div).append("<div data-options='iconCls:\"{0}\"' url='{1}' onclick='addTab(\"{2}\",\"{1}\")'>{2}</div>".format(m.iconCls, m.attributes.url, m.text));
                }
            });
            menuHtml += "</ul>";
            $(div).appendTo("#menu_container");
            $("#nav_menu").append("<a id='a_{0}' >{1}</a>".format(menu.Code, resx[menu.Code]));

            menuHtml += '</li>';
            /*$("#a_" + menu.menu_code).menubutton({
                iconCls: menu.icon_cls,
                plain: true,
                menu: '#m_' + menu.menu_code
            });
            */
        });
        $('#navul').html(menuHtml);
        $("#navul>li").hover(
            function () {
                clearTimeout($(this).data('t'));
                $(this).addClass("navmoon");
                var me = this;
                var t = setTimeout(function () {
                    var dHeight = $(document).height();
                    if ($(me).children('ul').height() > dHeight - 100) {
                        $(me).children('ul').height(dHeight - 100);
                    }
                    $(me).parent().find('ul').hide();
                    $(me).children('ul').slideDown('fast');
                }, 50);
                $(this).data('t', t);
            }, function () {
                clearTimeout($(this).data('t'));
                //$(this).children('ul').css('display', 'none');
                $(this).children('ul').hide();
                $(this).removeClass("navmoon");
            }
        );
        $("#navul>li").mouseleave(function () {
            $(this).children('ul').css('display', 'none');
        });

    }

    me.addTab = function (title, url) {
        //TODO:用于替换Test
        //url = url.replace("/test", "");
        var tabs = $('#tabs');

        if (tabs.tabs('exists', title)) {
            tabs.tabs('close', title);
        }
        var content = '<iframe title=\"' + title + '\" scrolling="auto" frameborder="0"  src="' + url + '" style="width:100%;height:99.5%;"></iframe>';
        tabs.tabs('add', {
            title: title,
            content: content,
            closable: true
        });
        $("#navul>li").children('ul').css('display', 'none');
    };

    me.closeTab = function (title) {
        var tabs = $('#tabs');

        if (tabs.tabs('exists', title)) {
            tabs.tabs('close', title);
        }

    };

    me.redirect = function (title, url) {
        document.location.href = url;
    };

    /*me.loadTools = function (tools, included) {
        //<a href="#" class="easyui-uc_linkbutton" data-options="plain:true,iconCls:'icon-search'"
        //      data-bind="click:search">Search</a>
        if (!me.tools) return;
        me.__tools = {};
        $("#toolbar .easyui-uc_linkbutton").remove();
        $.each(me.tools, function (idx, val) {
            if (tools && included && tools.indexOf(val.point_code) < 0) return;
            if (tools && !included && tools.indexOf(val.point_code) > -1) return;

            if (!val.is_hidden) {
                var icon = val.icon || 'icon-' + val.point_code;
                var method = val.method_name || '_' + val.point_code;
                var name = resx[val.point_name] || resx['__' + val.point_code] || val.point_name || resx[val.point_code] || val.point_code;
                var a = $('<a href="#" class="easyui-uc_linkbutton" data-options="iconCls:\'' + icon + '\'" onclick ="' + method + '(this)">' + name + '</a>').appendTo($("#toolbar"));
                a.data('data', val);
            }
            me.__tools[val.point_code] = val;
        });

        //$('<a href="#" class="easyui-uc_linkbutton" data-options="plain:true,iconCls:\'icon-refresh\'" onclick ="_refresh(this)">' + me.resx['__refresh'] + '</a>').appendTo($("#toolbar"));
        $('<a href="#" class="easyui-uc_linkbutton" data-options="iconCls:\'icon-close\'" onclick ="_close(this)">' + me.resx['__close'] + '</a>').appendTo($("#toolbar"));
        $("#toolbar .easyui-uc_linkbutton").uc_linkbutton();
    };*/

    me.loadTools = function (tools, included) {
        //<a href="#" class="easyui-uc_linkbutton" data-options="plain:true,iconCls:'icon-search'"
        //      data-bind="click:search">Search</a>
        me.tools = tools;
        if (!me.tools) return;
        me.__tools = {};
        $("#toolbar a").remove();

        $.each(me.tools, function (idx, val) {
            if (tools && included && tools.indexOf(val.Code) < 0) return;
            if (tools && !included && tools.indexOf(val.Code) > -1) return;

            if (!val.is_hidden) {
                var icon = val.icon || 'icon-' + val.Code;
                var method = val.Method || '_' + val.Code;
                var name = resx[val.Name] || resx['__' + val.Code] || val.Name || resx[val.Code] || val.Code;
                //var a = $('<a href="#" class="easyui-uc_linkbutton" data-options="iconCls:\'' + icon + '\'" onclick ="' + method + '(this)">' + name + '</a>').appendTo($("#toolbar"));
                var a = $('<a href="#" class="dh-menu-point" onclick ="' + method + '(this)"><span class="dh-point"><span class="dh-icon ' + icon + '"></span><span class="dh-text">' + name + '</span></span></a>').appendTo($("#toolbar"));
                a.data('data', val);
            }
            me.__tools[val.Code] = val;
        });

        //$('<a href="#" class="easyui-uc_linkbutton" data-options="plain:true,iconCls:\'icon-refresh\'" onclick ="_refresh(this)">' + me.resx['__refresh'] + '</a>').appendTo($("#toolbar"));
        $('<a href="#" class="dh-menu-point" data-options="iconCls:\'icon-close\'" onclick ="_close(this)"><span class="dh-point"><span class="dh-icon icon-close">&nbsp;</span><span class="dh-text">关闭</span></span></a>').appendTo($("#toolbar"));
        //$("#toolbar .easyui-uc_linkbutton").uc_linkbutton();
    };


    me.getChildren = function (menus, parentCode) {
        var childJson = [];
        var children = $.grep(menus, function (menu, index) {
            return menu.ParentCode == parentCode;
        });

        $.each(children, function (index, menu) {
            // 用 text, iconCls, attrubutes: url 属性是为了兼容easyui-tree
            childJson.push({ Code: menu.Code, text: menu.Name, iconCls: menu.Icon, attributes: { url: menu.Url }, children: me.getChildren(menus, menu.Code) });
        });
        return childJson;
    };

    me.message = function () {
        return com.topParentMsg.apply(this, arguments);
    };

    me.isEnabled = function (field) {
        if (me.isEditing && me.setting && me.setting.disabledFieldsInEdit) {
            return $.inArray(field, me.setting.disabledFieldsInEdit) < 0;
        } else {
            return true;
        }
    };

    //
    me._close = function () {
        com.close();
        //me.redirect(null, '/home');
    };

    // init grid head name from dictionary
    /*setTimeout(function () {
    var gridArr = $('table[data-bind^=datagrid],table[data-bind^=treegrid]');
    if (gridArr.length) {
    gridArr.each(function (gridIdx, gridObj) {
    var thArr = $(gridObj).find('th[field]');
    if (!$.data(gridObj).datagrid) return;
    $.data(gridObj).datagrid.dc.header2.find('td[field]').each(function (idx, val) {
    var th = $.grep(thArr, function (th, idx) {
    return $(th).attr('field') === $(val).attr('field');
    });

    var text = $(th).find('label').text();
    if (text)
    $(val).find('span:first').text(text);
    });

    $(gridObj).datagrid('fitColumns');
    $(gridObj).datagrid('autoSizeColumn');

    });
    }
    }, 0);
    */


    me.unableForm = function () {
        $(".dh-form input,select,textarea,button").prop('disabled', true);
        $(".dh-form input,select,textarea,button,span").unbind('click');
        $('.dh-form .datagrid-toolbar').remove();
    };
    //me.init();

    //$.extend($.fn.validatebox.defaults, { missingMessage: resx.__missingMessage });
    //$.extend($.messager.defaults, { ok: resx.__ok, cancel: resx.__cancel });
    //$.extend($.fn.combobox.defaults, { missingMessage: resx.__missingMessage });
    //$.extend($.fn.datebox.defaults, { missingMessage: resx.__missingMessage });
}