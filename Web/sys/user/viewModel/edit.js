var viewModel = function (data) {
    com.viewModel.edit.apply(this, arguments);
};

(function () {
    com.ajax({
        type: "GET",
        url: "/sys/user/editConfig?values=" + Utils.getUrlParam("Id") + "&pointGroup=edit",
        success: function (data) {
            data.setting = $.extend(data.setting, { disabledFieldsInEdit: ["Pwd"] });
            viewModel.call(window, data);
            window.init();
            ko.bindingViewModel();
        }
    })
})();