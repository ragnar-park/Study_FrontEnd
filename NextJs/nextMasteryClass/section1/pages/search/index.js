import SubLayout from "@/components/SubLayout";
import {fetchSearchResults} from "@/api";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function Search() {

  const router = useRouter();
  const { q } = router.query;

  const [countries, setCountries] = useState([]);

  const setData = async() => {
    const data = await fetchSearchResults(q);
    setCountries(data);
  }

  // 검색 결과 처럼 굳이 서버측에서 렌더링 할 필요가 없는 데이터가 있다면
  // useEffect 통해서 클라이언트 사이드에서 불러올수있다.
  useEffect(() => {
    if(q) {
      setData();
    }
  },[q])

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

// SSG에서는 쿼리 스트링을 처리하기 까다로움
// export const getServerSideProps = async (context) => {
//   // context에는 현재 브라우저에서 받은 요청의 정보가 들어있음
//
//   // 1. 검색 결과 API 호출
//   // 2. props 리턴
//
//   const {q} = context.query;
//
//   let countries = [];
//   if(q) {
//     countries = await fetchSearchResults(q);
//   }
//
//   return {
//     props: {
//       countries
//     },
//   }
// }
