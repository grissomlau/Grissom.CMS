var com = com || {};
com.openTab = parent.addTab,
com.apiDomain = '';
com.ajax = function (obj) {
    var me = this;
    me.url = obj.url || "";
    me.data = obj.data || "";
    me.type = obj.type || "POST";
    me.async = obj.async == undefined ? true : obj.async;
    me.success = function (data, status, xhr) {
        // console.log("success =>");
        // console.log(data);
        // console.log(status);
        // console.log(xhr);
        if (obj.success) {
            obj.success(data, status, xhr);
        }
    }
    me.error = function (data, status, xhr) {
        if (obj.error) {
            obj.error(data, status, xhr);
        }
        console.log("error =>");
        console.log(data);
        console.log(status);
        console.log(xhr);
        setTimeout(function () {
            if (data.status == 401) {
                window.location.href = "../../../sys/user/signin.html";
            }
        }, 2000)
    };

    $.ajax({
        headers: { Authorization: "Bearer " + Utils.getCookie("token") },
        async: me.async,
        type: me.type,
        url: me.url.startsWith("http") ? me.url : com.apiDomain + me.url,
        data: me.data,
        success: me.success,
        error: me.error
    });
},
com.close = function () {
    var parent = top || window;
    if (parent == window) {
        parent.close();
    } else {
        var ifrs = parent.document.getElementsByTagName("iframe");
        if (ifrs.length == 0) {
            window.close();
            return;
        }
        for (var i = 0; i < ifrs.length; ++i) {
            if (ifrs[i].contentWindow == window) {
                parent.closeTab(ifrs[i].title);
                break;
            }
        }
    }
},
com.topParentMsg = function (iconCls, msgText, fn) {
    if (iconCls == "confirm") {
        com.showComfirm(iconCls, msgText, fn);
    } else {
        com.showInPageTop(iconCls, msgText);
    }
},
com.message = function (msgType, msgText, fn) {
    var me = this;
    me.msgText = msgText || "";
    me.msgType = msgType;
    me.iconCls = "icon-information";
    switch (msgType) {
        case "information":
            me.iconCls = "icon-information";
            break;
        case "warning":
            me.iconCls = "icon-warn";
            break;
        case "failed":
        case "error":
            me.iconCls = "icon-error";
            break;
        case "success":
            me.iconCls = "icon-success";
            break;
        case "confirm":
            me.iconCls = "confirm";
            break;
        default:
            break;
    }
    var parent = top || window;
    parent.showMsg(me.iconCls, msgText);
},
com.showInPageTop = function (iconCls, msgText) {
    var me = this;
    me.iconCls = iconCls || "icon-information";
    me.msgText = msgText;
    if (!me.msgText) return;
    var msgDiv = $("<div class='dh-showmsg' style='margin-top:35px !important;'><div class='" + me.iconCls + "' style='float:left;'></div><div style='float:left;padding:0px 5px 0px 5px;'>" + msgText + "</div><div class='icon-close' style='float:right' onclick='$(this).parent().remove();'></div></div>");
    //var msgDiv = $("<div class='dh-showmsg'><div class='" + me.iconCls + "' style='float:left;'></div><div style='float:left;padding:0px 5px 0px 5px;'>" + msgText + "</div><div class='icon-close' style='float:right' onclick='$(this).parent().remove();'></div></div>");
    //var msgDiv = $("<div class='show-msg' style='width:200px;'><table style='width:100%'><tr><td><div class='" + me.iconCls + "' style='height:20px;width:30px;' ></div></td><td><div style='padding:0px 5px 0px 5px;'>" + msgText + "</div></td><td><div class='icon-close'  onclick='$(this).parent().parent().parent().parent().parent().remove();' style='height:20px;width:30px;' ></div></td></tr></table></div>");
    var parent;
    if (top || top.document) {
        parent = top.document.body;
    } else {
        parent = document.body;
    }

    $(parent).append(msgDiv);

    var clientW = parseFloat(parent.clientWidth / 2);
    var thisW = parseFloat($(msgDiv).width() / 2);
    $(msgDiv).css('left', clientW - thisW);

    var removeTO = setTimeout(function () {
        $(msgDiv).remove();
    }, 3000);

    $(msgDiv).hover(function () {
        clearTimeout(removeTO);
    }, function () {
        removeTO = setTimeout(function () {
            $(msgDiv).remove();
        }, 3000);
    });


},
com.showComfirm = function (title, msgText, fn) {
    $.messager.confirm(title, msgText, function (b) {
        if (typeof (fn) == "function") {
            fn.apply(this, [b]);
        }
    });
},

com.editGridViewModel = function (grid) {
    var me = this;
    me.grid = grid;
    me.editIndex = undefined;
    me.addRow = function (rowData, isNotEdit) {
        if (me.ended()) {
            if (Object.prototype.toString.call(rowData) != "[object Object]") rowData = {};
            rowData = $.extend({
                _isnew: true
            }, rowData);
            grid.datagrid("appendRow", rowData);
            me.editIndex = grid.datagrid("getRows").length - 1;
            if (!isNotEdit) {
                me.begin(me.editIndex);
            }
            return true;
        }
        return false;
    };

    // isNotEdit 表明新插入的行不是 edit 状态， 默认是 false, 即处于编辑状态；
    me.insertRow = function (index, rowData, isNotEdit) {
        if (me.ended()) {
            if (Object.prototype.toString.call(rowData) != "[object Object]") rowData = {};
            rowData = $.extend({
                _isnew: true
            }, rowData);
            grid.datagrid("insertRow", { index: index, row: rowData });
            if (!isNotEdit) {
                me.editIndex = index;
                me.begin(me.editIndex);
            }
            return true;
        }
        return false;
    };

    me.deleteRow = function (rowIndex) {
        if (rowIndex != null || rowIndex != undefined) {
            if (rowIndex == me.editIndex) {
                me.editIndex = undefined;
            }
            grid.datagrid("deleteRow", rowIndex);

        } else {
            var selectedRow = grid.datagrid("getSelected");
            if (selectedRow) {
                var selectedIndex = grid.datagrid("getRowIndex", selectedRow);
                if (selectedIndex == me.editIndex) {
                    me.editIndex = undefined;
                }
                grid.datagrid("deleteRow", selectedIndex);
            }
        }
    };
    me.deleteAll = function () {
        while (grid.datagrid('getRows').length > 0) {
            me.deleteRow(0);
        }
    };

    me.getSelected = function () {
        if (!grid || !grid.datagrid) return null;
        var selectedRow = grid.datagrid("getSelected");
        return selectedRow;
    };

    me.getRowByIndex = function (index) {
        if (!index && index != 0) return null;
        if (index < 0) return null;
        return grid.datagrid('getRows')[index];
    };

    me.begin = function (index, row) {
        var selRow = grid.datagrid("getSelected");
        var selIndex = grid.datagrid("getRowIndex", selRow);

        if (index == undefined || typeof index === 'object') {
            row = selRow;
            index = selIndex;
        }
        me.editIndex = me.ended() ? index : me.editIndex;
        if (selIndex !== index) {
            grid.datagrid("selectRow", me.editIndex);
        }
        grid.datagrid("beginEdit", me.editIndex);
        if (grid.readonlyFieldsInEdit && grid.readonlyFieldsInEdit.length > 0) {
            $.each(grid.readonlyFieldsInEdit, function (idx, value) {
                var target = grid.datagrid("getEditor", { index: me.editIndex, field: value }).target;
                if (row && !row._isnew)
                    $(target).attr("readonly", "readonly");
            });
        }
    };
    me.afterEnded = undefined;
    me.ended = function () {
        if (me.editIndex == undefined) return true;
        if (grid.datagrid("validateRow", me.editIndex)) {
            grid.datagrid("endEdit", me.editIndex);
            if (me.afterEnded) {
                me.afterEnded(me.editIndex);
            }
            me.editIndex = undefined;
            return true;
        }
        grid.datagrid("selectRow", me.editIndex);

        return false;
    };

    me.updateEditRow = function () {
        grid.datagrid("endEdit", me.editIndex);
    };
    me.validate = function (failedShowMsg, failedFocus) {
        if (failedShowMsg == undefined) failedShowMsg = true;
        if (failedFocus == undefined) failedFocus = true;

        if (!me.ended()) {
            if (failedFocus) {
                var $elem = com.$scrollingElem();
                if ($elem) {
                    // $elem.animate({ scrollTop: me.grid._$container().offset().top }, 500);
                }
                //me.grid._$elem().focus();
            }
            if (failedShowMsg) {
                com.message("warn", resx.ERR_INVALID_DATA);
            }
            return false;
        }
        return true;
    };

    me.getChanges = function () {
        // uses $.merge method to keep the grid original array value all the time 
        // even the inserted , updated, deleted is change outside
        var inserted = $.merge([], grid.datagrid('getChanges', 'inserted')),
            updated = $.merge([], grid.datagrid('getChanges', 'updated')),
            deleted = $.merge([], grid.datagrid('getChanges', 'deleted'));
        var changes = { inserted: inserted, updated: updated, deleted: deleted };
        changes._changed = (inserted.length + updated.length + deleted.length) > 0;
        return changes;

    };
    //获取所有当前数据和删除的数据，但不包括状态为新增且已删除的数据
    me.getAllData = function () {
        var deleted = $.merge([], grid.datagrid('getChanges', 'deleted'));
        var rows = [];
        $.each(deleted, function (idx, row) {
            if (row._isnew && row._rowState == 'deleted') return;

            rows.push(row);
        });
        var allData = grid.datagrid('getRows');
        return $.merge(rows, allData);
    };
    me.getPostAllData = function () {
        // unchange data push to updated
        var inserted = $.merge([], grid.datagrid('getChanges', 'inserted')),
            updated = $.merge([], grid.datagrid('getChanges', 'updated')),
            deleted = $.merge([], grid.datagrid('getChanges', 'deleted'));
        var allData = grid.datagrid('getRows');
        $.each(allData, function (idx, val) {
            var exist = updated.indexOf(val) > -1 || inserted.indexOf(val) > -1 || deleted.indexOf(val) > -1;
            if (!exist) {
                updated.push(val);
            }
        });
        var changes = { inserted: inserted, updated: updated, deleted: deleted };
        changes._changed = (inserted.length + updated.length + deleted.length) > 0;
        return changes;

    };
    me.updateRow = function (updateData) {
        if (updateData.index == undefined)
            updateData.index = me.getSelectedIndex();
        grid.datagrid("updateRow", updateData);

        // easyui 本身没有现实对 updateRow 修改的行添加到 updated 集合中，即用 getchange 可获取到修改过的行；
        // 所以我们自己来实现，把它添加到 udpated集合里；
        var rows = grid.datagrid('getRows');
        var row = rows[updateData.index];
        if (row._isnew === undefined || row._isnew == false) {
            var elem = grid._$elem()[0];
            var updatedRows = $.data(elem, 'datagrid').updatedRows;
            if (Utils.findObjIdxInArray(row, updatedRows) < 0) {
                updatedRows.push(row);
            }
        }

        if (me.editIndex > -1 && me.editIndex == updateData.index) {
            me.begin();
        }
    };

    me.getRowByIdValue = function (idValue) {
        var rows = grid.datagrid('getRows');
        for (var i = 0; i < rows.length; ++i) {
            if (rows[i][grid.idField] == idValue) {
                return rows[i];
            }
        }
        return null;
    };

    me.getSelectedIndex = function () {
        var selectedRow = grid.datagrid("getSelected");
        if (!selectedRow) return -1;
        return grid.datagrid('getRowIndex', selectedRow);
    };
    // 过滤掉状态是删除但又是新增的记录,因这些记录不用post,如果指定了 isAllData 是 true 表明要返回所有数据，把 unchanged 数据的状态改为 updated ；
    me.getPureChanges = function (isAllData) {
        var changeArr;
        if (isAllData)
            changeArr = me.getPostAllData();
        else
            changeArr = me.getChanges();

        $.each(changeArr, function (type, arr) {
            for (var i = 0; i < arr.length; ++i) {
                if (type === 'deleted' && arr[i]._isnew === true) {
                    arr.splice(i, 1);
                    --i;
                    return;
                }
            }
        });
        return changeArr;
    };

    // 且 转换为 合法的 post 数据格式；
    // {master:{data:{},children:{CA:[{updated:[{data:{},children:{}}],inserted:[],deleted:[]}]}}}



    //获取所有行总的真实高度
    me.getRowsHeight = function () {
        var height = 0;
        $.each(me.grid._$container().find('.datagrid-btable:eq(1) tr'), function (idx, tr) {
            height += __parseFloat($(tr).height());
        });
        return height;
    }
},
com.editTreeGridViewModel = function (grid) {
    grid._deletedRows = [];
    var me = this;
    me.grid = grid;
    me.editIndex = undefined;
    me.addRow = function (rowData, parentId) {
        if (me.ended()) {
            if (Object.prototype.toString.call(rowData) != "[object Object]") rowData = {};
            rowData = $.extend({
                _isnew: true
            }, rowData);
            if (parentId) {
                grid.treegrid("append", { parent: parentId, data: [rowData] });
            }
            else {
                grid.treegrid("append", { data: [rowData] });
            }
            me.editIndex = grid.treegrid("getRows").length - 1;
            me.begin(me.editIndex);
            return true;
        }
        return false;
    };

    me.insertRow = function (index, rowData) {
        if (me.ended()) {
            if (Object.prototype.toString.call(rowData) != "[object Object]") rowData = {};
            rowData = $.extend({
                _isnew: true
            }, rowData);
            grid.treegrid("insertRow", { index: index, row: rowData });
            me.editIndex = index;
            me.begin(me.editIndex);
            return true;
        }
        return false;
    };

    me.deleteRow = function (idValue) {
        if (idValue == undefined) {
            var selectedRow = grid.treegrid("getSelected");
            idValue = selectedRow[grid.idField]
        }

        if (idValue != undefined) {
            selectedRow = grid.treegrid('find', idValue);
            if (selectedRow) {
                if (selectedRow._rowState != 'inserted') {
                    selectedRow._rowState = 'deleted';
                }
            }
            grid._deletedRows.push(selectedRow);
            grid.treegrid("remove", idValue);
            grid._resize();
            return selectedRow;
        }
    };

    me.getSelected = function () {
        if (!grid || !grid.treegrid) return null;
        var selectedRow = grid.treegrid("getSelected");
        return selectedRow;
    };

    me.begin = function (index, row) {
        var selRow = grid.treegrid("getSelected");
        var selIndex = grid.treegrid("getRowIndex", selRow);

        if (index == undefined || typeof index === 'object') {
            row = selRow;
            index = selIndex;
        }
        me.editIndex = me.ended() ? index : me.editIndex;
        if (selIndex !== index) {
            grid.treegrid("selectRow", me.editIndex);
        }
        grid.treegrid("beginEdit", me.editIndex);
        if (grid.readonlyFieldsInEdit && grid.readonlyFieldsInEdit.length > 0) {
            $.each(grid.readonlyFieldsInEdit, function (idx, value) {
                var target = grid.treegrid("getEditor", { index: me.editIndex, field: value }).target;
                if (row && !row._isnew)
                    $(target).attr("readonly", "readonly");
            });
        }
    };

    me.ended = function () {
        if (me.editIndex == undefined) return true;
        if (grid.treegrid("validateRow", me.editIndex)) {
            grid.treegrid("endEdit", me.editIndex);
            me.editIndex = undefined;
            return true;
        }
        grid.treegrid("selectRow", me.editIndex);
        return false;
    };

    me.updateEditRow = function () {
        grid.treegrid("endEdit", me.editIndex);
    };

    me.getChanges = function () {
        //// uses $.merge method to keep the grid original array value all the time 
        //// even the inserted , updated, deleted is change outside
        //var inserted = $.merge([], grid.treegrid('getChanges', 'inserted')),
        //    updated = $.merge([], grid.treegrid('getChanges', 'updated')),
        //    deleted = $.merge([], grid.treegrid('getChanges', 'deleted'));
        //var changes = { inserted: inserted, updated: updated, deleted: deleted };
        //changes._changed = (inserted.length + updated.length + deleted.length) > 0;
        //return changes;

        // unchange data push to updated
        var allData = grid.treegrid('getRoots');
        var inserted = $.grep(allData, function (val, idx) { return val._rowState == 'inserted'; }),
            updated = $.grep(allData, function (val, idx) { return val._rowState == 'updated'; }),
            deleted = grid._deletedRows;
        $.each(allData, function (idx, val) {
            var exist = updated.indexOf(val) > -1 || inserted.indexOf(val) > -1 || deleted.indexOf(val) > -1;
            if (!exist) {
                updated.push(val);
            }
        });
        var changes = { inserted: inserted, updated: updated, deleted: deleted };
        changes._changed = (inserted.length + updated.length + deleted.length) > 0;
        return changes;

    };
    me.mergeChildren = function (parent) {
        var newArr = [];
        newArr.push(parent);
        if (parent.children && parent.children.length > 0) {
            for (var i = 0; i < parent.children.length; ++i) {
                var children = me.mergeChildren(parent.children[i]);
                $.merge(newArr, children);
            }
        }
        return newArr;
    }
    //获取所有当前数据和删除的数据，但不包括状态为新增且已删除的数据
    me.getAllData = function () {
        var allData = grid.treegrid('getData');
        return $.merge($.merge([], grid._deletedRows), allData);
    };

    me.getData = function () {
        return grid.treegrid('getData');
    }
    me.getPostAllData = function () {
        // unchange data push to updated
        var allData = grid.treegrid('getRoots');
        var inserted = $.grep(allData, function (val, idx) { return val._rowState == 'inserted'; }),
            updated = $.grep(allData, function (val, idx) { return val._rowState != 'inserted'; }),
            deleted = grid._deletedRows;
        $.each(allData, function (idx, val) {
            var exist = updated.indexOf(val) > -1 || inserted.indexOf(val) > -1 || deleted.indexOf(val) > -1;
            if (!exist) {
                updated.push(val);
            }
        });
        var changes = { inserted: inserted, updated: updated, deleted: deleted };
        changes._changed = (inserted.length + updated.length + deleted.length) > 0;
        return changes;

    };


    me.getSelectedIndex = function () {
        var selectedRow = grid.treegrid("getSelected");
        if (!selectedRow) return -1;
        return grid.treegrid('getRowIndex', selectedRow);
    };
    // 过滤掉状态是删除但又是新增的记录,因这些记录不用post,如果指定了 isAllData 是 true 表明要返回所有数据，把 unchanged 数据的状态改为 updated ；
    me.getPureChanges = function (isAllData) {
        //var changeArr;
        //if (isAllData)
        //    changeArr = me.getPostAllData();
        //else
        //    changeArr = me.getChanges();

        var roots = grid.treegrid('getRoots');
        var allRows = [];
        $.each(roots, function (idx, row) {
            $.merge(allRows, me.mergeChildren(row));
        });
        var inserted = $.grep(allRows, function (val, idx) { return val._rowState == 'inserted' && val._isnew; }),
           updated = $.grep(allRows, function (val, idx) { return val._rowState == 'updated'; }),
           deleted = $.grep(allRows, function (val, idx) { return val._rowState == 'deleted' && !val._isnew; });

        var changes = { inserted: inserted, updated: updated, deleted: deleted };
        changes._changed = (inserted.length + updated.length + deleted.length) > 0;
        return changes;
    };

    me.updateChildren = function (node, isUpdateRowstate) {
        var childrenNodes = me.grid.treegrid("getChildren", node[me.grid.idField]);
        $.each(childrenNodes, function (idx, childrenNode) {
            me.updateRowState(childrenNode, node.ck);
            me.updateChildren(childrenNode);
        });
        me.grid.treegrid("update", { id: node[me.grid.idField], row: node });
    };
    me.updateParent = function (node) {
        var parentNode = me.grid.treegrid("getParent", node[me.grid.idField]);
        if (parentNode) {
            var ck_value,
                siblingNodes = me.grid.treegrid("getChildren", parentNode[me.grid.idField]);
            for (var key in siblingNodes) {
                var siblingNode = siblingNodes[key];
                if (siblingNode[me.grid._ckField] != node[me.grid._ckField]) {
                    ck_value = '1'
                    break;
                }
                ck_value = node[me.grid._ckField];
            }
            me.updateRowState(parentNode, ck_value);
            me.updateParent(parentNode);
            me.grid.treegrid("update", { id: parentNode[me.grid.idField], row: parentNode });
        }
    }

    //可以根据实际情况重写此方法来实现ckeckbox发生更改时行的 _rowState 状态，此处勾选为inserted，取消勾选为deleted
    me.customRowstate = function (rowData, ck_value) {
        if (ck_value == '1' || ck_value == 'true') {
            if (!rowData._rowState) {
                rowData._rowState = "inserted";
                rowData._isnew = true;
            } else if (rowData._rowState == 'deleted') {
                rowData._rowState = undefined;
            }
        } else {
            if (rowData._rowState == 'inserted') {
                rowData._rowState = undefined;
            } else {
                rowData._rowState = 'deleted';
            }
        }

    };

    //根据复选框的新值，修改数据的 _rowState 属性值 
    me.updateRowState = function (rowData, ck_value) {
        if (rowData[me.grid._ckField] != ck_value) {
            me.customRowstate(rowData, ck_value);
        }
        //同步复选框值
        rowData[me.grid._ckField] = ck_value;
    };

    //级联更新节点复选框选中状态。
    me.cascadeCheck = function (node) {
        //父节点
        me.updateParent(node);
        //子节点
        me.updateChildren(node);
    }

    // 且 转换为 合法的 post 数据格式；
    // {master:{data:{},children:{CA:[{updated:[{data:{},children:{}}],inserted:[],deleted:[]}]}}}
},

com.classifyData = function (data) {
    if (!data || Object.prototype.toString.call(data) != "[object Array]") return data;
    var newData = { inserted: [], updated: [], deleted: [] };
    $.each(data, function (idx, val) {
        if (val._rowState == 'inserted') {
            newData.inserted.push(val);
        } else if (val._rowState == 'updated') {
            newData.updated.push(val);
        } else if (val._rowState == 'deleted' && !val._isnew) {
            newData.deleted.push(val);
        }
    });
    return newData;
};
com.formatPostData = function (postObj) {
    $.each(postObj, function (typeIdx, typeVal) {
        $.each(typeVal, function (detailIdx, detailVal) {
            typeVal[detailIdx] = { data: detailVal };
        });
    });
    return postObj;
};
com.getPostChanges = function (obj, arr, compareKeyArr, dropPropertyArr) {
    var inserted = [], updated = [], deleted = [];
    for (var i = 0; i < arr.length; i++) {
        var fit = true;
        if (compareKeyArr) {
            for (var j = 0; j < compareKeyArr.length; j++) {
                // 如果是一个数组， indx 0  是表明 obj 的 key, index 1 是 arr 的 key 
                if (Object.prototype.toString.call(compareKeyArr[j]) == '[object Array]') {
                    if (obj[compareKeyArr[j][0]] != arr[i][compareKeyArr[j][1]]) {
                        fit = false;
                        break;
                    }
                } else if (obj[compareKeyArr[j]] != arr[i][compareKeyArr[j]]) {
                    fit = false;
                    break;
                }
            }
        }
        if (fit === false) continue;
        if (!arr[i]._rowState) continue;
        if (dropPropertyArr != undefined && dropPropertyArr.length > 0) {
            for (var k = 0; k < dropPropertyArr.length; k++) {
                delete arr[i][dropPropertyArr[k]];
            }
        }
        if (arr[i]._isnew && arr[i]._rowState === "deleted") {
            continue;
        } else if (arr[i]._rowState === "inserted") {
            inserted.push(arr[i]);
        } else if (arr[i]._rowState === "updated") {
            updated.push(arr[i]);
        } else if (arr[i]._rowState === "deleted") {
            deleted.push(arr[i]);
        }

    }
    return { inserted: inserted, updated: updated, deleted: deleted };
},
com.getPostAllData = function (obj, arr, compareKeyArr, dropPropertyArr) {
    var inserted = [], updated = [], deleted = [];
    for (var i = 0; i < arr.length; i++) {
        var fit = true;
        if (compareKeyArr) {
            for (var j = 0; j < compareKeyArr.length; j++) {
                // 如果是一个数组， indx 0  是表明 obj 的 key, index 1 是 arr 的 key 
                if (Object.prototype.toString.call(compareKeyArr[j]) == '[object Array]') {
                    if (obj[compareKeyArr[j][0]] != arr[i][compareKeyArr[j][1]]) {
                        fit = false;
                        break;
                    }
                } else if (obj[compareKeyArr[j]] != arr[i][compareKeyArr[j]]) {
                    fit = false;
                    break;
                }
            }
        }
        if (fit === false) continue;
        // 未做改变的数据，当作 update
        if (!arr[i]._rowState) {
            updated.push(arr[i]);
            continue;
        }
        if (dropPropertyArr != undefined && dropPropertyArr.length > 0) {
            for (var k = 0; k < dropPropertyArr.length; k++) {
                delete arr[i][dropPropertyArr[k]];
            }
        }
        if (arr[i]._isnew && arr[i]._rowState === "deleted") {
            continue;
        } else if (arr[i]._rowState === "inserted") {
            inserted.push(arr[i]);
        } else if (arr[i]._rowState === "updated") {
            updated.push(arr[i]);
        } else if (arr[i]._rowState === "deleted") {
            deleted.push(arr[i]);
        }

    }
    return { inserted: inserted, updated: updated, deleted: deleted };
},
com.isObjInChangedObj = function (obj, changedObj) {
    //-- changedObj like: {inserted:[],updated:[],deleted:[]};
    return changedObj.inserted.indexOf(obj) > -1
        || changedObj.updated.indexOf(obj) > -1
            || changedObj.deleted.indexOf(obj) > -1;
},
com.changeRowState = function (obj, arr, compareKeyArr, rowState) {
    for (var i = 0; i < arr.length; i++) {
        var fit = true;
        if (compareKeyArr) {
            for (var j = 0; j < compareKeyArr.length; j++) {
                if (arr[i][compareKeyArr[j]] !== obj[compareKeyArr[j]]) {
                    fit = false;
                    continue;
                }
            }
        }
        if (fit === false) continue;
        arr[i]["_rowState"] = rowState;
    }
},

com.getRowsByRowState = function (obj, arr, compareKeyArr, rowState) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var fit = true;
        if (arr[i]._rowState != rowState) {
            fit = false;
            continue;
        }
        if (compareKeyArr) {
            for (var j = 0; j < compareKeyArr.length; j++) {
                if (arr[i][compareKeyArr[j]] !== obj[compareKeyArr[j]]) {
                    fit = false;
                    continue;
                }
            }
        }
        if (fit === false) continue;
        newArr.push(arr[i]);
    }
    return newArr;
}

com.validProBeforeExecMethod = function (obj, property, methodName, param) {
    if (obj && obj[property]) {
        obj[property](methodName, param);
    }
},
com.download = function (fileGuid, downloadName) {
    if (!downloadName) downloadName = "";
    com.ajax({
        url: '/utilis/Utilis/Download?isChecked=true&downloadName=' + encodeURIComponent(downloadName) + '&relativeFileFullName=' + fileGuid,
        method: 'GET',
        dataType: 'JSON',
        success: function (data, status, jqxhr) {
            if (data) {
                if (data.success === true && data.isExist === true) {
                    if ($("#downloadIframe")) {
                        $("#downloadIframe").remove();
                    }
                    $(document.body).append("<iframe id='downloadIframe' style='display:none' src='/utilis/Utilis/Download?isChecked=false&downloadName=" + encodeURIComponent(downloadName) + "&relativeFileFullName=" + fileGuid + "' />");
                } else if (data.success === true && data.isExist === false) {
                    com.message("warn", resx[data.msg_code] || data.msg);
                } else {
                    com.message("error", resx[data.msg_code] || data.msg);
                }
            } else {
                com.message("error", "network error!");
            }
        },
        error: function (jqxhr, status, errorThrown) {
            com.message("error", status + errorThrown);
        }
    });

},

com.generateDoc = function (id, templateName) {
    if (id == undefined || id == null) id = "";

    if (templateName)
        $(document.body).append("<iframe id='downloadIframe' style='display:none' src='/utilis/Utilis/GenerateDoc/?id=" + id + "&templateName=" + templateName + "' />");
    else
        $(document.body).append("<iframe id='downloadIframe' style='display:none' src='/utilis/Utilis/GenerateDoc/" + id + "' />");
},

com.formatCheckbox = function (value) {
    var checked = (value && (value.toString() === 'true' || value.toString() == '1')) ? 'checked' : '';
    return "<input type='checkbox' onclick='return false;' " + checked + "/>";
};
com.getNextLabelCode = function (arr, codeField) {
    var ascMaxCodeDec = 90; //Z
    var ascMinCodeDec = 65; //A
    var maxCode = com.getMaxLabelCode(arr, codeField);
    return String.fromCharCode(maxCode.charCodeAt(0) + 1);
};
com.getMaxLabelCode = function (arr, codeField) {
    if (!arr) return '';
    //ascii:  A -> 65  Z-90
    // need to be extend for later

    var ascMaxCodeDec = 90; //Z
    var ascMinCodeDec = 65; //A
    var maxCodeDec = 64;
    for (var i = 0; i < arr.length; ++i) {
        var codeDec = arr[i][codeField].charCodeAt(0);
        if (codeDec > maxCodeDec) maxCodeDec = codeDec;
    }
    return String.fromCharCode(maxCodeDec);
};
com.event = function () {
    return {
        listen: {},
        addEvent: function (type, fn) {
            if (typeof this.listen[type] === 'undefined') {
                this.listen[type] = [];
            }
            if (typeof fn === 'function') {
                this.listen[type].push(fn);
            }
            return this;
        },
        fireEvent: function (type, arg) {
            var eventArr = this.listen[type];
            if (eventArr instanceof Array) {
                for (var i = 0, length = eventArr.length; i < length; ++i) {
                    if (typeof eventArr[i] === 'function')
                        eventArr[i].call(this, arg);
                }
            }
            return this;
        },
        removeEvent: function (type, fn) {
            var eventArr = this.listen[type];
            if (eventArr instanceof Array) {
                for (var i = 0, length = eventArr.length; i < length; ++i) {
                    if (eventArr[i] == fn) {
                        eventArr.splice(i, 1);
                        break;
                    }
                }
            } else {
                delete this.listen[type];
            }
            return this;
        }
    };
};
com.$scrollingElem = function () {
    var div = $('div.panel-body:first');
    /*if (div[0].scrollHeight > div.height()) {
    $("#backToTop1").show(200, function () {
    $("#backToTop1").css({
    top: div.height() - div.height() / 2
    });
    });
    }
    */
    return div;

};
com.formatTreeData = function (data, value, config) {
    var formattedValue = {
        id: value[config.idField],
        text: value[config.textField],
        state: value.state,
        checked: value[config.checkedField],
        attributes: {
            value: value
        }
    };
    if (!config.parentField) return formattedValue;

    var childrenData = $.grep(data, function (v, i) {
        return v[config.parentField] == value[config.idField];
    });
    if (childrenData.length > 0) {
        formattedValue.children = [];
        for (var i = 0; i < childrenData.length; i++) {
            var v = com.formatTreeData(data, childrenData[i], config);
            formattedValue.children.push(v);
        }
    }
    return formattedValue;
};

com.handleResp = function (resp, msgCode, hiddenMsg, successCallback) {
    if (hiddenMsg) return;
    if (!resp) return;

    if (typeof resp === 'string' && Utils.isJson(resp)) {
        resp = JSON.parse(resp);
        var msg = resp.msg_code != undefined ? resx[resp.msg_code] : "";
        if (resp.msg_code != undefined) {
            msg = resx[resp.msg_code] || resp.msg_code;
        }
        if (msgCode) {
            msg = (resx[msgCode] || msgCode) + ' ' + msg;
        }

        var right = '';
        if (typeof resp.right_msg === 'object') {
            right = '';
            for (var key in resp.right_msg) {
                right += ',' + resx[key] + ':' + resp.right_msg[key];
            }
        } else {
            right = resp.right_msg != undefined ? resp.right_msg : "";
        }

        var left = '';
        if (typeof resp.left_msg === 'object') {
            for (var key in resp.left_msg) {
                left += ',' + resx[key] + ':' + resp.left_msg[key];
            }
        } else {
            left = resp.left_msg != undefined ? resp.left_msg : "";
        }
        if (resp.status) {
            com.message("success", left + ' ' + msg + ' ' + right);
            if (successCallback) {
                successCallback();
            }
        }
        else
            com.message("failed", left + ' ' + msg + ' ' + right);
    } else if (typeof resp === 'object') {
        var msg = resp.msg_code != undefined ? resx[resp.msg_code] : "";
        if (resp.msg_code != undefined) {
            msg = resx[resp.msg_code] || resp.msg_code;
        }
        if (msgCode) {
            msg = (resx[msgCode] || msgCode) + ' ' + msg;
        }

        var right = '';
        if (typeof resp.right_msg === 'object') {
            for (var key in resp.right_msg) {
                right += ',' + resx[key] + ':' + resp.right_msg[key];
            }
        } else {
            right = resp.right_msg != undefined ? resp.right_msg : "";
        }

        var left = '';
        if (typeof resp.left_msg === 'object') {
            for (var key in resp.left_msg) {
                left += ',' + resx[key] + ':' + resp.left_msg[key];
            }
        } else {
            left = resp.left_msg != undefined ? resp.left_msg : "";
        }
        if (resp.status) {
            com.message("success", left + ' ' + msg + ' ' + right);
            if (successCallback) {
                successCallback();
            }
        }
        else
            com.message("failed", left + ' ' + msg + ' ' + right);
    } else {
        //com.message("failed", resx['__failed'] + " " + resp);
        com.message("failed", '失败' + " " + resp);
    }
}
com.printSetting = {
    mode: 'iframe',
    popHt: 500,
    popWd: 400,
    popX: 200,
    popY: 200,
    popTitle: '',
    popClose: false
};
com.Iframe = function (settings) {
    var frameId = settings.id;

    var iframeStyle = 'border:0;position:absolute;width:0px;height:0px;left:0px;top:0px;';
    var iframe;
    //Downloads By http://www.veryhuo.com
    try {
        iframe = document.createElement('iframe');
        document.body.appendChild(iframe);
        $(iframe).attr({ style: iframeStyle, id: frameId, src: "" });
        iframe.doc = null;
        iframe.doc = iframe.contentDocument ? iframe.contentDocument : (iframe.contentWindow ? iframe.contentWindow.document : iframe.document);
    }
    catch (e) { throw e + ". iframes may not be supported in this browser."; }

    if (iframe.doc == null) throw "Cannot find document.";

    return iframe;
}
com.modes = { iframe: "iframe", popup: "popup" };

//-- 默认toJSON 方法会把当前时间格式为 UTC 时间， 但整个系统的当前时间已转为了 UTC 时间，只是时区还是显示为 locale 而已； 
Date.prototype.toJSON = function (d) {
    return isFinite(this.valueOf())
                ? this.getFullYear() + '-' +
                    f(this.getMonth() + 1) + '-' +
                    f(this.getDate()) + 'T' +
                    f(this.getHours()) + ':' +
                    f(this.getMinutes()) + ':' +
                    f(this.getSeconds()) + 'Z'
                : null;
    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

};

$(function () {
    /*
    这种方法重写控件，无法控制控件指定的宽度
    $(".easyui-ucDollar").each(function (idx, elem) {
    var width = $(elem).width();
    console.log(width);
    if (!width) width = 135;
    $(elem).numberspinner({ precision: 2, groupSeparator: ',', decimalSeparator: '.', prefix: '$', width: width });
    });
    */

});


(function () {
    ko = ko || {};
    ko.extenders.isCurrency = function (target, options) {
        var result = ko.dependentObservable({
            read: function () {
                return Utils.format(target(), "c");
            },
            write: target
        });
        result.raw = target;
        return result;
    };
}());
