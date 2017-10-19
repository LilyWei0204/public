/*
* @Author: Marte
* @Date:   2017-08-25 17:33:25
* @Last Modified by:   Marte
* @Last Modified time: 2017-10-18 09:38:45
*/

'use strict';
$().ready(function () {
    $('input').focus(function(){
        $(this).addClass("border-focus");
    });
    $('input').blur(function(){
        $(this).removeClass('border-focus');
    });
    $('textarea').focus(function(){
        $(this).addClass("border-focus");
    });
    $('textarea').blur(function(){
        $(this).removeClass('border-focus');
    });
    $("#rel_edit_form").validate({
        rules:{
            fina_title:{
                required:true,
                minlength: 3
            },
            finance:{
                required:true
            },
            fina_price:{
                required:true,
                minlength: 3,
                digits:true,
                number:true
            },
            fina_use:{
                required:true,
                minlength: 3
            },
            fina_date:{
                required:true,
                minlength: 3,
                date:true
            },
            fina_people:{
                required:true,
                minlength: 3
            },
            fina_rate:{
                require:true,
                minlength:3
            },
            fina_tel:{
                required:true,
                rangelength:[11,11],
                number:true
            },
            fina_detail:{
                required:true,
                minlength: 3
            },
            fina_code:{
                required:true,
                minlength: 4
            }

        },
        messages:{
            fina_title: {
                required: "请输入标题",
                minlength: "标题不少于3个字符"
            },
            finance:{
                required:"请输入融资金额"

            },
            fina_price:{
                required:"请输入融资金额",
                minlength: "不少于3个字符",
            },
            fina_use:{
                required:"请输入贷款用途"
            },
            fina_date:{
                required:"请输入贷款期限"
            },
            fina_people:{
                required:"请输入申请人姓名",
                minlength: "不少于3个字符"
            },
            fina_rate:{
                require:"请输入期望利率",
                minlength:"请输入期望利率"
            },
            fina_tel:{
                required:"请输入申请人手机号",
                rangelength: "请输入正确的手机号"
            },
            fina_detail:{
                required:"请输入需求详情"
            },
            fina_code:{
                required:"请输入手机验证码",
                minlength: "至少4位"
            }
        }
    })
})

