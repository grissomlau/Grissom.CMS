(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_menubutton') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_menubutton';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_menubutton').options;
        $(target).menubutton(opts);
    }

    $.fn.uc_menubutton = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_menubutton.methods[options];
            if (method) return method(this, param);
            else return $(this).menubutton(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_menubutton');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_menubutton', { options: $.extend({}, $.fn.menubutton.defaults, $.fn.uc_menubutton.defaults, $.fn.menubutton.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_menubutton.defaults = {};

    $.fn.uc_menubutton.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_menubutton').options;
        }
    };

})(jQuery)
