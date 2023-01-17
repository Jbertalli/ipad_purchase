import Gray from '../../components/colors/gray';
import Heading from '../../components/heading';
import Head from 'next/head';

function grayipad() {
  return (
    <>
      <Head>
        <title>Space Gray iPad Air</title>
        <meta name="description" content="gray" />
      </Head>
      <Heading />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginRight: '1298px',
        }}
      >
        <Gray />
      </div>
    </>
  );
}

export default grayipad;
