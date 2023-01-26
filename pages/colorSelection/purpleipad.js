import Purple from '../../components/colors/purple';
import Heading from '../../components/heading';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import Sidebar from '../../components/sidebar';
import MobileHeading from '../../components/MobileHeading';

function purpleipad() {
  const [desktop, setDesktop] = useState(false);

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

  return (
    <>
      <Head>
        <title>Purple iPad Air</title>
        <meta name="description" content="purple" />
      </Head>
      {desktop ? (
        <>
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
      ) : (
        <>
          <MobileHeading />
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  position: 'relative',
                }}
              >
                <Image
                  src="/images/Purple.png"
                  priority
                  alt="ipad"
                  width={270}
                  height={290}
                />
              </div>
            </div>
            <div>
              <Grid>
                <div
                  style={{
                    position: 'absolute',
                    transform: 'translate(-75%, 0px) scale(0.8)',
                    marginTop: '-225px',
                  }}
                >
                  <Sidebar />
                </div>
              </Grid>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default purpleipad;
