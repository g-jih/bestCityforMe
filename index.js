const questions = [
    "모처럼 주어진 자유시간! 뭘 하면서 보내면 좋을까?",
    "나의 장보기 패턴은?", 
    "내가 살고 싶은 곳은?", 
    "오늘은 어린이날~ 어린이는 아니지만 쉬는 날이다! 어디가지?",
    "금요일 저녁, 나의 약속 장소는?",
    "대박 로또 2등에 당첨되었다. 당첨금은 7000만원, 이 돈으로 뭘하지?",
    "A 도시에 처음으로 여행을 왔다. 이제 슬슬 배가 고픈데 어디가서 먹을까",
    "다시 태어난다면 되고 싶은 직업은?"
];

const answers = [
    ["친구를 만난다.", "이불 속 고고", "평소 좋아하던 작가의 전시가 있는 미술관에 간다.", "이럴 땐 파티에 가서 놀아줘야지!"],
    ["요리는 내 몫이 아니야.. 엎어지면 코 닿을 거리 5분내에 편의점이 있어야 된다.", "필요한 건 그때 그 때 사야지! 10분이내에 대형마트", "냉장고는 채우라고 있는거야. 그치만 자주 장보기는 귀찮다.. 2주에 한 번 코스트코가서 트렁크 가득 채워온다.", "뚜벅이에게 마트는 사치, 배달 필수인 거 아니야?"],
    ["아파트", "단독주택", "두들리네 마을", "섬에서 고독을 즐기겠어"],
    ["바다! 해변가에서 산책하고 싶다", "산", "놀이공원", "콘서트장"],
    ["곱창집", "한강", "호캉스", "클럽"],
    ["이게 웬 떡이냐 주식이나 비트코인에 투자한다.", "이 정도 돈이면 집도 못 사는데 비상금으로 저축해둬야지", "핸드폰 바꾸고 싶었는데 잘 됐다. 평소 가지고 싶었던 것들 좀 사고 나머지는 .. 나중에 생각해봐야지", "절반은 저축, 5프로는 여행 경비, 10프로는 투자... 세세하게 사용 계획을 세워서 지출한다."],
    ["SNS에 검색해보고 가장 추천글이 많은 곳을 선택한다.", "좋은 냄새가 나는데? 내 코를 믿고 눈 앞에 보이는 식당에 들어간다.", "돌아다니다가 봐뒀던 30년 전통의 식당에 찾아간다.", "A 도시에 사는 친구에게 연락해서 추천 받는다."],
    ["안정적인게 최고다. 정년 보장되는 공무원!", "모험정신이 가득한 내셔널 지오그래픽 사진가, 사자와 아이컨택하는 삶.. 내 로망이야.", "영화를 사랑하는 나, 지금까지 본 영화만해도 셀 수 없이 많다. 다음 생엔 영화 평론가로 다시 태어나야지", "출근 시간도, 퇴근 시간도 내 마음대로~ 프리랜서로 살면서 내 재능을 펼칠거야."]
];

const weights = [
    ["ei", 3, -5, -3, 5],
    ["jp", 3, -3, -5, 5],
    ["tf", -3, -5, 5, 3],
    ["sn", 3, 5, -3, -5],
    ["ei", 4, -2, -4, 6],
    ["sn", -6, 2, -2, 6],
    ["tf", 6, -6, -4, 4],
    ["jp", 6, -6, 2, -2]
];

let currentQuestionNumber = 0;
let savedAnswers = new Array(questions.length);
let scores = {
    "ei": 0, // 외향형, 내향형
    "sn": 0, // 감각형, 직관형
    "tf": 0, // 사고형, 감정형
    "jp": 0 // 판단형, 인식형
};

function startQuiz() {
    document.getElementById("home-box").style.display="none";
    document.getElementById("question-box").style.display="block";
}

/**
 * answer 값 저장
 */
function saveAnswer(answerNum) {
    savedAnswers[currentQuestionNumber] = answerNum;

    if (currentQuestionNumber == questions.length - 1) {
        //document.getElementById("check-result").style.display="block";
        showResult();
    }
    else {
        // 다음 페이지로 이동
        currentQuestionNumber += 1;
        setProgress();
        setQuiz(currentQuestionNumber);
    }
}

/**
 * 이전 페이지로 이동
 */
function movePrevious() {
    if (currentQuestionNumber > 0) {
        currentQuestionNumber -= 1;
        setProgress();
        setQuiz(currentQuestionNumber);
        savedAnswers[currentQuestionNumber] = 0;
    } 
}


/**
 * 퀴즈 내용 변경
 */
function setQuiz(quizNumber) {
    document.getElementById("question-text").innerText = questions[quizNumber];
    document.getElementById("answer0").innerText = answers[quizNumber][0];
    document.getElementById("answer1").innerText = answers[quizNumber][1];
    document.getElementById("answer2").innerText = answers[quizNumber][2];
    document.getElementById("answer3").innerText = answers[quizNumber][3];
}


/**
 * progress 값 변경
 */
function setProgress() {
    document.getElementById("progress-bar").value = (currentQuestionNumber + 1) * 12.5;
}

function showResult() {

    for (var i=0; i<questions.length; i++) {
        var questionType = weights[i][0];
        var answerNum = savedAnswers[i];
        scores[questionType] += weights[i][answerNum];
    }

    let type = "";

    if (scores["ei"] > 0) type += "e";
    else type += "i";

    if (scores["sn"] > 0) type += "s";
    else type += "n";

    if (scores["tf"] > 0) type += "t";
    else type += "f";

    if (scores["jp"] > 0) type += "j";
    else type += "p";

    window.location.href = "result.html?mbti=" + type;
}

function startTouch(n) {
    let div = document.getElementById("item" + n.toString());
    div.style.color = "#7070eb";
    div.style.borderColor = "#7070eb";
}

function endTouch(n) {
    let div = document.getElementById("item" + n.toString());
    div.style.color = "black";
    div.style.borderColor = "#cecece";
}