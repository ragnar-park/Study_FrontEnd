import { useRouter  } from "next/router";

const ClientProjectsPage = () => {
    const router = useRouter();

    console.log(router.query);

    const loadProjectHandler = () => {
        // load data
        router.push({
            pathname: '/cliebts/[id]/[clientprojectid]',
            query: { id: 'ragnar',clientprojectid:'projecta'}
        });
        // router.push('/clients/ragnar/projecta');
    }
    return (
        <div>
            <h1>The Projects of a Given Client</h1>
            {/* 일반적으로 페이지 이동을 위해 button을 사용하지 않는다. */}
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
}

export default ClientProjectsPage;

