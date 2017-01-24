(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_combobox_m') < 0) {
            $.parser.plugins[$.parser.plugins.length] = 'uc_combobox_m';
        }
    })();

    function create(target) {
        var opts = $.data(target, 'uc_combobox_m').options;
        $(target).combobox(opts);
        $($.data(target).combo.combo).find('span:eq(1)').css('height', '100%');
        $(target).combo('resize');

        $(target).parent().find('.combo-text').bind('keydown.combo', function (e) {
            switch (e.keyCode) {
                case 40: //down
                    $(target).combobox('showPanel');
                    break;
            }
        });

    }

    function findDataItem(data, valueField, value) {
        for (var i = 0; i < data.length; ++i) {
            if (data[i][valueField] == value) return data[i];
        }
    }

    $.fn.uc_combobox_m = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_combobox_m.methods[options];
            if (method) return method(this, param);
            else return $(this).combobox(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_combobox_m');
            if (state) $.extend(state.options, options);
            else {
                var curOpts = {};
                //-- ·ÀÖ¹ onShowPanel ±»¸²¸Ç£»
                $.extend(curOpts, $.fn.combobox.parseOptions(this), options);
                if (typeof curOpts.onShowPanel === 'function') {
                    var func = curOpts.onShowPanel;
                    curOpts.onShowPanel = function () {
                        func.apply(this,arguments);
                        $.fn.uc_combobox_m.defaults.onShowPanel.apply(this,arguments);
                    }
                }

                $.data(this, 'uc_combobox_m', { options: $.extend({}, $.fn.combobox.defaults, $.fn.uc_combobox_m.defaults, curOpts) });
            }
            create(this);
        });
    }

    $.fn.uc_combobox_m.methods = {
        loadData: function (jq, data) {
            $(jq[0]).combobox('panel').resize({ panelWidth: 50 });
            return $.fn.combobox.methods.loadData(jq, data);
        }
    };

    $.fn.uc_combobox_m.defaults = {
        onHidePanel: function () {
            var target = $(this)[0];
            var opts = $.data(target, 'uc_combobox_m').options;
            if (opts.check === true) {
                var data = $.data(target, 'combobox').data;
                var values = $(target).uc_combobox_m('getValues');
                for (var i = 0; i < values.length; ++i) {
                    var item = findDataItem(data, opts.valueField, values[i]);
                    if (!item) {
                        $(target).uc_combobox_m('setValues', []);
                        break;
                    }
                }
            }
        },
        onShowPanel: function () {
            var data = $(this).combobox('getData');
            $(this).combobox('panel').height(24 * data.length + 20);
        },
        multiple: true,
        check: true
    };
})(jQuery)