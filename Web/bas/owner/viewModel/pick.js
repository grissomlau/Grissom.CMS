
var viewModel = function (data) {
    com.viewModel.search.apply(this, arguments);
    var me = this;
    me._close = function () {
        parent._closePickOwnerWin();
    }
    me.grid.onDblClickRow = function () {
        var row = me.grid.datagrid("getSelected");
        parent._okPickOwnerWin(row);
    }
}

var __pageSetting = {
    modalWidth: 650,
    modalHeight: 500,
    title: '拥有者'
};
(function () {
    com.ajax({
        type: "GET",
        url: "/bas/owner/gridConfig?pointGroup=pick",
        success: function (data) {
            viewModel.call(window, data);
            window.init();
            ko.bindingViewModel();
        }
    })
})();
