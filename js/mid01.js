$(document).ready(function () {
    //   set back to top button
    $("footer a[href='#myPage']").click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 900);
    });
    $("#btt").click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 900);
    });

    $(window).scroll(function () {
        var winTop = $(window).scrollTop();
        var mypageh = $('#page0').height();
        var last_page_pos = $('#footer').position().top;
        var last_page_height = $('#footer').height();
        if ((winTop > mypageh)&&(winTop<(last_page_pos-(last_page_height*10)))){
            $('#btt').fadeIn();
        } 
        else {
            $('#btt').fadeOut();
        }
    });


    //  set fade in & out
    $(window).scroll(function () {
        $(".fadeout").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (winTop > (pos * 0.7)) {
                $(this).addClass("fadein");
            } else {
                $(this).removeClass("fadein");
            }
        });
    });
});


//set fix page3
$(document).ready(function () {
    var obj_position = $('#page3_son').position().top;
    var obj_height = $('#page3_son').height();
    var next_obj_position = $('#page4').position().top;
    var this_page_height = $('#page3').height();
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        if ((scroll_position > obj_position) && (scroll_position < next_obj_position - obj_height)) {
            $("#page3_son").addClass("fix");
        } else {
            $("#page3_son").removeClass("fix");
        }

        if (scroll_position > (next_obj_position - obj_height)) {
            $("#page3_son").addClass('fix_bottom_page3_son');
        } else {
            $("#page3_son").removeClass('fix_bottom_page3_son');
        }
        if (scroll_position > next_obj_position - (2 * obj_height)) {
            $('#wire').addClass('hidden')
            $('#body').removeClass('hidden')
            $('#body').fadeIn();
        } else {
            $('#wire').removeClass('hidden')
            $('#body').addClass('hidden')
        }


    });
});


//set fix page5
$(document).ready(function () {
    var obj_position = $('#page5_son').position().top;
    var obj_height = $('#page5_son').height();
    var next_obj_position = $('#footer').position().top;
    var this_page_height = $('#page5').height();
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        if ((scroll_position > obj_position) && (scroll_position < next_obj_position - obj_height)) {
            $("#page5_son").addClass("fix5");
        } else {
            $("#page5_son").removeClass("fix5");
        }
        if (scroll_position > (next_obj_position - obj_height)) {
            $("#page5_son").addClass('fix_bottom_page5_son');
        } else {
            $("#page5_son").removeClass('fix_bottom_page5_son');
        }
        if (scroll_position > next_obj_position - (2 * obj_height)) {
            $('.pg5_ori_img').addClass('hidden')
            $('.pg5_nxt_img').removeClass('hidden')
            $('.pg5_nxt_img').fadeIn();
        } else {
            $('.pg5_ori_img').removeClass('hidden')
            $('.pg5_nxt_img').addClass('hidden')
        }


    });
});