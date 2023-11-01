import { render, screen, fireEvent } from '@testing-library/react';
import { logRoles } from '@testing-library/dom';
import App from './App';
import {replaceCamelWithSpaces} from './App';

// * 버튼이 제대로 표시되는지 테스트이지 내부 상태를 테스트 하는 것이 아님
// 버튼에 올바른 초기 색상이 적용됐는지 테스트
test('button has correct initial color, and updates when clicked', () => {
  const { container } = render(<App/>);
  logRoles(container);

  // text 노드가 'Change to blue' 이며 버튼인 element 가져오
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});

  // 버튼의 백그라운드 색상이 빨간색인지 테스트
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })

  // text 노드가 예상과 일치 하는지 검
  expect(colorButton).toHaveTextContent('Change to red');

});

// 버튼에 올바른 초기 텍스트가 적용됐는지 테스트
test('button has correct initial text', () => {

});

test('initial conditions', () => {
  render(<App />)

  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toBeEnabled();

  // 체크 박스 요소를 찾고 체크되지 않은 상태로 시작되었는지 테스
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Checkbox disables button on first click and enables on second click', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const colorbutton = screen.getByRole('button', {name: 'Change to blue'});


  // button 요소가 사용 불가능하고(disabled) 비활성화되어 있는지 테스트
  fireEvent.click(checkbox);
  expect(colorbutton).toBeDisabled();

  // button 요소가 사용 가능하고 활성화되어 있는지 테스트
  fireEvent.click(checkbox);
  expect(colorbutton).toBeEnabled();
});

test('Disabled button has gray background and reverts to reds', () => {
  render(<App/>);
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: red');
});

test('Clicked disabled button has gray background and reverts to blue', () => {
  render(<App/>);
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  fireEvent.click(colorButton);

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: blue');
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Work for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });


});

// 버튼을 클릭하면 파란색으로 변경되는지 테스트
// test('button turns blue when clicked', () => {
//   render(<App />);
//   const colorButton = screen.getByRole('button', {name: 'Change to blue'});
// });



// test('renders learn react link', () => {
//   // render(<App />);
//   // const linkElement = screen.getByRole('link', { name: /learn react/i }); // 실제 역할로 요소 찾기
//   // expect(linkElement).toBeInTheDocument();
// });


