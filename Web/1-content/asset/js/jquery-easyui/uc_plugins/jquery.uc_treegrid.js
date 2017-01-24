(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_treegrid') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_treegrid';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_treegrid').options;
        $(target).treegrid(opts);
    }

    $.fn.uc_treegrid = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_treegrid.methods[options];
            if (method) return method(this, param);
            else return $(this).treegrid(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_treegrid');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_treegrid', { options: $.extend({}, $.fn.treegrid.defaults, $.fn.uc_treegrid.defaults, $.fn.treegrid.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_treegrid.defaults = {};

    $.fn.uc_treegrid.methods = {};

})(jQuery)
