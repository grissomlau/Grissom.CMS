(function ($) {
    (function () {
        var my97Plugin = 'my97';
        var my97Index = $.inArray($.parser.plugins, my97Plugin);
        if (my97Index < 0) {
            $.parser.plugins[$.parser.plugins.length] = my97Plugin;
        }
    })();

    function init(target) {
        $(target).addClass("my97-text");
        var wrap = $("<span class='my97-wrap'></span>").insertBefore(target);
        wrap[0].appendChild(target);
        var arrow = $("<span class='my97-arrow'></span>").insertAfter(target);
        return wrap;
    }

    function bindEvents(target) {
        var state = $.data(target, 'my97');
        var opts = state.options;
        var wrap = state.my97;
        var input = wrap.find(".my97-text");
        var arrow = wrap.find(".my97-arrow");

        input.unbind(".my97");
        arrow.unbind(".my97");
        if (!opts.disabled) {
            input.bind("click.my97", function () { WdatePicker(opts) });
            arrow.bind("click.my97", function () {
                WdatePicker($.extend({}, opts, { el: opts.id }));
            }).bind('mouseenter.my97', function () {
                $(this).addClass("my97-arrow-hover");
            }).bind('mouseout.my97', function () {
                $(this).removeClass("my97-arrow-hover");
            });
        }
    }

    function destroy(target) {
        var input = $.data(target, "my97").my97.find("my97-text");
        input.validatebox("destroy");
        $.data(target, "my97").my97.remove();
        $(target).remove();
    }

    function validate(target, doit) {
        var opts = $.data(target, "my97").options;
        var input = $.data(target, "my97").my97.find("input.my97-text");
        input.validatebox(opts);
        if (doit) {
            input.validatebox("validate");
        }
    }

    function initValue(target) {
        var opts = $.data(target, "my97").options;
        var input = $(target).find("input.my97-text");
        input.val(opts.value);
    }

    function setDisabled(target) {

    }

    function setWidth(target, width) {
        var opts = $.data(target, "my97").options;
        opts.width = width;
        $(target).width(width);
    }

    function setValue(target, value) {
        $(target).val(value);
    }

    function getValue(target) {
        return $(target).val();
    }

    function setId(target) {
        var pre = "_easyui_my97_id_";
        var opts = $.data(target, "my97").options;
        opts.id = pre + $.fn.my97.detauls.count;
        $(target).attr("id", opts.id);
        $.fn.my97.defaults.count++;
    }

    $.fn.my97 = function (options, param) {
        if (typeof options === "string") {
            $.fn.my97.methods[options](this, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, "my97");
            var opts;
            if (state) {
                opts = $.extend(state.options, options);
            } else {
                opts = $.extend({}, $.fn.my97.defaults, $.fn.my97.parseOptions(this), options);
                var wrap = init(this);
                $.data(this, "my97", {
                    my97: wrap,
                    options: opts
                });
            }
            if (!opts.id) setId(this);
            setWidth(this, options);
            bindEvents(this);
            validate(this);
            initValue(this);
        });

    }

    $.fn.my97.methods = {
        options: function (jq, param) {
            return $.data(jq[0], "my97").options;
        },
        destroy: function (jq, param) {
            jq.each(function () {
                destroy(this);
            });
        },
        setWidth: function (jq, param) {
            jq.each(function () {
                setWidth(this, param);
            });
        },
        setValue: function (jq, param) {
            jq.each(function () {
                setValue(this, param);
            });
        },
        getValue: function (jq, param) {
            return getValue(jq[0]);
        }
    };

    $.fn.my97.parseOptions = function (target) {
        var t = $(target);
        return $.extend({}, $.fn.validatebox.parseOptions(target), $.parser.parseOptions(target, ["width", "height", "weekMethod", "lang", "skin", "dateFmt", "realDateFmt", 'realTimeFmt', 'realFullFmt', 'minDate', 'maxDate', 'startDate',
            {
                doubleCalendar: "boolean",
                enableKeyboard: "boolean",
                enableInputMask: "boolean",
                isShowWeek: "boolean",
                highLineWeekDay: "boolean",
                isShowClear: "boolean",
                isShowOthers: "boolean",
                readOnly: "boolean",
                qsEnabled: "boolean",
                autoShowQS: "boolean",
                opposite: "boolean"
            }, {
                firstDayOfWeek: "number",
                errDealMode: "number"
            }]),
            {
                value: (t.val() || undefined),
                disabled: (t.attr("disabled") ? true : undefined),
                id: (t.attr("id") || undefined)
            });
    };
    $.fn.my97.defaults = {
        id: null,
        count: 0,
        value: '',
        width: 109,
        height: 22,
        disabled: false,
        doubleCalendar: false,
        enableKeyboard: true,
        enableInputMask: true,
        weekMethod: 'ISO8601',
        position: {},
        lang: 'auto',
        skin: 'default',
        dateFmt: 'yyyy-MM-dd',
        realDateFmt: 'yyyy-MM-dd',
        realTimeFmt: 'HH:mm:ss',
        realFullFmt: '%Date %Time',
        minDate: '1900-01-01 00:00:00',
        maxDate: '2099-12-31 23:59:59',
        startDate: '',
        firstDayOfWeek: 0,
        isShowWeek: false,
        highLineWeekDay: true,
        isShowClear: true,
        isShowOthers: true,
        readOnly: false,
        errDealMode: 0,
        qsEnabled: true,
        autoShowQS: false,
        opposite: false,
        quickSel: [],
        disabledDays: null,
        disabledDates: null,
        specialDates: null,
        specialDays: null,
        onpicking: function () {
        },
        onpicked: function () {
        },
        onclearing: function () {
        },
        oncleared: function () {
        }
    };

})(jQuery);