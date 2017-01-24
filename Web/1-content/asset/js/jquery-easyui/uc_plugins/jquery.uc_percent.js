(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_percent') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_percent';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_percent').options;
        $(target).uc_numberspinner(opts);
        var txt = $(target).uc_numberspinner('textbox');
        $(txt).css('text-align', 'right');
        $(txt).attr('placeholder', '%');
        $(target).spinner('resize');
    }

    $.fn.uc_percent = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_percent.methods[options];
            if (method) return method(this, param);
            else return $(this).numberspinner(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_percent');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_percent', { options: $.extend({}, $.fn.numberspinner.defaults, $.fn.uc_percent.defaults, $.fn.numberspinner.parseOptions(this), options) });

            create(this);
        });
    };

    $.fn.uc_percent.defaults = {
        precision: 2,
        groupSeparator: ',',
        decimalSeparator: '.',
        suffix: '%'
        //max: 100,
        //min: -100
    };

    $.fn.uc_percent.methods = {};

})(jQuery)
