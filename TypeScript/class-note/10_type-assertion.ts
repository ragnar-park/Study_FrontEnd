// 타입 단언(type assertion)
var a;
a = 20;
a= 'a';
var b = a as string; 
//선언시 타입을 지정하지 않고 위의 20, 'a'라는 값을 할당하게 되면 
// b의 타입은 any로 볼 수 있다
// as를 통해 타입은 단언한다.

// DOM API 조작
// <div id="app"> Dom </div>
var div = document.querySelector('div'); 
if (div) {
    div.innerText
}

