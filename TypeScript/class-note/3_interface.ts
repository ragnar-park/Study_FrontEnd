interface User {
    age: number;
    name: string;
}


// 변수에 터페이스 활용
var ragnar: User = {
    age: 25,
    name: '라그나'
}


// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}
const Ronaldo = {
    name: '호나우도',
    age: 46
}
getUser(Ronaldo);

// 함수의 스펙(구조)에 인터페이스를 활용 

interface SumFunction {
    (a: number, b: number): number
}

var sumF: SumFunction;
sumF = function (a: number, b: number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10; // 에러 


// 딕셔너리 패턴
interface StringRagexDictionary {
    [key: string]: RegExp;
}

var obj: StringRagexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
    // cssFile: 'css' // 에러
}

// obj['cssFile'] = 'a' // 에러 

Object.keys(obj).forEach(function (value) { ; });

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person{
    language: string;
}

var zlatan: Developer = {
    language: 'ts',
    age: 40,
    name: '즐라탄'
}