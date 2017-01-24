String.prototype.format = function () {
    var s = this;
    for (var i = 0; i < arguments.length; ++i) {
        var reg = RegExp('\\{' + i + '\\}', "gm");
        s = s.replace(reg, arguments[i]);
    }
    return s;
};

/** 
* 扩展startWith方法 
* @param str 
* @return 
*/
String.prototype.startsWith = function (str) {
    if (str == null || str == "" || this.length == 0 || str.length > this.length)
        return false;
    if (this.substr(0, str.length) == str)
        return true;
    else
        return false;
    return true;
};


/** 
* 扩展contains方法 
* @param item 
* @return 
*/
Array.prototype.contains = function (item) {
    return RegExp("\\b" + item + "\\b").test(this);
};


/** 
* IE不支持indexOf方法，为IE添加indexOf的方法 
*/
Array.prototype.indexOf = function (val) {
    var value = this;
    for (var i = 0; i < value.length; i++) {
        if (value[i] == val) return i;
    }
    return -1;
};

(function ($) {
    $.fn.autoImg = function (path) {
        var maxWidth = this.width();
        var maxHeight = this.height();

        var img = this[0];
        if (!img) return;
        // 如果支持max-width属性则使用此，否则使用下面方式
        //var isMaxWidth = 'maxWidth' in document.documentElement.style;

        //if (isMaxWidth) return img.style.maxWidth = maxWidth + 'px';
        var src = path;

        // 隐藏原图
        img.style.display = 'none';
        // img.removeAttribute('src');

        // 获取图片头尺寸数据后立即调整图片
        __imgReady(src, function () {
            var width = $(this).width();
            var height = $(this).height();
            width = width || $(this).prop('width');
            height = height || $(this).prop('height');

            // 等比例缩小
            if (width > maxWidth) {
                height = maxWidth / width * height,
                    width = maxWidth;
                img.style.width = width + 'px';
                img.style.height = height + 'px';
                maxHeight = maxHeight > height ? height : maxHeight;
            }
            if (height > maxHeight) {
                width = maxHeight / height * width,
                    height = maxHeight;
                img.style.width = width + 'px';
                img.style.height = height + 'px';
            } else {
                img.style.width = width + 'px';
                img.style.height = height + 'px';
            }
            // 显示原图
            img.style.display = 'block';
            //img.setAttribute('src', src);
        });

    };


})(jQuery);

// 更新：
// 05.27: 1、保证回调执行顺序：error > ready > load；2、回调函数this指向img本身
// 04-02: 1、增加图片完全加载后的回调 2、提高性能

/**
* 图片头数据加载就绪事件 - 更快获取图片尺寸
* @version	2011.05.27
* @author	TangBin
* @see		http://www.planeart.cn/?p=1121
* @param	{String}	图片路径
* @param	{Function}	尺寸就绪
* @param	{Function}	加载完毕 (可选)
* @param	{Function}	加载错误 (可选)
* @example imgReady('http://www.google.com.hk/intl/zh-CN/images/logo_cn.png', function () {
alert('size ready: width=' + this.width + '; height=' + this.height);
});
*/
window.__imgReady = (function () {
    var list = [], intervalId = null,

    // 用来执行队列
	tick = function () {
	    var i = 0;
	    for (; i < list.length; i++) {
	        list[i].end ? list.splice(i--, 1) : list[i]();
	    };
	    !list.length && stop();
	},

    // 停止所有定时器队列
	stop = function () {
	    clearInterval(intervalId);
	    intervalId = null;
	};

    return function (url, ready, load, error) {
        var onready, width, height, newWidth, newHeight,
			img = new Image();

        img.src = url;

        // 如果图片被缓存，则直接返回缓存数据
        if (img.complete) {
            ready.call(img);
            load && load.call(img);
            return;
        };

        width = img.width;
        height = img.height;

        // 加载错误后的事件
        img.onerror = function () {
            error && error.call(img);
            onready.end = true;
            img = img.onload = img.onerror = null;
        };

        // 图片尺寸就绪
        onready = function () {
            newWidth = img.width;
            newHeight = img.height;
            if (newWidth !== width || newHeight !== height ||
                // 如果图片已经在其他地方加载可使用面积检测
				newWidth * newHeight > 1024
			) {
                ready.call(img);
                onready.end = true;
            };
        };
        onready();

        // 完全加载完毕的事件
        img.onload = function () {
            // onload在定时器时间差范围内可能比onready快
            // 这里进行检查并保证onready优先执行
            !onready.end && onready();

            load && load.call(img);

            // IE gif动画会循环执行onload，置空onload即可
            img = img.onload = img.onerror = null;
        };

        // 加入队列中定期执行
        if (!onready.end) {
            list.push(onready);
            // 无论何时只允许出现一个定时器，减少浏览器性能损耗
            if (intervalId === null) intervalId = setInterval(tick, 40);
        };
    };
})();


window.__parseFloat = function (val) {
    //-- note: isNaN('') is false, so add isNaN(parseInt(val))
    // check link: http://stackoverflow.com/questions/825402/why-does-isnan-equal-false
    if (!isFinite(val) || isNaN(val) || isNaN(parseInt(val))) return 0;
    return parseFloat(val);
};

var Utils = function () {
    return {
        format: function (value, type) {
            switch (type) {
                case 'c':
                    return Utils.formatDollar(value);
                    break;
                case 'd':
                    return Utils.formatDate(value);
                    break;
                case 'n':
                    return Utils.formatNumber(value);
                    break;
                case 'p':
                    return Utils.formatPercent(value);
                    break;
                default:
                    return value;
            }
        },
        getUrlParam: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        },
        parseFloat: function (val) {
            if (!isFinite(val) || isNaN(val) || isNaN(parseInt(val))) return 0;
            return parseFloat(val);
        },
        isUrl: function (url) {
            if (!url) return false;
            if (url.indexOf('undefined') == 0) return false;
            return true;

        },
        getDateTime: function () {
            return $.formatDateTime('yy-mm-dd hh:ii:ss', new Date());
        },
        log: function (msg) {
            console.log(msg);
        },
        setCookie: function (name, value, expireDays) {
            if (!expireDays)
                expireDays = 300;
            var exDate = new Date();
            exDate.setDate(exDate.getDate + expireDays);
            document.cookie = "{0}={1}{2};domain=;path=/".format(name, escape(value), expireDays ? ";expires=" + exDate.toGMTString() : "");
        },
        delCookie: function (name) {
            var exDate = new Date();
            exDate.setDate(exDate.getDate - 1);
            var value = unescape(Utils.getCookie(name));
            document.cookie = "{0}={1};expires={2}".format(name, value, exDate);
        },
        getCookie: function (name) {
            var value = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
            if (value == null) return null;
            return value[2];
        },
        clearCookie: function () {
            var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
            if (keys) {
                for (var i = keys.length; i--;)
                    document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
            }
        },
        dateAdd: function (date, type, number) {
            if (Object.prototype.toString.call(date) != '[object Date]') {
                date = Utils.parseDate(date);
            }
            if (Object.prototype.toString.call(date) != '[object Date]') {
                return null;
            }
            var dtTmp = date;
            if (typeof number != 'number') {
                number = __parseFloat(number);
            }
            switch (type) {
                case 's': return new Date(Date.parse(dtTmp) + (1000 * number));

                case 'n': return new Date(Date.parse(dtTmp) + (60000 * number));

                case 'h': return new Date(Date.parse(dtTmp) + (3600000 * number));

                case 'd': return new Date(Date.parse(dtTmp) + (86400000 * number));

                case 'w': return new Date(Date.parse(dtTmp) + ((86400000 * 7) * number));

                case 'q': return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + number * 3, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());

                case 'm':
                    var intMonth = number;
                    var decMonth = 0;
                    var isPositive = number > 0;
                    number += '';
                    if (number.indexOf('.') > 0) {
                        intMonth = number.substr(0, number.indexOf('.'));
                        intMonth = __parseFloat(intMonth);
                        decMonth = __parseFloat('0' + number.substr(number.indexOf('.')));
                        decMonth = isPositive ? __parseFloat(decMonth) : __parseFloat('-' + decMonth);
                    }
                    var date = new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + intMonth, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
                    if (decMonth != 0) {
                        date = Utils.dateAdd(date, 'd', decMonth * 30);
                    }
                    return date;

                case 'y': return new Date((dtTmp.getFullYear() + number), dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
            };
        },
        parseTimeStamp: function (value) {//转换时间戳
            var date = new Date(value * 1000);
            var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            var hh = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
            var mm = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
            var ss = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
            return date.getFullYear() + "-" + month + "-" + currentDate + " " + hh + ":" + mm + ":" + ss;
        },
        parseDate: function (value) {
            //console.log(value);
            if (Object.prototype.toString.call(value) !== "[object Date]") {
                if (!value) return "";
                var reg = '';
                var place = '';
                //The format is as follows: YYYY-MM-DDTHH:mm:ss.sss, dd-MM-yyyy
                // if not the ie browser will not regonize it
                // only chrome support new Date(yyyy-MM-dd HH:mm:ss), 
                //so we must convert it to new Date(yyyy-MM-ddTHH:mm:ss) and sub timezone offset hours to compatible all browsers

                if (value.length === 'dd-MM-yyyy'.length) {
                    //transfer to 'yyyy-MM-dd'
                    //reg = /(\d{2})[-\\](\d{2})[-\\](\d{4})/;
                    reg = /(\d{4})[-\\](\d{2})[-\\](\d{2})/;
                    place = "$1-$2-$3";
                } else if (value.length >= 'YYYY-MM-DDTHH:mm:ss'.length) {
                    value = value.substr(0, 'YYYY-MM-DDTHH:mm:ss'.length);
                    reg = /([\d-]*)T(\d:.)*/;
                    place = "$1T$2";
                } else {
                    return '';
                }

                var dateStr = value.toString().replace(reg, place);
                value = new Date(dateStr);
                if (value.toString() === "Invalid Date") return "";
                // substract timezone offset 
                // ie 转时间时没有自动加上时区, 所以不用再考虑时区问题
                if (!Utils.isIEBrowser()) {
                    value.setHours(value.getHours() + (value.getTimezoneOffset() / 60));
                }
            }
            return value;
        },
        parseDatetime: function (value) {
            if (Object.prototype.toString.call(value) !== "[object Date]") {
                if (!value) return "";
                var reg = '';
                var place = '';
                //The format is as follows: YYYY-MM-DDTHH:mm:ss.sss, dd-MM-yyyy
                // if not the ie browser will not regonize it
                // only chrome support new Date(yyyy-MM-dd HH:mm:ss), 
                //so we must convert it to new Date(yyyy-MM-ddTHH:mm:ss) and sub timezone offset hours to compatible all browsers

                if (value.length === 'dd-MM-yyyy HH:mm'.length) {
                    //transfer to 'yyyy-MM-dd HH:mm'
                    //reg = /(\d{2})[-\\](\d{2})[-\\](\d{4})[ ](\d{2})[:](\d{2})/;
                    reg = /(\d{4})[-\\](\d{2})[-\\](\d{2})[ ](\d{2})[:](\d{2})/;
                    place = "$1-$2-$3 $4:$5";
                } else if (value.length >= 'YYYY-MM-DDTHH:mm:ss'.length) {
                    value = value.substr(0, 'YYYY-MM-DDTHH:mm:ss'.length);
                    reg = /([\d-]*)T(\d:.)*/;
                    place = "$1T$2";
                } else {
                    return '';
                }

                var dateStr = value.toString().replace(reg, place);
                value = new Date(dateStr + "Z");
                if (value.toString() === "Invalid Date") return "";
                // substract timezone offset 
                // ie 转时间时没有自动加上时区, 所以不用再考虑时区问题
                //if (!Utils.isIEBrowser()) {
                value.setHours(value.getHours() + (value.getTimezoneOffset() / 60));
                //}
            }
            return value;
        },
        formatDate: function (value, failureRetValue) {
            var origValue = value;
            value = Utils.parseDate(value);
            if (!value) {
                if (failureRetValue) return origValue;
                else return '';
            }

            var y = value.getFullYear();
            var m = value.getMonth() + 1;
            var d = value.getDate();
            m = m < 10 ? '0' + m : m;
            d = d < 10 ? '0' + d : d;
            //return "{1}-{0}-{2}".format(m, d, y);
            return "{2}-{0}-{1}".format(m, d, y);
        },
        formatPostDate: function (value, failureRetValue) {
            var origValue = value;
            value = Utils.parseDate(value);
            if (!value) {
                if (failureRetValue) return origValue;
                else return '';
            }

            var y = value.getFullYear();
            var m = value.getMonth() + 1;
            var d = value.getDate();
            m = m < 10 ? '0' + m : m;
            d = d < 10 ? '0' + d : d;
            //return "{0}-{1}-{2}".format(y, m, d);
            return "{0}-{1}-{2}".format(y, m, d);
        },
        formatDatetime: function (value, failureRetValue) {
            var origValue = value;
            value = Utils.parseDatetime(value);
            if (!value) {
                if (failureRetValue) return origValue;
                else return '';
            }

            var y = value.getFullYear();
            var m = value.getMonth() + 1;
            var d = value.getDate();
            var h = value.getHours();
            var mi = value.getMinutes();
            m = m < 10 ? '0' + m : m;
            d = d < 10 ? '0' + d : d;
            h = h < 10 ? '0' + h : h;
            mi = mi < 10 ? '0' + mi : mi;
            //return "{1}-{0}-{2} {3}:{4}".format(m, d, y, h, mi);
            return "{2}-{0}-{1} {3}:{4}".format(m, d, y, h, mi);
        },
        formatNumber: function (value) {
            // empty or null format to themselves
            if (value == undefined || value == null) return value;
            // value format may be like  '30,000,000.00' so trim ','
            value = (value + "").replace(',', '');
            if (!isFinite(value)) return value;
            if (!value) value = '0';
            var ret = value;
            var significan = parseFloat(value).toFixed(2) + '';
            if (significan.length > 6) {
                var decimalPath = significan.match(/\.\d{2}/g)[0];
                var re = /(\d{3})+\b/g;
                var commaPart = significan.match(re)[0];
                var leftPart = significan.substr(0, significan.length - commaPart.length - decimalPath.length);
                var commaPathStr = commaPart.replace(/(\d{3})/g, ",$1");
                if (leftPart.length == 0) commaPathStr = commaPathStr.substring(1);
                ret = leftPart + commaPathStr + decimalPath;
            } else {
                ret = significan;
            }
            return ret;

        },
        formatPercent: function (value) {
            value = Utils.formatNumber(value);
            if (value == undefined || value == null) return value;
            //if (!isFinite(value)) return value;
            return value + '%';

        },
        formatDollar: function (value, rightUnit) {
            value = Utils.formatNumber(value);
            // empty or null format to themselves
            if (value == undefined || value == null) {
                if (!rightUnit || typeof rightUnit != 'string') rightUnit = '';
                else rightUnit = " " + rightUnit;
                return '￥' + rightUnit;
            }
            //if (!isFinite(value)) return value;
            if (!value) value = '0.00';
            if (!rightUnit || typeof rightUnit != 'string') rightUnit = '';
            else rightUnit = " " + rightUnit;
            return '￥' + value + rightUnit;
        },
        formatBool: function (val, rowData, rowIndex) {
            if (val == true || val == "true" || val == "1") {
                return "<a class='icon-ok' style='line-height:23px; width:23px;height:23px;display:block'></a>";
            }
            return "";
        },
        formatStatus: function (status) {
            switch (status) {
                case undefined:
                case null:
                case '':
                    return resx.__draft;
                    break;
                case '0':
                    return resx.__draft;
                    break;
                case '11':
                    return 'Pending for Others\' Approval';
                    break;
                case '1':
                    return resx.__prepared;
                    break;
                case '2':
                    return resx.__approved;
                    break;
                case '3':
                    return resx.__rejected;
                    break;
                case '4':
                    return resx.__partial_approved;
                    break;
                case '5':
                    return resx.__partial_approved;
                    break;
                case '6':
                    return resx.__completed;
                    break;
                default:
                    return status;
                    break;
            }
        },
        formatActionStatus: function (status) {
            switch (status) {
                case undefined:
                case null:
                case '':
                    return resx.__draft;
                    break;
                case '0':
                    return resx.__draft;
                    break;
                case '1':
                    return resx.__action_prepared;
                    break;
                case '2':
                    return resx.__approved;
                    break;
                case '3':
                    return resx.__rejected;
                    break;
                case '4':
                    return resx.__partial_approved;
                    break;
                case '5':
                    return resx.__partial_approved;
                    break;
                case '6':
                    return resx.__completed;
                    break;
                default:
                    return status;
                    break;
            }
        },
        formatStatusOutsourcing: function (status) {
            switch (status) {
                case undefined:
                case null:
                case '':
                    return resx.__draft;
                    break;
                case '1':
                    return resx.__prepared;
                    break;
                case '2':
                    return resx.__confirmed;
                    break;
                case '3':
                    return resx.__rejected;
                    break;
                case '4':
                    return resx.__partial_approved;
                    break;
                case '5':
                    return resx.__partial_approved;
                    break;
                case '6':
                    return resx.__completed;
                    break;
                case '7':
                    return resx.__released;
                    break;
                default:
                    return resx.__draft;
                    break;
            }
        },
        formatBySource: function (source, keyField, valField, key) {
            if (source) {
                for (var i = 0; i < source.length; ++i) {
                    if (source[i][keyField] == key) {
                        return source[i][valField];
                    }
                }
            }
            return key;
        },
        isLeapYear: function (year) {
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                return true;
            } else {
                return false;
            }
        },
        CalDayDiff: function (date1, date2) {
            var monthDay = Utils.CalMonthDayDiff(date1, date2);
            if (!monthDay) return monthDay;
            return monthDay.months * 30 + monthDay.days;
        },
        CalMonthDiff: function (date1, date2) {
            if (Object.prototype.toString.call(date1) !== '[object Date]') date1 = Utils.parseDate(date1);
            if (Object.prototype.toString.call(date2) !== '[object Date]') date2 = Utils.parseDate(date2);

            if (!date1 || !date2) return false;
            if (date2 < date1) return false;
            // date is object, this modify could change original value
            // so we clone a new date
            date1 = new Date(date1.getTime());
            date2 = new Date(date2.getTime());
            ////--先加 1 天，因为date1, date2自身包括在统计里;
            //date2.setDate(date2.getDate() + 1);
            var diffYears = date2.getFullYear() - date1.getFullYear();
            var diffMonths = date2.getMonth() - date1.getMonth() - 1;//下面已经把 date2 最后一个月加进去了
            if (diffMonths < 0) {
                diffYears--;
                diffMonths += 12;
            }
            var date2MonthDay = Utils.calMonthDays(date2.getYear(), date2.getMonth() + 1);
            var date1MonthDay = Utils.calMonthDays(date1.getYear(), date1.getMonth() + 1);
            var diffMonths2 = date2.getDate() / date2MonthDay + (1 - (date1.getDate() - 1) / date1MonthDay);

            //return { years: diffYears, months: diffMonths, days: diffDays };
            return diffYears * 12 + diffMonths + diffMonths2;
        }
        //CalMonthDiff: function (date1, date2) {
        //    var monthDay = Utils.CalMonthDayDiff(date1, date2);
        //    if (!monthDay) return monthDay;
        //    return monthDay.months + monthDay.days / 30;
        //}
        , CalMonthDayDiff: function (date1, date2) {
            var model = Utils.CalYearMonthDayDiff(date1, date2);
            if (!model) return model;
            return { months: model.years * 12 + model.months, days: model.days };
        }
        , CalYearMonthDayDiff: function (date1, date2) {
            if (Object.prototype.toString.call(date1) !== '[object Date]') date1 = Utils.parseDate(date1);
            if (Object.prototype.toString.call(date2) !== '[object Date]') date2 = Utils.parseDate(date2);

            if (!date1 || !date2) return false;
            if (date2 < date1) return false;
            // date is object, this modify could change original value
            // so we clone a new date
            date1 = new Date(date1.getTime());
            date2 = new Date(date2.getTime());
            //--先加 1 天，因为date1, date2自身包括在统计里;
            date2.setDate(date2.getDate() + 1);
            var diffYears = date2.getFullYear() - date1.getFullYear();
            var diffMonths = date2.getMonth() - date1.getMonth();
            if (diffMonths < 0) {
                diffYears--;
                diffMonths += 12;
            }
            var diffDays = date2.getDate() - date1.getDate();
            if (diffDays < 0) {
                diffMonths--;
                diffDays += Utils.calMonthDays(date2.getFullYear(), date2.getMonth() + 1);
            }
            if (diffDays > 28) {
                var monthDays = Utils.calMonthDays(date2.getYear(), date2.getMonth() + 1);
                var m = diffDays / monthDays;
                if (m >= 1) {
                    diffDays = diffDays % monthDays;
                    diffMonths += 1;
                    if (diffMonths / 12 >= 1) {
                        diffMonths = diffMonths % 12;
                        diffYears += 1;
                    }
                }
            }
            return { years: diffYears, months: diffMonths, days: diffDays };
        },
        calMonthDays: function (year, month) {
            // 统一用 30 天表示一个月；
            // return 30;
            switch (month) {
                case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                    return 31;
                case 4: case 6: case 9: case 11:
                    return 30;
                case 2:
                    if (Utils.isLeapYear(year)) return 29;
                    else return 28;
            }

        },
        compareDate: function (date1, date2) {
            // date1 >date2 return 1,date1 < date2 return 2,date1 == date2 return 3
            // other situation return null
            var d1 = Utils.parseDate(date1);
            var d2 = Utils.parseDate(date2);
            if (!d1 || !d2) {
                return null;
            }
            d1.setHours(0), d1.setMinutes(0), d1.setSeconds(0), d1.setMilliseconds(0);
            d2.setHours(0), d2.setMinutes(0), d2.setSeconds(0), d2.setMilliseconds(0);
            if (d1 > d2) return 1;
            if (d1 < d2) return 2;
            if (d1 - d2 < 3600000) return 3;
        },
        getGuid: function () {
            return new Date().getTime();
        },
        findObjIdxInArray: function (obj, arr, compareKeys) {
            for (var i = 0; i < arr.length; ++i) {

                //如果 comparekeys 未指定，则按引用来查找；
                if (compareKeys === undefined) {
                    if (obj == arr[i])
                        return i;
                } else {
                    var found = true;
                    for (var j = 0; j < compareKeys.length; ++j) {
                        // 如果是一个数组， indx 0  是表明 obj 的 key, index 1 是 arr 的 key 
                        if (Object.prototype.toString.call(compareKeys[j]) == '[object Array]') {
                            if (obj[compareKeys[j][0]] != arr[i][compareKeys[j][1]]) {
                                found = false;
                                break;
                            }
                        } else if (obj[compareKeys[j]] != arr[i][compareKeys[j]]) {
                            found = false;
                            break;
                        }

                        //if (arr[i][compareKeys[j]] !== obj[compareKeys[j]]) {
                        //    found = false;
                        //    break;
                        //}

                    }
                    if (found === true) {
                        return i;
                    }
                }
            }
            return -1;
        },
        findObjInArray: function (obj, arr, compareKeys) {
            var i = Utils.findObjIdxInArray(obj, arr, compareKeys);
            if (i < 0) return;
            return arr[i];
        },
        findObjArrInArray: function (obj, arr, compareKeys) {
            var newArr = [];
            if (!arr || arr.length === 0) return newArr;
            for (var i = 0; i < arr.length; ++i) {
                var found = true;
                if (compareKeys && compareKeys.length > 0) {
                    for (var j = 0; j < compareKeys.length; ++j) {
                        if (Utils.toString(arr[i][compareKeys[j]]) !== Utils.toString(obj[compareKeys[j]])) {
                            found = false;
                            break;
                        }
                    }
                }

                if (found)
                    newArr.push(arr[i]);
            }
            return newArr;
        },
        toString: function (obj) {
            if (obj === undefined || obj === null) obj = '';
            return obj.toString();
        },
        page: function () {
            var d = document, e = d.documentElement;
            return {
                scrollTop: function () { return d.body.scrollTop || e.scrollTop; },
                width: function () { return self.innerWidth || e.clientWidth; },
                height: function () { return self.innerHeight || e.clientHeight; },
                maxWidth: function () { return Math.max(Math.max(d.body.scrollWidth, e.scrollWidth), Math.max(d.body.clientWidth, e.clientWith)); },
                maxHeight: function () { return Math.max(Math.max(d.body.scrollHeight, e.scrollHeight), Math.max(d.body.clientHeight, e.clientHeight)) }
            };
        },
        isJson: function (objStr) {
            return /{.*}/.test(objStr || "");
        },
        wrapString: function (str) {
            //console.log(str + "");
            if (str == null || str == undefined)
                str = '';
            return str;
        },
        isIEBrowser: function () {
            return navigator.userAgent.toLowerCase().indexOf('chrome') < 0
             && navigator.userAgent.toLowerCase().indexOf('firefox') < 0
             && navigator.userAgent.toLowerCase().indexOf('safari') < 0;
        },
        limitArrLength: function (value) {//限制数组长度
            var length = 3;
            var array = new Array();
            var result = "";
            var temp = value + "";
            if (temp.indexOf(",") > 0) {
                array = temp.split(',');
                if (length > array.length) {
                    length = array.length;
                }
                for (var i = 0; i < length; i++) {
                    result += array[i] + ",";
                }
                return result;
            } else {
                return value;
            }
        }
    };
}();
