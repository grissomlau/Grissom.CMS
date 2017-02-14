
var viewModel = function (data) {
    com.viewModel.search.apply(this, arguments);
}

var __pageSetting = {
    modalWidth: 800,
    modalHeight: 600,
    title: '角色'
};
(function () {
    com.ajax({
        type: "GET",
        url: "/sys/role/gridConfig",
        success: function (data) {
            viewModel.call(window, data);
            window.init();
            ko.bindingViewModel();
        }
    })
})();
