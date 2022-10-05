$(function (){
    const userid = $('#userid');
    const userpw = $('#userpw');
    const userpw_re = $('#userpwcheck');
    const name = $('#username');
    const hp = $('#userpnum');
    const email = $('#useremail');
    const isIdCheck = $('#isidCheck');

    const expIdText = /^[a-z]+[a-z0-9]{5,19}$/g;
    const expPWText = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    const expNumberText = /^[0-9]+$/;
    const expNameText = /[가-힣]+$/;
    const expHpText = /^\d{3}-\d{3,4}-\d{4}$/;
    const expEmailText = /^[A-Za-z0-9\-\.]+@[A-Za-z0-9\-\.]+\.[A-Za-z0-9]+$/; 


    // 입력시 이벤트
    userid.change(function(){
        console.log(this.value)
        if(this.value.length < 4){ // 아이디 길이
            $(".isId").html("4자이상").css("color","red")
        }else if(this.value.length > 20){
            $(".isId").html("20자이하").css("color","red")
        }else if(this.value == expNameText){ // 정규식
            $(".isId").html("한글금지").css("color","red")
        }
        else {
            $(".isId").html("")
            isIdCheck.value = 'y'
        }
        // 아이디 중복 검사 추가 필요
    })
    userpw.change(function(){
        let pwCheck1;
        userpw_re.each(function(){
            pwCheck1 = this.value;
        })
        $(".isPWC").html("불일치").css("color", "red")
        isPWCheck.value = 'n'
        if(this.value != expPWText){
            $("")
        }
    })
    userpw_re.change(function(){
        let pwCheck2;
        userpw.each(function(){
            pwCheck2 = this.value;
        })
        if(pwCheck2 != this.value){
            $(".isPWC").html("불일치").css("color", "red")
            isPWCheck.value = 'n'
        }else{
            $(".isPWC").html("일치").css("color", "#12B886")
            isPWCheck.value = 'y'
        }
    })

    
})
function sendit() {
    const userid = document.getElementById("userid");
    const userpw = document.getElementById('userpw');
    const userpw_re = document.getElementById('userpwcheck');
    const name = document.getElementById('username');
    const hp = document.getElementById('userpnum');
    const email = document.getElementById('useremail');
    const isIdCheck = document.getElementById('isidCheck');
    const isPWCheck = document.getElementById('ispwCheck');

    const expIdText = /^[a-z]+[a-z0-9]{5,19}$/g;
    const expPWText = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    const expNumberText = /^[0-9]+$/;
    const expNameText = /[가-힣]+$/;
    const expHpText = /^\d{3}-\d{3,4}-\d{4}$/;
    const expEmailText = /^[A-Za-z0-9\-\.]+@[A-Za-z0-9\-\.]+\.[A-Za-z0-9]+$/; 

    // id
    if(userid.value == ''){
        alert('아이디를 입력하세요');
        userid.focus();
        return false;
    }else {
        isIdCheck.value = 'y';
    }

    // password
    if(userpw.value == ''){
        alert('비밀번호를 입력하세요');
        userpw.focus();
        return false;
    }
    if(userpw.value.length < 4 || userpw.value.length > 20){
        alert('비밀번호는 4자이상 20자이하로 입력하세요');
        userpw.focus();
        return false;
    }
    if(userpw.value != userpw_re.value){
        alert('비밀번호와 비밀번호 확인의 값이 다릅니다')
        userpw_re.focus();
        return false;
    }

    // phone number
    if(!expHpText.test(hp.value)){
        alert('휴대폰번호 형식을 확인하세요\nex)000-0000-0000')
        hp.focus();
        return false;
    }

    // email
    if(!expEmailText.test(email.value)){
        alert('이메일 형식을 확인하세요\nex)OOO@OOO.OOO');
        email.focus();
        return false;
    }

    // join success
    if(isIdCheck == 'y' && isPWCheck == 'y'){
        return true;
    }
}