// header.js
$(() => {
    let previousScroll = 0;
    let sh = $("#scrollMoveHeader");
    
    $(window).scroll(function() {
        let currentScroll = $(this).scrollTop();
        let scrollTop = $(window).scrollTop();
    
        if(currentScroll < previousScroll){
            sh.slideDown("fast")
        }else {
            sh.slideUp("fast")
        }
        if(scrollTop == 0){
            sh.fadeOut(1)
        }
        previousScroll = currentScroll;
    })
    $("nav div div.userSection img").mouseover(()=> {
        $("nav div div.userSection > svg").css("color", "#212529")
    })
    $("nav div div.userSection img").mouseout(()=> {
        $("nav div div.userSection > svg").css("color", "#868E96")
    })
})

