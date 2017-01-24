(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_messager') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_messager';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_messager').options;
        $(target).messager(opts);
    }

    $.fn.uc_messager = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_messager.methods[options];
            if (method) return method(this, param);
            else return $(this).messager(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_messager');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_messager', { options: $.extend({}, $.fn.messager.defaults, $.fn.uc_messager.defaults, $.fn.messager.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_messager.defaults = {};

    $.fn.uc_messager.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_messager').options;
        }
    };

})(jQuery)
