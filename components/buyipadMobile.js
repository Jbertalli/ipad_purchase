import Head from 'next/head';
import Link from 'next/link';
import Flower from '../components/ipad_flower';
import { useEffect } from 'react';
import styles from '../styles/ipad.module.css';

export default function BuyMobile() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <>
      <Head>
        <title>iPad - Apple</title>
        <meta name="description" content="apple, ipad" />
      </Head>
      <div>
        <Link href="/ipadair">
          <div
            style={{
              background: 'black',
              width: '100%',
              height: '100%',
              cursor: 'pointer',
              position: 'absolute',
            }}
          />
        </Link>
      </div>
      {/* fixed is the key */}
      <div
        style={{ transform: 'scale(4.5)', position: 'fixed', zIndex: '100' }}
      >
        <div
          style={{
            transform: 'scale(0.1) translate(-69vw, 950px)',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Flower />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transform: 'translateY(540px)',
        }}
      >
        <div
          style={{
            background: 'black',
            width: '200px',
            height: '230px',
            color: 'white',
            fontFamily: 'Helvetica',
            position: 'absolute',
            zIndex: '2',
            transform: 'scale(0.8)',
          }}
        >
          <center>
            <div
              style={{
                fontSize: '56px',
                fontWeight: '400',
                lineHeight: '44px',
              }}
            >
              iPad air
            </div>
            <Link href="/colorSelection/ipadhome">
              <button
                className={styles.button}
                style={{
                  borderRadius: '50px',
                  border: 'transparent',
                  padding: '8px 16px 8px 16px',
                  background: '#0066CC',
                  color: 'white',
                  marginBottom: '19px',
                  marginTop: '67px',
                  fontWeight: '200px',
                  fontSize: '17px',
                  cursor: 'pointer',
                  transform: 'scale(1.4)',
                }}
              >
                <a>Buy</a>
              </button>
            </Link>
          </center>
          <div
            className={styles.wrapper2}
            style={{
              transform: 'translate(87px, -193px) scale(0.5)',
              position: 'relative',
              zIndex: '0',
            }}
          >
            <div className={styles.neon_wrapper2}>
              <span
                className={styles.txt2}
                style={{
                  fontFamily: 'Brush Script MT, Brush Script Std, cursive',
                  transform: 'translate(-10px, 0px)',
                }}
              >
                air
              </span>
              <span className={styles.gradient2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
