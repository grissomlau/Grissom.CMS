(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_numberbox') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_numberbox';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_numberbox').options;
        $(target).numberbox(opts);
        $(target).css('text-align', 'right');
        var txt = $(target).numberbox('textbox');
        $(txt).css('text-align', 'right');
    }

    $.fn.uc_numberbox = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_numberbox.methods[options];
            if (method) return method(this, param);
            else return $(this).numberbox(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_numberbox');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_numberbox', { options: $.extend({}, $.fn.numberbox.defaults, $.fn.uc_numberbox.defaults, $.fn.numberbox.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_numberbox.defaults = {};

    $.fn.uc_numberbox.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_numberbox').options;
        }
    };

})(jQuery)
