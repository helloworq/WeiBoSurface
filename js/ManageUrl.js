//定义一些全局的url
var switcher=107

var url_getMainPageInfo
var url_getFriendMoment;
var url_fileUpload;
var url_like;
var url_collect;
var url_addCookie
var url_getCookie

var url_getFriendMoment_107 = 'http://192.168.1.107:6729/v1/rest/getFriendMoment'
var url_getFriendMoment_223 = 'http://192.168.2.223:6729/v1/rest/getFriendMoment'

var url_getMainPageInfo_107 = 'http://192.168.1.107:6729/v1/rest/getMainPageInfo'
var url_getMainPageInfo_223 = 'http://192.168.2.223:6729/v1/rest/getMainPageInfo'

var url_fileUpload_107 = 'http://192.168.1.107:6729/v1/rest/fileUpload'
var url_fileUpload_223 = 'http://192.168.2.223:6729/v1/rest/fileUpload'

var url_like_107 = 'http://192.168.1.107:6729/v1/rest/like'
var url_like_223 = 'http://192.168.2.223:6729/v1/rest/like'

var url_collect_107 = 'http://192.168.1.107:6729/v1/rest/collect'
var url_collect_223 = 'http://192.168.2.223:6729/v1/rest/collect'

var url_addCookie_107 = 'http://192.168.1.107:6729/v1/rest/addCookie'
var url_addCookie_223 = 'http://192.168.2.223:6729/v1/rest/addCookie'

var url_getCookie_107 = 'http://192.168.1.107:6729/v1/rest/getCookie'
var url_getCookie_223 = 'http://192.168.2.223:6729/v1/rest/getCookie'

if (switcher===107){
    url_getMainPageInfo=url_getMainPageInfo_107
    url_getFriendMoment=url_getFriendMoment_107
    url_fileUpload = url_fileUpload_107
    url_like = url_like_107
    url_collect=url_collect_107
    url_addCookie=url_addCookie_107
    url_getCookie=url_getCookie_107
}
if (switcher===223){
    url_getMainPageInfo=url_getMainPageInfo_223
    url_getFriendMoment=url_getFriendMoment_223
    url_fileUpload = url_fileUpload_223
    url_like = url_like_223
    url_collect=url_collect_223
    url_addCookie=url_addCookie_223
    url_getCookie=url_getCookie_223
}