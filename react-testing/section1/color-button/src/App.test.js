import { render, screen } from '@testing-library/react';
import App from './App';

// * 버튼이 제대로 표시되는지 테스트이지 내부 상태를 테스트 하는 것이 아님
// 버튼에 올바른 초기 색상이 적용됐는지 테스트
test('button has correct initial color', () => {
  render(<App/>);

  // text 노드가 'Change to blue' 이며 버튼인 element 가져오
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});

  // 버튼의 백그라운드 색상이 빨간색인지 테스트
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

// 버튼에 올바른 초기 텍스트가 적용됐는지 테스트
test('button has correct initial text', () => {

});

// 버튼을 클릭하면 파란색으로 변경되는지 테스트
test('button turns blue when clicked', () => {

});



// test('renders learn react link', () => {
//   // render(<App />);
//   // const linkElement = screen.getByRole('link', { name: /learn react/i }); // 실제 역할로 요소 찾기
//   // expect(linkElement).toBeInTheDocument();
// });
