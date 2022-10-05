// login.js
/*
main1 = account
main2 = login
main3 = search
main4 = findpw
*/

$(() => {

    let main1 = $(".account")
    let main2 = $(".login")
    let main3 = $(".search")
    let main4 = $(".findpw")

    let accountBtn = $(".link")
    let loginBtn = $(".alink")

    accountBtn.click(() => {
        accountBtn.addClass("active")
        loginBtn.removeClass("active")
        main1.css("display", "flex")
        main2.css("display", "none")
    })

    loginBtn.click(() => {
        accountBtn.removeClass("active")
        loginBtn.addClass("active")
        main1.css("display", "none")
        main2.css("display", "flex")
    })

    let idBtn = $(".find-id")
    let cancleBtn = $(".loginBtn")

    idBtn.click(() => {
        idBtn.addClass("active")
        cancleBtn.removeClass("active")
        main3.css("display", "flex")
        main2.css("display", "none")
    })

    cancleBtn.click(() => {
        idBtn.removeClass("active")
        cancleBtn.addClass("active")
        main3.css("display", "none")
        main2.css("display", "flex")
    })

    let pwBtn = $(".find-pw")
    let cancleBtn2 = $(".loginBtn2")

    pwBtn.click(() => {
        pwBtn.addClass("active")
        cancleBtn2.removeClass("active")
        main4.css("display", "flex")
        main2.css("display", "none")
    })  

    cancleBtn2.click(() => {
        pwBtn.removeClass("active")
        cancleBtn2.addClass("active")
        main4.css("display", "none")
        main2.css("display", "flex")
    })

    let findpwBtn = $(".pwfind")

    findpwBtn.click(() => {
        findpwBtn.addClass("active")
        main4.css("display", "flex")
    })

    let loginBtn2 = $(".loginBtn2")

    loginBtn2.click(() => {
        loginBtn2.addClass("active")
        main2.css("display", "flex")
        main4.css("display", "none")
        main3.css("display", "none")
    })

    let pwaccountBtn = $(".pwaccount")

    pwaccountBtn.click(() => {
        pwaccountBtn.addClass("active")
        main1.css("display", "flex")
        main4.css("display", "none")
        main3.css("display", "none")
    })

})

function account_check() {
    //변수에 담아주기
    var userid = document.getElementById("userid");
    var userpw = document.getElementById("userpw");
    var userpwdcheck = document.getElementById("userpwdcheck");
    var username = document.getElementById("username");
    var userpnum = document.getElementById("userpnum");
    var useremail = document.getElementById("useremail");

    if (userid.value == "") { //해당 입력값이 없을 경우 같은말: if(!uid.value)
        alert("아이디를 입력하세요.");
        userid.focus(); //focus(): 커서가 깜빡이는 현상, blur(): 커서가 사라지는 현상
        return false; //return: 반환하다 return false:  아무것도 반환하지 말아라 아래 코드부터 아무것도 진행하지 말것
    };

    if (userpw.value == "") {
        alert("비밀번호를 입력하세요.");
        userpw.focus();
        return false;
    };

    //비밀번호 영문자+숫자+특수조합(8~25자리 입력) 정규식
    var userpwdcheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    if (!userpwdcheck.test(userpw.value)) {
        alert("비밀번호는 영문자+숫자+특수문자 조합으로 8~25자리 사용해야 합니다.");
        userpw.focus();
        return false;
    };

    if (userpwdcheck.value !== userpw.value) {
        alert("비밀번호가 일치하지 않습니다..");
        userpwdcheck.focus();
        return false;
    };

    if (username.value == "") {
        alert("이름을 입력하세요.");
        username.focus();
        return false;
    };
    var reg = /^[0-9]+/g; //숫자만 입력하는 정규식

    if (!reg.test(userpnum.value)) {
        alert("전화번호는 숫자만 입력할 수 있습니다.");
        userpnum.focus();
        return false;
    }

    if (useremail.value == "") {
        alert("이메일 주소를 입력하세요.");
        useremail.focus();
        return false;
    }


    //입력 값 전송
    document.account_check.submit(); //유효성 검사의 포인트   
}
