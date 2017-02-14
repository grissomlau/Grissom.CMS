var viewModel = function (data) {
    com.viewModel.edit.apply(this, arguments);
    var me = this;

    me.markGrid = {
        url: "/video/main/marks?video=" + me.form.Id(),
        toolbar: [
            {
                iconCls: 'icon-add',
                text: '新增',
                handler: function () {
                    me.markGrid._add();
                }
            },
            {
                iconCls: 'icon-delete',
                text: '删除',
                handler: function () {
                    me.markGrid._delete();
                }
            }
        ],
        onDblClickRow: function () {
            if (!me.markGrid._editGrid.validate()) {
                return false;
            }
            me.markGrid._recalTotalMark();
            me.markGrid._edit();
        },
        onClickRow: function () {
            if (!me.markGrid._editGrid.validate()) {
                return false;
            }
            me.markGrid._recalTotalMark();
        },
        _add: function () {
            if (!me.markGrid._editGrid.validate()) {
                return false;
            }
            me.markGrid._recalTotalMark();
            var row = $.extend({}, me.defaultData.formMark, { MainId: me.form.Id() });
            me.markGrid._editGrid.addRow(row);
            me.markGrid._resize();
        },
        _edit: function () {
            if (!me.markGrid._editGrid.validate()) {
                return false;
            }
            me.markGrid._recalTotalMark();
            me.markGrid._editGrid.begin();
        },
        _delete: function (index) {
            me.markGrid._editGrid.deleteRow(index);
            me.markGrid._recalTotalMark();
            me.markGrid._resize();
        },
        _formatSelectOwner: function (value, record, index) {
            console.log(value);
            var btnSelect = '<span style="padding-right:10px;">' + (value || '') + '</span><a class="l-btn dh-l-btn" style="width:50px;" href="javascript:void(0)" onclick="markGrid._selectOwner(' + index + ')" >选择</a>';
            return btnSelect;
        },
        _selectOwner: function (index) {
            me.winSelectOwner.currOpenTrigger = me.winSelectOwner.openTrigger.mark;
            me.winSelectOwner._open();
        },
        _UpdateSelectedOwner: function (owner) {
            var row = me.markGrid._editGrid.getSelected();
            var index = me.markGrid._editGrid.getSelectedIndex();
            row._OwnerName = owner.Name;
            row.OwnerId = owner.Id;
            me.markGrid._editGrid.updateRow({ index: index, row: row });
        },
        _recalTotalMark: function () {
            var rows = me.markGrid.datagrid("getRows");
            var total = 0;
            $.each(rows, function (idx, row) {
                total += parseInt(row.Mark);
            });
            if (total == 0) {
                me.form.TotalMark(0);
            } else {
                me.form.TotalMark(total / rows.length);
            }
        },
        _editGrid: undefined,
        init: function () {
            me.markGrid._editGrid = new com.editGridViewModel(me.markGrid);
        }
    };
    me.markGrid.init();

    me.winSelectOwner = {
        title: '选择用户',
        width: 400,
        height: 400,
        openTrigger: { mark: 1, comment: 2 },
        currOpenTrigger: undefined
    }

    me._closePickOwnerWin = function () {
        me.winSelectOwner._close();
    }
    me._okPickOwnerWin = function (owner) {
        me.winSelectOwner._close();
        if (me.winSelectOwner.currOpenTrigger == me.winSelectOwner.openTrigger.mark) {
            me.markGrid._UpdateSelectedOwner(owner);
        }
    }

    me._actionSave = function (post) {
        if (!me.markGrid._editGrid.validate()) {
            return false;
        }
        me.markGrid._recalTotalMark();

        var master = ko.mapping.fromJS(me.form);
        var marks = me.markGrid._editGrid.getPureChanges();
        marks = com.formatPostData(marks);

        var postData = {};
        if (me.isEditing) {
            postData = { master: { updated: [{ data: master, children: { marks: marks } }] } };
        } else {
            postData = { master: { inserted: [{ data: master, children: { marks: marks } }] } };
        }

        post.postData = postData;
        return true;
    }

};

(function () {
    com.ajax({
        type: "GET",
        url: "/video/main/editConfig?values=" + Utils.getUrlParam("Id") + "&pointGroup=edit",
        success: function (data) {
            data.defaultData = data.defaultData || {};
            data.defaultData.formMark = {
                Mark: 0,
                OwnerId: 0
            };
            viewModel.call(window, data);
            window.init();
            ko.bindingViewModel();
        }
    })
})();