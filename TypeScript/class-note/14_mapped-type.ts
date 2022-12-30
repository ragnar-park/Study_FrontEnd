// 맵드 타입(Mapper Type) 
// 맵드 타입이란 기존에 저의되어 있는 타입을 새로운 타입으로 변환 해주는 문법 
// 마치 자바스크립트 map() API함수를 타입에 적용한 것과 같은 효과를 가짐
type Players = 'Ronaldo' | 'Son' | 'Zlatan';
type PlayerAges = { [K in Players]: number }; // 마치 인터페이서 같은 구조로 'Ronaldo' , 'Son' , 'Zlatan'에 numer타입 정의
const ages: PlayerAges = {
    Ronaldo: 38,
    Son: 29,
    Zlatan: 39,
}

// for in  반복문 코드
var arr = ['a','b','c'];
for (var key in arr) {
    console.log(arr[key]);
}