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
        //????????? ?????? ???????????? ???????????? img_section??? src ????????? readerEvent??? ???????????? ?????????
    };

    document.querySelector("#real-input").addEventListener("change", (changeEvent) => {
        //upload_file ??? ????????????????????? ??????
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
    //????????? ?????? output ????????? ??????
    const li = document.createElement("li"); //li?????? ??????
    const span = document.createElement("span"); // span?????? ??????
    span.innerText = text; //??????????????? ?????? ?????? span??? ??????
    li.appendChild(span); //li?????? ?????? span?????? ??????
    output.appendChild(li); //ul?????? ?????? li?????? ??????
}

function submitHandler(event) {
    event.preventDefault(); //submit?????? ????????? ???????????? ????????????????????? ????????? ????????? ?????? ???????????? event.preventDefault ?????? ?????????.
    const currentValue = input.value; //input?????? ??? value??? ??????????????? ????????????.
    outputList(currentValue);
    input.value = ""; //input ?????? ??? ??????????????? ?????????
}

function init() {
    form.addEventListener("submit", submitHandler);
    //input ?????? submit ?????? ?????????,submitHandler????????? ??????????????? ????????? ??????
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
