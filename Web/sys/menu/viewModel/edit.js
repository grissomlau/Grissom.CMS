var viewModel = function (data) {
    com.viewModel.edit.apply(this, arguments);
    var me = this;

    me.pointGrid = {
        url: ko.observable("/sys/menupoint/listByMenu?menu=" + me.form.Code()),
        toolbar: [
            {
                text: '添加',
                iconCls: 'icon-add',
                handler: function () {
                    me.pointGrid._add();
                }
            },
            {
                text: '删除',
                iconCls: 'icon-delete',
                handler: function () {
                    me.pointGrid._delete();
                }
            },
        ],
        onDblClickRow: function () {
            me.pointGrid._edit();
        },
        onClickRow: function () {
            me.pointGrid._editGrid.validate();
        },
        _add: function () {
            if (!me.pointGrid._editGrid.validate()) {
                return false;
            }
            var row = $.extend({}, me.defaultData.formPoint, { MenuCode: me.form.Code() });
            me.pointGrid._editGrid.addRow(row);
            me.pointGrid._resize();
        },
        _edit: function () {
            if (!me.pointGrid._editGrid.validate()) {
                return false;
            }
            me.pointGrid._editGrid.begin();
        },
        _delete: function (index) {
            me.pointGrid._editGrid.deleteRow(index);
            me.pointGrid._editGrid.resize();
        },
        _editGrid: undefined,
        isReload: ko.observable(false),
        _init: function () {
            me.pointGrid._editGrid = new com.editGridViewModel(me.pointGrid);
        }
    };

    me.pointGrid._init();

    me._actionSave = function (post) {
        if (!me.pointGrid._editGrid.validate()) {
            return false;
        }
        var master = ko.mapping.toJS(me.form);
        var point = me.pointGrid._editGrid.getPureChanges();
        point = com.formatPostData(point);

        if (me.isEditing) {
            postData = { master: { updated: [{ data: master, children: { point: point } }] } };
        } else {
            postData = { master: { inserted: [{ data: master, children: { point: point } }] } };
        }
        post.postData = postData;

        return true;
    }
};

(function () {
    com.ajax({
        type: "GET",
        url: "/sys/menu/editConfig?values=" + Utils.getUrlParam("Code") + "&pointGroup=edit",
        success: function (data) {
            data.setting = $.extend(data.setting, { disabledFieldsInEdit: ["Code"] });
            viewModel.call(window, data);
            window.init();
            ko.bindingViewModel();
        }
    })
})();