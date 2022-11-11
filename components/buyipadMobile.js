import Head from 'next/head';
import Link from 'next/link';
import Flower from '../components/ipad_flower';
import { useEffect } from 'react';
import styles from '../styles/ipad.module.css';

export default function BuyMobile () {

    useEffect(() => {
        document.body.style.overflow = "hidden";
    return () => {
        document.body.style.overflow = "visible";
        }
    }, []);
    
    return (
        <>
            <Head>
                <title>iPad - Apple</title>
                <meta name="description" content="apple, ipad" />
            </Head>
            <div>
                <Link href="/ipadair">
                    <div style={{ background: 'black', width: '100%', height: '100%', cursor: 'pointer', position: 'absolute' }} />
                </Link>
            </div>
            {/* fixed is the key */}
            <div style={{ transform: 'scale(4.5)', position: 'fixed', display: 'flex', justifyContent: 'center', zIndex: '100' }}>
                <div style={{ transform: 'scale(0.1) translate(-60vw, 950px)' }}>
                    <Flower />
                </div>
                <div style={{ transform: 'translate(56%, 16vh) scale(0.23)' }}>
                    <Link href="/colorSelection/ipadhome">   
                        <button 
                            className={styles.button} 
                            style={{ 
                                borderRadius: '50px', 
                                border: 'transparent', 
                                padding: '8px 16px 8px 16px', 
                                background: '#0066CC', 
                                color: 'white', 
                                marginBottom: '9px', 
                                marginTop: '7px', 
                                fontWeight: '200px', 
                                fontSize: '17px', 
                                cursor: 'pointer' 
                            }}
                        >
                            <a>
                                Buy
                            </a>
                        </button>    
                    </Link>
                </div>
            </div>
        </>
    );
}
