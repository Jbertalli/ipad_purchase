import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, Container, Icon, Sticky, Modal, Divider, Dropdown } from 'semantic-ui-react';
import Logo from '../components/apple_logo2';
import styles from '../styles/ipad.module.css';
import { handleLogout } from '../utils/auth';
import { useMediaQuery } from 'react-responsive';

const Navbar = ({ user }) => {
  const [desktop, setDesktop] = useState(false);
  const [menuModal, setMenuModal] = useState(false);

  console.log(user);

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

  const router = useRouter();

  function isActive(route) {
    return route === router.pathname;
  }

  const isLandscapePhone = useMediaQuery(
    { minHeight: 200, maxHeight: 470 }
  );

  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  return (
    <>
      {desktop ? (
        <>
          <Sticky
            style={{
              width: isLandscapePhone ? '169%' : null
            }}
          >
            <Menu
              fluid
              style={{
                height: '44px',
                position: 'relative',
                zIndex: '9999',
                fontSize: '12px',
                fontWeight: '400',
                background: '#000000',
                opacity: '0.8',
                fontFamily: 'SF Pro Text',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  opacity: '0.8', 
                  display: 'flex'
                }}
              >
                <Link href="/" passHref>
                  <Menu.Item active={isActive('/')}>
                    <div style={{ cursor: 'pointer' }}>
                      <Logo />
                    </div>
                  </Menu.Item>
                </Link>
                <Link href="/" passHref>
                  <Menu.Item
                    style={{ color: '#F5F5F7', margin: '0em .65em 0em .65em' }}
                    active={isActive('/')}
                  >
                    Store
                  </Menu.Item>
                </Link>
                <Link href="/" passHref>
                  <Menu.Item
                    style={{ color: '#F5F5F7', margin: '0em .65em 0em .65em' }}
                    active={isActive('/')}
                  >
                    Mac
                  </Menu.Item>
                </Link>
                <Link href="/" passHref>
                  <Menu.Item
                    style={{ color: '#F5F5F7', margin: '0em .65em 0em .65em' }}
                    active={isActive('/')}
                  >
                    iPad
                  </Menu.Item>
                </Link>
                <Link href="/" passHref>
                  <Menu.Item
                    style={{ color: '#F5F5F7', margin: '0em .65em 0em .65em' }}
                    active={isActive('/')}
                  >
                    iPhone
                  </Menu.Item>
                </Link>
                {!isPortrait ? (
                <>
                  <Link href="/" passHref>
                    <Menu.Item
                      style={{ color: '#F5F5F7', margin: '0em .65em 0em .65em' }}
                      active={isActive('/')}
                    >
                      Watch
                    </Menu.Item>
                  </Link>
                  <Link href="/" passHref>
                    <Menu.Item
                      style={{ color: '#F5F5F7', margin: '0em .65em 0em .65em' }}
                      active={isActive('/')}
                    >
                      AirPods
                    </Menu.Item>
                  </Link>
                  <Link href="/" passHref>
                    <Menu.Item
                      style={{ color: '#F5F5F7', margin: '0em .65em 0em .65em' }}
                      active={isActive('/')}
                    >
                      TV & Home
                    </Menu.Item>
                  </Link>
                  <Link href="/" passHref>
                    <Menu.Item
                      style={{ color: '#F5F5F7', margin: '0em .65em 0em .65em' }}
                      active={isActive('/')}
                    >
                      Only on Apple
                    </Menu.Item>
                  </Link>
                </>
                ): null}
                <Link href="/" passHref>
                  <Menu.Item
                    style={{ color: '#F5F5F7', margin: '0em .65em 0em .65em' }}
                    active={isActive('/')}
                  >
                    Accessories
                  </Menu.Item>
                </Link>
                <Link href="/" passHref>
                  <Menu.Item
                    style={{ color: '#F5F5F7', margin: '0em .65em 0em .65em' }}
                    active={isActive('/')}
                  >
                    Support
                  </Menu.Item>
                </Link>
                <Link href="/" passHref>
                  <Menu.Item
                    style={{
                      color: '#F5F5F7',
                      margin: '0em .65em 0em .65em',
                      transform: 'scale(1.2)'
                    }}
                    active={isActive('/')}
                  >
                    <Icon name="search" />
                  </Menu.Item>
                </Link>
                <Link href="/" passHref>
                  <Menu.Item
                    style={{
                      color: '#F5F5F7',
                      margin: '0em .65em 0em .65em',
                      transform: 'scale(1.3)',
                    }}
                  >
                    <Icon name="suitcase" />
                  </Menu.Item>
                </Link>
                <Menu.Item>
                  <Dropdown
                    text="Account"
                    simple
                    style={{ color: 'white' }}
                  >
                    <Dropdown.Menu>
                      {user ? (
                        <>
                          <Dropdown.Item>
                            <Link href="/account" passHref>
                              <strong>{user.name}</strong>
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item onClick={handleLogout}>
                            <strong>Logout</strong>
                          </Dropdown.Item>
                        </>
                      ) : (
                        <>
                          <Dropdown.Item
                            href="/signup"
                            active={isActive('/signup')}
                          >
                            <strong>Signup</strong>
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item
                            href="/login"
                            active={isActive('/login')}
                          >
                            <strong>Login</strong>
                          </Dropdown.Item>
                        </>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
              </div>
            </Menu>
          </Sticky>
        </>
      ) : (
        <>
          <Sticky>
            <Menu
              style={{
                height: '48px',
                position: 'relative',
                zIndex: '9999',
                fontSize: '17px',
                fontWeight: '400',
                background: '#000000',
                opacity: '0.8',
                fontFamily: 'SF Pro Text',
                width: '100vw'
              }}
            >
              <Container
                style={{
                  opacity: '0.8',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Menu.Item
                  style={{ color: '#F5F5F7' }}
                  onClick={() => setMenuModal(true)}
                >
                  <div
                    style={{
                      transform: 'scaleX(1.8) translate(0.3px, -11px)',
                      color: '#F5F5F7'
                    }}
                  >
                    _
                  </div>
                  <div
                    style={{
                      transform: 'scaleX(1.8) translate(-4.7px, -4px)',
                      color: '#F5F5F7'
                    }}
                  >
                    _
                  </div>
                </Menu.Item>
                <Modal
                  className={styles.dropdown}
                  open={menuModal}
                  dimmer="blurring"
                  size="small"
                  style={{
                    width: '816px',
                    height: '570px',
                    position: 'fixed',
                    background: 'black',
                    width: '100%',
                    height: '100%',
                    transform: 'translateY(-14px)'
                  }}
                >
                  <div
                    style={{ cursor: 'pointer' }}
                    onClick={() => setMenuModal(false)}
                  >
                    <div
                      style={{
                        fontSize: '23px',
                        fontWeight: '100',
                        color: '#f5f5f7',
                        transform: 'translate(18px, 10px) scaleX(1.3)',
                        position: 'absolute',
                        opacity: '0.6'
                      }}
                    >
                      x
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        transform: 'translateY(-140px)'
                      }}
                    >
                      <Logo
                        style={{
                          color: 'red',
                          background: 'red',
                          position: 'absolute'
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ transform: 'translateY(-274px)' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                        marginBottom: '51px',
                        transform: 'translateY(-20px)'
                      }}
                    >
                      <div
                        style={{
                          background: 'gray',
                          fontWeight: '400',
                          height: '36px',
                          width: '69.5vw',
                          position: 'absolute',
                          borderRadius: '6px',
                          opacity: '0.2'
                        }}
                      />
                      <div
                        style={{
                          color: '#86868b',
                          fontSize: '17px',
                          position: 'fixed',
                          transform: 'translate(0%, 50%)',
                          opacity: '0.8',
                          left: '16.5%'
                        }}
                      >
                        <Icon name="search" />
                        Search apple.com
                      </div>
                    </div>
                    <Divider
                      style={{ background: '#f5f5f7', opacity: '0.3' }}
                    />
                    <Container
                      style={{
                        color: '#f5f5f7',
                        fontWeight: '100',
                        lineHeight: '14.6px',
                        fontSize: '17px',
                        width: '584px',
                        cursor: 'pointer',
                        padding: '0px 23px 0px 23px',
                      }}
                    >
                      <Link href="/" passHref>
                        <div>Store</div>
                      </Link>
                      <Divider
                        style={{ background: '#f5f5f7', opacity: '0.3' }}
                      />
                      <Link href="/" passHref>
                        <div>Mac</div>
                      </Link>
                      <Divider
                        style={{ background: '#f5f5f7', opacity: '0.3' }}
                      />
                      <Link href="/" passHref>
                        <div>iPad</div>
                      </Link>
                      <Divider
                        style={{ background: '#f5f5f7', opacity: '0.3' }}
                      />
                      <Link href="/" passHref>
                        <div>iPhone</div>
                      </Link>
                      <Divider
                        style={{ background: '#f5f5f7', opacity: '0.3' }}
                      />
                      <Link href="/" passHref>
                        <div>Watch</div>
                      </Link>
                      <Divider
                        style={{ background: '#f5f5f7', opacity: '0.3' }}
                      />
                      <Link href="/" passHref>
                        <div>AirPods</div>
                      </Link>
                      <Divider
                        style={{ background: '#f5f5f7', opacity: '0.3' }}
                      />
                      <Link href="/" passHref>
                        <div>TV & Home</div>
                      </Link>
                      <Divider
                        style={{ background: '#f5f5f7', opacity: '0.3' }}
                      />
                      <Link href="/" passHref>
                        <div>Only on Apple</div>
                      </Link>
                      <Divider
                        style={{ background: '#f5f5f7', opacity: '0.3' }}
                      />
                      <Link href="/" passHref>
                        <div>Accessories</div>
                      </Link>
                      <Divider
                        style={{ background: '#f5f5f7', opacity: '0.3' }}
                      />
                      <Link href="/" passHref>
                        <div>Support</div>
                      </Link>
                      <Divider
                        style={{ background: '#f5f5f7', opacity: '0.3' }}
                      />
                      <Menu.Item>
                        <Dropdown
                          text="Account"
                          simple
                          style={{ color: 'white' }}
                        >
                          <Dropdown.Menu>
                            {user ? (
                              <>
                                <Dropdown.Item>
                                  <Link href="/account" passHref>
                                    <strong>{user.name}</strong>
                                  </Link>
                                </Dropdown.Item>
                                <Dropdown.Item onClick={handleLogout}>
                                  <strong>Logout</strong>
                                </Dropdown.Item>
                              </>
                            ) : (
                              <>
                                <Dropdown.Item
                                  href="/signup"
                                  active={isActive('/signup')}
                                >
                                  <strong>Signup</strong>
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item
                                  href="/login"
                                  active={isActive('/login')}
                                >
                                  <strong>Login</strong>
                                </Dropdown.Item>
                              </>
                            )}
                          </Dropdown.Menu>
                        </Dropdown>
                      </Menu.Item>
                    </Container>
                  </div>
                </Modal>
                <Link href="/" passHref>
                  <Menu.Item>
                    <div
                      style={{
                        cursor: 'pointer',
                        transform: 'scale(1.1) translateY(-3px)'
                      }}
                    >
                      <Logo />
                    </div>
                  </Menu.Item>
                </Link>
                <Link href="/" passHref>
                  <Menu.Item
                    style={{
                      color: '#F5F5F7',
                      transform: 'scale(1.1) translateY(-1.5px)'
                    }}
                  >
                    <Icon name="suitcase" />
                  </Menu.Item>
                </Link>
              </Container>
            </Menu>
          </Sticky>
        </>
      )}
    </>
  );
};

export default Navbar;
