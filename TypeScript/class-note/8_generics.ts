// function logText(text) {
//      console.log(text);
//      return text;
// }

// logText(7); // 숫자 7
// logText('호날두'); // 문자열 호날두 
// logText(true); // 진위값 true 

// function logText<T>(text: T):T {
//     console.log(text);
//     return text;
// }
// logText<string>('메시');
// logText<number>(10);

// function logText(text: string) {
//      console.log(text);
//      text.split('').reverse().join('');
//      return text;
// }

// function logNumber(num: number) {
//     console.log(num);
//     return num;
// }

// function logText(text: string | number) {
    //  console.log(text);
    //  return text;
// }

// const a = logText('a');
// a.split(''); 에러 
// logText(10);
// const num = logNumber(10);
// logText(true)


function logText<T>(text: T): T {
     console.log(text);
     return text;
}

const abc = logText<string>('abc');
abc.split('');

const flag = logText<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }

// const obj: Dropdown = { value: 'abc', selected: false }; // value에 string만 가능하다

interface Dropdown<T> { 
    value: T;
    selected: boolean;
}

const obj: Dropdown<number> = { value: 5, selected: false}; 

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[]{
//     console.log(text.length);
//     text.forEach(function (text) {
//         console.log(text);
//     });
//     return text;
// }
// logTextLength<string>(['hi','abc']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}
function  logTextLength<T extends LengthType>(text: T): T{
    text.length;
    return text;
}
logTextLength('ronaldo');
logTextLength({ length: 10 }); 
logTextLength({ text: 10 }); // 에러
logTextLength(10); // 에러

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption("name");
getShoppingItemOption("price");
getShoppingItemOption("stock");