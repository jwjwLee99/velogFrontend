$(() => {
    var input = document.querySelector('.basic'),
        tagify = new Tagify(input, {
        })
    tagify.addEmptyTag()
})

$(() => {
    const Editor = toastui.Editor;

    const editor = new Editor({
        el: document.querySelector('#editor'),
        height: '500px',
        initialEditType: 'markdown',
        previewStyle: 'vertical'
    });

    editor.getMarkdown();
})

$(() => {
    let main1 = $(".wrapper")
    let main2 = $(".changepage")

    let publicationBtn = $(".topublish")
    let cancleBtn = $(".cancelPublish")


    publicationBtn.click(() => {
        cancleBtn.removeClass("active")
        publicationBtn.addClass("active")
        main1.css("display", "none")
        main2.css("display", "flex")
    })

    cancleBtn.click(() => {
        cancleBtn.removeClass("active")
        publicationBtn.addClass("active")
        main1.css("display", "block")
        main2.css("display", "none")
    })
})

$(() => {
    document.getElementById("b2").onclick = function () {
        document.getElementById("b1").className = "bwBtn";
        document.getElementById("b2").className = "colorBtn";
    }

    document.getElementById("b1").onclick = function () {
        document.getElementById("b1").className = "colorBtn";
        document.getElementById("b2").className = "bwBtn";
    }
})

$(() => {
    let main1 = $(".seriespage")
    let main2 = $(".basicpage")

    document.getElementById("a0").onclick = function () {
        document.getElementById("c1").className = "seriespage";
        main1.css("display", "flex")
        main2.css("display", "none")
    }

    document.getElementById("a1").onclick = function () {
        document.getElementById("c2").className = "basicpage";
        main1.css("display", "none")
        main2.css("display", "contents")
    }
})

$(document).ready(function () {
    $('#textcount').on('keyup', function () {
        $('#test_cnt').html("" + $(this).val().length + "/150");

        if ($(this).val().length > 150) {
            $(this).val($(this).val().substring(0, 150));
            $('#test_cnt').html("150/150");
        }
    });
});

$(() => {

    let seriesnameBtn = $(".seriesinput")
    let seriesnamecancleBtn = $(".seriesaddcancle")


    seriesnameBtn.click(() => {
        $(".seriesadd").slideDown(25);
        $(".seriesaddarea").fadeIn(500);
        //main2.css("display", "block")
    })

    seriesnamecancleBtn.click(() => {
        $(".seriesaddarea").fadeOut(500);
        $(".seriesadd").slideUp(550);
        //main2.css("display", "none")

    })
})

$(() => {
    document.addEventListener('mouseup', function (e) {
        var container = document.getElementById('seriesadd');
        if (!container.contains(e.target)) {
            $(".seriesaddarea").fadeOut(500);
            $(".seriesadd").slideUp(550);
        }
        else if ($(".seriesinputarea").click()) {
            return false;
        }
    })
})


$(() => {

    window.onload = function () {
        document.getElementById("preview").onclick = innerText;
    }
    function innerText() {
        const name = document.getElementById('name').value;
        document.getElementById('result').innerText = name;
        document.getElementById('url').value = name;
    }
})

$(() => {
    const browseBtn = document.querySelector('.uploadBtn');
    const realInput = document.querySelector('#real-input');

    browseBtn.addEventListener('click', () => {
        realInput.click(); {
            $(".uploadBtn").css("display", "none")
            $(".imagepreview").css("display", "flex")
        }
    });

    const reader = new FileReader();

    reader.onload = (readerEvent) => {
        document.querySelector("#imagePreview").setAttribute("src", readerEvent.target.result);
        //파일을 읽는 이벤트가 발생하면 img_section의 src 속성을 readerEvent의 결과물로 대체함
    };

    document.querySelector("#real-input").addEventListener("change", (changeEvent) => {
        //upload_file 에 이벤트리스너를 장착
        const imgFile = changeEvent.target.files[0];
        reader.readAsDataURL(imgFile);
    })
    /*
        if(document.getElementById('imagePreview').src == 0){
            $(".uFBYd").css("display", "flex")
            $(".imagepreview").css("display", "none")
        }
    */
})

$(()=> {
const form = document.querySelector(".seriesinput");
const input = form.querySelector("topublish");
const output = document.querySelector(".list-item");

function outputList(text) {
    //출력을 위해 output 함수를 생성
    const li = document.createElement("li"); //li태그 생성
    const span = document.createElement("span"); // span태그 생성
    span.innerText = text; //현재입력된 값을 받아 span에 저장
    li.appendChild(span); //li태그 안에 span태그 넣기
    output.appendChild(li); //ul태그 안에 li태그 넣기
}

function submitHandler(event) {
    event.preventDefault(); //submit하면 정보가 날라가고 새로고침한거로 된거기 때문에 그걸 막기위해 event.preventDefault 값을 써준다.
    const currentValue = input.value; //input에서 온 value를 현재값으로 가져온다.
    outputList(currentValue);
    input.value = ""; //input 제출 후 공백란으로 남기기
}

function init() {
    form.addEventListener("submit", submitHandler);
    //input 에서 submit 되어 있을때,submitHandler함수가 실행되도록 이벤트 추가
}
init();
})

/*
let subToggle = true;
$(".fIsQRt").click(() => {
if (subToggle) {
$(".cWIEIO").slideDown(2000);
$(".fmmwfE").fadeIn(1000);
} else {
$(".fmmwfE").fadeOut(1000);
$(".cWIEIO").slideUp(1000); 
}
subToggle = !subToggle;
});
*/
/*
$(() => {
    let subToggle = true;
    $(".fIsQRt").click(() => {
        if (subToggle) {
            $(".cWIEIO").slideDown(2000);
            $(".fmmwfE").fadeIn(1000);
        } else {
            $(".fmmwfE").fadeOut(1000);
            $(".cWIEIO").slideUp(1000);

        }
        subToggle = !subToggle;
    });
})
*/
