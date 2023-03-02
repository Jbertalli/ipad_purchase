import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Back from '../components/ipadBack2';
import styles from '../styles/ipad.module.css';
import { Sticky } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';

export default function Air() {
  const [desktop, setDesktop] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (window.innerWidth > 440) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 440) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const isTablet = useMediaQuery(
    { minWidth: 100, maxWidth: 1290 }
  );

  const isPortrait = useMediaQuery(
    { minWidth: 100, maxWidth: 830 }
  );


  return (
    <>
      <Head>
        <title>iPad Air - Apple</title>
        <meta name="description" content="apple, ipad" />
      </Head>
      {desktop ? (
        <>
          <Sticky>
            <div style={{ position: 'relative', top: '0px', zIndex: '5' }}>
              <div
                style={{
                  height: '50px',
                  background: 'black',
                  paddingTop: '3px'
                }}
              >
                <span
                  style={{
                    color: 'white',
                    fontSize: '21px',
                    fontWeight: '400',
                    display: 'flex',
                    justifyContent: 'center',
                    transform: 'translate(-455px, 12px)',
                    cursor: 'pointer'
                  }}
                >
                  iPad Air
                </span>
                <div
                  style={{
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: '400',
                    display: 'flex',
                    justifyContent: 'center',
                    transform: isTablet ? 'translateY(-7px)' : 'translate(343px, -7px)',
                    opacity: '0.92',
                    cursor: 'pointer'
                  }}
                >
                  <span
                    className={styles.whitehovering}
                    style={{ marginLeft: isTablet ? '680px' : '10px', marginRight: '12.9px' }}
                  >
                    Overview
                  </span>
                  <span
                    className={styles.whitehovering}
                    style={{ marginLeft: '10px', marginRight: '12.9px' }}
                  >
                    Why iPad
                  </span>
                  <span
                    className={styles.whitehovering}
                    style={{ marginLeft: '10px', marginRight: '25.8px' }}
                  >
                    Tech Specs
                  </span>
                  <Link href="/colorSelection/ipadhome">
                    <button
                      className={styles.button}
                      href="/colorSelection/ipadhome"
                      style={{
                        background: 'rgb(0, 113, 227)',
                        padding: '2px 11px 2px 11px',
                        border: '0px',
                        borderRadius: '50px',
                        transform: 'translateY(-2px)'
                      }}
                    >
                      <a>Buy</a>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Sticky>
          <div
            onClick={() => router.push('/colorSelection/ipadhome')}
            style={{
              width: '100vw',
              height: '100vh',
              background: isPortrait ? 'red' : 'black',
              position: 'fixed',
              zIndex: '0',
              cursor: 'pointer'
            }}
          />
          {isTablet ? (
          <>
            <div
              style={{
                transform: isPortrait ? 'translate(0px, 130px)' : 'translate(79px, 130px)',
                position: 'absolute'
              }}
              onClick={() => router.push('/colorSelection/ipadhome')}
            >
              <Image
                src="/images/ipad_horizontal.png"
                alt="ipad"
                width={1020}
                height={350}
              />
            </div>
          </>
          ):(
          <>
            <div
              onClick={() => router.push('/colorSelection/ipadhome')}
              style={{ transform: 'translate(0vh, 43.2vh)', cursor: 'pointer' }}
            >
              <div
                className={styles.wrapper}
                style={{
                  transform: 'scale(4)',
                  position: 'relative',
                  zIndex: '0'
                }}
              >
                <center>
                  <div className={styles.neon_wrapper}>
                    <span
                      className={styles.txt}
                      style={{
                        fontFamily: 'Brush Script MT, Brush Script Std, cursive'
                      }}
                    >
                      air
                    </span>
                    <span className={styles.gradient} />
                  </div>
                </center>
              </div>
              <div
                style={{
                  transform: 'translate(50px, 0px) scaleX(2)',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    zIndex: '2',
                    transform: 'translate(219.5px, 2770px)'
                  }}
                >
                  <div
                    className={styles.frame}
                    style={{
                      background: 'linear-gradient(to bottom, #a7adba, #343d46)',
                      position: 'relative',
                      zIndex: '1',
                      transform: 'translate(-200px, -3070.4px) rotate(-90deg) perspective(1000px) rotateY(80deg) scale(0.7, 0.822)'
                    }}
                  >
                    <div style={{ transform: 'translate(-301px, 419.7px)' }}>
                      <Back />
                    </div>
                  </div>
                  <div
                    style={{
                      width: '490px',
                      height: '20px',
                      border: '1px solid #343d46)',
                      transform: 'translate(-245px, -3304px)',
                      position: 'relative',
                      zIndex: '-1',
                      borderRadius: '0px 0px 10px 10px',
                      background: 'linear-gradient(to right, #a7adba, black)'
                    }}
                  />
                </div>
              </div>
            </div>
          </>
          )}
        </>
      ) : (
        <>
          <Sticky>
            <div
              style={{
                position: 'fixed',
                top: '0px',
                zIndex: '5',
                width: '100vw'
              }}
            >
              <div
                style={{
                  height: '50px',
                  background: 'black',
                  paddingTop: '3px',
                  transform: 'translateY(48px)'
                }}
              >
                <span
                  style={{
                    color: 'white',
                    fontSize: '21px',
                    fontWeight: '400',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    cursor: 'pointer',
                    transform: 'translateY(10px)',
                    marginLeft: '10px'
                  }}
                >
                  iPad Air
                </span>
                <div
                  style={{
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: '400',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    opacity: '0.92',
                    cursor: 'pointer',
                    transform: 'translateY(-8px)',
                    marginRight: '10px'
                  }}
                >
                  <Link href="/colorSelection/ipadhome">
                    <button
                      className={styles.button}
                      href="/colorSelection/ipadhome"
                      style={{
                        background: 'rgb(0, 113, 227)',
                        padding: '2px 11px 2px 11px',
                        border: '0px',
                        borderRadius: '50px',
                        transform: 'translateY(-2px)'
                      }}
                    >
                      <a>Buy</a>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Sticky>
          <div
            style={{
              width: '100vw',
              height: '100vh',
              background: 'black',
              position: 'fixed',
              zIndex: '-1'
            }}
          />
          <Link href="/colorSelection/ipadhome">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '12vh'
              }}
            >
              <div
                style={{
                  position: 'absolute'
                }}
              >
                <Image
                  src="/images/ipad_vert.png"
                  priority
                  alt="ipad"
                  width={320}
                  height={520}
                />
              </div>
            </div>
          </Link>
        </>
      )}
    </>
  );
}
