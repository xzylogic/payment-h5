/* 原型方法扩展 */
String.prototype.format = function(args) {
	var result = this;
	if (arguments.length > 0) {
		if (arguments.length == 1 && typeof(args) == "object") {
			for (var key in args) {
				if (args[key] != undefined) {
					var reg = new RegExp("({" + key + "})", "g");
					result = result.replace(reg, args[key]);
				}
			}
		} else {
			for (var i = 0; i < arguments.length; i++) {
				if (arguments[i] != undefined) {
					var reg = new RegExp("({)" + i + "(})", "g");
					result = result.replace(reg, arguments[i]);
				}
			}
		}
	}
	return result;
};

Date.prototype.Format = function(fmt) { //author: meizz
	var o = {
		"M+": this.getMonth() + 1,
		//月份
		"d+": this.getDate(),
		//日
		"h+": this.getHours(),
		//小时
		"m+": this.getMinutes(),
		//分
		"s+": this.getSeconds(),
		//秒
		"q+": Math.floor((this.getMonth() + 3) / 3),
		//季度
		"S": this.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
	if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
};


/* 公共类 */
var custom = {
	//获取没有数据DOM
    getNoneDataImg:function(text,top) {
        if (text == undefined || text.length == 0) text = '没有数据';
        if(top==undefined || top.length==0)top=50;
        var imgHtml = '<div class="none-data">\n' +
            '                <img src="../custom/images/no-data.png" style="margin-top: '+top+'%"/>\n' +
            '                <p>' + text + '</p>\n' +
            '            </div>';
        return imgHtml;
    },
	
	// 日期格式化
	getFormatDate: function(timestamp) {
		
		var dateObj = new Date(timestamp);
		var y = dateObj.getFullYear();
		var m = dateObj.getMonth() + 1;
		var d = dateObj.getDate();
		var h = dateObj.getHours();
		var min = dateObj.getMinutes();
		var s = dateObj.getSeconds();

		var currentdate = y + '-' + custom.formatNum(m) + '-' + custom.formatNum(d) + ' ' + custom.formatNum(h) + ':' + custom.formatNum(min) + ':' + custom.formatNum(s);

		return currentdate;
	},
	
	// 个位加0显示
	formatNum: function(num) {
		num = num < 10 ? '0' + num : num;
		return num;
	},

	// 校验手机号码
	judgePhone: function(phone) {

		var reg = /^1\d{10}$/;

		if (reg.test(phone)) {
			return true;
		} else {
			return false;
		}

	},

	// 校验身份证号码
	judgeIDCode: function(code) {

		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

		if (reg.test(code)) {
			return true;
		} else {
			return false;
		}
	},

	// 通过身份证号码获取出生年月日
	getBirthdayFromIdCard: function(idCard) {
		var birthday = "";
		if (idCard != null && idCard != "") {
			if (idCard.length == 15) {
				birthday = "19" + idCard.substr(6, 6);
			} else if (idCard.length == 18) {
				birthday = idCard.substr(6, 8);
			}

			birthday = birthday.replace(/(.{4})(.{2})/, "$1-$2-");
		}

		return birthday;
	}
	
// 	// 示例
// 	custom.beAnalysis('click', 'page_zzjd_dzxx', 'button_syb', uid, false, {token : token, channelCode : channelCode, lightAppCode : lightAppCode, timestamp : new Date().getTime()});
// 	// 行为日志 埋点请求
// 	// _beforeSendObj Petu添加
// 	beAnalysis: function(_event, _page, _module, _uid, _additionalObj, _beforeSendObj) {
// 		
// 		try {
// 			var time = new Date().Format("yyyy-MM-dd hh:mm:ss");
// 			var param = {
// 				action: {
// 					event: _event,
// 					page: _page,
// 					module: _module,
// 					actionTime: time,
// 					uid: _uid,
// 					additional: {
// 						platform: 'jky',
// 						id: ""
// 					}
// 				}
// 			}
// 			if (_additionalObj) {
// 				for (key in _additionalObj) {
// 					param.action.additional[key] = _additionalObj[key]
// 				}
// 			}
// 			
// 			var headerAnalysis = {
// 					"platform": "2", // h5 = 2
// 					"model": "", // ???
// 					"os-version": "", // 操作系统
// 					"main-area": "", // 市级
// 					"device": "", // 设备型号
// 					"spec-area": "", // 区级行政区
// 					"screen-height": "", // 
// 					"channel": "10006", // 品牌渠道
// 					"screen-width": "", // 
// 					"app-version": "", // app
// 					"version": "" // 1.0.0
// 			};
// 			// 此处的 本地存取等操作 是用于app中 主要从原生获取 现微信直接写 参数尽量写
// 			// localStorage.setItem('headerAnalysis', JSON.stringify(headerAnalysis));
// 			// var headerAnalysis = localStorage.getItem('headerAnalysis')
// 			// if (headerAnalysis && headerAnalysis.length > 0) {
// 				// headerAnalysis = JSON.parse(header);
// 				headerAnalysis.timestamp = _beforeSendObj.timestamp; //添加时间戳
// 
// 				$.ajax({
// 					url: ajaxUrl.logAction,
// 					type: "POST",
// 					headers: headerAnalysis,
// 					beforeSend: function(request) {
// 						request.setRequestHeader('token', _beforeSendObj.token);
// 						request.setRequestHeader("channelCode", _beforeSendObj.channelCode);
// 						request.setRequestHeader("lightAppCode", _beforeSendObj.lightAppCode);
// 						request.setRequestHeader('timestamp', _beforeSendObj.timestamp);
// 					},
// 					contentType: "application/json; charset=utf-8",
// 					data: JSON.stringify(param),
// 					dataType: "json",
// 					success: function(data) {
// 						console.log(data);
// 						//alert(JSON.stringify(data))
// 					},
// 					error: function(err) {
// 						console.log(err);
// 						//alert(JSON.stringify(err))
// 						if (err.status == 404) alert('404 : ' + JSON.stringify(err)); //404时给提示
// 					}
// 				})
// 			// }
// 		} catch (e) {
// 			console.log(e);
// 		}
// 	}
	
};

/* 公共函数 */
// 初始化地址选择
function addressIOSelectInit(selectDom, showDom) {
	
    selectDom.addEventListener('click', function () {
        var iosSelect = new IosSelect(3, 
            [iosProvinces, iosCitys, iosCountys],
            {
                title: '地址选择',
                itemHeight: 40,
                relation: [1, 1],
                oneLevelId: showDom.dataset['province'],
                twoLevelId: showDom.dataset['city'],
                threeLevelId: showDom.dataset['district'],
                callback: function (selectOneObj, selectTwoObj, selectThreeObj) {
					
					showDom.dataset['province'] = selectOneObj.id;
					showDom.dataset['city'] = selectTwoObj.id;
					showDom.dataset['district'] = selectThreeObj.id;
					
                    showDom.innerText = (selectOneObj.value + ' ' + selectTwoObj.value + ' ' + selectThreeObj.value);
                }
        });
    });
};

// 初始化日期选择 yLimit年数限制
function dateIOSelectInit(yLimit) {
	
	var selectDateDom = document.querySelector('#selectDate');
    var showDateDom = document.querySelector('#showDate');
	var showDate = showDateDom.innerText;
    // 当前时间
    var now = new Date();
	var nowYear = now.getFullYear();
	var nowMonth = now.getMonth() + 1;
	var nowDay = now.getDate();
	// 默认当天
    showDateDom.dataset['year'] = nowYear;
    showDateDom.dataset['month'] = nowMonth;
    showDateDom.dataset['date'] = nowDay;
	// 是否有初始日期
	if (showDate.length == 10) {
		
		var dateArr = showDate.split('-');
		showDateDom.dataset['year'] = dateArr[0] * 1;
		showDateDom.dataset['month'] = dateArr[1] * 1;
		showDateDom.dataset['date'] = dateArr[2] * 1;
	};
	// 个位加0显示
	function formatNum(num) {
		num = num < 10 ? '0' + num : num;
		return num;
	};
    // 数据初始化
    function formatYear(nowYear) {
        var arr = [];
		
		if (yLimit == 18) {
			// 选择儿童出生日期 即小于18岁
			for (var i = nowYear - 18; i <= nowYear; i++) {
				arr.push({
					id: i + '',
					value: i + '年'
				});
			}
		};
		
		if (yLimit == 2) {
			// 设置接种日期 未来两年 加3
			for (var i = nowYear; i < nowYear + 3; i++) {
				arr.push({
					id: i + '',
					value: i + '年'
				});
			}
		};
		
        return arr;
    };
    function formatMonth(m, isAfter) {
        var arr = [];
		var n = isAfter ? m : 1;
		var len = isAfter ? 12 : m;
        for (var i = n; i <= len; i++) {
            arr.push({
                id: i + '',
                value: i + '月'
            });
        }
        return arr;
    };
    function formatDate(d, cd, isAfter) {
        var arr = [];
		var n = isAfter ? d : 1;
		var len = isAfter ? cd : d;
        for (var i = n; i <= len; i++) {
            arr.push({
                id: i + '',
                value: i + '日'
            });
        }
        return arr;
    }
    var yearData = function(callback) {
		callback(formatYear(nowYear))
    }
    var monthData = function(year, callback) {
		var m = 1; // 默认为 一月
		var isAfter = true; // 默认为 传入月份之后
		
		if (yLimit == 18) {
			if (year == (nowYear - 18)) {
				m = nowMonth;
			};
			if (year == nowYear) {
				m = nowMonth;
				isAfter = false;
			};
		};
		
		if (yLimit == 2) {
			if (year == (nowYear + 2)) {
				m = nowMonth;
				isAfter = false;
			};
			if (year == nowYear) {
				m = nowMonth;
			};
		};
		
		callback(formatMonth(m, isAfter));
    };
    var dateData = function(year, month, callback) {
		var d = 28; // 默认为 平年二月天数
		var cd = 28; // month实际天数
		var isAfter = false; // 默认为 传入日期之前
		
		if (/^(1|3|5|7|8|10|12)$/.test(month)) {
			d = 31;
			cd = 31;
		} else if (/^(4|6|9|11)$/.test(month)) {
			d = 30;
			cd = 30;
		} else if (/^2$/.test(month)) {
			if (year % 4 === 0 && year % 100 !==0 || year % 400 === 0) {
				d = 29;
				cd = 29;
			};
		};
		
		if (yLimit == 18 && month == nowMonth) {
			if (year == (nowYear - 18)) {
				d = nowDay;
				isAfter = true;
			};
			if (year == nowYear) {
				d = nowDay;
			};
		};
		
		if (yLimit == 2 && month == nowMonth) {
			if (year == (nowYear + 2)) {
				d = nowDay;
			};
			if (year == nowYear) {
				d = nowDay;
				isAfter = true;
			};
		};
		
		callback(formatDate(d, cd, isAfter));
    };
    selectDateDom.addEventListener('click', function () {
        var iosSelect = new IosSelect(3, 
            [yearData, monthData, dateData],
            {
                title: '请选择日期',
                itemHeight: 40,
                oneLevelId: showDateDom.dataset['year'],
                twoLevelId: showDateDom.dataset['month'],
                threeLevelId: showDateDom.dataset['date'],
                // showLoading: true,
                callback: function (selectOneObj, selectTwoObj, selectThreeObj) {
					
					showDateDom.dataset['year'] = selectOneObj.id;
					showDateDom.dataset['month'] = selectTwoObj.id;
					showDateDom.dataset['date'] = selectThreeObj.id;
					showDateDom.innerText = selectOneObj.id + '-' + formatNum(selectTwoObj.id) + '-' + formatNum(selectThreeObj.id);
					showDateDom.style.color = 'rgb(51, 51, 51)';
                }
        });
    });
};

// 初始化加载
function initloading() {
	$("body").append(
		'<div id="myloadingCover" style="position: absolute"></div><div id="myloading"><img src="../custom/images/loading.gif" /><span>努力加载中...</span></div>'
	);
	$("#myloading").css(cssObj1);
	$("#myloading img").css(cssObj2);
	$("#myloading span").css(cssObj3);
	$('[data-dpr="2"] #myloading').css(cssObj4);
	$('[data-dpr="3"] #myloading').css(cssObj5);
	$("#myloadingCover").css(cssObj6);
};

// 显示加载
function showMyloading() {
	var loading = document.querySelector('#myloading');
	(loading == null || loading == undefined) && initloading();

	$("#myloading").css("display", "block");
	$("#myloadingCover").css("display", "block");
};

// 隐藏加载
function hideMyloading() {
	$("#myloading").css("display", "none");
	$("#myloadingCover").css("display", "none");
};

// css数据模版 加载用
var cssObj1 = {
	"width": "100%",
	"min-height": "2.666667rem",
	"text-align": "center",
	"position": "absolute",
	"top": "50%",
	"margin-top": "-3rem",
	"z-index": "99999",
	"display": "none"
};

var cssObj2 = {
	"display": "inline-block",
	"width": "2.666667rem",
	"height": "auto"
};

var cssObj3 = {
	"display": "block",
	"font-size": "14px",
	"color": "#999"
};

var cssObj4 = {
	"font-size": "28px"
};

var cssObj5 = {
	"font-size": "42px"
};

var cssObj6 = {
	"position": "absolute",
	"top": "0",
	"left": "0",
	"height": "100%",
	"width": "100%",
	"background-color": "#FFFFFF",
	"opacity": ".1",
	"z-index": "9999"
};


/* weui 精简 */
$.fn.transitionEnd = function(callback) {
    var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
    i,
    dom = this;

    function fireCallBack(e) {
        /*jshint validthis:true */
        if (e.target !== this) return;
        callback.call(this, e);
        for (i = 0; i < events.length; i++) {
            dom.off(events[i], fireCallBack);
        }
    }
    if (callback) {
        for (i = 0; i < events.length; i++) {
            dom.on(events[i], fireCallBack);
        }
    }
    return this;
};

/* weui 弹框 */
var defaults;

$.modal = function(params, onOpen) {
	params = $.extend({},
	defaults, params);

	var buttons = params.buttons;

	var buttonsHtml = buttons.map(function(d, i) {
		return '<a href="javascript:;" class="weui-dialog__btn ' + (d.className || "") + '">' + d.text + '</a>';
	}).join("");

	var tpl = '<div class="weui-dialog">' + '<div class="weui-dialog__hd"><strong class="weui-dialog__title">' + params.title + '</strong></div>' + (params.text ? '<div class="weui-dialog__bd">' + params.text + '</div>': '') + '<div class="weui-dialog__ft">' + buttonsHtml + '</div>' + '</div>';

	var dialog = $.openModal(tpl, onOpen);

	dialog.find(".weui-dialog__btn").each(function(i, e) {
		var el = $(e);
		el.click(function() {
			//先关闭对话框，再调用回调函数
			if (params.autoClose) $.closeModal();

			if (buttons[i].onClick) {
				buttons[i].onClick.call(dialog);
			}
		});
	});

	return dialog;
};

$.openModal = function(tpl, onOpen) {
	var mask = $("<div class='weui-mask'></div>").appendTo(document.body);
	mask.show();

	var dialog = $(tpl).appendTo(document.body);

	if (onOpen) {
		dialog.transitionEnd(function() {
			onOpen.call(dialog);
		});
	}

	dialog.show();
	mask.addClass("weui-mask--visible");
	dialog.addClass("weui-dialog--visible");

	return dialog;
}

$.closeModal = function() {
	$(".weui-mask--visible").removeClass("weui-mask--visible").transitionEnd(function() {
		$(this).remove();
	});
	$(".weui-dialog--visible").removeClass("weui-dialog--visible").transitionEnd(function() {
		$(this).remove();
	});
};

$.alert = function(text, title, onOK) {
	var config;
	if (typeof text === 'object') {
		config = text;
	} else {
		if (typeof title === 'function') {
			onOK = arguments[1];
			title = undefined;
		}

		config = {
			text: text,
			title: title,
			onOK: onOK
		}
	}
	return $.modal({
		text: config.text,
		title: config.title,
		buttons: [{
			text: defaults.buttonOK,
			className: "primary",
			onClick: config.onOK
		}]
	});
}

// $.confirm = function(text, title, onOK, onCancel) {
// 	var config;
// 	if (typeof text === 'object') {
// 		config = text
// 	} else {
// 		if (typeof title === 'function') {
// 			onCancel = arguments[2];
// 			onOK = arguments[1];
// 			title = undefined;
// 		}
// 
// 		config = {
// 			text: text,
// 			title: title,
// 			onOK: onOK,
// 			onCancel: onCancel
// 		}
// 	}
// 	return $.modal({
// 		text: config.text,
// 		title: config.title,
// 		buttons: [{
// 			text: defaults.buttonCancel,
// 			className: "default",
// 			onClick: config.onCancel
// 		},
// 		{
// 			text: defaults.buttonOK,
// 			className: "primary",
// 			onClick: config.onOK
// 		}]
// 	});
// };

defaults = $.modal.prototype.defaults = {
    title: "提示",
    text: undefined,
    buttonOK: "确定",
    buttonCancel: "取消",
    buttons: [{
        text: "确定",
        className: "primary"
    }],
    autoClose: true //点击按钮自动关闭对话框，如果你不希望点击按钮就关闭对话框，可以把这个设置为false
};

/* weui toast */
var timeout;

$.toptip = function(text, duration, type) {
	if (!text) return;
	if (typeof duration === typeof "a") {
		type = duration;
		duration = undefined;
	}
	duration = duration || 3000;
	var className = type ? 'bg-' + type: 'bg-danger';
	var $t = $('.weui-toptips').remove();
	$t = $('<div class="weui-toptips"></div>').appendTo(document.body);
	$t.html(text);
	$t[0].className = 'weui-toptips ' + className

	clearTimeout(timeout);

	if (!$t.hasClass('weui-toptips_visible')) {
		$t.show().width();
		$t.addClass('weui-toptips_visible');
	}

	timeout = setTimeout(function() {
		$t.removeClass('weui-toptips_visible').transitionEnd(function() {
			$t.remove();
		});
	},
	duration);
};

/* weui Toast  */
var show = function(html, className) {
    className = className || "";
    var mask = $("<div class='weui-mask_transparent'></div>").appendTo(document.body);

    var tpl = '<div class="weui-toast ' + className + '">' + html + '</div>';
    var dialog = $(tpl).appendTo(document.body);

    dialog.addClass("weui-toast--visible");
    dialog.show();
};

var hide = function(callback) {
    $(".weui-mask_transparent").remove();
    var done = false;
    var $el = $(".weui-toast--visible").removeClass("weui-toast--visible").transitionEnd(function() {
        var $this = $(this);
        $this.remove();
        callback && callback();
        done = true
    });

    setTimeout(function() {
        if (!done) {
            $el.remove();
			callback && callback();
        }
    },
    1000)
}

$.toast = function(text, style, callback) {
    if (typeof style === "function") {
        callback = style;
    }
    var className, iconClassName = 'weui-icon-success-no-circle';
    var duration = toastDefaults.duration;
    if (style == "cancel") {
        className = "weui-toast_cancel";
        iconClassName = 'weui-icon-cancel'
    } else if (style == "forbidden") {
        className = "weui-toast--forbidden";
        iconClassName = 'weui-icon-warn'
    } else if (style == "text") {
        className = "weui-toast--text";
    } else if (typeof style === typeof 1) {
        duration = style
    }
    show('<i class="' + iconClassName + ' weui-icon_toast"></i><p class="weui-toast_content">' + (text || "已经完成") + '</p>', className);

    setTimeout(function() {
        hide(callback);
    },
    duration);
}

// $.showLoading = function(text) {
//     var html = '<div class="weui_loading">';
//     html += '<i class="weui-loading weui-icon_toast"></i>';
//     html += '</div>';
//     html += '<p class="weui-toast_content">' + (text || "数据加载中") + '</p>';
//     show(html, 'weui_loading_toast');
// }
// 
// $.hideLoading = function() {
//     hide();
// }

var toastDefaults = $.toast.prototype.defaults = {
    duration: 2500
}

Element.prototype.removeClass = function (name) {
    var classs = this.className.split(" ");
    var index = classs.indexOf(name);
    var currentClass = "";
    if (index < 0) return;
    classs[index] = "";
    classs.map(function (item) { currentClass = currentClass + item + " " });
    this.className = currentClass;
}
Element.prototype.addClass = function (name) {
    this.className = this.className + " " + name;
}
//百度坐标转高德（传入经度、纬度）
function bd_decrypt(bd_lng, bd_lat) {
	var X_PI = Math.PI * 3000.0 / 180.0;
	var x = bd_lng - 0.0065;
	var y = bd_lat - 0.006;
	var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * X_PI);
	var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * X_PI);
	var gg_lng = z * Math.cos(theta);
	var gg_lat = z * Math.sin(theta);
	return {lng: gg_lng, lat: gg_lat}
}

// 底部按钮 android兼容
// pageData.oHeight = $(document).height(); //浏览器当前的高度
// $(window).resize(function() {
// 	if ($(document).height() < pageData.oHeight) {
// 		$(".footer").css("position", "static")
// 	} else {
// 		$(".footer").css("position", "absolute")
// 	}
// });