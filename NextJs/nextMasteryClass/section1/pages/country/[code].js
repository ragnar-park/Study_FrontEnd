import { useRouter } from "next/router";
import SubLayout from "@/components/SubLayout";
import {fetchCountry} from "@/api";
import style from './[code].module.css'
import Image from "next/image";

// [...code].js  -> Catch - All route
// country 경로 뒤에 오는 모든 경로를 해당 파일이 잡아 오게됨
// ex: /country/kr/2023 허|

//  [[...code]].js -> Option Catch - All route
// code라는 url parameter가 옵셔널 하다는 의미로 없는 경우에도 대응이 가능함
// /country 허용

export default function Country({country}) {
    const router = useRouter();
    const {code} = router.query;

    // 데이터가 없는 컴포넌트를 반환할때 노출 됨
    // if(!country) {
    //     return <div>존재하지 않는 국가입니다.</div>
    // }

    // 위 데이터가 없는 fallback 상태의 처리를 더 명시적으로
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.commonName}>
                    {country.flagEmoji}&nbsp;{country.commonName}
                </div>
                <div className={style.officialName}>
                    {country.officialName}
                </div>
            </div>

            <div className={style.flag_img}>
                <Image src={country.flagImg} fill />
            </div>

            <div className={style.body}>
                <div>
                    <b>코드 :</b>&nbsp;{country.code}
                </div>
                <div>
                    <b>수도 :</b>&nbsp;{country.capital.join(", ")}
                </div>
                <div>
                    <b>지역 :</b>&nbsp;{country.region}
                </div>
                <div>
                    <b>지도 :</b>&nbsp;
                    <a target="_blank" href={country.googleMapURL}>
                        {country.googleMapURL}
                    </a>
                </div>
            </div>
        </div>
    );
};

Country.Layout = SubLayout;

// 사전에 생성 - product 빌드시 생성된 페이지 확인 가능
export const getStaticPaths = async () => {
  return {
      paths: [
          { params : {code : 'ABW'}},
          { params: {code : 'KOR'}}
      ],
      fallback: true, // 빌드 타임에 생성하지 않 는 페이지도 제공 하면서 사용자에게 우선 데이터 없는 상태의 페이지를 줌
      //  사용자에게 우선 데이터 없는 상태의 페이지 -> fallback
      // 현재 컴포넌트 기준으로 존재하지 않는 국가입니다 (데이터 없는 페이지)가 잠깐 노출되었다가 요청한 code의 페이지가 노출됨 -> 뒤늦게 데이터만 전달달
      // 페이지 자체는 빠르게 보여줄 수 있음
      // 새로 고침과 같이 해당 페이지를 다시 요청할 경우 생성된 페이지를 반환하게됨

      // fallback: 'blocking', // 실시간으로 페이지가 생성되어 반환, 새로고침을 하게되면 새로 생성하는 것이 아닌 생성되었던 파일을 사용함(기존 ssg)
      // 존재하지 않는 페이지를 달라는 요청을 하게되면 실시간으로 페이지를 만들어 반환
      // 페이지를 만드는 동안은 브라우저는 계속 로딩상태

      // fallback: false, // paths에 설정하지 않은 경로 접근 404페이지 반환
  }
};

export const getStaticProps = async (context) => {
    // * 동적 페이지에 ssg 적용
    // country/[code].js는 다양한 페이지를 렌더링 해야 함으로
    // 빌드 타임에 index.html 하나만 있는 것이 아닌
    // 접근 가능한 경로에 해당하는 페이지들 모두 생성해야 함

    const {code} = context.params
    console.log(`${code} 생성!`)

    let country = null;
    if(code) {
        country = await fetchCountry(code);
    }

    return {
        props: {
            country
        },
        revalidate : 3, // ISR (중분 정적 재생성)
    }
}
