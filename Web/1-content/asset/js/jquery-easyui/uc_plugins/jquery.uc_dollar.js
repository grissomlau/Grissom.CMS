(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_dollar') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_dollar';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_dollar').options;
        if (opts.width == 'auto')
            opts.width = undefined;// 默认 width='auto' 在新的 chrome 43 会导致宽度为0, 在 default 中设置有时还是 auto 
        $(target).uc_numberspinner(opts);
        var txt = $(target).uc_numberspinner('textbox');
        $(txt).css('text-align', 'right');
        $(txt).attr('placeholder', '￥');
        $(target).spinner('resize');
    }

    $.fn.uc_dollar = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_dollar.methods[options];
            if (method) return method(this, param);
            else return $(this).numberspinner(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_dollar');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_dollar', { options: $.extend({}, $.fn.numberspinner.defaults, $.fn.uc_dollar.defaults, $.fn.numberspinner.parseOptions(this), options) });

            create(this);
        });
    };

    $.fn.uc_dollar.defaults = {
        precision: 2,
        groupSeparator: ',',
        decimalSeparator: '.',
        prefix: '￥'
    };

    $.fn.uc_dollar.methods = {};

})(jQuery)
