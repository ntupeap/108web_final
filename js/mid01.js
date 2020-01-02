$(document).ready(function(){
    
    $(window).scroll(function () {
        $(".fadeout").each(function () {
            var pos = $(this).offset().top;
            
            var winTop = $(window).scrollTop();
            console.log(pos)
            if (winTop>(pos*0.7)) {
                $(this).addClass("fadein");
            }
            else{
                $(this).removeClass("fadein");
            }
        });
    });
});