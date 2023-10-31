# Review

1. fireEvent를 사용해 상호작용성 테스트
   - fireEvent는 React의 테스트 라이브러리에서 가져온 객체로 click과 같은 메서드를 포함
2. jest-dom 단언 사용
   - toBeEnabled() : 버튼의 활성화 (되었는지 확인)
   - toBeDisabled() : 버튼의 비활성화 (되었는지 확인)
   - toBeChecked() : 체크 박스 활성화 (되었는지 확인)
        - 이 단언에는 반대 기능의 단언이 없어 앞에 not을 사용 
          - .not.toBeChecked()
3. getByRole option { name: } : name 옵션을 사용해 페이지에 어떤 체크박스 및 버튼 참조 하고 있는지 식별
       - loginButton = screen.getByRole('button', { name: '로그인' }); : 로그인 버튼 찾기
4. Jest describe 전역 메서드 : 그룹 테스트 가능 
5. 유닛 테스트 방법 살펴보기
    - 일반적으로 함수가 다소 복잡한 경우에 사용
    - 테스트하려는 모든 케이스에 대한 컴포넌트를 재렌더링할 필요가 없게된다
