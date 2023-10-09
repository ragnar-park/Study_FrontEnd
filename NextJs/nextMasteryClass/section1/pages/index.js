import Link from "next/link"; // 리엑트
import {useRouter} from "next/router";

export default function Home() {

  const code ="KOR";

  const router = useRouter();

  const onClickButton = () => {
    router.push("/search");
    // router.push({
    //       pathname:"/country/[code]", // 해당 페이지의 라우팅을 담당하는 파일의 이름 명시
    //       query:{code: code} // 동적 경로의 url 파라미터 작성
    // });
  };

  return (
        <div>
          Home Page

          <div>
            <button onClick={onClickButton}>Search 페이지로 이동</button>
          </div>
          <div>
            <Link href={"/search"}>Search Page 이동</Link>
          </div>

          <div>
          {/*<Link href={`/country/${code}`}>*/}
          {/*  url 오브젝트로 사용 가능*/}
          <Link href={{
            pathname:"/country/[code]", // 해당 페이지의 라우팅을 담당하는 파일의 이름 명시
            query:{code: code} // 동적 경로의 url 파라미터 작성
          }}>
            {code} 페이지로 이동
          </Link>
          </div>
        </div>
  )
}
