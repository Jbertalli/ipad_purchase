import Home from '../../components/colors/home';
import Heading from '../../components/heading';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import Sidebar from '../../components/sidebar';
import MobileHeading from '../../components/MobileHeading';
import { useMediaQuery } from 'react-responsive';

function HomeIpad({ user }) {
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

  const isTablet = useMediaQuery(
    { minWidth: 100, maxWidth: 1290 }
  );

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
              marginRight: '1498px',
              transform: isTablet ? 'translate(-90px)' : 'translate(101px)'
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
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  transform: 'translateY(8px)',
                  position: 'absolute'
                }}
              >
                <Image
                  src="/images/NewAccordion.png"
                  priority
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
                    transform: 'translate(-75%, -30px) scale(0.8)'
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

export default HomeIpad;
