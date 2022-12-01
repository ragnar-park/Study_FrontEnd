// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

var park: string | number | boolean; // 유니온타입
function logMessage(value: string | number) {
    if(typeof value === 'number') {
        value.toLocaleString();
    }
    if(typeof value === 'string') {
        value.toString();
    }
    throw  new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// function askSomeone(someone: Developer | Person) {
//     someone.name;
//     someone.age; // 에러
//     someone.skill; // 에러
//     // 유니온 타입은 TypeSafe되지 않은 속성을 제공하지 않고 보장된 속성만 제공한다
//     // 즉, 공통된 속성만 가져올 수 있다.
// }

// askSomeone({name: '박민수', skill: '프론트엔드 개발'});
// askSomeone({name: 'ragnar', age: 25});
// askSomeone({name: '루니', skill: '웹 개발', age: 38}); 


// 인터섹션 타입
// 타입가드가 별도로 필요없이 모든 속성에 접근이 가능하다.
// 모두합친 하나의 타입처럼 사용된다 (모두가 보장이 된다.)
function askSomeone(someone: Developer & Person) {
    someone.name;
    someone.age; 
    someone.skill;
}

// askSomeone({name: '박민수', skill: '프론트엔드 개발'}); // 오류
// askSomeone({name: 'ragnar', age: 25}); // 오류
askSomeone({name: '루니', skill: '웹 개발', age: 38}); 

var zidan: string | number | boolean; 
var drogba: string & number & boolean; // 절대불가능한 타입인 never