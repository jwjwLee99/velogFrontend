$(() => {
  //회원 탈퇴 버튼 변수
  let secessionback = $(".secessionBground")
  let secessionBtn = $(".secessionBtn")
  let secessionblank = $(".secession-area")
  let cancelBtn = $(".cancel")

  // 회원탈퇴 버튼 누를 시
  secessionBtn.click(() => {
    secessionback.css("display", "flex")
    secessionblank.css("display", "flex")
  })

  //회원탈퇴 취소 누를 시
  cancelBtn.click(() => {
    secessionback.css("display", "none")
    secessionblank.css("display", "none")
  })

  //알람 
  let isReplyAgree = true;
  let isUpdateAgree = true;

  // 댓글알람 버튼
  $(".replyAlarm").click(function () {
    if (isReplyAgree) {
      $(this).css({
        background: "#12B886"
      });
      $(this).children(".circle").animate({
        left: "1.325rem"
      }, 100)
      isReplyAgree = false
    } else {
      $(this).css({
        background: "rgb(134, 142, 150)"
      });
      $(this).children(".circle").animate({
        left: "0"
      }, 100)
      isReplyAgree = true
    }
  })

  // 업데이트알림 버튼
  $(".updateAlarm").click(function () {
    if (isUpdateAgree) {
      $(this).css({
        background: "#12B886"
      });
      $(this).children(".circle").animate({
        left: "1.325rem"
      }, 100)
      isUpdateAgree = false
    } else {
      $(this).css({
        background: "rgb(134, 142, 150)"
      });
      $(this).children(".circle").animate({
        left: "0"
      }, 100)
      isUpdateAgree = true
    }
  })

  //이름, 한줄소개 수정
  let correctionBtn = $(".profile-correction")
  let userInfo = $(".user-info")
  let correctionInfo = $(".correction-info")

  correctionBtn.click(() => {
    userInfo.css("display","none")

    correctionInfo.css("display","flex")
    correctionInfo.css("flex-direction","column")

  })


  //벨로그 제목 수정
  let tittleBtn = $(".correctionBtn")
  let pasiveT = $(".passive")
  let activeT = $(".active")

  tittleBtn.click(() => {
    pasiveT.css("display","none")

    activeT.css("display","flex")
    activeT.css("flex-direction","column")

  })

  //소셜 추가
  let addInfo = $(".add-infoBtn")
  let addAddress = $(".add-address")

  addInfo.click(() => {
    addInfo.css("display", "none")

    addAddress.css("display","flex")
    addAddress.css("flex-direction","column")
  })
  
  /* 파일 업로드 부분
  const fileDOM = document.querySelector('#file');
  const previews = document.querySelectorAll('.image-box');

  fileDOM.addEventListener('change', () => {
    const reader = new FileReader();
    reader.onload = ({ target }) => {
      previews[0].src = target.result;
    };
    reader.readAsDataURL(fileDOM.files[0]);
  });

  const fileDOM2 = document.querySelector('#file2');

  fileDOM2.addEventListener('change', () => {
    const imageSrc = URL.createObjectURL(fileDOM2.files[0]);
    previews[1].src = imageSrc;
  }); */
})

