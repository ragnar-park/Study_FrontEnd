// 숫자형 ENUM
// 초기화를 하지 않으면 기본 값으로 0이 들어간다
enum Shoes {
    Nike = 10,
    Adidas,
}

var myShoes = Shoes.Nike;
console.log(Shoes.Nike); // 0 

// 문자형 ENUM
enum Player {
    Son = '손흥민',
    Ronaldo = '호나우두',
}
var koreaPlayer = Player.Son;
console.log(koreaPlayer); // 손흥민

// 예제
enum Answer {
    Yes = 'y',
    No = 'N',
}

function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다.');
    }
    if (answer === Answer.No) {
        console.log('오답입니다.');
    }
}

askQuestion(Answer.Yes);
// askQuestion('예스');
// askQuestion('y');
// askQuestion('yes');