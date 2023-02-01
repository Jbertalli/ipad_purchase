import Head from 'next/head';
import Flower from '../components/ipad_flower';
import styles from '../styles/ipad.module.css';
import { Grid } from 'semantic-ui-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Buy() {
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
              height: '829px',
              position: 'relative',
              zIndex: '0',
              cursor: 'pointer',
            }}
          />
        </Link>
      </div>
      <Grid
        style={{
          display: 'flex',
          justifyContent: 'center',
          transform: 'translate(-757px)',
        }}
      >
        <Grid.Column
          width={8}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginLeft: '13px',
            position: 'fixed',
          }}
        >
          <div
            style={{
              background: 'black',
              width: '200px',
              height: '230px',
              transform: 'translate(380px, -540px)',
              color: 'white',
              fontFamily: 'Helvetica',
              position: 'relative',
              zIndex: '2',
            }}
          >
            <center>
              <div
                style={{
                  color: '#FF6600',
                  fontSize: '12px',
                  fontWeight: '400',
                  lineHeight: '25px',
                  marginBottom: '10px',
                }}
              >
                New
              </div>
              <div
                style={{
                  fontSize: '56px',
                  fontWeight: '400',
                  lineHeight: '44px',
                }}
              >
                iPad air
              </div>
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: '400',
                  lineHeight: '28px',
                  marginTop: '7px',
                }}
              >
                Light. Bright.
              </div>
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: '400',
                  lineHeight: '28px',
                }}
              >
                Full of might.
              </div>
              <div
                style={{
                  fontSize: '17px',
                  fontWeight: '200',
                  lineHeight: '25px',
                  marginTop: '20px',
                  marginBottom: '5px',
                }}
              >
                From $599
              </div>
              <Link href="/colorSelection/ipadhome">
                <button
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
                    cursor: 'pointer',
                  }}
                >
                  <a>Buy</a>
                </button>
              </Link>
              <div
                className={styles.bluehovering}
                style={{
                  color: '#0066CC',
                  fontSize: '17px',
                  fontWeight: '500',
                  lineHeight: '25px',
                  cursor: 'pointer',
                }}
              >
                Learn more {'>'}
              </div>
            </center>
            <div
              className={styles.wrapper2}
              style={{
                transform: 'translate(88px, -260px) scale(0.5)',
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
        </Grid.Column>
        <Grid.Column
          width={8}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginLeft: '400px',
            position: 'fixed',
          }}
        >
          <Flower />
        </Grid.Column>
      </Grid>
    </>
  );
}
