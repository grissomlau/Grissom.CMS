(function () {
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
