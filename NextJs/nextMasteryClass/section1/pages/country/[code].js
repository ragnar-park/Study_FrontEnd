import { useRouter } from "next/router";
import SubLayout from "@/components/SubLayout";
import {fetchCountry} from "@/api";

// [code].js  -> Catch - All route
// country 경로 뒤에 오는 모든 경로를 해당 파일이 잡아 오게됨
// ex: /country/kr/2023 허|

//  [[...code]].js -> Option Catch - All route
// code라는 url parameter가 옵셔널 하다는 의미로 없는 경우에도 대응이 가능함
// /country 허용

export default function Country({country}) {
    const router = useRouter();
    const {code} = router.query;

    return (
        <div>
            {country.commonName} | {country.officialName}
        </div>
    )
};

Country.Layout = SubLayout;

// 사전에 생성 - product 빌드시 생성된 페이지 확인 가능
export const getStaticPaths = async () => {
  return {
      paths: [
          { params : {code : 'ABW'}},
          { params: {code : 'KOR'}}
      ],
      fallback: false, // paths에 설정하지 않은 경로 접근 404페이지 반환
  }
};

export const getStaticProps = async (context) => {
    // * 동적 페이지에 ssg 적용
    // country/[code].js는 다양한 페이지를 렌더링 해야 함으로
    // 빌드 타임에 index.html 하나만 있는 것이 아닌
    // 접근 가능한 경로에 해당하는 페이지들 모두 생성해야 함

    const {code} = context.params

    let country = null;
    if(code) {
        country = await fetchCountry(code);
    }

    return {
        props: {
            country
        }
    }
}
