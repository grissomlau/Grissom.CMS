(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_linkbutton') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_linkbutton';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_linkbutton').options;
        $(target).linkbutton(opts);
    }

    $.fn.uc_linkbutton = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_linkbutton.methods[options];
            if (method) return method(this, param);
            else return $(this).linkbutton(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_linkbutton');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_linkbutton', { options: $.extend({}, $.fn.linkbutton.defaults, $.fn.uc_linkbutton.defaults, $.fn.linkbutton.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_linkbutton.defaults = {};

    $.fn.uc_linkbutton.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_linkbutton').options;
        }
    };

})(jQuery)
