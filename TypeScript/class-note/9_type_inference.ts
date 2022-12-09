var a = 'abc'; // a: string

function getB(b = 10) { // default값 10, 
    var c = 'hi'; // string으로 추론
    
    // return b; // 파라미터의 타입으로 리턴타입이 정의된다. 
    return b + c; // 타입 추론으로 string과 number의 연산으로 반환값이 string으로 추론된다.
}