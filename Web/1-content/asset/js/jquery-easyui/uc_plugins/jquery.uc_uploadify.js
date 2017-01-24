(function () {
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

})(jQuery)