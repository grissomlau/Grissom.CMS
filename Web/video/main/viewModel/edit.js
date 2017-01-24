var viewModel = function (data) {
    com.viewModel.edit.apply(this, arguments);
};

(function () {
    com.ajax({
        type: "GET",
        url: "/video/main/editConfig?values=" + Utils.getUrlParam("Id") + "&pointGroup=edit",
        success: function (data) {
            viewModel.call(window, data);
            window.init();
            ko.bindingViewModel();
        }
    })
})();