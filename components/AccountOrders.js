import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Header, Accordion, Segment, Icon, List, Container, Divider } from 'semantic-ui-react';

export default function AccountOrders({ orders, user }) {
  const [desktop, setDesktop] = useState(false);
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

  console.log(orders);
  let capitalUser = user[0].toUpperCase() + user.substring(1);
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
                  justifyContent: desktop ? 'space-between' : 'center',
                  fontSize: desktop ? '20px' : '25px',
                  lineHeight: desktop ? null : '30px',
                  margin: '0px 80px 0px 100px'
                }}
              >
                <div>
                  ${order.total}
                </div>
                <div>
                  {order.product}
                </div>
                <div>
                  {(order.createdAt).slice(5, 10)}-{year}
                </div>
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

  return (
  <>
    <div
      style={{
        marginBottom: '200px'
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
            width: '816px',
            height: '620px',
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
          width={700}
          height={460}
          priority
        />
      </div>
      <Container
        style={{
          position: 'relative',
          width: '816px',
          borderRadius: '0px 0px 20px 20px',
          fontFamily: 'SF Pro',
          fontSize: '40px',
          paddingTop: '20px',
          paddingBottom: '20px',
          background: '#F5F5F7',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '20px',
            paddingBottom: '20px',
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
              <Segment inverted tertiary color="grey" textAlign="center">
                <Header icon>
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
                  fontSize: '30px'
                }}
              >
                <div>
                  Price
                </div>
                <div>
                  Product
                </div>
                <div>
                  Date
                </div>
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
  </>
  )
}
