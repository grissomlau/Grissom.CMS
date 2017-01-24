(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_datagrid') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_datagrid';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_datagrid').options;
        $(target).datagrid(opts);
    }

    $.fn.uc_datagrid = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_datagrid.methods[options];
            if (method) return method(this, param);
            else return $(this).datagrid(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_datagrid');
            var newOpts;
            if (state) newOpts = $.extend(state.options, options);
            else {
                newOpts = $.extend({}, $.fn.datagrid.defaults, $.fn.uc_datagrid.defaults, $.fn.datagrid.parseOptions(this), options);
                if (newOpts.columns && newOpts.allSortable) {
                    $.each(newOpts.columns[0], function (idx, col) {
                        // 显式指定不可排序 sortable = false, 否则是 sortable = undefined
                        if (col.sortable == false) {
                        } else {
                            col.sortable = true;
                        }
                    });
                }
            }
            $.data(this, 'uc_datagrid', { options: newOpts });

            create(this);
        });
    }

    $.fn.uc_datagrid.defaults = {
        allSortable: true
    };

    $.fn.uc_datagrid.methods = {
    };

})(jQuery)
