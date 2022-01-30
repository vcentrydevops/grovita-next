import Head from 'next/head'
import Home from '../routes/Home/Home'


export default function HomePage() {
  return (
    <>
      <Head>
        <title>Grovita Technologies Home</title>
      </Head>
      <Home />
    </>
  )
}
