import Home from '../../components/colors/home';
import Heading from '../../components/heading';
import Head from 'next/head';

function home () {
    return (
        <>
            <Head>
                <title>iPad Air</title>
                <meta name="description" content="gray" />
            </Head>
            <Heading />
            <div style={{ display: 'flex', justifyContent: 'center', marginRight: '1298px' }}>
                <Home />
            </div>
        </>
    );
}

export default home;
