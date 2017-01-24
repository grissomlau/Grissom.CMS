(function () {
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
