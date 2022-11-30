// interface player {
//     name: string;
//     age: number;
// }

// 타입은 확장이 불가능하다.
// 가능하면 type보다 interface로 선언하는 것은 추천 
type player = {
    name: string;
    age: number;
}

var son: player = {
    name: '손흥민',
    age: 30
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {

}