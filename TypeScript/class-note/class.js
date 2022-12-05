// ES2015 (ES6)부터 사용가능

function Person(name, age) {
    this.name = name;
    this. age = age;
}

var park = new Person('박민수', 62);

class Person {
    // 클래스 로직 
    constructor(name, age) {
        console.log('생성 되었습니다');
        this.name = name;  
        this.age = age; 
    }
}

var minsoo = new Person('민수', 25); // 생성 되었습니다. 
console.log(minsoo);
// 위 두 문법은 똑같은 문법이라고 봐도 무방하다.