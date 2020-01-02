$(document).ready(function(){
    $(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;
            
            var winTop = $(window).scrollTop();
            console.log(pos)
            if (winTop>(pos*0.9)) {
                $(this).addClass("slide");
            }
            else{
                $(this).removeClass("slide");
            }
        });
    });
});