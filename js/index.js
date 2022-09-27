// index.js
$(() => {
    let trandingBtn = $(".tranding")
    let latestBtn = $(".latest")

    let main1 = $(".main-list")
    let main2 = $(".main-list2")

    let underline = $(".underLine")

    trandingBtn.click(()=> {
        trandingBtn.addClass("active")
        latestBtn.removeClass("active")
        main1.css("display", "flex")
        main2.css("display", "none")
        underline.animate({
            left: "0%"
        }, 300)
    })

    latestBtn.click(()=> {
        trandingBtn.removeClass("active")
        latestBtn.addClass("active")
        main1.css("display", "none")
        main2.css("display", "flex")
        underline.animate({
            left: "50%"
        }, 300)
    })
})
