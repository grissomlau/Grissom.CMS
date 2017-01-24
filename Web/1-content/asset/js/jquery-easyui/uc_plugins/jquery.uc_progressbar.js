(function () {
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
