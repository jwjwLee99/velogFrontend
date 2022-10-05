$(function (){
    const userid = $('.userid');
    const userpw = $('.userpw');
    const userpw_re = $('.userpw_re');
    const name = $('.username');
    const hp = $('userhp');
    const email = $('.useremail');
    const isSsn = $('.isssn');
    const isIdCheck = $('.isidcheck');

    const expIdText = /^[a-z]+[a-z0-9]{5,19}$/g;
    const expPWText = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    const expNumberText = /^[0-9]+$/;
    const expNameText = /[가-힣]+$/;
    const expHpText = /^\d{3}-\d{3,4}-\d{4}$/;
    const expEmailText = /^[A-Za-z0-9\-\.]+@[A-Za-z0-9\-\.]+\.[A-Za-z0-9]+$/; 


    // 입력시 이벤트
    userid.input(function(){
        if(userid.value.length > 4 || userid.value.length < 20){ // 아이디 길이
        }else if(userid.value == expIdText){ // 정규식
        }
        // 아이디 중복 검사 추가 필요
    })
    userpw.input(function(){
        if(userpw.value.length > 4 || userpw.value.length < 20){ // 비밀번호 길이
        }else if(userpw.value == expPWText){ // 비밀번호 정규식

        }else {

        }
    })
})
function sendit() {
    const userid = $('.userid');
    const userpw = $('.userpw');
    const userpw_re = $('.userpw_re');
    const name = $('.username');
    const hp = $('userhp');
    const email = $('.useremail');
    const isSsn = $('.isssn');
    const isIdCheck = $('.isidcheck');

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
    }
    if(userid.value.length < 4 || userid.value.length > 20){
        alert('아이디는 4자이상 20자이하로 입력하세요');
        userid.focus();
        return false;
    }
    if(isIdCheck.value == 'n'){
        alert('아이디 중복체크를 확인하세요');
        isIdCheck.focus();
        return false;
    }

    // password
    if(userpw.value == ''){
        alert('비밀번호를 입력하세요');
        userpw.focus();
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
        alert('휴대폰번호 형식을 확인하세요\n하이픈(-)을 포함해야합니다.')
        hp.focus();
        return false;
    }

    // email
    if(!expEmailText.test(email.value)){
        alert('이메일 형식을 확인하세요');
        email.focus();
        return false;
    }

    // ssn
    if(isSsn.value == 'n'){
        alert('주민등록번호 유효성을 확인하세요');
        return false;
    }

    return true;
}

// 주민번호 focus 자동 이동
function moveFocus(){
    const ssn1 = document.getElementById('ssn1');
    if(ssn1.value.length >= 6){
        document.getElementById('ssn2').focus();
    }
}

// 주민번호 유효성 테스트
function ssnCheck(){
    const ssn1 = document.getElementById('ssn1');
    const ssn2 = document.getElementById('ssn2');
    const isssn = $('.isssn');

    if(ssn1.value == '' || ssn2.value == ''){
        alert('주민등록번호를 입력하세요');
        ssn1.focus();
        return false;
    }

    const ssn = ssn1.value + ssn2.value;
    const s1 = Number(ssn.substr(0, 1)) * 2;
    const s2 = Number(ssn.substr(1, 1)) * 3;
    const s3 = Number(ssn.substr(2, 1)) * 4;
    const s4 = Number(ssn.substr(3, 1)) * 5;
    const s5 = Number(ssn.substr(4, 1)) * 6;
    const s6 = Number(ssn.substr(5, 1)) * 7;
    const s7 = Number(ssn.substr(6, 1)) * 8;
    const s8 = Number(ssn.substr(7, 1)) * 9;
    const s9 = Number(ssn.substr(8, 1)) * 2;
    const s10 = Number(ssn.substr(9, 1)) * 3;
    const s11 = Number(ssn.substr(10, 1)) * 4;
    const s12 = Number(ssn.substr(11, 1)) * 5;
    const s13 = Number(ssn.substr(12, 1));

    let result = s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12;
    result = result % 11;
    result = 11 - result;
    if(result >= 10) result = result % 10;

    if(result == s13){
        alert("유효한 주민등록번호입니다.")
        isssn.value = 'y';
    }else{
        alert('유효하지 않은 주민등록번호입니다.')
    }
}

// 주민등록번호가 변경 되었을 경우
function ssnChange(){
    const isssn = $('.isssn');
    isssn.value = 'n';
}
