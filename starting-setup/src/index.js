import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App'; 
// .js는 생략해도 되고 .js는 생략하는게 맞다.
// css파일같은 다른 파일이라면 확장자를 꼭붙여야함 하지만 서드파티(제 3자의) 라이브러리거나  
// 우리가 가진 js파일중 하나라면 .js는 생략해도 된다. 

const root = ReactDOM.createRoot(document.getElementById('root')); // 주요 엔트리 포인트 생성
// React로 구축할 전반적인 사용자 인터페이스에 대한 주요 훅(Hook)을 말한다
//React 애플리케이션을 불러온 웹페이지 상에서 어디에 배치해야 하는지 React에 알려주는 것 


root.render(<App />); // jsx구문  , App은 결국 컴포넌트임 -> root인 id를 가진 요소의 자리에 렌더링할 컴포넌트
// 브라우저로 전달되기전에 변환됨 
// 변환의 목적이 코드를 더 쉽고 나은 방법으로 작성하는 것

// index.js는 브라우저로 코드를 가져가서 전달하기만 하는 게 아니라 전달하기 전에 코드를 변환
// index.js 파일이 가장 먼저 실행됨
// 브라우저 안에서 특정 작업을 추가로 진행 
// 예를 들어 import './index.css';의 경우 css 파일을 js파일로 변환하는 것과 같음