import Link from 'next/link';

const ClientsPage = () => {
    const clients = [
        { id: 'max', name: 'Maximilian'},
        { id: 'manu', name: 'Manuel'},
    ]

    return(
        <div>
            <h1>
                The Clients Page
            </h1>
            <ul>
                {clients.map(client => <li key={client.id}>
                    <Link href={{
                        pathname: '/clients/[id]',
                        query:{id: client.id},
                    }}>{client.name}</Link>
                    {/* 기존 리엑트 방식 */}
                    {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
                </li> )}

                {/* <li><Link href='/clients/max'>Maximilian</Link></li>
                <li><Link href='/clients/manu'>Manuel</Link></li> */}
            </ul>
        </div>
    )
}

export default ClientsPage;