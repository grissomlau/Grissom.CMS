(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_fuzzypaginbox') < 0) {
            $.parser.plugins[$.parser.plugins.length] = 'uc_fuzzypaginbox'
        }
    })();

    function create(target) {
        var opts = $.data(target, 'uc_fuzzypaginbox').options;
        $(target).combo($.extend({}, opts));
        var panel = $(target).combo('panel');
        var div = $('<div class="dh-fuzzy" style="overflow:auto;"><div id="_easyui_combobox_i1_0" class="combobox-item">admin</div><div id="_easyui_combobox_i1_1" class="combobox-item">oTVPpjkRtC0a3ys0a3eiGOD5oYlA</div><div id="_easyui_combobox_i1_2" class="combobox-item">oTVPpjsMVH2Mu_XmFwPx7uAdBAAY</div><div id="_easyui_combobox_i1_3" class="combobox-item">oTVPpjvISwqyyZ3fMH9DDvRPsfaA</div><div id="_easyui_combobox_i1_4" class="combobox-item">oTVPpjk4fhC1uWN8LzTqU858Y4KA</div><div id="_easyui_combobox_i1_5" class="combobox-item">oTVPpjvYAsoWFKpFcLl7rSYi-hiY</div><div id="_easyui_combobox_i1_6" class="combobox-item">oTVPpjtPBkkQ-Rr2vL0OLV3xAlgY</div><div id="_easyui_combobox_i1_7" class="combobox-item">oTVPpjmbC9Cdlz7TAII0oQyveAwU</div><div id="_easyui_combobox_i1_8" class="combobox-item">oTVPpjur_7tX_EBJ89Al5kKG3IF8</div><div id="_easyui_combobox_i1_9" class="combobox-item">oTVPpjg8_gy0JwDeWs7aRmEKn1n8</div></div>').appendTo(panel);
        opts.databox = div;

        var paginDiv = $("<div style='width:100%;line-height:20px;'><a style='float:right'>上一页</a><a style='float:right'>下一页</a></div>").appendTo(panel);
        opts.paginbox = paginDiv;

        $(div).unbind().bind("mouseover", function (e) {
            $(this).find("div.combobox-item-hover").removeClass("combobox-item-hover");
            $(e.target).closest("div.combobox-item").addClass("combobox-item-hover");
            e.stopPropagation();
        }).bind("mouseout", function (e) {
            $(e.target).find("div.combobox-item").removeClass("combobox-item-hover");
            e.stopPropagation();
        }).bind("click", function (e) {
            var item = $(e.target).closest("div.combobox-item");
            if (item.length == 0) return;
            var val = item.attr('value');
            $(target).combo("hidePanel");
            e.stopPropagation();
        });
    }
    function loaData(target, data, remainText) {
        var opts = $.data(target, 'uc_fuzzypaginbox').options;
        var value = $(target).textbox('getValue');
        $(opts.databox).empty();

        opts.data = data;
        $.each(data, function (idx, row) {
            var item = $("<div class='combobox-item'>" + row[opts.textField] + "</div>").appendTo(opts.databox);
            $(item).attr('value', row[opts.valueField]);
        });
    }

    function request(target, url, param, remainText) {
        var opts = $.data(target, 'uc_fuzzypaginbox').options;
        if (url) {
            opts.url = url;
        }
        param = param || {};

        opts.loader.call(target, param, function (data) {
            loaData(target, data, remainText);
        }, function () {
            console.log('error occur');
        });
    }

    $.fn.uc_fuzzypaginbox = function (options, param) {
        $.each(this, function (idx, elem) {
            $.data(this, 'uc_fuzzypaginbox', { options: options || {} });
            create(this);
            loaData(this)
        });
    }

    $.fn.uc_fuzzypaginbox.parseOptions = function (target) {
        return $.extend({}, $.fn.combo.parseOptions(target), $.parser);
    }

    $.fn.uc_fuzzypaginbox.defaults = {
        textField: 'text',
        valueField: 'value',
        url: null,
        method: 'GET',
        mode: 'remote',
        delay: 500,
        loader: function (param, success, error) {
            var opts = $(this).uc_fuzzypaginbox('options');
            if (!opts.url) return;
            $.ajax({
                type: opts.method,
                url: opts.url,
                data: param,
                dataType: 'json',
                success: function (data) {
                    success(data);
                },
                error: function () {
                    error.apply(this, arguments);
                }
            });
        }
    }

})();