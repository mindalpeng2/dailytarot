function drawRandomTarotCard() {
    // 타로 카드와 해석
    var tarotMeanings = {
        "마법사": { meaning: "창조적인 에너지, 자신감, 능력 발휘", image: "https://i.pinimg.com/originals/c6/63/8b/c6638bf9da8a4db3ad279666d48ee9ae.jpg" },
        "여사제": { meaning: "지혜, 직관, 내면적 성장", image: "https://i.pinimg.com/originals/f0/bd/5e/f0bd5e37ea4b4ed4c3362f8e9d733e7c.jpg" },
        "여황제": { meaning: "풍요, 안정, 관계에서의 지지", image: "https://i.pinimg.com/originals/4e/2c/56/4e2c56dd1c887e0954a0a2237872a082.jpg" },
        "황제": { meaning: "권위, 통제, 안정성", image: "https://i.pinimg.com/originals/cc/ab/e5/ccabe56ff0e78ec8fde387692bb78ef7.jpg" },
        "연인": { meaning: "사랑, 관계, 선택", image: "https://example.com/연인.jpg" },
        "전차": { meaning: "진보, 도전, 결단", image: "https://i.pinimg.com/originals/47/ee/01/47ee019f0347b08da2a1e63037747a4f.jpg" },
        "힘": { meaning: "힘, 내면의 힘, 통제", image: "https://example.com/힘.jpg" },
        "은둔자": { meaning: "고요, 내면 탐구, 주의", image: "https://i.pinimg.com/originals/e7/93/6c/e7936c09f6b95616bf009dda6b9df29c.jpg" },
        "운명의 수레바퀴": { meaning: "운명, 운명의 바퀴, 운동", image: "https://i.pinimg.com/originals/84/b0/9d/84b09dbeebd1de57333dee72195772f8.jpg" },
        "정의": { meaning: "균형, 공정, 결정", image: "https://i.pinimg.com/originals/6d/2f/31/6d2f31892a364ecc42ef4a7cd03ed567.jpg" },
        "매달린 사람": { meaning: "희생, 포기, 인내", image: "https://i.pinimg.com/originals/f6/f9/b2/f6f9b2249cd647ad71c8e8308d3e4ddf.jpg" },
        "죽음": { meaning: "변화, 종결, 새로운 시작", image: "https://i.pinimg.com/564x/1f/41/21/1f41216da949190136432949e42ee36d.jpg" },
        "절제": { meaning: "조화, 균형, 절제", image: "https://example.com/절제.jpg" },
        "악마": { meaning: "억압, 속박, 유혹", image: "https://i.pinimg.com/originals/32/1a/99/321a99c4b9af5c444452b4fbeac24193.jpg" },
        "탑": { meaning: "파괴, 변화, 충격", image: "https://example.com/탑.jpg" },
        "별": { meaning: "희망, 기대, 영감", image: "https://example.com/별.jpg" },
        "달": { meaning: "불안, 비밀, 상상", image: "https://example.com/달.jpg" },
        "태양": { meaning: "행복, 성공, 발전", image: "https://example.com/태양.jpg" },
        "심판": { meaning: "판단, 해방, 새로운 시작", image: "https://example.com/심판.jpg" },
        "세계": { meaning: "완성, 성공, 만족", image: "https://example.com/세계.jpg" },
        "바보": { meaning: "무지, 무책임, 새로운 시작", image: "https://i.pinimg.com/originals/87/f2/b9/87f2b99219439f4daede68a3dac5eb51.jpg" }
    };

    // 타로 카드
    var tarotCards = Object.keys(tarotMeanings);

    // 무작위로 카드 선택
    var randomIndex = Math.floor(Math.random() * tarotCards.length);
    var selectedCard = tarotCards[randomIndex];
    var selectedMeaning = tarotMeanings[selectedCard].meaning;
    var selectedImage = tarotMeanings[selectedCard].image;

    // 결과를 화면에 표시
    // 결과를 화면에 표시
    var resultDiv = document.getElementById("tarotResult");
    var cardImage = document.createElement("img");
    cardImage.src = selectedImage;
    cardImage.alt = selectedCard;
    cardImage.style.maxWidth = "200px"; // 이미지 최대 너비 설정
    cardImage.style.display = "block";
    cardImage.style.margin = "0 auto"; // 이미지 가운데 정렬
    resultDiv.innerHTML = "<h2>" + selectedCard + "</h2><p>" + selectedMeaning + "</p>";
    resultDiv.appendChild(cardImage);
    // 카드 목록 숨기기
    document.getElementById("tarotCards").style.display = "none";
    // 결과 표시하기
    resultDiv.style.display = "block";

    // '다시 뽑기' 버튼 생성
    var drawAgainButton = document.createElement("button");
    drawAgainButton.textContent = "다시 뽑기";
    drawAgainButton.onclick = function() {
        // 카드 목록 다시 보이기
        document.getElementById("tarotCards").style.display = "flex";
        // 결과 숨기기
        resultDiv.style.display = "none";
    };
    // 이미지 아래에 버튼 추가
    resultDiv.appendChild(drawAgainButton);

    // 카드 목록 숨기기
    document.getElementById("tarotCards").style.display = "none";
    // 결과 표시하기
    resultDiv.style.display = "block";
}
