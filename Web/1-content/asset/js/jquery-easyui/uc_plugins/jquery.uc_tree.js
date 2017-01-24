(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_tree') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_tree';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_tree').options;
        $(target).tree(opts);
    }

    $.fn.uc_tree = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_tree.methods[options];
            if (method) return method(this, param);
            else return $(this).tree(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_tree');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_tree', { options: $.extend({}, $.fn.tree.defaults, $.fn.uc_tree.defaults, $.fn.tree.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_tree.defaults = {};

    $.fn.uc_tree.methods = {};

})(jQuery)
