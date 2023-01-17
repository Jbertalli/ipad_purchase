import Starlight from '../../components/colors/starlight';
import Heading from '../../components/heading';
import Head from 'next/head';

function starlightipad() {
  return (
    <>
      <Head>
        <title>Starlight iPad Air</title>
        <meta name="description" content="starlight" />
      </Head>
      <Heading />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginRight: '1298px',
        }}
      >
        <Starlight />
      </div>
    </>
  );
}

export default starlightipad;
