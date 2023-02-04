import React, { useState, useEffect } from 'react';
import { checkout } from '../../checkout';
import { Icon, Divider } from 'semantic-ui-react';
import Image from 'next/image';
import Check from '../check';
import styles from '../../styles/ipad.module.css';

export default function SixCell({ quantity }) {
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
      <div
        style={{
          padding: '15px',
          borderRadius: '10px',
          fontFamily: 'SF Pro',
        }}
      >
        <div style={{ transform: 'translate(45px)' }}>
          <Image 
            src="/images/ipad 2.png" 
            priority
            alt="ipad" 
            width={700} 
            height={460} 
          />
        </div>
        <div
          style={{
            transform: 'translateY(70px)',
            position: 'relative',
            zIndex: '10',
            margin: desktop ? '0px 90px 0px 90px' : '0px 20px 0px 20px',
          }}
        >
          <div
            style={{
              fontSize: desktop ? '40px' : '70px',
              paddingLeft: '56px',
            }}
          >
            iPad Air Cellular 64
            <span style={{ fontSize: desktop ? '25px' : '35px' }}>GB</span>
          </div>
          <Divider />
          <p
            style={{
              fontSize: desktop ? '17px' : '30px',
              lineHeight: desktop ? null : '37px',
              padding: '0px 55px 0px 55px',
            }}
          >
            The new iPad Air has an all-screen design, 10.9″ display, M1 chip,
            Center Stage, works with Apple Pencil and Magic Keyboard, and comes
            in five colors.
          </p>
          <div
            style={{
              padding: '5px 55px 20px 51px',
              transform: 'translateY(-10px)',
            }}
          >
            <div
              style={{
                fontSize: desktop ? '17px' : '30px',
                fontWeight: '500',
                cursor: 'default',
              }}
            >
              <div
                style={{
                  transform: desktop
                    ? 'translate(17.5px)'
                    : 'translate(185px, 23px) scale(1.5)',
                }}
              >
                <Check />
              </div>
              <div
                style={{
                  color: '#0070c9',
                  transform: desktop
                    ? 'translate(34px, -27.8px)'
                    : 'translate(54px, -15px)',
                }}
              >
                In stock
              </div>
              <div
                style={{
                  position: 'absolute',
                  transform: 'translate(277px, -45.8px)',
                  color: '#0070c9',
                }}
              >
                <Icon name="lock" />
                Secure Checkout with Stripe
              </div>
            </div>
          </div>
          <div
            style={{
              transform: 'translateY(-50px)',
              padding: desktop ? null : '10px 0px 10px 0px',
            }}
          >
            <Divider />
          </div>
          <div style={{ transform: 'translateY(-42px)' }}>
            <span
              style={{
                fontSize: desktop ? '24px' : '42px',
                fontWeight: '600',
                padding: '0px 55px 58px 55px',
              }}
            >
              Total
            </span>
            <div
              style={{
                fontSize: desktop ? '24px' : '42px',
                fontWeight: '600',
                padding: '0px 55px 58px 55px',
                transform: desktop
                  ? 'translate(413.5px, -24.5px)'
                  : 'translate(519.5px, -43px)',
              }}
            >
              {(817.6 * quantity).toLocaleString('en', {
                style: 'currency',
                currency: 'USD',
              })}
            </div>
          </div>
          <div
            style={{
              transform: desktop ? 'translateY(-115px)' : 'translateY(-120px)',
            }}
          >
            <Divider />
          </div>
          <center>
            <button
              onClick={() => {
                checkout({
                  lineItems: [
                    {
                      price: 'price_1LXAToAd33GNgngtUUujdBYY',
                      quantity: 1,
                    },
                  ],
                });
              }}
              className={styles.checkoutButton}
              style={{
                borderRadius: '50px 50px 50px 50px',
                border: '0px solid transparent',
                background: 'black',
                color: 'white',
                fontWeight: '100',
                fontFamily: 'Lato',
                fontSize: '24px',
                padding: '15px 100px 15px 100px',
                transform: desktop
                  ? 'translateY(-85px)'
                  : 'translateY(-85px) scale(1.3)',
              }}
            >
              <span>
                Buy with{' '}
                <Icon
                  name="apple"
                  style={{ transform: 'scale(0.85) translateX(-6px)' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    transform: 'translate(116px, -24.1px)',
                  }}
                >
                  Pay
                </div>
              </span>
            </button>
          </center>
        </div>
      </div>
      <div
        style={{
          background: '#F5F5F7',
          width: '816px',
          height: desktop ? '440px' : '620px',
          transform: 'translate(0px, 524px)',
          borderRadius: '0px 0px 19.5px 19.5px',
          position: 'absolute',
        }}
      />
    </>
  );
}
