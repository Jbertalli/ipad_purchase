import Purple from '../../components/colors/purple';
import Heading from '../../components/heading';
import Head from 'next/head';

function purpleipad() {
  return (
    <>
      <Head>
        <title>Purple iPad Air</title>
        <meta name="description" content="purple" />
      </Head>
      <Heading />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginRight: '1298px',
        }}
      >
        <Purple />
      </div>
    </>
  );
}

export default purpleipad;
