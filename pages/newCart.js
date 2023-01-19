import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Container, Divider, Segment, Button, Icon, Item, Grid, Popup, Modal } from 'semantic-ui-react';
import Front from '../components/ipadFront';
import styles from '../styles/ipad.module.css';
import { useRouter } from 'next/router';
import Payment from '../components/payment';
import { parseCookies } from 'nookies';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import Zip from '../components/zip';
import StateAbbr from '../components/state_abbr';
import City from '../components/city';

const LOCAL_STORAGE_KEY = 'user_cart';

export default function NewCart(values) {

  const {
    value,
    cellValue,
    appleCare,
    tax,
    recycling,
    setBag,
    setValue,
    setColor,
    setStorage,
    setConnectivity,
    setCellValue,
    setEngraving,
    setAppleCare,
    colorName,
    gbName,
    connectivityName,
    total,
    products,
  } = values;

  const [noAppleCare, setNoAppleCare] = useState(false);
  const [quantity, setQuantity] = useState('1');
  const [open, setOpen] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);

  const router = useRouter();

  console.log(quantity);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(checkOut));
  }, [tax]);

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

  let checkOut = (
    parseFloat(quantity) *
    (parseFloat(value) +
      parseFloat(cellValue) +
      parseFloat(tax) +
      parseFloat(appleCare) +
      parseFloat(recycling))
  ).toFixed(2);

  let checkedOut = () =>
    console.log('%c Checkout Value:', 'color: blue', checkOut);

  // open scroll to top of page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <Head>
        <title>Bag - Apple</title>
        <meta name="description" content="apple, ipad" />
      </Head>
      <Container
        style={{
          position: 'relative',
          zIndex: '100',
          // transform: 'translate(114px)',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div 
          style={{ 
            padding: '0px 13.5px 0px 13.5px' 
          }}
        >
          <div
            style={{
              // transform: 'translate(-108px, -11px)',
              fontSize: '40px',
              fontWeight: '600',
              lineHeight: '44px',
              paddingBottom: '2px',
            }}
          >
            Review your bag. 
          </div>
          <div
            style={{
              fontSize: '17px',
              fontWeight: '400',
              lineHeight: '25px',
              marginTop: '-17px',
              // transform: 'translate(-26px)',
            }}
          >
            Free delivery and free returns. 
          </div>
          <div
            style={{
              background: '#53687210',
              border: 'transparent',
              borderRadius: '12px',
              marginTop: '35.5px',
              width: '974px',
              // display: 'flex',
              // justifyContent: 'center',
              // transform: 'translate(63px)',
            }}
          >
            <div
              style={{
                fontSize: '14px',
                fontWeight: '400',
                padding: '0px 10px 0px 50px',
                lineHeight: '20px',
                width: '770px',
                height: '53px',
                // transform: 'translate(135px)',
              }}
            >
              <div
                style={{
                  transform: 'translate(-301px, -25.5px) scale(0.2)',
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
                    // transform: 'translate(-193.5px, 39px)',
                  }}
                />
              </div>
              <div 
                style={{ 
                  // transform: 'translate(-152px, -13px)' 
                }}
              >
                {/* Pay $49.91/mo. at 0% APR for eligible items in your order when you choose Apple Card Monthly Installments at&nbsp; */}
                <div>
                  Pay $
                  {((parseFloat(value) + parseFloat(cellValue)) / 12).toFixed(
                    2
                  )}
                  /mo. at 0% APR for eligible items in your order when you
                  choose Apple Card Monthly Installments at checkout. &nbsp;
                  <a
                    className={styles.bluehovering}
                    style={{ color: 'rgb(0, 113, 227)', cursor: 'pointer' }}
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ marginTop: '-84px', width: '974px', position: 'static', height: '100px' }}
          >
            <div 
              style={{ 
                width: '100px' 
              }}
            >
              <div
                style={{ 
                  transform: 'scale(0.385) translate(48px, -240px)',
                  position: 'absolute' 
                }}
              >
                <Front />
              </div>
            </div>
            <div 
              style={{
                width: '300px'
              }}
            >
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  lineHeight: '28px',
                  marginTop: '58px',
                }}
              >
                <div 
                  style={{ 
                    // transform: 'translate(53px)' 
                  }}
                >
                  10.9-inch iPad Air {connectivityName} {gbName}
                </div>{' '}
                <div 
                  style={{ 
                    paddingBottom: '66px' 
                  }}
                >
                  {!open ? (
                    <>
                      <button
                        onClick={() => setOpen(true)}
                        style={{
                          // transform: 'translate(437px, -56.8px)',
                          background: 'transparent',
                          color: 'black',
                          border: 'transparent',
                          position: 'absolute',
                        }}
                      >
                        {quantity}
                        <Icon name="angle down" style={{ color: '#0048e3' }} />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => setOpen(false)}
                        style={{
                          // transform: 'translate(419px, -82px)',
                          position: 'absolute',
                          zIndex: '100',
                          // size: '20px',
                          background: 'white',
                          border: '1px solid #0048e3',
                          fontSize: '24px',
                          fontWeight: '600',
                          width: '60px',
                        }}
                      >
                        <ul
                          style={{ 
                            // transform: 'translate(-22.7px)' 
                          }}
                          onClick={() => setQuantity(1)}
                        >
                          1
                        </ul>
                        <ul
                          // style={{ transform: 'translate(-23.5px)' }}
                          onClick={() => setQuantity(2)}
                        >
                          2
                        </ul>
                        <ul
                          // style={{ transform: 'translate(-23.5px)' }}
                          onClick={() => setQuantity(3)}
                        >
                          3
                        </ul>
                        <ul
                          // style={{ transform: 'translate(-23.5px)' }}
                          onClick={() => setQuantity(4)}
                        >
                          4
                        </ul>
                        <ul
                          // style={{ transform: 'translate(-23.5px)' }}
                          onClick={() => setQuantity(5)}
                        >
                          5
                        </ul>
                        <ul
                          // style={{ transform: 'translate(-23.5px)' }}
                          onClick={() => setQuantity(6)}
                        >
                          6
                        </ul>
                        <ul
                          // style={{ transform: 'translate(-23.5px)' }}
                          onClick={() => setQuantity(7)}
                        >
                          7
                        </ul>
                        <ul
                          // style={{ transform: 'translate(-23.5px)' }}
                          onClick={() => setQuantity(8)}
                        >
                          8
                        </ul>
                        <ul
                          // style={{ transform: 'translate(-23.5px)' }}
                          onClick={() => setQuantity(9)}
                        >
                          9
                        </ul>
                        <ul
                          // style={{ transform: 'translate(-29.8px)' }}
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
                    // transform: 'translate(528px, -150px)' 
                  }}
                >
                  <div 
                    style={{ 
                      // transform: 'translate(164px)' 
                    }}
                  >
                    ${parseFloat(value) + parseFloat(cellValue)}.00
                  </div>
                </div>
              </div>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: '400',
                  lineHeight: '20px',
                }}
              >
                <div 
                  style={{ 
                    // transform: 'translate(54px, -203px)' 
                  }}
                >
                  Pay 0% APR for 12 months:
                </div>
                <div 
                  style={{ 
                    // transform: 'translate(715px, -243px)' 
                  }}
                >
                  $
                  {((parseFloat(value) + parseFloat(cellValue)) / 12).toFixed(
                    2
                  )}
                  /mo.
                </div>
              </div>
              <div
                style={{
                  // transform: 'translate(604.5px, -264px)',
                  color: 'rgb(0, 102, 204)',
                  fontSize: '17px',
                  fontWeight: '400',
                  cursor: 'pointer',
                }}
              >
                <a
                  onClick={() => {
                    setBag(false),
                      setValue(0),
                      setColor(false),
                      setStorage(0),
                      setConnectivity(false),
                      setCellValue(0),
                      setEngraving(false),
                      setAppleCare(0);
                  }}
                  className={styles.bluehovering}
                >
                  Remove
                </a>
              </div>
              <Divider
                style={{
                  // transform: 'translate(56px, -269.5px)',
                  width: '731px',
                }}
              />
              {noAppleCare ? (
                <>
                  <div
                    style={{
                      // transform: 'translateY(-260px)',
                      width: '800px',
                      paddingBottom: '342px',
                    }}
                  >
                    <Icon
                      name="apple"
                      color="red"
                      // style={{ transform: 'translate(53px, -3px) scale(1.1)' }}
                    />
                    <div 
                      style={{ 
                        // transform: 'translate(79px, -24px)' 
                      }}>
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
                          // transform: 'translate(-91px, -23px)',
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
                        // transform: 'translate(79px, -39px)' 
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
                          // transform: 'translate(-91px, -20px)',
                          display: 'flex',
                          justifyContent: 'flex-end',
                        }}
                      >
                        $6.58/mo.
                      </span>
                    </div>
                    <div 
                      style={{ 
                        // transform: 'translate(79px, -51px)' 
                      }}
                    >
                      <span>
                        Automatically registered with your Apple hardware.
                      </span>
                      <span
                        style={{
                          // transform: 'translate(-91px, -20px)',
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
                      // transform: 'translate(56px, -658.5px)',
                      width: '731px'
                    }}
                  />
                </>
              ) : (
                <>
                  <div>
                    <div style={{ width: '30px' }}>
                      <Icon
                        name="apple"
                        color="red"
                        style={{
                          // transform: 'translate(53px, -323px) scale(1.1)',
                        }}
                      />
                    </div>
                    <div
                      style={{ 
                        width: '701px', 
                        marginBottom: '18px' 
                      }}
                    >
                      <div>
                        <div
                          style={{
                            // transform: 'translate(80px, -448px)',
                            fontSize: '17px',
                            fontWeight: '600',
                            lineHeight: '25px',
                          }}
                        >
                          <div>
                            Add AppleCare+ for iPad Air (5th generation) for
                            $79.00
                          </div>
                        </div>
                        <div
                          style={{
                            // transform: 'translate(718px, -518px)',
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
                      </div>
                      <div>
                        <div
                          style={{
                            // transform: 'translate(79px, -530px)',
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '20px',
                          }}
                        >
                          Protect your iPad, Apple Pencil, and Apple-branded
                          keyboard from accidental drops and spills with
                          AppleCare+.
                        </div>
                      </div>
                      <div>
                        <div
                          // style={{ transform: 'translate(-72.5px, -590px)' }}
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
                      </div>
                    </div>
                  </div>
                  <Divider
                    style={{
                      // transform: 'translate(42px, -658.5px)',
                      width: '731px',
                    }}
                  />
                </>
              )}
              <div
                style={{
                  // transform: 'translate(0px, 0px)',
                  fontSize: '17px',
                  fontWeight: '600',
                  lineHeight: '25px',
                }}
              >
                <div>
                  <div
                    style={{
                      // transform: 'translate(-25.5px, -475px) scale(0.55)',
                      position: 'fixed',
                    }}
                  >
                    <div
                      style={{
                        // transform: 'translate(80px, -500px)',
                        border: '2px solid black',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                      }}
                    >
                      <div
                        style={{
                          // transform: 'translate(2.9px, -16px)',
                          width: '20px',
                          height: '1px',
                          border: '1px solid black',
                          borderRadius: '50px',
                        }}
                      />
                      <div
                        style={{
                          // transform: 'translate(5.5px, -36px)',
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
                      transform: 'translate(80px, -722px)' 
                    }}
                  >
                    Add free engraving
                  </div>
                </div>
                <div
                  style={{
                    // transform: 'translate(600.8px, -797.7px)',
                    color: 'rgb(0, 102, 204)',
                    cursor: 'pointer',
                    fontWeight: '400',
                  }}
                >
                  <a
                    className={styles.bluehovering}
                    style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}
                  >
                    Add
                  </a>
                </div>
              </div>
              <Divider
                style={{
                  // transform: 'translate(56px, -836.5px)',
                  width: '731px',
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
                      // transform: 'translate(-94.5px, -877px) scale(1.1)',
                      position: 'absolute',
                    }}
                  />
                  <div
                    style={{
                      // transform: 'translate(80px, -900.5px)',
                      position: 'absolute',
                    }}
                  >
                    Add a gift message
                  </div>
                </div>
                <div   
                  style={{
                    // transform: 'translate(600.5px, -950px)',
                    color: 'rgb(0, 102, 204)',
                    cursor: 'pointer',
                    fontWeight: '400',
                  }}
                >
                  <a
                    className={styles.bluehovering}
                    style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}
                  > 
                    Add
                  </a>
                </div>
              </div>
              <Divider
                style={{
                  // transform: 'translate(56px, -987.5px)',
                  width: '731px',
                }}
              />
              <div>
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
                        transform: 'translate(14px, -1078.5px) scale(0.16)',
                        position: 'absolute',
                        border: '5px solid black',
                        width: '100px',
                        height: '85px',
                        borderRadius: '15px',
                      }}
                    >
                      <div
                        style={{
                          // transform: 'translate(14.5px, -55px)',
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
                        // transform: 'translate(409px, -1047px)',
                        width: '220px',
                      }}
                    >
                      Order today. Delivers to{' '}
                      <a
                        className={styles.bluehovering}
                        style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}
                      >
                        <Zip />
                      </a>
                      <b style={{ fontWeight: '600' }}>
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
                </div>
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
                        // transform: 'translate(358.9px, -1292.8px) scale(0.55, 0.5)',
                        position: 'absolute',
                      }}
                    >
                      <div
                        style={{
                          width: '2px',
                          height: '18px',
                          background: 'black',
                          // transform: 'translate(7px, 0px) rotate(60deg)',
                          borderRadius: '10px',
                        }}
                      />
                      <div
                        style={{
                          width: '2px',
                          height: '18px',
                          background: 'black',
                          // transform: 'translate(-7px, -38px) rotate(-60deg)',
                          borderRadius: '10px',
                        }}
                      />
                      <div
                        style={{
                          width: '2px',
                          height: '18px',
                          background: 'black',
                          // transform: 'translate(7px, -60px) rotate(60deg)',
                          borderRadius: '10px',
                        }}
                      />
                      <div
                        style={{
                          width: '2px',
                          height: '18px',
                          background: 'black',
                          // transform: 'translate(-7px, -98px) rotate(-60deg)',
                          borderRadius: '10px',
                        }}
                      />
                      <div
                        style={{
                          width: '2px',
                          height: '18px',
                          background: 'black',
                          // transform: 'translate(0px, -140px) rotate(0deg)',
                          borderRadius: '10px',
                        }}
                      />
                      <div
                        style={{
                          width: '2px',
                          height: '18px',
                          background: 'black',
                          // transform: 'translate(14px, -186px) rotate(0deg)',
                          borderRadius: '10px',
                        }}
                      />
                      <div
                        style={{
                          width: '2px',
                          height: '18px',
                          background: 'black',
                          // transform: 'translate(-14px, -224px) rotate(0deg)',
                          borderRadius: '10px',
                        }}
                      />
                      <div
                        style={{
                          width: '2px',
                          height: '18px',
                          background: 'black',
                          // transform: 'translate(-7px, -274.8px) rotate(60deg)',
                          borderRadius: '10px',
                        }}
                      />
                      <div
                        style={{
                          width: '2px',
                          height: '18px',
                          background: 'black',
                          // transform: 'translate(7px, -312.7px) rotate(-59deg)',
                          borderRadius: '10px',
                        }}
                      />
                      <div
                        style={{
                          width: '2px',
                          height: '17px',
                          background: 'black',
                          // transform: 'translate(0px, -346px) rotate(-59deg)',
                          borderRadius: '10px',
                        }}
                      />
                    </div>
                    <div
                      style={{
                        // transform: 'translate(79px, -1186.8px)',
                        width: '200px',
                      }}
                    >
                      Order now. Pick up, in store:{' '}
                      <b style={{ fontWeight: '600' }}>
                        <span>
                          {day < 31 ? <>{pickup}</> : <>{nextMonthPickup}</>}
                        </span>
                      </b>{' '}
                      at{' '}
                      <a
                        className={styles.bluehovering}
                        style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}
                      >
                        Apple <City />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <Divider
                style={{
                  // transform: 'translate(-187px, -1185.5px)',
                  width: '974px',
                  marginBottom: '0px',
                }}
              />
              <div style={{ lineHeight: '29.8px' }}>
                <div
                  style={{
                    // transform: 'translateY(3px)',
                    fontSize: '17px',
                    fontWeight: '400',
                  }}
                >
                  <div
                    style={{
                      // transform: 'translate(-102px, -1241px)',
                      lineHeight: '50px',
                    }}
                  >
                    Subtotal
                  </div>
                  <div 
                    style={{ 
                      // transform: 'translate(723px, -1359px)' 
                    }}
                  >
                    {(
                      parseFloat(quantity) *
                      (parseFloat(value) +
                        parseFloat(cellValue) +
                        parseFloat(appleCare))
                    ).toLocaleString('en', {
                      style: 'currency',
                      currency: 'USD',
                    })}
                  </div>
                </div>
                <div
                  style={{
                    // transform: 'translateY(3px)',
                    fontSize: '17px',
                    fontWeight: '400',
                  }}
                >
                  <div
                    style={{
                      // transform: 'translate(-102.5px, -1448.7px)',
                      lineHeight: '30px',
                    }}
                  >
                    Shipping
                    
                  </div>
                  
                  <div 
                    style={{ 
                      // transform: 'translate(592px, -1538px)' 
                    }}
                  >
                    FREE
                  </div>
                </div>
                <div
                  style={{
                    // transform: 'translate(54px, -1687px)',
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
                            // transform: 'translate(-186px, 29.09px)',
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
                    <div>
                      Estimated tax for:&nbsp;
                      <a
                        className={styles.bluehovering}
                        style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}
                      >
                        <Zip />
                      </a>
                    </div>
                  </div>
                  <div
                    style={{
                      // transform: 'translate(681px, -105px)',
                      lineHeight: '60px',
                    }}
                  >
                    ${(parseFloat(quantity) * tax).toFixed(2)}
                  </div>
                </div>
                <div
                  style={{
                    // transform: 'translateY(1px)',
                    fontSize: '17px',
                    fontWeight: '400',
                  }}
                >
                  <div 
                    style={{ 
                      // transform: 'translate(54px, -1895px)' 
                    }}
                  >
                    <StateAbbr /> recycling fee{' '}
                    <a
                      className={styles.bluehovering}
                      style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}
                    >
                      Learn more
                    </a>
                  </div>
                  <div
                    style={{ 
                      // transform: 'translate(587px, -1955px)' 
                    }}
                  >
                    $4.00
                  </div>
                </div>
                {/* <Divider
                  style={{
                    transform: 'translate(56px, -2044.5px)',
                    width: '731px',
                  }}
                /> */}
                <div
                  style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    lineHeight: '28px',
                  }}
                >
                  <div 
                    style={{ 
                      // transform: 'translate(-132px, -2099px)' 
                    }}
                  >
                    Total
                  </div>
                  <div 
                    style={{ 
                      // transform: 'translate(692px, -2183px)' 
                    }}
                  >
                    {(
                      parseFloat(quantity) *
                      (parseFloat(value) +
                        parseFloat(cellValue) +
                        parseFloat(tax) +
                        parseFloat(appleCare) +
                        parseFloat(recycling))
                    ).toLocaleString('en', {
                      style: 'currency',
                      currency: 'USD',
                    })}
                  </div>
                </div>
                <div
                  style={{
                    // transform: 'translate(586px, -2271px)',
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
                  // transform: 'translate(53px, -2173px)',
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
                  // transform: 'translate(54px, -2175px)',
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
                    }}
                  >
                    <div>Pay Monthly</div>
                    <div>with Apple Card</div>
                    <div>
                      $
                      {(
                        parseFloat(quantity) *
                        ((parseFloat(value) +
                          parseFloat(cellValue) +
                          parseFloat(appleCare)) /
                          12)
                      ).toFixed(2)}
                      /mo. at 0% APR
                    </div>
                  </center>
                  <button
                    onClick={() => setPaymentModal(true)}
                    className={styles.bagButton}
                    style={{
                      // transform: 'translateY(-9px)',
                      width: '300px',
                      background: 'rgb(0, 113, 227)',
                      color: 'white',
                      borderRadius: '12px',
                      fontSize: '17px',
                      fontWeight: '400',
                      lineHeight: '10px',
                      padding: '12.1px 31px 13.3px 31px',
                      border: '0px solid transparent',
                    }}
                  >
                    <div onClick={() => checkedOut()}>
                      Check Out with Apple Card
                    </div>
                    <div>Monthly Installments</div>
                  </button>
                  <center
                    style={{
                      // transform: 'translateY(-26px)',
                      lineHeight: '10px',
                    }}
                  >
                    <div>$0.00 due today, which includes</div>
                    <div>applicable full-price items, down</div>
                    <div>payments, shipping, and taxes.</div>
                  </center>
                </Item>
                <Item
                  style={{
                    // transform: 'translate(370px)',
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
                    <div>Pay in Full</div>
                    <div>
                      {(
                        parseFloat(quantity) *
                        (parseFloat(value) +
                          parseFloat(cellValue) +
                          parseFloat(tax) +
                          parseFloat(appleCare) +
                          parseFloat(recycling))
                      ).toLocaleString('en', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                    </div>
                    <button
                      onClick={() => setPaymentModal(true)}
                      className={styles.bagButton}
                      style={{
                        // transform: 'translateY(56px)',
                        width: '300px',
                        height: '55px',
                        background: 'rgb(0, 113, 227)',
                        color: 'white',
                        borderRadius: '12px',
                        fontSize: '17px',
                        fontWeight: '400',
                        padding: '18px 31px 18px 31px',
                        marginLeft: '8px',
                        border: '0px solid transparent',
                      }}
                    >
                      <div
                        onClick={() => checkedOut()}
                        // style={{ transform: 'translateY(-13.3px)' }}
                      >
                        Check Out
                      </div>
                    </button>
                    <Modal
                      open={paymentModal}
                      dimmer="blurring"
                      style={{
                        // transform: 'translate(42px, -490px)',
                        borderRadius: '20px',
                        width: '816px',
                        height: '1000px',
                        position: 'fixed',
                      }}
                    >
                      <div
                        style={{
                          background: 'lightgray',
                          height: '36px',
                          width: '36px',
                          borderRadius: '50%',
                          // transform: 'translate(15px, 18px)',
                          opacity: '0.8',
                          cursor: 'pointer',
                        }}
                        onClick={() => setPaymentModal(false)}
                      >
                        <h1
                          style={{
                            fontSize: '30px',
                            fontWeight: 'lighter',
                            color: 'gray',
                            // transform: 'translate(10px, -5px)',
                          }}
                        >
                          x
                        </h1>
                      </div>
                      <div
                        style={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <Payment total={total} gbName={gbName} />
                      </div>
                    </Modal>
                  </div>
                </Item>
              </div>
            </div>
          </div>
        </div>
        {/* <div 
          style={{ 
            // transform: 'translateY(-1872px)' 
          }}
        >
          <Divider />
          <center
            style={{
              // transform: 'translateY(-11px)',
              fontSize: '17px',
              fontWeight: '400',
              lineHeight: '25px'
            }}
          >
              Need some help?&nbsp;
            <a
              className={styles.bluehovering}
              style={{ color: 'rgb(0, 113, 227)', cursor: 'pointer' }}
            >
              Chat now
            </a>
            &nbsp;or call 1-800-MY-APPLE.
          </center>
          <Divider 
            style={{ 
              // transform: 'translateY(-22px)' 
            }} 
          />
        </div> */}
      </Container>
      {/* <div
        style={{
          transform: 'translate(-200px, -3680px)',
          zIndex: '10',
          background: 'red',
          width: '550px',
          height: '1730px',
        }}
      />{' '} */}
      {/*  cover up */}
      <div 
          style={{ 
            // transform: 'translateY(-1872px)' 
          }}
        >
          <Divider />
          <center
            style={{
              // transform: 'translateY(-11px)',
              fontSize: '17px',
              fontWeight: '400',
              lineHeight: '25px'
            }}
          >
              Need some help?&nbsp;
            <a
              className={styles.bluehovering}
              style={{ color: 'rgb(0, 113, 227)', cursor: 'pointer' }}
            >
              Chat now
            </a>
            &nbsp;or call 1-800-MY-APPLE.
          </center>
          <Divider 
            style={{ 
              // transform: 'translateY(-22px)' 
            }} 
          />
        </div>
    </>
  );
}

NewCart.getInitialProps = async (ctx) => {
  const { token } = parseCookies(ctx);
  if (!token) {
    return { products: [] };
  }
  const url = `${baseUrl}/api/cart`;
  const payload = { headers: { Authorization: token } };
  const response = await axios.get(url, payload);
  return { products: response.data };
};
