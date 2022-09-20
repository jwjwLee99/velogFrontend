// header.js
$(() => {
    let previousScroll = 0;
    let sh = $("#scrollMoveHeader");
    
    $(window).scroll(function() {
        let currentScroll = $(this).scrollTop();
        let scrollTop = $(window).scrollTop();
    
        if(currentScroll < previousScroll){
            sh.fadeIn("fast")
        }else {
            sh.fadeOut("fast")
        }
        if(scrollTop == 0){
            sh.css("display" , "none")
        }
        previousScroll = currentScroll;
    })
})

