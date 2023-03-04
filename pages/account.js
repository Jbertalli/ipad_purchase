import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { useMediaQuery } from 'react-responsive';
import { Header, Accordion, Segment, Icon, Container, Divider, Button, Table } from 'semantic-ui-react';

export default function Account({ user, orders, ctx }) {
  const [desktop, setDesktop] = useState(false);
  const [emailColor, setEmailColor] = useState('1px');
  const [deleteOrderColor, setDeleteOrderColor] = useState('1px');
  const [deleteAccountColor, setDeleteAccountColor] = useState('1px');
  console.log(orders);

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

  let date = new Date();
  let year = date.getFullYear();

  function mapOrdersToPanels(orders) {
    return orders.map(order => ({
      key: order._id,
      content: {
        content: (
          <>
            {desktop ? (
            <>
              <div
                style={{
                  fontSize: '20px'
                }}
              >
                <Table
                  fixed
                  style={{
                    background: 'transparent',
                    border: '0px solid transparent',
                    paddingLeft: '85px'
                  }}
                >
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell width={3}>
                        ${order.total}
                      </Table.Cell>
                      <Table.Cell width={8}>
                        {order.product}
                      </Table.Cell>
                      <Table.Cell width={4}>
                        {(order.createdAt).slice(5, 10)}-{year}
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
              <center
                style={{
                  width: '90%',
                  transform: 'translate(5%)',
                }}
              >
                <Divider />
              </center>
            </>
            ):(
            <>
              <div
                style={{
                  fontSize: '20px',
                  lineHeight: '24px',
                }}
              >
                <Table 
                  fixed
                  style={{
                    background: 'transparent',
                    border: '0px solid transparent',
                    paddingLeft: '15px',
                  }}
                >
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell
                        style={{
                          marginTop: '-5px'
                        }}
                      >
                        ${order.total}
                      </Table.Cell>
                      <Table.Cell>
                        {order.product}
                      </Table.Cell>
                      <Table.Cell
                        style={{
                          marginBottom: '-5px'
                        }}
                      >
                        {(order.createdAt).slice(5, 10)}-{year}
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
            </>
            )}
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

  async function deleteUser(){
    const { token } = parseCookies(ctx);
    const url = `${baseUrl}/api/account`;
    const payload = { headers: { Authorization: token } };
    const response = await axios.delete(url, payload);
    console.log(response.data);
    router.push('/login');
  }

  async function deleteLastOrder() {
    const { token } = parseCookies(ctx);
    const url = `${baseUrl}/api/orders`;
    const payload = { headers: { Authorization: token } };
    const response = await axios.delete(url, payload);
    console.log(response.data);
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
        <title>Order History</title>
        <meta name="description" content="orders, history" />
      </Head>
      <div
        style={{
          marginTop: desktop ? '75px' : '30px',
          transform: isLandscapePhone ? 'translate(260px)' : null
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              width: desktop ? '816px' : '84.81vw',
              height: desktop ? '620px' : '410px',
              border: isLandscapePhone ? null : '0.5px solid black',
              position: 'absolute',
              zIndex: '1',
              borderRadius: '20px'
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: desktop ? '30px' : null,
            marginTop: desktop ? '30px' : null,
            zIndex: '-1'
          }}
        >
          {!isLandscapePhone ? (
          <>
            <Image
              src="/images/ipad 2.png"
              priority
              alt="ipad"
              width={700}
              height={460}
              style={{
                transform: !desktop ? 'scale(0.8)' : null
              }}
            />
          </>
          ): null}
        </div>
        <Container
          style={{
            position: 'relative',
            width: '816px',
            borderRadius: isLandscapePhone ? '20px' : '0px 0px 20px 20px',
            transform: isLandscapePhone ? 'translateY(-30px)' : null,
            fontFamily: 'SF Pro',
            fontSize: desktop ? '40px' : '28px',
            paddingTop: '20px',
            paddingBottom: '20px',
            background: '#F5F5F7',
            zIndex: '10'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: desktop ? '20px' : '5px',
              paddingBottom: desktop ? '20px' : '5px'
            }}
          >
            {capitalUser}{`'s Order History`}
          </div>
          <div
            style={{
              width: '90%',
              transform: 'translate(5%)'
            }}
          >
            <Divider />
          </div>
          <div
            style={{
              display: desktop ? 'flex' : null,
              justifyContent: desktop ? 'space-around' : null,
              margin: '0px 10px 0px 10px'
            }}
          >
            <div
              style={{
                display: desktop ? null : 'flex',
                justifyContent: desktop ?  null : 'center',
                marginBottom: desktop ? null : '15px'
              }}
            >
              <Button
                onClick={send}
                onMouseOver={() => setEmailColor('2.5px')}
                onMouseLeave={() => setEmailColor('1px')}
                style={{
                  border: `${emailColor} solid black`,
                  background: 'transparent',
                  fontWeight: '100',
                  color: 'black',
                  fontSize: desktop ? null : '12px'
                }}
                disabled={orders.length > 0 ? false : true}
              >
                Email {capitalUser}{`'s Order`}
              </Button>
            </div>
            <div
              style={{
                display: desktop ? null : 'flex',
                justifyContent: desktop ?  null : 'center',
                marginBottom: desktop ? null : '15px'
              }}
            >
              <Button
                onClick={deleteLastOrder}
                onMouseOver={() => setDeleteOrderColor('2.5px')}
                onMouseLeave={() => setDeleteOrderColor('1px')}
                style={{
                  border: `${deleteOrderColor} solid black`,
                  background: 'transparent',
                  fontWeight: '100',
                  color: 'black',
                  fontSize: desktop ? null : '12px'
                }}
              >
                Delete {capitalUser}{`'s Last Order`}
              </Button>
            </div>
            <div
              style={{
                display: desktop ? null : 'flex',
                justifyContent: desktop ?  null : 'center'
              }}
            >
              <Button
                onClick={deleteUser}
                onMouseOver={() => setDeleteAccountColor('2.5px')}
                onMouseLeave={() => setDeleteAccountColor('1px')}
                style={{
                  border: `${deleteAccountColor} solid black`,
                  background: 'transparent',
                  fontWeight: '100',
                  color: 'black',
                  fontSize: desktop ? null : '12px'
                }}
              >
                Delete {capitalUser}{`'s Account`}
              </Button>
            </div>
          </div>
          <center
            style={{
              width: '90%',
              transform: 'translate(5%)',
              marginBottom: desktop ? null : '-20px'
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
                  {desktop ? (
                  <>
                    <div>
                      Price
                    </div>
                    <div>
                      Product
                    </div>
                    <div>
                      Date
                    </div>
                  </>
                  ): null}
                </div>
                {desktop ? (
                <>
                  <Divider />
                </>
                ): null}
                
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
