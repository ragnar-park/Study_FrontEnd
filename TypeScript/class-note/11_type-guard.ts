interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'park', age: 25, skill: 'Spring Boot'}
}
var park = introduce();
console.log(park.name); 
// console.log(park.skill); // 공통된 속성만 사용가능 

// 타입 단언으로 Developer임을 명시
// 타입의 범위를 줄이고, 구체화를 함
if ((park as Developer).skill) {
    var skill = (park as Developer).skill;
    console.log(skill);
}else if((park as Person).age) {
    var age = (park as Person).age;
    console.log(age);
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
}

if (isDeveloper(park)) {
    // Developer 타입
    park.skill
} else {
    //  Person 타입
    park.age
    // park.skil // 에러
}