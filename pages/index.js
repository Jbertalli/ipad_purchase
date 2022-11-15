import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Buy from '../components/buyipad';
import BuyMobile from '../components/buyipadMobile';
export default function Home() {
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 440) {
        setDesktop(true);
    } else {
        setDesktop(false);
    }

    const updateMedia = () => {
        if (window.innerWidth > 440) {
            setDesktop(true);
        } else {
            setDesktop(false);
        }
    };
      window.addEventListener('resize', updateMedia);
      return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <>
      <Head>
        <title>Apple Clone</title>
        <meta name="description" content="apple, ipad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {desktop ? (
      <>
        <Buy />
      </>
      ):(
      <>
        <BuyMobile />
      </>
      )}
    </>
  )
}

//server-side rendering
Home.getInitialProps = async () => {
  const url = 'http://localhost:3010/api/hello';
  const response = await axios.get(url);
  return { examples: response.data };
  //return { hello: 'world' }
}
