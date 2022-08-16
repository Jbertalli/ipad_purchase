import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Divider, Container, Button, Icon, Modal, Form, Message, Card, Icons } from 'semantic-ui-react';
import styles from '../styles/ipad.module.css';
import FocusLock from 'react-focus-lock';
import catchErrors from '../utils/catchErrors';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import { handleLogin } from '../utils/auth';
import Link from 'next/link';
import { handleLogout } from '../utils/auth';
import { checkout } from '../checkout';

const INITIAL_USER = {
    name: "", 
    email: "", 
    password: ""
}

export default function Signup() {
    const [user, setUser] = useState(INITIAL_USER);
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState('');
    const [signUpModal, setSignUpModal] = useState(false);

    useEffect(() => {
        const isUser = Object.values(user).every(el => Boolean(el))
        isUser ? setDisabled(false) : setDisabled(true);
    }, [user]);

    function handleChange(event) {
        const {name, value} = event.target
        setUser(prevState => ({ ...prevState, [name]: value }))
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const url = `${baseUrl}/api/signup`;
            const payload = { ...user };
            const response = await axios.post(url, payload);
            handleLogin(response.data);
            console.log(user)
        } catch(error) {
            catchErrors(error, setError);
        }
    }

    return (
        <>
            <Head>
                <title>Sign Up - Secure Checkout</title>
                <meta name="description" content="apple, ipad" />
            </Head>
            { user ? (
            <>
                <Card style={{ padding: '15px', borderRadius: '10px', fontFamily: 'SF Pro' }}>
                    <Image src="/images/ipad 2.png" alt="ipad" width={300} height={195} />
                    <b style={{ margin: '10px 0px 10px 0px' }}>iPad 64GB + WiFi</b>
                    <p style={{ lineHeight: '15px' }}>
                        The new iPad Air has an all-screen design, 10.9″ display, M1 chip, Center Stage, works with Apple Pencil and Magic Keyboard, and comes in five colors.
                    </p>
                    <b>
                        $654.66
                    </b>
                    <b style={{ fontWeight: '500', marginBottom: '10px' }}>
                        <Icon name="check" /> In stock
                    </b>
                    <Button
                        onClick={(() => {
                            checkout({
                                lineItems: [
                                    {
                                        price: "price_1LXANZAd33GNgngt1Ni0igfE",
                                        quantity: 1
                                    }
                                ]
                            })
                        })}
                        style={{ 
                            borderRadius: '50px 50px 50px 50px',
                            background: 'black', 
                            color: 'white', 
                            fontWeight: '100', 
                            fontSize: '17px',
                            padding: '10px',
                        }}
                    >
                        <span>
                            Buy with <Icon name="apple" />Pay
                        </span>
                    </Button>
                </Card>
                <Button onClick={(() => {
                    checkout({
                        lineItems: [
                            {
                                price: "price_1LXAOeAd33GNgngtTqx8R1sJ",
                                quantity: 1
                            }
                        ]
                    })
                })}>
                    iPad 64GB + WiFi + AppleCare+
                </Button>
                <Button onClick={(() => {
                    checkout({
                        lineItems: [
                            {
                                price: "price_1LXARqAd33GNgngtfvoFSTY9",
                                quantity: 1
                            }
                        ]
                    })
                })}>
                    iPad 128GB + WiFi
                </Button>
                <Button onClick={(() => {
                    checkout({
                        lineItems: [
                            {
                                price: "price_1LXATCAd33GNgngteXEfjDRa",
                                quantity: 1
                            }
                        ]
                    })
                })}>
                    iPad 128GB + WiFi + AppleCare+
                </Button>
                <Button onClick={(() => {
                    checkout({
                        lineItems: [
                            {
                                price: "price_1LXAToAd33GNgngtUUujdBYY",
                                quantity: 1
                            }
                        ]
                    })
                })}>
                    iPad 64GB + Cellular
                </Button>
                <Button onClick={(() => {
                    checkout({
                        lineItems: [
                            {
                                price: "price_1LXAUOAd33GNgngtnPPdI2UZ",
                                quantity: 1
                            }
                        ]
                    })
                })}>
                    iPad 64GB + Cellular + AppleCare+
                </Button>
                <Button onClick={(() => {
                    checkout({
                        lineItems: [
                            {
                                price: "price_1LXAUzAd33GNgngtaIpf2dLP",
                                quantity: 1
                            }
                        ]
                    })
                })}>
                    iPad 128GB + Cellular
                </Button>
                <Button onClick={(() => {
                    checkout({
                        lineItems: [
                            {
                                price: "price_1LXAVsAd33GNgngtpdIbvYtF",
                                quantity: 1
                            }
                        ]
                    })
                })}>
                    iPad 128GB + Cellular + AppleCare+
                </Button>
                <Button color="red" onClick={handleLogout}>
                    Logout
                </Button>
            </>
            ):(
            <>
                <Container style={{ position: 'relative', zIndex: '100', transform: 'translate(114px)' }}>
                    <div style={{ transform: 'translate(-42px, 29px)', fontSize: '40px', fontWeight: '600', lineHeight: '44px', paddingTop: '34px', width: '900px' }}>
                        Sign up for faster checkout.
                    </div>
                    <div>
                        <div style={{ transform: 'translate(123px, 112px)', fontSize: '24px', fontWeight: '500', lineHeight: '28px', marginTop: '5px', textAlign: 'center', position: 'fixed' }}>
                            Check out with your Apple ID
                        </div>
                        <div>
                            <input onClick={() => setSignUpModal(true)} type="search" placeholder="Apple ID" style={{ transform: 'translate(114px, 159px)', width: '328px', fontSize: '17px', height: '44px', lineHeight: '22px', textAlign: 'left', border: '.5px solid #49494950', borderRadius: '6px', paddingLeft: '15px' }} />
                            <Icon
                                name="arrow alternate circle right outline"
                                size="big"
                                style={{ color: '#49494960', transform: 'translate(71px, 158px)'}}
                            />
                        </div>
                    </div>
                    <div style={{ transform: 'translate(598px, 74px)', height: '239.5px', width: '1px', position: 'absolute', background: '#00000030' }} />
                    <div style={{ transform: 'translate(490px, 73.2px)' }}>
                        <div style={{ transform: 'translate(152px)', fontSize: '24px', fontWeight: '600', lineHeight: '28px', paddingBottom: '12px', textAlign: 'center', width: '284px' }}>
                            Guest Checkout
                        </div>
                        <div style={{ transform: 'translate(152px, 1px)', fontSize: '17px', fontWeight: '400', lineHeight: '21px', marginBottom: '33px', textAlign: 'center', width: '284px' }}>
                            Proceed and create an Apple ID later.
                        </div>
                        <button onClick={() => setSignUpModal(true)} style={{ transform: 'translate(150px, 1px)', fontSize: '17px', fontWeight: '300', color: 'white', background: '#0066CC', border: '0px', borderRadius: '10px', width: '284px', height: '56px' }}>
                            Continue as Guest
                        </button>
                    </div>
                    <Modal open={signUpModal} dimmer="blurring" size="small" style={{ transform: 'translateY(-285px)', borderRadius: '20px', width: '816px', height: '570px', position: 'fixed' }}>
                        <div
                            style={{ background: 'lightgray', height: '36px', width: '36px', borderRadius: '50%', transform: 'translate(15px, 18px)', opacity: '0.8', cursor: 'pointer' }}
                            onClick={() => setSignUpModal(false)}
                        >
                            <h1 style={{ fontSize: '30px', fontWeight: 'lighter', color: 'gray', transform: 'translate(10px, -5px)' }}>x</h1>
                        </div>
                        <center style={{ fontSize: '40px', fontWeight: '600', lineHeight: '44px' }}>
                            Sign Up
                        </center>
                        <div>
                            <FocusLock>
                                <Form error={Boolean(error)} onSubmit={handleSubmit}>
                                    <Message
                                        error
                                        header="Error"
                                        content={error}
                                    />
                                    <center>
                                        <div style={{ transform: 'translate(-220.1px)', fontSize: '17px', fontWeight: '500' }}>Name</div>
                                        <Form.Input
                                            placeholder="Name"
                                            style={{ width: '60%' }}
                                            name="name"
                                            value={user.name}
                                            onChange={handleChange}
                                        /> 
                                    </center>
                                    <center>
                                        <div style={{ transform: 'translate(-222px)', fontSize: '17px', fontWeight: '500' }}>Email</div>
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
                                        <div style={{ transform: 'translate(-205.2px)', fontSize: '17px', fontWeight: '500' }}>Password</div>
                                        <Form.Input
                                            placeholder="Password"
                                            type="password"
                                            style={{ width: '60%' }}
                                            name="password"
                                            value={user.password}
                                            onChange={handleChange}
                                        /> 
                                    </center>
                                    <Button disabled={disabled} type="submit" style={{ transform: 'translate(163px, 0px)', fontSize: '17px', fontWeight: '400', color: 'white', background: '#0066CC', border: '0px', borderRadius: '10px', width: '284px', height: '56px' }}>
                                        Sign Up
                                    </Button>
                                </Form>
                            </FocusLock>
                        </div>
                        <div style={{ background: '#F5F5F7', width: '816px', height: '118px', transform: 'translateY(151.5px)', borderRadius: '0px 0px 19.5px 19.5px', paddingTop: '25px', fontSize: '12px' }}>
                            <center style={{ transform: 'translateY(25px)', fontSize: '17px', fontWeight: '400', lineHeight: '21px', marginBottom: '33px' }}>
                                Already have an account?&nbsp;<span style={{ color: '#0070c9', cursor: 'pointer' }}><a className={styles.bluehovering}><Link href="/login">Sign in</Link></a></span>
                            </center>
                        </div>
                    </Modal>
                </Container>
            </>
            )}
            <div style={{ transform: 'translateY(385px)' }}>
                <Divider />
                <div style={{ transform: 'translate(-288px, 8px)', fontSize: '17px', fontWeight: '400', display: 'flex', justifyContent: 'center' }}>
                    Need some help?&nbsp;
                    <span style={{ cursor: 'pointer', color: '#0070c9' }}>
                        <a className={styles.bluehovering}>Chat now</a>
                    </span>&nbsp;or call 1‑800‑MY‑APPLE.
                </div>
            </div>
            <div style={{ transform: 'translateY(417px)', position: 'absolute', height: '132px', width: '100%', background: '#f5f5f7', zIndex: '-1' }} />
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <div style={{ transform: 'translate(1010px, 432px)' }}>
                    <div style={{ fontSize: '12px', fontWeight: '400', color: '#6e6e73', width: '3000px' }}>
                        The Apple Online Store uses industry-standard encryption to protect the confidentiality of the information you submit. Learn more about our Security Policy.
                    </div>
                    <Divider style={{ transform: 'translateY(-0.6px)', width: '978px' }} />
                    <div style={{ transform: 'translate(-751px, -0.6px)', fontSize: '12px', fontWeight: '400', color: '#6e6e73', display: 'flex', justifyContent: 'center' }}>
                        More ways to shop:&nbsp;<a className={styles.bluehovering} style={{ color: '#0070c9', cursor: 'pointer' }}>Find an Apple Store</a>&nbsp;or&nbsp;<a className={styles.bluehovering} style={{ color: '#0070c9', cursor: 'pointer' }}>other retailer</a>&nbsp;near you. Or call 1-800-MY-APPLE.
                        <div style={{ cursor: 'pointer', width: '980px', transform: 'translate(-518px, 21px)', fontSize: '12px', fontWeight: '400', color: '#6e6e73', display: 'flex', justifyContent: 'center' }}>
                            <div>
                                Copyright © 2022 Apple Inc. All rights reserved.
                            </div>
                            <div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Privacy Policy&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            </div>
                            <div>
                                Terms of Use&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            </div>
                            <div>
                                Sales and Refunds&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            </div>
                            <div>
                                Legal&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            </div>
                            <div>
                                Site Map&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <div>
                                United States
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
