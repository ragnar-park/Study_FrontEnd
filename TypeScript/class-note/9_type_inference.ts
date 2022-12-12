// 타입 추론 기본 1
var a = 'abc'; // a: string

function getB(b = 10) { // default값 10, 
    var c = 'hi'; // string으로 추론

    // return b; // 파라미터의 타입으로 리턴타입이 정의된다. 
    return b + c; // 타입 추론으로 string과 number의 연산으로 반환값이 string으로 추론된다.
}

// 타입 추론 기본 2
// interface Dropdown<T> {
//     value: T
//     title: string;
// }

// var shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello'
// }

// 타입 추론 기본 3
interface Dropdown<T> {
    value: T
    title: string;
}

interface DetailDropdown<K> extends Dropdown<K> {
    description: string;
    tag: K;
    // value,
    // title,
}

var detailedItem: DetailDropdown<string> = {
    title: 'abc',
    description: 'cd',
    value: 'e', // 제네릭으로 넘겨준 타입이 상속받은 Dropdown에도 넘어간다 
    tag: 'f'
}

// Best Common Type 
// 타입 스크립트가 어떤 타입인지 해석하는 알고리즘
// 표현식을 이용하여 가장 근접한 타입을 추론
// 모든 값을 유니온으로 묶어나간다고 봐도 무방 
var arr = [1, 2, true, true, 'a'];


