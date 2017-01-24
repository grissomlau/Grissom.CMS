(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_textbox') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_textbox';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_textbox').options;
        $(target).textbox(opts);

    }

    $.fn.uc_textbox = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_textbox.methods[options];
            if (method) return method(this, param);
            else return $(this).textbox(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_textbox');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_textbox', { options: $.extend({}, $.fn.textbox.defaults, $.fn.uc_textbox.defaults, $.fn.textbox.parseOptions(this), options) });

            create(this);
          
        });
    };


    $.fn.uc_textbox.defaults = {};

    $.fn.uc_textbox.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_textbox').options;
        }
    };

})(jQuery)