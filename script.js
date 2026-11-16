
const weightInput = document.getElementById("weight");
const eastResult = document.getElementById("east-result");
const westResult = document.getElementById("west-result");
const notice = document.getElementById("notice");

document.querySelectorAll(".gate-toggle").forEach(btn => {
    btn.onclick = () => {
        document.getElementById(btn.dataset.target).classList.toggle("open");
    };
});

// 동문 메시지
function getEastMsg(v) {
    if (v < 122) return "월담 착지 시, 20리터 생수통 6개가 한꺼번에 위에서 떨어져 온몸을 짓누르는 충격을 받습니다.";
    if (v < 245) return "월담 시 받는 충격은 40kg짜리 시멘트 자루 6개가 순간적으로 무릎과 발목에 쏠리는 것과 같습니다.";
    if (v < 367) return "월담 착지 시, 20kg 쌀가마니 18개가 온몸을 강타하여 멈춰 세우는 파괴력(최대 367 N·s)을 받습니다.";
    if (v < 489) return "월담 사고 시, 80kg 성인 남성 6명이 동시에 몸 위로 뛰어내려 짓밟는 것과 같은 충격을 받습니다.";
    return "자신의 몸무게 하중에 의해, 1톤 트럭 짐칸에서 떨어진 거대한 쇠뭉치가 발목과 척추를 직격하는 충격량(최대 612 N·s)을 받습니다.";
}

// 서문 메시지
function getWestMsg(n) {
    if (n < 122) return "월담 착지 시, 초등학생 3~4명이 동시에 몸 위로 덮쳐 누르는 파괴력과 같습니다.";
    if (n < 245) return "월담 착지 시, 몸 위로 대형 드럼통 1개가 그대로 굴러떨어져 덮치는 물리적 압박감입니다.";
    if (n < 367) return "월담 착지 시, 대형 냉장고 하나가 바닥으로 떨어지며 온몸을 덮치는 체감 충격입니다.";
    if (n < 489) return "월담 사고 시, 건물 옥상에서 떨어진 대형 드럼통 2개의 무게가 관절과 척추로 통째로 쏠리는 파괴력입니다.";
    return "자신의 몸무게 하중에 의해, 소형 피아노 한 대가 온몸을 강타하는 파괴력으로, 자신의 체력이 아닌 뼈가 그 충격을 모두 흡수하게 됩니다.";
}

// 몸무게 입력 및 충격량 계산
weightInput.oninput = () => {
    const m = Number(weightInput.value);

    if (!weightInput.value) {
        notice.textContent = "";
        eastResult.textContent = westResult.textContent = "몸무게를 입력하면 월담의 위험성을 확인할 수 있습니다.";
        return;
    }

    if (m <= 0) {
        notice.textContent = eastResult.textContent = westResult.textContent = "올바른 몸무게를 입력해 주세요.";
        return;
    }

    notice.textContent = "";

    const east = m * Math.sqrt(37.436);
    const west = m * Math.sqrt(33.712);

    // 동문 결과 출력
    eastResult.innerHTML = `&gt; 동문은 약 1.91m로, 담에서 내려갈 때 약 ${east.toFixed(1)} N·s의 충격을 받습니다.<br>${getEastMsg(east)}`;

    // 서문 결과 출력
    westResult.innerHTML = `&gt; 서문은 약 1.72m로, 담에서 내려갈 때 약 ${west.toFixed(1)} N·s의 충격을 받습니다.<br>${getWestMsg(west)}`;
};