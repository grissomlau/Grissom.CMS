(
    function ($, ko) {
        ko.createEasyUiGridBindings = function (pro, config) {
            return {
                init: function (element, valueAccessor) {
                    var grid = valueAccessor();
                    //-- 获取 grid 的对应绑定的 html 元素, 以供开发使用
                    var tempGrid = $.extend({}, config, grid, {
                        _$elem: function () { return $(element); }
                    });
                    $.extend(grid, tempGrid);
                },

                update: function (element, valueAccessor) {
                    // declare elem, value and databind;
                    var gridControl = $(element),
                        grid = valueAccessor(),
                        value = ko.toJS(grid),
                        bindData = function (params) {
                            if (!params || typeof (params) != "object") params = ko.toJS(valueAccessor()).queryParams;
                            params = params || {};

                            var opts = gridControl.datagrid("options");

                            if (opts.pagination) {
                                var pagerOption = gridControl[pro]("getPager").pagination("options");
                                $.extend(params, {
                                    pageNumber: pagerOption.pageNumber,
                                    pageSize: pagerOption.pageSize
                                });
                                if (opts) {
                                    opts.pageNumber = pagerOption.pageNumber;
                                    opts.pageSize = pagerOption.pageSize;
                                }
                            }

                            if (opts && opts.sortName) {
                                $.extend(params, {
                                    /* sortName: opts.sortName,
                                    sortOrder: opts.sortOrder
                                    */
                                    orderBy: opts.sortName + ' ' + opts.sortOrder
                                });
                            }

                            if (Utils.isUrl(value.url)) {
                                /* //lgr 2015-04-09 hold on next time to add the filter function for the grid,
                                 //be care: filter only invole datagrid load function,but if the url is empty, load function won't be invole, then we may be need modified doFilter function in filter js;
                                 // the filter data append to param in event of onBeforeLoad

                                if (opts.onBeforeLoad.call(element, params) == false) {
                                    return false;
                                }

                                 */
                                $("body").mask("loading ... ...");

                                com.ajax({
                                    type: "GET",
                                    url: value.url,
                                    data: params,
                                    success: function (data) {
                                        // 请用 loadFilter
                                        //if (typeof opts._onBeforeLoadData === 'function')
                                        //   opts._onBeforeLoadData(data);
                                        if ((data && data.rows) || Object.prototype.toString.call(data) == '[object Array]') {
                                            if (!data.rows) data = { rows: data };
                                            gridControl[pro]("loadData", data);
                                        } else {
                                            //com.message("error", data);
                                            com.handleResp(data);
                                        }
                                        $("body").unmask();
                                    },
                                    error: function (xrq, status, errorMsg) {
                                        com.message("error", errorMsg);
                                        $("body").unmask();
                                    }
                                });
                            }
                            ;
                        };


                    // if elem.datagrid is undefined then init it and init the sort and selectpage event;
                    if (gridControl.data(pro) && gridControl.data(pro).options._hasInit) {
                        // bind data
                        bindData(value.queryParams);
                    } else {
                        var options = {
                            pagination: true,
                            rownumbers: true,
                            customLoad: false,
                            method: 'GET',
                            singleSelect: true,
                            autoRowHeight: false,
                            fit: true,
                            pageSize: 20,
                            remoteFilter: true,
                            enableFilter: true,
                            remoteSort: true,
                            _hasInit: true,
                            checkOnSelect: true,
                            selectOnCheck: false,
                            ctrlSelect: true,
                        };
                        //options = $.extend(options, config, value);
                        options = $.extend(options, config, grid);
                        //-- url will cause load method of datagrid control, but we want load data manually, so delete it before init datagrid options as below;
                        delete options.url,
                        grid[pro] = function () {
                            return gridControl[pro].apply(gridControl, arguments);
                        },
                        grid['uc_' + pro] = function () { return gridControl['uc_' + pro].apply(gridControl, arguments); },
                        options.onSortColumn = bindData;
                        gridControl['uc_' + pro](options);
                        gridControl[pro]("getPager").pagination({
                            pageList: [1, 2, 10, 20, 100, 1000, 10000],
                            onSelectPage: function (pageNumber, pageSize) {
                                //如果 pagePosition:'both',getPager 会有 2 个 pager,而 getPageer.pagination 只到第一个 pager ，而如果改了第 2 个 pager， 则无法得到正确的页数
                                $.each(gridControl[pro]("getPager"), function (idx, val) {
                                    $(val).pagination("options").pageNumber = pageNumber;
                                    $(val).pagination("options").pageSize = pageSize;
                                    $(val).pagination("refresh");
                                });

                                bindData();
                            }
                        });
                        //gridControl[pro].call(gridControl, 'fitColumns');
                        //gridControl[pro].call(gridControl, 'autoSizeColumn');
                        if (!options.customLoad)
                            bindData(value.queryParams);
                    }

                }
            };
        },
        ko.bindingHandlers.datagrid = ko.createEasyUiGridBindings("datagrid", {
            isReload: ko.observable(false),
        }),
        ko.bindingHandlers.simpleDatagrid = ko.createEasyUiGridBindings("datagrid", {
            pagination: false,
            remotesort: false,
            showHeader: true,
            autoRowHeight: true,
            fixedHeight: false,
            // reload: ko.observable(false),这个全局监视，会导致所有 simplegrid 引用该相同的 reload 变量，其中一个 grid 调用  reload 会使所有 simplegrid 都 reload
            onLoadSuccess: function (data) {
                //this is table
                var opts = $.data(this, 'datagrid').options;
                if (!opts.fixedHeight)
                    opts._resize();
                if (opts._onAfterLoadSuccess) {
                    opts._onAfterLoadSuccess(data);
                }
            },
            _onAfterLoadSuccess: undefined,
            loadFilter: function (data) {
                if (data && !data.rows) {
                    return { rows: data };
                }
                return data;
            },
            //isReload: ko.observable(false),-- 和下面同理
            //queryParams: ko.observable(), -- 不能出现在这里，任何一个 grid 修改了都会导致所有 grid 都触发监听
            _$container: function () {
                return this._$elem().parent().parent().parent().parent();
            },
            _canResize: true,
            _resize: function () {
                //if (!this._canResize)
                //    return false;

                var rows = [];
                var grid;
                if (!this.datagrid)
                    grid = this._$elem();
                else
                    grid = this;

                rows = grid.datagrid('getRows');
                var opts = grid.datagrid('options');
                var headerH = opts.headerHeight || 50;
                if (!opts.showHeader)
                    headerH = 0;
                var buttonH = 30;
                if (!opts.toolbar || opts.toolbar.length == 0) {
                    buttonH = 0;
                }
                var footerH = opts.footerHeight || 30;
                if (!opts.showFooter)
                    footerH = 0;

                var titleH = 0;
                var contentH = rows.length * 28;
                this._$container().height(headerH + footerH + contentH + titleH + buttonH);
                grid.datagrid('resize');
            },
            _hideToolbar: function () {
                this._$container().find('.datagrid-toolbar').hide();
            },
            _showToolbar: function () {
                this._$container().find('.datagrid-toolbar').show();
            },
            _reloadData: function (newUrl, tempForm, tempKeyField) {
                this.datagrid("unselectAll");
                this._oldRowIndex = -1;
                tempForm = tempForm || form;
                tempKeyField = tempKeyField || keyField;
                var thisUrl = typeof (this.url) == 'function' ? this.url() : this.url;
                if (thisUrl) {
                    if (!newUrl) {
                        var pureUrl = thisUrl.replace(/[^\/]+$/gi, '');
                        if (tempKeyField.split(',').length > 1) {
                            newUrl = pureUrl + "?";
                            var keys = tempKeyField.split(',');
                            for (var i = 0; i < keys.length; ++i) {
                                if (i == 0)
                                    newUrl += keys[i] + "=" + tempForm[keys[i]].apply();
                                else
                                    newUrl += "&" + keys[i] + "=" + tempForm[keys[i]].apply();
                            }
                        } else {
                            newUrl = pureUrl + tempForm[tempKeyField].apply();
                        }
                    }
                    if (thisUrl !== newUrl) {
                        if (typeof (this.url) == 'function') {
                            this.url(newUrl);
                        }
                        else {
                            this.url = newUrl;
                            this.isReload(!this.isReload());
                        }

                    } else {
                        this.isReload(!this.isReload());
                    }
                }
            },
            doRemoteFilter: function () {
                // this is options
                var grid = this._$elem();
                var opts = grid.datagrid('options');
                var filterParam = {};
                for (var i = 0; i < opts.filterRules.length; ++i) {
                    filterParam[opts.filterRules[i].field] = opts.filterRules[i].value;
                }
                if (!grid || !grid.datagrid) return false;
                this.queryParams(filterParam);
                grid.datagrid('clearChecked');
            },
            checkEnableFilter: function () {
                var grid = this;
                var opts = grid.datagrid('options');
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
                                        grid.datagrid('removeFilterRule', col.filter.field);
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
                                        grid.datagrid('removeFilterRule', col.filter.field);
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
                                        grid.datagrid('removeFilterRule', col.filter.field);
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
                    grid.datagrid('enableFilter', filters);
            }

        }),
        ko.bindingHandlers.treegrid = ko.createEasyUiGridBindings("treegrid"),
        ko.bindingHandlers.simpleTreegrid = ko.createEasyUiGridBindings("treegrid", {
            pagination: false,
            remotesort: false,
            showHeader: true,
            autoRowHeight: true,
            fit: true,
            _onLoadSuccess: function (row, data) { },
            onLoadSuccess: function (row, data) {

                //this is table
                var opts = $.data(this, 'datagrid').options;
                opts._onLoadSuccess(row, data);
                opts._resize();
            },
            //reload: ko.observable(false),
            loadFilter: function (data) {
                if (data && !data.rows) {
                    return { rows: data };
                }
                return data;
            },
            _$container: function () {
                return this._$elem().parent().parent().parent().parent();
            },
            _resize: function () {
                var grid;
                if (!this.treegrid)
                    grid = this._$elem();
                else
                    grid = this;

                var len = 0;

                var roots = grid.treegrid('getRoots');
                $.each(roots, function (idx, row) {
                    len++;
                    /*if (row.state == 'open' && row.children) {
                        len += row.children.length;
                    }*/
                    if (row.children) {
                        len += row.children.length;
                        $.each(row.children, function (childIdx, childRow) {
                            if (childRow.children) {
                                len += childRow.children.length;
                            }
                        })
                    }
                });

                var opts = grid.treegrid('options');
                var rows = grid.treegrid('getData');
                var headerH = 80;
                var footerH = opts.showFooter ? 60 : 0;
                var titleH = 0;
                //var contentH = rows.length * 29;
                var contentH = len * 29;
                this._$container().height(headerH + footerH + contentH + titleH);
                grid.treegrid('resize');
            },
            _reloadData: function (newUrl) {
                this.treegrid("unselectAll");
                this._oldRowIndex = -1;
                if (this.url()) {
                    if (!newUrl) {

                        var pureUrl = this.url().replace(/[^\/]+$/gi, '');
                        if (keyField.split(',').length > 1) {
                            var para = "";
                            $.each(keyField.split(','), function (idx, val) {
                                para += val + "=" + form[val].apply() + "&";
                            });
                            para = para.substr(0, para.length - 1);
                            //com.openTab(me.resx.editTitle, "{0}?{1}".format(me.urls.edit, para));
                            newUrl = "{0}?{1}".format(pureUrl, para);

                        } else {
                            //com.openTab(me.resx.editTitle, me.urls.edit + row[me.keyField]);
                            newUrl = pureUrl + form[keyField].apply();
                        }
                        //newUrl = pureUrl + form[keyField].apply();
                    }
                    if (this.url() !== newUrl) {
                        this.url(newUrl);
                    } else if (this.isReload != undefined) {
                        this.isReload(!this.isReload());
                    }
                }
            }
        }),

        ko.createEasyuiTreeBindings = function (pro, config) {
            return {
                init: function (elem, valueAccessor) {
                    var tree = valueAccessor();
                    var tempTree = $.extend({}, config, tree, { _$elem: function () { return $(elem); } })
                    $.extend(tree, tempTree);
                },
                update: function (element, valueAccessor) {
                    var treeControl = $(element),
                        tree = valueAccessor(),
                        value = ko.toJS(tree);
                    if (value.idField != undefined && value.textField != undefined && !value.loadFilter) {
                        value.loadFilter = function (data, parent) {
                            var newData = [];
                            if (value.parentField) {
                                var firstArr = $.grep(data, function (v, i) {
                                    return v[value.parentField] == '';
                                });
                            } else {
                                firstArr = data;
                            }

                            for (var i = 0; i < firstArr.length; i++) {
                                var val = firstArr[i];
                                var newVal = com.formatTreeData(data, val, value);
                                newData.push(newVal);
                            }
                            if (value.firstNode) {
                                value.firstNode.children = newData;
                                return [value.firstNode];
                            } else {
                                return newData;
                            }
                        }
                    }
                    tree[pro] = function () {
                        return treeControl[pro].apply(treeControl, arguments);
                    }
                    treeControl[pro](value);
                }
            };
        }
        ko.bindingHandlers.tree = ko.createEasyuiTreeBindings("tree"),

        ko.bindingViewModel = function (vm, elem) {
            //var preFun = $.parser.onComplete;


            //$.parser.onComplete = function () {
                //console.log(new Date() + " => parse easyui complete");
                if (typeof preFun === 'function') preFun();
                setTimeout(function () {
                    elem = elem || document.body;
                    // 防止重复绑定，在body 中动态添加控件时，会引发重新绑定
                    if (!!ko.contextFor(elem)) {
                        return;
                    }
                    ko.applyBindings(vm, elem || document.body);
                    if (window.onDataBindingCompleted) {
                        window.onDataBindingCompleted();
                    }
                    //console.log(new Date() + " => bind data complete");
                }, 0);
            //};
        },
        //-- validate binding
        ko.createEasyuiValueBindings = function (elemConfig) {
            elemConfig = $.extend({
                type: "",
                event: "",
                getter: "getValue",
                setter: "setValue",
                fix: $.noop,
                parser: function (n) {
                    return n
                },
                formatter: function (n) {
                    return n
                }
            }, elemConfig);

            var handle = {
                init: function (elem, valueAccessor) {
                    var elemControl = $(elem),
                        event = elemControl[elemConfig.type]("options")[elemConfig.event],
                        eventConfig = {};

                    eventConfig[elemConfig.event] = function () {
                        if (event)
                            event.apply($, arguments);
                        var latestValue = elemControl[elemConfig.type](elemConfig.getter);
                        valueAccessor()(elemConfig.parser(latestValue));
                        //if (u() == null) throw "viewModel中没有页面绑定的字段";
                        //u()(ko);
                    },
                    ko.utils.domNodeDisposal.addDisposeCallback(elem, function () {
                        elemControl[elemConfig.type]("destroy")
                    }),
                    elemConfig.fix(elem, valueAccessor)
                    elemControl[elemConfig.type](eventConfig);

                },
                update: function (elem, valueAccessor) {
                    value = ko.utils.unwrapObservable(valueAccessor()),
                    $(elem)[elemConfig.type](elemConfig.setter, elemConfig.formatter(value));
                }
            };
            ko.bindingHandlers[elemConfig.type + "Value"] = handle;
        },
        ko.createEasyuiValueBindings({
            type: "numberspinner",
            event: "onChange",
            fix: function (elem) {
                $(elem).width($(elem).width() + 16);
            }
        }),
        ko.createEasyuiValueBindings({
            type: "timespinner",
            event: "onChange"
        }),
        ko.createEasyuiValueBindings({
            type: "numberbox",
            event: "onChange"
        }),
        ko.createEasyuiValueBindings({
            type: "datebox",
            event: "onSelect",
            parser: function (value) {
                return Utils.parseDate(value);
            },
            formatter: function (value) {
                if (value) {
                    value = Utils.formatDate(value);
                }
                return value;
            }
        }),
         ko.createEasyuiValueBindings({
             type: "dateRange",
             event: "onSelect",
             parser: function (value) {
                 return value;
             },
             formatter: function (value) {

                 return value;
             }
         }),

        ko.createEasyuiValueBindings({
            type: "combobox",
            event: "onChange"
        }),

         ko.createEasyuiValueBindings({
             type: "combogrid",
             event: "onChange"
         }),

        // user control value binding

        ko.createEasyuiValueBindings({
            type: "uc_numberspinner",
            event: "onChange",
            fix: function (elem) {
                //$(elem).width($(elem).width() + 19);
            }
        }),
        ko.createEasyuiValueBindings({
            type: "uc_dollar",
            event: "onChange",
            fix: function (elem) {
                //$(elem).width($(elem).width() + 19);
            }
        }),

        ko.createEasyuiValueBindings({
            type: "uc_percent",
            event: "onChange",
            fix: function (elem) {
                //$(elem).width($(elem).width() + 19);
            }
        }),

        ko.createEasyuiValueBindings({
            type: "uc_timespinner",
            event: "onChange"
        }),

        ko.createEasyuiValueBindings({
            type: "uc_numberbox",
            event: "onChange"
        }),
        ko.createEasyuiValueBindings({
            type: "uc_datebox",
            event: "onChange",
            parser: function (value) {
                return Utils.parseDate(value);
            },
            formatter: function (value) {
                if (value) {
                    value = Utils.formatDate(value);
                }
                return value;
            }
        }),
                ko.createEasyuiValueBindings({
                    type: "uc_datetimebox",
                    event: "onChange",
                    parser: function (value) {
                        return Utils.parseDatetime(value);
                    },
                    formatter: function (value) {
                        if (value) {
                            value = Utils.formatDatetime(value);
                        }
                        return value;
                    }
                }),
        ko.createEasyuiValueBindings({
            type: "uc_dateRange",
            event: "onSelect",
            parser: function (value) {
                return value;
            },
            formatter: function (value) {

                return value;
            }
        }),

        ko.createEasyuiValueBindings({
            type: "uc_combobox",
            event: "onChange"
        }),

        ko.createEasyuiValueBindings({
            type: "uc_combobox_m",
            event: "onChange",
            getter: "getValues",
            setter: "setValues",
            parser: function (value) {
                if (Object.prototype.toString.call(value) == '[object Array]')
                    return value.join(',');
                return value;

            },
            formatter: function (value) {
                if (value === undefined || value === null || value === '') return [];
                return value.split(',');
            }
        }),

         ko.createEasyuiValueBindings({
             type: "uc_combogrid",
             event: "onChange"
         }),
        ko.createEasyuiValueBindings({
            type: "uc_pickbox",
            event: "onChange"
        }),
        ko.createEasyuiValueBindings({
            type: "uc_fuzzybox",
            event: "onChange"
        }),
        ko.createEasyuiValueBindings({
            type: "uc_checkboxs",
            event: "onChange"
        }),
         ko.createEasyuiValueBindings({
             type: "uc_radioGroup",
             event: "onChange"
         }),
        //-- text binding
             ko.createEasyuiTextBindings = function (elemConfig) {
                 elemConfig = $.extend({
                     type: "",
                     event: "",
                     getter: "getText",
                     setter: "setText",
                     fix: $.noop,
                     parser: function (n) {
                         return n
                     },
                     formatter: function (n) {
                         return n
                     }
                 }, elemConfig);

                 var handle = {
                     init: function (elem, valueAccessor) {
                         var elemControl = $(elem),
                             event = elemControl[elemConfig.type]("options")[elemConfig.event],
                             eventConfig = {};

                         eventConfig[elemConfig.event] = function () {
                             if (event)
                                 event.apply($, arguments);
                             var latestValue = elemControl[elemConfig.type](elemConfig.getter);
                             valueAccessor()(elemConfig.parser(latestValue));
                             //if (u() == null) throw "viewModel中没有页面绑定的字段";
                             //u()(ko);
                         },
                         ko.utils.domNodeDisposal.addDisposeCallback(elem, function () {
                             elemControl[elemConfig.type]("destroy")
                         }),
                         elemConfig.fix(elem, valueAccessor),
                         elemControl[elemConfig.type](eventConfig);
                     },
                     update: function (elem, valueAccessor) {
                         value = ko.utils.unwrapObservable(valueAccessor()),
                         $(elem)[elemConfig.type](elemConfig.setter, elemConfig.formatter(value));
                     }
                 };
                 ko.bindingHandlers[elemConfig.type + "Text"] = handle;
             },
               ko.createEasyuiTextBindings({
                   type: "uc_pickbox",
                   event: "onChange"
               }),

        //-- datasource binding 
        ko.createEasyuiDatasourceBindings = function (config) {
            config = $.extend({
                type: "",
                event: "",
                load: "loadData"
            }, config);
            var handle = {
                init: function (elem, valueAccess) {
                    // set panewidth width on init
                    if (config.type === "combogrid") {
                        var opts = $(elem).combogrid("options");
                        var width = 0;
                        $.each(opts.columns[0], function (idx, value) {
                            width += value.width;
                        });
                        if (width) {
                            $(elem).combogrid({ panelWidth: width + 5 });
                        }
                    }
                },
                update: function (elem, valueAccess) {
                    var value = ko.utils.unwrapObservable(valueAccess());
                    var gridType = ['combogrid', 'uc_combogrid', 'uc_pickbox'];
                    if ($.inArray(config.type, gridType) > -1) {
                        $(elem)[config.type]("grid")["datagrid"](config.load, value);
                        if (config.type == 'uc_pickbox') {
                            $.data(elem, 'uc_pickbox')._data = value;
                        }

                    } else {
                        $(elem)[config.type](config.load, value);
                    }
                }
            };
            ko.bindingHandlers[config.type + "Ds"] = handle;
        },
        ko.createEasyuiDatasourceBindings({
            type: "combobox"
        }),
        ko.createEasyuiDatasourceBindings({
            type: "uc_combobox"
        }),
        ko.createEasyuiDatasourceBindings({
            type: "uc_combobox_m"
        }),
        ko.createEasyuiDatasourceBindings({
            type: "uc_combogrid"
        }),
        ko.createEasyuiDatasourceBindings({
            type: "uc_pickbox"
        }),
        ko.createEasyuiDatasourceBindings({
            type: "uc_checkboxs"
        }),
           ko.createEasyuiDatasourceBindings({
               type: "uc_radioGroup"
           }),
        ko.createEasyuiDatasourceBindings({
            type: "combogrid"
        }),



        ko.createEasyuiEableBindings = function (config) {
            config = $.extend({
                type: "",
                method: function (elem, isEnable) {
                    if (isEnable) {
                        $(elem)[config.type]("enable");
                    } else {
                        $(elem)[config.type]("disable");
                    }
                }
            }, config);

            var handle = {
                init: function (elem, valueAccess) {
                    var value = ko.utils.unwrapObservable(valueAccess());
                    config.method(elem, value);
                },
                update: function (elem, valueAccess) {
                    var value = ko.utils.unwrapObservable(valueAccess());
                    config.method(elem, value);
                }
            };
            ko.bindingHandlers[config.type + "Enable"] = handle;
        },
         ko.createEasyuiEableBindings({ type: "uc_pickbox" }),
        ko.createEasyuiEableBindings({ type: "combobox" }),
        ko.createEasyuiEableBindings({ type: "uc_numberspinner" }),
        ko.createEasyuiEableBindings({ type: "uc_combobox" });
        ko.createEasyuiEableBindings({ type: "uc_combogrid" });
        ko.createEasyuiEableBindings({ type: "uc_combobox_m" });
        ko.createEasyuiEableBindings({ type: "uc_datebox" });
        ko.createEasyuiEableBindings({ type: "uc_dollar" });
        ko.createEasyuiEableBindings({ type: "uc_percent" });
        ko.createEasyuiEableBindings({ type: "uc_timespinner" });
        ko.createEasyuiEableBindings({ type: "uc_checkboxs" });


        //-- url binding
        ko.createEasyuiUrlBindings = function (config) {
            config = $.extend({
                type: '',
                setter: 'setUrl'
            }, config);
            var handle = {
                init: function (elem, valueAccess) {
                },
                update: function (elem, valueAccess) {
                    var value = ko.utils.unwrapObservable(valueAccess());
                    $(elem)[config.type](config.setter, value);
                }
            };
            ko.bindingHandlers[config.type + "Url"] = handle;
        };
        ko.createEasyuiUrlBindings({ type: "uc_pickbox" });
        ko.createEasyuiUrlBindings({ type: "uc_combobox", setter: 'reload' });


        // 绑定格式化的显示数据,只作显示用途；
        ko.createEasyuiFormatBindings = function (config) {
            config = $.extend({
                type: '',
                setter: 'html',
                formatter: function (value) {
                    return value;
                }
            }, config);
            var handle = {
                init: function (elem, valueAccess) {
                    var value = ko.utils.unwrapObservable(valueAccess());
                    //$(elem)[config.setter](config.formatter(value));

                },
                update: function (elem, valueAccess) {
                    var value = ko.utils.unwrapObservablev(valueAccess());
                    $(elem)[config.setter](config.formatter(value));
                }
            };
            ko.bindingHandlers[config.type + "Format"] = handle;
        };

        ko.createEasyuiFormatBindings({ type: 'dollar', formatter: function (value) { return Utils.formatDollar(value); } });
        ko.createEasyuiFormatBindings({ type: 'date', formatter: function (value) { return Utils.format(value, 'd'); } });
        ko.createEasyuiFormatBindings({ type: 'percent', formatter: function (value) { return Utils.format(value, 'p'); } });
        ko.createEasyuiFormatBindings({ type: 'number', formatter: function (value) { return Utils.format(value, 'n'); } });
        ko.createEasyuiFormatBindings({ type: 'valueDate', setter: 'val', formatter: function (value) { return Utils.format(value, 'd'); } });
        ko.createEasyuiFormatBindings({
            type: 'valueDollar',
            setter: 'val',
            formatter: function (value) {
                var val = Utils.formatDollar(value);
                if (val == null || val == undefined) val = '';
                return val;
            }
        });
        ko.createEasyuiFormatBindings({
            type: 'valuePercent',
            setter: 'val',
            formatter: function (value) {
                return Utils.format(value, 'p');
            }
        });
        ko.createEasyuiFormatBindings({ type: 'valueNumber', setter: 'val', formatter: function (value) { return Utils.format(value, 'n'); } });

        // windows

        ko.createEasyuiWinBindings = function (config) {
            config = $.extend({
                type: ''
            }, config);
            var handle = {
                init: function (element, valueAccessor) {
                    var win = valueAccessor();
                    win._$elem = function () { return $(element); };
                },

                update: function (element, valueAccessor) {
                    // declare elem, value and databind;
                    var winControl = $(element),
                        win = valueAccessor(),
                        value = ko.toJS(win);
                    var options;
                    if (winControl.data[config.type])
                        options = winControl.data[config.type].options;

                    if (!options) {
                        options = {
                            iconCls: 'icon-edit',
                            cached: true,
                            closed: true,
                            modal: true,
                            minimizable: false,
                            maximizable: true,
                            resizable: true
                        };
                        $.extend(win, config, $.extend({}, win));
                        options = $.extend(options, win);

                        setTimeout(function () {
                            winControl['uc_' + config.type](options);
                        }, 0);
                    }
                    //win[config.type] = function () { return win[config.type].apply(winControl, arguments); },
                }
            };
            return handle;
            //ko.bindingHandlers[config.type] = handle;
        };
        ko.bindingHandlers.dialog = ko.createEasyuiWinBindings({
            type: 'dialog',
            _beforeOpen: function () { return true },
            _open: function (isMax) {
                if (typeof this._beforeOpen == 'function' && !this._beforeOpen())
                    return false;

                if (isMax) {
                    this._$elem().uc_dialog('maximize');
                }
                this._$elem().uc_dialog('center').uc_dialog('open');

                if (typeof this._afterOpen == 'function' && !this._afterOpen())
                    return false;
            },
            _max: function () {
                this._$elem().uc_dialog('maximize');
            },
            _afterOpen: function () { return true },
            _beforeClose: function () { return true },
            _close: function () {
                if (typeof this._beforeClose == 'function' && !this._beforeClose())
                    return false;

                this._$elem().uc_dialog('close');

                if (typeof this._afterClose == 'function' && !this._afterClose())
                    return false;
            },
            _afterClose: function () { return true },
            _validate: function () {
                if (!this._$elem().form('validate')) {
                    com.message('error', resx.__input_required_field);
                    return false;
                }
                return true;
            }
        });


        ko.bindingHandlers.window = ko.createEasyuiWinBindings({
            type: 'window',
            _open: function () {
                this._$elem().uc_window('center').uc_window('open');
            },
            _close: function () {
                this._$elem().uc_window('close');
            }
        });
        ko.createEasyuiWinBindings({ type: 'panel' });


        ko.createEasyuiWinBindings({ type: 'panel' });


        //tab
        ko.createEasyuiTabsBindings = function (config) {
            config = $.extend({
                type: 'tabs'
            }, config);
            var handle = {
                init: function (element, valueAccessor) {
                    var tabs = valueAccessor();
                    tabs._$elem = function () { return $(element); };
                },

                update: function (element, valueAccessor) {
                    var tabsControl = $(element),
                       tabs = valueAccessor(),
                        value = ko.toJS(tabs);
                    var options;
                    if (tabsControl.data[config.type])
                        options = tabsControl.data[config.type].options;

                    if (!options) {
                        options = {
                            fit: true
                        };
                        tabs.tabs = function () {
                            return tabsControl.tabs.apply(tabsControl, arguments);
                        };
                        $.extend(tabs, config, $.extend({}, tabs));
                        options = $.extend(options, tabs);

                        setTimeout(function () {
                            tabsControl['uc_' + config.type](options);
                            setTimeout(function () {
                                var height = tabsControl.height();
                                if (tabs.getHeight) {
                                    height = tabs.getHeight();
                                }
                                //tabsControl.parent().height(height - 65);
                                tabsControl.parent().height(height - 10);
                                tabsControl['uc_' + config.type]("resize");
                            }, 0);

                        }, 0);
                    }
                    //win[config.type] = function () { return win[config.type].apply(winControl, arguments); },
                }
            };
            return handle;
            //ko.bindingHandlers[config.type] = handle;
        };
        ko.bindingHandlers.tabs = ko.createEasyuiTabsBindings({ type: 'tabs' });


        //others 

        ko.bindingHandlers.radioTrueFalseBoolean = {
            init: function (element, valueAccessor, allBindingsAccessor) {
                $(element).change(function () {
                    var value = valueAccessor();
                    var elemVal = $(element).val();
                    if ($(element).prop('checked')) {
                        value(elemVal == "true");
                    }
                    else {
                        value(elemVal == "false");
                    }
                });
            },
            update: function (element, valueAccessor, allBindingsAccessor) {
                var value = valueAccessor();
                if (ko.utils.unwrapObservable(value) === true) {
                    if ($(element).val() == 'true') {
                        $(element).prop('checked', true);
                    } else {
                        $(element).prop('checked', false);
                    }

                    value(true);
                } else {
                    if ($(element).val() == 'false') {
                        $(element).prop('checked', true);
                    } else {
                        $(element).prop('checked', false);
                    }

                    value(false);
                }
            }
        };
        ko.bindingHandlers.tabTitle = {
            init: function (element, valueAccessor, allBindingsAccessor) {
            },
            update: function (element, valueAccessor, allBindingsAccessor) {
                var value = valueAccessor();
                var tab = $(element);
                var tabs = tab.parent().parent().parent();
                tabs.tabs('update', { tab: tab, options: { title: value } });
            }
        }

    }(jQuery, ko)
)
