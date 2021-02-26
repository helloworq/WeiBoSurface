//加载动态上传窗口
var files;

//动态上传方法
function loadPostMoment() {
    layui.use('layer', function () {
        var layer = layui.layer;
        layer.open({
            type: 1
            , content:
                '<div id="box">\n' +
                '    <div id="header">\n' +
                '        <p id="header_font">有什么新鲜事想告诉大家？</p>\n' +
                '    </div>\n' +
                '    <div id="second">\n' +
                '        <p id="second_count">已输入i字</p>\n' +
                '    </div>\n' +
                '    <div id="thirth">\n' +
                '        <textarea id="header_textarea"></textarea>\n' +
                '    </div>\n' +
                '    <div class="layui-upload" style="float: left;margin-top: 10px;height: 260px">\n' +
                '        <blockquote class="layui-elem-quote layui-quote-nm">\n' +
                '            预览图：\n' +
                '            <div class="layui-upload-list" id="demo2"></div>\n' +
                '        </blockquote>\n' +
                '    </div>\n' +
                '    <div id="fourth" style="float: right">\n' +
                '        <button type="button" class="layui-btn" id="test9" style="float: right;margin-right: 10px;margin-left: 10px">开始上传</button>\n' +
                '        <button type="button" class="layui-btn layui-btn-normal" id="test8" style="float: right">选择文件</button>\n' +
                '<!--        <button id="header_bt" type="button" class="layui-btn layui-btn-danger">发送动态</button>-->\n' +
                '    </div>\n' +
                '</div>'
            , area: ['520px', '570px']//控制长宽
            , success: function () {
                layui.use('upload', function () {
                    var $ = layui.jquery
                        , upload = layui.upload;
                    upload.render({
                        elem: '#test8'
                        , auto: false
                        , multiple: true
                        , choose: function (obj) {
                            files = this.files = obj.pushFile(); //将每次选择的文件追加到文件队列
                            //预读本地文件示例，不支持ie8
                            obj.preview(function (index, file, result) {
                                $('#demo2').append('<img src="' + result + '" alt="' + file.name + '" class="layui-upload-img" style="width: 100px;height: 100px;margin-right: 10px">')
                            });
                        }
                        , done: function (res) {
                            layer.msg('上传成功');
                            console.log(res)
                        }
                    });
                });
                //上传点击事件
                $("#test9").on("click", function () {
                    var form = new FormData();
                    for (let i in files) {
                        form.append("file", files[i]);
                    }
                    form.append("momentContentWords", $('#header_textarea').val())
                    form.append("userDevice", 'ipone12')
                    form.append("isEdit", 0)
                    $.ajax({
                        url: url_fileUpload,
                        type: "post",
                        dataType: "json",
                        async: false,
                        xhrFields: {withCredentials: true},
                        crossDomain: true,
                        contentType: false,
                        processData: false,
                        data: form,
                        success: function (result) {
                            if (result.code == 200) {
                                layer.msg("上传成功！", {icon: 6});
                                ifclose();
                            } else if (result.code == 500) {
                                layer.msg(result.msg, {icon: 5});
                            }
                        }
                    })
                });
            }
        });
    });
}

//页面初始化时加载全部数据方法
function getMainPageInfo(url) {
    $.ajax({
        url: url,//此接口会当前用户的cookie返回所有动态
        type: "get",
        dataType: "json",
        async: false,
        xhrFields: {withCredentials: true},
        crossDomain: true,
        contentType: false,
        processData: false,
        success: function (result) {
            var moments = result.data.userMomentInfoList;
            var res = [];
            for (var i in moments) {
                var elemet = moments[i]
                var content = '<div class="maincontent">\n' +
                    '        <div class="headiconblock">\n' +
                    '            <img class="headicon" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1418315404,2308746069&fm=26&gp=0.jpg" alt="Paris">\n' +
                    '        </div>\n' +
                    '        <div class="usercontent">\n' +
                    '            <div class="username">\n' +
                    '                ' + elemet.name + '\n' +
                    '            </div>\n' +
                    '            <div class="usernormalinfo">\n' +
                    '                <div class="usersendtime">\n' +
                    '                    ' + elemet.momentSendTime.substr(0, 10) + '\n' +
                    '                </div>\n' +
                    '                <div class="userdevice">\n' +
                    '                    ' + elemet.userDevice + '\n' +
                    '                </div>\n' +
                    '                <div class="usermonmentstatus">\n' +
                    '                    ' + idEdit(elemet.isEdit) + '\n' +
                    '                </div>\n' +
                    '            </div>\n' +
                    '        </div>\n' +
                    '        <div class="MomentInfo">\n' +
                    '            <div class="MomentText">\n' +
                    '                ' + elemet.momentContentWords + '\n' +
                    '            </div>\n' +
                    '            <div class="MomentImgBlock">\n'

                var body = '';
                var picIds = elemet.picIds;
                for (var j in picIds) {
                    console.log(picIds[j])
                    body += '<img class="MomentImg" src="' + picIds[j] + '"/>\n'
                }

                var foot =
                    '            </div>\n' +
                    '            <div class="useroperation">\n' +
                    '                <ul class="useroperationul">\n' +
                    '                    <li class="useroperationli">\n' +
                    '                        <span><i id="' + elemet.id + '" class="iconfont iconshoucang"></i>收藏</span>\n' +
                    '                        <span class="collectcount">' + elemet.collectCount + '</span>\n' +
                    '                    </li>\n' +
                    '                    <li class="useroperationli">\n' +
                    '                        <span><i id="' + elemet.id + '" class="iconfont iconicon--"></i>转发</span>\n' +
                    '                        <span class="sharecount">' + elemet.shareCount + '</span>\n' +
                    '                    </li>\n' +
                    '                    <li class="useroperationli">\n' +
                    '                        <span><i id="' + elemet.id + '" class="iconfont iconpinglun" onclick="loadComment(this.id)"></i>评论</span>\n' +
                    '                        <span class="commentcount">' + elemet.commentCount + '</span>\n' +
                    '                    </li>\n' +
                    '                    <li class="useroperationli">\n' +
                    '                        <span><i id="' + elemet.id + '" class="iconfont iconweibiaoti-" onclick="like(this.id)"></i></span>\n' +
                    '                        <span class="likecount">' + elemet.likeCount + '</span>\n' +
                    '                    </li>\n' +
                    '                </ul>\n' +
                    '            </div>\n' +
                    '        </div>\n' +
                    '    </div>'
                res.push(content + body + foot)
            }
            $("#momentblock").html(res)
            $("#momentcount").text(moments.length)
            $("[id=followcount]").each(function () {
                $(this).text(result.data.friendsList.length);
            });
            $("[id=fanscount]").each(function () {
                $(this).text(result.data.fansList.length);
            });

            $("#usermail").text(result.data.userBaseInfoDTO.userEmail)
            $("#username").text(result.data.userBaseInfoDTO.userWechatNum)
            $("#usertelnum").text(result.data.userBaseInfoDTO.userPhoneNum)
            $("#userwebsite").text(result.data.userBaseInfoDTO.userBlogLink)

            $("#followfriendpic1").attr('src',result.data.friendsList[0].userHeadUrl);
            $("#followfriendpic2").attr('src',result.data.friendsList[1].userHeadUrl);
            $("#followfriendpic3").attr('src',result.data.friendsList[2].userHeadUrl);
            $("#followfriendname1").text(result.data.friendsList[0].userName)
            $("#followfriendname2").text(result.data.friendsList[1].userName)
            $("#followfriendname3").text(result.data.friendsList[2].userName)

            $("#fansfriendpic1").attr('src',result.data.fansList[0].userHeadUrl);
            $("#fansfriendpic2").attr('src',result.data.fansList[1].userHeadUrl);
            $("#fansfriendpic3").attr('src',result.data.fansList[2].userHeadUrl);
            $("#fansfriendname1").text(result.data.fansList[0].userName)
            $("#fansfriendname2").text(result.data.fansList[1].userName)
            $("#fansfriendname3").text(result.data.fansList[2].userName)
        }
    })
}

//点赞
function like(id) {
    alert(id)
    $.ajax({
        url: url_like,
        type: "get",
        dataType: "json",
        async: true,
        xhrFields: {withCredentials: true},
        crossDomain: true,
        //contentType: false,
        //processData: false,
        data: {"MomentId": id},
        success: function (result) {
            if (result.code == 1000) {
                layer.msg('点赞成功！', {icon: 1});
            } else if (result.code == 500) {
                layer.msg('点赞失败！', {icon: 1});
            }
        }
    })
}

function idEdit(flag) {
    return flag == 0 ? "已编辑" : "未编辑"
}

var receviedCommentID;

function loadComment(id) {
    console.log(id)
    receviedCommentID = id;
    layui.use('layer', function () {
        var layer = layui.layer;
        layer.open({
            type: 1,
            content: '<textarea placeholder="请输入内容" class="layui-textarea" id="textareaText"></textarea>' +
                '<button class="layui-btn" onclick="sendMyComment()">发表我的评论</button>' +
                '                <div style="padding: 15px;">\n' +
                '                    <ul id="COMMENT" style="height: 100%;overflow:auto;"></ul>\n' +
                '                </div>',//这里content是一个普通的String
            area: ['800px', '500px'],//控制长宽
            //shade: [0.8, '#393D49'],//弹窗外区域颜色
            anim: 0,//弹窗出现方式
            success: function () {
                layui.use('flow', function () {
                    var flow = layui.flow;
                    flow.load({
                        elem: '#COMMENT' //流加载容器
                        , scrollElem: '#COMMENT' //滚动条所在元素，一般不用填，此处只是演示需要。
                        , isAuto: true
                        , done: function (page, next) { //执行下一页的回调
                            setTimeout(function () {
                                var lis = [];
                                //$.get("/controller/get_info_list_userComment?page=" + page+"&receviedCommentID="+receviedCommentID, function (res) {
                                $.get(url_getComment + '?momentId=' + id, function (res) {
                                    //假设你的列表返回在data集合中
                                    //alert("进入控制器")
                                    layui.each(res.data, function (index, item) {
                                        lis.push(
                                            '' +
                                            '<li>' +
                                            '           <div class="card">\n' +
                                            '                    <div class="card-feed">\n' +
                                            '                        <div class="avator">\n' +
                                            '                            <img  class="headicon" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1418315404,2308746069&fm=26&gp=0.jpg">\n' +
                                            '                        </div>\n' +
                                            '                        <!--微博内容-->\n' +
                                            '                        <div class="content" node-type="like">\n' +
                                            '                            <div class="info">\n' +
                                            '                                <div>\n' +
                                            '                                    <a href="" class="name" nick-name="隔夜饭馊特了">' + item.whoComment +
                                            '      发布于：' + item.commentTime + '</a>\n' +
                                            '                                </div>\n' +
                                            '                            </div>\n' +
                                            '                            <p class="txt" node-type="feed_list_content" nick-name="隔夜饭馊特了">' + item.commentContent + '</p>\n' +
                                            '                            <p class="from"></p>\n' +
                                            '                        </div>\n' +
                                            '                    </div>\n' +
                                            '                </div>' +
                                            '</li>'
                                        );

                                    });
                                    //执行下一页渲染，第二参数为：满足“加载更多”的条件，即后面仍有分页
                                    //pages为Ajax返回的总页数，只有当前页小于总页数的情况下，才会继续出现加载更多
                                    next(lis.join(''), page < res.pages); //假设总页数为 10
                                });
                            });
                        }
                    });
                });
            }
        });

    });
}

function sendMyComment() {
    //此方法用来上传我的评论
    alert("文本框值为：" + $("#textareaText").val() + " id为：" + receviedCommentID)

    $.ajax({
        ansyc: false,//是否异步发送
        type: "POST",
        url: url_sendComment+"?text="+$("#textareaText").val()+"&momentId="+receviedCommentID,//指向loginCheck处理器
        xhrFields: {withCredentials: true},
        data: {
            "textareaText": $("#textareaText").val(),
            "receviedCommentID": receviedCommentID
        },
        dataType: "json",
        success: function (data) {
            alert("信息：" + data.msg)
            //清除文本框内容
            $("#textareaText").val("")
            //操作完成后显示这个，比较好看
            layui.use('layer', function () {
                var layer = layui.layer;
                //icon:0为惊叹号，1为勾。2为叉，3为问号，4为锁，5为不开心
                layer.msg('评论成功！', {icon: 1});
            });
        },
        error: function (data) {
            alert(data.msg)
            layui.use('layer', function () {
                var layer = layui.layer;
                layer.msg('评论失败！', {icon: 2});
            });
        }
    })

}