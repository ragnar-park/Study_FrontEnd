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