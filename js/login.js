// login.js

$(() => {
    let accountBtn = $(".link")
    let loginBtn = $(".alink")

    let main1 = $(".account")
    let main2 = $(".login")

    accountBtn.click(()=> {
        accountBtn.addClass("active")
        loginBtn.removeClass("active")
        main1.css("display", "flex")
        main2.css("display", "none")
    })

    loginBtn.click(()=> {
        accountBtn.removeClass("active")
        loginBtn.addClass("active")
        main1.css("display", "none")
        main2.css("display", "flex")
    })

    let pwidBtn = $(".find-pwid")
    let cancleBtn = $(".cancle")
    
    let main3 = $(".search")
    let main4 = $(".login")

    pwidBtn.click(()=> {
        pwidBtn.addClass("active")
        cancleBtn.removeClass("active")
        main3.css("display", "flex")
        main4.css("display", "none")
    })

    cancleBtn.click(()=> {
        pwidBtn.removeClass("active")
        cancleBtn.addClass("active")
        main3.css("display", "none")
        main4.css("display", "flex")
    })

    
    let pwfindBtn = $(".pwfind")
    let canclepwBtn = $(".pwcancle")
    
    let main5 = $(".findpw")
    let main6 = $(".login")

    pwfindBtn.click(()=> {
        pwfindBtn.addClass("active")
        canclepwBtn.removeClass("active")
        main5.css("display", "flex")
        main6.css("display", "none")
    })

    canclepwBtn.click(()=> {
        pwfindBtn.removeClass("active")
        canclepwBtn.addClass("active")
        main5.css("display", "none")
        main6.css("display", "flex")
    })

    let pwloginBtn = $(".pwlogin")
    let canclepwBtn1 = $(".pwcancle")

    let main7 = $(".login")
    let main8 = $(".search")
    let main9 = $(".findpw")

    pwloginBtn.click(()=> {
        pwloginBtn.addClass("active")
        canclepwBtn1.removeClass("active")
        main7.css("display", "flex")
        main8.css("display", "none")
        main9.css("display", "none")
    })
    canclepwBtn1.click(()=> {
        pwloginBtn.removeClass("active")
        canclepwBtn1.addClass("active")
        main7.css("display", "none")
        main8.css("display", "flex")
    })

})
