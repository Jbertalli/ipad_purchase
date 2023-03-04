import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Divider, Container, Button, Icon, Modal, Form, Message, Checkbox } from 'semantic-ui-react';
import styles from '../styles/ipad.module.css';
import FocusLock from 'react-focus-lock';
import catchErrors from '../utils/catchErrors';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import { handleLogin } from '../utils/auth';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

const INITIAL_USER = {
  email: '',
  password: '',
};

export default function Login() {
  const [user, setUser] = useState(INITIAL_USER);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState('');
  const [signInModal, setSignInModal] = useState(false);
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

  useEffect(() => {
    const isUser = Object.values(user).every((el) => Boolean(el));
    isUser ? setDisabled(false) : setDisabled(true);
  }, [user]);

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const url = `${baseUrl}/api/login`;
      const payload = { ...user };
      const response = await axios.post(url, payload);
      handleLogin(response.data);
      console.log(user);
    } catch (error) {
      catchErrors(error, setError);
    }
  }

  const isTablet = useMediaQuery(
    { minWidth: 100, maxWidth: 1290 }
  );

  const isLandscapePhone = useMediaQuery(
    { minHeight: 200, maxHeight: 470 }
  );

  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  return (
    <>
      <Head>
        <title>Sign In - Secure Checkout</title>
        <meta name="description" content="apple, ipad" />
      </Head>
      {desktop ? (
        <>
          <div
            style={{
              transform: isLandscapePhone ? 'translate(250px, -70px)' : null
            }}
          >
            <Container 
              style={{ 
                position: 'relative', 
                zIndex: '100' 
              }}
            >
              <div
                style={{
                  transform: 'translate(10px, 130px)',
                  fontSize: '34px',
                  fontWeight: '600',
                  lineHeight: '44px',
                  paddingTop: '34px',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                Sign in to Apple Store
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input
                    onClick={() => setSignInModal(true)}
                    type="search"
                    placeholder="Apple ID"
                    style={{
                      transform: 'translate(30px, 159px)',
                      width: '328px',
                      fontSize: '17px',
                      height: '44px',
                      lineHeight: '22px',
                      textAlign: 'left',
                      border: '.5px solid #49494950',
                      borderRadius: '6px',
                      paddingLeft: '15px'
                    }}
                  />
                  <Icon
                    name="arrow alternate circle right outline"
                    size="big"
                    style={{
                      color: '#49494960',
                      transform: 'translate(-14px, 168px)'
                    }}
                  />
                </div>
              </div>
              <Modal
                open={signInModal}
                dimmer="blurring"
                size="small"
                style={{
                  borderRadius: '20px',
                  width: '816px',
                  height: '470px',
                  position: 'fixed',
                  top: '600px',
                  transform: isTablet ? (isPortrait ? (!desktop ? (isLandscapePhone ? '' : 
                      'translate(0px, -50px) scale(0.8)') : 
                      'translate(-117px, -450px) scale(0.8)') : 
                      (isLandscapePhone ? 'translate(125px, -520px) scale(0.95)' : 
                      'translate(-60px, -450px) scale(0.85)')) : 
                      'translateY(-300px)'
                }}
              >
                <div
                  style={{
                    background: 'lightgray',
                    height: '36px',
                    width: '36px',
                    borderRadius: '50%',
                    transform: 'translate(15px, 18px)',
                    opacity: '0.8',
                    cursor: 'pointer'
                  }}
                  onClick={() => setSignInModal(false)}
                >
                  <h1
                    style={{
                      fontSize: '30px',
                      fontWeight: 'lighter',
                      color: 'gray',
                      transform: 'translate(10px, -5px)'
                    }}
                  >
                    x
                  </h1>
                </div>
                <center
                  style={{
                    fontSize: '40px',
                    fontWeight: '600',
                    lineHeight: '44px'
                  }}
                >
                  Sign In
                </center>
                <div>
                  <FocusLock>
                    <Form error={Boolean(error)} onSubmit={handleSubmit}>
                      <Message error header="Error" content={error} />
                      <center>
                        <div
                          style={{
                            transform: 'translate(-222px)',
                            fontSize: '17px',
                            fontWeight: '500',
                            paddingBottom: '5px'
                          }}
                        >
                          Email
                        </div>
                        <Form.Input
                          placeholder="Email"
                          type="email"
                          style={{ width: '60%' }}
                          name="email"
                          value={user.email}
                          onChange={handleChange}
                        />
                      </center>
                      <center>
                        <div
                          style={{
                            transform: 'translate(-205.2px)',
                            fontSize: '17px',
                            fontWeight: '500',
                            padding: '30px 0px 5px 0px'
                          }}
                        >
                          Password
                        </div>
                        <Form.Input
                          placeholder="Password"
                          type="password"
                          style={{ width: '60%' }}
                          name="password"
                          value={user.password}
                          onChange={handleChange}
                        />
                      </center>
                      <div style={{ paddingTop: '30px' }}>
                        <Button
                          disabled={disabled}
                          type="submit"
                          style={{
                            transform: 'translate(163px, 0px)',
                            fontSize: '17px',
                            fontWeight: '400',
                            color: 'white',
                            background: '#0066CC',
                            border: '0px',
                            borderRadius: '10px',
                            width: '284px',
                            height: '56px'
                          }}
                        >
                          Sign In
                        </Button>
                      </div>
                    </Form>
                  </FocusLock>
                </div>
                <div
                  style={{
                    background: '#F5F5F7',
                    width: '816px',
                    height: '118px',
                    transform: 'translateY(46px)',
                    borderRadius: '0px 0px 19.5px 19.5px',
                    paddingTop: '25px',
                    fontSize: '12px'
                  }}
                >
                  <center
                    style={{
                      transform: 'translateY(25px)',
                      fontSize: '17px',
                      fontWeight: '400',
                      lineHeight: '21px',
                      marginBottom: '33px'
                    }}
                  >
                    {`Don't have an account?`}&nbsp;
                    <span style={{ color: '#0070c9', cursor: 'pointer' }}>
                      <a className={styles.bluehovering}>
                        <Link href="/signup">Sign up</Link>
                      </a>
                    </span>
                  </center>
                </div>
              </Modal>
            </Container>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                transform: 'translateY(219px)'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  transform: 'translate(-15px)',
                  opacity: '0.8'
                }}
              >
                <span>
                  <Checkbox />
                  <div
                    style={{
                      transform: 'translate(15px, -23px)',
                      fontSize: '17px',
                      fontWeight: '300'
                    }}
                  >
                    &nbsp;&nbsp;Remember me
                  </div>
                </span>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                transform: 'translateY(258px)'
              }}
            >
              <div
                style={{
                  color: 'black',
                  background: 'black',
                  width: '10vw',
                  height: '1px',
                  opacity: '0.3'
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                transform: 'translateY(-150px)'
              }}
            >
              <div
                style={{ transform: 'translateY(300px)', position: 'absolute' }}
              >
                <div
                  style={{
                    color: '#0070c9',
                    cursor: 'pointer',
                    transform: 'translate(35px, 124px)'
                  }}
                >
                  Forgot Apple ID or password?
                  <div
                    style={{
                      transform: 'rotate(-45deg) scale(1.1, 0.8) translate(137px, 150px)',
                      position: 'absolute',
                      color: '#0070c9',
                      cursor: 'pointer',
                      opacity: '0.7'
                    }}
                  >
                    <Icon name="arrow right" />
                  </div>
                </div>
                <div style={{ transform: 'translate(-10px, 133px)' }}>
                  {`Don't have an Apple ID?`}{' '}
                  <span style={{ color: '#0070c9', cursor: 'pointer' }}>
                    Create yours now.
                  </span>
                  <div
                    style={{
                      transform: 'rotate(-45deg) scale(1.1, 0.8) translate(190px, 225px)',
                      position: 'absolute',
                      color: '#0070c9',
                      cursor: 'pointer',
                      opacity: '0.7'
                    }}
                  >
                    <Icon name="arrow right" />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ transform: 'translateY(385px)' }}>
              <Divider />
              <div
                style={{
                  transform: isTablet ? null : 'translate(-288px, 8px)',
                  fontSize: '17px',
                  fontWeight: '400',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                Need some help?&nbsp;
                <span style={{ cursor: 'pointer', color: '#0070c9' }}>
                  <a className={styles.bluehovering}>Chat now</a>
                </span>
                &nbsp;or call 1‑800‑MY‑APPLE.
              </div>
            </div>
            {!isTablet ? (
            <>
              <div
                style={{
                  transform: 'translateY(417px)',
                  position: 'absolute',
                  height: '132px',
                  width: '100%',
                  background: '#f5f5f7',
                  zIndex: '-1'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ transform: 'translate(1010px, 432px)' }}>
                  <div
                    style={{
                      fontSize: '12px',
                      fontWeight: '400',
                      color: '#6e6e73',
                      width: '3000px'
                    }}
                  >
                    The Apple Online Store uses industry-standard encryption to
                    protect the confidentiality of the information you submit. Learn
                    more about our Security Policy.
                  </div>
                  <Divider
                    style={{ transform: 'translateY(-0.6px)', width: '978px' }}
                  />
                  <div
                    style={{
                      transform: 'translate(-751px, -0.6px)',
                      fontSize: '12px',
                      fontWeight: '400',
                      color: '#6e6e73',
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
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
                    <div
                      style={{
                        cursor: 'pointer',
                        width: '980px',
                        transform: 'translate(-518px, 21px)',
                        fontSize: '12px',
                        fontWeight: '400',
                        color: '#6e6e73',
                        display: 'flex',
                        justifyContent: 'center'
                      }}
                    >
                      <div>Copyright © 2023 Apple Inc. All rights reserved.</div>
                      <div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Privacy
                        Policy&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                      </div>
                      <div>Terms of Use&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</div>
                      <div>
                        Sales and Refunds&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                      </div>
                      <div>Legal&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</div>
                      <div>
                        Site
                        Map&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </div>
                      <div>United States</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
            ):null }
          </div>
        </>
      ) : (
        <>
          <Container
            style={{
              position: 'relative',
              zIndex: '100',
              transform: 'translateY(-113px)'
            }}
          >
            <div
              style={{
                transform: 'translateY(150px)',
                fontSize: '30px',
                fontWeight: '600',
                lineHeight: '44px',
                paddingTop: '34px',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              Sign in to Apple Store
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <input
                  onClick={() => setSignInModal(true)}
                  type="search"
                  placeholder="Apple ID"
                  style={{
                    transform: 'translate(20px, 159px)',
                    width: '328px',
                    fontSize: '17px',
                    height: '44px',
                    lineHeight: '22px',
                    textAlign: 'left',
                    border: '.5px solid #49494950',
                    borderRadius: '6px',
                    paddingLeft: '15px'
                  }}
                />
                <Icon
                  name="arrow alternate circle right outline"
                  size="big"
                  style={{
                    color: '#49494960',
                    transform: 'translate(-14px, 168px)'
                  }}
                />
              </div>
            </div>
            <Modal
              open={signInModal}
              dimmer="blurring"
              size="small"
              style={{
                transform: 'translateY(-235px)',
                borderRadius: '20px',
                width: '95%',
                height: '380px',
                position: 'fixed',
                top: '350px'
              }}
            >
              <div
                style={{
                  background: 'lightgray',
                  height: '36px',
                  width: '36px',
                  borderRadius: '50%',
                  transform: 'translate(15px, 18px)',
                  opacity: '0.8',
                  cursor: 'pointer'
                }}
                onClick={() => setSignInModal(false)}
              >
                <h1
                  style={{
                    fontSize: '30px',
                    fontWeight: 'lighter',
                    color: 'gray',
                    transform: 'translate(10px, -5px)'
                  }}
                >
                  x
                </h1>
              </div>
              <center
                style={{
                  fontSize: '40px',
                  fontWeight: '600',
                  lineHeight: '44px',
                  transform: 'translateY(-10px)'
                }}
              >
                Sign In
              </center>
              <div>
                <FocusLock>
                  <Form error={Boolean(error)} onSubmit={handleSubmit}>
                    <Message error header="Error" content={error} />
                    <center>
                      <div
                        style={{
                          transform: 'translate(-22vw)',
                          fontSize: '17px',
                          fontWeight: '500',
                          paddingBottom: '5px'
                        }}
                      >
                        Email
                      </div>
                      <Form.Input
                        placeholder="Email"
                        type="email"
                        style={{ width: '60%' }}
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                      />
                    </center>
                    <center>
                      <div
                        style={{
                          transform: 'translate(-18vw)',
                          fontSize: '17px',
                          fontWeight: '500',
                          padding: '30px 0px 5px 0px'
                        }}
                      >
                        Password
                      </div>
                      <Form.Input
                        placeholder="Password"
                        type="password"
                        style={{ width: '60%' }}
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                      />
                    </center>
                    <div
                      style={{
                        paddingTop: '30px',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <Button
                        disabled={disabled}
                        type="submit"
                        style={{
                          fontSize: '17px',
                          fontWeight: '400',
                          color: 'white',
                          background: '#0066CC',
                          border: '0px',
                          borderRadius: '10px',
                          width: '200px',
                          height: '50px'
                        }}
                      >
                        Sign In
                      </Button>
                    </div>
                  </Form>
                </FocusLock>
              </div>
              <div
                style={{
                  background: '#F5F5F7',
                  width: '100%',
                  height: '118px',
                  transform: 'translateY(46px)',
                  borderRadius: '0px 0px 19.5px 19.5px',
                  paddingTop: '25px',
                  fontSize: '12px'
                }}
              >
                <center
                  style={{
                    transform: 'translateY(25px)',
                    fontSize: '17px',
                    fontWeight: '400',
                    lineHeight: '21px',
                    marginBottom: '33px'
                  }}
                >
                  {`Don't have an account?`}&nbsp;
                  <span style={{ color: '#0070c9', cursor: 'pointer' }}>
                    <a className={styles.bluehovering}>
                      <Link href="/signup">Sign up</Link>
                    </a>
                  </span>
                </center>
              </div>
            </Modal>
          </Container>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              transform: 'translateY(110px)'
            }}
          >
            <div
              style={{
                position: 'absolute',
                transform: 'translate(-15px)',
                opacity: '0.8'
              }}
            >
              <span>
                <Checkbox />
                <div
                  style={{
                    transform: 'translate(15px, -23px)',
                    fontSize: '17px',
                    fontWeight: '300'
                  }}
                >
                  &nbsp;&nbsp;Remember me
                </div>
              </span>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              transform: 'translateY(150px)'
            }}
          >
            <div
              style={{
                color: 'black',
                background: 'black',
                width: '55vw',
                height: '1px',
                opacity: '0.3'
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              transform: 'translateY(-150px)'
            }}
          >
            <div
              style={{ transform: 'translateY(300px)', position: 'absolute' }}
            >
              <div
                style={{
                  color: '#0070c9',
                  cursor: 'pointer',
                  transform: 'translate(35px, 17px)'
                }}
              >
                Forgot Apple ID or password?
                <div
                  style={{
                    transform: 'rotate(-45deg) scale(1.1, 0.8) translate(137px, 150px)',
                    position: 'absolute',
                    color: '#0070c9',
                    cursor: 'pointer',
                    opacity: '0.7'
                  }}
                >
                  <Icon name="arrow right" />
                </div>
              </div>
              <div style={{ transform: 'translate(-10px, 26px)' }}>
                {`Don't have an Apple ID?`}{' '}
                <span style={{ color: '#0070c9', cursor: 'pointer' }}>
                  Create yours now.
                </span>
                <div
                  style={{
                    transform: 'rotate(-45deg) scale(1.1, 0.8) translate(190px, 225px)',
                    position: 'absolute',
                    color: '#0070c9',
                    cursor: 'pointer',
                    opacity: '0.7'
                  }}
                >
                  <Icon name="arrow right" />
                </div>
              </div>
            </div>
          </div>
          <center style={{ transform: 'translateY(54vh)', position: 'fixed' }}>
            <div style={{ marginBottom: '7vh' }}>
              <Divider />
            </div>
            <div style={{ fontSize: '17px', fontWeight: '400' }}>
              Need some help?&nbsp;
              <span style={{ cursor: 'pointer', color: '#0070c9' }}>
                <a className={styles.bluehovering}>Chat now</a>
              </span>
              &nbsp;or call 1‑800‑MY‑APPLE.
            </div>
          </center>
        </>
      )}
    </>
  );
}
