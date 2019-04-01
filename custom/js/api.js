// 接口基地址
var ajaxRoot,fileRoot;
if (document.location.host == 'h5.wdjky.com' || document.location.host == 'www.wdjky.com') {
	ajaxRoot = '/gw/'; // 生产环境
	fileRoot = '/healthcloud-file-public/'; // 文件上传基地址
} else {
	if (/wdjky.com/i.test(location.href)) {
		ajaxRoot = '/gw-te/'; // 预发 测试 qyj-re.wdjky.com 实际上只要域名中有wdjky.com 就会匹配上
		fileRoot = '/healthcloud-file-public-te/';
	} else {
		ajaxRoot = '/gw/'; // 本地代理/ip地址 如10.1.64.195
		fileRoot = '/healthcloud-file-public/';
	}
}

//请求地址
var ajaxUrl= {
	// userGetTokenByAuthCode :"http://10.1.64.194/healthcloud-shop-api/api/common/get_uid",
	userGetTokenByAuthCode : ajaxRoot + "shopUserGetTokenByAuthCode", // 根据code换token
	indexBanner :ajaxRoot + "shopCommonBanner", // 首页banner
	getAds:ajaxRoot + "shopCommonSecondAds",//小banner
	expressArticles : ajaxRoot + "shopMallExpressList", // 首页快讯
	specialArea:ajaxRoot + "shopGoodsNewPubList", // 首页专区
	indexGoods : ajaxRoot + "shopGoodsClassifyList",
	adressList: ajaxRoot + "shopAddressList", // 地址列表
	updateAddress:ajaxRoot + 'shopAddressUpdate', // 更新地址
	getRegion:ajaxRoot + "shopCommonRegion",//获取区域
	addAddress:ajaxRoot + "shopAddreeAdd",//添加地址
	addressDetail:ajaxRoot + "shopAddressDetail",//地址详情
	expressDetail:ajaxRoot + "shopMallExpressDetail",//快讯详情
	carList:ajaxRoot + "shopShopCarList",//购物车列表
	deleteGoods:ajaxRoot + "shopShopCarDelete",//删除购物车商品
	shopCarChangeNum:ajaxRoot + "shopCarChangeNum",
	goodsList:ajaxRoot + "shopGoodsList",
	shopShipTypeList:ajaxRoot + "shopShipTypeList",
	commentList:ajaxRoot + "shopGoodsCommentList",
	getGoodDetail:ajaxRoot + "shopGoodsDetail",
	addToFav:ajaxRoot + "shopCollectAdd",
	cancelFav:ajaxRoot + "shopCollectCancel",
	getDefAddress: ajaxRoot + "shopAddressDefault", // 获取默认地址
	createOrder:ajaxRoot + "shopOrderCreate",//创建订单
	paymentAgent:ajaxRoot +"paymentAgent",//新支付代理
	paymentInfo:ajaxRoot +"paymentInfo",//查询商户支持哪些支付方式
	queryPayStatus:ajaxRoot +"shopPaymentPayStatus",//单项目查询接口
	// queryPayStatusCommon:ajaxRoot +"queryPayStatus",//公共查询
	payAgentQueryPayStatus:ajaxRoot +"payAgentQueryPayStatus",
	payAgentPayNotifyStatus:ajaxRoot +"payAgentPayNotifyStatus",//新接口，查询支付状态
	sendPayStatus:ajaxRoot +"shopPaymentsCallback",
	createPay:ajaxRoot +"shopPaymentsCreate",
	getHadBuyNum:ajaxRoot + "shopGoodsHadBuyNum",//已购买数量
	getCarNum:ajaxRoot + "shopCarGetNum",//购物车中该商品数量//待加接口
	addToCar:ajaxRoot + "shopShopCarAdd",//加入购物车
	isFav:ajaxRoot + "shopCollectHad",//是否收藏了
	shopCollectList:ajaxRoot + "shopCollectList",//收藏列表
	shopAddressDelete:ajaxRoot + "shopAddressDelete",

	// 我的订单
	orderList : ajaxRoot + 'shopOrderList', // 订单列表
	orderDeail : ajaxRoot + 'shopOrderDetail', // 订单详情
	orderCancel : ajaxRoot + 'shopOrderCancel', // 取消订单
	orderRecv : ajaxRoot + 'shopOrderRecv', // 确认收货
	orderDelete : ajaxRoot + 'shopOrderDelete', // 删除订单
	invoiceAdd : ajaxRoot + 'shopInvoiceAdd', // 申请发票
	invoiceDetail : ajaxRoot + 'shopInvoiceDetail', // 发票详情
	commentAdd : ajaxRoot + 'shopCommentAdd', // 添加评论
	commonRefund : ajaxRoot + 'shopCommonRefund', // 退货根据退货类型获取原因
	refundAdd : ajaxRoot + 'shopRefundAdd', // 添加退款退货申请
	refundList : ajaxRoot + 'shopRefundList', // 退款退货（售后）列表
	refundDetail : ajaxRoot + 'shopRefundDetail', // 退款详情
	refundCancel : ajaxRoot + 'shopRefundCancel', // 撤销退款申请
	refundUpdate : ajaxRoot + 'shopRefundUpdate', // 修改退款退货申请
	expressList : ajaxRoot + 'shopExpressList', // 物流公司列表
	updateShip : ajaxRoot + 'shopRefundUpdateShip', // 提交退货物流
	getFileId : ajaxRoot + 'shopFileGetFileId', // 获取文件fileId
	getUrl : ajaxRoot + 'shopFileGetUrl', // 获取文件图片地址
	uploadPicFile : fileRoot + 'api/ossFile/uploadPicFile' // 文件上传
};