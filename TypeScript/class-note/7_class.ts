class PersonTS {
    private name: string;
    public age: number; // 디폴트는 public이다 
    readonly log: string; // 접근만 가능, 값 변경은 불가능 

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// // 리엑트 예전 문법 - 클래스 기반 코드
// class App extends React.Component {

// }

// // 리액트 최신 문법 - 훅 기반의 함수형 코드
// function App() {
//     return <div>Hello World</div>
// }
