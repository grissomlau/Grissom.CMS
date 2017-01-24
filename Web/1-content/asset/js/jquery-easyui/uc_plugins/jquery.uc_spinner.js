(function () {
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

})(jQuery)