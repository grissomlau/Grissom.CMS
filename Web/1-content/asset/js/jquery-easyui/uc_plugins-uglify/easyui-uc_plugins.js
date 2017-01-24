/*! easyui-uc_plugins - v0.1.0 - 2015-09-23
* https://github.com/Adder/jsUglify
* Copyright (c) 2015 ; Licensed MIT */
(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_checkboxs') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_checkboxs';
    })();
    function create(target) {
        var opts = $.data(target, 'uc_checkboxs').options;
        var span = $.data(target, 'uc_checkboxs').span;
        if (!span)
            span = $('<span class="dh-checkboxs"></span>');
        $(target).after(span);
        //var select = $('<select multiple="multiple" class="dh-select"></select>').appendTo(span);
        $(target).removeClass('easyui-uc_checkboxs').addClass('easyui-uc_checkboxs');
        $.data(target, 'uc_checkboxs').span = span;
        if (opts.url) {
            reload(target, opts.url);
        } else if (opts.data) {
            loadData(target, opts.data);
        }

        span.on("input:checkbox").bind('change', function () {
            var value = getValue(target);
            if (opts.onChange) opts.onChange(target, value);
        });
        resize(target);
    }
    function resize(target, width) {
        var opts = $.data(target, 'uc_checkboxs').options;
        var span = $.data(target, 'uc_checkboxs').span;
        if (width) {
            opts.width = width;
        }
        if (!opts.width) {
            opts.width = $(target).outerWidth();
        }
        if (!opts.height) {
            opts.height = $(target).outerHeight();
        }
        span.outerHeight(opts.height).outerWidth(opts.width);
        //select.outerHeight(opts.height).outerWidth(opts.width);
    }

    function loadData(target, data) {
        var opts = $.data(target, 'uc_checkboxs').options;
        var span = $.data(target, 'uc_checkboxs').span;
        opts.data = data;
        span.html('');
        if (data.length) {
            if (opts.orientation == 'vertical') {
                var ul = $('<ul class="dh-checkboxs-list-v" ></ul>').appendTo(span);
            } else {
                var ul = $('<ul class="dh-checkboxs-list-h"" ></ul>').appendTo(span);
            }
            $.each(data, function (idx, val) {
                ul.append('<li><label><input style="width:15px;height:15px;" type="checkbox" class="easyui-uc_validatebox" value="' + val[opts.valueField] + '" />' + val[opts.textField] + '</label></li>');
                //select.append('<option value="' + val[opts.valueField] + '">' + val[opts.textField] + '</option>');
                //select.append('<option value="' + val[opts.valueField] + '">' + val[opts.textField] + '</option>');
            });
        }
        var val = $(target).val();
        setTimeout(function () {
            setValue(target, val);
        },200);
    }

    function getData(target) {
        var data = $.data(target, 'uc_checkboxs').options.data;
        if (!data)
            data = [];
        return data;
    }

    function setValue(target, val) {
        var opts = $.data(target, 'uc_checkboxs').options;
        var span = $.data(target, 'uc_checkboxs').span;


        if (val === undefined || val === null)
            val = $(target).val();
        if (Object.prototype.toString.call(val) == "[object Array]") {
            var valArr = val;
            $(target).val(val.join(opts.splitter));
        } else {
            var valArr = val.toString().split(opts.splitter);
            $(target).val(val);
        }
        var checkboxArr = span.find('input');

        for (var i = 0, count = checkboxArr.length; i < count; ++i) {
            $(checkboxArr[i]).prop('checked', false);
        }

        $.each(valArr, function (index, value) {
            for (var i = 0, count = checkboxArr.length; i < count; ++i) {
                if (Object.prototype.toString.call(value) == "[object Object]") {
                    if ($(checkboxArr[i]).val() == value[opts.valueField]) {
                        $(checkboxArr[i]).prop('checked', true);
                    }
                } else {
                    if ($(checkboxArr[i]).val() == value) {
                        $(checkboxArr[i]).prop('checked', true);
                    }
                }
            }
        });

        //select.val();
    }

    function getValue(target) {
        var opts = $.data(target, 'uc_checkboxs').options;
        var span = $.data(target, 'uc_checkboxs').span;


        var value = getValueStr(target);
        $(target).val(value);

        if (opts.isValueArray) {
            return getSelRows(target);
        } else {
            return value;
        }
    }

    function getValueStr(target) {
        var opts = $.data(target, 'uc_checkboxs').options;
        var span = $.data(target, 'uc_checkboxs').span;


        var valArr = [];
        var checkboxArr = span.find('input');
        for (var i = 0, count = checkboxArr.length; i < count; ++i) {
            if ($(checkboxArr[i]).prop('checked')) {
                valArr.push($(checkboxArr[i]).val());
            }
        }

        var value = '';
        if (valArr) {
            value = valArr.join(opts.splitter);
        }
        return value;
    }

    function removeValue(target, val) {
        var opts = $.data(target, 'uc_checkboxs').options;
        var data = opts.data;
        $(target).val(val);
        select.val(val.split(opts.splitter));

    }

    function addRows(target, rows) {
        var opts = $.data(target, 'uc_checkboxs').options;
        var data = opts.data;
        if (!rows) return;
        if (!data) data = [];
        $.each(rows, function (idx, row) {
            data.push(row);
        });
        loadData(target, data);
    }

    function removeRows(target, rows, isValueType) {
        var opts = $.data(target, 'uc_checkboxs').options;
        var data = opts.data;
        if (!rows) return;
        if (!data) return;
        var valArr = [];
        if (isValueType) {
            for (var i = 0; i < rows.length; ++i)
                valArr.push(rows[i][opts.valueField]);
        }
        for (var i = 0; i < data.length; ++i) {
            if (isValueType) {
                if ($.inArray(data[i][opts.valueField], valArr) > -1) {
                    data.splice(i, 1);
                    --i;
                }

            } else {
                if ($.inArray(data[i], rows) > -1) {
                    data.splice(i, 1);
                    --i;
                }
            }
        }
        /*$.each(data, function (idx, row) {
        if ($.inArray(row, rows) > -1)
        data.splice(idx, 1);
        });
        */
        loadData(target, data);
    }

    function removeValRows(target, rows) {
        removeRows(target, rows, true);
    }

    function getSelRows(target, isCopy) {
        var opts = $.data(target, 'uc_checkboxs').options;
        var data = opts.data;
        var value = getValueStr(target);
        if (value === undefined || value === null) return value;
        var valArr = value.split(opts.splitter);
        var rows = [];
        $.each(data, function (idx, val) {
            if ($.inArray(val[opts.valueField].toString(), valArr) > -1) {
                if (isCopy)
                    rows.push($.extend({}, val));
                else
                    rows.push(val);
            }
        });
        return rows;
    }

    function removeSelRows(target) {
        var rows = getSelRows(target);
        removeRows(target, rows);
    }

    function reload(target, url) {
        com.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                loadData(target, data);
            }
        });
    }

    $.fn.uc_checkboxs = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_checkboxs.methods[options];
            if (method) return method(this, param);
            else return false;
            //else return $(this).combo(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_checkboxs');
            if (state) $.extend(state.options, options);

            else $.data(this, 'uc_checkboxs', { options: $.extend({}, $.fn.uc_checkboxs.defaults, $.fn.uc_checkboxs.parseOptions(this), options) });

            create(this);
        });
    };
    $.fn.uc_checkboxs.parseOptions = function (target) {
        var opts = $.extend({}, $.parser.parseOptions(target, ["valueField", "textField", "width", "height", "data", 'isValueArray']));
        return opts;
    };


    $.fn.uc_checkboxs.defaults = {
        splitter: ',',
        height: 22,
        isValueArray: false,
        orientation: 'horizontal',
        initValue: null,
        onDbClick: function (target, selRows) {

        }
    };

    $.fn.uc_checkboxs.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_checkboxs').options;
        },
        setValue: function (jq, value) {
            setValue(jq[0], value);
        },
        getValue: function (jq) {
            return getValue(jq[0]);
        },
        getData: function (jq) {
            return getData(jq[0]);
        },
        reload: function (jq, url) {
            reload(jq[0], url);
        },
        loadData: function (jq, data) {
            loadData(jq[0], data);
        }, addRows: function (jq, rows) {
            addRows(jq[0], rows);
        }, removeRows: function (jq, rows) {
            removeRows(jq[0], rows);
        }, removeValRows: function (jq, rows) {
            removeValRows(jq[0], rows);
        }, getSelRows: function (jq, isCopy) {
            return getSelRows(jq[0], isCopy);
        }, removeSelRows: function (jq) {
            removeSelRows(jq[0]);
        },
        disable: function (jq) {
            var span = $.data(jq[0], 'uc_checkboxs').span;
            $(span).find('input').attr('disabled', true);
        },
        enable: function (jq) {
            var span = $.data(jq[0], 'uc_checkboxs').span;
            $(span).find('input').attr('disabled', false);
        }
    };

})(jQuery);(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_combo') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_combo';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_combo').options;
        if (opts.width == 'auto')
            opts.width = undefined;// Ĭ�� width='auto' ���µ� chrome 43 �ᵼ�¿���Ϊ0, �� default ��������ʱ���� auto 
        $(target).combo(opts);

        $(target).combo('resize');
        $(target).find('.combo-text').bind('mousedown.combo', function (e) {
        });
    }

    $.fn.uc_combo = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_combo.methods[options];
            if (method) return method(this, param);
            else return $(this).combo(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_combo');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_combo', { options: $.extend({}, $.fn.combo.defaults, $.fn.uc_combo.defaults, $.fn.combo.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_combo.defaults = {};

    $.fn.uc_combo.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_combo').options;
        }
    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_combobox') < 0) {
            $.parser.plugins[$.parser.plugins.length] = 'uc_combobox';
        }
    })();

    function create(target) {
        var opts = $.data(target, 'uc_combobox').options;
        if (opts.width == 'auto')
            opts.width = undefined;// Ĭ�� width='auto' ���µ� chrome 43 �ᵼ�¿���Ϊ0, �� default ��������ʱ���� auto 
        $(target).combobox(opts);
        //$($.data(target).combo.combo).find('span:eq(1)').css('height', '100%');
        //$(target).combogrid('resize', $(target).parent().width());

        $(target).parent().find('.textbox-text').bind('keydown.combo', function (e) {
            switch (e.keyCode) {
                case 40: //down
                    $(target).combobox('showPanel');
                    break;
            }
        });
    }

    function findDataItem(data, valueField, value) {
        for (var i = 0; i < data.length; ++i) {
            if (data[i][valueField] == value) return data[i];
        }
    }

    $.fn.uc_combobox = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_combobox.methods[options];
            if (method) return method(this, param);
            else return $(this).combobox(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_combobox');
            if (state) $.extend(state.options, options);
            else {
                $.data(this, 'uc_combobox', { options: $.extend({}, $.fn.combobox.defaults, $.fn.uc_combobox.defaults, $.fn.combobox.parseOptions(this), options) });
            }
            create(this);
        });
    }

    $.fn.uc_combobox.methods = {
        loadData: function (jq, data) {
            $(jq[0]).combobox('panel').css('height', 50);
            return $.fn.combobox.methods.loadData(jq, data);
        }
    };


    $.fn.uc_combobox.defaults = {
        onHidePanel: function () {
            var target = $(this)[0];
            var opts = $.data(target, 'uc_combobox').options;
            var data = $.data(target, 'combobox').data;
            var values = $(target).uc_combobox('getValues');
            for (var i = 0; i < values.length; ++i) {
                var item = findDataItem(data, opts.valueField, values[i]);
                if (!item) {
                    $(target).uc_combobox('setValue', '');
                    break;
                }
            }
        },
        onShowPanel: function () {
            var data = $(this).combobox('getData');
            var opts = $.data(this, 'uc_combobox').options;
            if (!opts.panelMaxHeight)
                $(this).combobox('panel').height(24 * data.length + 20);
        },
        valueField: 'id',
        textField: 'text',
        /*
        ������д keyhandler, �����Ḳ��combobox ʵ�ֵ��¼�
        keyHandler: {
        down: function (object) {
        if ($(this).combogrid('panel').is(':visible')) {
        return;
        }

        $(this).combobox('showPanel');
        }
        }*/

    };
})(jQuery);(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_combobox_m') < 0) {
            $.parser.plugins[$.parser.plugins.length] = 'uc_combobox_m';
        }
    })();

    function create(target) {
        var opts = $.data(target, 'uc_combobox_m').options;
        $(target).combobox(opts);
        $($.data(target).combo.combo).find('span:eq(1)').css('height', '100%');
        $(target).combo('resize');

        $(target).parent().find('.combo-text').bind('keydown.combo', function (e) {
            switch (e.keyCode) {
                case 40: //down
                    $(target).combobox('showPanel');
                    break;
            }
        });

    }

    function findDataItem(data, valueField, value) {
        for (var i = 0; i < data.length; ++i) {
            if (data[i][valueField] == value) return data[i];
        }
    }

    $.fn.uc_combobox_m = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_combobox_m.methods[options];
            if (method) return method(this, param);
            else return $(this).combobox(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_combobox_m');
            if (state) $.extend(state.options, options);
            else {
                var curOpts = {};
                //-- ��ֹ onShowPanel �����ǣ�
                $.extend(curOpts, $.fn.combobox.parseOptions(this), options);
                if (typeof curOpts.onShowPanel === 'function') {
                    var func = curOpts.onShowPanel;
                    curOpts.onShowPanel = function () {
                        func.apply(this,arguments);
                        $.fn.uc_combobox_m.defaults.onShowPanel.apply(this,arguments);
                    }
                }

                $.data(this, 'uc_combobox_m', { options: $.extend({}, $.fn.combobox.defaults, $.fn.uc_combobox_m.defaults, curOpts) });
            }
            create(this);
        });
    }

    $.fn.uc_combobox_m.methods = {
        loadData: function (jq, data) {
            $(jq[0]).combobox('panel').resize({ panelWidth: 50 });
            return $.fn.combobox.methods.loadData(jq, data);
        }
    };

    $.fn.uc_combobox_m.defaults = {
        onHidePanel: function () {
            var target = $(this)[0];
            var opts = $.data(target, 'uc_combobox_m').options;
            if (opts.check === true) {
                var data = $.data(target, 'combobox').data;
                var values = $(target).uc_combobox_m('getValues');
                for (var i = 0; i < values.length; ++i) {
                    var item = findDataItem(data, opts.valueField, values[i]);
                    if (!item) {
                        $(target).uc_combobox_m('setValues', []);
                        break;
                    }
                }
            }
        },
        onShowPanel: function () {
            var data = $(this).combobox('getData');
            $(this).combobox('panel').height(24 * data.length + 20);
        },
        multiple: true,
        check: true
    };
})(jQuery);(function ($) {
    (
        function () {
            var plugin = 'uc_combogrid';
            var idx = $.inArray($.parser.plugins, plugin);
            if (idx < 0) {
                $.parser.plugins[$.parser.plugins.length] = plugin;
            }
        }
    )();
    function create(target) {
        var opts = $.data(target, "uc_combogrid").options;
        $(target).combogrid(opts);


        resize(target);
        setTimeout(function () {
            $(target).parent().find('.combo-text').bind('keydown.combo', function (e) {
                switch (e.keyCode) {
                    case 40: //down
                        $(target).combobox('showPanel');
                        break;
                }
            });

            //$(target).combogrid('resize', $(target).parent().width());
        }, 10);
    }

    function resize(target) {
        var cols = $(target).combogrid('grid').datagrid('options').columns;
        if (cols) {
            var width = 0;
            $.each(cols[0], function (idx, val) {
                if (!isNaN(val.width)) {
                    width += parseInt(val.width);
                }
            });
            if (width > 0) {
                $(target).combogrid('panel').panel('resize', { width: width + 5 });
            }
        }
    }

    $.fn.uc_combogrid = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_combogrid.methods[options];
            if (method) {
                return method(this, param);
            } else {
                return $(this).combogrid(options, param);
                //return $.fn.combogrid.methods[options](this, param);
            }
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, "uc_combogrid");
            if (state) {
                $.extend(state.options, options);
            } else {
                $.data(this, "uc_combogrid", {
                    options: $.extend({}, $.fn.combogrid.defaults, $.fn.uc_combogrid.defaults, $.fn.combogrid.parseOptions(this), options)
                });
            }
            create(this);
        });
    };
    /* $.fn.uc_combogrid.parseOptions = function (target) {
    return $.extend({}, $.fn.combogrid.parseOptions(target), {
    });
    };
    */

    $.fn.uc_combogrid.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_combogrid').options;
        }
    };
    $.fn.uc_combogrid.defaults = {
        editable:false,//--��Ϊ�ÿؼ��ɱ��������в����ڵ�ֵ�����Բ������룬����ֻ����������ֵ
        onHidePanel: function () {
            //-- �������� combo �Ŀؼ��������� hide, mounse down ʱ��
            //   �����ѵ�ǰҳ������ combo hide һ����
            if ($(this).combogrid('panel').not(':visible')) {
                return;
            }
            var rows = $(this).combogrid('grid').datagrid('getSelected');
            if (!rows) {
                $(this).combogrid('setValue', '');
            }

        },
        onShowPanel: function () {
            var panel = $(this).combogrid('grid').datagrid('getPanel');
            // ĳЩҳ���ᵼ�� combogrid �������б���ʾ�������г�������ûָ��һ��,������ͷ�������г��Ȳ�һ
            if (panel.find('.datagrid-htable td:first').width() != panel.find('.datagrid-btable td:first').width()) {
                var data = $(this).combogrid('grid').datagrid('getData');
                $(this).combogrid('grid').datagrid({});
                $(this).combogrid('grid').datagrid('loadData', data);
            }
            //-- grid �ĸ߶ȱ��趨��,���� panel �����ֹ�����
            //var data = $(this).combogrid('grid').datagrid('getRows');
            //$(this).combobox('panel').height(25 * data.length + 100);
        },
        height: 22

    };
}
)(jQuery);(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_combotree') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_combotree';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_combotree').options;
        $(target).combotree(opts);

        setTimeout(function () {
            $(target).parent().find('.combo-text').bind('keydown.combo', function (e) {
                switch (e.keyCode) {
                    case 40: //down
                        $(target).combobox('showPanel');
                        break;
                }
            });
        }, 500);
    }

    $.fn.uc_combotree = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_combotree.methods[options];
            if (method) return method(this, param);
            else return $(this).combotree(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_combotree');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_combotree', { options: $.extend({}, $.fn.combotree.defaults, $.fn.uc_combotree.defaults, $.fn.combotree.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_combotree.defaults = {};

    $.fn.uc_combotree.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_combotree').options;
        }
    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_datagrid') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_datagrid';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_datagrid').options;
        $(target).datagrid(opts);
    }

    $.fn.uc_datagrid = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_datagrid.methods[options];
            if (method) return method(this, param);
            else return $(this).datagrid(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_datagrid');
            var newOpts;
            if (state) newOpts = $.extend(state.options, options);
            else {
                newOpts = $.extend({}, $.fn.datagrid.defaults, $.fn.uc_datagrid.defaults, $.fn.datagrid.parseOptions(this), options);
                if (newOpts.columns && newOpts.allSortable) {
                    $.each(newOpts.columns[0], function (idx, col) {
                        // 显式指定不可排序 sortable = false, 否则是 sortable = undefined
                        if (col.sortable == false) {
                        } else {
                            col.sortable = true;
                        }
                    });
                }
            }
            $.data(this, 'uc_datagrid', { options: newOpts });

            create(this);
        });
    }

    $.fn.uc_datagrid.defaults = {
        allSortable: true
    };

    $.fn.uc_datagrid.methods = {
    };

})(jQuery)
;(function () {
    (function () {
        var dr = 'uc_dateRange';
        var drIndex = $.inArray($.parser.plugins, dr);
        if (drIndex < 0) {
            $.parser.plugins[$.parser.plugins.length] = dr;
        }
    })();

    $.fn.uc_dateRange = function (options, param) {
        if (typeof options === "string") {
            return $.fn.uc_dateRange.methods[options](this, param);
        }

        return this.each(function () {
            var state = $.data(this, "uc_dateRange");
            options = options || {};
            if (state) {
                $.extend(state.options, options);
            } else {
                $.data(this, "uc_dateRange", {
                    options: $.extend({}, $.fn.uc_dateRange.defaults, $.fn.uc_dateRange.parseOptions(this), options)
                });
            }
            createBox(this);
        });
    }

    function resize(target, width) {
        $(target).combo('resize', width);
    }

    function createBox(target) {
        var state = $.data(target, 'uc_dateRange');
        var opts = state.options;

        $(target).combo($.extend({}, opts, {
            onShowPanel: function () {
                //state.calendar.calendar('resize');
                state.calendarFrom.calendar('resize');
                state.calendarTo.calendar('resize');
                // setValue(target, getValue(target));
                opts.onShowPanel.call(target);
            },
            onHidePanel: function () {
                // hide 时再触发一次 setValue， 以便按backspace 清空控件时，能及时更新值；
                setValue(target, getValue(target));
                // 因为值改了，同时也要触发了 onSelect 事件；
                opts.onSelect.call(target, dateFrom, dateTo);
            }
        }));
        $(target).combo('textbox').parent().addClass('datebox');
        var textbox = $(target).combo('textbox');

        // calendar 
        if (!state.calendarFrom) {
            createCalendarFrom();
        }
        if (!state.calendarTo) {
            createCalendarTo();
        }


        var dateFrom, dateTo;

        function createCalendarFrom() {
            var panel = $(target).combo("panel");
            state.calendarFrom = $("<div></div>").appendTo(panel).wrap("<div class='datebox-calendar-inner' style='width:180px; float:left; border-right:1px solid #95B8E7'></div>");
            state.calendarFrom.calendar({
                height: 180,
                border: false,
                onSelect: function (date) {
                    dateFrom = date;
                }
            });

            var button = $("<div class='datebox-button'></div>").appendTo(state.calendarFrom.parent());
            $("<a href='javascript:void(0)' class='datebox-current'></a>").html(opts.currentText).appendTo(button);
            //$("<a href='javascript:void(0)' class='datebox-close'></a>").html(opts.closeText).appendTo(button);
            button.find(".datebox-current,.datebox-close").hover(
                function () { $(this).addClass("datebox-button-hover"); },
                function () { $(this).removeClass("datebox-button-hover"); }
            );

            button.find(".datebox-current").click(function () {
                state.calendarFrom.calendar("moveTo", new Date());
                dateFrom = new Date();
            });
        }

        function createCalendarTo() {
            var panel = $(target).combo("panel");
            state.calendarTo = $("<div></div>").appendTo(panel).wrap("<div  class='datebox-calendar-inner' style='width:180px; float:left;margin-left:5px;border-left: 1px solid #95B8E7'></div>");
            state.calendarTo.calendar({
                height: 180,
                border: false,
                onSelect: function (date) {
                    dateTo = date;
                }
            });

            var button = $("<div class='datebox-button'></div>").appendTo(state.calendarTo.parent());
            $("<a href='javascript:void(0)' class='datebox-current'></a>").html(opts.currentText).appendTo(button);
            $("<a href='javascript:void(0)' class='datebox-ok'></a>").html(opts.okText).appendTo(button);
            $("<a href='javascript:void(0)' class='datebox-close'></a>").html(opts.closeText).appendTo(button);
            button.find(".datebox-current,.datebox-close,.datebox-ok").hover(
                function () { $(this).addClass("datebox-button-hover"); },
                function () { $(this).removeClass("datebox-button-hover"); }
            );

            button.find(".datebox-current").click(function () {
                state.calendarTo.calendar("moveTo", new Date());
                dateTo = new Date();
            });
            button.find(".datebox-close").click(function () {
                $(target).combo("hidePanel");
            });

            button.find(".datebox-ok").click(function () {
                dateFrom = dateFrom || state.dateFrom;
                dateTo = dateTo || state.dateTo;
                if (dateFrom && dateTo) {
                    var value = opts.formatter(dateFrom, dateTo);
                    setValue(target, value);
                    // hidePanel 有触发 onSelect 事件，以免重复，这里不再触发
                    //opts.onSelect.call(target, dateFrom, dateTo);
                    $(target).combo("hidePanel");
                }
            });

        }

        setValue(target, opts.value);
    }

    $.fn.uc_dateRange.defaults = $.extend({}, $.fn.combo.defaults, {
        panelWidth: 390,
        panelHeight: 205,
        keyHandler: {
            up: function () { },
            down: function () { },
            enter: function () { doEnter(this); },
            query: function (q) { doQuery(this, q); }
        },

        currentText: 'Today',
        closeText: 'Close',
        okText: 'Ok',

        formatter: function (dateFrom, dateTo) {
            var y = dateFrom.getFullYear();
            var m = dateFrom.getMonth() + 1;
            var d = dateFrom.getDate();
            var yto = dateTo.getFullYear();
            var mto = dateTo.getMonth() + 1;
            var dto = dateTo.getDate();
            return m + '/' + d + '/' + y + ' to ' + mto + '/' + dto + '/' + yto;

        },
        parser: function (s) {
            if (s) {
                var dateArr = s.split(' to ');
                var t1 = Date.parse(dateArr[0]);
                var t2 = Date.parse(dateArr[1]);
                if (!isNaN(t1) && !isNaN(t2)) {
                    return [new Date(t1), new Date(t2)];
                } else {

                    return [new Date(), new Date()];
                }
            } else {
                return [new Date(), new Date()];
            }
        },

        onSelect: function (dateFrom, dateTo) { }
    });
    $.fn.uc_dateRange.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_dateRange').options;
        },
        calendarFrom: function (jq) {	// get the calendar object
            return $.data(jq[0], 'uc_dateRange').calendarFrom;
        },
        calendarTo: function (jq) {
            return $.data(jq[0], 'uc_dateRange').calendarTo;
        },
        setValue: function (jq, value) {
            return jq.each(function () {
                setValue(this, value);
            });
        },
        getValue: function (jq) {
            return getValue(jq[0]);
        },
        resize: function (jq, width) {
            return resize(jq[0], width);
        }
    };

    $.fn.uc_dateRange.parseOptions = function (target) {
        var t = $(target);
        return $.extend({}, $.fn.combo.parseOptions(target), {
        });
    };


    /**
    * called when user inputs some value in text box
    */
    function doQuery(target, q) {
        setValue(target, q, true);
    }

    function bindEvents(target) {

    }

    /**
    * called when user press enter key
    */
    function doEnter(target) {
        return;
        var opts = $.data(target, 'uc_dateRange').options;
        var from = $.data(target, 'uc_dateRange').calendarFrom;
        var to = $.data(target, 'uc_dateRange').calendarTo;
        var value = opts.formatter(from, to);
        setValue(target, value);
        $(target).combo('hidePanel');
    }

    function setValue(target, value, notSetText) {
        var state = $.data(target, 'uc_dateRange');
        var opts = state.options;
        $(target).combo('setValue', value);
        if (!notSetText) {
            $(target).combo('setText', value);
        }
        var dateArr = opts.parser(value);
        state.dateFrom = dateArr[0];
        state.dateTo = dateArr[1];
        state.calendarFrom.calendar("moveTo", dateArr[0]);
        state.calendarTo.calendar('moveTo', dateArr[1]);
    }

    function getValue(target) {
        return $(target).combo("getValue");
    }
})(jQuery);;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_datebox') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_datebox';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_datebox').options;
        var onSelect = opts.onSelect;
        opts.onSelect = function (date) {
            if (opts.onChange) {
                opts.onChange(data);
            }
            if (onSelect) {
                onSelect(date);
            }
        }
        $(target).datebox(opts);
        $(target).datebox();

        //$(target).combo('resize',$.data(target).combo.combo.parent().width());
        //$($.data(target).combo.combo).find('span:eq(1)').css('height', '100%');
    }

    $.fn.uc_datebox = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_datebox.methods[options];
            if (method) return method(this, param);
            else return $(this).datebox(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_datebox');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_datebox', { options: $.extend({}, $.fn.datebox.defaults, $.fn.uc_datebox.defaults, $.fn.datebox.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_datebox.defaults = {
    };

    $.fn.uc_datebox.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_datebox').options;
        }
    };

})(jQuery);(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_datetimebox') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_datetimebox';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_datetimebox').options;
        $(target).datetimebox(opts);
    }

    $.fn.uc_datetimebox = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_datetimebox.methods[options];
            if (method) return method(this, param);
            else return $(this).datetimebox(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_datetimebox');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_datetimebox', { options: $.extend({}, $.fn.datetimebox.defaults, $.fn.uc_datetimebox.defaults, $.fn.datetimebox.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_datetimebox.defaults = {
        showSeconds: false
    };

    $.fn.uc_datetimebox.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_datetimebox').options;
        }
    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_dialog') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_dialog';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_dialog').options;
        $(target).dialog(opts);
    }

    $.fn.uc_dialog = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_dialog.methods[options];
            if (method) return method(this, param);
            else return $(this).dialog(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_dialog');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_dialog', { options: $.extend({}, $.fn.dialog.defaults, $.fn.uc_dialog.defaults, $.fn.dialog.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_dialog.defaults = {};

    $.fn.uc_dialog.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_dialog').options;
        }
    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_dollar') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_dollar';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_dollar').options;
        if (opts.width == 'auto')
            opts.width = undefined;// 默认 width='auto' 在新的 chrome 43 会导致宽度为0, 在 default 中设置有时还是 auto 
        $(target).uc_numberspinner(opts);
        var txt = $(target).uc_numberspinner('textbox');
        $(txt).css('text-align', 'right');
        $(txt).attr('placeholder', '￥');
        $(target).spinner('resize');
    }

    $.fn.uc_dollar = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_dollar.methods[options];
            if (method) return method(this, param);
            else return $(this).numberspinner(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_dollar');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_dollar', { options: $.extend({}, $.fn.numberspinner.defaults, $.fn.uc_dollar.defaults, $.fn.numberspinner.parseOptions(this), options) });

            create(this);
        });
    };

    $.fn.uc_dollar.defaults = {
        precision: 2,
        groupSeparator: ',',
        decimalSeparator: '.',
        prefix: '￥'
    };

    $.fn.uc_dollar.methods = {};

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_form') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_form';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_form').options;
        $(target).form(opts);
    }

    $.fn.uc_form = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_form.methods[options];
            if (method) return method(this, param);
            else return $(this).form(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_form');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_form', { options: $.extend({}, $.fn.form.defaults, $.fn.uc_form.defaults, $.fn.form.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_form.defaults = {};

    $.fn.uc_form.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_form').options;
        }
    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_fuzzybox') < 0) {
            $.parser.plugins[$.parser.plugins.length] = 'uc_fuzzybox';
        }
    })();

    function create(target) {
        var opt = $.data(target, 'uc_fuzzybox').options;
        if (opt.width == 'auto')
            opt.width = undefined;// 默认 width='auto' 在新的 chrome 43 会导致宽度为0, 在 default 中设置有时还是 auto 
        $(target).combobox(opt);
        var txtData = $.data(target, 'combobox');
        $(target).combobox('panel').panel("options").closed = false;
    };

    function loaData(target) {
        var opt = $.data(target, 'uc_fuzzybox').options;
        var value = $(target).textbox('getValue');
        if (opt.url) {
            com.ajax({
                type: 'GET',
                url: opt.url + value,
                success: function (data) {
                    if (Object.prototype.toString.call(data) == '[object Array]') {
                        opt.data = data;
                        $(target).combobox('loadData', data);
                    }
                }
            })
        }
    }

    $.fn.uc_fuzzybox = function (options, param) {
        if (typeof options == 'string') {
            var method = $.fn.uc_fuzzybox.methods[options];
            if (method) return method(this, param);
            else return $(this).combobox(options, param);
        }
        options = options || {};
        this.each(function () {
            var data = $.data(this, 'uc_fuzzybox');
            if (data) $.extend(data.options, options)
            else $.data(this, 'uc_fuzzybox', { options: $.extend({}, $.fn.uc_fuzzybox.defaults, $.fn.uc_fuzzybox.parseOptions(this), options) });
            create(this);
        });

    };

    $.fn.uc_fuzzybox.parseOptions = function (target) {
        var opts = $.extend({}, $.fn.combobox.parseOptions(target), $.parser.parseOptions(target, []));
        return opts;
    };

    $.fn.uc_fuzzybox.defaults = {
        mode: 'remote',
        method: 'GET',
        delay: 500,
        hasDownArrow: false,
        onShowPanel: function () {
        },
        onLoadSuccess: function () {
            var data = $(this).combobox('getData');
            if (data && data.length > 0 && $(this).combobox('textbox').is(':focus')) {
                $(this).combobox('panel').panel('options').closed = true;
                $(this).combobox('showPanel');
                $(this).combobox('panel').panel('options').closed = true;
            } else {
                $(this).combobox('panel').panel('options').closed = true;
                $(this).combobox('hidePanel');
            }
        }
    };
    $.fn.uc_fuzzybox.methods = {};


})(jQuery);;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_fuzzypaginbox') < 0) {
            $.parser.plugins[$.parser.plugins.length] = 'uc_fuzzypaginbox'
        }
    })();

    function create(target) {
        var opts = $.data(target, 'uc_fuzzypaginbox').options;
        $(target).combo($.extend({}, opts));
        var panel = $(target).combo('panel');
        var div = $('<div class="dh-fuzzy" style="overflow:auto;"><div id="_easyui_combobox_i1_0" class="combobox-item">admin</div><div id="_easyui_combobox_i1_1" class="combobox-item">oTVPpjkRtC0a3ys0a3eiGOD5oYlA</div><div id="_easyui_combobox_i1_2" class="combobox-item">oTVPpjsMVH2Mu_XmFwPx7uAdBAAY</div><div id="_easyui_combobox_i1_3" class="combobox-item">oTVPpjvISwqyyZ3fMH9DDvRPsfaA</div><div id="_easyui_combobox_i1_4" class="combobox-item">oTVPpjk4fhC1uWN8LzTqU858Y4KA</div><div id="_easyui_combobox_i1_5" class="combobox-item">oTVPpjvYAsoWFKpFcLl7rSYi-hiY</div><div id="_easyui_combobox_i1_6" class="combobox-item">oTVPpjtPBkkQ-Rr2vL0OLV3xAlgY</div><div id="_easyui_combobox_i1_7" class="combobox-item">oTVPpjmbC9Cdlz7TAII0oQyveAwU</div><div id="_easyui_combobox_i1_8" class="combobox-item">oTVPpjur_7tX_EBJ89Al5kKG3IF8</div><div id="_easyui_combobox_i1_9" class="combobox-item">oTVPpjg8_gy0JwDeWs7aRmEKn1n8</div></div>').appendTo(panel);
        opts.databox = div;

        var paginDiv = $("<div style='width:100%;line-height:20px;'><a style='float:right'>上一页</a><a style='float:right'>下一页</a></div>").appendTo(panel);
        opts.paginbox = paginDiv;

        $(div).unbind().bind("mouseover", function (e) {
            $(this).find("div.combobox-item-hover").removeClass("combobox-item-hover");
            $(e.target).closest("div.combobox-item").addClass("combobox-item-hover");
            e.stopPropagation();
        }).bind("mouseout", function (e) {
            $(e.target).find("div.combobox-item").removeClass("combobox-item-hover");
            e.stopPropagation();
        }).bind("click", function (e) {
            var item = $(e.target).closest("div.combobox-item");
            if (item.length == 0) return;
            var val = item.attr('value');
            $(target).combo("hidePanel");
            e.stopPropagation();
        });
    }
    function loaData(target, data, remainText) {
        var opts = $.data(target, 'uc_fuzzypaginbox').options;
        var value = $(target).textbox('getValue');
        $(opts.databox).empty();

        opts.data = data;
        $.each(data, function (idx, row) {
            var item = $("<div class='combobox-item'>" + row[opts.textField] + "</div>").appendTo(opts.databox);
            $(item).attr('value', row[opts.valueField]);
        });
    }

    function request(target, url, param, remainText) {
        var opts = $.data(target, 'uc_fuzzypaginbox').options;
        if (url) {
            opts.url = url;
        }
        param = param || {};

        opts.loader.call(target, param, function (data) {
            loaData(target, data, remainText);
        }, function () {
            console.log('error occur');
        });
    }

    $.fn.uc_fuzzypaginbox = function (options, param) {
        $.each(this, function (idx, elem) {
            $.data(this, 'uc_fuzzypaginbox', { options: options || {} });
            create(this);
            loaData(this)
        });
    }

    $.fn.uc_fuzzypaginbox.parseOptions = function (target) {
        return $.extend({}, $.fn.combo.parseOptions(target), $.parser);
    }

    $.fn.uc_fuzzypaginbox.defaults = {
        textField: 'text',
        valueField: 'value',
        url: null,
        method: 'GET',
        mode: 'remote',
        delay: 500,
        loader: function (param, success, error) {
            var opts = $(this).uc_fuzzypaginbox('options');
            if (!opts.url) return;
            $.ajax({
                type: opts.method,
                url: opts.url,
                data: param,
                dataType: 'json',
                success: function (data) {
                    success(data);
                },
                error: function () {
                    error.apply(this, arguments);
                }
            });
        }
    }

})();;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_layout') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_layout';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_layout').options;
        $(target).layout(opts);
    }

    $.fn.uc_layout = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_layout.methods[options];
            if (method) return method(this, param);
            else return $(this).layout(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_layout');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_layout', { options: $.extend({}, $.fn.layout.defaults, $.fn.uc_layout.defaults, $.fn.layout.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_layout.defaults = {};

    $.fn.uc_layout.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_layout').options;
        }
    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_linkbutton') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_linkbutton';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_linkbutton').options;
        $(target).linkbutton(opts);
    }

    $.fn.uc_linkbutton = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_linkbutton.methods[options];
            if (method) return method(this, param);
            else return $(this).linkbutton(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_linkbutton');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_linkbutton', { options: $.extend({}, $.fn.linkbutton.defaults, $.fn.uc_linkbutton.defaults, $.fn.linkbutton.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_linkbutton.defaults = {};

    $.fn.uc_linkbutton.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_linkbutton').options;
        }
    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_listbox') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_listbox';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_listbox').options;
        var span = $('<span class="dh-listbox"></span>');
        $(target).after(span);
        var select = $('<select multiple="multiple" class="dh-select"></select>').appendTo(span);
        $(target).removeClass('easyui-uc_listbox').addClass('easyui-uc_listbox');

        select.bind('change', function () {
            var value = getValue(target);
            if (opts.onChange) opts.onChange(target, value);
        }).bind('dblclick', function () {
            var selRows = getSelRows(target);
            if (opts.onDbClick) opts.onDbClick(target, selRows);
        });
        $.data(target, 'uc_listbox').select = select;
        $.data(target, 'uc_listbox').span = span;
        if (opts.url) {
            reload(target, opts.url);
        } else if (opts.data) {
            loadData(target, opts.data);
        }
        resize(target);
    }
    function resize(target, width) {
        var opts = $.data(target, 'uc_listbox').options;
        var span = $.data(target, 'uc_listbox').span;
        var select = $.data(target, 'uc_listbox').select;
        if (width) {
            opts.width = width;
        }
        if (!opts.width) {
            opts.width = $(target).outerWidth();
        }
        if (!opts.height) {
            opts.height = $(target).outerHeight();
        }
        span.outerHeight(opts.height).outerWidth(opts.width);
        select.outerHeight(opts.height).outerWidth(opts.width);
    }

    function loadData(target, data) {
        var opts = $.data(target, 'uc_listbox').options;
        var select = $.data(target, 'uc_listbox').select;
        opts.data = data;
        select.empty();
        if (data.length) {
            $.each(data, function (idx, val) {
                select.append('<option value="' + val[opts.valueField] + '">' + val[opts.textField] + '</option>');
            });
        }
        setValue(target);
    }

    function getData(target) {
        var data = $.data(target, 'uc_listbox').options.data;
        if (!data)
            data = [];
        return data;
    }

    function setValue(target, val) {
        var opts = $.data(target, 'uc_listbox').options;
        var select = $.data(target, 'uc_listbox').select;
        if (val === undefined || val === null)
            val = $(target).val();
        $(target).val(val);
        select.val(val.split(opts.splitter));
    }

    function getValue(target) {
        var opts = $.data(target, 'uc_listbox').options;
        var select = $.data(target, 'uc_listbox').select;
        var valArr = select.val();
        var value;
        if (valArr) {
            value = valArr.join(opts.splitter);
        }
        $(target).val(value);
        return value;
    }

    function removeValue(target, val) {
        var opts = $.data(target, 'uc_listbox').options;
        var data = opts.data;
        $(target).val(val);
        select.val(val.split(opts.splitter));

    }

    function addRows(target, rows) {
        var opts = $.data(target, 'uc_listbox').options;
        var data = opts.data;
        if (!rows) return;
        if (!data) data = [];
        $.each(rows, function (idx, row) {
            data.push(row);
        });
        loadData(target, data);
    }

    function removeRows(target, rows, isValueType) {
        var opts = $.data(target, 'uc_listbox').options;
        var data = opts.data;
        if (!rows) return;
        if (!data) return;
        var valArr = [];
        if (isValueType) {
            for (var i = 0; i < rows.length; ++i)
                valArr.push(rows[i][opts.valueField]);
        }
        for (var i = 0; i < data.length; ++i) {
            if (isValueType) {
                if ($.inArray(data[i][opts.valueField], valArr) > -1) {
                    data.splice(i, 1);
                    --i;
                }

            } else {
                if ($.inArray(data[i], rows) > -1) {
                    data.splice(i, 1);
                    --i;
                }
            }
        }
        /*$.each(data, function (idx, row) {
        if ($.inArray(row, rows) > -1)
        data.splice(idx, 1);
        });
        */
        loadData(target, data);
    }

    function removeValRows(target, rows) {
        removeRows(target, rows, true);
    }

    function getSelRows(target, isCopy) {
        var opts = $.data(target, 'uc_listbox').options;
        var data = opts.data;
        var value = getValue(target);
        if (value === undefined || value === null) return value;
        var valArr = value.split(opts.splitter);
        var rows = [];
        $.each(data, function (idx, val) {
            if ($.inArray(val[opts.valueField].toString(), valArr) > -1) {
                if (isCopy)
                    rows.push($.extend({}, val));
                else
                    rows.push(val);
            }
        });
        return rows;
    }

    function removeSelRows(target) {
        var rows = getSelRows(target);
        removeRows(target, rows);
    }

    function reload(target, url) {
        com.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                loadData(target, data);
            }
        });
    }

    $.fn.uc_listbox = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_listbox.methods[options];
            if (method) return method(this, param);
            else return $(this).combo(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_listbox');
            if (state) $.extend(state.options, options);

            else $.data(this, 'uc_listbox', { options: $.extend({}, $.fn.uc_listbox.defaults, $.fn.uc_listbox.parseOptions(this), options) });

            create(this);
        });
    };
    $.fn.uc_listbox.parseOptions = function (target) {
        var opts = $.extend({}, $.parser.parseOptions(target, ["valueField", "textField", "width", "height", "data"]));
        return opts;
    };


    $.fn.uc_listbox.defaults = {
        splitter: ',',
        height: 22,
        onDbClick: function (target, selRows) {

        }
    };

    $.fn.uc_listbox.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_listbox').options;
        },
        setValue: function (jq, value) {
            setValue(jq[0], value);
        },
        getValue: function (jq) {
            return getValue(jq[0]);
        },
        getData: function (jq) {
            return getData(jq[0]);
        },
        reload: function (jq, url) {
            reload(jq[0], url);
        },
        loadData: function (jq, data) {
            loadData(jq[0], data);
        }, addRows: function (jq, rows) {
            addRows(jq[0], rows);
        }, removeRows: function (jq, rows) {
            removeRows(jq[0], rows);
        }, removeValRows: function (jq, rows) {
            removeValRows(jq[0], rows);
        }, getSelRows: function (jq, isCopy) {
            return getSelRows(jq[0], isCopy);
        }, removeSelRows: function (jq) {
            removeSelRows(jq[0]);
        }
    };

})(jQuery);(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_menu') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_menu';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_menu').options;
        $(target).menu(opts);
    }

    $.fn.uc_menu = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_menu.methods[options];
            if (method) return method(this, param);
            else return $(this).menu(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_menu');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_menu', { options: $.extend({}, $.fn.menu.defaults, $.fn.uc_menu.defaults, $.fn.menu.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_menu.defaults = {};

    $.fn.uc_menu.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_menu').options;
        }
    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_menubutton') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_menubutton';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_menubutton').options;
        $(target).menubutton(opts);
    }

    $.fn.uc_menubutton = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_menubutton.methods[options];
            if (method) return method(this, param);
            else return $(this).menubutton(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_menubutton');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_menubutton', { options: $.extend({}, $.fn.menubutton.defaults, $.fn.uc_menubutton.defaults, $.fn.menubutton.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_menubutton.defaults = {};

    $.fn.uc_menubutton.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_menubutton').options;
        }
    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_messager') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_messager';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_messager').options;
        $(target).messager(opts);
    }

    $.fn.uc_messager = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_messager.methods[options];
            if (method) return method(this, param);
            else return $(this).messager(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_messager');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_messager', { options: $.extend({}, $.fn.messager.defaults, $.fn.uc_messager.defaults, $.fn.messager.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_messager.defaults = {};

    $.fn.uc_messager.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_messager').options;
        }
    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_numberbox') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_numberbox';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_numberbox').options;
        $(target).numberbox(opts);
        $(target).css('text-align', 'right');
        var txt = $(target).numberbox('textbox');
        $(txt).css('text-align', 'right');
    }

    $.fn.uc_numberbox = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_numberbox.methods[options];
            if (method) return method(this, param);
            else return $(this).numberbox(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_numberbox');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_numberbox', { options: $.extend({}, $.fn.numberbox.defaults, $.fn.uc_numberbox.defaults, $.fn.numberbox.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_numberbox.defaults = {};

    $.fn.uc_numberbox.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_numberbox').options;
        }
    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_numberspinner') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_numberspinner';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_numberspinner').options;
        $(target).numberspinner(opts);
        $(target).css('text-align', 'right');
        var txt = $(target).uc_numberspinner('textbox');
        $(txt).css('text-align', 'right');
        $(target).spinner('resize');
    }


    $.fn.uc_numberspinner = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_numberspinner.methods[options];
            if (method) return method(this, param);
            else return $(this).numberspinner(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_numberspinner');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_numberspinner', { options: $.extend({}, $.fn.numberspinner.defaults, $.fn.uc_numberspinner.defaults, $.fn.numberspinner.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_numberspinner.defaults = {
        groupSeparator: ','
        /* onSpinUp: function () {
        console.log('spin up');
        },
        onSpinDown: function () {
        console.log('spin down');
        },
        
        onChange: function () {
        console.log('change');
        }
        */
    };

    $.fn.uc_numberspinner.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_numberspinner').options;
        }
    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_panel') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_panel';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_panel').options;
        $(target).panel(opts);
    }

    $.fn.uc_panel = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_panel.methods[options];
            if (method) return method(this, param);
            else return $(this).panel(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_panel');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_panel', { options: $.extend({}, $.fn.panel.defaults, $.fn.uc_panel.defaults, $.fn.panel.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_panel.defaults = {};

    $.fn.uc_panel.methods = {
     
    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_percent') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_percent';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_percent').options;
        $(target).uc_numberspinner(opts);
        var txt = $(target).uc_numberspinner('textbox');
        $(txt).css('text-align', 'right');
        $(txt).attr('placeholder', '%');
        $(target).spinner('resize');
    }

    $.fn.uc_percent = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_percent.methods[options];
            if (method) return method(this, param);
            else return $(this).numberspinner(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_percent');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_percent', { options: $.extend({}, $.fn.numberspinner.defaults, $.fn.uc_percent.defaults, $.fn.numberspinner.parseOptions(this), options) });

            create(this);
        });
    };

    $.fn.uc_percent.defaults = {
        precision: 2,
        groupSeparator: ',',
        decimalSeparator: '.',
        suffix: '%'
        //max: 100,
        //min: -100
    };

    $.fn.uc_percent.methods = {};

})(jQuery)
;(function () {
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

})(jQuery);(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_progressbar') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_progressbar';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_progressbar').options;
        $(target).progressbar(opts);
    }

    $.fn.uc_progressbar = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_progressbar.methods[options];
            if (method) return method(this, param);
            else return $(this).progressbar(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_progressbar');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_progressbar', { options: $.extend({}, $.fn.progressbar.defaults, $.fn.uc_progressbar.defaults, $.fn.progressbar.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_progressbar.defaults = {};

    $.fn.uc_progressbar.methods = {

    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_radioGroup') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_radioGroup';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_radioGroup').options;
        var span = $('<span class="dh-radioGroup"></span>');
        var oldSpan = $.data(target, 'uc_radioGroup').span;
        if (oldSpan) oldSpan.remove();
        $(target).after(span);
        $(target).removeClass('easyui-uc_radioGroup').addClass('easyui-uc_radioGroup');
        $.data(target, 'uc_radioGroup').span = span;
        if (opts.url) {
            reload(target, opts.url);
        } else if (opts.data) {
            loadData(target, opts.data);
        }

        span.on("input:radio").bind('change', function () {
            var value = getValue(target);
            if (opts.onChange) opts.onChange(target, value);
        });
        resize(target);
    }
    function resize(target, width) {
        var opts = $.data(target, 'uc_radioGroup').options;
        var span = $.data(target, 'uc_radioGroup').span;
        if (width) {
            opts.width = width;
        }
        if (!opts.width) {
            opts.width = $(target).outerWidth();
        }
        if (!opts.height) {
            opts.height = $(target).outerHeight();
        }
        span.outerHeight(opts.height).outerWidth(opts.width);
        //select.outerHeight(opts.height).outerWidth(opts.width);
    }

    function loadData(target, data) {
        var opts = $.data(target, 'uc_radioGroup').options;
        var span = $.data(target, 'uc_radioGroup').span;
        opts.data = data;
        span.html('');
        if (data.length) {
            if (opts.orientation == 'vertical') {
                var ul = $('<ul class="dh-radio-list-v" ></ul>').appendTo(span);
            } else {
                var ul = $('<ul class="dh-radio-list-h"" ></ul>').appendTo(span);
            }
            $.each(data, function (idx, val) {
                ul.append('<li><label><input style="width:15px;height:15px;" name="' + opts.name + '" type="radio" class="easyui-uc_validatebox" value="' + val[opts.valueField] + '" />' + val[opts.textField] + '</label></li>');
                //select.append('<option value="' + val[opts.valueField] + '">' + val[opts.textField] + '</option>');
                //select.append('<option value="' + val[opts.valueField] + '">' + val[opts.textField] + '</option>');
            });
        }
        setValue(target);
    }

    function getData(target) {
        var data = $.data(target, 'uc_radioGroup').options.data;
        if (!data)
            data = [];
        return data;
    }

    function setValue(target, val) {
        var opts = $.data(target, 'uc_radioGroup').options;
        var span = $.data(target, 'uc_radioGroup').span;
        if (val === undefined || val === null)
            val = $(target).val();
        $(target).val(val);
        var checkboxArr = span.find('input');

        for (var i = 0, count = checkboxArr.length; i < count; ++i) {
            if ($(checkboxArr[i]).val() == val) {
                $(checkboxArr[i]).prop('checked', true);
                break;
            }
        }

    }

    function getValue(target) {
        var opts = $.data(target, 'uc_radioGroup').options;
        var span = $.data(target, 'uc_radioGroup').span;
        var value = $(span).find("input:checked").val();
        $(target).val(value);
        return value;
    }

    function getValueStr(target) {
        var opts = $.data(target, 'uc_radioGroup').options;
        var span = $.data(target, 'uc_radioGroup').span;


        var valArr = [];
        var checkboxArr = span.find('input:checked');


        var value = '';
        if (valArr) {
            value = valArr.join(opts.splitter);
        }
        return value;
    }

    function removeValue(target, val) {
        var opts = $.data(target, 'uc_radioGroup').options;
        var data = opts.data;
        $(target).val(val);
        select.val(val.split(opts.splitter));

    }

    function addRows(target, rows) {
        var opts = $.data(target, 'uc_radioGroup').options;
        var data = opts.data;
        if (!rows) return;
        if (!data) data = [];
        $.each(rows, function (idx, row) {
            data.push(row);
        });
        loadData(target, data);
    }

    function removeRows(target, rows, isValueType) {
        var opts = $.data(target, 'uc_radioGroup').options;
        var data = opts.data;
        if (!rows) return;
        if (!data) return;
        var valArr = [];
        if (isValueType) {
            for (var i = 0; i < rows.length; ++i)
                valArr.push(rows[i][opts.valueField]);
        }
        for (var i = 0; i < data.length; ++i) {
            if (isValueType) {
                if ($.inArray(data[i][opts.valueField], valArr) > -1) {
                    data.splice(i, 1);
                    --i;
                }

            } else {
                if ($.inArray(data[i], rows) > -1) {
                    data.splice(i, 1);
                    --i;
                }
            }
        }
        /*$.each(data, function (idx, row) {
        if ($.inArray(row, rows) > -1)
        data.splice(idx, 1);
        });
        */
        loadData(target, data);
    }

    function removeValRows(target, rows) {
        removeRows(target, rows, true);
    }

    function getSelRows(target, isCopy) {
        var opts = $.data(target, 'uc_radioGroup').options;
        var data = opts.data;
        var value = getValueStr(target);
        if (value === undefined || value === null) return value;
        var valArr = value.split(opts.splitter);
        var rows = [];
        $.each(data, function (idx, val) {
            if ($.inArray(val[opts.valueField].toString(), valArr) > -1) {
                if (isCopy)
                    rows.push($.extend({}, val));
                else
                    rows.push(val);
            }
        });
        return rows;
    }

    function removeSelRows(target) {
        var rows = getSelRows(target);
        removeRows(target, rows);
    }

    function reload(target, url) {
        com.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                loadData(target, data);
            }
        });
    }

    $.fn.uc_radioGroup = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_radioGroup.methods[options];
            if (method) return method(this, param);
            else return false;
            //else return $(this).combo(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_radioGroup');
            if (state) $.extend(state.options, options);

            else $.data(this, 'uc_radioGroup', { options: $.extend({}, $.fn.uc_radioGroup.defaults, $.fn.uc_radioGroup.parseOptions(this), options) });

            create(this);
        });
    };
    $.fn.uc_radioGroup.parseOptions = function (target) {
        var opts = $.extend({}, $.parser.parseOptions(target, ["valueField", "textField", "width", "height", "data", 'isValueArray', 'name']));
        return opts;
    };


    $.fn.uc_radioGroup.defaults = {
        splitter: ',',
        height: 22,
        isValueArray: false,
        name: 'uc_radioGroup' + Utils.getGuid(),
        orientation: 'horizontal',
        onDbClick: function (target, selRows) {

        }
    };

    $.fn.uc_radioGroup.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_radioGroup').options;
        },
        setValue: function (jq, value) {
            setValue(jq[0], value);
        },
        getValue: function (jq) {
            return getValue(jq[0]);
        },
        getData: function (jq) {
            return getData(jq[0]);
        },
        reload: function (jq, url) {
            reload(jq[0], url);
        },
        loadData: function (jq, data) {
            loadData(jq[0], data);
        }, addRows: function (jq, rows) {
            addRows(jq[0], rows);
        }, removeRows: function (jq, rows) {
            removeRows(jq[0], rows);
        }, removeValRows: function (jq, rows) {
            removeValRows(jq[0], rows);
        }, getSelRows: function (jq, isCopy) {
            return getSelRows(jq[0], isCopy);
        }, removeSelRows: function (jq) {
            removeSelRows(jq[0]);
        }
    };

})(jQuery);(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_searchbox') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_searchbox';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_searchbox').options;
        $(target).searchbox(opts);
        var height = $($.data(target).searchbox.searchbox).find('input:first').height();
        $($.data(target).searchbox.searchbox).find('span').css('height', height +2);
        $($.data(target).searchbox.searchbox).css('height', height + 2);
    }

    $.fn.uc_searchbox = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_searchbox.methods[options];
            if (method) return method(this, param);
            else return $(this).searchbox(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_searchbox');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_searchbox', { options: $.extend({}, $.fn.searchbox.defaults, $.fn.uc_searchbox.defaults, $.fn.searchbox.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_searchbox.defaults = {
    };

    $.fn.uc_searchbox.methods = {};

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_spinner') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_spinner';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_spinner').options;
        $(target).spinner(opts);
        $(target).spinner('resize');
    }

    $.fn.uc_spinner = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_spinner.methods[options];
            if (method) return method(this, param);
            else return $(this).spinner(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_spinner');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_spinner', { options: $.extend({}, $.fn.spinner.defaults, $.fn.uc_spinner.defaults, $.fn.spinner.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_spinner.defaults = {};

    $.fn.uc_spinner.methods = {};

})(jQuery);(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_splitbutton') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_splitbutton';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_splitbutton').options;
        $(target).splitbutton(opts);
    }

    $.fn.uc_splitbutton = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_splitbutton.methods[options];
            if (method) return method(this, param);
            else return $(this).splitbutton(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_splitbutton');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_splitbutton', { options: $.extend({}, $.fn.splitbutton.defaults, $.fn.uc_splitbutton.defaults, $.fn.splitbutton.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_splitbutton.defaults = {};

    $.fn.uc_splitbutton.methods = {};

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_tabs') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_tabs';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_tabs').options;
        $(target).tabs(opts);
    }

    $.fn.uc_tabs = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_tabs.methods[options];
            if (method) return method(this, param);
            else return $(this).tabs(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_tabs');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_tabs', { options: $.extend({}, $.fn.tabs.defaults, $.fn.uc_tabs.defaults, $.fn.tabs.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_tabs.defaults = {};

    $.fn.uc_tabs.methods = {};

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_textbox') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_textbox';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_textbox').options;
        $(target).textbox(opts);

    }

    $.fn.uc_textbox = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_textbox.methods[options];
            if (method) return method(this, param);
            else return $(this).textbox(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_textbox');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_textbox', { options: $.extend({}, $.fn.textbox.defaults, $.fn.uc_textbox.defaults, $.fn.textbox.parseOptions(this), options) });

            create(this);
          
        });
    };


    $.fn.uc_textbox.defaults = {};

    $.fn.uc_textbox.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_textbox').options;
        }
    };

})(jQuery);(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_timespinner') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_timespinner';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_timespinner').options;
        $(target).timespinner(opts);
    }

    $.fn.uc_timespinner = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_timespinner.methods[options];
            if (method) return method(this, param);
            else return $(this).timespinner(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_timespinner');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_timespinner', { options: $.extend({}, $.fn.timespinner.defaults, $.fn.uc_timespinner.defaults, $.fn.timespinner.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_timespinner.defaults = {};

    $.fn.uc_timespinner.methods = {};

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_tooltip') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_tooltip';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_tooltip').options;
        $(target).tooltip(opts);
    }

    $.fn.uc_tooltip = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_tooltip.methods[options];
            if (method) return method(this, param);
            else return $(this).tooltip(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_tooltip');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_tooltip', { options: $.extend({}, $.fn.tooltip.defaults, $.fn.uc_tooltip.defaults, $.fn.tooltip.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_tooltip.defaults = {};

    $.fn.uc_tooltip.methods = {};

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_tree') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_tree';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_tree').options;
        $(target).tree(opts);
    }

    $.fn.uc_tree = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_tree.methods[options];
            if (method) return method(this, param);
            else return $(this).tree(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_tree');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_tree', { options: $.extend({}, $.fn.tree.defaults, $.fn.uc_tree.defaults, $.fn.tree.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_tree.defaults = {};

    $.fn.uc_tree.methods = {};

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_treegrid') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_treegrid';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_treegrid').options;
        $(target).treegrid(opts);
    }

    $.fn.uc_treegrid = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_treegrid.methods[options];
            if (method) return method(this, param);
            else return $(this).treegrid(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_treegrid');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_treegrid', { options: $.extend({}, $.fn.treegrid.defaults, $.fn.uc_treegrid.defaults, $.fn.treegrid.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_treegrid.defaults = {};

    $.fn.uc_treegrid.methods = {};

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_uploadify') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_uploadify';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_uploadify').options;
        var span = $('<span class="dh-uploadify"></span>');
        $(target).after(span);
        var input = $('<input id="shit" type="file" ></input>').appendTo(span);
        $(target).removeClass('easyui-uc_uploadify').addClass('easyui-uc_uploadify');

        $("#shit").uploadify({
            'swf': './uploadify/uploadify.swf',
            'uploader': '/utilis/Utilis/UploadHandler',
            'auto': true,
            'onUploadSuccess': function (file, data, resp) {
                console.log(data);
            }
        });
        $.data(target, 'uc_uploadify').input = input;
        $.data(target, 'uc_uploadify').span = span;
        resize(target);
    }

    function resize(target, width) {
        var opts = $.data(target, 'uc_uploadify').options;
        var span = $.data(target, 'uc_uploadify').span;
        var input = $.data(target, 'uc_uploadify').input;
        if (width) {
            opts.width = width;
        }
        if (!opts.width) {
            opts.width = $(target).outerWidth();
        }
        if (!opts.height) {
            opts.height = $(target).outerHeight();
        }
        span.outerHeight(opts.height).outerWidth(opts.width);
        input.outerHeight(opts.height).outerWidth(opts.width);
    }

    function loadData(target, data) {
        var opts = $.data(target, 'uc_uploadify').options;
        var select = $.data(target, 'uc_uploadify').select;
        opts.data = data;
        select.empty();
        if (data.length) {
            $.each(data, function (idx, val) {
                select.append('<option value="' + val[opts.valueField] + '">' + val[opts.textField] + '</option>');
            });
        }
        setValue(target);
    }

    function getData(target) {
        var data = $.data(target, 'uc_uploadify').options.data;
        if (!data)
            data = [];
        return data;
    }

    function setValue(target, val) {
        var opts = $.data(target, 'uc_uploadify').options;
        var select = $.data(target, 'uc_uploadify').select;
        if (val === undefined || val === null)
            val = $(target).val();
        $(target).val(val);
        select.val(val.split(opts.splitter));
    }

    function getValue(target) {
        var opts = $.data(target, 'uc_uploadify').options;
        var select = $.data(target, 'uc_uploadify').select;
        var valArr = select.val();
        var value;
        if (valArr) {
            value = valArr.join(opts.splitter);
        }
        $(target).val(value);
        return value;
    }

    function removeValue(target, val) {
        var opts = $.data(target, 'uc_uploadify').options;
        var data = opts.data;
        $(target).val(val);
        select.val(val.split(opts.splitter));

    }

    function addRows(target, rows) {
        var opts = $.data(target, 'uc_uploadify').options;
        var data = opts.data;
        if (!rows) return;
        if (!data) data = [];
        $.each(rows, function (idx, row) {
            data.push(row);
        });
        loadData(target, data);
    }

    function removeRows(target, rows, isValueType) {
        var opts = $.data(target, 'uc_uploadify').options;
        var data = opts.data;
        if (!rows) return;
        if (!data) return;
        var valArr = [];
        if (isValueType) {
            for (var i = 0; i < rows.length; ++i)
                valArr.push(rows[i][opts.valueField]);
        }
        for (var i = 0; i < data.length; ++i) {
            if (isValueType) {
                if ($.inArray(data[i][opts.valueField], valArr) > -1) {
                    data.splice(i, 1);
                    --i;
                }

            } else {
                if ($.inArray(data[i], rows) > -1) {
                    data.splice(i, 1);
                    --i;
                }
            }
        }
        /*$.each(data, function (idx, row) {
        if ($.inArray(row, rows) > -1)
        data.splice(idx, 1);
        });
        */
        loadData(target, data);
    }

    function removeValRows(target, rows) {
        removeRows(target, rows, true);
    }

    function getSelRows(target, isCopy) {
        var opts = $.data(target, 'uc_uploadify').options;
        var data = opts.data;
        var value = getValue(target);
        if (value === undefined || value === null) return value;
        var valArr = value.split(opts.splitter);
        var rows = [];
        $.each(data, function (idx, val) {
            if ($.inArray(val[opts.valueField].toString(), valArr) > -1) {
                if (isCopy)
                    rows.push($.extend({}, val));
                else
                    rows.push(val);
            }
        });
        return rows;
    }

    function removeSelRows(target) {
        var rows = getSelRows(target);
        removeRows(target, rows);
    }

    function reload(target, url) {
        com.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                loadData(target, data);
            }
        });
    }

    $.fn.uc_uploadify = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_uploadify.methods[options];
            if (method) return method(this, param);
            else return $(this).combo(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_uploadify');
            if (state) $.extend(state.options, options);

            else $.data(this, 'uc_uploadify', { options: $.extend({}, $.fn.uc_uploadify.defaults, $.fn.uc_uploadify.parseOptions(this), options) });

            create(this);
        });
    };
    $.fn.uc_uploadify.parseOptions = function (target) {
        var opts = $.extend({}, $.parser.parseOptions(target, ["valueField", "textField", "width", "height", "data"]));
        return opts;
    };


    $.fn.uc_uploadify.defaults = {
        splitter: ',',
        height: 22,
        onDbClick: function (target, selRows) {

        }
    };

    $.fn.uc_uploadify.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_uploadify').options;
        },
        setValue: function (jq, value) {
            setValue(jq[0], value);
        },
        getValue: function (jq) {
            return getValue(jq[0]);
        },
        getData: function (jq) {
            return getData(jq[0]);
        },
        reload: function (jq, url) {
            reload(jq[0], url);
        },
        loadData: function (jq, data) {
            loadData(jq[0], data);
        }, addRows: function (jq, rows) {
            addRows(jq[0], rows);
        }, removeRows: function (jq, rows) {
            removeRows(jq[0], rows);
        }, removeValRows: function (jq, rows) {
            removeValRows(jq[0], rows);
        }, getSelRows: function (jq, isCopy) {
            return getSelRows(jq[0], isCopy);
        }, removeSelRows: function (jq) {
            removeSelRows(jq[0]);
        }
    };

})(jQuery);(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_validatebox') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_validatebox';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_validatebox').options;
        $(target).validatebox(opts);

    }

    $.fn.uc_validatebox = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_validatebox.methods[options];
            if (method) return method(this, param);
            else return $(this).validatebox(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_validatebox');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_validatebox', { options: $.extend({}, $.fn.validatebox.defaults, $.fn.uc_validatebox.defaults, $.fn.validatebox.parseOptions(this), options) });

            create(this);
            //-- �� 960 grid ���� �ٷֱ�ָ������ʱ��validatetextbox ��Ϊ���� border ��ʵ�ʿ��Ȼ��ȸ������ȳ��� 2px 
            if ($(this).width()) {
                $(this).width($(this).width() - 4);
            }
        });
    }

    $.fn.uc_validatebox.defaults = {};

    $.fn.uc_validatebox.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_validatebox').options;
        }
    };

})(jQuery);(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_window') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_window';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_window').options;
        $(target).window(opts);
    }

    $.fn.uc_window = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_window.methods[options];
            if (method) return method(this, param);
            else return $(this).window(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_window');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_window', { options: $.extend({}, $.fn.window.defaults, $.fn.uc_window.defaults, $.fn.window.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_window.defaults = {
        onBeforeOpen: function () {
            var mask = $.data(this, 'window').mask;
            $(mask).height(document.body.scrollHeight);
        }
    };

    $.fn.uc_window.methods = {};

})(jQuery)
