import Head from 'next/head'
import Client from '../routes/ClientsPage/ClientPage'


export default function ClientPage() {
  return (
    <>
      <Head>
        <title>Grovita Technologies Client</title>
      </Head>
      <Client />
    </>
  )
}
