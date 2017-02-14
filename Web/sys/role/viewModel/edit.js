var viewModel = function (data) {
    com.viewModel.edit.apply(this, arguments);
    var me = this;



    me.getTreeData = function () {
        com.ajax({
            type: "GET",
            url: "/sys/role/menuRights?role=" + form.Id(),
            success: function (menus) {
                var MainMenu = menus[0];
                var PointMenu = menus[1];

                var MenuJson = [];

                var parents = $.grep(MainMenu, function (menu, index) {
                    return !menu.ParentCode;
                });
                var options = $('#RightTree').tree('options');

                $.each(parents, function (index, menu) {
                    var mainChildren = me.getMainChildren(MainMenu, PointMenu, menu.Code);

                    MenuJson.push({ id: menu.Code, text: menu.Name, type: 'menu', state: "closed", checked: options.cascadeCheck == true && mainChildren.length > 0 ? "" : menu.checked, iconCls: menu.icon_cls, attributes: { MenuCode: menu.Code, ParentCode: menu.ParentCode, Url: menu.url }, children: mainChildren });
                });
                $('#RightTree').tree({
                    data: MenuJson,
                    onLoadSuccess: function (node, data) {
                        var roots = $(this).tree("getRoots");
                        $.each(roots, function (idx, root) {
                            $('#RightTree').tree("expand", root.target);
                        });
                    }
                });
            }
        });
    };
    me.getMainChildren = function (MainMenu, PointMenu, parentCode) {

        var childJson = [];
        var children = $.grep(MainMenu, function (menu, index) {
            return menu.ParentCode == parentCode;
        });
        var options = $('#RightTree').tree('options');

        $.each(children, function (index, menu) {
            var pointChildren = me.getPointChildren(PointMenu, menu.Code);

            childJson.push({ id: menu.Code, text: menu.Name, type: 'menu', state: "closed", checked: options.cascadeCheck == true && pointChildren.length > 0 ? "" : menu.checked, iconCls: menu.Icon, attributes: { MenuCode: menu.Code, ParentCode: menu.ParentCode, Url: menu.url }, children: pointChildren });
        });
        return childJson;
    };
    me.getPointChildren = function (PointMenu, parentCode) {
        var childJson = [];
        var subChildJson = [];
        var children = $.grep(PointMenu, function (menu, index) {
            return menu.MenuCode == parentCode;
        });
        var options = $('#RightTree').tree('options');

        $.each(children, function (index, menu) {
            var subChildren = [];
            if (subChildren.length > 0) {
                childJson.push({ id: menu.MenuCode + '-' + menu.Code, text: menu.Name, type: 'point', state: "open", checked: options.cascadeCheck == true ? "" : menu.checked, iconCls: menu.icon == null ? "icon-" + menu.Code : menu.icon, attributes: { MenuCode: menu.MenuCode, PointCode: menu.Code, Url: menu.url }, children: subChildren });
                subChildJson.push(subChildren);
            }
            else
                childJson.push({ id: menu.MenuCode + '-' + menu.Code, text: menu.Name, type: 'point', state: "open", checked: menu.checked, iconCls: menu.icon == null ? "icon-" + menu.Code : menu.icon, attributes: { MenuCode: menu.MenuCode, PointCode: menu.Code, Url: menu.url } });
        });

        var temJson = [];
        for (var i = 0; i < childJson.length; i++) {
            for (var j = 0; j < subChildJson.length; j++) {
                for (var k = 0; k < subChildJson[j].length; k++) {
                    if (childJson[i].id == subChildJson[j][k].id) {
                        temJson.push(childJson[i]);
                    }
                }
            }
        }
        $.each(temJson, function (index, menu) {
            childJson.remove(menu);
        });
        return childJson;
    };
    me.formatterTree = function (node) {
        var s = node.text;
        if (node.children) {
            s += ' <span style=\'color:blue\'>(' + node.children.length + ')</span>';
        }
        return s;
    };

    //加载树数据
    me.getTreeData();


    me._user = {
        _init: function () {
            $(function () {
                me._user._$btns().bind('click', function () {
                    var title = $(this).attr('title');
                    switch (title) {
                        case 'addSelected':
                            me._user._addSelected();
                            break;
                        case 'addAll':
                            me._user._addAll();
                            break;
                        case 'removeSelected':
                            me._user._removeSelected();
                            break;
                        case 'removeAll':
                            me._user._removeAll();
                            break;
                        default:
                            break;
                    }
                });
            });
        },
        _addSelected: function () {
            var selRows = me._user._$user().uc_listbox('getSelRows');
            me._user._$user().uc_listbox('removeSelRows');
            if (selRows) {
                $.each(selRows, function (idx, row) {
                    if (row._rowState == 'deleted') {
                        row._rowState = undefined;
                    } else if (row._rowState == undefined) {
                        row._rowState = 'inserted';
                        row._isnew = true;
                    }
                });
            }

            me._user._$userRole().uc_listbox('addRows', selRows);
        },
        _removeSelected: function () {
            var selRows = me._user._$userRole().uc_listbox('getSelRows');
            me._user._$userRole().uc_listbox('removeSelRows');

            if (selRows) {
                $.each(selRows, function (idx, row) {
                    if (row._rowState == undefined) {
                        row._rowState = 'deleted';
                    } else if (row._isnew) {
                        row._rowState = undefined;
                        row._isnew = false;
                    }
                });
            }


            me._user._$user().uc_listbox('addRows', selRows);
        },
        _addAll: function () {
            var selRows = me._user._$user().uc_listbox('getData');
            me._user._$userRole().uc_listbox('addRows', selRows);
            if (selRows) {
                $.each(selRows, function (idx, row) {
                    if (row._rowState == 'deleted') {
                        row._rowState = undefined;
                    } else if (row._rowState == undefined) {
                        row._rowState = 'inserted';
                        row._isnew = true;
                    }
                });
            }


            me._user._$user().uc_listbox('removeRows', selRows);
        },
        _removeAll: function () {
            var selRows = me._user._$userRole().uc_listbox('getData');
            me._user._$user().uc_listbox('addRows', selRows);

            if (selRows) {
                $.each(selRows, function (idx, row) {
                    if (row._rowState == undefined) {
                        row._rowState = 'deleted';
                    } else if (row._isnew) {
                        row._rowState = undefined;
                        row._isnew = false;
                    }
                });
            }

            me._user._$userRole().uc_listbox('removeRows', selRows);
        },
        _$btns: function () { return $('#userBtns button'); },
        _$userRole: function () { return $("#groupUser"); },
        _$user: function () { return $("#user"); },
        _selectedRows: function () {
            return me._user._$userRole().uc_listbox('getData');
        },
        _unSelectedRows: function () {
            return me._user._$user().uc_listbox('getData');
        }
    };
    me._user._init();

    me.urls = {
        getSelectedUser: "/sys/role/selectedUser?role=" + Utils.getUrlParam("Id"),
        getUnSelectedUser: "/sys/role/unSelectedUser?role=" + Utils.getUrlParam("Id")
    };


    me._actionSave = function (post) {
        //master
        var master = ko.toJS(me.form);
        delete master.__ko_mapping__;

        //menu point right
        var MenuRow = [];
        var PointRow = [];
        var nodes = $('#RightTree').tree('getChecked', ['checked', 'indeterminate']);

        $.each(nodes, function (index, node) {
            if (node.type == 'menu') {
                MenuRow.push({ RoleId: form.Id(), MenuCode: node.attributes.MenuCode, _isnew: true, _rowState: "inserted" });
            }
            if (node.type == 'point') {
                PointRow.push({ RoleId: form.Id(), MenuCode: node.attributes.MenuCode, PointCode: node.attributes.PointCode, _isnew: true, _rowState: "inserted" });
            }
        });

        var menus = com.formatPostData({ inserted: MenuRow });
        var points = com.formatPostData({ inserted: PointRow });


        // user
        var userDelRows = com.getRowsByRowState(undefined, me._user._unSelectedRows(), undefined, 'deleted');
        var userInsertedRows = com.getRowsByRowState(undefined, me._user._selectedRows(), undefined, 'inserted');
        var users = { inserted: userInsertedRows, deleted: userDelRows };
        com.formatPostData(users);

        var postData = '';
        if (me.isEditing) {
            postData = { master: { updated: [{ data: master, children: { users: users, menus: menus, points: points } }] } };
        } else {
            postData = { master: { inserted: [{ data: master, children: { users: users, menus: menus, points: points } }] } };
        }

        post.postData = postData;
        return true;
    };


};
(function () {
    viewModel.call(window, { common: {}, form: { Id: Utils.getUrlParam("Id") } });
    com.ajax({
        type: "GET",
        url: "/sys/role/editConfig?values=" + Utils.getUrlParam("Id") + "&pointGroup=edit",
        success: function (data) {
            console.log(data);
            viewModel.call(window, data);
            window.init();
            ko.bindingViewModel();
        }
    })
})();