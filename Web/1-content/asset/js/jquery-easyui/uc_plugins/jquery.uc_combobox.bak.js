/**
* combobox - jQuery EasyUI
* 
* Licensed under the GPL:
*   http://www.gnu.org/licenses/gpl.txt
*
* Copyright 2010 stworthy [ stworthy@gmail.com ] 
* 
* Dependencies:
*   combo
* 
*/
(function ($) {
    (function () {
        var dr = 'uc_combobox';
        var drIndex = $.inArray($.parser.plugins, dr);
        if (drIndex < 0) {
            $.parser.plugins[$.parser.plugins.length] = dr;
        }
    })();
    /**
    * select previous item
    */
    function selectPrev(target) {
        var panel = $(target).combo('panel');
        var values = $(target).combo('getValues');
        var item = panel.find('div.combobox-item[value=' + values.pop() + ']');
        if (item.length) {
            var prev = item.prev(':visible');
            if (prev.length) {
                item = prev;
            }
        } else {
            item = panel.find('div.combobox-item:visible:last');
        }
        var value = item.attr('value');
        setValues(target, [value]);

        if (item.position().top <= 0) {
            var h = panel.scrollTop() + item.position().top;
            panel.scrollTop(h);
        } else if (item.position().top + item.outerHeight() > panel.height()) {
            var h = panel.scrollTop() + item.position().top + item.outerHeight() - panel.height();
            panel.scrollTop(h);
        }
    }

    /**
    * select next item
    */
    function selectNext(target) {
        var panel = $(target).combo('panel');
        var values = $(target).combo('getValues');
        var item = panel.find('div.combobox-item[value=' + values.pop() + ']');
        if (item.length) {
            var next = item.next(':visible');
            if (next.length) {
                item = next;
            }
        } else {
            item = panel.find('div.combobox-item:visible:first');
        }
        var value = item.attr('value');
        setValues(target, [value]);

        if (item.position().top <= 0) {
            var h = panel.scrollTop() + item.position().top;
            panel.scrollTop(h);
        } else if (item.position().top + item.outerHeight() > panel.height()) {
            var h = panel.scrollTop() + item.position().top + item.outerHeight() - panel.height();
            panel.scrollTop(h);
        }
    }

    function selectCurr(target) {
        var panel = $(target).combo('panel');
        var item = panel.find('div.combobox-item-selected');
        setValues(target, [item.attr('value')]);
        $(target).combo('hidePanel');
    }

    /**
    * select the specified value
    */
    function select(target, value) {
        var opts = $.data(target, 'uc_combobox').options;
        var data = $.data(target, 'uc_combobox').data;

        if (opts.multiple) {
            var values = $(target).combo('getValues');
            for (var i = 0; i < values.length; i++) {
                if (values[i] == value) return;
            }
            values.push(value);
            setValues(target, values);
        } else {
            setValues(target, [value]);
            $(target).combo('hidePanel');
        }

        for (var i = 0; i < data.length; i++) {
            if (data[i][opts.valueField] == value) {
                opts.onSelect.call(target, data[i]);
                return;
            }
        }
    }

    /**
    * unselect the specified value
    */
    function unselect(target, value) {
        var opts = $.data(target, 'uc_combobox').options;
        var data = $.data(target, 'uc_combobox').data;
        var values = $(target).combo('getValues');
        for (var i = 0; i < values.length; i++) {
            if (values[i] == value) {
                values.splice(i, 1);
                setValues(target, values);
                break;
            }
        }
        for (var i = 0; i < data.length; i++) {
            if (data[i][opts.valueField] == value) {
                opts.onUnselect.call(target, data[i]);
                return;
            }
        }
    }

    /**
    * set values
    */
    function setValues(target, values, remainText) {
        var opts = $.data(target, 'uc_combobox').options;
        var data = $.data(target, 'uc_combobox').data;
        var panel = $(target).combo('panel');

        panel.find('div.combobox-item-selected').removeClass('combobox-item-selected');
        var vv = [], ss = [];
        for (var i = 0; i < values.length; i++) {
            var v = values[i];
            var s = v;
            for (var j = 0; j < data.length; j++) {
                if (data[j][opts.valueField] == v) {
                    s = data[j][opts.textField];
                    break;
                }
            }
            vv.push(v);
            ss.push(s);
            panel.find('div.combobox-item[value=' + v + ']').addClass('combobox-item-selected');
        }

        $(target).combo('setValues', vv);
        if (!remainText) {
            $(target).combo('setText', ss.join(opts.separator));
        }
    }

    /**
    * set value
    */
    function setValue(target, value) {
        var opts = $.data(target, 'uc_combobox').options;
        var v = value;
        if (typeof value == 'object') {
            v = value[opts.valueField];
        }
        setValues(target, [v]);
    }

    function transformData(target) {
        var opts = $.data(target, 'uc_combobox').options;
        var data = [];
        $('>option', target).each(function () {
            var item = {};
            item[opts.valueField] = $(this).attr('value') || $(this).html();
            item[opts.textField] = $(this).html();
            item['selected'] = $(this).attr('selected');
            data.push(item);
        });
        return data;
    }

    /**
    * load data, the old list items will be removed.
    */
    function loadData(target, data) {
        var opts = $.data(target, 'uc_combobox').options;
        var panel = $(target).combo('panel');

        $.data(target, 'uc_combobox').data = data;

        var selected = [];
        panel.empty(); // clear old data
        for (var i = 0; i < data.length; i++) {
            var item = $('<div class="combobox-item"></div>').appendTo(panel);
            item.attr('value', data[i][opts.valueField]);
            item.html(data[i][opts.textField]);
            if (data[i]['selected']) {
                selected.push(data[i][opts.valueField]);
            }
        }
        if (opts.multiple) {
            setValues(target, selected);
        } else {
            if (selected.length) {
                setValues(target, [selected[0]]);
            } else {
                setValues(target, []);
            }
        }

        opts.onLoadSuccess.call(target, data);

        $('.combobox-item', panel).hover(
			function () { $(this).addClass('combobox-item-hover'); },
			function () { $(this).removeClass('combobox-item-hover'); }
		).click(function () {
		    var item = $(this);
		    if (opts.multiple) {
		        if (item.hasClass('combobox-item-selected')) {
		            unselect(target, item.attr('value'));
		        } else {
		            select(target, item.attr('value'));
		        }
		    } else {
		        select(target, item.attr('value'));
		    }
		});
    }

    /**
    * request remote data if the url property is setted.
    */
    function request(target, url) {
        var opts = $.data(target, 'uc_combobox').options;
        if (url) {
            opts.url = url;
        }
        if (!opts.url) return;

        $.ajax({
            url: opts.url,
            dataType: 'json',
            success: function (data) {
                loadData(target, data);
            },
            error: function () {
                opts.onLoadError.apply(this, arguments);
            }
        })
    }

    function filter(target, query) {
        $(target).combo('showPanel');
        var data = $.data(target, 'uc_combobox').data;
        var panel = $(target).combo('panel');
        setValues(target, [], true);
        panel.find('div.combobox-item').each(function () {
            var item = $(this);
            if (item.text().indexOf(query) == 0) {
                item.show();
                if (item.text() == query) {
                    item.addClass('combobox-item-selected');
                }
            } else {
                item.hide();
            }
        });
    }

    function create(target) {
        var opts = $.data(target, 'uc_combobox').options;
        $(target).combo(opts);
    }

    /**
    * parse options from markup.
    */
    function parseOptions(target) {
        var t = $(target);
        return $.extend({}, t.combo('parseOptions'), {
            valueField: t.attr('valueField'),
            textField: t.attr('textField'),
            url: t.attr('url')
        });
    }

    $.fn.uc_combobox = function (options, param) {
        if (typeof options == 'string') {
            var method = $.fn.uc_combobox.methods[options];
            if (method) {
                return method(this, param);
            } else {
                return this.combo(options, param);
            }
        }

        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_combobox');
            if (state) {
                $.extend(state.options, options);
                create(this);
            } else {
                state = $.data(this, 'uc_combobox', {
                    options: $.extend({}, $.fn.combo.defaults, $.fn.uc_combobox.defaults, parseOptions(this), options)
                });
                create(this);
                loadData(this, transformData(this));
            }
            if (state.options.data) {
                loadData(this, state.options.data);
            }
            request(this);
        });
    };


    $.fn.uc_combobox.methods = {
        parseOptions: function (jq) {
            return parseOptions(jq[0]);
        },
        options: function (jq) {
            return $.data(jq[0], 'uc_combobox').options;
        },
        getData: function (jq) {
            return $.data(jq[0], 'uc_combobox').data;
        },
        setValues: function (jq, values) {
            return jq.each(function () {
                setValues(this, values);
            });
        },
        setValue: function (jq, value) {
            return jq.each(function () {
                setValue(this, value);
            });
        },
        loadData: function (jq, data) {
            return jq.each(function () {
                loadData(this, data);
            });
        },
        reload: function (jq, url) {
            return jq.each(function () {
                request(this, url);
            });
        },
        select: function (jq, value) {
            return jq.each(function () {
                select(this, value);
            });
        },
        unselect: function (jq, value) {
            return jq.each(function () {
                unselect(this, value);
            });
        }
    };

    $.fn.uc_combobox.defaults = {
        valueField: 'value',
        textField: 'text',
        url: null,
        data: null,

        selectPrev: function () { selectPrev(this); },
        selectNext: function () { selectNext(this); },
        selectCurr: function () { selectCurr(this); },
        filter: function (query) { filter(this, query); },

        onLoadSuccess: function () { },
        onLoadError: function () { },
        onSelect: function (record) { },
        onUnselect: function (record) { }
    };
})(jQuery);