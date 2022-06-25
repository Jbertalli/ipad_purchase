import Head from 'next/head';
import Flower from '../components/ipad_flower';
import styles from '../styles/ipad.module.css';
import { Grid } from 'semantic-ui-react';
import Link from 'next/link';

export default function Buy () {
    
    return (
        <>
            <Head>
                <title>iPad - Apple</title>
                <meta name="description" content="apple, ipad" />
            </Head> 
            <Grid style={{ background: 'black', position: 'relative', zIndex: '-100' }}>
                <Grid.Column>
                    <div style={{ background: 'black', width: '200px', height: '230px', transform: 'translate(0px, 250px)', color: 'white', fontFamily: 'SF Pro Text', position: 'relative', zIndex: '2' }}>
                        <center>
                            <div style={{ color: '#FF6600', fontSize: '12px', fontWeight: '400', lineHeight: '25px' }}>New</div>
                            <div style={{ fontSize: '40px', fontWeight: '600', lineHeight: '44px' }}>iPad air</div>
                            <div style={{ fontSize: '21px', fontWeight: '600', lineHeight: '25px', marginTop: '7px' }}>Light. Bright.</div>
                            <div style={{ fontSize: '21px', fontWeight: '600', lineHeight: '25px' }}>Full of might.</div>
                            <div style={{ fontSize: '17px', fontWeight: '400', lineHeight: '25px' }}>From $599</div>
                            <Link href="/colorSelection/grayipad">   
                                <button style={{ borderRadius: '50px', border: 'transparent', padding: '8px 16px 8px 16px', background: '#0066CC', color: 'white', marginBottom: '9px', marginTop: '7px', fontWeight: '400px', fontSize: '17px', cursor: 'pointer', position: 'relative', zIndex: '100000' }}><a>Buy</a></button>    
                            </Link>    
                            <div style={{ color: '#0066CC', fontSize: '17px', fontWeight: '400', lineHeight: '25px', cursor: 'pointer' }}>Learn more {'>'}</div>
                        </center>
                        <div className={styles.wrapper2} style={{ transform: 'translate(57px, -230px) scale(0.35)', position: 'relative', zIndex: '0' }}>
                            <div className={styles.neon_wrapper2}>
                                <span className={styles.txt2} style={{ fontFamily: 'Brush Script MT, Brush Script Std, cursive', transform: 'translate(-10px, 0px)' }}>air</span>
                                <span className={styles.gradient2} />
                            </div>
                        </div>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <Flower />
                </Grid.Column>
            </Grid>
        </>
    );
}