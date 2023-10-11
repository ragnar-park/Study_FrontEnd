import SubLayout from "@/components/SubLayout";
import {fetchSearchResults} from "@/api";

export default function Search({countries}) {
  return (
      <div>
      {countries.map((country) => (
        <div key={country.code}>{country.commonName}</div>
      ))}
      </div>
  );
};

// js의 모든 함수는 객체임으로 컴포넌트를 만들기 위해서 search 함수를 만들었지만 객체로도 활용할 수 있다.
Search.Layout = SubLayout;

export const getServerSideProps = async (context) => {
  // context에는 현재 브라우저에서 받은 요청의 정보가 들어있음

  // 1. 검색 결과 API 호출
  // 2. props 리턴

  const {q} = context.query;

  let countries = [];
  if(q) {
    countries = await fetchSearchResults(q);
  }

  return {
    props: {
      countries
    },
  }
}
