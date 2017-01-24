
var viewModel = function (data) {
    var me = this;
    com.viewModel.common.apply(this, arguments);

    me.message = ko.observable();

    var username = Utils.getCookie("username");
    if (username) {
        me.form.username(username);
    }

    me.signin = function () {
        if (!$(".dh-form").form("validate")) {
            me.message("请输入必输项！");
            return;
        }
        com.ajax({
            type: 'POST',
            url: '/oauth2/token',
            data: {
                username: me.form.username(),
                password: me.form.password(),
                grant_type: 'password'
            },
            success: function (resp) {
                if (resp.access_token) {
                    console.log("token: " + resp.access_token);
                    Utils.setCookie("token", resp.access_token);
                    window.location = "../../../home/index.html";
                }
            },
            failure: function (resp) {
                com.message("error", "登录失败: 用户名或密码错误");
            },
            error: function (resp) {
                com.message("error", "登录失败: 用户名或密码错误");
            }
        });
    };

}

$(function () {
    $('#txtAccount').focus();
    window.onkeydown = function (key) {
        if (key.keyCode == 13) {
            window.signin();
        }
    }
});