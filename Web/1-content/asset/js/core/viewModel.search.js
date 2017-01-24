var com = com || {};
com.viewModel = com.viewModel || {};

com.viewModel.search = function (data) {
    com.viewModel.common.apply(this, arguments);

    var me = this;

    // console.log(me.resx);
    //me.form = ko.mapping.fromJS(data.form);
    //delete me.form.__ko_mapping__;
    me.formImport = {
        confirm: ko.observable(),
        content: ko.observable(),
        logName: ko.observable(),
        logPath: ko.observable(),
        file: ko.observable()
    };

    me.grid = {
        url: me.urls.query,
        fixed: true,
        pagePosition: 'both',
        printSetting: undefined,
        queryParams: ko.observable(),
        onLoadSuccess: function () {
            if (__resizeLayout)
                __resizeLayout();
        },
        doRemoteFilter: function () {
            var opts = me.grid.datagrid('options');
            var filterParam = {};
            for (var i = 0; i < opts.filterRules.length; ++i) {
                filterParam[opts.filterRules[i].field] = opts.filterRules[i].value;
            }


            var param = ko.toJS(me.form);
            delete param.__ko_mapping__;


            if (!me.grid || !me.grid.datagrid) return false;
            var pages = me.grid.datagrid("getPager");
            if (!pages || pages.length == 0) return false;

            $(pages[0]).pagination("options").pageNumber = 1;
            $(pages[1]).pagination("options").pageNumber = 1;

            $.extend(param, filterParam);
            me.grid.queryParams(param);

            $(pages[0]).pagination("refresh");
            $(pages[1]).pagination("refresh");
            me.grid.datagrid('clearChecked');

        },
        checkEnableFilter: function () {
            var opts = me.grid.datagrid('options');
            if (!opts.enableFilter) return false;
            var filters = [];
            $.each(opts.columns[0], function (idx, col) {
                if (col.filter) {
                    //col.filter.field = col.field;
                    var hasProp = false;
                    for (var p in col.filter) {
                        hasProp = true;
                        break;
                    }
                    if (hasProp) {
                        col.filter.field = col.field;
                        if (!col.filter.type) {
                            col.filter.type = 'uc_validatebox';
                        }
                        if (!col.filter.paramField) {
                            col.filter.paramField = col.field;
                        }
                    }

                } else {
                    col.filter = { type: 'label', field: col.field };
                }
                col.filter.options = col.filter.options || {};
                var options = {};
                switch (col.filter.type) {
                    case 'uc_dateRange':
                        options = {
                            panelWidth: 388,
                            onSelect: function (from, to) {
                                var value = $(this).uc_dateRange('getValue');
                                if (!value) {
                                    grid.datagrid('removeFilterRule', col.filter.paramField);
                                } else {
                                    grid.datagrid('addFilterRule', {
                                        field: col.filter.paramField,
                                        op: 'equal',
                                        value: value
                                    });
                                }
                                grid.datagrid('doFilter');
                            }
                        };
                        break;
                    case 'uc_combobox':
                        options = {
                            onChange: function (value) {
                                if (value == '') {
                                    grid.datagrid('removeFilterRule', col.filter.paramField);
                                } else {
                                    grid.datagrid('addFilterRule', {
                                        field: col.filter.paramField,
                                        op: 'equal',
                                        value: value
                                    });

                                }
                                grid.datagrid('doFilter');
                            }
                        }
                        break;
                    case 'uc_dollar':
                    case 'uc_percent':
                    case 'uc_numberspinner':
                        options = {
                            onChange: function (value) {
                                if (value == '') {
                                    grid.datagrid('removeFilterRule', col.filter.paramField);
                                } else {
                                    grid.datagrid('addFilterRule', {
                                        field: col.filter.paramField,
                                        op: 'equal',
                                        value: value
                                    });

                                }
                                grid.datagrid('doFilter');
                            }
                        }
                }
                $.extend(col.filter.options, options, col.filter.options);
                filters.push(col.filter);
            });
            if (opts.filters) {
                $.merge(filters, opts.filters);
            }
            var notLabelFilters = $.grep(filters, function (val, idx) {
                return val.type != 'label';
            });
            if (notLabelFilters.length > 0)
                me.grid.datagrid('enableFilter', filters);
        }
    };

    me.grid._printArea = function (options) {
        var settings = $.extend(me.grid.printSetting, com.printSetting, options);
        var writeDoc;
        var printWindow;

        switch (settings.mode) {
            case com.modes.iframe:
                var f = new com.Iframe(settings);
                writeDoc = f.doc;
                printWindow = f.contentWindow || f;
                break;
            case com.modes.popup:
                printWindow = new Popup();
                writeDoc = printWindow.doc;
        }
        writeDoc.open();
        var head = writeDoc.createElement("head"),
            body = writeDoc.createElement("body");
        title = writeDoc.createElement("title"),
        style = writeDoc.createElement("style");
        //title.innerHTML ="{0}".format( resx[parent.window.__pageSetting.title] || parent.window.__pageSetting.title);
        title.innerHTML = "{0}".format(me.resx[window.__pageSetting.title] || window.__pageSetting.title);
        style.innerHTML = "body{font-size:12px;} table{font-size:12px;border-collapse:collapse;border-spacing:0px;} table td{border:1px solid;padding:3px;} table th{border:1px solid;padding:3px;} ";
        head.appendChild(title);
        head.appendChild(style);
        var tableData = me.grid.datagrid("getRows"),
            colsInfo = me.grid.datagrid("options").columns;
        var table = writeDoc.createElement("table"),
            thead = writeDoc.createElement("thead"),
            thtr = writeDoc.createElement("tr"),
            tbody = writeDoc.createElement("tbody");

        if (!tableData || !tableData.length) {
            com.message("wran", me.resx.no_print_data);
            return false;
        }

        for (var rowIdx in tableData) {
            var tr = writeDoc.createElement("tr");
            var rowData = tableData[rowIdx];
            $.each(colsInfo[0], function (colIdx, col) {
                if (rowIdx == 0) {
                    var th = writeDoc.createElement("th");
                    th.innerHTML = col.title;
                    thtr.appendChild(th);
                }

                var colData = rowData[col.field]
                if (col.formatter) {
                    colData = col.formatter(colData, rowData, rowIdx);
                }
                var td = writeDoc.createElement("td");
                td.innerHTML = colData;
                tr.appendChild(td);
            });

            tbody.appendChild(tr);
        }

        thead.appendChild(thtr);
        table.appendChild(thead);
        table.appendChild(tbody);
        body.appendChild(table);

        writeDoc.write("<html>" + $(head).html() + $(body).html() + "</html>");
        writeDoc.close();

        printWindow.focus();
        printWindow.print();

        if (settings.mode == com.modes.popup && settings.popClose) {
            printWindow.close();
        }
    };

    me._printGrid = function () {
        me.grid._printArea();
    };

    me.grid.queryParams(data.form);

    me._beforeAdd = undefined;
    me.showWin = function (title, url, iwidth, iheight, winType) {
        /*if (winType != 'popUp') {
            // lgr 2015-04-20 rental 的编辑界面直接在新界面中打开
            window.open(url);
            return;
        }
        */
        //TODO:用于替换Test,替换按钮，弹出窗体
        //url = url.replace("/test", "");


        var win = $('#__win');
        var width, height;
        $('#ifr').hide();
        $('#ifr').attr('src', '');

        //为了防止用户看到 iframe 显示的前个页面内容，用 settimeout 延迟弹出层；
        setTimeout(function () {
            $('#ifr').show();

            if (iwidth || iheight) {
                height = iheight || $(document.body).height() - 40;
                width = iwidth || $(document.body).width() - 40;
                //width = width > 1000 ? 1000 : width;
                //height = height > 600 ? 600 : height;
                if (!iheight && __pageSetting && __pageSetting.modalHeight) {
                    height = __pageSetting.modalHeight > height ? height : __pageSetting.modalHeight;
                }
                if (!iwidth && __pageSetting.modalWidth) {
                    width = __pageSetting.modalWidth > width ? width : __pageSetting.modalWidth;
                } else {
                    width = width > 1000 ? 1000 : width;
                }

                $('#ifr').attr('src', url);
                win.window('resize', { height: height, width: width }).window('setTitle', title).window('open').window('center');

            }
            else if (!__pageSetting || (!__pageSetting.modalHeight && !__pageSetting.modalWidth)) {
                $('#ifr').attr('src', url);
                win.window('maximize').window('setTitle', title).window('open').window('center');
            } else {
                height = $(document.body).height() - 40;
                width = $(document.body).width() - 40;
                //width = width > 1000 ? 1000 : width;
                //height = height > 600 ? 600 : height;
                var isMax = true;;
                if (__pageSetting && __pageSetting.modalHeight) {
                    if (__pageSetting.modalHeight < height - 100) {
                        isMax = false;
                    }

                    height = __pageSetting.modalHeight > height ? height : __pageSetting.modalHeight;
                }
                if (__pageSetting.modalWidth) {
                    if (__pageSetting.modalWidth < width) {
                        isMax = false;
                    }
                    width = __pageSetting.modalWidth > width ? width : __pageSetting.modalWidth;
                } else {
                    width = width > 1000 ? 1000 : width;
                }
                $('#ifr').attr('src', url);
                if (isMax) {
                    // win.window('maximize').window('setTitle', title).window('open').window('center');
                    win.window('maximize').window('setTitle', title).window('open');
                } else {
                    //win.window('resize', { height: height, width: width }).window('setTitle', title).window('open').window('center');
                    win.window('resize', { height: height, width: width }).window('setTitle', title).window('open').window('center');
                    if (win.window('options').top > 100) {
                        win.window('move', { top: 100 });
                    }
                }


            }
        }, 0)
        return;

    };
    me.closeWin = function () {
        var win = $('#__win');
        win.window('close');
    };

    //-- notice that grid.datagrid() will be declared in koext.js
    me.grid.onDblClickRow = function () {
        var thisData = me.__tools["edit"];
        if (thisData) {
            me._edit();
        } else {
            thisData = me.__tools["detail"];
            if (thisData) {
                me._detail();
            }
        }
    };


    if (me.viewType == "approval") {
        me.grid.onDblClickRow = function () {
            me._detail();
        };
    }

    me._refresh = function () {
        me._query();
    };
    me._search = function () {
        me._query();
    }

    me._query = function () {
        var param = ko.toJS(me.form);
        delete param.__ko_mapping__;
        //param.pageNumber = 1;
        if (!me.grid || !me.grid.datagrid) return false;
        var pages = me.grid.datagrid("getPager");
        if (!pages || pages.length == 0) return false;

        $(pages[0]).pagination("options").pageNumber = 1;
        $(pages[1]).pagination("options").pageNumber = 1;
        me.grid.queryParams(param);

        $(pages[0]).pagination("refresh");
        $(pages[1]).pagination("refresh");
        me.grid.datagrid('clearChecked');
    };

    me._searchAll = function (value) {

        var pages = me.grid.datagrid("getPager");
        $(pages[0]).pagination("options").pageNumber = 1;
        $(pages[1]).pagination("options").pageNumber = 1;

        var param = ko.toJS(me.form);
        delete param.__ko_mapping__;
        var searchValue = $("#__btnSearch").val();
        if ($.trim(searchValue)) {
            param._value = searchValue;
        }
        param.pageNumber = 1;
        me.grid.queryParams(param);
        //me.grid.queryParams({ _value: value, pageNumber: 1 });
        $(pages[0]).pagination("refresh");
        $(pages[1]).pagination("refresh");
        me.grid.datagrid('clearChecked');
    }

    me._delete = function (target) {
        me._remove(target);
    }

    me._export = function (target) {
        var param = ko.toJS(me.form);
        delete param.__ko_mapping__;
        var searchValue = $("#__btnSearch").val();
        if ($.trim(searchValue)) {
            param._value = searchValue;
        }
        var thisData = target ? $(target).data("data") : me.__tools["export"];
        if (!thisData) return
        var url = thisData.url;
        com.ajax({
            url: url,
            type: 'GET',
            data: param,
            dataType: 'JSON',
            success: function (data, status, jqxhr) {
                if (data) {
                    if (typeof data != 'object')
                        data = JSON.parse(data);
                    if (data.status === true) {
                        if ($("#downloadIframe")) {
                            $("#downloadIframe").remove();
                        }
                        $(document.body).append("<iframe id='downloadIframe' style='display:none' src='" + com.preUrl + "/utilis/Utilis/Download?isChecked=false&downloadName=" + data.downloadName + "&relativeFileFullName=" + data.relativeFileFullName + "' />");
                    } else if (data.status === false) {
                        com.message("warn", data.msg);
                    } else {
                        com.message("error", data.msg);
                    }
                } else {
                    com.message("error", "network error!");
                }
            },
            error: function (jqxhr, status, errorThrown) {
                com.message("error", status + errorThrown);
            }
        });
    };

    me._editWin = {
        closed:true,
        modal:true,
        minimizable:false,
        _close: function () {
            me._editWin._close();
        },
        _open: function (title, url, iwidth, iheight, winType) {
            /*if (winType != 'popUp') {
                // lgr 2015-04-20 rental 的编辑界面直接在新界面中打开
                window.open(url);
                return;
            }
            */
            //TODO:用于替换Test,替换按钮，弹出窗体
            //url = url.replace("/test", "");
     
            var width, height;
            $('#ifr').hide();
            $('#ifr').attr('src', '');
            var win = me._editWin._$elem();
            //为了防止用户看到 iframe 显示的前个页面内容，用 settimeout 延迟弹出层；
            setTimeout(function () {
                $('#ifr').show();

                if (iwidth || iheight) {
                    height = iheight || $(document.body).height() - 40;
                    width = iwidth || $(document.body).width() - 40;
                    //width = width > 1000 ? 1000 : width;
                    //height = height > 600 ? 600 : height;
                    if (!iheight && __pageSetting && __pageSetting.modalHeight) {
                        height = __pageSetting.modalHeight > height ? height : __pageSetting.modalHeight;
                    }
                    if (!iwidth && __pageSetting.modalWidth) {
                        width = __pageSetting.modalWidth > width ? width : __pageSetting.modalWidth;
                    } else {
                        width = width > 1000 ? 1000 : width;
                    }

                    $('#ifr').attr('src', url);
                    me._editWin.win.window('resize', { height: height, width: width }).window('setTitle', title).window('open').window('center');

                }
                else if (!__pageSetting || (!__pageSetting.modalHeight && !__pageSetting.modalWidth)) {
                    $('#ifr').attr('src', url);
                    win.window('maximize').window('setTitle', title).window('open').window('center');
                } else {
                    height = $(document.body).height() - 40;
                    width = $(document.body).width() - 40;
                    //width = width > 1000 ? 1000 : width;
                    //height = height > 600 ? 600 : height;
                    var isMax = true;;
                    if (__pageSetting && __pageSetting.modalHeight) {
                        if (__pageSetting.modalHeight < height - 100) {
                            isMax = false;
                        }

                        height = __pageSetting.modalHeight > height ? height : __pageSetting.modalHeight;
                    }
                    if (__pageSetting.modalWidth) {
                        if (__pageSetting.modalWidth < width) {
                            isMax = false;
                        }
                        width = __pageSetting.modalWidth > width ? width : __pageSetting.modalWidth;
                    } else {
                        width = width > 1000 ? 1000 : width;
                    }
                    $('#ifr').attr('src', url);
                    if (isMax) {
                        // win.window('maximize').window('setTitle', title).window('open').window('center');
                        win.window('maximize').window('setTitle', title).window('open');
                    } else {
                        //win.window('resize', { height: height, width: width }).window('setTitle', title).window('open').window('center');
                        win.window('resize', { height: height, width: width }).window('setTitle', title).window('open').window('center');
                        if (win.window('options').top > 100) {
                            win.window('move', { top: 100 });
                        }
                    }


                }
            }, 0)
            return;
        }
    };

    me._winUploadImport = {
        title: me.resx['__import'],
        width: 450,
        height: 300,
        buttons: [
            {
                text: me.resx.__close,
                iconCls: 'icon-close',
                handler: function () {
                    me._winUploadImport._close();
                }
            }
        ]

    };
    me._dialogMsgImport = {
        title: me.resx['__info'],
        width: 700,
        height: 330,
        buttons: [
            {
                text: me.resx.__close,
                iconCls: 'icon-close',
                handler: function () {
                    me._dialogMsgImport._close();
                }
            },
            {
                text: me.resx.__download,
                iconCls: 'icon-download',
                handler: function () {
                    if ($("#downloadIframe")) {
                        $("#downloadIframe").remove();
                    }
                    $(document.body).append("<iframe id='downloadIframe' style='display:none' src='/utilis/Utilis/Download?isChecked=false&downloadName=" + me.formImport.logName() + "&relativeFileFullName=" + me.formImport.logPath() + "' />");
                }
            }
        ]

    };
    me._dialogConfirmImport = {
        title: me.resx['__confirm'],
        width: 700,
        height: 330,
        buttons: [
            {
                text: me.resx.__yes,
                iconCls: 'icon-ok',
                handler: function () {
                    me._confirmImport(me.formImport.file(), false, true);
                    me._dialogConfirmImport._close();
                }
            },
            {
                text: me.resx.__no,
                iconCls: 'icon-no',
                handler: function () {
                    me._confirmImport(me.formImport.file(), false, false);
                    me._dialogConfirmImport._close();
                }
            },
            {
                text: me.resx.__cancel,
                iconCls: 'icon-cancel',
                handler: function () {
                    me._dialogConfirmImport._close();
                }
            }
        ]
    };
    me._onImportUploadSuccess = function (record) {
        me.formImport.file(record.relativeFileName);
        //me._confirmImport(record.relativeFileName, true);
        me._confirmImport(record.relativeFileName, false, true);
    };
    me._onImportQueueComplete = function () {
        me._winUploadImport._close();
    };
    me._confirmImport = function (filename, isCheck, isRepeatedUpdate) {
        var param = '';
        if (isRepeatedUpdate == false) param = '&isRepeatedUpdate=false';
        else if (isRepeatedUpdate == true) param = '&isRepeatedUpdate=true';
        $("#__content").mask(me.resx.__importingWait);
        com.ajax({
            type: 'GET',
            url: me.urls.import + "?filePath=" + filename + "&isCheck=" + isCheck + param,
            success: function (data, status, xhr) {
                $("#__content").unmask(me.resx.__importingWait);
                if (typeof data == 'object' && data.status == 'confirm') {
                    me.formImport.confirm(me.resx[data.msg_code]);
                    me.formImport.content(data.content);
                    me._dialogConfirmImport._open();
                } else {
                    com.handleResp(data, undefined, undefined, function () {
                        if (data.status == true) {
                            me.formImport.confirm(me.resx[data.msg_code] + ', ' + me.resx["__success"] + ':' + data.right_msg.__success + ', ' + me.resx["__failed"] + ":" + data.right_msg.__failed);
                            me.formImport.content(data.content);
                            me.formImport.logPath(data.logPath);
                            me.formImport.logName(data.logName);
                            me._dialogMsgImport._open();
                        }
                        me._refresh();
                    });
                }
            }
        });
    }
    me._import = function () {
        var body = me._winUploadImport._$elem().panel("body");
        $(body).html("<iframe src='/utilis/Utilis/Uploadify?onUploadSuccess=_onImportUploadSuccess&onQueueComplete=_onImportQueueComplete&multi=false&auto=true&fileType=*.xls;*.xlsx' scrolling='auto' frameborder='0' style='width:100%;height:95%;'/>");
        me._winUploadImport._open();

    }


    //#region tools
    me._beforeEdit = undefined;
    me._actionEdit = undefined;
    me._afterEdit = undefined;
    me._edit = function (target) {
        var thisData = target ? $(target).data("data") : me.__tools["edit"];
        if (!thisData) return;

        var row = me.grid.datagrid("getSelected");
        var obj = { row: row };
        if ((typeof me._beforeEdit === 'function' && !me._beforeEdit(me, thisData, obj)))
            return false;

        var url = '';
        row = obj.row;
        if (!row) return com.message("error", me.resx.noneSelection);
        if (me.keyField.split(',').length > 1) {
            var para = "";
            $.each(me.keyField.split(','), function (idx, val) {
                para += val + "=" + row[val] + "&";
            });
            para = para.substr(0, para.length - 1);
            //com.openTab(me.resx.editTitle, "{0}?{1}".format(me.urls.edit, para));
            url = "{0}?{1}".format(thisData.Url, para);

        } else {
            //com.openTab(me.resx.editTitle, me.urls.edit + row[me.keyField]);
            //url = thisData.url + row[me.keyField];
            url = "{0}?{1}={2}".format(thisData.Url, me.keyField, row[me.keyField]);
        }

        var title = (me.resx[thisData.Name] || me.resx['__edit']) + ' ' + me.resx[__pageSetting.title] || __pageSetting.title || data.Code;
        var title = '编辑 ' + __pageSetting.title;

        var obj = { context: me, toolData: thisData, url: url, row: row, title: title };

        // action edit 是在 post 回服务前要执行的方法，一般把 post 方法的参数，作为自己的参数， 如 me.showWin(title,url) 中的 title,url,
        // 当然第一个参数是传递调用该方法的上下文环境,第二个 thisData 是当前tool 的数据，第三个 row 是选中的行；
        if ((typeof me._actionEdit === 'function' && !me._actionEdit(obj)))
            return false;

        //me.showWin(obj.title, obj.url, null, null, thisData.win_type);
        me._editWin._open(obj.title, obj.url, null, null, thisData.WinType);

        if (typeof me._afterEdit == 'function')
            me._afterEdit(me);
    };


    me._beforeRemove = undefined;
    me._afterRemove = undefined;
    me._actionRemove = undefined;
    me._remove = function (target) {
        var rows = [];
        if (me.grid) {
            // if has _delCB column, then getChecked
            if ($.grep(me.grid.datagrid('options').columns, function (idx, row) { return row.field == '_delCB'; }).length == 1) {
                rows = me.grid.datagrid('getChecked');
            }
            if (rows.length == 0) {
                row = me.grid.datagrid("getSelected");
                if (row)
                    rows.push(row);
            }
            if (!rows || rows.length == 0) return com.message("error", me.resx.__noneSelection)
            /* 
            if (me.keyField.split('&').length > 1) {
            var para = "";
            $.each(me.keyField.split('&'), function (idx, val) {
            para += val + "=" + row[val] + "&";
            });
            para = para.substr(0, para.length - 1);
            url = "{0}?{1}".format(me.urls.remove, para);
    
            } else {
            url = me.urls.remove + row[me.keyField];
            }
            */
        }
        var deleted = { deleted: rows };
        com.formatPostData(deleted);
        var postData = { master: deleted };

        var thisData = target ? $(target).data('data') : me.__tools["remove"];
        if ((typeof me._beforeRemove === 'function' && !me._beforeRemove(me, toolData)))
            return false;


        var obj = { context: me, toolData: thisData, url: thisData.Url, postData: postData };
        if ((typeof me._actionRemove === 'function' && !me._actionRemove(obj)))
            return false;
        com.showComfirm("删除确认", "是否删除选中的记录?", function (b) {
            if (b) {
                com.ajax({
                    type: "POST",
                    url: obj.url,
                    data: ko.toJSON(obj.postData),
                    success: function (resp) {
                        if (typeof resp === 'string' && Utils.isJson(resp)) {
                            resp = JSON.parse(resp);
                        }

                        if (resp === 1 || resp === true || resp.Status === true) {
                            com.message("success","删除成功");
                            me._query();

                        } else {
                            com.message("error", "删除失败," + resp);

                        }
                    }
                });
            }
        });

        if (typeof me._afterRemove == 'function')
            me._afterRemove(me);
    };

    me._beforeAdd = undefined;
    me._afterAdd = undefined;
    me._actionAdd = undefined;
    me._add = function (target) {
        var toolData = target ? $(target).data("data") : me.__tools["add"];
        if ((typeof me._beforeAdd === 'function' && !me._beforeAdd(me, toolData)))
            return false;

        //me.redirect(me.resx.addTitle, me.urls.add);
        var title = me.resx['__add'] + ' ' + me.resx[__pageSetting.title] || __pageSetting.title || data.Code;
        var title = '新增' + ' ' + __pageSetting.title;

        var obj = { context: me, toolData: toolData, url: toolData.Url, title: title };

        if ((typeof me._actionAdd === 'function' && !me._actionAdd(obj)))
            return false;
        console.log(obj.url);
        //me.showWin(obj.title, obj.url, null, null, toolData.win_type);
        me._editWin._open(obj.title, obj.url, null, null, toolData.WinType);

        if (typeof me._afterAdd == 'function')
            me._afterAdd(me);
        //com.openTab(me.resx.addTitle, me.urls.add);
    };

    me._beforeDetail = undefined;
    me._actionDetail = undefined;
    me._afterDetail = undefined;
    me._detail = function (target) {
        var thisData = target ? $(target).data("data") : me.__tools["detail"];
        if ((typeof me._beforeDetail === 'function' && !me._beforeDetail(me, toolData)))
            return false;

        var url = '';
        var row = me.grid.datagrid("getSelected");
        if (!row) return com.message("error", me.resx.noneSelection);
        if (me.keyField.split(',').length > 1) {
            var para = "";
            $.each(me.keyField.split(','), function (idx, val) {
                para += val + "=" + row[val] + "&";
            });
            para = para.substr(0, para.length - 1);
            //com.openTab(me.resx.editTitle, "{0}?{1}".format(me.urls.edit, para));
            url = "{0}?{1}".format(thisData.Url, para);

        } else {
            //com.openTab(me.resx.editTitle, me.urls.edit + row[me.keyField]);
            url = thisData.Url + row[me.keyField];
        }

        var title = me.resx['__detail'] + ' ' + me.resx[__pageSetting.title] || __pageSetting.title || data.Code;

        var obj = { context: me, toolData: thisData, row: row, title: title, url: url };
        if ((typeof me._actionDetail === 'function' && !me._actionDetail(obj)))
            return false;

        //me.showWin(obj.title, obj.url);
        me._editWin._open(obj.title, obj.url);

        if (typeof me._afterDetail == 'function')
            me._afterDetail(me);
    };

    me._beforeApprove = undefined;
    me._afterApprove = undefined;
    me._actionApprove = undefined;
    me._approve = function (target) {
        var toolData = target ? $(target).data("data") : me.__tools["approve"];
        if ((typeof me._beforeApprove === 'function' && !me._beforeApprove(me, toolData)))
            return false;

        var selRow = me.grid.datagrid('getSelected');


        var url = toolData.Url + (selRow ? selRow[me.keyField] : '');
        var canContinue = selRow;
        var obj = { context: me, toolData: toolData, url: url, row: selRow, canContinue: canContinue };

        if ((typeof me._actionApprove === 'function' && !me._actionApprove(obj)))
            return false;

        if (obj.canContinue) {
            com.ajax({
                type: 'GET',
                url: obj.url,
                success: function (resp) {
                    if (typeof resp === 'string' && Utils.isJson(resp)) {
                        resp = JSON.parse(resp);
                    }

                    if (resp === 1 || resp === true || resp.status === true) {
                        if (typeof me._afterApprove == 'function')
                            me._afterApprove(me);

                        me._query();
                        com.message("success", me.resx.__approveSuccess);
                    } else {
                        com.message("failed", me.resx.__approveFailed + " " + resp);
                    }
                }
            });

        }

    };

    me._beforeDisapprove = undefined;
    me._afterDisapprove = undefined;
    me._actionDisapprove = undefined;
    me._disapprove = function (target) {
        var toolData = target ? $(target).data("data") : me.__tools["approve"];
        if ((typeof me._beforeDisapprove === 'function' && !me._beforeDisapprove(me, toolData)))
            return false;

        var selRow = me.grid.datagrid('getSelected');


        var url = toolData.Url + (selRow ? selRow[me.keyField] : '');
        var canContinue = selRow;
        var obj = { context: me, toolData: toolData, url: url, row: selRow, canContinue: canContinue };

        if ((typeof me._actionDisapprove === 'function' && !me._actionDisapprove(obj)))
            return false;

        if (obj.canContinue) {
            com.ajax({
                type: 'GET',
                url: obj.url,
                success: function (resp) {
                    if (typeof resp === 'string' && Utils.isJson(resp)) {
                        resp = JSON.parse(resp);
                    }

                    if (resp === 1 || resp === true || resp.status === true) {
                        if (typeof me._afterDisapprove == 'function')
                            me._afterDisapprove(me);

                        me._query();
                        com.message("success", me.resx.__disapproveSuccess);
                    } else {
                        com.message("failed", me.resx.__disapproveFailed + " " + resp);
                    }
                }
            });

        }

    };

    me._beforeReject = undefined;
    me._afterReject = undefined;
    me._actionReject = undefined;
    me._reject = function (target) {
        var toolData = target ? $(target).data("data") : me.__tools["reject"];
        if ((typeof me._beforeReject === 'function' && !me._beforeReject(me, toolData)))
            return false;

        var selRow = me.grid.datagrid('getSelected');

        var url = toolData.Url + selRow[me.keyField];
        var obj = { context: me, toolData: toolData, url: url, row: selRow };

        if ((typeof me._actionReject === 'function' && !me._actionReject(obj)))
            return false;

        if (obj.row) {
            com.ajax({
                type: 'GET',
                url: obj.url,
                success: function (resp) {
                    if (typeof resp === 'string' && Utils.isJson(resp)) {
                        resp = JSON.parse(resp);
                    }

                    if (resp === 1 || resp === true || resp.status === true) {
                        if (typeof me._afterApprove == 'function')
                            me._afterApprove(me);
                        me._query();
                        com.message("success", me.resx.__rejectSuccess);
                    } else {
                        com.message("failed", me.resx.__rejectFailed + " " + resp);
                    }
                }
            });
        }
    };



    me._beforeSave = function () { return true; };
    me._actionSave = undefined;
    me._afterSave = undefined;
    me._save = function (target, callback, hiddenMsg) {
        var postData = {};
        if (me.grid._editGrid) {
            if (!me.grid._editGrid.validate()) {
                me.message(me.resx.__input_required_field);
                return false;
            }

            if (typeof (me._beforeSave) == 'function' && !me._beforeSave(target)) return false;

            var postData = me.grid._editGrid.getPureChanges();
            com.formatPostData(postData);
            postData = { master: postData };
        }

        var toolData = target ? $(target).data("data") : me.__tools["save"];
        var url = toolData ? toolData.Url : '';

        var post = { context: me, toolData: toolData, postData: postData, url: url };
        if (typeof (me._actionSave) == 'function' && !me._actionSave(post)) {
            return false;
        }


        var postDataLen = 0;
        for (var key in post.postData) {
            for (var pKey in post.postData[key]) {
                if (Object.prototype.toString.call(post.postData[key][pKey]) == '[object Array]')
                    postDataLen = post.postData[key][pKey].length + postDataLen;
            }

        }
        if (!postDataLen) {
            com.message('warn', me.resx.INFO_NOT_CHANGED);
            return false;
        }

        me._post(post, function (success, resp) {
            if (success) {
                if (!hiddenMsg) {
                    var msg_code = post.msg_success || '__saveSuccess';
                    com.message("success", me.resx[msg_code]);
                }
                if (parent && parent._refresh) {
                    parent._refresh();
                }
            } else {
                if (!hiddenMsg) {
                    //if (typeof resp === 'string' && Utils.isJson(resp)) {
                    //    resp = JSON.parse(resp);
                    //    var msg = resp.msg_code != undefined ? me.resx[resp.msg_code] : "";
                    //    var right = resp.right_msg != undefined ? resp.right_msg : "";
                    //    var left = resp.left_msg != undefined ? resp.left_msg : "";
                    //    com.message("failed", left + msg + right);
                    //} else
                    if (typeof resp === 'object') {
                        var msg = resp.msg_code != undefined ? me.resx[resp.msg_code] : "";
                        var right = resp.right_msg != undefined ? resp.right_msg : "";
                        var left = resp.left_msg != undefined ? resp.left_msg : "";
                        com.message("failed", left + msg + ", " + right);

                    } else {
                        var msg_code = post.msg_failed || '__saveFailed';
                        com.message("failed", me.resx[msg_code] + " " + resp);
                    }
                }
            }
            if (callback)
            { callback(success, resp); }

            if (me._afterSave) {
                if (me._afterSave(success, resp)) {
                }
            } else if (success) {
            }
        });

    };

    me._post = function (post, callback) {
        $(document.body).mask('wait ...');
        com.ajax({
            type: "POST",
            url: post.url,
            data: ko.toJSON(post.postData),
            success: function (resp) {
                if (typeof resp === 'string' && Utils.isJson(resp)) {
                    resp = JSON.parse(resp);
                }

                if (resp === 1 || resp === true || resp.status === true) {
                    if (callback) {
                        callback(true, resp);
                    }
                    //me.httpMethod = "PUT";
                } else {
                    if (callback) {
                        callback(false, resp);
                    }
                }
                $(document.body).unmask(50);
            }
        });
    };
    //#endregion


    //region lzh add
    me.restForm = ko.mapping.fromJS(data.form || data.defaultData || data.otherData);
    me._restForm = function () {
        ko.mapping.fromJS(me.restForm, me.form);
    };
    //#endregion



    me._checkGridEnableFilter = function () {
        if (me.grid.datagrid) {
            me.grid.checkEnableFilter();
        } else {
            setTimeout(me._checkGridEnableFilter, 200);
        }
    };

    (function () {
        $(function () {
            //$('#gridLayout').uc_layout('panel', 'center').panel('setTitle', me.resx[__pageSetting.title]);
            //  $("<span class='dh-title'>" + me.resx[__pageSetting.title] + "</span>").prependTo($('#toolbar'));
            var search = $('<div class="header-search" style="float:right"><input style="float:right;color: blue !important; font-weight: bolder !important;" type="text" class="easyui-uc_searchbox" data-options="prompt:resx.__search" searcher="_searchAll" id="__btnSearch" /></div>').appendTo($("#toolbar"));
            $(search).find('input').uc_searchbox();

            me._checkGridEnableFilter();

        });
    })();

}