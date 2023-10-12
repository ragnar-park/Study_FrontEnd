import {useEffect} from "react";
import {fetchCountries} from "@/api";

export default function Home({countries}) {
    // SSR로 설정시 한번은 서버에서 동작하기 때문에 브라우저에서 사용하는 윈도우 객체를 사용할 수 없음
    // window.location
    // 서버에서 랜더링을 하기 위 한번 먼저 실행 후
    // 브라우저에서 하이드레이션 과정이 끝난 후 마운트 되서 실행되기 때문에 아래 콘솔을 브라우저에서 출력된다
    console.log("HOME");

    useEffect(() => {
        // 컴포넌트 마운트라는 이벤트는 서버측에서는 일어나지 않는 이벤트 이기 때문에 서버측에서는 동작하지 않고 브라우저에서만 출력된다.
       console.log("HOME MOUNT");
    });

    return (
        <div>
            {countries.map((country) => <div key={country.code}>{country.commonName}</div>)}
        </div>
        // <div>{name}</div> // getServerSideProps으로 인해 사전에 세팅된 props 즉 KOREA가 출력
    )
}

// SSG 방식
// 페이지를 서버측에서 랜더링함
// SSR과 다르게 빌드 타임에만 딱 한번 실행됨
// 만들어진 html을 전달만 하기 때문에 굉장히 빠른 속도로 화면에 노출된다.
export const getStaticProps = async () => {
    // 개발모드에서는 SSG의 동작을 확인 하기 어려움
    // 편리한 개발을 위해 코드 수정이 되었을때 바로 반응되게 하가 위해 ssr,ssg 상관 없이 처음부터 다시 페이지를 만듬

    // npm run build시 페이지별 렌더링 방식을 확인할 수 있음
    // 페이지 옆 기호로 알 수 있는 렌더링 정보
    //  ● : SSG 방식으로 동작함
    //  ○ : 페이지에 별도의 렌더링 방식을 지정하지 않은 것으로 데이터를 불러오지 않는 SSG임을 나타댐
    // 즉 디폴트 렌더링 방식은 데이터를 불러오지 않는 SSG방식이다
    //  λ : SSR 방식으로 동작함
    const countries = await fetchCountries();

    return {
        props: {
            countries,
        },
    }

// SSR 방식
// export const getStatic = async () => {
//     // API 호출 하여 SSR 적용
//
//     const countries = await fetchCountries();
//
//     return {
//         props: {
//             countries,
//         },
//     }

    // SSR을 위해서 서버측에서 페이지 컴포넌트에게 전달할 데이터를 설정하는 함수

    // 서버측에서만 실행이 됨으로
    // 아래 콘솔이 브라우저에서는 출력되지 않음
    // 브라우저에서 사용하는 윈도우 객체도 사용할 수 없음
    // console.log("getServerSideProps");

    // 반드시 객체를 반환
    // 필수값 props: {객체}
    // return {
    //     props: {
    //         name: "KOREA",
    //     },
    // }
};

// import Link from "next/link"; // 리엑트
// import {useRouter} from "next/router";
//
// export default function Home() {
//
//   const code ="KOR";
//
//   const router = useRouter();
//
//   const onClickButton = () => {
//     router.push("/search");
//     // router.push({
//     //       pathname:"/country/[code]", // 해당 페이지의 라우팅을 담당하는 파일의 이름 명시
//     //       query:{code: code} // 동적 경로의 url 파라미터 작성
//     // });
//   };
//
//   return (
//         <div>
//           Home Page
//
//           <div>
//             <button onClick={onClickButton}>Search 페이지로 이동</button>
//           </div>
//           <div>
//             <Link href={"/search"}>Search Page 이동</Link>
//           </div>
//
//           <div>
//           {/*<Link href={`/country/${code}`}>*/}
//           {/*  url 오브젝트로 사용 가능*/}
//           <Link href={{
//             pathname:"/country/[code]", // 해당 페이지의 라우팅을 담당하는 파일의 이름 명시
//             query:{code: code} // 동적 경로의 url 파라미터 작성
//           }}>
//             {code} 페이지로 이동
//           </Link>
//           </div>
//         </div>
//   )
// }
