var viewModel = function (data) {
    com.viewModel.edit.apply(this, arguments);
    var me = this;

    me.formComment = ko.mapping.fromJS(me.defaultData.formComment);

    //-- 评分
    me.gridMark = {
        url: "/video/main/marks?video=" + me.form.Id(),
        toolbar: [
            {
                iconCls: 'icon-add',
                text: '新增',
                handler: function () {
                    me.gridMark._add();
                }
            },
            {
                iconCls: 'icon-delete',
                text: '删除',
                handler: function () {
                    me.gridMark._delete();
                }
            }
        ],
        onDblClickRow: function () {
            if (!me.gridMark._editGrid.validate()) {
                return false;
            }
            me.gridMark._recalTotalMark();
            me.gridMark._edit();
        },
        onClickRow: function () {
            if (!me.gridMark._editGrid.validate()) {
                return false;
            }
            me.gridMark._recalTotalMark();
        },
        _add: function () {
            if (!me.gridMark._editGrid.validate()) {
                return false;
            }
            me.gridMark._recalTotalMark();
            var row = $.extend({}, me.defaultData.formMark, { Id: Utils.getGuid() });
            me.gridMark._editGrid.addRow(row);
            me.gridMark._resize();
        },
        _edit: function () {
            if (!me.gridMark._editGrid.validate()) {
                return false;
            }
            me.gridMark._recalTotalMark();
            me.gridMark._editGrid.begin();
        },
        _delete: function (index) {
            me.gridMark._editGrid.deleteRow(index);
            me.gridMark._recalTotalMark();
            me.gridMark._resize();
        },
        _formatSelectOwner: function (value, record, index) {
            console.log(value);
            var btnSelect = '<span style="padding-right:10px;">' + (value || '') + '</span><a class="l-btn dh-l-btn" style="width:50px;" href="javascript:void(0)" onclick="gridMark._selectOwner(' + index + ')" >选择</a>';
            return btnSelect;
        },
        _selectOwner: function (index) {
            me.winSelectOwner.currOpenTrigger = me.winSelectOwner.openTrigger.mark;
            me.winSelectOwner._open();
        },
        _UpdateSelectedOwner: function (owner) {
            var row = me.gridMark._editGrid.getSelected();
            var index = me.gridMark._editGrid.getSelectedIndex();
            row._OwnerName = owner.Name;
            row.OwnerId = owner.Id;
            me.gridMark._editGrid.updateRow({ index: index, row: row });
        },
        _recalTotalMark: function () {
            var rows = me.gridMark.datagrid("getRows");
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
            me.gridMark._editGrid = new com.editGridViewModel(me.gridMark);
        }
    };
    me.gridMark.init();

    //-- 评论
    me.gridComment = {
        url: '/video/main/comments?video=' + me.form.Id(),
        toolbar: [
            {
                iconCls: 'icon-add',
                text: '新增',
                handler: function () {
                    me.gridComment.datagrid("clearSelections");
                    me.gridComment._add();
                }
            },
            {
                iconCls: 'icon-edit',
                text: '编辑',
                handler: function () {
                    me.gridComment._edit();
                }
            },
            {
                iconCls: 'icon-delete',
                text: '删除',
                handler: function () {
                    me.gridComment._delete();
                }
            }
        ],
        onDblClickRow: function () {
            me.gridComment._edit();
        },
        _add: function () {
            var row = $.extend(me.defaultData.formComment, { Id: Utils.getGuid() });
            ko.mapping.fromJS(row, me.formComment);
            me.commentUpDownGrid.url(me.commentUpDownGrid.origUrl + me.formComment.Id());
            me.winComment._open();
        },
        _edit: function () {
            var row = me.gridComment._editGrid.getSelected();
            if (!row._upDowns) {
                row._upDowns = [];
            }
            ko.mapping.fromJS(row, me.formComment);
            if (row._upDowns.length == 0) {
                me.commentUpDownGrid.url(me.commentUpDownGrid.origUrl + me.formComment.Id());
            } else {
                me.commentUpDownGrid.datagrid("loadData", row._upDowns);
            }
            me.winComment._open();
        },
        _delete: function () {
            me.gridComment._editGrid._delete();
        },
        _editGrid: undefined,
        init: function () {
            me.gridComment._editGrid = new com.editGridViewModel(me.gridComment);
        }
    }
    me.gridComment.init();

    me.winComment = {
        title: '编辑评论',
        width: 700,
        height: 400,
        buttons: [
            {
                iconCls: 'icon-ok',
                text: '确定',
                handler: function () {
                    me.commentUpDownGrid._ok();
                    //me.commentUpDownGrid.datagrid("loadData", []);
                    console.log(ko.mapping.toJS(me.formComment._upDowns()));

                    var row = ko.mapping.toJS(me.formComment);
                    var selRow = me.gridComment._editGrid.getSelected();
                    if (selRow == null) {
                        //新增
                        me.gridComment._editGrid.addRow(row);
                    } else {
                        //修改
                        var index = me.gridComment._editGrid.getSelectedIndex();
                        me.gridComment._editGrid.updateRow({ index: index, row: row });
                    }

                    me.winComment._close();
                }
            },
            {
                iconCls: 'icon-cancel',
                text: '取消',
                handler: function () {
                    me.winComment._close();
                }
            }
        ]
    };

    //-- 对评论进行顶、踩


    //-- 评论顶、踩
    me.commentUpDownGrid = {
        url: ko.observable(),
        origUrl: "/video/main/updowns?comment=",
        toolbar: [
            {
                iconCls: 'icon-add',
                text: '新增',
                handler: function () {
                    me.commentUpDownGrid._add();
                }
            },
            {
                iconCls: 'icon-delete',
                text: '删除',
                handler: function () {
                    me.commentUpDownGrid._delete();
                }
            }
        ],
        onDblClickRow: function () {
            if (!me.commentUpDownGrid._editGrid.validate()) {
                return false;
            }
            me.commentUpDownGrid._recalTotalUpDown();
            me.commentUpDownGrid._edit();
        },
        onClickRow: function () {
            if (!me.commentUpDownGrid._editGrid.validate()) {
                return false;
            }
            me.commentUpDownGrid._recalTotalUpDown();
        },
        _onAfterLoadSuccess: function (data) {
            me.formComment._upDowns(data.rows);
        },
        _add: function () {
            if (!me.commentUpDownGrid._editGrid.validate()) {
                return false;
            }
            me.commentUpDownGrid._recalTotalUpDown();
            var row = $.extend({}, me.defaultData.formCommentUpDown, { Id: Utils.getGuid() });
            me.commentUpDownGrid._editGrid.addRow(row);
            me.commentUpDownGrid._resize();
        },
        _edit: function () {
            if (!me.commentUpDownGrid._editGrid.validate()) {
                return false;
            }
            me.commentUpDownGrid._recalTotalUpDown();
            me.commentUpDownGrid._editGrid.begin();
        },
        _delete: function (index) {
            me.commentUpDownGrid._editGrid.deleteRow(index);
            me.commentUpDownGrid._recalTotalUpDown();
            me.commentUpDownGrid._resize();
        },
        _formatSelectOwner: function (value, record, index) {
            console.log(value);
            var btnSelect = '<span style="padding-right:10px;">' + (value || '') + '</span><a class="l-btn dh-l-btn" style="width:50px;" href="javascript:void(0)" onclick="commentUpDownGrid._selectOwner(' + index + ')" >选择</a>';
            return btnSelect;
        },
        _selectOwner: function (index) {
            me.winSelectOwner.currOpenTrigger = me.winSelectOwner.openTrigger.commentUpDown;
            me.winSelectOwner._open();
        },
        _UpdateSelectedOwner: function (owner) {
            var row = me.commentUpDownGrid._editGrid.getSelected();
            var index = me.commentUpDownGrid._editGrid.getSelectedIndex();
            row._OwnerName = owner.Name;
            row.OwnerId = owner.Id;
            me.commentUpDownGrid._editGrid.updateRow({ index: index, row: row });
        },
        _recalTotalUpDown: function () {
            var rows = me.commentUpDownGrid.datagrid("getRows");
            var totalUp = 0;
            var totalDown = 0;
            $.each(rows, function (idx, row) {
                if (row.isUp) {
                    totalUp++;
                } else {
                    totalDown++;
                }
            });
            me.formComment.UpCount(totalUp);
            me.formComment.DownCount(totalDown);
        },
        _ok: function () {
            //var changes = me.commentUpDownGrid._editGrid.getPostAllData();
            var changes = me.commentUpDownGrid._editGrid.getPureChanges();
            var upDowns = ko.mapping.toJS(me.formComment._upDowns());
            $.each(changes, function (type, array) {
                $.each(array, function (idx, val) {
                    var foundIdx = Utils.findObjIdxInArray(val, upDowns, ["Id"]);
                    val._rowState = type;
                    if (val._isnew == true && val._rowState != "deleted") {
                        val._rowState = "inserted";
                    }
                    if (foundIdx < 0) {
                        // 删除记录
                        upDowns.push(val);
                    } else {
                        // 新增及修改的记录
                        upDowns[foundIdx] = val;
                    }
                });
            });
            me.formComment._upDowns(upDowns);
            me.commentUpDownGrid.datagrid("acceptChanges");
            //console.log(ko.mapping.toJS(me.formComment._upDowns()));
        },
        _editGrid: undefined,
        init: function () {
            me.commentUpDownGrid._editGrid = new com.editGridViewModel(me.commentUpDownGrid);
        }
    };
    me.commentUpDownGrid.init();


    me.winSelectOwner = {
        title: '选择用户',
        width: 400,
        height: 400,
        openTrigger: { mark: 1, comment: 2, commentUpDown: 3 },
        currOpenTrigger: undefined
    }

    me._closePickOwnerWin = function () {
        me.winSelectOwner._close();
    }
    me._okPickOwnerWin = function (owner) {
        me.winSelectOwner._close();
        if (me.winSelectOwner.currOpenTrigger == me.winSelectOwner.openTrigger.mark) {
            me.gridMark._UpdateSelectedOwner(owner);
        } else if (me.winSelectOwner.currOpenTrigger == me.winSelectOwner.openTrigger.comment) {
            me.formComment._OwnerName(owner.Name);
            me.formComment.OwnerId(owner.Id);
        } else if (me.winSelectOwner.currOpenTrigger == me.winSelectOwner.openTrigger.commentUpDown) {
            me.commentUpDownGrid._UpdateSelectedOwner(owner);
        }
    }


    me._actionSave = function (post) {
        if (!me.gridMark._editGrid.validate()) {
            return false;
        }
        me.gridMark._recalTotalMark();

        //主表
        var master = ko.mapping.toJS(me.form);
        //从表
        var marks = me.gridMark._editGrid.getPureChanges();
        marks = com.formatPostData(marks);
        //从表
        var comments = me.gridComment._editGrid.getPureChanges();
        comments = com.formatPostData(comments);

        // 从从表
        $.each(comments, function (type, array) {
            $.each(array, function (idx, comment) {
                var commentUpdown = {
                    inserted: [],
                    updated: [],
                    deleted: []
                };
                if (comment.data._upDowns.length > 0) {
                    for (var ctype in commentUpdown) {
                        commentUpdown[ctype] = $.grep(comment.data._upDowns, function (updown, updownIdx) {
                            return updown._rowState == ctype;
                        });
                    }
                    console.log(commentUpdown);
                    com.formatPostData(commentUpdown);
                    comment.children = { commentUpdowns: commentUpdown };
                }
            });
        });


        var postData = {};
        if (me.isEditing) {
            postData = { master: { updated: [{ data: master, children: { marks: marks, comments: comments } }] } };
        } else {
            postData = { master: { inserted: [{ data: master, children: { marks: marks, comments: comments } }] } };
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
            data.defaultData = $.extend({}, data.defaultData, {
                formMark: {
                    Mark: 0,
                    OwnerId: 0
                },
                formComment: {
                    Comment: '',
                    OwnerId: 0,
                    UpCount: 0,
                    DownCount: 0,
                    _OwnerName: '',
                    _upDowns: []
                },
                formCommentUpDown: {
                    IsUp: true,
                    OwnerId: 0,
                    _OwnerName: '',
                }
            })
            viewModel.call(window, data);
            window.init();
            ko.bindingViewModel();
        }
    })
})();