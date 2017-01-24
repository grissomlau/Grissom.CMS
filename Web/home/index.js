var viewModel = function (data) {
    com.viewModel.common.apply(this, arguments);
    var me = this;

    me._signout = function (form) {
        //com.showComfirm("comfirm", "Are you sure you want to sign out?", function (b) {
        //if (!b) return;
        Utils.setCookie("token", null);
        window.location.href = "/sys/user/signin.html";

        //com.ajax({
        //    type: "GET",
        //    url: "/sys/user/SignOut",
        //    success: function (retJson) {
        //        if (retJson && retJson.status === "success") {
        //            location.reload();
        //        } else {
        //            Utils.log(retJson);
        //        }
        //    }
        //});

        //});
    };

    return me;
};

var binding = function () {
    com.ajax({
        type: "GET",
        url: "/sys/user/menus",
        success: function (resp) {
            var data = {
                form: {},
                common: {
                    user: {
                        user_name: "admin"
                    },
                    menus: resp.Data
                }
            };
            var me = viewModel(data);
            me.init();
            ko.bindingViewModel();
        }
    });
};

$(function () {
    if (!window._hasInit) {
        window._hasInit = true;
        binding();
    }
})