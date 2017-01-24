(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_menu') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_menu';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_menu').options;
        $(target).menu(opts);
    }

    $.fn.uc_menu = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_menu.methods[options];
            if (method) return method(this, param);
            else return $(this).menu(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_menu');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_menu', { options: $.extend({}, $.fn.menu.defaults, $.fn.uc_menu.defaults, $.fn.menu.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_menu.defaults = {};

    $.fn.uc_menu.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_menu').options;
        }
    };

})(jQuery)
