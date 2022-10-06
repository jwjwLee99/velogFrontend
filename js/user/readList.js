$(() => {
    let likePostBtn = $(".likePost")
    let recentPostBtn = $(".recentPost")

    let main1 = $(".mainPost1")
    let main2 = $(".mainPost2")

    let underline = $(".underLine")



    trandingBtn.click(() => {
        likePostBtn.addClass("active")
        recentPostBtn.removeClass("active")
        mainPost1.css("display", "flex")
        mainPost2.css("display", "none")
        rightMenuBtn.css("display", "flex")
        underline.animate({
            left: "0%"
        }, 300)
    })

    latestBtn.click(() => {
        trandingBtn.removeClass("active")
        latestBtn.addClass("active")
        main1.css("display", "none")
        main2.css("display", "flex")
        rightMenuBtn.css("display", "none")
        underline.animate({
            left: "50%"
        }, 300)
    })
})
