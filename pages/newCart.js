import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Front from '../components/ipadFront';
import styles from '../styles/ipad.module.css';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import Payment from '../components/payment';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import Zip from '../components/zip';
import StateAbbr from '../components/state_abbr';
import City from '../components/city';
import Heading from '../components/heading';
import { useMediaQuery } from 'react-responsive';
import { Container, Divider, Segment, Icon, Item, Grid, Popup, Modal } from 'semantic-ui-react';

const LOCAL_STORAGE_KEY = 'user_cart';

export default function Cart({ user, orders, ctx }) {
  const [noAppleCare, setNoAppleCare] = useState(false);
  const [appleCare, setAppleCare] = useState(0);
  const [quantity, setQuantity] = useState('1');
  const [open, setOpen] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [checkingOut, setCheckingOut] = useState(false);
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

  const {
    query: {
      value,
      cellValue,
      recycling,
      colorName,
      gbName,
      connectivityName
    }
  } = router;

  const props = {
    value,
    cellValue,
    recycling,
    colorName,
    gbName,
    connectivityName
  }

  const tax = ((parseFloat(props.value) + parseFloat(props.cellValue) + appleCare) * 0.08624374).toFixed(2);

  let total = (
    parseFloat(props.value) +
    parseFloat(props.cellValue) +
    parseFloat(tax) +
    parseFloat(appleCare) +
    parseFloat(props.recycling)
  ).toFixed(2);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(checkOut));
  }, [checkingOut]);

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

  let checkOut = (
    parseFloat(quantity) *
    (parseFloat(props.value) +
      parseFloat(props.cellValue) +
      parseFloat(tax) +
      parseFloat(appleCare) +
      parseFloat(props.recycling))
  ).toFixed(2);

  let checkedOut = () => console.log('%c Checkout Value:', 'color: blue', checkOut);

  // open scroll to top of page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let product = `10.9-inch iPad Air ${props.connectivityName} ${props.gbName}`;

  async function handleSubmitProduct(e) {
    // e.preventDefault();
    const url = `${baseUrl}/api/newCart`;
    const payload = {total, product, user};
    const response = await axios.post(url, payload);
    console.log(response.data);
    console.log(`%c ${total}, ${product} ${user}`, 'color: blue');
  }

  async function deleteProduct(e) {
    const url = `${baseUrl}/api/newCart`;
    const payload = product;
    const response = await axios.delete(url, payload);
    console.log(response.data);
  }

  async function deletePrice(e) {
    const url = `${baseUrl}/api/newCart`;
    const payload = total;
    const response = await axios.delete(url, payload);
    console.log(response.data);
  }

  async function getOrderHistory() {
    const { token } = parseCookies(ctx);
    const url = `${baseUrl}/api/orders`;
    const payload = { headers: { Authorization: token } };
    const response = await axios.get(url, payload);
    console.log(response.data);
    // setData(response.data);
  }

  console.log(orders);
  // console.log(data);
  // console.log(total);
  // console.log(product);

  function sendData() {
    router.push({
      pathname: '/account',
      query: {
        total,
        product
      }
    })
  }
  const isTablet = useMediaQuery(
    { minWidth: 100, maxWidth: 1290 }
  );

  return (
    <>     
      <Head>
        <title>Bag - Apple</title>
        <meta name="description" content="apple, ipad" />
      </Head>
      {desktop ? (
      <>
        <div
          style={{
            transform: 'translateY(-20px)'
          }}
        >
          <Heading />
        </div>
        <div
          style={{
            transform: isTablet ? 'scale(0.5) translate(200px)' : null
          }}
        >
        <Container
          style={{
            position: isTablet ? 'absolute' : 'relative',
            zIndex: '100',
            transform: isTablet ? 'scale(1.5) translateY(250px)' : 'translate(114px, -50px)',
            height: desktop ? null : '800px'
          }}
        >
          <div>
            <div
              style={{
                transform: 'translate(-54px)',
                fontSize: '40px',
                fontWeight: '600',
                lineHeight: '44px',
                marginTop: '79px'
              }}
            >
              Review your bag.
            </div>
            <div
              style={{
                fontSize: '17px',
                fontWeight: '400',
                lineHeight: '25px',
                marginTop: '15px',
                transform: 'translate(-52px)',
              }}
            >
              Free delivery and free returns.
            </div>
            <Segment
              style={{
                background: '#53687210',
                border: 'transparent',
                borderRadius: '12px',
                marginTop: '56px',
                width: '974px',
                display: 'flex',
                justifyContent: 'center',
                transform: 'translate(-49px)',
              }}
            >
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: '400',
                  padding: '20px 10px 0px 50px',
                  lineHeight: '20px',
                  width: '770px',
                  height: '53px',
                  transform: 'translate(140px)',
                }}
              >
                <div
                  style={{
                    transform: 'translate(-178px, -13px) scale(0.2)',
                    position: 'absolute',
                  }}
                >
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                      background: 'radial-gradient(farthest-corner at 0px 80px, violet 15%, orange 40%, lightgreen 70%, yellow 100%)',
                      position: 'absolute',
                      borderRadius: '10px',
                      zIndex: '0',
                      opacity: '0.8',
                    }}
                  />
                  <Icon
                    name="apple"
                    size="huge"
                    style={{
                      position: 'absolute',
                      zIndex: '1',
                      color: 'white',
                      transform: 'translate(16px, 22px)',
                    }}
                  />
                </div>
                <div
                  style={{
                    transform: 'translate(-152px, -13px)'
                  }}
                >
                  <div>
                    Pay $
                    {((parseFloat(props.value) + parseFloat(props.cellValue)) / 12).toFixed(
                      2
                    )}
                    /mo. at 0% APR for eligible items in your order when you
                    choose Apple Card Monthly Installments at checkout. &nbsp;
                    <a
                      className={styles.bluehovering}
                      style={{
                        color: 'rgb(0, 113, 227)', cursor: 'pointer'
                      }}
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </Segment>
            <Grid
              style={{
                marginTop: '-84px',
                width: '974px',
                position: 'static'
              }}
            >
              <Grid.Column
                style={{
                  width: '100px'
                }}
              >
                <div
                  style={{
                    transform: 'scale(0.385) translate(-46px, -84px)'
                  }}
                >
                  <Front />
                </div>
              </Grid.Column>
              <Grid.Column
                style={{
                  width: '300px'
                }}
              >
                <Container
                  style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    lineHeight: '28px',
                    marginTop: '58px',
                  }}
                >             
                  <div 
                    style={{ 
                      transform: 'translate(92px)',
                      marginTop: '40px',
                      width: '300px'
                    }}
                  >
                    10.9-inch iPad Air {props.connectivityName} {props.gbName}
                  </div>{' '}
                  {/* {colorName} */}
                  <div style={{ paddingBottom: '66px' }}>
                    {!open ? (
                      <>
                        <button
                          onClick={() => setOpen(true)}
                          style={{
                            transform: 'translate(476px, -57px)',
                            background: 'transparent',
                            color: 'black',
                            border: 'transparent',
                            position: 'absolute',
                          }}
                        >
                          {quantity}
                          <Icon 
                            name="angle down" 
                            style={{ 
                                color: '#0048e3' 
                              }} 
                            />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => setOpen(false)}
                          style={{
                            transform: 'translate(458px, -82px)',
                            position: 'absolute',
                            zIndex: '100',
                            background: 'white',
                            border: '1px solid #0048e3',
                            fontSize: '24px',
                            fontWeight: '600',
                            width: '60px',
                          }}
                        >
                          <ul
                            style={{ transform: 'translate(-22.7px)' }}
                            onClick={() => setQuantity(1)}
                          >
                            1
                          </ul>
                          <ul
                            style={{ transform: 'translate(-23.5px)' }}
                            onClick={() => setQuantity(2)}
                          >
                            2
                          </ul>
                          <ul
                            style={{ transform: 'translate(-23.5px)' }}
                            onClick={() => setQuantity(3)}
                          >
                            3
                          </ul>
                          <ul
                            style={{ transform: 'translate(-23.5px)' }}
                            onClick={() => setQuantity(4)}
                          >
                            4
                          </ul>
                          <ul
                            style={{ transform: 'translate(-23.5px)' }}
                            onClick={() => setQuantity(5)}
                          >
                            5
                          </ul>
                          <ul
                            style={{ transform: 'translate(-23.5px)' }}
                            onClick={() => setQuantity(6)}
                          >
                            6
                          </ul>
                          <ul
                            style={{ transform: 'translate(-23.5px)' }}
                            onClick={() => setQuantity(7)}
                          >
                            7
                          </ul>
                          <ul
                            style={{ transform: 'translate(-23.5px)' }}
                            onClick={() => setQuantity(8)}
                          >
                            8
                          </ul>
                          <ul
                            style={{ transform: 'translate(-23.5px)' }}
                            onClick={() => setQuantity(9)}
                          >
                            9
                          </ul>
                          <ul
                            style={{ transform: 'translate(-29.8px)' }}
                            onClick={() => setQuantity(10)}
                          >
                            10
                          </ul>
                        </button>
                      </>
                    )}
                  </div>
                  <div
                    style={{
                      transform: 'translate(567px, -94px)'
                    }}
                  >
                    {/* $599.00 */}
                    <div
                      style={{
                        transform: 'translate(162px, -28px)'
                      }}
                    >
                      ${parseFloat(props.value) + parseFloat(props.cellValue)}.00
                    </div>
                  </div>
                </Container> 
                <Grid.Row
                  style={{
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    marginTop: '70px'
                  }}
                >
                  <div
                    style={{
                      transform: 'translate(92px, -169px)'
                    }}
                  >
                    Pay 0% APR for 12 months:
                  </div>
                  <div
                    style={{
                      transform: 'translate(754px, -189.5px)'
                    }}
                  >
                    $
                    {((parseFloat(props.value) + parseFloat(props.cellValue)) / 12).toFixed(
                      2
                    )}
                    /mo.
                  </div>
                </Grid.Row>
                <div
                  style={{
                    transform: 'translate(765px, -170px)',
                    color: 'rgb(0, 102, 204)',
                    fontSize: '17px',
                    fontWeight: '400',
                    cursor: 'pointer',
                  }}
                >
                  <a
                    onClick={() => {
                        // setBag(false),
                        // setValue(0),
                        // setColor(false),
                        // setStorage(0),
                        // setConnectivity(false),
                        // setCellValue(0),
                        // setEngraving(false),
                        // setAppleCare(0)
                        router.push('/colorSelection/ipadhome');
                    }}
                    className={styles.bluehovering}
                  >
                    Remove
                  </a>
                </div>     
                <Divider
                  style={{
                    transform: 'translate(94.5px, -147px)',
                    width: '731px',
                    marginTop: '-15px'
                  }}
                />
                {noAppleCare ? (
                  <>
                    <div
                      style={{
                        transform: 'translate(38px, -137px)',
                        width: '800px'
                      }}
                    >
                      <Icon
                        name="apple"
                        color="red"
                        style={{
                          transform: 'translate(53px, -3px) scale(1.1)'
                        }}
                      />
                      <div
                        style={{
                          transform: 'translate(79px, -24px)'
                          }}
                        >
                        <span
                          style={{
                            fontSize: '17px',
                            fontWeight: '600',
                            lineHeight: '25px',
                          }}
                        >
                          AppleCare+ for iPad Air (5th generation)
                        </span>
                        <span
                          style={{
                            transform: 'translate(-91px, -23px)',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            fontSize: '17px',
                            fontWeight: '600',
                          }}
                        >
                          $79.00
                        </span>
                      </div>
                      <div
                        style={{
                          transform: 'translate(79px, -39px)'
                        }}
                      >
                        <span
                          style={{
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '20px',
                          }}
                        >
                          Pay 0% APR for 12 months:
                        </span>
                        <span
                          style={{
                            transform: 'translate(-91px, -20px)',
                            display: 'flex',
                            justifyContent: 'flex-end',
                          }}
                        >
                          $6.58/mo.
                        </span>
                      </div>
                      <div
                        style={{
                          transform: 'translate(79px, -51px)'
                        }}
                      >
                        <span>
                          Automatically registered with your Apple hardware.
                        </span>
                        <span
                          style={{
                            transform: 'translate(-91px, -20px)',
                            display: 'flex',
                            justifyContent: 'flex-end',
                          }}
                        >
                          <a
                            onClick={() => {
                              setAppleCare(0), setNoAppleCare(false);
                            }}
                            className={styles.bluehovering}
                            style={{
                              color: 'rgb(0, 102, 204)',
                              cursor: 'pointer',
                            }}
                          >
                            Remove
                          </a>
                        </span>
                      </div>
                    </div>
                    <Divider
                      style={{
                        transform: 'translate(94.5px, -189.5px)',
                        width: '731px',
                        marginBottom: '-25px'
                      }}
                    />
                  </>
                ) : (
                  <>
                    <Grid.Row>
                      <Grid.Column
                        style={{
                          transform: 'translate(40px, 182px)'
                        }}
                      >
                        <Icon
                          name="apple"
                          color="red"
                          style={{
                            transform: 'translate(53px, -322px) scale(1.1)',
                          }}
                        />
                      </Grid.Column>
                      <Grid.Column
                        style={{
                          width: '701px'
                        }}
                      >
                        <Grid.Row>
                          <div
                            style={{
                              transform: 'translate(118px, -161px)',
                              fontSize: '17px',
                              fontWeight: '600',
                              lineHeight: '25px',
                            }}
                          >
                            Add AppleCare+ for iPad Air (5th generation) for $79.00
                          </div>
                          <div
                            style={{
                              transform: 'translate(796px, -186px)',
                              position: 'absolute',
                              color: 'rgb(0, 102, 204)',
                              cursor: 'pointer',
                              fontWeight: '400',
                              fontSize: '17px',
                              lineHeight: '25px',
                            }}
                          >
                            <a
                              onClick={() => {
                                setAppleCare(79), setNoAppleCare(true);
                              }}
                              className={styles.bluehovering}
                              style={{
                                color: 'rgb(0, 102, 204)',
                                cursor: 'pointer',
                              }}
                            >
                              Add
                            </a>
                          </div>
                        </Grid.Row>
                        <Grid.Row>
                          <div
                            style={{
                              transform: 'translate(118px, -159px)',
                              fontSize: '14px',
                              fontWeight: '400',
                              lineHeight: '20px',
                            }}
                          >
                            Protect your iPad, Apple Pencil, and Apple-branded
                            keyboard from accidental drops and spills with
                            AppleCare+.
                          </div>
                        </Grid.Row>
                        <Grid.Row>
                          <div
                            style={{
                              transform: 'translate(118px, -159px)'
                            }}
                          >
                            <a
                              className={styles.bluehovering}
                              style={{
                                color: 'rgb(0, 102, 204)',
                                cursor: 'pointer',
                              }}
                            >
                              Learn more {'>'}
                            </a>
                          </div>
                        </Grid.Row>
                      </Grid.Column>
                    </Grid.Row>
                    <Divider
                      style={{
                        transform: 'translate(80.5px, -148.5px)',
                        width: '731px'
                      }}
                    />
                  </>
                )}
                <div
                  style={{
                    fontSize: '17px',
                    fontWeight: '600',
                    lineHeight: '25px'
                  }}
                >
                  <div>
                    <div
                      style={{
                        transform: 'translate(-25.5px, -475px) scale(0.55)',
                        position: 'fixed',
                      }}
                    >
                      <div
                        style={{
                          transform: 'translate(205px, 600px)',
                          border: '2px solid black',
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                        }}
                      >
                        <div
                          style={{
                            transform: 'translate(2.9px, 9px)',
                            width: '20px',
                            height: '1px',
                            border: '1px solid black',
                            borderRadius: '50px',
                          }}
                        />
                        <div
                          style={{
                            transform: 'translate(5.5px, 15px)',
                            width: '14.5px',
                            height: '1px',
                            border: '1px solid black',
                            borderRadius: '50px',
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        transform: 'translate(117px, -141.5px)'
                      }}
                    >
                      Add free engraving
                    </div>
                  </div>
                  <div
                    style={{
                      transform: 'translate(796px, -167.9px)',
                      color: 'rgb(0, 102, 204)',
                      cursor: 'pointer',
                      fontWeight: '400',
                    }}
                  >
                    <a
                      className={styles.bluehovering}
                      style={{
                        color: 'rgb(0, 102, 204)',
                        cursor: 'pointer'
                      }}
                    >
                      Add
                    </a>
                  </div>
                </div>
                <Divider
                  style={{
                    transform: 'translate(95px, -161.1px)',
                    width: '731px'
                  }}
                />
                <div
                  style={{
                    fontSize: '17px',
                    fontWeight: '600',
                    lineHeight: '25px',
                  }}
                >
                  <div>
                    <Icon
                      name="gift"
                      style={{
                        transform: 'translate(92px, -157px) scale(1.1)',
                        position: 'absolute',
                      }}
                    />
                    <div
                      style={{
                        transform: 'translate(118px, -155px)',
                        position: 'absolute',
                      }}
                    >
                      Add a gift message
                    </div>
                  </div>
                  <div
                    style={{
                      transform: 'translate(796px, -155px)',
                      color: 'rgb(0, 102, 204)',
                      cursor: 'pointer',
                      fontWeight: '400',
                    }}
                  >
                    <a
                      className={styles.bluehovering}
                      style={{
                        color: 'rgb(0, 102, 204)',
                        cursor: 'pointer'
                      }}
                    >
                      Add
                    </a>
                  </div>
                </div>
                <Divider
                  style={{
                    transform: 'translate(94.5px, -147.7px)',
                    width: '731px'
                  }}
                />
                <Grid>
                  <div>
                    <div
                      style={{
                        fontSize: '14px',
                        fontWeight: '400',
                        lineHeight: '20px',
                      }}
                    >
                      <div
                        style={{
                          transform: 'translate(52px, -158.5px) scale(0.16)',
                          position: 'absolute',
                          border: '5px solid black',
                          width: '100px',
                          height: '85px',
                          borderRadius: '15px',
                        }}
                      >
                        <div
                          style={{
                            transform: 'translate(13.5px, -35px)',
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
                            transform: 'translate(37px, 21px) scale(3.2)',
                            color: 'black',
                          }}
                        />
                      </div>
                      <div
                        style={{
                          transform: 'translate(447px, -127px)',
                          width: '220px',
                        }}
                      >
                        Order today. Delivers to{' '}
                        <a
                          className={styles.bluehovering}
                          style={{
                            color: 'rgb(0, 102, 204)',
                            cursor: 'pointer'
                          }}
                        >
                          <Zip />
                        </a>
                        <b
                          style={{
                            fontWeight: '600'
                          }}
                        >
                          &nbsp;
                          {/* Jul 13 - Jul 20 - Free */}
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
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '14px',
                        fontWeight: '400',
                        lineHeight: '20px',
                        transform: 'translate(72px, 1161px)'
                      }}
                    >
                      <div
                        style={{
                          transform: 'translate(358.9px, -1300px) scale(0.55, 0.5)',
                          position: 'absolute',
                        }}
                      >
                        <div
                          style={{
                            width: '2px',
                            height: '18px',
                            background: 'black',
                            transform: 'translate(7px, -140px) rotate(60deg)',
                            borderRadius: '10px',
                          }}
                        />
                        <div
                          style={{
                            width: '2px',
                            height: '18px',
                            background: 'black',
                            transform: 'translate(-7px, -140.1px) rotate(-60deg)',
                            borderRadius: '10px',
                          }}
                        />
                        <div
                          style={{
                            width: '2px',
                            height: '18px',
                            background: 'black',
                            transform: 'translate(7px, -158px) rotate(60deg)',
                            borderRadius: '10px',
                          }}
                        />
                        <div
                          style={{
                            width: '2px',
                            height: '18px',
                            background: 'black',
                            transform: 'translate(-7px, -194.7px) rotate(-60deg)',
                            borderRadius: '10px',
                          }}
                        />
                        <div
                          style={{
                            width: '2px',
                            height: '18px',
                            background: 'black',
                            transform: 'translate(0px, -200px) rotate(0deg)',
                            borderRadius: '10px',
                          }}
                        />
                        <div
                          style={{
                            width: '2px',
                            height: '18px',
                            background: 'black',
                            transform: 'translate(14px, -225px) rotate(0deg)',
                            borderRadius: '10px',
                          }}
                        />
                        <div
                          style={{
                            width: '2px',
                            height: '18px',
                            background: 'black',
                            transform: 'translate(-14px, -243.5px) rotate(0deg)',
                            borderRadius: '10px',
                          }}
                        />
                        <div
                          style={{
                            width: '2px',
                            height: '18px',
                            background: 'black',
                            transform: 'translate(-7px, -274.8px) rotate(60deg)',
                            borderRadius: '10px',
                          }}
                        />
                        <div
                          style={{
                            width: '2px',
                            height: '18px',
                            background: 'black',
                            transform: 'translate(7px, -293px) rotate(-59deg)',
                            borderRadius: '10px',
                          }}
                        />
                        <div
                          style={{
                            width: '2px',
                            height: '17px',
                            background: 'black',
                            transform: 'translate(0px, -306.5px) rotate(-59deg)',
                            borderRadius: '10px',
                          }}
                        />
                      </div>
                      <div
                        style={{
                          transform: 'translate(45px, -1328px)',
                          width: '200px',
                        }}
                      >
                        Order now. Pick up, in store:{' '}
                        <b 
                          style={{
                            fontWeight: '600'
                          }}
                        >
                          {/* Thu, Jul 21 */}
                          <span>
                            {day < 31 ? <>{pickup}</> : <>{nextMonthPickup}</>}
                          </span>
                        </b>{' '}
                        at{' '}
                        <a
                          className={styles.bluehovering}
                          style={{
                            color: 'rgb(0, 102, 204)',
                            cursor: 'pointer'
                          }}
                        >
                          Apple <City />
                        </a>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Divider
                  style={{
                    transform: 'translate(-148px, -86px)',
                    width: '974px'
                  }}
                />
                <div
                  style={{
                    lineHeight: '29.8px'
                  }}
                >
                  <div
                    style={{
                      transform: 'translateY(3px)',
                      fontSize: '17px',
                      fontWeight: '400',
                    }}
                  >
                    <div
                      style={{
                        transform: 'translate(94px, -76px)',
                        lineHeight: '50px',
                      }}
                    >
                      Subtotal
                    </div>
                    <div
                      style={{
                        transform: (quantity > 1) ? 'translate(746px, -114px)' : 'translate(762px, -114px)'
                      }}
                    >
                      {(
                        parseFloat(quantity) *
                        (parseFloat(props.value) +
                          parseFloat(props.cellValue) +
                          parseFloat(appleCare))
                      ).toLocaleString('en', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                    </div>
                  </div>
                  <div
                    style={{
                      transform: 'translateY(3px)',
                      fontSize: '17px',
                      fontWeight: '400',
                    }}
                  >
                    <div
                      style={{
                        transform: 'translate(94px, -116px)',
                        lineHeight: '30px',
                      }}
                    >
                      Shipping
                    </div>
                    <div
                      style={{
                        transform: 'translate(786px, -145px)'
                      }}
                    >
                      FREE
                    </div>
                  </div>
                  <div
                    style={{
                      transform: 'translate(54px, -1687px)',
                      fontSize: '17px',
                      fontWeight: '400',
                      lineHeight: '30px',
                    }}
                  >
                    <div>
                      <Popup
                        content="The sales tax listed on the checkout page is only an estimate. Your invoice will contain the final sales tax, including state and local taxes, as well as any applicable rebates or fees. In California and Rhode Island, sales tax is collected on the unbundled price of iPhone."
                        trigger={
                          <Icon
                            name="question circle"
                            style={{
                              transform: 'translate(8.5px, 1542px)',
                              position: 'absolute',
                              cursor: 'pointer',
                              color: 'gray',
                            }}
                          />
                        }
                        style={{
                          background: '#e8e8ed',
                          fontSize: '14px',
                          fontWeight: '400',
                          lineHeight: '18px',
                          borderRadius: '10px',
                        }}
                      />
                      <div
                        style={{
                          transform: 'translate(40.2px, 1543px)'
                        }}
                      >
                        Estimated tax for:&nbsp;
                        <a
                          className={styles.bluehovering}
                          style={{
                            color: 'rgb(0, 102, 204)',
                            cursor: 'pointer'
                          }}
                        >
                          <Zip />
                        </a>
                      </div>
                    </div>
                    <div
                      style={{
                        transform: (quantity > 1) ? 'translate(710px, 1498px)' : 'translate(720px, 1498px)',
                        lineHeight: '60px',
                      }}
                    >
                      ${(parseFloat(quantity) * tax).toFixed(2)}
                    </div>
                  </div>
                  <div
                    style={{
                      transform: 'translateY(1px)',
                      fontSize: '17px',
                      fontWeight: '400',
                    }}
                  >
                    <div
                      style={{
                        transform: 'translate(94.5px, -201.8px)'
                      }}
                    >
                      <StateAbbr /> recycling fee{' '}
                      <a
                        className={styles.bluehovering}
                        style={{
                          color: 'rgb(0, 102, 204)',
                          cursor: 'pointer'
                        }}
                      >
                        Learn more
                      </a>
                    </div>
                    <div
                      style={{
                        transform: 'translate(781px, -231px)'
                      }}
                    >
                      $4.00
                    </div>
                  </div>
                  <Divider
                    style={{
                      transform: 'translate(94px, -231px)',
                      width: '731px'
                    }}
                  />
                  <div
                    style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      lineHeight: '28px',
                    }}
                  >
                    <div
                      style={{
                        transform: 'translate(94px, -228px)'
                      }}
                    >
                      Total
                    </div>
                    <div
                      style={{
                        transform: (quantity > 1) ? 'translate(713px, -256px)' : 'translate(730px, -256px)'
                      }}
                    >
                      {(
                        parseFloat(quantity) *
                        (parseFloat(props.value) +
                          parseFloat(props.cellValue) +
                          parseFloat(tax) +
                          parseFloat(appleCare) +
                          parseFloat(props.recycling))
                      ).toLocaleString('en', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                    </div>
                  </div>
                  <div
                    style={{
                      transform: 'translate(624px, -287px)',
                      position: 'absolute',
                    }}
                  >
                    <a
                      className={styles.bluehovering}
                      style={{
                        color: 'rgb(0, 102, 204)',
                        cursor: 'pointer',
                        lineHeight: '86px',
                      }}
                    >
                      Get Daily Cash with Apple Card
                    </a>
                  </div>
                </div>
                <div
                  style={{
                    transform: 'translate(93.5px, -169px)',
                    fontSize: '24px',
                    fontWeight: '600',
                    lineHeight: '28px',
                    width: '731px',
                  }}
                >
                  How would you like to check out?
                </div>
                <div
                  style={{
                    transform: 'translate(96px, -146px)',
                    display: 'inline-block',
                  }}
                >
                  <Item
                    style={{
                      width: '361px',
                      minWidth: '200px',
                      height: '353px',
                      background: '#53687210',
                      borderRadius: '12px',
                      padding: '9px 32px 0px 32px',
                      position: 'fixed',
                    }}
                  >
                    <center
                      style={{
                        fontSize: '24px',
                        fontWeight: '500',
                        lineHeight: '15.3px',
                        marginTop: '36px'
                      }}
                    >
                      <div
                        style={{
                          marginTop: '31px'
                        }}
                      >
                        {user ? (
                        <>
                          View {user.name}{`'s`}
                        </>
                        ):(
                        <>
                          View
                        </>
                        )}
                      </div>
                      <div
                        style={{
                          marginTop: '15.3px'
                        }}
                      >
                        Order History
                      </div>
                    </center>
                    <button
                      className={styles.bagButton}
                      style={{
                        transform: 'translateY(56px)',
                        width: '300px',
                        height: '55px',
                        background: 'rgb(0, 113, 227)',
                        color: 'white',
                        borderRadius: '12px',
                        fontSize: '17px',
                        fontWeight: '400',
                        padding: '18px 31px 18px 31px',
                        marginLeft: '8px',
                        border: '0px solid transparent'
                      }}
                    >
                      <div
                        onClick={() => {handleSubmitProduct(), getOrderHistory(), sendData()}}
                      >
                        View Order History
                      </div>
                    </button>
                  </Item>
                  <Item
                    style={{
                      transform: 'translate(370px)',
                      width: '361px',
                      minWidth: '200px',
                      height: '353px',
                      background: '#53687210',
                      borderRadius: '12px',
                      padding: '14px 32px 0px 28px',
                      fontSize: '24px',
                      fontWeight: '500',
                      lineHeight: '15.3px',
                      textAlign: 'center',
                      marginRight: '35.5px',
                      marginLeft: '7px',
                      position: 'fixed',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          marginTop: '31px'
                        }}
                      >
                        Pay in Full
                      </div>
                      <div
                        style={{
                          marginTop: '15.3px'
                        }}
                      >
                        {(
                          parseFloat(quantity) *
                          (parseFloat(props.value) +
                            parseFloat(props.cellValue) +
                            parseFloat(tax) +
                            parseFloat(appleCare) +
                            parseFloat(props.recycling))
                        ).toLocaleString('en', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </div>
                      <button
                        onClick={() => setPaymentModal(true)}
                        className={styles.bagButton}
                        style={{
                          transform: 'translateY(56px)',
                          width: '300px',
                          height: '55px',
                          background: 'rgb(0, 113, 227)',
                          color: 'white',
                          borderRadius: '12px',
                          fontSize: '17px',
                          fontWeight: '400',
                          padding: '18px 31px 16px 31px',
                          marginLeft: '8px',
                          border: '0px solid transparent'
                        }}
                      >
                        <div
                          onClick={() => setPaymentModal(true)}
                        >
                          Check Out with Stripe
                        </div>
                      </button>
                    </div>
                  </Item>
                </div>
              </Grid.Column>
            </Grid>
          </div>
          <div
            style={{
              transform: 'translateY(212px)'
            }}
          >
            <Divider 
              style={{
                transform: 'translate(-110px)'
              }}
            />
            <center
              style={{
                transform: 'translate(-106px, 9px)',
                fontSize: '17px',
                fontWeight: '400'
              }}
            >
              Need some help?&nbsp;
              <a
                className={styles.bluehovering}
                style={{
                  color: 'rgb(0, 113, 227)',
                  cursor: 'pointer'
                }}
              >
                Chat now
              </a>
              &nbsp;or call 1-800-MY-APPLE.
            </center>
            <Divider 
              style={{
                transform: 'translate(-110px, 18px)'
              }}
            />
          </div>
        </Container>
        </div>
        <Modal
          open={paymentModal}
          dimmer="blurring"
          style={{
            transform: desktop ? 'translate(42px, -490px)' : 'translate(-208px, -400px) scale(0.43)',
            borderRadius: '20px',
            width: '816px',
            height: '1000px',
            position: 'fixed',
            top: desktop ? '640px' : '200px'
          }}
        >
          <div
            style={{
              background: 'lightgray',
              height: desktop ? '36px' : '60px',
              width: desktop ? '36px' : '60px',
              borderRadius: '50%',
              transform: 'translate(15px, 18px)',
              opacity: '0.8',
              cursor: 'pointer',
            }}
            onClick={() => {setPaymentModal(false), setCheckingOut(false)}}
          >
            <h1
              style={{
                fontSize: desktop ? '30px' : '50px',
                fontWeight: 'lighter',
                color: 'gray',
                transform: desktop ? 'translate(10px, -5px)' : 'translate(17px, -8px)',
              }}
            >
              x
            </h1>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Payment 
              quantity={quantity} 
              total={total} 
              gbName={props.gbName} 
            />
          </div>
        </Modal>
      </>
      ):(
      <>
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '20px'
            }}
          >
            <Image 
              src="/images/ipad 2.png" 
              priority 
              alt="ipad" 
              width={300} 
              height={200} 
            />
          </div>
          <div
            style={{
                position: 'relative'
            }}
          >
            <div
                style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  marginBottom: '16px'
                }}
            >             
              <center
                style={{
                  marginRight: '20px',
                  marginLeft: '20px',
                  lineHeight: '28px'
                }}
              >
                10.9-inch iPad Air {props.connectivityName} {props.gbName}
              </center>
            </div>
          </div>
          <div
            style={{
                position: 'relative'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '20px',
                fontSize: '12px'
              }}
            >
                Pay 0% APR for 12 months
            </div>
          </div>
          <center>
              <Divider style={{ width: '90vw' }} />
          </center>
          <div
            style={{
              position: 'relative'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '20px',
                fontSize: '24px',
                fontWeight: '500'
              }}
            >
              ${parseFloat(props.value) + parseFloat(props.cellValue)}.00
            </div>
          </div>
          <center>
              <Divider style={{ width: '90vw' }} />
          </center>
          <div
            style={{
              color: 'rgb(0, 102, 204)',
              fontSize: '17px',
              fontWeight: '400',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '-15px'
            }}
          >
            <a
              onClick={() => {
                  router.push('/colorSelection/ipadhome');
              }}
              className={styles.bluehovering}
            >
                Remove
            </a>
          </div> 
          <center>
              <Divider style={{ width: '90vw' }} />
          </center>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '20px'
            }}
          >
            <div
              style={{
                width: '75%'
              }}
            >
                Order now. Pick up, in store:{' '}
                <b 
                  style={{
                    fontWeight: '600'
                  }}
                >
                <span>
                    {day < 31 ? <>{pickup}</> : <>{nextMonthPickup}</>}
                </span>
                </b>{' '}
                at{' '}
                <a
                  className={styles.bluehovering}
                  style={{
                    color: 'rgb(0, 102, 204)',
                    cursor: 'pointer'
                  }}
                >
                  Apple <City />
                </a>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                width: '75%'
              }}
            >
              Order today. Delivers to{' '}
              <a
                className={styles.bluehovering}
                style={{
                  color: 'rgb(0, 102, 204)',
                  cursor: 'pointer'
                }}
              >
                  <Zip />
              </a>
              <b
                style={{
                    fontWeight: '600'
                }}
              >
              &nbsp;
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
          <center>
              <Divider style={{ width: '90vw' }} />
          </center>
          <Container
            style={{
              paddingRight: '33px',
              paddingLeft: '33px'
            }}
          >
            <div
              style={{
                transform: 'translateY(3px)',
                fontSize: '17px',
                fontWeight: '400'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start'
                }}
              >
                SubTotal: 
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  transform: 'translateY(-20px)'
                }}
              >
                {(
                    parseFloat(quantity) *
                    (parseFloat(props.value) +
                    parseFloat(props.cellValue) +
                    parseFloat(appleCare))
                ).toLocaleString('en', {
                    style: 'currency',
                    currency: 'USD',
                })}
              </div>
            </div>
            <div
              style={{
                transform: 'translateY(3px)',
                fontSize: '17px',
                fontWeight: '400',
              }}
            >
              <div
                style={{
                  lineHeight: '30px',
                }}
              >
                Shipping:
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  transform: 'translateY(-20px)'
                }}
              >
                FREE
              </div>
            </div>
            <div
              style={{
                fontSize: '17px',
                fontWeight: '400',
                lineHeight: '30px'
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start'
                  }}
                >
                  Estimated tax for&nbsp;
                  <a
                    className={styles.bluehovering}
                    style={{
                      color: 'rgb(0, 102, 204)',
                      cursor: 'pointer'
                    }}
                  >
                    <Zip />:
                  </a>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    transform: 'translateY(-30px)'
                  }}
                >
                  ${(parseFloat(quantity) * tax).toFixed(2)}
                </div>
              </div>
            </div>
            <div
              style={{
                transform: 'translateY(1px)',
                fontSize: '17px',
                fontWeight: '400'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  transform: 'translateY(-10px)'
                }}
              >
                <StateAbbr />&nbsp;recycling fee: 
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  transform: 'translateY(-30px)'
                }}
              >
                $4.00
              </div>
            </div>
            <div
              style={{
                fontSize: '24px',
                fontWeight: '600',
                lineHeight: '28px',
                transform: 'translateY(-10px)'
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start'
                  }}
                >
                  Total:
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    transform: 'translateY(-29px)'
                  }}
                >
                  {(
                      parseFloat(quantity) *
                      (parseFloat(props.value) +
                      parseFloat(props.cellValue) +
                      parseFloat(tax) +
                      parseFloat(appleCare) +
                      parseFloat(props.recycling))
                  ).toLocaleString('en', {
                      style: 'currency',
                      currency: 'USD',
                  })}
                </div>
              </div>
            </div>
          </Container>
          <center>
              <Divider style={{ width: '90vw', transform: 'translateY(-15px)' }} />
          </center>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              transform: 'scale(0.9)'
            }}
          >
            <Item
              style={{
                width: '361px',
                minWidth: '200px',
                height: '353px',
                background: '#53687210',
                borderRadius: '12px',
                padding: '9px 32px 0px 32px'
              }}
            >
              <center
                style={{
                  fontSize: '24px',
                  fontWeight: '500',
                  lineHeight: '15.3px',
                  marginTop: '36px'
                }}
              >
                <div
                  style={{
                    marginTop: '31px'
                  }}
                >
                  {user ? (
                  <>
                      View {user.name}{`'s`}
                  </>
                  ):(
                  <>
                      View
                  </>
                  )}
                </div>
                <div
                  style={{
                    marginTop: '15.3px'
                  }}
                >
                    Order History
                </div>
              </center>
              <button
                className={styles.bagButton}
                  style={{
                    transform: 'translateY(56px)',
                    width: '300px',
                    height: '55px',
                    background: 'rgb(0, 113, 227)',
                    color: 'white',
                    borderRadius: '12px',
                    fontSize: '17px',
                    fontWeight: '400',
                    padding: '18px 31px 18px 31px',
                    border: '0px solid transparent'
                  }}
                >
                <div
                  onClick={() => {handleSubmitProduct(), getOrderHistory(), sendData()}}
                >
                  View Order History
                </div>
              </button>
            </Item>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              transform: 'scale(0.9)'
            }}
          >
            <Item
              style={{
                width: '361px',
                minWidth: '200px',
                height: '353px',
                background: '#53687210',
                borderRadius: '12px',
                padding: '14px 32px 0px 28px',
                fontSize: '24px',
                fontWeight: '500',
                lineHeight: '15.3px',
                textAlign: 'center'
              }}
            >
              <div>
                <div
                  style={{
                    marginTop: '31px'
                  }}
                >
                  Pay in Full
                </div>
                <div
                  style={{
                    marginTop: '15.3px'
                  }}
                >
                  {(
                  parseFloat(quantity) *
                  (parseFloat(props.value) +
                      parseFloat(props.cellValue) +
                      parseFloat(tax) +
                      parseFloat(appleCare) +
                      parseFloat(props.recycling))
                  ).toLocaleString('en', {
                  style: 'currency',
                  currency: 'USD',
                  })}
                </div>
                <button
                  onClick={() => setPaymentModal(true)}
                  className={styles.bagButton}
                  style={{
                    transform: 'translateY(56px)',
                    width: '300px',
                    height: '55px',
                    background: 'rgb(0, 113, 227)',
                    color: 'white',
                    borderRadius: '12px',
                    fontSize: '17px',
                    fontWeight: '400',
                    padding: '18px 31px 16px 31px',
                    border: '0px solid transparent'
                  }}
                >
                  <div>
                    Check Out with Stripe
                  </div>
                </button>
              </div>
            </Item>
          </div>
        </div>
        <Modal
          open={paymentModal}
          dimmer="blurring"
          style={{
            transform: 'translate(-228px, -420px) scale(0.43)',
            borderRadius: '20px',
            width: '816px',
            height: '1000px',
            position: 'fixed',
            top: '380px'
          }}
        >
          <div
            style={{
              background: 'lightgray',
              height: '60px',
              width: '60px',
              borderRadius: '50%',
              transform: 'translate(15px, 18px)',
              opacity: '0.8',
              cursor: 'pointer',
            }}
            onClick={() => {setPaymentModal(false), setCheckingOut(false)}}
          >
            <h1
              style={{
                fontSize: '50px',
                fontWeight: 'lighter',
                color: 'gray',
                transform: 'translate(17px, -8px)',
              }}
            >
              x
            </h1>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Payment 
              quantity={quantity} 
              total={total} 
              gbName={props.gbName} 
            />
          </div>
        </Modal>
      </>
      )}
    </>
  );
}

Cart.getInitialProps = async ctx => {
  const { token } = parseCookies(ctx);
  if (!token) {
    return { orders: [] };
  }
  const payload = { headers: { Authorization: token } };
  const url = `${baseUrl}/api/orders`;
  const response = await axios.get(url, payload);
  return response.data;
};
