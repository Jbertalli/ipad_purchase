import Head from 'next/head';
import { Container, Divider, Icon, Grid } from 'semantic-ui-react';
import styles from '../styles/ipad.module.css';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const NotFound = () => {
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth > 1500) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 1500) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const isTablet = useMediaQuery(
    { minWidth: 800, maxWidth: 1189 }
  );

  return (
    <>
      <Head>
        <title>Page Not Found - Apple</title>
        <meta name="description" content="apple, ipad" />
      </Head>
      <Container 
        style={{ 
          position: 'static',
          transform: isTablet ? 'translateY(100px)' : null
        }}
      >
        <div>
          <div
            style={{
              fontSize: isDesktop ? '48px' : '30px',
              lineHeight: isDesktop ? '52px' : '30px',
              display: 'flex',
              justifyContent: 'center',
              fontFamily: 'Helvetica',
              fontWeight: '500',
              marginTop: '92px',
            }}
          >
            The page you are looking
          </div>
          <div
            style={{
              fontSize: isDesktop ? '48px' : '30px',
              display: 'flex',
              justifyContent: 'center',
              fontFamily: 'Helvetica',
              fontWeight: '500',
              lineHeight: '52px',
            }}
          >
            for cannot be found.
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              transform: 'translateY(54px)',
            }}
          >
            <div
              style={{
                border: '1px solid #d6d6d6',
                padding: '17px 49px 1px 16px',
                width: '490px',
                height: '56px',
                lineHeight: '21px',
                fontSize: '17px',
                fontFamily: 'Helvetica',
                fontWeight: '400',
                marginBottom: '14px',
                borderRadius: '4px',
                color: '#d6d6d6',
                cursor: 'text',
              }}
            >
              <Icon name="search" />
              &nbsp;&nbsp;Search apple.com
            </div>
          </div>
          <div
            style={{
              color: '#0070c9',
              cursor: 'pointer',
              fontSize: '17px',
              fontWeight: '400',
              lineHeight: '25px',
              textAlign: 'center',
              transform: 'translateY(65px)',
              opacity: '0.8',
            }}
          >
            <a className={styles.bluehovering}>Or see our site map</a>
            <Icon
              name="angle right"
              style={{ transform: 'scale(1) translate(0px, .7px)' }}
            />
          </div>
        </div>
      </Container>
      <div
        style={{
          transform: isTablet ? 'translateY(155px)' : null
        }}
      >
        <div
          style={{
            height: '795px',
            width: '100%',
            background: '#f5f5f7',
            position: 'static',
            zIndex: '-1',
            transform: isDesktop ? 'translateY(203px)' : 'translateY(290px)',
          }}
        />
        <div
          style={{
            position: 'static',
            zIndex: '1',
            transform: isDesktop ? 'translate(-4px, -538px)' : 'translate(-150px, -468px)',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: '400',
            textAlign: 'left',
            fontFamily: 'Helvetica',
            color: '#424245',
            display: 'flex',
            justifyContent: 'center',
            marginLeft: '-145px'
          }}
        >
          <div style={{ transform: 'translate(128px, -16px)' }}>
            <Icon
              name="apple"
              style={{ transform: 'scale(1.3) translateY(-1px)' }}
            />
            <Icon
              name="angle right"
              style={{
                transform: 'scale(1.4, 2) translate(2px, -1.7px)',
                opacity: '0.2',
              }}
            />
            <span style={{ fontWeight: '100', fontSize: '12px' }}>
              &nbsp;&nbsp;Page Not Found
            </span>
          </div>
          {isDesktop ? (
            <>
              <Grid>
                <Grid.Column style={{ width: '196px', lineHeight: '25.6px' }}>
                  <b>Shop and Learn</b>
                  <div style={{ fontWeight: '100' }}>
                    <div className={styles.hovering}>Store</div>
                    <div className={styles.hovering}>Mac</div>
                    <div className={styles.hovering}>iPad</div>
                    <div className={styles.hovering}>iPhone</div>
                    <div className={styles.hovering}>Watch</div>
                    <div className={styles.hovering}>AirPods</div>
                    <div className={styles.hovering}>TV & Home</div>
                    <div className={styles.hovering}>AirTag</div>
                    <div className={styles.hovering}>Accessories</div>
                    <div className={styles.hovering}>Gift Cards</div>
                  </div>
                </Grid.Column>
                <Grid.Column style={{ width: '196px', lineHeight: '25.6px' }}>
                  <b>Services</b>
                  <div style={{ fontWeight: '100' }}>
                    <div className={styles.hovering}>Apple Music</div>
                    <div className={styles.hovering}>Apple TV+</div>
                    <div className={styles.hovering}>Apple Fitness+</div>
                    <div className={styles.hovering}>Apple News+</div>
                    <div className={styles.hovering}>Apple Arcade</div>
                    <div className={styles.hovering}>iCloud</div>
                    <div className={styles.hovering}>Apple One</div>
                    <div className={styles.hovering}>Apple Card</div>
                    <div className={styles.hovering}>Apple Books</div>
                    <div className={styles.hovering}>Apple Podcasts</div>
                    <div className={styles.hovering}>App Store</div>
                  </div>
                  <div
                    style={{
                      transform: 'translateY(15px)',
                      marginBottom: '15px',
                    }}
                  >
                    <b>Account</b>
                  </div>
                  <div style={{ fontWeight: '100' }}>
                    <div className={styles.hovering}>Manage Your Apple ID</div>
                    <div className={styles.hovering}>Apple Store Account</div>
                    <div className={styles.hovering}>iCloud.com</div>
                  </div>
                </Grid.Column>
                <Grid.Column style={{ width: '196px', lineHeight: '25.6px' }}>
                  <b>Apple Store</b>
                  <div style={{ fontWeight: '100' }}>
                    <div className={styles.hovering}>Find a Store</div>
                    <div className={styles.hovering}>Genius Bar</div>
                    <div className={styles.hovering}>Today at Apple</div>
                    <div className={styles.hovering}>Apple Camp</div>
                    <div className={styles.hovering}>Apple Store App</div>
                    <div className={styles.hovering}>
                      Refurbished and Clearance
                    </div>
                    <div className={styles.hovering}>Financing</div>
                    <div className={styles.hovering}>Apple Trade In</div>
                    <div className={styles.hovering}>Order Status</div>
                    <div className={styles.hovering}>Shopping Help</div>
                  </div>
                </Grid.Column>
                <Grid.Column style={{ width: '196px', lineHeight: '25.1px' }}>
                  <div style={{ marginBottom: '5px' }}>
                    <b>For Business</b>
                  </div>
                  <div style={{ fontWeight: '100' }}>
                    <div className={styles.hovering}>Apple and Business</div>
                    <div className={styles.hovering}>Shop for Business</div>
                  </div>
                  <div
                    style={{
                      transform: 'translateY(15px)',
                      marginBottom: '15px',
                    }}
                  >
                    <b>For Education</b>
                  </div>
                  <div style={{ fontWeight: '100' }}>
                    <div className={styles.hovering}>Apple and Education</div>
                    <div className={styles.hovering}>Shop for K-12</div>
                    <div className={styles.hovering}>Shop for College</div>
                  </div>
                  <div
                    style={{
                      transform: 'translateY(15px)',
                      marginBottom: '15px',
                    }}
                  >
                    <b>For Healthcare</b>
                  </div>
                  <div style={{ fontWeight: '100' }}>
                    <div className={styles.hovering}>Apple in Healthcare</div>
                    <div className={styles.hovering}>Health on Apple Watch</div>
                    <div className={styles.hovering}>
                      Health Records on iPhone
                    </div>
                  </div>
                  <div
                    style={{
                      transform: 'translateY(15px)',
                      marginBottom: '15px',
                    }}
                  >
                    <b>For Government</b>
                  </div>
                  <div style={{ fontWeight: '100' }}>
                    <div className={styles.hovering}>Shop for Government</div>
                    <div className={styles.hovering}>
                      Shop for Veterans and Military
                    </div>
                  </div>
                </Grid.Column>
                <Grid.Column style={{ width: '196px', lineHeight: '25.2px' }}>
                  <div style={{ marginBottom: '5px' }}>
                    <b>Apple Values</b>
                  </div>
                  <div style={{ fontWeight: '100' }}>
                    <div className={styles.hovering}>Accessibility</div>
                    <div className={styles.hovering}>Education</div>
                    <div className={styles.hovering}>Environment</div>
                    <div className={styles.hovering}>Inclusion and Diversity</div>
                    <div className={styles.hovering}>Privacy</div>
                    <div className={styles.hovering}>
                      Racial Equity and Justice
                    </div>
                    <div className={styles.hovering}>Supplier Responsibility</div>
                  </div>
                  <div
                    style={{
                      transform: 'translateY(15px)',
                      marginBottom: '15px',
                    }}
                  >
                    <b>About Apple</b>
                  </div>
                  <div style={{ fontWeight: '100' }}>
                    <div className={styles.hovering}>Newsroom</div>
                    <div className={styles.hovering}>Apple Leadership</div>
                    <div className={styles.hovering}>Career Opportunities</div>
                    <div className={styles.hovering}>Investors</div>
                    <div className={styles.hovering}>Ethics & Compliance</div>
                    <div className={styles.hovering}>Events</div>
                    <div className={styles.hovering}>Contact Apple</div>
                  </div>
                </Grid.Column>
              </Grid>
            </>
          ) : null}
        </div>
      </div>
      {isDesktop ? (
        <>
          <div
            style={{
              transform: 'translate(259px, -513px)',
              fontSize: '12px',
              fontWeight: '400',
              color: '#6e6e73',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <span>
              More ways to shop:&nbsp;
              <a
                className={styles.bluehovering}
                style={{ color: '#0070c9', cursor: 'pointer' }}
              >
                Find an Apple Store
              </a>
              &nbsp;or&nbsp;
              <a
                className={styles.bluehovering}
                style={{ color: '#0070c9', cursor: 'pointer' }}
              >
                other retailer
              </a>
              &nbsp;near you. Or call 1-800-MY-APPLE.
            </span>
            <span
              style={{
                cursor: 'pointer',
                width: '980px',
                transform: 'translate(-518px, 33.5px)',
                fontSize: '12px',
                fontWeight: '400',
                color: '#6e6e73',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div>Copyright © 2022 Apple Inc. All rights reserved.</div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Privacy
                Policy&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              </div>
              <div>Terms of Use&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</div>
              <div>Sales and Refunds&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</div>
              <div>Legal&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</div>
              <div>
                Site
                Map&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              <div>United States</div>
            </span>
          </div>
          <center>
            <Divider
              style={{ width: '980px', transform: 'translate(0px, -520px)' }}
            />
          </center>
        </>
      ) : (
        <>
          <div>Copyright © 2022 Apple Inc. All rights reserved.</div>
        </>
      )}
    </>
  );
};

export default NotFound;
