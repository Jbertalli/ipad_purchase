import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Apple Clone</title>
        <meta name="description" content="apple, ipad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Link href="/color">
          <a>color</a>
        </Link>
      </div>
      <div>
        <Link href="/ipad">
          <a>iPad</a>
        </Link>
      </div>
      <div>
        <Link href="/buyipad">
          <a>iPad Colors</a>
        </Link>
      </div>
    </>  
  )
}
