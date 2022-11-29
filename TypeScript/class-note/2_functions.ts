// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//   return a + b;
// }
sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add() {
  return 10;
}

// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number {
  return a + b;
}

// sum(10, 20, 30, 40); // 함수의 정의된 파라미터의 타입이나 갯수가 맞지 않으면 오류발생

// 함수의 옵셔널 파라미터(?)
function log(a: string, b?: string, c?: string) {}

log("안녕하세요");
log("안녕하세요", "500");
