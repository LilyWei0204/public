/*
* @Author: Marte
* @Date:   2017-10-18 10:14:32
* @Last Modified by:   Marte
* @Last Modified time: 2017-10-18 18:52:48
*/

'use strict';
$().ready(function(){
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
})

