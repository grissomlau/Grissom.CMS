(function ($) {
    function getPluginName(target) {
        if ($(target).data('treegrid')) {
            return 'treegrid';
        } else {
            return 'datagrid';
        }
    }

    var oldAutoSizeColumn = $.fn.datagrid.methods.autoSizeColumn;
    $.fn.datagrid.methods.autoSizeColumn = function (jq, field) {
        return jq.each(function () {
            resizeFilter(this, field, 10);
            oldAutoSizeColumn.call($.fn.datagrid.methods, $(this), field);
            resizeFilter(this, field);
        });
    };

    var oldLoadDataMethod1 = $.fn.datagrid.methods.loadData;
    $.fn.datagrid.methods.loadData = function (jq, data) {
        jq.each(function () {
            $.data(this, 'datagrid').filterSource = null;
        });
        return oldLoadDataMethod1.call($.fn.datagrid.methods, jq, data);
    };
    var oldLoadDataMethod2 = $.fn.treegrid.methods.loadData;
    $.fn.treegrid.methods.loadData = function (jq, data) {
        jq.each(function () {
            $.data(this, 'treegrid').filterSource = null;
        });
        return oldLoadDataMethod2.call($.fn.treegrid.methods, jq, data);
    };
    var oldAppendMethod1 = $.fn.datagrid.methods.appendRow;
    $.fn.datagrid.methods.appendRow = function (jq, row) {
        var result = oldAppendMethod1.call($.fn.datagrid.methods, jq, row);
        jq.each(function () {
            var state = $(this).data('datagrid');
            if (state.filterSource) {
                state.filterSource.total++;
                state.filterSource.rows.push(row);
            }
            // doFilter(this);
        });
        return result;
    };
    var oldAppendMethod2 = $.fn.treegrid.methods.append;
    $.fn.treegrid.methods.append = function (jq, data) {
        var result = oldAppendMethod2.call($.fn.treegrid.methods, jq, data);
        jq.each(function () {
            // doFilter(this);
        });
        return result;
    };
    var deleteMethod1 = $.fn.datagrid.methods.deleteRow;
    $.fn.datagrid.methods.deleteRow = function (jq, index) {
        jq.each(function () {
            var state = $(this).data('datagrid');
            var opts = state.options;
            if (state.filterSource && opts.idField) {
                for (var i = 0; i < state.filterSource.rows.length; i++) {
                    var row = state.filterSource.rows[i];
                    if (row[opts.idField] == state.data.rows[index][opts.idField]) {
                        state.filterSource.rows.splice(i, 1);
                        state.filterSource.total--;
                        break;
                    }
                }
            }
        });
        return deleteMethod1.call($.fn.datagrid.methods, jq, index);
    };

    var extendedOptions = {
        filterMenuIconCls: 'icon-ok',
        filterBtnIconCls: 'icon-filter',
        filterBtnPosition: 'right',
        filterPosition: 'bottom',
        remoteFilter: false,
        filterDelay: 400,
        filterRules: [],
        filterMatcher: function (data) {
            var name = getPluginName(this);
            var state = $.data(this, name);
            var opts = state.options;
            if (opts.filterRules.length) {
                var rows = [];
                if (name == 'treegrid') {
                    var rr = {};
                    $.map(data.rows, function (row) {
                        if (isMatch(row)) {
                            rr[row[opts.idField]] = row;
                            row = getRow(data.rows, row._parentId);
                            while (row) {
                                rr[row[opts.idField]] = row;
                                row = getRow(data.rows, row._parentId);
                            }
                        }
                    });
                    for (var id in rr) {
                        rows.push(rr[id]);
                    }
                } else {
                    for (var i = 0; i < data.rows.length; i++) {
                        var row = data.rows[i];
                        if (isMatch(row)) {
                            rows.push(row);
                        }
                    }
                }
                data = {
                    total: data.total - (data.rows.length - rows.length),
                    rows: rows
                };
            }
            return data;

            function isMatch(row) {
                var rules = opts.filterRules;
                for (var i = 0; i < rules.length; i++) {
                    var rule = rules[i];
                    var source = row[rule.field];
                    if (source == undefined) {
                        source = '';
                    }
                    var op = opts.operators[rule.op];
                    if (!op.isMatch(source, rule.value)) { return false }
                }
                return true;
            }
            function getRow(rows, id) {
                for (var i = 0; i < rows.length; i++) {
                    var row = rows[i];
                    if (row[opts.idField] == id) {
                        return row;
                    }
                }
                return null;
            }
        },
        defaultFilterType: 'text',
        defaultFilterOperator: 'contains',
        defaultFilterOptions: {
            onInit: function (target) {
                var name = getPluginName(target);
                var opts = $(target)[name]('options');
                var input = $(this);
                input.unbind('.filter').bind('keydown.filter', function (e) {
                    var t = $(this);
                    if (this.timer) {
                        clearTimeout(this.timer);
                    }
                    if (e.keyCode == 13) {
                        _doFilter();
                    } else {
                        this.timer = setTimeout(function () {
                            _doFilter();
                        }, opts.filterDelay);
                    }
                });
                function _doFilter() {
                    var field = input.attr('name');
                    var rule = $(target)[name]('getFilterRule', field);
                    var value = input.val();
                    if (value != '') {
                        if ((rule && rule.value != value) || !rule) {
                            $(target)[name]('addFilterRule', {
                                field: field,
                                op: opts.defaultFilterOperator,
                                value: value
                            });
                            $(target)[name]('doFilter');
                        }
                    } else {
                        if (rule) {
                            $(target)[name]('removeFilterRule', field);
                            $(target)[name]('doFilter');
                        }
                    }
                }
            }
        },
        filterStringify: function (data) {
            return JSON.stringify(data);
        },
        onClickMenu: function (item, button) { }
    };
    $.extend($.fn.datagrid.defaults, extendedOptions);
    $.extend($.fn.treegrid.defaults, extendedOptions);

    // filter types
    $.fn.datagrid.defaults.filters = $.extend({}, $.fn.datagrid.defaults.editors, {
        label: {
            init: function (container, options) {
                return $('<span></span>').appendTo(container);
            },
            getValue: function (target) {
                return $(target).html();
            },
            setValue: function (target, value) {
                $(target).html(value);
            },
            resize: function (target, width) {
                $(target)._outerWidth(width)._outerHeight(22);
            }
        },
    });
    $.fn.treegrid.defaults.filters = $.fn.datagrid.defaults.filters;

    // filter operators
    $.fn.datagrid.defaults.operators = {
        nofilter: {
            text: 'No Filter'
        },
        contains: {
            text: 'Contains',
            isMatch: function (source, value) {
                source = String(source);
                value = String(value);
                return source.toLowerCase().indexOf(value.toLowerCase()) >= 0;
            }
        },
        equal: {
            text: 'Equal',
            isMatch: function (source, value) {
                return source == value;
            }
        },
        notequal: {
            text: 'Not Equal',
            isMatch: function (source, value) {
                return source != value;
            }
        },
        beginwith: {
            text: 'Begin With',
            isMatch: function (source, value) {
                source = String(source);
                value = String(value);
                return source.toLowerCase().indexOf(value.toLowerCase()) == 0;
            }
        },
        endwith: {
            text: 'End With',
            isMatch: function (source, value) {
                source = String(source);
                value = String(value);
                return source.toLowerCase().indexOf(value.toLowerCase(), source.length - value.length) !== -1;
            }
        },
        less: {
            text: 'Less',
            isMatch: function (source, value) {
                return source < value;
            }
        },
        lessorequal: {
            text: 'Less Or Equal',
            isMatch: function (source, value) {
                return source <= value;
            }
        },
        greater: {
            text: 'Greater',
            isMatch: function (source, value) {
                return source > value;
            }
        },
        greaterorequal: {
            text: 'Greater Or Equal',
            isMatch: function (source, value) {
                return source >= value;
            }
        }
    };
    $.fn.treegrid.defaults.operators = $.fn.datagrid.defaults.operators;

    function resizeFilter(target, field, width) {
        var dg = $(target);
        var header = dg.datagrid('getPanel').find('div.datagrid-header');
        var ff = field ? header.find('.datagrid-filter[name="' + field + '"]') : header.find('.datagrid-filter');
        ff.each(function () {
            var name = $(this).attr('name');
            var col = dg.datagrid('getColumnOption', name);
            var cc = $(this).closest('div.datagrid-filter-c');
            var btn = cc.find('a.datagrid-filter-btn');
            if (width != undefined) {
                this.filter.resize(this, width);
            } else {
                this.filter.resize(this, 10);
                this.filter.resize(this, cc.width() - btn._outerWidth());
            }
        });
    }

    function getFilterComponent(target, field) {
        var header = $(target).datagrid('getPanel').find('div.datagrid-header');
        return header.find('tr.datagrid-filter-row td[field="' + field + '"] .datagrid-filter');
    }

    /**
	 * get filter rule index, return -1 if not found.
	 */
    function getRuleIndex(target, field) {
        var name = getPluginName(target);
        var rules = $(target)[name]('options').filterRules;
        for (var i = 0; i < rules.length; i++) {
            if (rules[i].field == field) {
                return i;
            }
        }
        return -1;
    }

    function getFilterRule(target, field) {
        var name = getPluginName(target);
        var rules = $(target)[name]('options').filterRules;
        var index = getRuleIndex(target, field);
        if (index >= 0) {
            return rules[index];
        } else {
            return null;
        }
    }

    function addFilterRule(target, param) {
        var name = getPluginName(target);
        var opts = $(target)[name]('options');
        var rules = opts.filterRules;

        if (param.op == 'nofilter') {
            removeFilterRule(target, param.field);
        } else {
            var index = getRuleIndex(target, param.field);
            if (index >= 0) {
                $.extend(rules[index], param);
            } else {
                rules.push(param);
            }
        }

        var input = getFilterComponent(target, param.field);
        if (input.length) {
            if (param.op != 'nofilter') {
                input[0].filter.setValue(input, param.value);
            }
            var menu = input[0].menu;
            if (menu) {
                menu.find('.' + opts.filterMenuIconCls).removeClass(opts.filterMenuIconCls);
                var item = menu.menu('findItem', opts.operators[param.op]['text']);
                menu.menu('setIcon', {
                    target: item.target,
                    iconCls: opts.filterMenuIconCls
                });
            }
        }
    }

    function removeFilterRule(target, field) {
        var name = getPluginName(target);
        var dg = $(target);
        var opts = dg[name]('options');
        if (field) {
            var index = getRuleIndex(target, field);
            if (index >= 0) {
                opts.filterRules.splice(index, 1);
            }
            _clear([field]);
        } else {
            opts.filterRules = [];
            var fields = dg.datagrid('getColumnFields', true).concat(dg.datagrid('getColumnFields'));
            _clear(fields);
        }

        function _clear(fields) {
            for (var i = 0; i < fields.length; i++) {
                var input = getFilterComponent(target, fields[i]);
                if (input.length) {
                    input[0].filter.setValue(input, '');
                    var menu = input[0].menu;
                    if (menu) {
                        menu.find('.' + opts.filterMenuIconCls).removeClass(opts.filterMenuIconCls);
                    }
                }
            }
        }
    }

    function doFilter(target) {
        var name = getPluginName(target);
        var state = $.data(target, name);
        var opts = state.options;
        if (opts.remoteFilter) {
            // dh 2015-05-15 fire method of doRemoteFilter in options
            if (opts.doRemoteFilter) {
                opts.doRemoteFilter();
            } else {
                $(target)[name]('load');
            }
        } else {
            $(target)[name]('getPager').pagination('refresh', { pageNumber: 1 });
            $(target)[name]('options').pageNumber = 1;
            $(target)[name]('loadData', state.filterSource || state.data);
        }
    }

    function myLoadFilter(data, parentId) {
        var name = getPluginName(this);
        var state = $.data(this, name);
        var opts = state.options;

        if (name == 'datagrid' && $.isArray(data)) {
            data = {
                total: data.length,
                rows: data
            };
        } else if (name == 'treegrid' && $.isArray(data)) {
            function translate(children, pid) {
                if (!children || !children.length) { return [] }
                var rows = [];
                $.map(children, function (item) {
                    item._parentId = pid;
                    rows.push(item);
                    rows = rows.concat(translate(item.children, item[opts.idField]));
                });
                return rows;
            }
            var rows = translate(data, parentId);
            $.map(rows, function (row) {
                row.children = undefined;
            });
            data = {
                total: rows.length,
                rows: rows
            }
        }
        if (!opts.remoteFilter) {
            if (!state.filterSource) {
                state.filterSource = data;
            } else {
                if (name == 'datagrid' && !opts.isSorting) {
                    state.filterSource = data;
                } else if (name == 'treegrid' && !opts.isSorting) {
                    var addedRows = $.extend(true, [], data.rows);
                    state.filterSource.total += addedRows.length;
                    state.filterSource.rows = state.filterSource.rows.concat(addedRows);
                }
                opts.isSorting = undefined;
            }
            data = opts.filterMatcher.call(this, {
                total: state.filterSource.total,
                rows: $.extend(true, [], state.filterSource.rows)
            });

            if (opts.pagination) {
                var dg = $(this);
                var pager = dg[name]('getPager');
                pager.pagination({
                    onSelectPage: function (pageNum, pageSize) {
                        opts.pageNumber = pageNum;
                        opts.pageSize = pageSize;
                        pager.pagination('refresh', {
                            pageNumber: pageNum,
                            pageSize: pageSize
                        });
                        //dg.datagrid('loadData', state.filterSource);
                        dg[name]('loadData', state.filterSource);
                    },
                    onBeforeRefresh: function () {
                        dg[name]('reload');
                        return false;
                    }
                });
                if (name == 'datagrid') {
                    var start = (opts.pageNumber - 1) * parseInt(opts.pageSize);
                    var end = start + parseInt(opts.pageSize);
                    data.rows = data.rows.slice(start, end);
                } else {
                    var topRows = [];
                    var childRows = [];
                    $.map(data.rows, function (row) {
                        row._parentId ? childRows.push(row) : topRows.push(row);
                    });
                    data.total = topRows.length;
                    var start = (opts.pageNumber - 1) * parseInt(opts.pageSize);
                    var end = start + parseInt(opts.pageSize);
                    data.rows = $.extend(true, [], topRows.slice(start, end).concat(childRows));
                }
            }
        }
        return data;
    }

    function init(target, filters) {
        filters = filters || [];
        var name = getPluginName(target);
        var state = $.data(target, name);
        var opts = state.options;
        if (!opts.filterRules.length) {
            opts.filterRules = [];
        }

        var onResizeColumn = opts.onResizeColumn;
        opts.onResizeColumn = function (field, width) {
            if (opts.fitColumns) {
                resizeFilter(target, null, 10);
                $(target).datagrid('fitColumns');
                resizeFilter(target);
            } else {
                resizeFilter(target, field);
            }
            onResizeColumn.call(target, field, width);
        };
        var onResize = opts.onResize;
        opts.onResize = function (width, height) {
            resizeFilter(target, null, 10);
            $(target).datagrid('fitColumns');
            resizeFilter(target);
            onResize.call(this, width, height);
        }
        var onBeforeLoad = opts.onBeforeLoad;
        opts.onBeforeLoad = function (param1, param2) {
            if (param1) {
                param1.filterRules = opts.filterStringify(opts.filterRules);
            }
            if (param2) {
                param2.filterRules = opts.filterStringify(opts.filterRules);
            }
            var result = onBeforeLoad.call(this, param1, param2);
            if (result != false && opts.url) {
                state.filterSource = null;
            }
            return result;
        };
        var dgOpts = $.data(target, 'datagrid').options;
        var onBeforeSortColumn = dgOpts.onBeforeSortColumn;
        dgOpts.onBeforeSortColumn = function (sort, order) {
            var result = onBeforeSortColumn.call(this, sort, order);
            if (result != false) {
                opts.isSorting = true;
            }
            return result;
        };
        var onBeforeEdit = opts.onBeforeEdit;
        opts.onBeforeEdit = function (index, row) {
            var result = onBeforeEdit.call(this, index, row);
            state.originalEditingRow = $.extend(true, {}, name == 'treegrid' ? index : row);
            return result;
        };
        var onAfterEdit = opts.onAfterEdit;
        opts.onAfterEdit = function (index, row, changes) {
            if (opts.idField && state.filterSource) {
                for (var i = 0; i < state.filterSource.rows.length; i++) {
                    var r = state.filterSource.rows[i];
                    if (r[opts.idField] == state.originalEditingRow[opts.idField]) {
                        $.extend(r, name == 'treegrid' ? index : row);
                        break;
                    }
                }
            }
            onAfterEdit.call(this, index, row, changes);
        };

        // opts.loadFilter = myLoadFilter;
        opts.loadFilter = function (data, parentId) {
            var d = opts.oldLoadFilter.call(this, data, parentId);
            return myLoadFilter.call(this, d, parentId);
        };

        initCss();
        createFilter(true);
        createFilter();
        if (opts.fitColumns) {
            setTimeout(function () {
                resizeFilter(target);
            }, 0);
        }

        $.map(opts.filterRules, function (rule) {
            addFilterRule(target, rule);
        });

        function initCss() {
            if (!$('#datagrid-filter-style').length) {
                $('head').append(
					'<style id="datagrid-filter-style">' +
					'a.datagrid-filter-btn{display:inline-block;width:22px;height:22px;margin:0;vertical-align:top;cursor:pointer;opacity:0.6;filter:alpha(opacity=60);}' +
					'a:hover.datagrid-filter-btn{opacity:1;filter:alpha(opacity=100);}' +
					'.datagrid-filter-row .textbox,.datagrid-filter-row .textbox .textbox-text{-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;}' +
					'.datagrid-filter-row input{margin:0;-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;}' +
					'</style>'
				);
            }
        }

        /**
		 * create filter component
		 */
        function createFilter(frozen) {
            var dc = state.dc;
            var fields = $(target).datagrid('getColumnFields', frozen);
            if (frozen && opts.rownumbers) {
                fields.unshift('_');
            }
            var table = (frozen ? dc.header1 : dc.header2).find('table.datagrid-htable');
            // table.find('tr').each(function(){
            // 	$(this).height($(this).height());
            // });

            // clear the old filter component
            table.find('.datagrid-filter').each(function () {
                if (this.filter.destroy) {
                    this.filter.destroy(this);
                }
                if (this.menu) {
                    $(this.menu).menu('destroy');
                }
            });
            table.find('tr.datagrid-filter-row').remove();

            var tr = $('<tr class="datagrid-header-row datagrid-filter-row"></tr>');
            if (opts.filterPosition == 'bottom') {
                tr.appendTo(table.find('tbody'));
            } else {
                tr.prependTo(table.find('tbody'));
            }

            for (var i = 0; i < fields.length; i++) {
                var field = fields[i];
                var col = $(target).datagrid('getColumnOption', field);
                var td = $('<td></td>').attr('field', field).appendTo(tr);
                if (col && col.hidden) {
                    td.hide();
                }
                if (field == '_') {
                    continue;
                }
                if (col && (col.checkbox || col.expander)) {
                    continue;
                }
                var div = $('<div class="datagrid-filter-c"></div>').appendTo(td);

                var fopts = getFilter(field);
                if (!fopts) {
                    fopts = $.extend({}, {
                        field: field,
                        type: opts.defaultFilterType,
                        options: opts.defaultFilterOptions
                    });
                }
                var filter = opts.filters[fopts.type];
                var input = filter.init(div, fopts.options || {});
                input.addClass('datagrid-filter').attr('name', field);
                input[0].filter = filter;
                input[0].menu = createFilterButton(div, fopts.op);
                if (fopts.options && fopts.options.onInit) {
                    fopts.options.onInit.call(input[0], target);
                }

                resizeFilter(target, field);
            }
        }

        function createFilterButton(container, operators) {
            if (!operators) { return null; }

            var btn = $('<a class="datagrid-filter-btn">&nbsp;</a>').addClass(opts.filterBtnIconCls);
            if (opts.filterBtnPosition == 'right') {
                btn.appendTo(container);
            } else {
                btn.prependTo(container);
            }
            var menu = $('<div></div>').appendTo('body');
            menu.menu({
                alignTo: btn,
                onClick: function (item) {
                    var btn = $(this).menu('options').alignTo;
                    var td = btn.closest('td[field]');
                    var field = td.attr('field');
                    var input = td.find('.datagrid-filter');
                    var value = input[0].filter.getValue(input);

                    addFilterRule(target, {
                        field: field,
                        op: item.name,
                        value: value
                    });

                    opts.onClickMenu.call(target, item, btn);

                    doFilter(target);
                }
            });
            $.each(['nofilter'].concat(operators), function (index, item) {
                var op = opts.operators[item];
                if (op) {
                    menu.menu('appendItem', {
                        text: op.text,
                        name: item
                    });
                }
            });
            btn[0].menu = menu;
            btn.bind('click', { menu: menu }, function (e) {
                // $(e.data.menu).menu('show');
                $(this.menu).menu('show');
                return false;
            });
            return menu;
        }

        function getFilter(field) {
            for (var i = 0; i < filters.length; i++) {
                var filter = filters[i];
                if (filter.field == field) {
                    return filter;
                }
            }
            return null;
        }
    }

    $.extend($.fn.datagrid.methods, {
        enableFilter: function (jq, filters) {
            return jq.each(function () {
                var name = getPluginName(this);
                var opts = $.data(this, name).options;
                opts.oldLoadFilter = opts.loadFilter;
                init(this, filters);
                $(this)[name]('resize');
                if (opts.filterRules.length) {
                    doFilter(this);
                }
            });
        },
        disableFilter: function (jq) {
            return jq.each(function () {
                var name = getPluginName(this);
                var opts = $.data(this, name).options;
                var dc = $(this).data('datagrid').dc;
                var fr = dc.header1.add(dc.header2).find('.datagrid-filter-row');
                fr.find('.datagrid-filter-btn').each(function () {
                    $(this.menu).menu('destroy');
                });
                fr.find('.combo-f').each(function () {
                    $(this).combo('destroy');
                });
                $(this)[name]({
                    loadFilter: (opts.oldLoadFilter || undefined),
                    oldLoadFilter: null
                });
            });
        },
        getFilterRule: function (jq, field) {
            return getFilterRule(jq[0], field);
        },
        addFilterRule: function (jq, param) {
            return jq.each(function () {
                addFilterRule(this, param);
            });
        },
        removeFilterRule: function (jq, field) {
            return jq.each(function () {
                removeFilterRule(this, field);
            });
        },
        doFilter: function (jq) {
            return jq.each(function () {
                doFilter(this);
            });
        },
        getFilterComponent: function (jq, field) {
            return getFilterComponent(jq[0], field);
        },
        resizeFilter: function (jq, field) {
            return jq.each(function () {
                resizeFilter(this, field);
            });
        }
    });
})(jQuery);
