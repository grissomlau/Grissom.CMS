(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_dialog') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_dialog';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_dialog').options;
        $(target).dialog(opts);
    }

    $.fn.uc_dialog = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_dialog.methods[options];
            if (method) return method(this, param);
            else return $(this).dialog(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_dialog');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_dialog', { options: $.extend({}, $.fn.dialog.defaults, $.fn.uc_dialog.defaults, $.fn.dialog.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_dialog.defaults = {};

    $.fn.uc_dialog.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_dialog').options;
        }
    };

})(jQuery)
