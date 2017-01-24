(function () {
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
