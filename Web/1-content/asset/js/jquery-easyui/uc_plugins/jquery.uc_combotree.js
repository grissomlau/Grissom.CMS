(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_combotree') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_combotree';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_combotree').options;
        $(target).combotree(opts);

        setTimeout(function () {
            $(target).parent().find('.combo-text').bind('keydown.combo', function (e) {
                switch (e.keyCode) {
                    case 40: //down
                        $(target).combobox('showPanel');
                        break;
                }
            });
        }, 500);
    }

    $.fn.uc_combotree = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_combotree.methods[options];
            if (method) return method(this, param);
            else return $(this).combotree(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_combotree');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_combotree', { options: $.extend({}, $.fn.combotree.defaults, $.fn.uc_combotree.defaults, $.fn.combotree.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_combotree.defaults = {};

    $.fn.uc_combotree.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_combotree').options;
        }
    };

})(jQuery)
