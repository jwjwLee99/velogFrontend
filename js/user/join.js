$(() => {
    $(".etcInput").focusin(function(){
        $(this).next('.focus-border').animate({
            width: "484px"
        }, 400)
    })
    $(".etcInput").focusout(function(){
        $(this).next('.focus-border').animate({
            width: "0"
        }, 400)
    })
})