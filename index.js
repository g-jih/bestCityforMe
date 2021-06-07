const questions = [
    "모처럼 주어진 자유시간! 뭘 하면서 보내면 좋을까?",
    "집에서 30분 거리에 이게 있으면 자주 갈 수 있을텐데..",
    "슈퍼와의 거리", 
    "내가 살 곳은 내가 정한다", 
];

const answers = [
    ["친구를 만난다.", "이불 속 고고", "평소 좋아하던 작가의 전시가 있는 미술관에 간다.", "이럴 땐 파티에 가서 놀아줘야지!"],
    ["바다! 해변가에서 산책하고 싶다", "산", "놀이공원", "콘서트장"],
    ["엎어지면 코 닿을 거리 5분내에 편의점이 있어야 돼!!", "10분이내에 대형마트", "차 타고 일주일에 한 번 장보기", "배달 필수인 거 아니야?"],
    ["아파트", "단독주택", "두들리네 마을", "섬에서 고독을 즐기겠어"]
];

const weights = [
    [7, 1, 4, 10],
    [4, 1, 7, 10],
    [10, 4, 1, 7],
    [10, 4, 7, 1]
];

var currentQuestionNumber = 0;
var score = 0;

function startQuiz() {
    document.getElementById("home-box").style.display="none";
    document.getElementById("question-box").style.display="block";
}

function replaceContents(num) {
    score += weights[currentQuestionNumber][num];
    if (currentQuestionNumber == questions.length - 1) {
        document.getElementById("check-result").style.display="block";
    }
    else {
        setNextQuiz();
    }
}

function setNextQuiz() {
    currentQuestionNumber++;
    document.getElementById("question-text").innerText = questions[currentQuestionNumber];
    document.getElementById("answer0").innerText = answers[currentQuestionNumber][0];
    document.getElementById("answer1").innerText = answers[currentQuestionNumber][1];
    document.getElementById("answer2").innerText = answers[currentQuestionNumber][2];
    document.getElementById("answer3").innerText = answers[currentQuestionNumber][3];
}

function showResult() {
    if (score <= 16) {
        window.location.href = "/type/ganghwa";
    }
    else if (score <= 29) {
        window.location.href = "/type/berlin";
    }
    else {
        window.location.href = "/type/seoul";
    }
}