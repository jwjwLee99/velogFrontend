// header.js
$(() => {
    let previousScroll = 0;
    let sh = $("#scrollMoveHeader");
    
    $(window).scroll(function() {
        let currentScroll = $(this).scrollTop();
    
        if(currentScroll < previousScroll){
            sh.css("display", "block")
            sh.fadeIn(500)
            console.log("up")
        }else {
            sh.fadeIn(1000)
            sh.css("display", "none")
            console.log("down")
        }
        previousScroll = currentScroll;
    })
})

