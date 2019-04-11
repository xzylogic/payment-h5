var cssObj1={
    "width": "50vw",
    "text-align": "center",
    "background-color": "rgba(0,0,0,0.7)",
    "color": "#fff",
    "border-radius": "0.266667rem",
    "position": "absolute",
    "line-height": "1.5",
    "top": "40vh",
    "left": "25vw",
    "z-index": "999999",
    "font-size": "16px",
    "display": "table-cell",
    "box-sizing":"border-box",
    "-moz-box-sizing":"border-box",
    "-webkit-box-sizing":"border-box",
    "vertical-align": "middle",
    "padding": "0.266667rem 0.4rem",
}

var cssObj2={
    "font-size": "32px",
}

var cssObj3={
    "font-size": "48px",
}

$(function () {
    $("body").append('<div class="mytip">网络异常，请稍候重试或重新登录</div>');
    $(".mytip").css(cssObj1);
    $('[data-dpr="2"] .mytip').css(cssObj2);
    $('[data-dpr="3"] .mytip').css(cssObj3);
    $(".mytip").hide()
})
function showMyTip() {
    $(".mytip").show()
    setTimeout(hideMyTip,1500)
}
function showMyTipLong() {
    $(".mytip").show()
    setTimeout(hideMyTip,2500)
}
function hideMyTip() {
    $(".mytip").html("网络异常，请稍候重试或重新登录")
    $(".mytip").hide()
}

(function () {
    var cssObj1={
        "width":"100%",
        "min-height":"2.666667rem",
        "text-align": "center",
        "position": "absolute",
        "top":"40vh",
        "z-index":"99999999",
        "display": "none"
    }

    var cssObj2={
        "display": "inline-block",
        "width":"2.666667rem",
        "height": "auto",
        "z-index":"99999999"
    }

    var cssObj3={
        "display": "block",
        "font-size": "14px",
        "color": "#999",
        "z-index":"99999999"
    }

    var cssObj4={
        "font-size": "28px"
    }

    var cssObj5={
        "font-size": "42px"
    }

    $(function () {
        $("body").append('<div id="myloading"><img src="../custom/images/loading.gif" /><span>努力加载中...</span></div>');
        $("#myloading").css(cssObj1);
        $("#myloading img").css(cssObj2);
        $("#myloading span").css(cssObj3);
        $('[data-dpr="2"] #myloading').css(cssObj4);
        $('[data-dpr="3"] #myloading').css(cssObj5);
    })
})()
function showMyloading() {
    $("#myloading").css("display","block")
}
function hideMyloading() {
    $("#myloading").css("display","none")
}
function is_weixn_qq(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger\/[0-9]/i)){
        return "weixin";
    }
//          else if(ua.match(/QQ\/[0-9]/i)){
//              return "QQ";
//          }
    return false;
}
function formatMsg(msg) {
    switch (msg){
        case "ERROR_00001":
            return "post提交内容为空";
            break;
        case "ERROR_00002":
            return "上传json内容格式有误";
            break;
        case "ERROR_00003":
            return "卡号为空";
            break;
        case "ERROR_00004":
            return "卡类型为空";
            break;
        case "ERROR_00005":
            return "注册设备Id为空";
            break;
        case "ERROR_00006":
            return "设备编号为空";
            break;
        case "ERROR_00007":
            return "厂商ID为空";
            break;
        case "ERROR_00008":
            return "未知卡类型";
            break;
        case "ERROR_00009":
            return "未查询到对应的健康云居民信息";
            break;
        case "ERROR_00010":
            return "设备未审核";
            break;
        case "ERROR_00011":
            return "设备未注册";
            break;
        case "ERROR_00012":
            return "设备已存在绑定关系";
            break;
        case "ERROR_00013":
            return "设备与居民绑定关系不存在（设备解绑时不存在绑定关系提示）";
            break;
        case "ERROR_90001":
            return "调用查询绑定设备列表接口发生异常";
            break;
        case "ERROR_90002":
            return "调用我绑定设备信息接口发生异常";
            break;
        case "ERROR_90003":
            return "调用设备详情接口发生异常";
            break;
        case "ERROR_90004":
            return "调用设备解绑接口发生异常";
            break;
        case "ERROR_90005":
            return "调用设备绑定接口发生异常";
            break;
        default:
            return msg;
    }
}