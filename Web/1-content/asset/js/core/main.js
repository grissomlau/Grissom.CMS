$(function () {

    if ($("#mainHeader")[0]) {
        $('#mainContainer').height($('body').height() - $("#mainHeader")[0].scrollHeight);
    }
    $(".easyui-uc_layout").uc_layout('resize');
    //    $("#__content").layout('expand', 'center');
    $(window).resize(function () {

        if ($("#mainHeader")[0]) {
            $('#mainContainer').height($('body').height() - $("#mainHeader")[0].scrollHeight);
        }
        $(".easyui-uc_layout").uc_layout('resize');
    });

    window.showMsg = function (icon, msg) {
        com.showInPageTop(icon, msg);
    }

    // 头部工具栏
    var headerToolTimeout = undefined;
    $('.header-tool>div').hover(
        function () {
            clearTimeout(headerToolTimeout);
            $(this).parent().find('.header-tool-content').removeClass('onHover');
            $(this).find('.header-tool-content').addClass('onHover');
        },
        function () {
            var me = this;
            headerToolTimeout = setTimeout(function () {
                $(me).find('.header-tool-content').removeClass('onHover');
            }, 300);
        }
    );

    ///**
    //* backToTop1
    //*/
    //var div = $('div.panel-body:first');
    //if (div[0].scrollHeight > div.height()) {
    //    $("#backToTop1").show(200, function () {
    //        $("#backToTop1").css({
    //            top: div.height() - div.height() / 2
    //        });
    //    });
    //}
    //$(div).scroll(function () {               //滚动时触发
    //    var top = div.scrollTop(),       //获取滚动条到顶部的垂直高度
    //        height = div.height();         //获得可视浏览器的高度
    //    if (top > 100) {
    //        $("#backToTop1").show(200, function () {
    //            $("#backToTop1").css({
    //                top: height - div.height() / 2
    //            });
    //        });
    //    }
    //});
    ///*点击回到顶部*/
    //$('#backToTop-up').click(function () {
    //    div.animate({
    //        scrollTop: 0
    //    }, 500);
    //    /*
    //    $('html, body').animate({
    //    scrollTop: 0
    //    }, 0);

    //    */
    //});
    ///*点击到底部*/
    //$('#backToTop-down').click(function () {
    //    var height = div.height() > div[0].scrollHeight ? div.height() : div[0].scrollHeight;
    //    div.animate({
    //        scrollTop: height
    //    }, 500);
    //    /* $('html, body').animate({
    //    scrollTop: $(document).height()
    //    }, 500);
    //    */
    //});
});

//<![CDATA[
__resizeLayout = function () {
    setTimeout(function () {
        var h = $("#toolbar").parent().height() - $('#toolbar').outerHeight() - $('#searchbar').outerHeight();

        $("#__content").height(h);
        //$("#__searchbar").panel('resize', { height: $("#__searchbar .dh-form").height() + 40 });
        //$("#datagrid").layout('resize', { height: h });
        $("div.easyui-uc_layout").layout('resize', {});

        $("table[data-bind]").datagrid("resize");
    }, 200);
};
$(window).resize(function () {
    __resizeLayout();
});
$(function () {
    $.parser.onComplete = function () {
        __resizeLayout();
    }
    if (window.onPageInit) {
        window.onPageInit();
    }
})