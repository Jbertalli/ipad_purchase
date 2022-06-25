import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Apple Clone</title>
        <meta name="description" content="apple, ipad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <a href="/color">color</a>
      </div>
      <div>
        <a href="/ipad">iPad</a>
      </div>
      <div>
        <a href="/buyipad">iPad Colors</a>
      </div>
    </>  
  )
}
