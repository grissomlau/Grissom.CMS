(function () {
    (function () {
        var dr = 'uc_dateRange';
        var drIndex = $.inArray($.parser.plugins, dr);
        if (drIndex < 0) {
            $.parser.plugins[$.parser.plugins.length] = dr;
        }
    })();

    $.fn.uc_dateRange = function (options, param) {
        if (typeof options === "string") {
            return $.fn.uc_dateRange.methods[options](this, param);
        }

        return this.each(function () {
            var state = $.data(this, "uc_dateRange");
            options = options || {};
            if (state) {
                $.extend(state.options, options);
            } else {
                $.data(this, "uc_dateRange", {
                    options: $.extend({}, $.fn.uc_dateRange.defaults, $.fn.uc_dateRange.parseOptions(this), options)
                });
            }
            createBox(this);
        });
    }

    function resize(target, width) {
        $(target).combo('resize', width);
    }

    function createBox(target) {
        var state = $.data(target, 'uc_dateRange');
        var opts = state.options;

        $(target).combo($.extend({}, opts, {
            onShowPanel: function () {
                //state.calendar.calendar('resize');
                state.calendarFrom.calendar('resize');
                state.calendarTo.calendar('resize');
                // setValue(target, getValue(target));
                opts.onShowPanel.call(target);
            },
            onHidePanel: function () {
                // hide 时再触发一次 setValue， 以便按backspace 清空控件时，能及时更新值；
                setValue(target, getValue(target));
                // 因为值改了，同时也要触发了 onSelect 事件；
                opts.onSelect.call(target, dateFrom, dateTo);
            }
        }));
        $(target).combo('textbox').parent().addClass('datebox');
        var textbox = $(target).combo('textbox');

        // calendar 
        if (!state.calendarFrom) {
            createCalendarFrom();
        }
        if (!state.calendarTo) {
            createCalendarTo();
        }


        var dateFrom, dateTo;

        function createCalendarFrom() {
            var panel = $(target).combo("panel");
            state.calendarFrom = $("<div></div>").appendTo(panel).wrap("<div class='datebox-calendar-inner' style='width:180px; float:left; border-right:1px solid #95B8E7'></div>");
            state.calendarFrom.calendar({
                height: 180,
                border: false,
                onSelect: function (date) {
                    dateFrom = date;
                }
            });

            var button = $("<div class='datebox-button'></div>").appendTo(state.calendarFrom.parent());
            $("<a href='javascript:void(0)' class='datebox-current'></a>").html(opts.currentText).appendTo(button);
            //$("<a href='javascript:void(0)' class='datebox-close'></a>").html(opts.closeText).appendTo(button);
            button.find(".datebox-current,.datebox-close").hover(
                function () { $(this).addClass("datebox-button-hover"); },
                function () { $(this).removeClass("datebox-button-hover"); }
            );

            button.find(".datebox-current").click(function () {
                state.calendarFrom.calendar("moveTo", new Date());
                dateFrom = new Date();
            });
        }

        function createCalendarTo() {
            var panel = $(target).combo("panel");
            state.calendarTo = $("<div></div>").appendTo(panel).wrap("<div  class='datebox-calendar-inner' style='width:180px; float:left;margin-left:5px;border-left: 1px solid #95B8E7'></div>");
            state.calendarTo.calendar({
                height: 180,
                border: false,
                onSelect: function (date) {
                    dateTo = date;
                }
            });

            var button = $("<div class='datebox-button'></div>").appendTo(state.calendarTo.parent());
            $("<a href='javascript:void(0)' class='datebox-current'></a>").html(opts.currentText).appendTo(button);
            $("<a href='javascript:void(0)' class='datebox-ok'></a>").html(opts.okText).appendTo(button);
            $("<a href='javascript:void(0)' class='datebox-close'></a>").html(opts.closeText).appendTo(button);
            button.find(".datebox-current,.datebox-close,.datebox-ok").hover(
                function () { $(this).addClass("datebox-button-hover"); },
                function () { $(this).removeClass("datebox-button-hover"); }
            );

            button.find(".datebox-current").click(function () {
                state.calendarTo.calendar("moveTo", new Date());
                dateTo = new Date();
            });
            button.find(".datebox-close").click(function () {
                $(target).combo("hidePanel");
            });

            button.find(".datebox-ok").click(function () {
                dateFrom = dateFrom || state.dateFrom;
                dateTo = dateTo || state.dateTo;
                if (dateFrom && dateTo) {
                    var value = opts.formatter(dateFrom, dateTo);
                    setValue(target, value);
                    // hidePanel 有触发 onSelect 事件，以免重复，这里不再触发
                    //opts.onSelect.call(target, dateFrom, dateTo);
                    $(target).combo("hidePanel");
                }
            });

        }

        setValue(target, opts.value);
    }

    $.fn.uc_dateRange.defaults = $.extend({}, $.fn.combo.defaults, {
        panelWidth: 390,
        panelHeight: 205,
        keyHandler: {
            up: function () { },
            down: function () { },
            enter: function () { doEnter(this); },
            query: function (q) { doQuery(this, q); }
        },

        currentText: 'Today',
        closeText: 'Close',
        okText: 'Ok',

        formatter: function (dateFrom, dateTo) {
            var y = dateFrom.getFullYear();
            var m = dateFrom.getMonth() + 1;
            var d = dateFrom.getDate();
            var yto = dateTo.getFullYear();
            var mto = dateTo.getMonth() + 1;
            var dto = dateTo.getDate();
            return m + '/' + d + '/' + y + ' to ' + mto + '/' + dto + '/' + yto;

        },
        parser: function (s) {
            if (s) {
                var dateArr = s.split(' to ');
                var t1 = Date.parse(dateArr[0]);
                var t2 = Date.parse(dateArr[1]);
                if (!isNaN(t1) && !isNaN(t2)) {
                    return [new Date(t1), new Date(t2)];
                } else {

                    return [new Date(), new Date()];
                }
            } else {
                return [new Date(), new Date()];
            }
        },

        onSelect: function (dateFrom, dateTo) { }
    });
    $.fn.uc_dateRange.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_dateRange').options;
        },
        calendarFrom: function (jq) {	// get the calendar object
            return $.data(jq[0], 'uc_dateRange').calendarFrom;
        },
        calendarTo: function (jq) {
            return $.data(jq[0], 'uc_dateRange').calendarTo;
        },
        setValue: function (jq, value) {
            return jq.each(function () {
                setValue(this, value);
            });
        },
        getValue: function (jq) {
            return getValue(jq[0]);
        },
        resize: function (jq, width) {
            return resize(jq[0], width);
        }
    };

    $.fn.uc_dateRange.parseOptions = function (target) {
        var t = $(target);
        return $.extend({}, $.fn.combo.parseOptions(target), {
        });
    };


    /**
    * called when user inputs some value in text box
    */
    function doQuery(target, q) {
        setValue(target, q, true);
    }

    function bindEvents(target) {

    }

    /**
    * called when user press enter key
    */
    function doEnter(target) {
        return;
        var opts = $.data(target, 'uc_dateRange').options;
        var from = $.data(target, 'uc_dateRange').calendarFrom;
        var to = $.data(target, 'uc_dateRange').calendarTo;
        var value = opts.formatter(from, to);
        setValue(target, value);
        $(target).combo('hidePanel');
    }

    function setValue(target, value, notSetText) {
        var state = $.data(target, 'uc_dateRange');
        var opts = state.options;
        $(target).combo('setValue', value);
        if (!notSetText) {
            $(target).combo('setText', value);
        }
        var dateArr = opts.parser(value);
        state.dateFrom = dateArr[0];
        state.dateTo = dateArr[1];
        state.calendarFrom.calendar("moveTo", dateArr[0]);
        state.calendarTo.calendar('moveTo', dateArr[1]);
    }

    function getValue(target) {
        return $(target).combo("getValue");
    }
})(jQuery);