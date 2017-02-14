
var viewModel = function (data) {
    com.viewModel.search.apply(this, arguments);
}

var __pageSetting = {
    modalWidth: 1000,
    modalHeight: 500,
    title: '菜单管理'
};
(function () {
    com.ajax({
        type: "GET",
        url: "/sys/menu/gridConfig",
        success: function (data) {
            viewModel.call(window, data);
            window.init();
            ko.bindingViewModel();
        }
    })
})();
