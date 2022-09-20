// header.js
$(() => {
    let previousScroll = 0;
    let sh = $("#scrollMoveHeader");
    
    $(window).scroll(function() {
        let currentScroll = $(this).scrollTop();
        let scrollTop = $(window).scrollTop();
    
        if(currentScroll < previousScroll + 1){
            sh.fadeIn(1000)
            console.log("up")
        }else {
            sh.fadeOut(500)
            console.log("down")
        }
        if(scrollTop == 0){
            sh.css("display" , "none")
        }
        previousScroll = currentScroll;
    })
})

