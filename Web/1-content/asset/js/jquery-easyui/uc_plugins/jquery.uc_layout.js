(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_layout') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_layout';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_layout').options;
        $(target).layout(opts);
    }

    $.fn.uc_layout = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_layout.methods[options];
            if (method) return method(this, param);
            else return $(this).layout(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_layout');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_layout', { options: $.extend({}, $.fn.layout.defaults, $.fn.uc_layout.defaults, $.fn.layout.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_layout.defaults = {};

    $.fn.uc_layout.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_layout').options;
        }
    };

})(jQuery)
