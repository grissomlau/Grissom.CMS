(function () {
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

})(jQuery)