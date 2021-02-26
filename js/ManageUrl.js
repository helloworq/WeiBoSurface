//定义一些全局的url
var switcher=124

var url_getFriendMoment_107 = 'http://192.168.1.107:8081/v1/rest/getFriendMoment'
var url_getFriendMoment_124 = 'http://192.168.2.124:8081/v1/rest/getFriendMoment'

var url_getMainPageInfo_107 = 'http://192.168.1.107:8081/v1/rest/getMainPageInfo'
var url_getMainPageInfo_124 = 'http://192.168.2.124:8081/v1/rest/getMainPageInfo'

var url_fileUpload_107 = 'http://192.168.1.107:8081/v1/rest/fileUpload'
var url_fileUpload_124 = 'http://192.168.2.124:8081/v1/rest/fileUpload'

var url_like_107 = 'http://192.168.1.107:8081/v1/rest/like'
var url_like_124 = 'http://192.168.2.124:8081/v1/rest/like'

var url_collect_107 = 'http://192.168.1.107:8081/v1/rest/collect'
var url_collect_124 = 'http://192.168.2.124:8081/v1/rest/collect'

var url_addCookie_107 = 'http://192.168.1.107:8081/v1/rest/addCookie'
var url_addCookie_124 = 'http://192.168.2.124:8081/v1/rest/addCookie'
var url_getComment_107 = 'http://192.168.1.107:8081/v1/rest/getComment'
var url_getComment_124 = 'http://192.168.2.124:8081/v1/rest/getComment'
var url_getCookie_107 = 'http://192.168.1.107:8081/v1/rest/getCookie'
var url_getCookie_124 = 'http://192.168.2.124:8081/v1/rest/getCookie'

var url_sendComment_107 = 'http://192.168.1.107:8081/v1/rest/sendComment'
var url_sendComment_124 = 'http://192.168.2.124:8081/v1/rest/sendComment'

var url_getMainPageInfo
var url_getFriendMoment;
var url_fileUpload;
var url_like;
var url_collect;
var url_addCookie
var url_getCookie
var url_getComment
var url_sendComment

if (switcher===107){
    url_getMainPageInfo=url_getMainPageInfo_107
    url_getFriendMoment=url_getFriendMoment_107
    url_fileUpload = url_fileUpload_107
    url_like = url_like_107
    url_collect=url_collect_107
    url_addCookie=url_addCookie_107
    url_getCookie=url_getCookie_107
    url_getComment=url_getComment_107
    url_sendComment=url_sendComment_107
}
if (switcher===124){
    url_getMainPageInfo=url_getMainPageInfo_124
    url_getFriendMoment=url_getFriendMoment_124
    url_fileUpload = url_fileUpload_124
    url_like = url_like_124
    url_collect=url_collect_124
    url_addCookie=url_addCookie_124
    url_getCookie=url_getCookie_124
    url_getComment=url_getComment_124
    url_sendComment=url_sendComment_124
}