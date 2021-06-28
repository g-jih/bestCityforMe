const cityNameList = {
    "istp" : "대전",
    "isfp" : "강화도",
    "estp" : "서울",
    "esfp" : "",
    "intp" : "",
    "intj" : "",
    "entp" : "",
    "entj" : "",
    "infp" : "",
    "infj" : "",
    "enfp" : "",
    "enfj" : "",
    "istj" : "",
    "isfj" : "",
    "estj" : "",
    "esfj" : "",
};

const cityContentList = {
    "istp" : "자연재해도 없고 인구도 적당하고 조용하고 평화로운 도시 대전! 커몬come onnnnnnnn",
    "isfp" : "혼자가 좋은 당신, 아무도 없는 섬에서 혼자 사는 건 어떨까",
    "estp" : "놀 것, 볼 것, 먹을 것 많은 메트로폴리탄 서울에서 맘껏 즐기면서 살고 싶은 당신.",
    "esfp" : "",
    "intp" : "",
    "intj" : "",
    "entp" : "",
    "entj" : "",
    "infp" : "",
    "infj" : "",
    "enfp" : "",
    "enfj" : "",
    "istj" : "",
    "isfj" : "",
    "estj" : "",
    "esfj" : "",
};

const partner = {
    "istp" : "esfj",
    "isfp" : "enfj",
    "estp" : "istj",
    "esfp" : "isfj",
    "intp" : "estj",
    "intj" : "entp",
    "entp" : "intj",
    "entj" : "infp",
    "infp" : "entj",
    "infj" : "enfp",
    "enfp" : "infj",
    "enfj" : "isfp",
    "istj" : "estp",
    "isfj" : "esfp",
    "estj" : "intp",
    "esfj" : "istp"
}

let type;

window.onload = function () {
    let params = (new URL(document.location)).searchParams;
    type = params.get('mbti');

    let personalMbti = document.getElementById("personal-mbti");
    personalMbti.innerHTML = type.toUpperCase();

    let cityName = document.getElementById("city-name");
    cityName.innerHTML = cityNameList[type];

    document.getElementById("city-image").src = "images/" + type + ".jpg";

    let cityContent = document.getElementById("city-content");
    cityContent.innerHTML = cityContentList[type];

    let partnerMbti = document.getElementById("partner-mbti");
    partnerMbti.innerHTML = partner[type];

    let partnerCity = document.getElementById("partner-city");
    partnerCity.innerHTML = cityNameList[partner[type]] + "에서 같이 살까?";

    document.getElementById("partner-image").src = "images/" + partner[type] + ".jpg";
};


function restartQuiz() {
    window.location.href = "index.html";
}

function shareFacebook() {
    let params = (new URL(document.location)).searchParams;
    type = params.get('mbti');

    var sendUrl = "https://g-jih.github.io/bestCityforMe/result.html?mbti=" + type;
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}


function shareTwitter() {
    let params = (new URL(document.location)).searchParams;
    type = params.get('mbti');

    var sendText = "MBTI - 나에게 어울리는 도시 찾기";
    var sendUrl = "https://g-jih.github.io/bestCityforMe/result.html?mbti=" + type;
    window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
}
