import Blue from '../../components/colors/blue';
import Heading from '../../components/heading';
import Head from 'next/head';

function blueipad () {
    return (
        <>
            <Head>
                <title>Blue iPad Air</title>
                <meta name="description" content="blue" />
            </Head>
            <Heading />
            <div style={{ display: 'flex', justifyContent: 'center', marginRight: '1298px' }}>
                <Blue />
            </div>
        </>
    );
}

export default blueipad;
