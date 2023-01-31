import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';
import emailjs from 'emailjs-com';
import { Header, Accordion, Segment, Icon, List, Container, Divider, Button } from 'semantic-ui-react';
import { l } from 'keyboard-key';
// import { useRouter } from 'next/router';

export default function Account({ user, orders }) {
  const [desktop, setDesktop] = useState(false);
  // const router = useRouter();
  console.log(orders);
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

  let capitalUser = user.name[0].toUpperCase() + user.name.substring(1);
  // console.log(capitalUser);

  let date = new Date();
  let year = date.getFullYear();
  // console.log(year);

  function mapOrdersToPanels(orders) {
    return orders.map(order => ({
      key: order._id,
      content: {
        content: (
          <>
            <List.Header>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  fontSize: desktop ? '20px' : '12px',
                  lineHeight: desktop ? null : '12px',
                  margin: desktop ? '0px 25px 0px 50px' : '0px 0px 0px 35px'
                }}
              >
                <div>
                  ${order.total}
                </div>
                <div>
                  {order.product}
                </div>
                {desktop ? (
                <>
                  <div>
                    {(order.createdAt).slice(5, 10)}-{year}
                  </div>
                </>
                ): null}
              </div>
            </List.Header>
            <center
              style={{
                width: '90%',
                transform: 'translate(5%)',
              }}
            >
              <Divider />
            </center>
          </>
        )
      }
    }));
  }

  const router = useRouter();

  const {
    query: {
      total,
      product
    }
  } = router;

  const props = {
    total,
    product
  }

  let templateParams = {
    user_email: `${user.email}`,
    to_name: `${user.name}`,
    total: `${total}`,
    product: `${product}`
  };

  function send() {
    emailjs.send('service_jj71xm9', 'template_c2gl4rh', templateParams, 'FlrSx29zmJDjwJhtt')
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
    });
}

  return (
    <>
      <Head>
        <title>Order History</title>
        <meta name="description" content="orders, history" />
      </Head>
      {orders.length > 0 ? (
      <>
        <Button
          onClick={send}
        >
          Email
        </Button>
      </>
      ): null}
      <div
        style={{
          marginTop: desktop ? '75px' : '30px'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: desktop ? '816px' : '84.81vw',
              height: desktop ? '620px' : '410px',
              border: '0.5px solid black',
              position: 'absolute',
              borderRadius: '20px',
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
            marginTop: '20px',
          }}
        >
          <Image
            src="/images/ipad 2.png"
            alt="ipad"
            width={desktop ? 700 : 290}
            height={desktop ? 460 : 190.5}
            priority
          />
        </div>
        <Container
          style={{
            position: 'relative',
            width: '816px',
            borderRadius: '0px 0px 20px 20px',
            fontFamily: 'SF Pro',
            fontSize: desktop ? '40px' : '28px',
            paddingTop: '20px',
            paddingBottom: '20px',
            background: '#F5F5F7'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: desktop ? '20px' : '5px',
              paddingBottom: desktop ? '20px' : '5px',
            }}
          >
            {capitalUser}'s Order History
          </div>
          <center
            style={{
              width: '90%',
              transform: 'translate(5%)',
            }}
          >
            <Divider />
          </center>
          <div>
            {orders.length === 0 ? (
              <>
                <Segment 
                  textAlign="center"
                  style={{
                    background: '#F5F5F7',
                    border: '0px solid transparent'
                  }}
                >
                  <Header 
                    icon 
                    style={{ 
                      fontWeight: '500'
                    }}
                  >
                    <Icon name="copy outline" />
                    No past orders.
                  </Header>
                </Segment>
              </>
            ) : (
              <>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    fontSize: desktop ? '30px' : '20px'
                  }}
                >
                  <div>
                    Price
                  </div>
                  <div>
                    Product
                  </div>
                  {desktop ? (
                  <>
                    <div>
                      Date
                    </div>
                  </>
                  ): null}
                </div>
                <Divider />
                <Accordion
                  fluid
                  exclusive={false}
                  panels={mapOrdersToPanels(orders)}
                />
              </>
            )}
          </div>
        </Container>
      </div>
      <div
        style={{
          position: 'relative',
          height: '75px'
        }}
      />
    </>
  );
}

Account.getInitialProps = async ctx => {
  const { token } = parseCookies(ctx);
  if (!token) {
    return { orders: [] };
  }
  const payload = { headers: { Authorization: token } };
  const url = `${baseUrl}/api/orders`;
  const response = await axios.get(url, payload);
  return response.data;
};
