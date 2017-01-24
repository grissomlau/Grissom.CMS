{
    if ($.fn.datagrid) {
        /**
         * Datagrid扩展方法tooltip 基于Easyui 1.3.3，可用于Easyui1.3.3+
         * 简单实现，如需高级功能，可以自由修改
         * 使用说明:
         *   在easyui.min.js之后导入本js
         *   代码案例:
         *		$("#dg").datagrid({....}).datagrid('tooltip'); 所有列
         *		$("#dg").datagrid({....}).datagrid('tooltip',['productid','listprice']); 指定列
         */
        $.extend($.fn.datagrid.methods, {
            tooltip: function (jq, fields) {
                return jq.each(function () {
                    var panel = $(this).datagrid('getPanel');
                    if (fields && typeof fields == 'object' && fields.sort) {
                        $.each(fields, function () {
                            var field = this;
                            bindEvent($('.datagrid-body td[field=' + field + '] .datagrid-cell', panel));
                        });
                    } else {
                        bindEvent($(".datagrid-body .datagrid-cell", panel));
                    }
                });

                function bindEvent(jqs) {
                    jqs.mouseover(function () {
                        var content = $(this).text();
                        $(this).tooltip({
                            content: content,
                            trackMouse: true,
                            onShow: function () {
                                $(this).tooltip("tip").css({
                                    backgroundColor: "#FFFFCC",
                                    boxShadow: "1px 1px 3px #666666"
                                });
                            },
                            onHide: function () {
                                $(this).tooltip('destroy');
                            }
                        }).tooltip('show');
                    });
                }
            },
            /**
             * 超出宽度省略,最小宽度大于20px
             */
            wtooltip: function (jq, fields) {
                return jq.each(function () {
                    var panel = $(this).datagrid('getPanel');
                    if (fields && typeof fields == 'object' && fields.sort) {
                        $.each(fields, function () {
                            var field = this;
                            var fdiv = $('.datagrid-body td[field=' + field + '] .datagrid-cell', panel);
                            bindEvent(fdiv, fdiv.width());
                        });
                    } else {
                        var flist = $(".datagrid-body .datagrid-cell", panel);
                        $.each(flist, function () {
                            bindEvent($(this), $(this).width());
                        });
                    }
                });

                function bindEvent(jqs, w) {
                    jqs.mouseover(function () {
                        var content = $(this).text();                        
                        $(this).tooltip({
                            content: content,
                            trackMouse: true,
                            onShow: function () {
                                $(this).tooltip("tip").css({
                                    backgroundColor: "#FFFFCC",
                                    boxShadow: "1px 1px 3px #666666",
                                    borderColor: "#666",
                                    "max-width": 400,
                                    "font-size": "18px!important",
                                });
                            },
                            onHide: function () {
                                $(this).tooltip('destroy');
                            }
                        }).tooltip('show');                        
                    }).attr("style", "width:" + w + "px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;");
                }
            }
        });
        //#region override datagrid editor

        // datebox
        $.fn.datagrid, $.extend($.fn.datagrid.defaults.editors, {
            uc_datebox: {
                init: function (container, options) {
                    var input = $('<input type="text">').appendTo(container);
                    input.uc_datebox(options);

                    return input;
                },
                destroy: function (target) {
                    $(target).uc_datebox("destroy");
                },
                getValue: function (target) {
                    var val = $(target).uc_datebox("getValue");
                    if (!val) return val;
                    return Utils.parseDate(val);
                },
                setValue: function (target, value) {
                    if (value) {
                        value = Utils.formatDate(value);
                    }
                    $(target).uc_datebox("setValue", value);
                },
                resize: function (target, width) {
                    $(target).uc_datebox("resize", width);
                }
            }
        });

        // combogrid
        $.extend($.fn.datagrid.defaults.editors, {
            uc_combogrid: {
                init: function (container, options) {
                    var input = $('<input type="text">').appendTo(container);
                    input.uc_combogrid(options);
                    return input;
                },
                destroy: function (target) {
                    $(target).uc_combogrid("destroy");
                },
                getValue: function (target) {
                    return $(target).uc_combogrid("getValue");
                },
                setValue: function (target, value) {
                    $(target).uc_combogrid("setValue", value);
                },
                resize: function (target, width) {
                    $(target).uc_combogrid("resize", width);
                }
            }
        });

        // dollar
        $.extend($.fn.datagrid.defaults.editors, {
            uc_dollar: {
                init: function (container, options) {
                    var input = $('<input type="text">').appendTo(container);
                    input.uc_dollar(options);
                    return input;
                },
                destroy: function (target) {
                    $(target).uc_dollar("destroy");
                },
                getValue: function (target) {
                    return $(target).uc_dollar("getValue");
                },
                setValue: function (target, value) {
                    $(target).uc_dollar("setValue", value);
                },
                resize: function (target, width) {
                    $(target).uc_dollar("resize", width);
                }
            }
        });

        // dollar
        $.extend($.fn.datagrid.defaults.editors, {
            uc_dollar: {
                init: function (container, options) {
                    var input = $('<input type="text">').appendTo(container);
                    input.uc_dollar(options);
                    return input;
                },
                destroy: function (target) {
                    $(target).uc_dollar("destroy");
                },
                getValue: function (target) {
                    return $(target).uc_dollar("getValue");
                },
                setValue: function (target, value) {
                    $(target).uc_dollar("setValue", value);
                },
                resize: function (target, width) {
                    $(target).uc_dollar("resize", width);
                }
            }
        });

        // pecent 
        $.extend($.fn.datagrid.defaults.editors, {
            uc_percent: {
                init: function (container, options) {
                    var input = $('<input type="text">').appendTo(container);
                    input.uc_percent(options);
                    return input;
                },
                destroy: function (target) {
                    $(target).uc_percent("destroy");
                },
                getValue: function (target) {
                    return $(target).uc_percent("getValue");
                },
                setValue: function (target, value) {
                    $(target).uc_percent("setValue", value);
                },
                resize: function (target, width) {
                    $(target).uc_percent("resize", width);
                }
            }
        });
        // checkbox
        $.extend($.fn.datagrid.defaults.editors, {
            uc_checkbox: {
                init: function (container, options) {
                    var input = $("<input type=\"checkbox\">").appendTo(container);
                    $.data(input, "on", options.on);
                    $.data(input, "off", options.off);
                    return input;
                },
                getValue: function (target) {
                    if ($(target).is(":checked")) {
                        return $.data(target, "on");
                    } else {
                        return $.data(target, "off");
                    }
                },
                setValue: function (target, value) {
                    var bool = false;
                    if ($.data(target, "on") === value) {
                        bool = true;
                    }
                    $(target).prop("checked", bool);
                }
            }
        });

        //validatebox
        $.extend($.fn.datagrid.defaults.editors, {
            uc_validatebox: {
                init: function (container, options) {
                    var input = $('<input type="text" class="easyui-uc_validatebox"/>');
                    $(input).appendTo(container);
                    input.uc_validatebox(options);
                    return input;
                },
                destroy: function (target) {
                    $(target).remove();
                },
                getValue: function (target) {
                    return $(target).val();
                },
                setValue: function (target, value) {
                    $(target).val(value);
                },
                resize: function (target, width) {
                    $(target)._outerWidth(width);
                }
            }
        });

        // combobox
        $.extend($.fn.datagrid.defaults.editors, {
            uc_combobox: {
                init: function (container, options) {
                    var input = $('<input type="text"/>');
                    $(input).appendTo(container);
                    input.uc_combobox(options);
                    return input;
                },
                destroy: function (target) {
                    $(target).uc_combobox('destroy');
                },
                getValue: function (target) {
                    return $(target).uc_combobox('getValue');
                },
                setValue: function (target, value) {
                    $(target).uc_combobox('setValue', value);
                },
                resize: function (target, width) {
                    $(target).uc_combobox('resize', width);
                }
            }
        });

        // numberspinner
        $.extend($.fn.datagrid.defaults.editors, {
            uc_numberspinner: {
                init: function (container, options) {
                    var input = $('<input type="text">').appendTo(container);
                    input.uc_numberspinner(options);
                    return input;
                },
                destroy: function (target) {
                    $(target).uc_dollar("destroy");
                },
                getValue: function (target) {
                    return $(target).uc_dollar("getValue");
                },
                setValue: function (target, value) {
                    $(target).uc_dollar("setValue", value);
                },
                resize: function (target, width) {
                    $(target).uc_dollar("resize", width);
                }
            }
        });

        // uc_linkbutton 
        $.extend($.fn.datagrid.defaults.editors, {
            uc_linkbutton: {
                init: function (container, options) {
                    var input = $('<a/>').appendTo(container);
                    input.uc_linkbutton(options);
                    return input;
                },
                destroy: function (target) {
                    $(target).uc_linkbutton("destroy");
                },
                getValue: function (target) {
                    //return $(target).uc_linkbutton("getValue");
                },
                setValue: function (target, value) {
                    //$(target).uc_linkbutton("setValue", value);
                },
                resize: function (target, width) {
                    $(target).uc_linkbutton("resize", width);
                }
            }
        });

        // dateRange
        $.extend($.fn.datagrid.defaults.editors, {
            uc_dateRange: {
                init: function (container, options) {
                    var input = $('<input type="text"/>').appendTo(container);
                    $(input).uc_dateRange(options);
                    return input;
                },
                getValue: function (target) {
                    var value = $(target).uc_dateRange('getValue');
                    //console.log(value);
                    return value;
                },
                setValue: function (target, value) {
                    $(target).uc_dateRange('setValue', value);
                },
                resize: function (target, width) {
                    $(target).uc_dateRange('resize', width);
                }
            }
        })
        //#endregion
    }
    if ($.fn.treegrid) {
        /**
        * 扩展树表格级联勾选方法：
        * @param {Object} container
        * @param {Object} options
        * @return {TypeName} 
        */
        $.extend($.fn.treegrid.methods, {
            /**
            * 级联选择
            * @param {Object} target
            * @param {Object} param 
            *		param包括两个参数:
            *			id:勾选的节点ID
            *			deepCascade:是否深度级联
            * @return {TypeName} 
            */
            cascadeCheck: function (target, param) {
                //$.extend(param, { deepCascade: true, checked: null }, param);
                // 用上面这种方式，会忽略掉 param 的；
                param = $.extend({}, { deepCascade: true, checked: null }, param);
                var opts = $.data(target[0], "treegrid").options;
                if (opts.singleSelect)
                    return;
                var idField = opts.idField; //这里的idField其实就是API里方法的id参数
                var status = false; //用来标记当前节点的状态，true:勾选，false:未勾选
                if (param.checked != undefined && param.checked != null) {
                    status = param.checked;
                } else {
                    var selectNodes = $(target).treegrid('getSelections'); //获取当前选中项
                    for (var i = 0; i < selectNodes.length; i++) {
                        if (selectNodes[i][idField] == param.id)
                            status = true;
                    }
                }
                //级联选择父节点
                // selectParent(target[0], param.id, idField, status);
                selectChildren(target[0], param.id, idField, param.deepCascade, status);
                /**
                * 级联选择父节点
                * @param {Object} target
                * @param {Object} id 节点ID
                * @param {Object} status 节点状态，true:勾选，false:未勾选
                * @return {TypeName} 
                */
                function selectParent(target, id, idField, status) {
                    var parent = $(target).treegrid('getParent', id);
                    if (parent) {
                        var parentId = parent[idField];
                        if (status)
                            $(target).treegrid('select', parentId);
                        else
                            $(target).treegrid('unselect', parentId);
                        selectParent(target, parentId, idField, status);
                    }
                }
                /**
                * 级联选择子节点
                * @param {Object} target
                * @param {Object} id 节点ID
                * @param {Object} deepCascade 是否深度级联
                * @param {Object} status 节点状态，true:勾选，false:未勾选
                * @return {TypeName} 
                */
                function selectChildren(target, id, idField, deepCascade, status) {
                    //深度级联时先展开节点
                    if (!status && deepCascade)
                        $(target).treegrid('expand', id);
                    //根据ID获取下层孩子节点
                    var children = $(target).treegrid('getChildren', id);
                    for (var i = 0; i < children.length; i++) {
                        var childId = children[i][idField];
                        if (status)
                            $(target).treegrid('select', childId);
                        else
                            $(target).treegrid('unselect', childId);
                        selectChildren(target, childId, idField, deepCascade, status); //递归选择子节点
                    }
                }
            }
        });
    }
    //-- datebox defaults
    if ($.fn.datebox)
        $.fn.datebox.defaults.formatter = function (date) {
            // onSelect 时才会触发 formatter, onpopup 时才触发 parser
            return Utils.formatDate(date);
        };

    if ($.fn.datebox)
        $.fn.datebox.defaults.parser = function (s) {
            if (!s) {
                if (s == '') return '';
                return new Date();
            }
            var d = Utils.parseDate(s);
            if (d.toString() === 'Invalid Date') return new Date();
            return d;
        };

    //-- dateRange default
    if ($.fn.uc_dateRange) {
        $.fn.uc_dateRange.defaults.formatter = function (df, dt) {
            return Utils.formatDate(df) + ' ~ ' + Utils.formatDate(dt);
        };
        $.fn.uc_dateRange.defaults.parser = function (s) {
            if (s) {
                var dArr = s.split(' ~ ');
                if (dArr.length > 1) {
                    var d1 = Utils.parseDate(dArr[0]);
                    var d2 = Utils.parseDate(dArr[1]);
                    if (d1.toString() === 'Invalid Date') d1 = new Date();
                    if (d2.toString() === "Invalid Date") d2 = new Date();
                    return [d1, d2];
                } else {
                    return [new Date(), new Date()];
                }
            } else {
                return [new Date(), new Date()];
            }
        }
    }
    if ($.fn.combo) {
        /*
        $.fn.combo.methods.resize = function (jq, width) {
        var opts = $.data(jq[0], "combo").options;
        var comb = $.data(jq[0], "combo").combo;
        var panel = $.data(jq[0], "combo").panel;
        if (width) {
        opts.width = width;
        }
        if (isNaN(opts.width)) {
        var c = $(jq[0]).clone();
        c.css("visibility", "hidden");
        c.appendTo("body");
        opts.width = $(jq[0]).outerWidth();
        c.remove();
        }

        comb.appendTo("body");
        var comboText = comb.find("input.combo-text");
        var comboArrow = comb.find(".combo-arrow");
        var arrowOuterWidth = opts.hasDownArrow ? comboArrow._outerWidth() : 0;
        comb._outerWidth(opts.width)._outerHeight(opts.height);
        comboText._outerWidth(comb.width() - arrowOuterWidth);
        comboText.css({ height: comb.height() + "px", lineHeight: comb.height() + "px" });
        comboArrow._outerHeight(comb.height() + 2);
        panel.panel("resize", { width: (opts.panelWidth ? opts.panelWidth : comb.outerWidth()), height: opts.panelHeight });
        comb.insertAfter(jq[0]);
        };
        */
    }
    if ($.fn.spinner) {
        /*$.fn.spinner.methods.resize = function (jq, width) {
        var opts = $.data(jq[0], "spinner").options;
        var spinner = $.data(jq[0], "spinner").spinner;
        if (width) {
        opts.width = width;
        }
        var _452 = $("<div style=\"display:none\"></div>").insertBefore(spinner);
        spinner.appendTo("body");
        if (isNaN(opts.width)) {
        opts.width = $(jq[0]).outerWidth();
        }
        var spinnerArrow = spinner.find(".spinner-arrow");
        spinner._outerWidth(opts.width)._outerHeight(opts.height + 2);
        $(jq[0])._outerWidth(spinner.width() - spinnerArrow.outerWidth());
        $(jq[0]).css({ height: spinner.height() - 2 + "px", lineHeight: spinner.height() - 2 + "px" });
        spinnerArrow._outerHeight(spinner.height());
        spinnerArrow.find("span")._outerHeight(spinnerArrow.height() / 2);
        spinner.insertAfter(_452);
        _452.remove();
        };
        */
    }

    //在layout的panle全局配置中,增加一个onCollapse处理title
    $.extend($.fn.panel.defaults, {
        onCollapse: function () {
            //获取layout容器
            var layout = $(this).parents("div.layout");
            //获取当前region的配置属性
            var opts = $(this).panel("options");
            //获取key
            var expandKey = "expand" + opts.region.substring(0, 1).toUpperCase() + opts.region.substring(1);
            //从layout的缓存对象中取得对应的收缩对象
            var expandPanel = layout.data("layout").panels[expandKey];
            //针对横向和竖向的不同处理方式
            if (opts.region == "west" || opts.region == "east") {
                //竖向的文字打竖,其实就是切割文字加br
                var split = [];
                for (var i = 0; i < opts.title.length; i++) {
                    split.push(opts.title.substring(i, i + 1));
                }
                expandPanel.panel("body").addClass("panel-title").css("text-align", "center").html(split.join("＜br＞"));
            } else {
                if (expandPanel)
                    expandPanel.panel("setTitle", opts.title);
            }
        }
    });
    $.extend($.fn.tabs.methods, {
        setTabTitle: function (jq, opts) {
            return jq.each(function () {
                var tab = opts.tab;
                var options = tab.panel("options");
                var tab = options.tab;
                options.title = opts.title;
                var title = tab.find("span.tabs-title");
                title.html(opts.title);
            });
        }
    });

    $.extend($.fn.tabs.methods, {
        getTabTitle: function (jq, index) {
            var tab = $(jq[0]).tabs('getTab', index);
            var options = tab.panel("options");
            var tab = options.tab;
            var title = tab.find("span.tabs-title");
            return title.html();
        }
    });



        $.extend($.fn.validatebox.defaults.rules, {
            minLength: {
                validator: function (value, param) {   //value 为需要校验的输入框的值 , param为使用此规则时存入的参数
                    return value.length >= param[0];
                },
                message: '请输入最小{0}位字符.'
            }
        });

        $.extend($.fn.validatebox.defaults.rules, {
            maxLength: {
                validator: function (value, param) {
                    return param[0] >= value.length;
                },
                message: '请输入最大{0}位字符.'
            }
        });

        $.extend($.fn.validatebox.defaults.rules, {
            length: {
                validator: function (value, param) {
                    return value.length >= param[0] && param[1] >= value.length;
                },
                message: '请输入{0}-{1}位字符.'
            }
        });

        // extend the 'equals' rule   
        $.extend($.fn.validatebox.defaults.rules, {
            equals: {
                validator: function (value, param) {
                    return value == $(param[0]).val();
                },
                message: '字段不相同.'
            }
        });

        $.extend($.fn.validatebox.defaults.rules, {
            web: {
                validator: function (value) {
                    return /^(http[s]{0,1}|ftp):\/\//i.test($.trim(value));
                },
                message: '网址格式错误.'
            }
        });

        $.extend($.fn.validatebox.defaults.rules, {
            mobile: {
                validator: function (value) {
                    return /^1[0-9]{10}$/i.test($.trim(value));
                },
                message: '手机号码格式错误.'
            }
        });

        $.extend($.fn.validatebox.defaults.rules, {
            date: {
                validator: function (value) {
                    return /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/i.test($.trim(value));
                },
                message: '曰期格式错误,如2012-09-11.'
            }
        });

        $.extend($.fn.validatebox.defaults.rules, {
            email: {
                validator: function (value) {
                    return /^[a-zA-Z0-9_+.-]+\@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,4}$/i.test($.trim(value));
                },
                message: '电子邮箱格式错误.'
            }
        });

        $.extend($.fn.validatebox.defaults.rules, {
            captcha: {
                validator: function (value) {
                    var data0 = false;
                    $.ajax({
                        type: "POST", async: false,
                        url: contextPath + "/json/valSimulation.action",
                        dataType: "json",
                        data: { "simulation": value },
                        async: false,
                        success: function (data) {
                            data0 = data;
                        }
                    });

                    return data0;
                    // 			        	return /^[a-zA-Z0-9]{4}$/i.test($.trim(value));
                },
                message: '验证码错误.'
            }
        });

        $.extend($.fn.validatebox.defaults.rules, {
            txtName: {
                validator: function (value, param) {
                    var data0 = false;
                    if (value.length >= param[0] && param[1] >= value.length) {
                        $.ajax({
                            type: "POST", async: false,
                            url: contextPath + "/json/valName.action",
                            dataType: "json",
                            data: { "txtName": value },
                            async: false,
                            success: function (data) {
                                data0 = !data;
                            }
                        });
                    } else {
                        param[2] = "请输入" + param[0] + "-" + param[1] + "位字符.";
                        return false;
                    }

                    param[2] = "用户名称已存在.";
                    return data0;
                },
                message: "{2}"
            }
        });

}