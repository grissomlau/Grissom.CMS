var com = com || {};
com.viewModel = com.viewModel || {};

com.viewModel.edit = function (data) {
    com.viewModel.common.apply(this, arguments);
    if (Object.prototype.toString.call(data) === '[object Arguments]')
        data = data[0];
    var me = this;
    me.statusArr = ['prepared', 'submitted', 'endorsed', 'approved'];

    //me.httpMethod = data.form ? "PUT" : "POST";
    //me.isEditing = me.httpMethod == "PUT";
    me.isEditing = data.form ? true : false;
    me.isEditing = data.isEditing == null ? me.isEditing : data.isEditing;


    //#region tools

    me._beforeSave = function () { return true; };
    me._actionSave = undefined;
    me._afterSave = undefined;
    me._save = function (target, callback, hiddenMsg, menuPoint) {
        if (!$(".dh-form").form("validate")) {
            //me.message('warn', me.resx.__input_required_field);
            me.message('warn', "有不合法的输入，请检查！");
            return false;
        }
        if (typeof (me._beforeSave) == 'function' && !me._beforeSave(target)) return;
        var postData = ko.toJS(me.form);
        delete postData.__ko_mapping__;
        if (me.isEditing) {
            postData = { master: { updated: [{ data: postData }] } };
        } else {
            postData = { master: { inserted: [{ data: postData }] } };
        }

        menuPoint = menuPoint || 'save';

        var toolData = target ? $(target).data("data") : me.__tools[menuPoint];
        var url = toolData ? toolData.Url : '';
        console.log(toolData);

        var post = { context: me, toolData: toolData, postData: postData, url: url };
        if (typeof (me._actionSave) == 'function' && !me._actionSave(post)) {
            return false;
        }

        var postDataLen = 0;
        for (var key in post.postData) {
            for (var pKey in post.postData[key]) {
                if (Object.prototype.toString.call(post.postData[key][pKey]) == '[object Array]')
                    postDataLen = post.postData[key][pKey].length + postDataLen;
            }

        }
        if (!postDataLen) {
            com.message('warn', resx.INFO_NOT_CHANGED);
            return false;
        }
        console.log(post);

        me._post(post, function (success, resp) {
            if (success) {
                if (!hiddenMsg) {
                    com.message("success", "保存成功!");
                }
                if (parent && parent._refresh) {
                    parent._refresh();
                }
            } else {
                if (!hiddenMsg) {
                    if (typeof resp === 'object') {
                        var msg = resp.Msg != undefined ? resx[resp.Msg] : resp.Msg;
                        var right = resp.right_msg != undefined ? resp.right_msg : "";
                        var left = resp.left_msg != undefined ? resp.left_msg : "";
                        com.message("failed", left + msg + ", " + right);

                    } else {
                        var Msg = post.msg_failed || '保存失败';
                        com.message("failed", me.resx[Msg] + " " + resp);
                    }
                }
            }
            if (callback) callback(success, resp);

            if (me._afterSave) {
                if (me._afterSave(success, resp)) {
                    me._close();
                }
            } else if (success) {
                me._close();
            }
        });

    };


    me._newVersion = function (target) {
        if (me._beforeNewVersion && !me._beforeNewVersion(target)) {
            return false;
        }
        me._save(target, function (success, resp) {
            if (success) {
                com.message("success", me.resx.__saveSuccess);;
            } else {
                com.handleResp(resp);
            }
            if (me._afterNewVersion && !me._afterNewVersion(success, resp)) {
                return false;
            }
        }, false, 'newVersion');
    }

    me._beforeSubmit = function (target) {
        return true;
    };
    me._actionSubmit = undefined;
    me._afterSubmit = undefined;
    me._successSubmit = function () {
        ko.mapping.fromJS({ status: 'submitted' }, me.form);
        me.loadTools([], true);
        //me._initStatus();
    };
    me._submit = function (target, onlySubmit, hideMsg) {
        if (typeof (me._beforeSubmit) == "function" && !me._beforeSubmit(target)) return;
        var submit = function () {
            var toolData = target ? $(target).data("data") : me.__tools["submit"];

            var url = '';
            if (me.keyField.split(',').length > 1) {
                url = toolData.Url + "?";
                var keys = me.keyField.split(',');
                for (var i = 0; i < keys.length; ++i) {
                    // no,version is the first two specify parameter for approve api
                    if (i == 0 && form[keys[i]] != undefined)
                        //url += keys[i] + "=" + form[keys[i]].apply();
                        url += "no=" + form[keys[i]].apply();
                    else if (i == 1 && form[keys[i]] != undefined)
                        //url += "&" + keys[i] + "=" + form[keys[i]].apply();
                        url += "&version=" + form[keys[i]].apply();
                    else if (form[keys[i]] != undefined)
                        url += "&" + keys[i] + "=" + form[keys[i]].apply();
                }
            } else {
                if (form[me.keyField] != undefined)
                    url = toolData.Url + form[me.keyField].apply();
                else
                    url = toolData.Url;
            }


            var post = { toolData: toolData, url: url, postData: {} };
            if (typeof (me._actionSubmit) == "function" && !me._actionSubmit(post)) return false;
            com.ajax({
                type: post.type || 'GET',
                url: post.url,
                data: (post.type == 'POST' ? ko.toJSON(post.postData) : undefined),
                success: function (resp) {
                    if (typeof resp === 'string' && Utils.isJson(resp)) {
                        resp = JSON.parse(resp);
                    }
                    var success = false;
                    if (resp === 1 || resp === true || resp.status === true) {
                        success = true;
                        if (!hideMsg)
                            com.message("success", "保存成功!");
                        //com.message("success", me.resx.__submitSuccess);
                        if (parent && parent._refresh) {
                            parent._refresh();
                        }
                        if (me._successSubmit) me._successSubmit();

                    } else {
                        com.handleResp(resp, '保存失败!');
                        //com.handleResp(resp, '__submitFailed');
                        //com.message("failed", me.resx.__submitFailed + " " + re);
                    }

                    if (me._afterSubmit) {
                        if (me._afterSubmit(success, resp)) {
                            me._close();
                        }
                    } else if (success) {
                        me._close();
                    }
                }
            });
        };
        if (onlySubmit) {
            submit();
        } else {
            // 先保存到 submit
            var pointCode = me.__tools['save'] ? 'save' : 'newVersion';
            me._save(null, function (success, resp) {
                if (success) {
                    submit();
                } else {
                    com.handleResp(resp);
                }
            }, true, pointCode);
        }
    };


    me._beforeApprove = function (target) {
        return true;
    };
    me._actionApprove = undefined;
    me._afterApprove = undefined;
    me._successApprove = function () {
        me.loadTools([], true);
    };
    me._approve = function (target) {
        if (me._beforeApprove && !me._beforeApprove(target)) {
            return false;
        }

        me.form.task_approval_value('2');
        me.form.task_is_completed(1);
        var master = ko.mapping.toJS(me.form);
        delete master.__ko_mapping__;
        var postData = { master: { updated: [{ data: master }] } };
        if (me._actionApprove && !me._actionApprove({ target: target, postData: postData })) {
            return false;
        }

        me._actionSave = function (post) {
            post.postData = postData;
            return true;
        };
        me._save(target, function (success, resp) {
            if (success) {
                com.message("success", me.resx.__approveSuccess);;
                if (success) me._successApprove();
            } else {
                com.handleResp(resp);
            }
        }, true, 'approve');
    }
    //me._approve = function (target, saveFirst) {
    //    var toolData = target ? $(target).data("data") : me.__tools["approve"];
    //    if (typeof (me._beforeApprove) == "function" && !me._beforeApprove(target)) return;
    //    var approve = function () {
    //        var url = '';
    //        if (me.keyField.split(',').length > 1) {
    //            url = toolData.Url + "?";
    //            var keys = me.keyField.split(',');
    //            for (var i = 0; i < keys.length; ++i) {
    //                // no,version is the first two specify parameter for approve api
    //                if (i == 0)
    //                    //url += keys[i] + "=" + form[keys[i]].apply();
    //                    url += "no=" + form[keys[i]].apply();
    //                else if (i == 1)
    //                    //url += "&" + keys[i] + "=" + form[keys[i]].apply();
    //                    url += "&version=" + form[keys[i]].apply();
    //                else
    //                    url += "&" + keys[i] + "=" + form[keys[i]].apply();
    //            }
    //        } else {
    //            url = toolData.Url + form[me.keyField].apply();
    //        }


    //        var post = { toolData: toolData, url: url, postData: {} };
    //        if (typeof (me._actionApprove) == "function" && !me._actionApprove(post)) return false;

    //        com.ajax({
    //            //type: 'GET',
    //            type: post.type || 'POST',
    //            url: post.url,
    //            data: ko.toJSON(post.postData),
    //            success: function (resp) {
    //                if (typeof resp === 'string' && Utils.isJson(resp)) {
    //                    resp = JSON.parse(resp);
    //                }
    //                var success = false;
    //                if (resp === 1 || resp === true || resp.status === true) {
    //                    success = true;
    //                    if (me._successApprove) me._successApprove();
    //                    com.message("success", me.resx.__approveSuccess);
    //                    if (parent && parent._refresh) {
    //                        parent._refresh();
    //                    }
    //                } else {
    //                    com.handleResp(resp, '__approveFailed');
    //                    //com.message("failed", me.resx.__approveFailed + " " + resp);
    //                }
    //                if (me._afterApprove) {
    //                    if (me._afterApprove(success, resp)) {
    //                        me._close();
    //                    }
    //                } else if (success) {
    //                    me._close();
    //                }
    //            }
    //        });
    //    }
    //    if (!saveFirst) {
    //        approve();
    //    } else {
    //        me._save(null, function (success, resp) {
    //            if (success) {
    //                approve();
    //            } else {
    //                com.handleResp(resp);
    //            }
    //        }, true);
    //    }
    //};

    me._beforeReject = function (target) {
        return true;
    };
    me._actionReject = undefined;
    me._afterReject = undefined;
    me._successReject = function () {
        me.loadTools([], true);
    };
    me._reject = function (target) {
        if (me._beforeReject && !me._beforeReject(target)) {
            return false;
        }

        me.form.task_approval_value('3');
        me.form.task_is_completed(1);
        var master = ko.mapping.toJS(me.form);
        delete master.__ko_mapping__;
        var postData = { master: { updated: [{ data: master }] } };
        if (me._actionReject && !me._actionReject({ target: target, postData: postData })) {
            return false;
        }

        me._actionSave = function (post) {
            post.postData = postData;
            return true;
        };

        me._save(target, function (success, resp) {
            if (success) {
                com.message("success", me.resx.__rejectSuccess)
                if (success)
                    me._successReject();
            } else {
                com.handleResp(resp);
            }
        }, true, 'reject')
    }
    //me._reject = function (target, saveFirst) {
    //    var toolData = target ? $(target).data("data") : me.__tools["reject"];
    //    if (typeof (me._beforeReject) == "function" && !me._beforeReject(target)) return;

    //    var reject = function () {
    //        var url = '';
    //        if (me.keyField.split(',').length > 1) {
    //            url = toolData.Url + "?";
    //            var keys = me.keyField.split(',');
    //            for (var i = 0; i < keys.length; ++i) {
    //                // no,version is the first two specify parameter for approve api
    //                if (i == 0)
    //                    //url += keys[i] + "=" + form[keys[i]].apply();
    //                    url += "no=" + form[keys[i]].apply();
    //                else if (i == 1)
    //                    //url += "&" + keys[i] + "=" + form[keys[i]].apply();
    //                    url += "&version=" + form[keys[i]].apply();
    //                else
    //                    url += "&" + keys[i] + "=" + form[keys[i]].apply();
    //            }
    //        } else {
    //            url = toolData.Url + form[me.keyField].apply();
    //        }

    //        var post = { toolData: toolData, url: url, postData: {} };
    //        if (typeof (me._actionReject) == "function" && !me._actionReject(post)) return false;

    //        com.ajax({
    //            //type: 'GET',
    //            type: post.type || 'GET',
    //            url: post.url,
    //            data: ko.toJSON(post.postData),
    //            success: function (resp) {
    //                if (typeof resp === 'string' && Utils.isJson(resp)) {
    //                    resp = JSON.parse(resp);
    //                }
    //                var success = false;
    //                if (resp === 1 || resp === true || resp.status === true) {
    //                    success = true;
    //                    if (me._successReject) me._successReject();
    //                    com.message("success", me.resx.__rejectSuccess);
    //                    if (parent && parent._refresh) {
    //                        parent._refresh();
    //                    }
    //                } else {
    //                    com.handleResp(resp, '__approveFailed');
    //                    //com.message("failed", me.resx.__rejectFailed + " " + resp);
    //                }
    //                if (me._afterReject) {
    //                    if (me._afterApprove(success, resp)) {
    //                        me._close();
    //                    }
    //                } else if (success) {
    //                    me._close();
    //                }
    //            }
    //        });
    //    };
    //    if (!saveFirst) {
    //        reject();
    //    } else {
    //        me._save(null, function (success, resp) {
    //            if (success) {
    //                reject();
    //            } else {
    //                com.handleResp(resp);
    //            }
    //        }, true);
    //    }

    //};


    me._beforeComplete = function (target) {
        return true;
    };

    me._actionComplete = undefined;
    me._afterComplete = undefined;
    me._successComplete = function () {
        me.loadTools([], true);
    };
    me._complete = function (target, saveFirst) {
        var toolData = target ? $(target).data("data") : me.__tools["complete"];
        if (typeof (me._beforeComplete) == "function" && !me._beforeComplete(target)) return;
        var complete = function () {
            var url = '';
            if (me.keyField.split(',').length > 1) {
                url = toolData.Url + "?";
                var keys = me.keyField.split(',');
                for (var i = 0; i < keys.length; ++i) {
                    // no,version is the first two specify parameter for complete api
                    if (i == 0)
                        //url += keys[i] + "=" + form[keys[i]].apply();
                        url += "no=" + form[keys[i]].apply();
                    else if (i == 1)
                        //url += "&" + keys[i] + "=" + form[keys[i]].apply();
                        url += "&version=" + form[keys[i]].apply();
                    else
                        url += "&" + keys[i] + "=" + form[keys[i]].apply();
                }
            } else {
                url = toolData.Url + form[me.keyField].apply();
            }


            var post = { toolData: toolData, url: url, postData: {} };
            if (typeof (me._actionComplete) == "function" && !me._actionComplete(post)) return false;

            com.ajax({
                //type: 'GET',
                type: post.type || 'POST',
                url: post.url,
                data: ko.toJSON(post.postData),
                success: function (resp) {
                    if (typeof resp === 'string' && Utils.isJson(resp)) {
                        resp = JSON.parse(resp);
                    }
                    var success = false;
                    if (resp === 1 || resp === true || resp.status === true) {
                        success = true;
                        if (me._successComplete) me._successComplete();
                        com.message("success", me.resx.INFO_OPERATION_SUCCESSFUL);
                        if (parent && parent._refresh) {
                            parent._refresh();
                        }
                    } else {
                        com.handleResp(resp, 'INFO_OPERATION_FAIELED');
                        //com.message("failed", me.resx.__completeFailed + " " + resp);
                    }
                    if (me._afterComplete) {
                        if (me._afterComplete(success, resp)) {
                            me._close();
                        }
                    } else if (success) {
                        me._close();
                    }
                }
            });
        }
        if (!saveFirst) {
            complete();
        } else {
            me._save(null, function (success, resp) {
                if (success) {
                    complete();
                } else {
                    com.handleResp(resp);
                }
            }, true);
        }
    };

    me._post = function (post, callback) {
        $(document.body).mask('wait ...');
        com.ajax({
            type: "POST",
            url: post.url,
            data: ko.toJSON(post.postData),
            success: function (resp) {
                if (typeof resp === 'string' && Utils.isJson(resp)) {
                    resp = JSON.parse(resp);
                }

                if (resp === 1 || resp === true || resp.Status === true) {
                    if (resp.Data && !post.doNotUpdateForm) {
                        if (post.updateForm)
                            ko.mapping.fromJS(resp.Data, post.updateForm);
                        else
                            ko.mapping.fromJS(resp.Data, me.form);
                    }
                    me.isEditing = true;
                    if (callback) {
                        callback(true, resp);
                    }
                    //me.httpMethod = "PUT";
                } else {
                    if (callback) {
                        callback(false, resp);
                    }
                }
                $(document.body).unmask(50);
            }
        });
    };

    me._beforeRemove = undefined;
    me._afterRemove = undefined;
    me._actionRemove = undefined;
    me._remove = function (target) {
        var row = ko.mapping.toJS(me.form);
        var postData = { master: { deleted: [{ data: row }] } };

        var thisData = target ? $(target).data('data') : me.__tools["remove"];
        if ((typeof me._beforeRemove === 'function' && !me._beforeRemove(me, toolData)))
            return false;


        var obj = { context: me, toolData: thisData, url: thisData.url, postData: postData };
        if ((typeof me._actionRemove === 'function' && !me._actionRemove(obj)))
            return false;

        com.showComfirm("confirm", me.resx.__removeComfirm, function (b) {
            if (b) {
                com.ajax({
                    type: "POST",
                    url: obj.url,
                    data: ko.toJSON(obj.postData),
                    success: function (resp) {
                        if (typeof resp === 'string' && Utils.isJson(resp)) {
                            resp = JSON.parse(resp);
                        }

                        if (resp === 1 || resp === true || resp.status === true) {
                            com.message("success", me.resx.__removeSuccess);
                        } else {
                            com.message("error", me.resx.__removeFailed + " " + resp);

                        }

                        if (typeof me._afterRemove == 'function')
                            me._afterRemove(me);
                    }
                });
            }
        });

    };


    me.showWin = function (title, url, iwidth, iheight, winType) {
        /*if (winType != 'popUp') {
            // lgr 2015-04-20 rental 的编辑界面直接在新界面中打开
            window.open(url);
            return;
        }
        */
        //TODO:用于替换Test,替换按钮，弹出窗体
        //url = url.replace("/test", "");
        console.log(url);
        if (url.startsWith('/')) {
            url = com.preUrl + url;
        }

        var win = $('#__win');
        var width, height;
        $('#ifr').hide();
        $('#ifr').attr('src', '');

        //为了防止用户看到 iframe 显示的前个页面内容，用 settimeout 延迟弹出层；
        setTimeout(function () {
            $('#ifr').show();

            if (iwidth || iheight) {
                height = iheight || $(document.body).height() - 40;
                width = iwidth || $(document.body).width() - 40;
                //width = width > 1000 ? 1000 : width;
                //height = height > 600 ? 600 : height;
                if (!iheight && __pageSetting && __pageSetting.modalHeight) {
                    height = __pageSetting.modalHeight > height ? height : __pageSetting.modalHeight;
                }
                if (!iwidth && __pageSetting.modalWidth) {
                    width = __pageSetting.modalWidth > width ? width : __pageSetting.modalWidth;
                } else {
                    width = width > 1000 ? 1000 : width;
                }

                $('#ifr').attr('src', url);
                win.window('resize', { height: height, width: width }).window('setTitle', title).window('open').window('center');

            }
            else if (!__pageSetting || (!__pageSetting.modalHeight && !__pageSetting.modalWidth)) {
                $('#ifr').attr('src', url);
                win.window('maximize').window('setTitle', title).window('open').window('center');
            } else {
                height = $(document.body).height() - 40;
                width = $(document.body).width() - 40;
                //width = width > 1000 ? 1000 : width;
                //height = height > 600 ? 600 : height;
                var isMax = true;;
                if (__pageSetting && __pageSetting.modalHeight) {
                    if (__pageSetting.modalHeight < height - 100) {
                        isMax = false;
                    }

                    height = __pageSetting.modalHeight > height ? height : __pageSetting.modalHeight;
                }
                if (__pageSetting.modalWidth) {
                    if (__pageSetting.modalWidth < width) {
                        isMax = false;
                    }
                    width = __pageSetting.modalWidth > width ? width : __pageSetting.modalWidth;
                } else {
                    width = width > 1000 ? 1000 : width;
                }
                $('#ifr').attr('src', url);
                if (isMax) {
                    // win.window('maximize').window('setTitle', title).window('open').window('center');
                    win.window('maximize').window('setTitle', title).window('open');
                } else {
                    //win.window('resize', { height: height, width: width }).window('setTitle', title).window('open').window('center');
                    win.window('resize', { height: height, width: width }).window('setTitle', title).window('open').window('center');
                    if (win.window('options').top > 100) {
                        win.window('move', { top: 100 });
                    }
                }


            }
        }, 0)
        return;

    };
    me.closeWin = function () {
        var win = $('#__win');
        win.window('close');
    };


    me._editWin = {
        closed: true,
        modal: true,
        minimizable: false,
        _close: function () {
            me._editWin._close();
        },
        _open: function (title, url, iwidth, iheight, winType) {
            /*if (winType != 'popUp') {
                // lgr 2015-04-20 rental 的编辑界面直接在新界面中打开
                window.open(url);
                return;
            }
            */
            //TODO:用于替换Test,替换按钮，弹出窗体
            //url = url.replace("/test", "");
    
            var width, height;
            $('#ifr').hide();
            $('#ifr').attr('src', '');
            var win = me._editWin._$elem();
            //为了防止用户看到 iframe 显示的前个页面内容，用 settimeout 延迟弹出层；
            setTimeout(function () {
                $('#ifr').show();

                if (iwidth || iheight) {
                    height = iheight || $(document.body).height() - 40;
                    width = iwidth || $(document.body).width() - 40;
                    //width = width > 1000 ? 1000 : width;
                    //height = height > 600 ? 600 : height;
                    if (!iheight && __pageSetting && __pageSetting.modalHeight) {
                        height = __pageSetting.modalHeight > height ? height : __pageSetting.modalHeight;
                    }
                    if (!iwidth && __pageSetting.modalWidth) {
                        width = __pageSetting.modalWidth > width ? width : __pageSetting.modalWidth;
                    } else {
                        width = width > 1000 ? 1000 : width;
                    }

                    $('#ifr').attr('src', url);
                    me._editWin.win.window('resize', { height: height, width: width }).window('setTitle', title).window('open').window('center');

                }
                else if (!__pageSetting || (!__pageSetting.modalHeight && !__pageSetting.modalWidth)) {
                    $('#ifr').attr('src', url);
                    win.window('maximize').window('setTitle', title).window('open').window('center');
                } else {
                    height = $(document.body).height() - 40;
                    width = $(document.body).width() - 40;
                    //width = width > 1000 ? 1000 : width;
                    //height = height > 600 ? 600 : height;
                    var isMax = true;;
                    if (__pageSetting && __pageSetting.modalHeight) {
                        if (__pageSetting.modalHeight < height - 100) {
                            isMax = false;
                        }

                        height = __pageSetting.modalHeight > height ? height : __pageSetting.modalHeight;
                    }
                    if (__pageSetting.modalWidth) {
                        if (__pageSetting.modalWidth < width) {
                            isMax = false;
                        }
                        width = __pageSetting.modalWidth > width ? width : __pageSetting.modalWidth;
                    } else {
                        width = width > 1000 ? 1000 : width;
                    }
                    $('#ifr').attr('src', url);
                    if (isMax) {
                        // win.window('maximize').window('setTitle', title).window('open').window('center');
                        win.window('maximize').window('setTitle', title).window('open');
                    } else {
                        //win.window('resize', { height: height, width: width }).window('setTitle', title).window('open').window('center');
                        win.window('resize', { height: height, width: width }).window('setTitle', title).window('open').window('center');
                        if (win.window('options').top > 100) {
                            win.window('move', { top: 100 });
                        }
                    }


                }
            }, 0)
            return;
        }
    };


    me._close = function () {
        if (parent.closeWin) {
            parent.closeWin();
        } else {
            com.close();
        }
    };

    me._add = function () {
        parent._add();
    }

    //#endregion tools

    me._initStatus = function () {
        /*var status = me.form['status']();
        if (me.statusArr.indexOf(status) > -1) {
        me.unableForm();
        switch (status) {
        case 'submitted':
        case 'prepared':
        me.loadTools(['save', 'submit'], false);
        break;
        case 'approved':
        me.loadTools(['save', 'submit', 'approve', 'reject'], false);
        break;
        default: break;
        }
        }*/
        if (me.form["status"]) {
            if (me.form["status"] && me.form["status"]() == "1") {
                me.loadTools(['save', 'submit', 'complete_procurement', 'newVersion'], false);
            } else if (me.form["status"]() == "2" || me.form["status"]() == "5" || me.form["status"]() == "6" || me.form["status"]() == "3") {
                if (me.form['status']() == '2' || me.form['status']() == '6')
                    me.loadTools(['save', 'submit', 'approve', 'reject', 'newVersion'], false);
                else if (me.form['status']() == '3')
                    me.loadTools(['save', 'submit', 'approve', 'reject', 'comment', 'complete_procurement'], false);
                else
                    me.loadTools(['save', 'submit', 'approve', 'reject', 'complete_procurement', 'newVersion'], false);

            } else {
                me.loadTools(['complete_procurement', 'newVersion'], false);
            }
        } else {
            me.loadTools(['complete_procurement', 'newVersion'], false);
        }
        /*
        if (me.form['approval_stage']) {
            var stage = me.form['approval_stage']();
            if (stage == -1) {
                // 已经审核结束
                me.loadTools(['save', 'submit', 'approve', 'reject'], false);
            } else if (stage > 0) {
                // 正在审核中
                me.loadTools(['save', 'submit'], false);
            } else {
                me.loadTools();
            }
        }*/

        /*
        //simple approval that approval status column attach in the same table with data would use this
        if (me.form['status']) {
            var status = me.form['status']();
            if (status == 1) {
                // 已经审核结束
                me.loadTools(['save', 'submit', 'approve', 'reject'], false);
            } else {
                me.loadTools();
            }
        }*/
    };
    me._isApproval = ko.computed({
        read: function () {
            if (me.viewType == 'approval') {
                return true;
            } else {
                return false;
            }
        },
        owner: me
    });

    if (me._isApproval) {
        me.formApproval = {
            remark: ko.observable()
        };

        me.winComment = {
            title: resx.comment,
            width: 350,
            height: 220,
            buttons: [
                {
                    text: resx.__ok,
                    iconCls: 'icon-ok',
                    handler: function () {
                        me.winComment._ok();
                    }
                },
                {
                    text: resx.__close,
                    iconCls: 'icon-close',
                    handler: function () {
                        me.winComment._close();
                    }
                }
            ],
            _ok: function () {
                me.form.task_remark(me.formApproval.remark());
                me.winComment._close();
            }
        }

        me._comment = function () {
            me.winComment._open();
        }
    }

    $(function () {
        me._initStatus();
        //setTimeout(function () {
        //    $('.dh-form input:visible:not(:disabled):first').focus()
        //    var validateBoxs = $('.easyui-uc_validatebox');
        //    if (validateBoxs) {
        //        $.each(validateBoxs, function (idx, elem) {
        //            $(elem).validatebox('isValid');
        //        });
        //    }
        //}, 500);

    });
}