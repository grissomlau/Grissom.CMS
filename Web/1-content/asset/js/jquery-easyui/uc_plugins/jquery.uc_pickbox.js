(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_pickbox') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_pickbox';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_pickbox').options;
        var totalColWidth = 0;
        $.each(opts.columns[0], function (idx, val) {
            totalColWidth += val.width || val.title.length * 10;
        });
        opts.winWidth = opts.winWidth || totalColWidth + 60,
        opts.winHeight = opts.winHeight || 300;
        opts._reload = true;

        $(target).combo($.extend({}, opts, {
            onShowPanel: function () {
                var panel = $(target).combo('panel');
                var win = $.data(target, 'uc_pickbox').win;
                if (!win) {
                    var div = $('<div></div>').appendTo($('body'));
                    panel.appendTo(div);

                    win = div.window({
                        width: opts.winWidth || 550,
                        height: opts.winHeight || 300,
                        title: opts.title || '',
                        closed: true,
                        modal: opts.wiinModal || false,
                        minimizable: false,
                        onBeforeClose: function () {
                            panel.panel('options').closed = true;
                        },
                        onResize: function (width, height) {
                            $.data(target, 'uc_pickbox').layout.uc_layout('resize');
                            $.data(target, 'uc_pickbox').grid.uc_datagrid('resize');
                            opts.winWidth = width;
                            opts.winHeight = height;
                        }

                    });
                    $.data(target, 'uc_pickbox').win = win;
                }
                // init grid data
                if (opts.url && (opts._reload || opts.reloadEveryTimes)) {
                    com.ajax({
                        type: "GET",
                        url: opts.url,
                        data: opts.params,
                        success: function (data) {
                            if (data) {
                                $.data(target, 'uc_pickbox')._data = data;
                                $.data(target, 'uc_pickbox').grid.uc_datagrid("loadData", data);
                            } else {
                                com.message("error", data);
                            }
                            opts._reload = false;
                        },
                        error: function (xrq, status, errorMsg) {
                            com.message("error", errorMsg);
                        }
                    });
                }


                // $.data(target, 'uc_pickbox').grid.uc_datagrid("loadData", $.data(target, 'uc_pickbox')._data);
                if (opts.alignRight) {
                    // reset panel parent's parent's position to adjust current layout
                    var textbox = $(target).combo('textbox');
                    var winOpts = panel.parent().window('options');
                    panel.parent().window('move', { left: textbox.offset().left - winOpts.width + textbox.width() });
                }


                updateSelection(target);
                setTimeout(function () {
                    panel.parent().css({ 'top': '0px', 'left': '0px' });
                    panel.css({ 'border': '0', 'width': '100%', 'height': '100%' });
                    $.data(target, 'uc_pickbox').layout.uc_layout('resize');
                    $.data(target, 'uc_pickbox').grid.uc_datagrid('resize');
                }, 0);
                if (opts.winCenter) win.window('center');
                win.window('resize', { width: opts.width, height: opts.height }).window('open');
            },
            onHidePanel: function () {
                $.data(target, 'uc_pickbox').win && $.data(target, 'uc_pickbox').win.window('close');
            }
        }));

        var panel = $(target).combo('panel');
        panel.parent().css('position', 'relative');

        // windows

        // datagrid
        if (!$.data(target, 'uc_pickbox').grid) {
            var layout = $('<div class="easyui-layout" style="width:100%;height:100%;border:0px"><div data-options="region:\'north\',border:false" style="height:30px"><div class="dh-pickbox-toolbar"><div><input type="text" style="min-width:200px"/></div><div><a data-options="plain:true,iconCls:\'icon-ok\'">' + (resx.__ok || 'Ok') + '</a><a data-options="plain:true,iconCls:\'icon-close\'">' + (resx.__close || 'Close') + '</a></div></div></div><div data-options="region:\'center\',border:false"><table></table></div></div>').appendTo(panel);
            layout.uc_layout({ fix: true });
            layout.find('a:first').uc_linkbutton().bind('click', function () { ok(target); });
            layout.find('a:eq(1)').uc_linkbutton().bind('click', function () { close(target); });
            layout.find('input[type="text"]').uc_searchbox({ searcher: function (value, name) { search(target, value, name); } });
            var grid = layout.find('table');
            $.data(target, 'uc_pickbox').grid = grid;
            $.data(target, 'uc_pickbox').layout = layout;

            grid.uc_datagrid($.extend({}, {
                pagination: opts.pagination,
                sortable: opts.sortable,
                autoRowHeight: opts.autoRowHeight,
                fit: opts.fit,
                pageSize: opts.pageSize,
                remoteSort: opts.remoteSort,
                singleSelect: opts.singleSelect,
                columns: opts.columns,
                loadFilter: function (data) {
                    if (data && !data.rows) return { rows: data };
                    return data;
                },
                onDblClickRow: function () { ok(target); }
            }));
        }
        $.data($(target)[0], 'combo').combo.find('.combo-arrow').addClass('combo-search');
    }

    function ok(target) {
        var grid = $.data(target, 'uc_pickbox').grid;
        var opts = $.data(target, 'uc_pickbox').options;
        var selRows = grid.datagrid("getSelections");
        if (selRows.length > 0 && opts.singleSelect) {
            $(target).combo('setValue', selRows[0][opts.idField]);
            $(target).combo('setText', selRows[0][opts.textField]);
        } else {
            var valArr = [];
            var textArr = [];
            $.each(selRows, function (idx, val) {
                valArr.push(val[opts.idField]);
                textArr.push(val[opts.textField]);
            });
            $(target).combo('setValue', valArr.join(','));
            $(target).combo('setText', textArr.join(','));
        }
        if (opts.onOk) {
            opts.onOk(selRows, target);
        }
        $.data(target, 'uc_pickbox').win.window('close');
    }

    function close(target) {
        $.data(target, 'uc_pickbox').win.window('close');
    }

    function search(target, value, name) {
        var grid = $.data(target, 'uc_pickbox').grid;
        var opts = $.data(target, 'uc_pickbox').options;
        var data = $.data(target, 'uc_pickbox')._data;
        if (data && data.rows) data = data.rows;
        var suitableArr = [];
        if (data && value && $.trim(value)) {
            $.each(data, function (idx, val) {
                for (var i in opts.columns[0]) {
                    var reg = new RegExp(value, 'ig');
                    if (reg.test(val[opts.columns[0][i].field])) {
                        suitableArr.push(val);
                        break;
                    }
                }
            });
        }
        else {
            suitableArr = data;
        }
        if (grid.datagrid) {
            grid.datagrid('loadData', suitableArr);
            grid.datagrid('selectRow', 0);
        }
    }

    function updateSelection(target) {
        var grid = $.data(target, 'uc_pickbox').grid;
        var opts = $.data(target, 'uc_pickbox').options;
        var valArr = $(target).combo('getValues');
        var rows = grid.datagrid('getRows');
        if (valArr && valArr.length > 0) {
            $.each(rows, function (rowIdx, row) {
                $.each(valArr, function (idx, val) {
                    if (row[opts.idField] === val) {
                        grid.datagrid('selectRow', rowIdx);
                    }
                });
            });
        }
    }
    function up(target) {
        var grid = $.data(target, 'uc_pickbox').grid;
        var opts = $.data(target, 'uc_pickbox').options;
        var row = grid.datagrid('getSelected');
        if (row) {
            var rowIndex = grid.datagrid('getRowIndex', row);
            rowIndex = rowIndex == 0 ? rowIndex : rowIndex - 1;
            grid.datagrid('selectRow', rowIndex);
        }

    }
    function down(target) {
        var grid = $.data(target, 'uc_pickbox').grid;
        var opts = $.data(target, 'uc_pickbox').options;
        var row = grid.datagrid('getSelected');
        if (row) {
            var rowIndex = grid.datagrid('getRowIndex', row);
            var rows = grid.datagrid('getRows');
            rowIndex = rowIndex >= rows.length - 1 ? rows.length - 1 : rowIndex + 1;
            grid.datagrid('selectRow', rowIndex);
        }
    }




    $.fn.uc_pickbox = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_pickbox.methods[options];
            if (method) return method(this, param);
            else return $(this).combo(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_pickbox');
            if (state) $.extend(state.options, options);

            else $.data(this, 'uc_pickbox', { options: $.extend({}, $.fn.validatebox.defaults, $.fn.uc_pickbox.defaults, $.fn.uc_pickbox.parseOptions(this), options) });

            create(this);
        });
    };
    $.fn.uc_pickbox.parseOptions = function (target) {
        var opts = $.extend({}, $.fn.combo.parseOptions(target), $.fn.datagrid.parseOptions(target), $.parser.parseOptions(target, ["idField", "textField", "mode"]));
        //if (opts.idField !== opts.textField) opts.textField = opts.idField;
        return opts;
    };


    var timerQuery;
    $.fn.uc_pickbox.defaults = {
        winModal: false,
        winCenter: false,
        pagination: false,
        sortable: true,
        autoRowHeight: false,
        fit: true,
        pageSize: 50,
        remoteSort: false,
        singleSelect: true,
        reloadEveryTimes: false,
        alignRight: false,
        onOk: function (rows, target) { },
        keyHandler: {
            query: function (q, e) {
                timerQuery && clearTimeout(timerQuery);
                var thisObj = this;
                timerQuery = setTimeout(function () {
                    search(thisObj, q);
                }, 300);
            },
            enter: function () {
                var panel = $(this).combo('panel');
                if (!panel.panel('options').closed)
                    ok(this);
            },
            up: function () {
                var panel = $(this).combo('panel');
                if (!panel.panel('options').closed)
                    up(this);
            },
            down: function () {
                var panel = $(this).combo('panel');
                if (!panel.panel('options').closed)
                    down(this);
            }
        }
    };
    $.fn.uc_pickbox.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_pickbox').options;
        },
        grid: function (jq) {
            return $.data(jq[0], "uc_pickbox").grid;
        },
        setValue: function (jq, value) {
            $(jq[0]).combo('setText', value);
            $(jq[0]).combo('setValue', value);
        },
        setUrl: function (jq, value) {
            var opts = $.data(jq[0], 'uc_pickbox').options;
            opts._reload = true;
            opts.url = value;
        }
    };

})(jQuery)