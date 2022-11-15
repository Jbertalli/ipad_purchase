import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Divider, Container, Button, Icon, Modal, Form, Message } from 'semantic-ui-react';
import styles from '../styles/ipad.module.css';
import FocusLock from 'react-focus-lock';
import catchErrors from '../utils/catchErrors';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import { handleLogin } from '../utils/auth';
import { handleLogout } from '../utils/auth';
import Link from 'next/link';

const INITIAL_USER = {
    email: "",
    password: ""
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
            const url = `${baseUrl}/api/login`;
            const payload = { ...user };
            const response = await axios.post(url, payload);
            handleLogin(response.data);
            console.log(user);
        } catch(error) {
            catchErrors(error, setError);
        }
    }
    
    return (
        <>
            <Head>
                <title>Sign In - Secure Checkout</title>
                <meta name="description" content="apple, ipad" />
            </Head>
            {desktop ? (
            <>
                <Container style={{ position: 'relative', zIndex: '100' }}>
                    <div style={{ transform: 'translate(10px, 130px)', fontSize: '34px', fontWeight: '600', lineHeight: '44px', paddingTop: '34px', display: 'flex', justifyContent: 'center' }}>
                        Sign in to Apple Store
                    </div>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <input onClick={() => setSignInModal(true)} type="search" placeholder="Apple ID" style={{ transform: 'translate(30px, 159px)', width: '328px', fontSize: '17px', height: '44px', lineHeight: '22px', textAlign: 'left', border: '.5px solid #49494950', borderRadius: '6px', paddingLeft: '15px' }} />
                            <Icon
                                name="arrow alternate circle right outline"
                                size="big"
                                style={{ color: '#49494960', transform: 'translate(-14px, 168px)' }}
                            />
                        </div>
                    </div>
                    <Modal open={signInModal} dimmer="blurring" size="small" style={{ transform: 'translateY(-285px)', borderRadius: '20px', width: '816px', height: '470px', position: 'fixed' }}>
                        <div style={{ background: 'lightgray', height: '36px', width: '36px', borderRadius: '50%', transform: 'translate(15px, 18px)', opacity: '0.8', cursor: 'pointer' }}
                            onClick={() => setSignInModal(false)}
                        >
                            <h1 style={{ fontSize: '30px', fontWeight: 'lighter', color: 'gray', transform: 'translate(10px, -5px)' }}>x</h1>
                        </div>
                        <center style={{ fontSize: '40px', fontWeight: '600', lineHeight: '44px' }}>
                            Sign In
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
                                        <div style={{ transform: 'translate(-222px)', fontSize: '17px', fontWeight: '500', paddingBottom: '5px' }}>Email</div>
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
                                        <div style={{ transform: 'translate(-205.2px)', fontSize: '17px', fontWeight: '500', padding: '30px 0px 5px 0px' }}>Password</div>
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
                                        <Button disabled={disabled} type="submit" style={{ transform: 'translate(163px, 0px)', fontSize: '17px', fontWeight: '400', color: 'white', background: '#0066CC', border: '0px', borderRadius: '10px', width: '284px', height: '56px' }}>
                                            Sign In
                                        </Button>
                                    </div>
                                </Form>
                            </FocusLock>
                        </div>
                        <div style={{ background: '#F5F5F7', width: '816px', height: '118px', transform: 'translateY(46px)', borderRadius: '0px 0px 19.5px 19.5px', paddingTop: '25px', fontSize: '12px' }}>
                            <center style={{ transform: 'translateY(25px)', fontSize: '17px', fontWeight: '400', lineHeight: '21px', marginBottom: '33px' }}>
                                {`Don't have an account?`}&nbsp;<span style={{ color: '#0070c9', cursor: 'pointer' }}><a className={styles.bluehovering}><Link href="/signup">Sign up</Link></a></span>
                            </center>
                        </div>
                    </Modal>
                </Container>
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
            ):(
            <>
                <Container style={{ position: 'relative', zIndex: '100' }}>
                    <div style={{ transform: 'translateY(130px)', fontSize: '30px', fontWeight: '600', lineHeight: '44px', paddingTop: '34px', display: 'flex', justifyContent: 'center' }}>
                        Sign in to Apple Store
                    </div>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <input onClick={() => setSignInModal(true)} type="search" placeholder="Apple ID" style={{ transform: 'translate(20px, 159px)', width: '328px', fontSize: '17px', height: '44px', lineHeight: '22px', textAlign: 'left', border: '.5px solid #49494950', borderRadius: '6px', paddingLeft: '15px' }} />
                            <Icon
                                name="arrow alternate circle right outline"
                                size="big"
                                style={{ color: '#49494960', transform: 'translate(-14px, 168px)' }}
                            />
                        </div>
                    </div>
                    <Modal open={signInModal} dimmer="blurring" size="small" style={{ transform: 'translateY(-285px)', borderRadius: '20px', width: '95%', height: '470px', position: 'fixed' }}>
                        <div style={{ background: 'lightgray', height: '36px', width: '36px', borderRadius: '50%', transform: 'translate(15px, 18px)', opacity: '0.8', cursor: 'pointer' }}
                            onClick={() => setSignInModal(false)}
                        >
                            <h1 style={{ fontSize: '30px', fontWeight: 'lighter', color: 'gray', transform: 'translate(10px, -5px)' }}>x</h1>
                        </div>
                        <center style={{ fontSize: '40px', fontWeight: '600', lineHeight: '44px', transform: 'translateY(-10px)' }}>
                            Sign In
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
                                        <div style={{ transform: 'translate(-22vw)', fontSize: '17px', fontWeight: '500', paddingBottom: '5px' }}>Email</div>
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
                                        <div style={{ transform: 'translate(-18vw)', fontSize: '17px', fontWeight: '500', padding: '30px 0px 5px 0px' }}>Password</div>
                                        <Form.Input
                                            placeholder="Password"
                                            type="password"
                                            style={{ width: '60%' }}
                                            name="password"
                                            value={user.password}
                                            onChange={handleChange}
                                        /> 
                                    </center>
                                    <div style={{ paddingTop: '30px', display: 'flex', justifyContent: 'center' }}>
                                        <Button disabled={disabled} type="submit" style={{  fontSize: '17px', fontWeight: '400', color: 'white', background: '#0066CC', border: '0px', borderRadius: '10px', width: '284px', height: '56px' }}>
                                            Sign In
                                        </Button>
                                    </div>
                                </Form>
                            </FocusLock>
                        </div>
                        <div style={{ background: '#F5F5F7', width: '100%', height: '118px', transform: 'translateY(46px)', borderRadius: '0px 0px 19.5px 19.5px', paddingTop: '25px', fontSize: '12px' }}>
                            <center style={{ transform: 'translateY(25px)', fontSize: '17px', fontWeight: '400', lineHeight: '21px', marginBottom: '33px' }}>
                                {`Don't have an account?`}&nbsp;<span style={{ color: '#0070c9', cursor: 'pointer' }}><a className={styles.bluehovering}><Link href="/signup">Sign up</Link></a></span>
                            </center>
                        </div>
                    </Modal>
                </Container>
                <center style={{ transform: 'translateY(54vh)', position: 'fixed' }}>
                    <div style={{ marginBottom: '7vh' }}>
                        <Divider /> 
                    </div>
                    <div style={{ fontSize: '17px', fontWeight: '400' }}>
                        Need some help?&nbsp;
                        <span style={{ cursor: 'pointer', color: '#0070c9' }}>
                            <a className={styles.bluehovering}>Chat now</a>
                        </span>&nbsp;or call 1‑800‑MY‑APPLE.
                    </div> 
                </center>
            </>
            )}
        </>
    );
}
