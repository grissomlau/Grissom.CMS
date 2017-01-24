(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_searchbox') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_searchbox';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_searchbox').options;
        $(target).searchbox(opts);
        var height = $($.data(target).searchbox.searchbox).find('input:first').height();
        $($.data(target).searchbox.searchbox).find('span').css('height', height +2);
        $($.data(target).searchbox.searchbox).css('height', height + 2);
    }

    $.fn.uc_searchbox = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_searchbox.methods[options];
            if (method) return method(this, param);
            else return $(this).searchbox(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_searchbox');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_searchbox', { options: $.extend({}, $.fn.searchbox.defaults, $.fn.uc_searchbox.defaults, $.fn.searchbox.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_searchbox.defaults = {
    };

    $.fn.uc_searchbox.methods = {};

})(jQuery)
