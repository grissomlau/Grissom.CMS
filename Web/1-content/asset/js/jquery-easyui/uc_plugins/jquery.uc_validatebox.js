(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_validatebox') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_validatebox';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_validatebox').options;
        $(target).validatebox(opts);

    }

    $.fn.uc_validatebox = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_validatebox.methods[options];
            if (method) return method(this, param);
            else return $(this).validatebox(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_validatebox');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_validatebox', { options: $.extend({}, $.fn.validatebox.defaults, $.fn.uc_validatebox.defaults, $.fn.validatebox.parseOptions(this), options) });

            create(this);
            //-- 在 960 grid 中用 百分比指定宽度时，validatetextbox 因为设了 border 的实际宽度会比父级宽度超出 2px 
            if ($(this).width()) {
                $(this).width($(this).width() - 4);
            }
        });
    }

    $.fn.uc_validatebox.defaults = {};

    $.fn.uc_validatebox.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_validatebox').options;
        }
    };

})(jQuery)