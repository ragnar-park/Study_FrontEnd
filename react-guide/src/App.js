import Expenses from "./component/Expenses/Expenses";

const App= () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 294.67,
      date: new Date(2021, 8, 13),
    },
    {
      id: "e2",
      title: "New Tv",
      amount: 799.49,
      date: new Date(2021, 3, 11),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 3, 27),
    },
    {
      id: "e4",
      title: "New Dexk(Wooden)",
      amount: 450,
      date: new Date(2021, 6, 11),
    },
    {
      id: "e5",
      title: "Mac Book",
      amount: 2499,
      date: new Date(2021, 12, 21),
    },
  ];

  // 명령형 접근 방식
  // const para = document.createElement('p');
  // para.textContent = 'This is also visble!';
  // document.getElementById('root').append(para);
  // 복잡하거나 변경되는 수십, 수백의 요소들이 계속해서 나타났다 사라졌다 할 수있는 복잡한 상ㅇ자 인터페이스가 될 수 있다.

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
      {/* <p>This is also visble!</p> */}

      {/* 소문자로 시작하는 요소는 내장된 html요소, 대문자로 시작하는 요소는 추가로 정의된 요소 */}
    </div>
  );
}

export default App;
