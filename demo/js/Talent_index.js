/**
 * Created by wyc on 2017/10/9.
 */
    window.onload = function () {

        //    b_white左侧
        $('#chat_l .chat_title li').click(function () {
            $('#chat_l .chat_title li').removeClass('active');
            $(this).addClass('active');
            chat_l = $(this).index();
            $('#chat_l .chat_img li').removeClass('show');
            $('#chat_l .chat_img li').eq(chat_l).addClass('show');
        });

        //    b_white右侧
        $('#chat_r .chat_title li').click(function () {
            $('#chat_r .chat_title li').removeClass('active');
            $(this).addClass('active');
            chat_r = $(this).index();
            $('#chat_r .chat_img li').removeClass('show');
            $('#chat_r .chat_img li').eq(chat_r).addClass('show');
        });

        //平台资源选项卡
        $('#resource .select li').click(function () {
            $('#resource .select li').removeClass('active');
            $(this).addClass('active');
            select = $(this).index();
            $('#resource .item li').removeClass('show');
            $('#resource .item li').eq(select).addClass('show');
        });

        //    推荐人员移动T
        sec_t_lenght = $('#recommend_t').children().length;
        sec_t = 0;
        function gundong_t() {
            if (sec_t > (sec_t_lenght - 3)) {
                sec_t = 0
            }
            function ting1() {
                $('#recommend_t a').removeClass('show');
            }

            function ting2() {
                $('#recommend_t a').eq(sec_t).addClass('show');
                $('#recommend_t a').eq(sec_t + 1).addClass('show');
                $('#recommend_t a').eq(sec_t + 2).addClass('show');
                $('#recommend_t a').eq(sec_t + 3).addClass('show');
                sec_t += 4;
            }

            t1 = setTimeout(ting1, 5500);
            t2 = setTimeout(ting2, 500);
        }

        t_t = setInterval(gundong_t, 6000);


        var recommend_t = $('#recommend_t a');
        recommend_t.bind("mouseover", function () {
            clearInterval(t_t);
            clearTimeout(t1);
            clearTimeout(t2);
        }).bind("mouseout", function () {
            sec_t = 0;
            t_t = setInterval(gundong_t, 6000);
            t1 = setTimeout(ting1, 5500);
            t2 = setTimeout(ting2, 500);
        });


        //    推荐人员移动B
        sec_b_lenght = $('#recommend_b').children().length;
        sec_b = 0;
        function gundong_b() {
            if (sec_b > (sec_b_lenght - 3)) {
                sec_b = 0
            }
            function ting3() {
                $('#recommend_b a').removeClass('show');
            }

            function ting4() {
                $('#recommend_b a').eq(sec_b).addClass('show');
                $('#recommend_b a').eq(sec_b + 1).addClass('show');
                $('#recommend_b a').eq(sec_b + 2).addClass('show');
                $('#recommend_b a').eq(sec_b + 3).addClass('show');
                sec_b += 4;
            }

            t3 = setTimeout(ting3, 5500);
            t4 = setTimeout(ting4, 500);
        }

        t_b = setInterval(gundong_b, 6000);


        var recommend_b = $('#recommend_b a');
        recommend_b.bind("mouseover", function () {
            clearInterval(t_b);
            clearTimeout(t3);
            clearTimeout(t4);
        }).bind("mouseout", function () {
            sec_b = 0;
            t_b = setInterval(gundong_b, 6000);
            t3 = setTimeout(ting3, 5500);
            t4 = setTimeout(ting4, 500);
        });

    };