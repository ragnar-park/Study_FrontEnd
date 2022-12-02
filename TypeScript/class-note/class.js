// ES2015 (ES6)부터 사용가능

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