// 인터페이스
interface Developer {
    name: string;
    skill: string;
}

// interface Person {
//     name: string;
// }

class Person {
    name: string;
}

var developer: Developer;
var person: Person;
// developer = person; // 오류, 오른쪽에 있는 변수에 타입이 왼쪽에 있는 타입보다 더 작은 관계
// developer = new Person(); // 오류, 내부적으로 존재하는 속성과 타입으로 비교(구조적 타이핑)
// person = developer; 

var add = function(a: number) {
    // ...
}
var sum = function(a: number, b:number) {
    // ... 
}
sum = add; 
// add = sum; // 오류

// 제네릭 
interface Empty<T> {

}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
// notempty1 = notempty2; //오류, 호환이 되지 않는다. 
// notempty2 = notempty1; // 오류, 호환이 되지 않는다.


