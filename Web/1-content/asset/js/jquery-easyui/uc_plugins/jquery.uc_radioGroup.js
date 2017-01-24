(function () {
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

})(jQuery)