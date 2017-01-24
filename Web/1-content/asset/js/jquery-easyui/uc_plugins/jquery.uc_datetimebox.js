(function () {
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
