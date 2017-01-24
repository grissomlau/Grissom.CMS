(function () {
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


})(jQuery);