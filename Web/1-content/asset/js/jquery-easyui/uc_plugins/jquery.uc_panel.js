(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_panel') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_panel';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_panel').options;
        $(target).panel(opts);
    }

    $.fn.uc_panel = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_panel.methods[options];
            if (method) return method(this, param);
            else return $(this).panel(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_panel');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_panel', { options: $.extend({}, $.fn.panel.defaults, $.fn.uc_panel.defaults, $.fn.panel.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_panel.defaults = {};

    $.fn.uc_panel.methods = {
     
    };

})(jQuery)
