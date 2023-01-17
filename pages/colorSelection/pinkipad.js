import Pink from '../../components/colors/pink';
import Heading from '../../components/heading';
import Head from 'next/head';

function pinkipad() {
  return (
    <>
      <Head>
        <title>Pink iPad Air</title>
        <meta name="description" content="pink" />
      </Head>
      <Heading />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginRight: '1298px',
        }}
      >
        <Pink />
      </div>
    </>
  );
}

export default pinkipad;
