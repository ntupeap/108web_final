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

//set fix page2
$(document).ready(function () {
    var obj_position = $('#page2_son').position().top;
    var obj_height = $('#page2_son').height();
    var next_obj_position = $('#page3').position().top;
    var this_page_height = $('#page2').height();
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        if ((scroll_position > obj_position) && (scroll_position < next_obj_position - obj_height)) {
            $("#page2_son").addClass("fix");
        } else {
            $("#page2_son").removeClass("fix");
        }

        if (scroll_position > (next_obj_position - obj_height)) {
            $("#page2_son").addClass('fix_bottom_page2_son');
        } else {
            $("#page2_son").removeClass('fix_bottom_page2_son');
        }
        
        if (scroll_position > (next_obj_position - (4*obj_height))){
            $("#company_intro").addClass('hidden');
        } else{
            $("#company_intro").removeClass('hidden');
        }
        
        if (scroll_position > (next_obj_position - (4*obj_height))){
            $("#company").removeClass('hidden');
        } else{
            $("#company").addClass('hidden');
        }
        
        
        //company show setting
        
        
        if (scroll_position > (next_obj_position - (3*obj_height))){
//            $("#B_company").removeClass('hidden');
            $("#A_company").addClass('hidden');
        } else{
            $("#A_company").removeClass('hidden');
//            $("#B_company").addClass('hidden');
        }
        
        if (scroll_position > (next_obj_position - (2*obj_height))){
            $("#C_company").removeClass('hidden');
//            $("#B_company").addClass('hidden');
            $(".pg2_circle").addClass('B_to_C');
        } else{
//            $("#B_company").removeClass('hidden');
            $("#C_company").addClass('hidden');
            $(".pg2_circle").removeClass('B_to_C');
        }
        
        if ((scroll_position > (next_obj_position - (3*obj_height)))&&(scroll_position < (next_obj_position - (2*obj_height)))){
            $("#B_company").removeClass('hidden');
            $(".pg2_circle").addClass('A_to_B');
        } else{
            $("#B_company").addClass('hidden');
            $(".pg2_circle").removeClass('A_to_B');
        }
        
        
        console.log(scroll_position)
        
        console.log(next_obj_position)
        
        console.log(obj_height)
    });
});

//set fix page3
$(document).ready(function () {
    var obj_position = $('#page3_son').position().top;
    var obj_height = $('#page3_son').height();
    var next_obj_position = $('#page5').position().top;
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


        //boat

        if (scroll_position > next_obj_position - (4 * obj_height)) {
            $('#draft_detail').removeClass('hidden');
        } else {
            $('#draft_detail').addClass('hidden');
        }


        if (scroll_position > next_obj_position - (3 * obj_height)) {
            $('#boatt_detail').removeClass('hidden');
            $('#wire').addClass('hidden');
        } else {
            $('#wire').removeClass('hidden');
            $('#boatt_detail').addClass('hidden');
        }

        if (scroll_position > next_obj_position - (2 * obj_height)) {
            $('#weapon').removeClass('hidden');
            $('#weapon_row').addClass('weapon_intro_pad');
            $('#weapon_row').removeClass('weapon_intro');
            $('#weaponn_detail').removeClass('hidden');
        } else {
            $('#weapon').addClass('hidden');
            $('#weapon_row').removeClass('weapon_intro_pad');
            $('#weapon_row').addClass('weapon_intro');
            $('#weaponn_detail').addClass('hidden');
        }

        if ((scroll_position > next_obj_position - (3 * obj_height)) && (scroll_position < next_obj_position - (2 * obj_height))){
            $('#body').removeClass('hidden');
        } else {
            $('#body').addClass('hidden');
        }


    });
});


//set fix page5
$(document).ready(function () {
    var obj_position = $('#page5_son').position().top;
    var obj_height = $('#page5_son').height();
    var next_obj_position = $('#page6').position().top;
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

        if (scroll_position > next_obj_position - (3 * obj_height)){
            $('#difficult').addClass('hidden')
            $('#difficult_row').removeClass('hidden')
        }else{
            $('#difficult_row').addClass('hidden')
            $('#difficult').removeClass('hidden')
        }


        if (scroll_position > next_obj_position - (2 * obj_height)) {
            $('.pg5_ori_img').addClass('hidden')
            $('.pg5_nxt_img').removeClass('hidden')
            $('.dtitle').addClass('hidden')
            $('.dinfo').removeClass('hidden')
            $('.pg5_nxt_img').fadeIn();
        } else {
            $('.pg5_ori_img').removeClass('hidden')
            $('.pg5_nxt_img').addClass('hidden')
            $('.dinfo').addClass('hidden')
            $('.dtitle').removeClass('hidden')
        }


    });
});