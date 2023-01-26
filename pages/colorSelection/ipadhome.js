import Home from '../../components/colors/home';
import Heading from '../../components/heading';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import Sidebar from '../../components/sidebar';
import MobileHeading from '../../components/MobileHeading';

function home({ user }) {
  console.log(user);

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
        <title>iPad Air</title>
        <meta name="description" content="gray" />
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
            <Home />
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
                  position: 'absolute',
                }}
              >
                <Image
                  src="/images/NewAccordion.png"
                  alt="ipad"
                  width={320}
                  height={250}
                />
              </div>
            </div>
            <div>
              <Grid>
                <div
                  style={{
                    position: 'absolute',
                    transform: 'translate(-75%, -50px) scale(0.8)',
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

export default home;
