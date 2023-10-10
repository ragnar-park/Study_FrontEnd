import SubLayout from "@/components/SubLayout";

export default function Search() {
  return (<div>Search Page</div>);
};

// js의 모든 함수는 객체임으로 컴포넌트를 만들기 위해서 search 함수를 만들었지만 객체로도 활용할 수 있다.
Search.Layout = SubLayout;
