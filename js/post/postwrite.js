$(() => {
    var input = document.querySelector('.basic'),
        tagify = new Tagify(input, {
        })
    tagify.addEmptyTag()
}
)

$(() => {
    let main1 = $(".wrapper")
    let main2 = $(".cPEGOG")
    let main3 = $(".dTTjYG")
    let publicationBtn = $(".jYsOEX")
    let cancleBtn = $(".bitsEI")

    publicationBtn.click(() => {
        cancleBtn.removeClass("active")
        publicationBtn.addClass("active")
        main3.animate({
            top: "-50%"
        }, 300)
        main1.css("display", "none")
        main2.css("display", "flex")
    })

    cancleBtn.click(() => {
        cancleBtn.removeClass("active")
        publicationBtn.addClass("active")
        main1.css("display", "block")
        main2.css("display", "none")
    })
}
)


$(() => {
    document.getElementById("b2").onclick = function () {
        document.getElementById("b1").className = "bXGcfH";
        document.getElementById("b2").className = "yAuOg";
    }

    document.getElementById("b1").onclick = function () {
        document.getElementById("b1").className = "yAuOg";
        document.getElementById("b2").className = "bXGcfH";
    }
})