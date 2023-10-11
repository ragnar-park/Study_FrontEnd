import { useRouter } from "next/router";
import SubLayout from "@/components/SubLayout";
import {fetchCountry} from "@/api";

// [...code].js  -> Catch - All route
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

export const getServerSideProps = async (context) => {

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
