(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_splitbutton') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_splitbutton';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_splitbutton').options;
        $(target).splitbutton(opts);
    }

    $.fn.uc_splitbutton = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_splitbutton.methods[options];
            if (method) return method(this, param);
            else return $(this).splitbutton(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_splitbutton');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_splitbutton', { options: $.extend({}, $.fn.splitbutton.defaults, $.fn.uc_splitbutton.defaults, $.fn.splitbutton.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_splitbutton.defaults = {};

    $.fn.uc_splitbutton.methods = {};

})(jQuery)
