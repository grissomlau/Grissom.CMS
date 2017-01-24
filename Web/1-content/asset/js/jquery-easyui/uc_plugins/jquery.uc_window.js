(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_window') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_window';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_window').options;
        $(target).window(opts);
    }

    $.fn.uc_window = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_window.methods[options];
            if (method) return method(this, param);
            else return $(this).window(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_window');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_window', { options: $.extend({}, $.fn.window.defaults, $.fn.uc_window.defaults, $.fn.window.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_window.defaults = {
        onBeforeOpen: function () {
            var mask = $.data(this, 'window').mask;
            $(mask).height(document.body.scrollHeight);
        }
    };

    $.fn.uc_window.methods = {};

})(jQuery)
