(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_combo') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_combo';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_combo').options;
        if (opts.width == 'auto')
            opts.width = undefined;// 默认 width='auto' 在新的 chrome 43 会导致宽度为0, 在 default 中设置有时还是 auto 
        $(target).combo(opts);

        $(target).combo('resize');
        $(target).find('.combo-text').bind('mousedown.combo', function (e) {
        });
    }

    $.fn.uc_combo = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_combo.methods[options];
            if (method) return method(this, param);
            else return $(this).combo(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_combo');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_combo', { options: $.extend({}, $.fn.combo.defaults, $.fn.uc_combo.defaults, $.fn.combo.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_combo.defaults = {};

    $.fn.uc_combo.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_combo').options;
        }
    };

})(jQuery)
