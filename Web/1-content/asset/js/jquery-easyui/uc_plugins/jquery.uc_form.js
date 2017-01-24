(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_form') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_form';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_form').options;
        $(target).form(opts);
    }

    $.fn.uc_form = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_form.methods[options];
            if (method) return method(this, param);
            else return $(this).form(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_form');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_form', { options: $.extend({}, $.fn.form.defaults, $.fn.uc_form.defaults, $.fn.form.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_form.defaults = {};

    $.fn.uc_form.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_form').options;
        }
    };

})(jQuery)
