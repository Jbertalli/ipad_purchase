import { useRouter } from 'next/router';
import Image from 'next/image';
import Router from 'next/router';
import React, { useState, useEffect } from 'react';
import { Divider, Icon, Modal, Grid, Button, Item } from 'semantic-ui-react';
import styles from '../styles/ipad.module.css';
import NamedColor from '../components/namedColor';
import Zip from '../components/zip';
import City from '../components/city';

export default function Sidebar() {
  const [storageModal, setStorageModal] = useState(false);
  const [connectivityModal, setConnectivityModal] = useState(false);
  const [engravingModal, setEngravingModal] = useState(false);
  const [color, setColor] = useState(false);
  const [gray, setGray] = useState('');
  const [pink, setPink] = useState('');
  const [purple, setPurple] = useState('');
  const [blue, setBlue] = useState('');
  const [starlight, setStarlight] = useState('');
  const [storage, setStorage] = useState(false);
  const [sixtyfour, setSixtyfour] = useState('');
  const [onetwentyeight, setOnetwentyeight] = useState('');
  const [connectivity, setConnectivity] = useState(false);
  const [wifi, setWifi] = useState('');
  const [cellular, setCellular] = useState('');
  const [engraving, setEngraving] = useState(false);
  const [addengraving, setAddengraving] = useState('');
  const [noengraving, setNoengraving] = useState('');
  const [value, setValue] = useState(0);
  const [cellValue, setCellValue] = useState(0);
  const [noAppleCare, setNoAppleCare] = useState(false);
  const [colorName, setColorName] = useState('');
  const [gbName, setGbName] = useState('');
  const [connectivityName, setConnectivityName] = useState('');
  const [desktop, setDesktop] = useState(false);
  const router = useRouter();
  // const [appleCare, setAppleCare] = useState(0);

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

  const recycling = 4;

  const paths =
    router.pathname === '/colorSelection/grayipad' ||
    router.pathname === '/colorSelection/pinkipad' ||
    router.pathname === '/colorSelection/purpleipad' ||
    router.pathname === '/colorSelection/blueipad' ||
    router.pathname === '/colorSelection/starlightipad';

  useState(() => {
    setColor(true);
    // setColorName('Space Gray');
  }, [paths]);

  // console.log(router.pathname);

  let date = new Date();
  let day = date.getDate() + 5;
  let day1 = date.getDate() + 8;
  let day2 = day1 + 7;

  let weekdays = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ];
  let weekdayValue = date.getDay() + 5;
  let weekdayName = weekdays[weekdayValue];

  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  let monthValue = date.getMonth();
  let monthName = months[monthValue];

  let nextMonthValue = date.getMonth() + 1;
  let nextMonthName = months[nextMonthValue];
  let nextMonthDay = day - 30;
  let nextMonthDay1 = day1 - 31;
  let nextMonthDay2 = day2 - 31;

  let pickup = `${weekdayName}, ${monthName} ${day}`;
  let nextMonthPickup = `${weekdayName}, ${nextMonthName} ${nextMonthDay}`;

  let pickup1 = `${monthName} ${day1} - ${monthName} ${day2}`;
  let nextMonthPickup1 = `${nextMonthName} ${nextMonthDay1} - ${nextMonthName} ${nextMonthDay2}`;
  let unevenMonths = `${monthName} ${day1} - ${nextMonthName} ${nextMonthDay2}`;

  // console.log(day);
  // console.log(pickup);
  // console.log(nextMonthPickup);
  // console.log("day1", day1);
  // console.log("day2", day2);
  // console.log("pickup1", pickup1);
  // console.log("nextMonthPickup1", nextMonthPickup1);
  // console.log("unevenMonths", unevenMonths);

  function sendData() {
      Router.push({
          pathname: '/newCart',
          query: {
            value,
            cellValue,
            recycling,
            colorName,
            gbName,
            connectivityName
          }
      })
  }

  return (
    <>
        <Item
          style={{
            width: '408px',
            borderStyle: 'hidden',
            marginTop: '4em',
            transform: 'translate(400px)',
          }}
        >
          <div>
            <div 
                style={{ 
                    color: 'red', 
                    opacity: '0.7' 
                }}
            >
                New
            </div>
            <h1 
                style={{ 
                    margin: '0em 0em 1.25em 0em', 
                    fontSize: '40px' 
                }}
            >
              Buy iPad Air
            </h1>
            <div
              id="colors"
              style={{
                position: 'absolute',
                width: '408px',
                height: '1px',
                background: 'transparent',
                transform: 'translateY(-50px)',
              }}
            />{' '}
            {/* jump to this part of page */}
            <div>
              {color && router.pathname !== '/colorSelection/ipadhome' ? (
                <>
                  <Divider />
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div
                      style={{
                        fontSize: '24px',
                        fontWeight: '600',
                        paddingBottom: '5px',
                        transform: 'translateY(8px)',
                      }}
                    >
                      <div>
                        {/* {`${gray}`} {`${pink}`} {`${purple}`} {`${blue}`} {`${starlight}`} */}
                        <NamedColor />
                      </div>
                    </div>
                    <div
                      style={{
                        cursor: 'pointer',
                        color: '#0070c9',
                        transform: 'translate(-16px, 9px)',
                        opacity: '0.8',
                      }}
                      onClick={() => setColor(false)}
                    >
                      <a className={styles.bluehovering}>Change</a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    style={{
                      fontSize: '17px',
                      marginBottom: '15px',
                      fontWeight: '500',
                    }}
                  >
                    Finish
                  </div>
                  <Grid>
                    <Grid.Column width={8}>
                      <Grid.Row>
                        <a href="#colors">
                          <Button
                            style={{
                              width: '197px',
                              height: '103px',
                              color: 'black',
                              background: 'transparent',
                              borderRadius: '8px',
                              border: '.5px solid gray',
                              fontWeight: 'normal',
                              marginBottom: '15px',
                            }}
                            onClick={() => {
                              router.push('/colorSelection/grayipad'),
                                setColor(true),
                                setGray('Space Gray'),
                                setColorName('Space Gray');
                            }}
                          >
                            <div
                              className={styles.buttonHover}
                              style={{ transform: 'translate(15px)' }}
                            >
                              <pre
                                style={{
                                  height: '30px',
                                  width: '30px',
                                  borderRadius: '50%',
                                  background:
                                    'linear-gradient(to bottom, #343d46, gray)',
                                  transform: 'translate(48px, -3px)',
                                }}
                              />
                              <div
                                style={{ transform: 'translate(-14px, -8px)' }}
                              >
                                Space Gray
                              </div>
                            </div>
                          </Button>
                        </a>
                      </Grid.Row>
                      <Grid.Row>
                        <a href="#colors">
                          <Button
                            style={{
                              width: '197px',
                              height: '103px',
                              color: 'black',
                              background: 'transparent',
                              borderRadius: '8px',
                              border: '.5px solid gray',
                              fontWeight: 'normal',
                              marginBottom: '15px',
                            }}
                            onClick={() => {
                              router.push('/colorSelection/purpleipad'),
                                setColor(true),
                                setPurple('Purple'),
                                setColorName('Purple');
                            }}
                          >
                            <div
                              className={styles.buttonHover}
                              style={{ transform: 'translate(15px)' }}
                            >
                              <pre
                                style={{
                                  height: '30px',
                                  width: '30px',
                                  borderRadius: '50%',
                                  background:
                                    'linear-gradient(to bottom, #7867C7, #B8AFE6)',
                                  transform: 'translate(48px, -3px)',
                                }}
                              />
                              <div
                                style={{ transform: 'translate(-14px, -8px)' }}
                              >
                                Purple
                              </div>
                            </div>
                          </Button>
                        </a>
                      </Grid.Row>
                      <Grid.Row>
                        <a href="#colors">
                          <Button
                            style={{
                              width: '197px',
                              height: '103px',
                              color: 'black',
                              background: 'transparent',
                              borderRadius: '8px',
                              border: '.5px solid gray',
                              fontWeight: 'normal',
                              margin: '0px 0px 0px 0px',
                            }}
                            onClick={() => {
                              router.push('/colorSelection/starlightipad'),
                                setColor(true),
                                setStarlight('Starlight'),
                                setColorName('Starlight');
                            }}
                          >
                            <div
                              className={styles.buttonHover}
                              style={{ transform: 'translate(15px)' }}
                            >
                              <pre
                                style={{
                                  height: '30px',
                                  width: '30px',
                                  borderRadius: '50%',
                                  background:
                                    'linear-gradient(to bottom, #E3C5AC, #F9F3EE)',
                                  transform: 'translate(48px, -3px)',
                                }}
                              />
                              <div
                                style={{ transform: 'translate(-13px, -8px)' }}
                              >
                                Starlight
                              </div>
                            </div>
                          </Button>
                        </a>
                      </Grid.Row>
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <Grid.Row>
                        <a href="#colors">
                          <Button
                            style={{
                              width: '197px',
                              height: '103px',
                              color: 'black',
                              background: 'transparent',
                              borderRadius: '8px',
                              border: '.5px solid gray',
                              fontWeight: 'normal',
                              marginBottom: '15px',
                              marginLeft: '-7px',
                            }}
                            onClick={() => {
                              router.push('/colorSelection/pinkipad'),
                                setColor(true),
                                setPink('Pink'),
                                setColorName('Pink');
                            }}
                          >
                            <div
                              className={styles.buttonHover}
                              style={{ transform: 'translate(15px)' }}
                            >
                              <pre
                                style={{
                                  height: '30px',
                                  width: '30px',
                                  borderRadius: '50%',
                                  background:
                                    'linear-gradient(to bottom, #fAB19B, #FAE0D8)',
                                  transform: 'translate(48px, -3px)',
                                }}
                              />
                              <div
                                style={{ transform: 'translate(-13px, -8px)' }}
                              >
                                Pink
                              </div>
                            </div>
                          </Button>
                        </a>
                      </Grid.Row>
                      <Grid.Row>
                        <a href="#colors">
                          <Button
                            style={{
                              width: '197px',
                              height: '103px',
                              color: 'black',
                              background: 'transparent',
                              borderRadius: '8px',
                              border: '.5px solid gray',
                              fontWeight: 'normal',
                              marginLeft: '-7px',
                            }}
                            onClick={() => {
                              router.push('/colorSelection/blueipad'),
                                setColor(true),
                                setBlue('Blue'),
                                setColorName('Blue');
                            }}
                          >
                            <div
                              className={styles.buttonHover}
                              style={{ transform: 'translate(15px)' }}
                            >
                              <pre
                                style={{
                                  height: '30px',
                                  width: '30px',
                                  borderRadius: '50%',
                                  background:
                                    'linear-gradient(to bottom, #74D7F7, #ADD8E6)',
                                  transform: 'translate(48px, -3px)',
                                }}
                              />
                              <div
                                style={{ transform: 'translate(-14px, -8px)' }}
                              >
                                Blue
                              </div>
                            </div>
                          </Button>
                        </a>
                      </Grid.Row>
                    </Grid.Column>
                  </Grid>
                </>
              )}
            </div>
            <Divider style={{ marginTop: '27px' }} />
            <div
              id="storages"
              style={{
                position: 'absolute',
                width: '408px',
                height: '1px',
                background: 'transparent',
                transform: 'translateY(-67px)',
              }}
            />{' '}
            {/* jump to this part of page */}
            {storage ? (
              <>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div
                    style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      paddingBottom: '5px',
                      transform: 'translateY(8px)',
                    }}
                  >
                    {`${sixtyfour}`} {`${onetwentyeight}`}
                  </div>
                  <div
                    style={{
                      cursor: 'pointer',
                      color: '#0070c9',
                      transform: 'translate(-16px, 9px)',
                      opacity: '0.8',
                    }}
                    onClick={() => {
                        setStorage(false),
                        setSixtyfour(''),
                        setOnetwentyeight('');
                    }}
                  >
                    <a className={styles.bluehovering}>Change</a>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    fontSize: '17px',
                    fontWeight: '500',
                    margin: '1.5em 0em 1.5em 0em',
                  }}
                >
                  Storage
                </div>
                <div
                  style={{
                    background: '#F5F5F7',
                    borderRadius: '10px',
                    padding: '15px 0px 15px 20px',
                    margin: '10px 0px 17px 0px',
                    fontSize: '12px',
                    lineHeight: '16px',
                  }}
                >
                  <Grid>
                    <Grid.Column width={14}>
                      <b>Plan ahead. Leave room for later.</b> The more storage
                      your iPad Air has, the more room you have to store digital
                      content, now and in the future.
                    </Grid.Column>
                    <Grid.Column width={2}>
                      <Icon
                        name="info circle"
                        color="blue"
                        size="large"
                        style={{
                          cursor: 'pointer',
                          transform: 'translate(-15px, 17px)',
                        }}
                        onClick={() => setStorageModal(true)}
                      />
                    </Grid.Column>
                  </Grid>
                </div>
                <Modal
                  open={storageModal}
                  dimmer="blurring"
                  size="small"
                  style={{
                    width: desktop ? '816px' : '95%',
                    transform: 'translateY(-285px)',
                    borderRadius: '20px',
                    height: '570px',
                    position: 'fixed',
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
                      cursor: 'pointer',
                    }}
                    onClick={() => setStorageModal(false)}
                  >
                    <h1
                      style={{
                        fontSize: '30px',
                        fontWeight: 'lighter',
                        color: 'gray',
                        transform: 'translate(10px, -5px)',
                      }}
                    >
                      x
                    </h1>
                  </div>
                  <div 
                    style={{ 
                        padding: desktop ? '3em 6em 0em 6em' : '3em 1em 0em 1em' 
                    }}
                  >
                    <h1
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: desktop ? '40px' : '25px',
                      }}
                    >
                      Make room for everything.
                    </h1>
                    <div 
                        style={{ 
                            fontSize: desktop ?  '17px' : '10px', 
                            lineHeight: desktop ? '25px' : '12px'
                        }}
                    >
                      How much storage you need depends on how you use your
                      iPad. More room means you can store more apps, music,
                      movies, and books. It also lets you create and store
                      images, videos, illustrations, and more.
                    </div>
                    <div
                      style={{
                        margin: '1em 0em 0em 0em',
                        fontSize: '17px',
                        lineHeight: '25px',
                      }}
                    >
                      Over time you may add more content to your iPad, so you’ll
                      want to think about how your storage needs may change.
                    </div>
                    <h5
                      style={{
                        color: 'gray',
                        fontWeight: 'lighter',
                        fontSize: '12px',
                      }}
                    >
                      Storage is measured in gigabytes (GB) and terabytes (TB).
                    </h5>
                    <h5
                      style={{
                        color: 'gray',
                        fontWeight: 'lighter',
                        fontSize: '12px',
                        lineHeight: '16px',
                        transform: 'translateY(-10px)',
                      }}
                    >
                      Note: Available space is less and varies due to many
                      factors. A standard configuration uses approximately 12GB
                      to 17GB of space, including iPadOS 15 with its latest
                      features and Apple apps that can be deleted. Apple apps
                      that can be deleted use about 4.5GB of space, and you can
                      download them back from the App Store. Storage capacity
                      subject to change based on software version, settings, and
                      iPad model.
                    </h5>
                    {desktop ? (
                    <>
                        <div
                            style={{
                                background: '#F5F5F7',
                                width: '816px',
                                height: '118.1px',
                                transform: 'translate(-84px, 20px)',
                                borderRadius: '0px 0px 19.5px 19.5px',
                                lineHeight: '16px',
                                paddingTop: '25px',
                                fontSize: '12px',
                            }}
                            >
                            <Icon
                                name="chat"
                                size="large"
                                style={{
                                    color: 'gray',
                                    transform: 'translateX(408px) scale(1.3)',
                                }}
                            />
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '20px',
                                }}
                            >
                                <b>Have questions about buying an iPad?</b>
                            </div>
                            <div
                                style={{ display: 'flex', justifyContent: 'center' }}
                            >
                                <a
                                className={styles.bluehovering}
                                style={{
                                    color: 'rgb(0, 102, 204)',
                                    cursor: 'pointer',
                                }}
                                >
                                Chat with an iPad Specialist
                                </a>
                            </div>
                        </div>
                    </>
                    ):(
                    <>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '50px',
                            }}
                        >
                            <b>Have questions about buying an iPad?</b>
                        </div>
                        <div
                            style={{ display: 'flex', justifyContent: 'center' }}
                        >
                            <a
                            className={styles.bluehovering}
                            style={{
                                color: 'rgb(0, 102, 204)',
                                cursor: 'pointer',
                            }}
                            >
                            Chat with an iPad Specialist
                            </a>
                        </div>
                    </>
                    )}
                  </div>
                </Modal>
                <span
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '1.5em',
                  }}
                >
                  <div className={styles.gbHover}>
                    <a className={styles.pageJump} href="#storages">
                      <button
                        style={{
                          borderRadius: '10px',
                          border: '.5px solid gray',
                          width: '197px',
                          height: '106px',
                          background: 'transparent',
                          margin: '0em .5em 0em 0em',
                          padding: '15px',
                          lineHeight: '16px',
                        }}
                        onClick={() => {
                            setStorage(true),
                            setSixtyfour('64GB'),
                            setGbName('64GB'),
                            setValue(599.0);
                        }}
                      >
                        <h2
                          style={{
                            margin: '0em',
                            fontSize: '29px',
                            color: 'black',
                          }}
                        >
                          64GB
                        </h2>
                        <div
                          style={{
                            margin: '0em',
                            transform: 'translate(39px, -32.5px)',
                            fontSize: '12px',
                          }}
                        >
                          1
                        </div>
                        <div
                          style={{
                            transform: 'translateY(-14px)',
                            fontSize: '12px',
                          }}
                        >
                          <div style={{ margin: '0em' }}>From $599</div>
                          <div style={{ margin: '0em' }}>
                            or $49.91/mo. for 12 mo.*
                          </div>
                        </div>
                      </button>
                    </a>
                  </div>
                  <a className={styles.pageJump} href="#storages">
                    <button
                      className={styles.gbHover1}
                      style={{
                        borderRadius: '10px',
                        border: '.5px solid gray',
                        width: '197px',
                        height: '106px',
                        background: 'transparent',
                        margin: '0em 0em 0em .5em',
                        padding: '15px',
                        lineHeight: '16px',
                      }}
                      onClick={() => {
                          setStorage(true),
                          setOnetwentyeight('128GB'),
                          setGbName('128GB'),
                          setValue(749.0);
                      }}
                    >
                      <h2
                        style={{
                          margin: '0em',
                          fontSize: '29px',
                          color: 'black',
                        }}
                      >
                        128GB
                      </h2>
                      <div
                        style={{
                          margin: '0em',
                          transform: 'translate(47px, -32.5px)',
                          fontSize: '12px',
                        }}
                      >
                        1
                      </div>
                      <div
                        style={{
                          transform: 'translateY(-14px)',
                          fontSize: '12px',
                        }}
                      >
                        <div style={{ margin: '0em' }}>From $749</div>
                        <div style={{ margin: '0em' }}>
                          or $62.41/mo. for 12 mo.*
                        </div>
                      </div>
                    </button>
                  </a>
                </span>
              </>
            )}
            <Divider style={{ marginTop: '27px' }} />
            <div
              id="connectivities"
              style={{
                position: 'absolute',
                width: '408px',
                height: '1px',
                background: 'transparent',
                transform: 'translateY(-67px)',
              }}
            />
            {connectivity ? (
              <>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div
                    style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      paddingBottom: '5px',
                      transform: 'translateY(8px)',
                    }}
                  >
                    {`${wifi}`} {`${cellular}`}
                  </div>
                  <div
                    style={{
                      cursor: 'pointer',
                      color: '#0070c9',
                      transform: 'translate(-16px, 9px)',
                      opacity: '0.8',
                    }}
                    onClick={() => {
                      setConnectivity(false), setWifi(''), setCellular('');
                    }}
                  >
                    <a className={styles.bluehovering}>Change</a>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    fontSize: '17px',
                    fontWeight: '500',
                    margin: '1.5em 0em 1.5em 0em',
                  }}
                >
                  Connectivity
                </div>
                <div>
                  <Grid
                    style={{
                      background: '#F5F5F7',
                      borderRadius: '10px',
                      paddingLeft: '10px',
                      margin: '10px 0px 17px 0px',
                      fontSize: '12px',
                      lineHeight: '16px',
                    }}
                  >
                    <Grid.Column width={14}>
                      <b>Two fast ways to stay connected.</b> Every iPad Air can
                      connect to a Wi-Fi network. A Wi-Fi + Cellular model
                      allows you to stay connected when Wi-Fi isn’t available.
                    </Grid.Column>
                    <Grid.Column width={2}>
                      <Icon
                        name="info circle"
                        color="blue"
                        size="large"
                        style={{
                          cursor: 'pointer',
                          transform: 'translate(-10px, 17px)',
                        }}
                        onClick={() => setConnectivityModal(true)}
                      />
                    </Grid.Column>
                  </Grid>
                </div>
                <span
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '1.5em',
                  }}
                >
                  <div className={styles.gbHover}>
                    <a className={styles.pageJump} href="#connectivities">
                      <button
                        style={{
                          borderRadius: '10px',
                          border: '.5px solid gray',
                          width: '197px',
                          height: '106px',
                          background: 'transparent',
                          margin: '0em .5em 0em 0em',
                          padding: '15px',
                          lineHeight: '16px',
                        }}
                        onClick={() => {
                            setConnectivity(true),
                            setWifi('Wi-Fi'),
                            setConnectivityName('Wi-Fi'),
                            setCellValue(0);
                        }}
                      >
                        <h2
                          style={{
                            margin: '0em',
                            fontSize: '17px',
                            color: 'black',
                          }}
                        >
                          Wi-Fi
                        </h2>
                        <div
                          style={{
                            transform: 'translateY(5px)',
                            fontSize: '12px',
                          }}
                        >
                          <div>From $599</div>
                          <div>or $49.91/mo. for 12 mo.*</div>
                        </div>
                      </button>
                    </a>
                  </div>
                  <a className={styles.pageJump} href="#connectivities">
                    <button
                      className={styles.gbHover}
                      style={{
                        borderRadius: '10px',
                        border: '.5px solid gray',
                        width: '197px',
                        height: '106px',
                        background: 'transparent',
                        margin: '0em 0em 0em .5em',
                        padding: '15px',
                        lineHeight: '16px',
                      }}
                      onClick={() => {
                          setConnectivity(true),
                          setCellular('Wi-Fi + Cellular'),
                          setConnectivityName('Wi-Fi + Cellular'),
                          setCellValue(150);
                      }}
                    >
                      <h2
                        style={{
                          margin: '0em',
                          fontSize: '17px',
                          color: 'black',
                        }}
                      >
                        Wi-Fi + Cellular
                      </h2>
                      <div
                        style={{
                          transform: 'translateY(5px)',
                          fontSize: '12px',
                        }}
                      >
                        <div>From $749</div>
                        <div>or $62.41/mo. for 12 mo.*</div>
                      </div>
                    </button>
                  </a>
                </span>
                <Modal
                  open={connectivityModal}
                  dimmer="blurring"
                  size="small"
                  style={{
                    transform: desktop ? 'translateY(-500px)' : null,
                    height: desktop ? '1017px' : '635px',
                    width: desktop ? '816px' : '95%',
                    marginTop: desktop ? null : '-300px',
                    borderRadius: '20px',
                    position: 'fixed'
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
                      cursor: 'pointer',
                    }}
                    onClick={() => setConnectivityModal(false)}
                  >
                    <h1
                      style={{
                        fontSize: '30px',
                        fontWeight: 'lighter',
                        color: 'gray',
                        transform: 'translate(10px, -5px)',
                      }}
                    >
                      x
                    </h1>
                  </div>
                  <div 
                    style={{ 
                        padding: desktop ? '36px 76px 60px 76px' : '36px 26px 60px 26px' 
                    }}
                >
                    <div 
                        style={{ 
                            fontSize: desktop ? '40px' : '25px', 
                            fontWeight: '600' 
                        }}
                    >
                      {desktop ? (
                      <>
                        <div
                            style={{ 
                                display: 'flex',
                                justifyContent: 'center' 
                            }}
                        >
                            A faster wireless connection
                        </div>
                        <div
                            style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '15px',
                            }}
                        >
                            with Wi-Fi 6.
                        </div>
                      </>
                      ):(
                      <>
                        <div
                            style={{ 
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '13px'
                            }}
                        >
                            A faster wireless connection with Wi-Fi 6.
                        </div>
                      </>
                      )}
                    </div>
                    <div
                      style={{
                        margin: '0em 0em 3em 0em',
                        fontSize: desktop ?  '17px' : '10px', 
                        lineHeight: desktop ? '25px' : '12px'
                      }}
                    >
                      iPad Air supports Wi-Fi 6 technology for a fast connection
                      to Wi-Fi networks in your home, a coffee shop, the school
                      library, or an airport.
                    </div>
                    <div 
                        style={{ 
                            fontSize: desktop ? '40px' : '25px', 
                            fontWeight: '600' 
                        }}
                    >
                      <div
                        style={{ display: 'flex', justifyContent: 'center' }}
                      >
                        Stay connected anywhere
                      </div>
                      <div
                        style={{ display: 'flex', justifyContent: 'center' }}
                      >
                        with cellular data.
                      </div>
                    </div>
                    <ul 
                        style={{ 
                            fontSize: desktop ?  '17px' : '10px', 
                            lineHeight: desktop ? '25px' : '12px'
                        }}
                    >
                      <li style={{ margin: '0em 0em 1em 0em' }}>
                        If you’re someplace where there’s no Wi-Fi, an iPad Air
                        with Wi-Fi + Cellular lets you stay connected to fast
                        cellular data networks.
                      </li>
                      <li style={{ margin: '0em 0em 1em 0em' }}>
                        eSIM lets you easily set up a cellular connection right
                        from your iPad, with no long-term commitment.* Or you
                        can simply insert a carrier-activated SIM card.
                      </li>
                      <li style={{ margin: '0em 0em 1em 0em' }}>
                        Browse the web, send email and messages, access your
                        files, and more. All on the go.
                      </li>
                      <li style={{ margin: '0em 0em 1em 0em' }}>
                        Stay in touch with friends and family. Or collaborate
                        with coworkers.
                      </li>
                      <li style={{ margin: '0em 0em 1em 0em' }}>
                        Get blazing-fast 5G and LTE coverage from select
                        carriers.
                      </li>
                      <li style={{ margin: '0em 0em 1em 0em' }}>
                        Add cellular data when you travel, and stay connected in
                        over 180 countries and regions.
                      </li>
                      <li style={{ margin: '0em 0em 1em 0em' }}>
                        Choose from a variety of carrier partners or add to your
                        existing plan.
                      </li>
                    </ul>
                    <h5 style={{ color: 'gray', fontWeight: 'lighter', fontSize: desktop ? null : '8px' }}>
                      Not all carriers support Apple SIM and eSIM. See your
                      carrier for more details. Not available in China mainland.
                      The eSIM technology works with iPad Pro 11‑inch (1st
                      generation or later), iPad Pro 12.9‑inch (3rd generation
                      or later), iPad Air (3rd generation or later), iPad (7th
                      generation or later), and iPad mini (5th generation or
                      later). Apple SIM works with iPad Pro 12.9-inch (1st and
                      2nd generation), iPad Pro 9.7-inch, iPad Pro 10.5‑inch,
                      iPad (5th and 6th generation), iPad Air 2, iPad mini 3,
                      and iPad mini 4.
                    </h5>
                  </div>
                  {desktop ? (
                  <>
                    <div
                        style={{
                        background: '#F5F5F7',
                        width: '816px',
                        height: '118.1px',
                        transform: 'translate(0px, 13px)',
                        borderRadius: '0px 0px 19.5px 19.5px',
                        lineHeight: '16px',
                        paddingTop: '25px',
                        fontSize: '12px',
                        }}
                    >
                        <Icon
                        name="chat"
                        size="large"
                        style={{
                            color: 'gray',
                            transform: 'translateX(400px) scale(1.3)',
                        }}
                        />
                        <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '20px',
                        }}
                        >
                        <b>Have questions about buying an iPad?</b>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <a
                            className={styles.bluehovering}
                            style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}
                        >
                            Chat with an iPad Specialist
                        </a>
                        </div>
                    </div>
                  </>
                  ): null}
                </Modal>
              </>
            )}
            <Divider style={{ marginTop: '27px' }} />
            <div
              id="engraves"
              style={{
                position: 'absolute',
                width: '408px',
                height: '1px',
                background: 'transparent',
                transform: 'translateY(-67px)',
              }}
            />
            {engraving ? (
              <>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div
                    style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      paddingBottom: '5px',
                      transform: 'translateY(8px)',
                    }}
                  >
                    {`${addengraving}`} {`${noengraving}`}
                  </div>
                  <div
                    style={{
                      cursor: 'pointer',
                      color: '#0070c9',
                      transform: 'translate(-16px, 9px)',
                      opacity: '0.8',
                    }}
                    onClick={() => {
                        setEngraving(false),
                        setAddengraving(''),
                        setNoengraving('');
                    }}
                  >
                    <a className={styles.bluehovering}>Change</a>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    fontSize: '17px',
                    fontWeight: '500',
                    margin: '1.5em 0em 1.5em 0em',
                  }}
                >
                  Personalize your device.
                </div>
                <Grid
                  style={{
                    background: '#F5F5F7',
                    borderRadius: '10px',
                    paddingLeft: '10px',
                    margin: '10px 0px 17px 0px',
                    fontSize: '12px',
                    lineHeight: '16px',
                  }}
                >
                  <Grid.Column width={14}>
                    <b>Personalize your iPad Air for free. </b>Engrave a mix of
                    emoji, names, initials, and numbers to make iPad Air
                    unmistakably yours. Only at Apple.
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <Icon
                      name="info circle"
                      color="blue"
                      size="large"
                      style={{
                        cursor: 'pointer',
                        transform: 'translate(-10px, 17px)',
                      }}
                      onClick={() => setEngravingModal(true)}
                    />
                  </Grid.Column>
                </Grid>
                <Modal
                  open={engravingModal}
                  dimmer="blurring"
                  size="small"
                  style={{
                    width: desktop ? '816px' : '95%',
                    transform: desktop ? 'translateY(-450px)' : null,
                    marginTop: desktop ? null : '-250px',
                    height: desktop ? '887px' : '480px',
                    borderRadius: '20px',
                    position: 'fixed',
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
                      cursor: 'pointer',
                    }}
                    onClick={() => setEngravingModal(false)}
                  >
                    <h1
                      style={{
                        fontSize: '30px',
                        fontWeight: 'lighter',
                        color: 'gray',
                        transform: 'translate(10px, -5px)',
                      }}
                    >
                      x
                    </h1>
                  </div>
                  <div 
                    style={{ 
                        padding: desktop ? '36px 76px 60px 76px' : '10px 26px 60px 26px' 
                    }}
                >
                    <h1
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: desktop ? '40px' : '25px', 
                      }}
                    >
                      Add a message that lasts.
                    </h1>
                    <div 
                        style={{ 
                            fontSize: desktop ?  '17px' : '10px', 
                            lineHeight: desktop ? '25px' : '12px'
                        }}
                    >
                      {desktop ? (
                      <>
                        <div>
                            Choose from all-new engraving options. It’s the perfect
                            way to personalize your iPad.
                        </div>
                        <div>
                            Add a special message, name, or birthday. Even combine
                            them with your
                        </div>
                        <div>favorite emoji.*</div>
                      </>
                      ):(
                      <>
                        <div>
                            Choose from all-new engraving options. It’s the perfect
                            way to personalize your iPad. Add a special message, name, or birthday. Even combine
                            them with your favorite emoji.*
                        </div>
                      </>
                      )}
                    </div>
                    <div style={{ position: 'absolute', transform: 'translate(-15px, 20px)' }}>
                        <Image src="/images/ipad 2.png" alt="ipad" width={700} height={460} />
                    </div>
                    <div
                      style={{
                        transform: desktop ? 'translateY(550px)' : 'translateY(270px)',
                        fontSize: '12px',
                        color: 'gray',
                      }}
                    >
                      <div>
                        * You can return your iPad even if you engrave it. And
                        when you’re ready to upgrade, it won’t change your
                        trade-in
                      </div>
                      <div>value.</div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: '#F5F5F7',
                      width: '816px',
                      height: '118.1px',
                      transform: 'translate(0px, 542px)',
                      borderRadius: '0px 0px 19.5px 19.5px',
                      lineHeight: '16px',
                      paddingTop: '25px',
                      fontSize: '12px',
                    }}
                  >
                    <Icon
                      name="chat"
                      size="large"
                      style={{
                        color: 'gray',
                        transform: 'translateX(400px) scale(1.3)',
                      }}
                    />
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '20px',
                      }}
                    >
                      <b>Have questions about buying an iPad?</b>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <a
                        className={styles.bluehovering}
                        style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}
                      >
                        Chat with an iPad Specialist
                      </a>
                    </div>
                  </div>
                </Modal>
                <a className={styles.pageJump} href="#engraves">
                  <div
                    className={styles.engraveHover}
                    style={{
                      marginTop: '1.5em',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <button
                      style={{
                        borderRadius: '15px',
                        border: '.5px solid gray',
                        width: '60em',
                        height: '83px',
                        background: 'transparent',
                      }}
                      onClick={() => {
                        setEngraving(true), setAddengraving('Engraving');
                      }}
                    >
                      <h3
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-start',
                          margin: '0em 0em 0em 1em',
                          transform: 'translateY(10px)',
                        }}
                      >
                        Add Engraving
                      </h3>
                      <h5
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          margin: '0em 1em 0em 0em',
                          transform: 'translateY(-10px)',
                        }}
                      >
                        Free
                      </h5>
                    </button>
                  </div>
                </a>
                <a className={styles.pageJump} href="#engraves">
                  <div
                    className={styles.engraveHover}
                    style={{
                      margin: '1em 0em 0em 0em',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <button
                      style={{
                        borderRadius: '15px',
                        border: '.5px solid gray',
                        width: '60em',
                        height: '83px',
                        background: 'transparent',
                      }}
                      onClick={() => {
                        setEngraving(true), setNoengraving('No Engraving');
                      }}
                    >
                      <h3
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-start',
                          margin: '0em 0em 0em 1em',
                        }}
                      >
                        No Engraving
                      </h3>
                    </button>
                  </div>
                </a>
              </>
            )}
            <Divider style={{ margin: '27px 0px 27px 0px' }} />
            <div
              style={{
                background: '#F5F5F790',
                borderRadius: '5px',
                padding: '30px',
                marginBottom: '450px',
              }}
            >
              <h1 style={{ fontWeight: '900', margin: '5px 0px 10px 0px' }}>
                {/* $599.00 */}
                {color && storage && connectivity ? (
                  <>${(parseFloat(value) + parseFloat(cellValue)).toFixed(2)}</>
                ) : (
                  <>$599.00</>
                )}
              </h1>
              <div>or</div>
              <h1 style={{ fontWeight: '900', marginTop: '10px' }}>
                {/* $49.91/mo. for 12 mo.* */}
                {color && storage && connectivity ? (
                  <>
                    $
                    {((parseFloat(value) + parseFloat(cellValue)) / 12).toFixed(
                      2
                    )}
                    /mo. for 12 mo.*
                  </>
                ) : (
                  <>$49.91/mo. for 12 mo.*</>
                )}
              </h1>
              <div style={{ marginTop: '-7px' }}>
                <a
                  className={styles.bluehovering}
                  style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}
                >
                  Learn how to pay monthly at 0% APR when you choose Apple Card
                  Monthly Installments
                </a>
              </div>
              <Divider style={{ marginTop: '30px' }} />
              <h3>
                <b>Protect your new iPad Air.</b>
              </h3>
              <div>
                <Icon
                  name="apple"
                  color="red"
                  style={{ transform: 'translate(-2px, 1.5px)' }}
                />
                <Grid style={{ transform: 'translate(29px, -18px)' }}>
                  <Grid.Column width={14}>
                    <b>AppleCare+</b>
                  </Grid.Column>
                  <Grid.Column
                    style={{ transform: 'translate(-28.5px)' }}
                    width={2}
                  >
                    {noAppleCare ? (
                      <>
                        <div style={{ transform: 'translate(-26px)' }}>
                          <a
                            // onClick={() => {
                            //   setAppleCare(0), setNoAppleCare(false);
                            // }}
                            className={styles.bluehovering}
                            style={{
                              color: 'rgb(0, 102, 204)',
                              cursor: 'pointer',
                            }}
                          >
                            Remove
                          </a>
                        </div>
                      </>
                    ) : (
                      <>
                        <a
                        //   onClick={() => {
                        //     setAppleCare(79), setNoAppleCare(true);
                        //   }}
                          className={styles.bluehovering}
                          style={{
                            color: 'rgb(0, 102, 204)',
                            cursor: 'pointer',
                          }}
                        >
                          Add
                        </a>
                      </>
                    )}
                  </Grid.Column>
                </Grid>
              </div>
              <div
                style={{
                  lineHeight: '20px',
                  transform: 'translate(28.5px, -18px)',
                }}
              >
                <div>
                  <b>$79.00 or $3.99/mo.</b>
                </div>
                <div>Protect your iPad, Apple Pencil, and</div>
                <div>Apple-branded keyboard from</div>
                <div>accidental drops and spills with</div>
                <div>AppleCare+.</div>
                <a
                  className={styles.bluehovering}
                  style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}
                >
                  Learn more
                </a>
              </div>
              <h3 style={{ margin: '.5em 0em 0.5em 0.05em' }}>
                Add a Trade-in
              </h3>
              <div>
                <Grid style={{ transform: 'translateY(8px)' }}>
                  <Grid.Column width={11}>
                    <div style={{ transform: 'translateX(8.5px)' }}>
                      <Icon
                        name="random"
                        style={{ transform: 'translate(-9px)' }}
                      />
                      <b>Apple Trade In</b>
                    </div>
                  </Grid.Column>
                  <Grid.Column
                    width={5}
                    style={{ transform: 'translateX(23.8px)' }}
                  >
                    <a
                      className={styles.bluehovering}
                      style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}
                    >
                      Get started
                    </a>
                  </Grid.Column>
                </Grid>
              </div>
              <div style={{ transform: 'translate(9px, 7px)' }}>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get up to $655 in credit when
                  you
                </div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;trade in your iPad.</div>
              </div>
              {color && storage && connectivity && engraving ? (
                <>
                  <div>
                    <Divider
                      style={{
                        transform: 'translateY(9px)',
                        marginBottom: '23px',
                      }}
                    />
                    <div>
                      <h3
                        style={{
                          transform: 'translate(-1px, 7px)',
                          marginBottom: '12px',
                        }}
                      >
                        10.9-inch iPad Air
                      </h3>
                      <div
                        style={{
                          fontSize: '14px',
                          fontWeight: '400',
                          lineHeight: '20px',
                        }}
                      >
                             
                        <div
                          style={{
                            transform: 'translate(-41.5px, -41px) scale(0.16)',
                            position: 'absolute',
                            border: '5px solid black',
                            width: '100px',
                            height: '85px',
                            borderRadius: '15px',
                          }}
                        >                          
                          <div
                            style={{
                              transform: 'translate(14.5px, -55.5px)',
                              position: 'absolute',
                              border: '5px solid black',
                              width: '60px',
                              height: '35px',
                              borderRadius: '150px 150px 0 0',
                            }}
                          />                                 
                          <Icon
                            name="apple"
                            style={{
                              transform: 'translate(36px, -2px) scale(3.2)',
                              color: 'black',
                            }}
                          />                               
                        </div>                          
                        <div
                          style={{
                            transform: 'translate(28px, -9px)',
                            width: '220px',
                          }}
                        >
                          Order today. Delivers to{' '}
                          <a
                            className={styles.bluehovering}
                            style={{
                              color: 'rgb(0, 102, 204)',
                              cursor: 'pointer',
                            }}
                          >
                            <Zip />
                          </a>
                          <b style={{ fontWeight: '600' }}>
                            &nbsp;
                            {/* Jul 13 - Jul 20 */}
                            <span>
                              {day1 < 25 ? (
                                <>{pickup1}</>
                              ) : (
                                <>
                                  {day1 > 24 && day1 < 32 ? (
                                    <>{unevenMonths}</>
                                  ) : (
                                    <>{nextMonthPickup1}</>
                                  )}
                                </>
                              )}
                            </span>
                            <span>&nbsp;- Free</span>
                          </b>
                        </div>
                                                        
                      </div>
                      <div
                        style={{
                          transform:
                            'translate(-26px, -118px) scale(0.55, 0.5)',
                          position: 'absolute',
                        }}
                      >
                                                                
                        <div
                          style={{
                            width: '2px',
                            height: '18px',
                            background: 'black',
                            transform: 'translate(7px, 0px) rotate(60deg)',
                            borderRadius: '10px',
                          }}
                        />
                                                                
                        <div
                          style={{
                            width: '2px',
                            height: '18px',
                            background: 'black',
                            transform: 'translate(-7px, -38px) rotate(-60deg)',
                            borderRadius: '10px',
                          }}
                        />
                                                                
                        <div
                          style={{
                            width: '2px',
                            height: '18px',
                            background: 'black',
                            transform: 'translate(7px, -60px) rotate(60deg)',
                            borderRadius: '10px',
                          }}
                        />
                                                                
                        <div
                          style={{
                            width: '2px',
                            height: '18px',
                            background: 'black',
                            transform: 'translate(-7px, -98px) rotate(-60deg)',
                            borderRadius: '10px',
                          }}
                        />
                                                                
                        <div
                          style={{
                            width: '2px',
                            height: '18px',
                            background: 'black',
                            transform: 'translate(0px, -140px) rotate(0deg)',
                            borderRadius: '10px',
                          }}
                        />
                                                                
                        <div
                          style={{
                            width: '2px',
                            height: '18px',
                            background: 'black',
                            transform: 'translate(14px, -186px) rotate(0deg)',
                            borderRadius: '10px',
                          }}
                        />
                                                                
                        <div
                          style={{
                            width: '2px',
                            height: '18px',
                            background: 'black',
                            transform: 'translate(-14px, -224px) rotate(0deg)',
                            borderRadius: '10px',
                          }}
                        />
                                                                
                        <div
                          style={{
                            width: '2px',
                            height: '18px',
                            background: 'black',
                            transform:
                              'translate(-7px, -274.8px) rotate(60deg)',
                            borderRadius: '10px',
                          }}
                        />
                                                                
                        <div
                          style={{
                            width: '2px',
                            height: '18px',
                            background: 'black',
                            transform:
                              'translate(7px, -312.7px) rotate(-59deg)',
                            borderRadius: '10px',
                          }}
                        />
                                                                
                        <div
                          style={{
                            width: '2px',
                            height: '17px',
                            background: 'black',
                            transform: 'translate(0px, -346px) rotate(-59deg)',
                            borderRadius: '10px',
                          }}
                        />
                                                            
                      </div>
                                                      
                      <div
                        style={{
                          transform: 'translate(30px, 51px)',
                          fontSize: '14px',
                          fontWeight: '400',
                          lineHeight: '20px',
                        }}
                      >
                                                           
                        <div
                          style={{
                            transform: 'translate(-2px, -103px)',
                            width: '200px',
                          }}
                        >
                          Order now. Pick up, in store:{' '}
                          <b style={{ fontWeight: '600' }}>
                            {/* Thu, Jul 21 */}
                            <span>
                              {day < 31 ? (
                                <>{pickup}</>
                              ) : (
                                <>{nextMonthPickup}</>
                              )}
                            </span>
                          </b>{' '}
                          at{' '}
                          <a
                            className={styles.bluehovering}
                            style={{
                              color: 'rgb(0, 102, 204)',
                              cursor: 'pointer',
                            }}
                          >
                            Apple <City />
                          </a>
                        </div>
                                                    {' '}
                      </div>
                    </div>
                    {color && storage && connectivity && engraving ? (
                      <>
                        <div
                          style={{ display: 'flex', justifyContent: 'center' }}
                        >
                          <button
                            className={styles.bagButton}
                            onClick={() => sendData()}
                            style={{
                              transform: 'translate(0px, -91px)',
                              margin: '3em 0em -3.7em 0em',
                              color: 'white',
                              background: '#0066CC',
                              border: '0px',
                              borderRadius: '10px',
                              width: '80vw',
                              height: '36px',
                              fontSize: '17px',
                            }}
                          >
                            Add to Bag
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          className={styles.button}
                          style={{ display: 'flex', justifyContent: 'center' }}
                        >
                          <button
                            onClick={() => sendData()}
                            style={{
                              transform: 'translate(0px, -91px)',
                              margin: '3em 0em -3.7em 0em',
                              color: 'white',
                              background: '#0066CC',
                              border: '0px',
                              borderRadius: '10px',
                              width: '80vw',
                              height: '36px',
                              fontSize: '17px',
                            }}
                          >
                            Add to Bag
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button
                      style={{
                        margin: '2.7em 0em 2.5em 0em',
                        color: 'white',
                        background: '#0066CC',
                        border: '0px',
                        borderRadius: '10px',
                        width: '80vw',
                        height: '36px',
                        fontSize: '17px',
                      }}
                    >
                      Continue
                    </button>
                  </div>
                </>
              )}
              <Grid style={{ transform: 'translateY(2px)' }}>
                <Grid.Column width={14}>
                  <div>
                    <b>Still deciding?</b>
                  </div>
                  <div>
                    Add this item to a list and easily come back to it later.
                  </div>
                </Grid.Column>
                <Grid.Column width={2}>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Icon
                      name="bookmark outline"
                      size="large"
                      color="blue"
                      style={{ transform: 'translateY(18px) scale(1, 1.5)' }}
                    />
                  </div>
                </Grid.Column>
              </Grid>
            </div>
          </div>
        </Item>
    </>
  );
}
