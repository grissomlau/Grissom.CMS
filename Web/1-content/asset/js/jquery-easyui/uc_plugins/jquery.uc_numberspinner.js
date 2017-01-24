(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_numberspinner') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_numberspinner';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_numberspinner').options;
        $(target).numberspinner(opts);
        $(target).css('text-align', 'right');
        var txt = $(target).uc_numberspinner('textbox');
        $(txt).css('text-align', 'right');
        $(target).spinner('resize');
    }


    $.fn.uc_numberspinner = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_numberspinner.methods[options];
            if (method) return method(this, param);
            else return $(this).numberspinner(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_numberspinner');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_numberspinner', { options: $.extend({}, $.fn.numberspinner.defaults, $.fn.uc_numberspinner.defaults, $.fn.numberspinner.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_numberspinner.defaults = {
        groupSeparator: ','
        /* onSpinUp: function () {
        console.log('spin up');
        },
        onSpinDown: function () {
        console.log('spin down');
        },
        
        onChange: function () {
        console.log('change');
        }
        */
    };

    $.fn.uc_numberspinner.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_numberspinner').options;
        }
    };

})(jQuery)
