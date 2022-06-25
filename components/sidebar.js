import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Divider, Icon, Segment, Modal, Grid, Button, Item } from 'semantic-ui-react';


export default function Sidebar () {
    const [storageModal, setStorageModal] = useState(false);
    const [connectivityModal, setConnectivityModal] = useState(false);
    const [engravingModal, setEngravingModal] = useState(false);
    // const [gray, setGray] = useState(false);
    // const [pink, setPink] = useState(false);
    // const [purple, setPurple] = useState(false);
    // const [blue, setBlue] = useState(false);
    // const [starlight, setStarlight ] = useState(false);
    const [color, setColor] = useState('gray');

    const router = useRouter();

    console.log(color);

    return (
        <>
            <Item style={{ width: '408px', borderStyle: 'hidden', marginTop: '4em', transform: 'translate(400px)' }}>
                <div>
                    <div style={{ color: 'red', opacity: '0.7' }}>
                        New
                    </div>
                    <h1 style={{ margin: '0em 0em 1.25em 0em', fontSize: '40px' }}>
                        Buy iPad Air
                    </h1>
                    <div>
                        <div style={{ fontSize: '17px', marginBottom: '15px', fontWeight: '500' }}>
                            Finish
                        </div>
                        <div>
                            <Item>
                                <Grid>
                                    <Grid.Column width={8}>
                                        <Grid.Row>
                                            <Button
                                                style={{ width: '197px', height: '103px', color: 'black', background: 'transparent', borderRadius: '8px', border: '.5px solid gray', fontWeight: 'normal', marginBottom: '15px' }}
                                                // onClick = {() => setColor('gray')}
                                                onClick={() => router.push('/colorSelection/grayipad')}
                                            >
                                            <div style={{ transform: 'translate(15px)' }}>
                                                <pre style={{ height: '30px', width: '30px', borderRadius: '50%', background: 'linear-gradient(to bottom, #343d46, gray)', transform: 'translate(48px, -3px)' }} />
                                                <div style={{ transform: 'translate(-14px, -8px)' }}>
                                                    Space Gray
                                                </div>
                                            </div>
                                            </Button>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Button
                                                style={{ width: '197px', height: '103px', color: 'black', background: 'transparent', borderRadius: '8px', border: '.5px solid gray', fontWeight: 'normal', marginBottom: '15px' }}
                                                // onClick = {() => setColor('purple')}
                                                onClick={() => router.push('/colorSelection/purpleipad')}
                                            >
                                                <div style={{ transform: 'translate(15px)' }}>
                                                    <pre style={{ height: '30px', width: '30px', borderRadius: '50%', background: 'linear-gradient(to bottom, #7867C7, #B8AFE6)', transform: 'translate(48px, -3px)' }} />
                                                    <div style={{ transform: 'translate(-14px, -8px)' }}>
                                                        Purple
                                                    </div>
                                                </div>
                                            </Button>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Button
                                                style={{ width: '197px', height: '103px', color: 'black', background: 'transparent', borderRadius: '8px', border: '.5px solid gray', fontWeight: 'normal', margin: '0px 0px 0px 0px' }}
                                                // onClick = {() => setColor('starlight')}
                                                onClick={() => router.push('/colorSelection/starlightipad')}
                                            >
                                                <div style={{ transform: 'translate(15px)' }}>
                                                    <pre style={{ height: '30px', width: '30px', borderRadius: '50%', background: 'linear-gradient(to bottom, #E3C5AC, #F9F3EE)', transform: 'translate(48px, -3px)' }} />
                                                    <div style={{ transform: 'translate(-13px, -8px)' }}>
                                                        Starlight
                                                    </div>
                                                </div>
                                            </Button>
                                        </Grid.Row>
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <Grid.Row>
                                            <Button
                                                style={{ width: '197px', height: '103px', color: 'black', background: 'transparent', borderRadius: '8px', border: '.5px solid gray', fontWeight: 'normal', marginBottom: '15px', marginLeft: '-7px' }}
                                                // onClick = {() => setColor('pink')}
                                                onClick={() => router.push('/colorSelection/pinkipad')}
                                            >   
                                                <div style={{ transform: 'translate(15px)' }}>
                                                    <pre style={{ height: '30px', width: '30px', borderRadius: '50%', background: 'linear-gradient(to bottom, #fAB19B, #FAE0D8)', transform: 'translate(48px, -3px)' }} />
                                                    <div style={{ transform: 'translate(-13px, -8px)' }}>
                                                        Pink
                                                    </div>
                                                </div>
                                            </Button>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Button
                                                style={{ width: '197px', height: '103px', color: 'black', background: 'transparent', borderRadius: '8px', border: '.5px solid gray', fontWeight: 'normal', marginLeft: '-7px' }}
                                                // onClick = {() => setColor('blue')}
                                                onClick={() => router.push('/colorSelection/blueipad')}
                                            >
                                                <div style={{ transform: 'translate(15px)' }}>
                                                    <pre style={{ height: '30px', width: '30px', borderRadius: '50%', background: 'linear-gradient(to bottom, #74D7F7, #ADD8E6)', transform: 'translate(48px, -3px)' }} />
                                                    <div style={{ transform: 'translate(-14px, -8px)' }}>
                                                        Blue
                                                    </div>
                                                </div>
                                            </Button>
                                        </Grid.Row>
                                    </Grid.Column>
                                </Grid>
                            </Item>
                        </div>
                    </div>
                    <Divider style={{ marginTop: '27px' }} />
                    <div style={{ fontSize: '17px', fontWeight: '500', margin: '1.5em 0em 1.5em 0em'}}>
                        Storage
                    </div>
                    <div style={{ background: '#F5F5F7', borderRadius: '10px', padding: '15px 0px 15px 20px', margin: '10px 0px 17px 0px', fontSize: '12px', lineHeight: '16px' }}>
                        <Grid>
                            <Grid.Column width={14}>
                                <b>Plan ahead. Leave room for later.</b> The more storage your iPad Air has, the more room you have to store digital content, now and in the future.
                            </Grid.Column>
                            <Grid.Column width={2}>
                            <Icon
                                name="info circle"
                                color="blue"
                                size="large"
                                style={{ cursor: 'pointer', transform: 'translate(-15px, 17px)' }}
                                onClick={() => setStorageModal(true)}
                            />
                            </Grid.Column>
                        </Grid>
                    </div>
                    <Modal open={storageModal} dimmer="blurring" size="small" style={{ transform: 'translateY(-285px)', borderRadius: '20px', width: '816px', height: '570px', position: 'fixed' }}>
                            <div
                                style={{ background: 'lightgray', height: '36px', width: '36px', borderRadius: '50%', transform: 'translate(15px, 18px)', opacity: '0.8', cursor: 'pointer' }}
                                onClick={() => setStorageModal(false)}
                            >
                                <h1 style={{ fontSize: '30px', fontWeight: 'lighter', color: 'gray', transform: 'translate(10px, -5px)' }}>x</h1>
                            </div>
                        <div style={{ padding: '3em 6em 0em 6em' }}>
                            <h1 style={{ display: 'flex', justifyContent: 'center', fontSize: '40px' }}>
                                Make room for everything. 
                            </h1>
                            <div style={{ fontSize: '17px', lineHeight: '25px' }}>
                                How much storage you need depends on how you use your iPad. More room means you can store more apps, music, movies, and books. It also lets you create and store images, videos, illustrations, and more.
                            </div>
                            <div style={{ margin: '1em 0em 0em 0em', fontSize: '17px', lineHeight: '25px' }}>
                                Over time you may add more content to your iPad, so you’ll want to think about how your storage needs may change.
                            </div>
                            <h5 style={{ color: 'gray', fontWeight: 'lighter', fontSize: '12px' }}>
                                Storage is measured in gigabytes (GB) and terabytes (TB).
                            </h5>
                            <h5 style={{ color: 'gray', fontWeight: 'lighter', fontSize: '12px', lineHeight: '16px', transform: 'translateY(-10px)' }}>
                                Note: Available space is less and varies due to many factors. A standard configuration uses approximately 12GB to 17GB of space, including iPadOS 15 with its latest features and Apple apps that can be deleted. Apple apps that can be deleted use about 4.5GB of space, and you can download them back from the App Store. Storage capacity subject to change based on software version, settings, and iPad model.
                            </h5>
                            <div style={{ background: '#F5F5F7', width: '816px', height: '118.1px', transform: 'translate(-84px, 20px)', borderRadius: '0px 0px 19.5px 19.5px', lineHeight: '16px', paddingTop: '25px', fontSize: '12px' }}>
                                <Icon
                                    name="chat"
                                    size="large"
                                    style={{ color: 'gray', transform: 'translateX(408px) scale(1.3)' }}
                                />
                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                    <b>Have questions about buying an iPad?</b>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <a style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}>Chat with an iPad Specialist</a>
                                </div>  
                            </div>
                        </div>
                    </Modal>
                    <span style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5em' }}>
                        <button style={{ borderRadius: '10px', border: '.5px solid gray', width: '197px', height: '106px', background: 'transparent', margin: '0em .5em 0em 0em', padding: '15px', lineHeight: '16px' }}>
                            <h2 style={{ margin: '0em', fontSize: '29px' }}>64GB</h2>
                            <div style={{ margin: '0em', transform: 'translate(39px, -31px)', fontSize: '12px' }}>1</div>
                            <div style={{ transform: 'translateY(-14px)', fontSize: '12px' }}>
                                <div style={{ margin: '0em' }}>From $599</div>
                                <div style={{ margin: '0em' }}>or $49.91/mo. for 12 mo.*</div>
                            </div>
                        </button>
                        <button style={{ borderRadius: '10px', border: '.5px solid gray', width: '197px', height: '106px', background: 'transparent', margin: '0em 0em 0em .5em', padding: '15px', lineHeight: '16px' }}>
                            <h2 style={{ margin: '0em', fontSize: '29px' }}>156GB</h2>
                            <div style={{ margin: '0em', transform: 'translate(49px, -31px)', fontSize: '12px' }}>1</div>
                            <div style={{ transform: 'translateY(-14px)', fontSize: '12px' }}>
                                <div style={{ margin: '0em' }}>From $749</div>
                                <div style={{ margin: '0em' }}>or $62.41/mo. for 12 mo.*</div> 
                            </div>
                        </button>
                    </span>
                    <Divider style={{ marginTop: '27px' }} />
                    <div style={{ fontSize: '17px', fontWeight: '500', margin: '1.5em 0em 1.5em 0em' }}>
                        Connectivity
                    </div>
                    <div>
                        <Grid style={{ background: '#F5F5F7', borderRadius: '10px', paddingLeft: '10px', margin: '10px 0px 17px 0px', fontSize: '12px', lineHeight: '16px' }}>
                            <Grid.Column width={14}>
                                <b>Two fast ways to stay connected.</b> Every iPad Air can connect to a Wi-Fi network. A Wi-Fi + Cellular model allows you to stay connected when Wi-Fi isn’t available.
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Icon
                                    name="info circle"
                                    color="blue"
                                    size="large"
                                    style={{ cursor: 'pointer', transform: 'translate(-10px, 17px)' }}
                                    onClick={() => setConnectivityModal(true)}
                                />
                            </Grid.Column>
                        </Grid>
                    </div>
                    <span style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5em' }}>
                        <button style={{ borderRadius: '10px', border: '.5px solid gray', width: '197px', height: '106px', background: 'transparent', margin: '0em .5em 0em 0em', padding: '15px', lineHeight: '16px' }}>
                            <h2 style={{ margin: '0em', fontSize: '17px' }}>Wi-Fi</h2>
                            <div style={{ transform: 'translateY(5px)', fontSize: '12px' }}>
                                <div style={{ margin: '0em' }}>From $599</div>
                                <div style={{ margin: '0em' }}>or $49.91/mo. for 12 mo.*</div>
                            </div>
                        </button>
                        <button style={{ borderRadius: '10px', border: '.5px solid gray', width: '197px', height: '106px', background: 'transparent', margin: '0em 0em 0em .5em', padding: '15px', lineHeight: '16px' }}>
                            <h2 style={{ margin: '0em', fontSize: '17px' }}>Wi-Fi + Cellular</h2>
                            <div style={{ transform: 'translateY(5px)', fontSize: '12px' }}>
                                <div style={{ margin: '0em' }}>From $749</div>
                                <div style={{ margin: '0em' }}>or $62.41/mo. for 12 mo.*</div>
                            </div>
                        </button>
                    </span>
                    <Modal open={connectivityModal} dimmer="blurring" size="small" style={{ transform: 'translateY(-500px)', borderRadius: '20px', width: '816px', height: '1017px', position: 'fixed' }}>
                            <div
                                style={{ background: 'lightgray', height: '36px', width: '36px', borderRadius: '50%', transform: 'translate(15px, 18px)', opacity: '0.8', cursor: 'pointer' }}
                                onClick={() => setConnectivityModal(false)}
                            >
                                <h1 style={{ fontSize: '30px', fontWeight: 'lighter', color: 'gray', transform: 'translate(10px, -5px)' }}>x</h1>
                            </div>
                        <div style={{ padding: '36px 76px 60px 76px' }}>
                            <div style={{ fontSize: '40px', fontWeight: '600' }}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    A faster wireless connection 
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                                    with Wi-Fi 6.
                                </div> 
                            </div>
                            <div style={{ margin: '0em 0em 3em 0em', fontSize: '17px', lineHeight: '25px' }}>
                                iPad Air supports Wi-Fi 6 technology for a fast connection to Wi-Fi networks in your home, a coffee shop, the school library, or an airport.
                            </div>
                            <div style={{ fontSize: '40px', fontWeight: '600' }}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    Stay connected anywhere 
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    with cellular data.
                                </div>
                            </div>
                            <ul style={{ fontSize: '17px', lineHeight: '25px' }}>
                                <li style={{ margin: '0em 0em 1em 0em' }}>
                                    If you’re someplace where there’s no Wi-Fi, an iPad Air with Wi-Fi + Cellular lets you stay connected to fast cellular data networks.
                                </li>
                                <li style={{ margin: '0em 0em 1em 0em' }}>
                                    eSIM lets you easily set up a cellular connection right from your iPad, with no long-term commitment.* Or you can simply insert a carrier-activated SIM card.
                                </li>
                                <li style={{ margin: '0em 0em 1em 0em' }}>
                                    Browse the web, send email and messages, access your files, and more. All on the go.
                                </li>
                                <li style={{ margin: '0em 0em 1em 0em' }}>
                                    Stay in touch with friends and family. Or collaborate with coworkers.
                                </li>
                                <li style={{ margin: '0em 0em 1em 0em' }}>
                                    Get blazing-fast 5G and LTE coverage from select carriers.
                                </li>
                                <li style={{ margin: '0em 0em 1em 0em' }}>
                                    Add cellular data when you travel, and stay connected in over 180 countries and regions.
                                </li>
                                <li style={{ margin: '0em 0em 1em 0em' }}>
                                    Choose from a variety of carrier partners or add to your existing plan.
                                </li>
                            </ul>
                            <h5 style={{ color: 'gray', fontWeight: 'lighter' }}>
                                Not all carriers support Apple SIM and eSIM. See your carrier for more details. Not available in China mainland. The eSIM technology works with iPad Pro 11‑inch (1st generation or later), iPad Pro 12.9‑inch (3rd generation or later), iPad Air (3rd generation or later), iPad (7th generation or later), and iPad mini (5th generation or later). Apple SIM works with iPad Pro 12.9-inch (1st and 2nd generation), iPad Pro 9.7-inch, iPad Pro 10.5‑inch, iPad (5th and 6th generation), iPad Air 2, iPad mini 3, and iPad mini 4.
                            </h5>
                        </div>
                        <div style={{ background: '#F5F5F7', width: '816px', height: '118.1px', transform: 'translate(0px, 13px)', borderRadius: '0px 0px 19.5px 19.5px', lineHeight: '16px', paddingTop: '25px', fontSize: '12px' }}>
                            <Icon
                                name="chat"
                                size="large"
                                style={{ color: 'gray', transform: 'translateX(400px) scale(1.3)' }}
                            />
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                <b>Have questions about buying an iPad?</b>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <a style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}>Chat with an iPad Specialist</a>
                            </div>  
                        </div>
                    </Modal>
                    <Divider style={{ marginTop: '27px' }} />
                    <div style={{ fontSize: '17px', fontWeight: '500', margin: '1.5em 0em 1.5em 0em' }}>
                        Personalize your device.
                    </div>
                    <Grid style={{ background: '#F5F5F7', borderRadius: '10px', paddingLeft: '10px', margin: '10px 0px 17px 0px', fontSize: '12px', lineHeight: '16px' }}>
                        <Grid.Column width={14}>
                            <b>Personalize your iPad Air for free. </b>Engrave a mix of emoji, names, initials, and numbers to make iPad Air unmistakably yours. Only at Apple.
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Icon
                                name="info circle"
                                color="blue"
                                size="large"
                                style={{ cursor: 'pointer', transform: 'translate(-10px, 17px)' }}
                                onClick={() => setEngravingModal(true)}
                            />
                        </Grid.Column>
                    </Grid>
                    <Modal open={engravingModal} dimmer="blurring" size="small" style={{ transform: 'translateY(-450px)', borderRadius: '20px', width: '816px', height: '887px', position: 'fixed' }}>
                        <div
                            style={{ background: 'lightgray', height: '36px', width: '36px', borderRadius: '50%', transform: 'translate(15px, 18px)', opacity: '0.8', cursor: 'pointer' }}
                            onClick={() => setEngravingModal(false)}
                        >
                            <h1 style={{ fontSize: '30px', fontWeight: 'lighter', color: 'gray', transform: 'translate(10px, -5px)' }}>x</h1>
                        </div>
                        <div style={{ padding: '36px 76px 60px 76px' }}>
                            <h1 style={{ display: 'flex', justifyContent: 'center', fontSize: '40px' }}>
                                Add a message that lasts. 
                            </h1>
                            <div style={{ fontSize: '17px', lineHeight: '25px' }}>
                                <div>
                                    Choose from all-new engraving options. It’s the perfect way to personalize your iPad. 
                                </div>
                                <div>
                                    Add a special message, name, or birthday. Even combine them with your  
                                </div>
                                <div>
                                    favorite emoji.*
                                </div>
                            </div>
                            <div style={{ transform: 'scale(0.5)' }}>
                                {/* <Back /> */}
                            </div>
                            <div style={{ fontSize: '12px', color: 'gray', transform: 'translateY(550px)' }}>
                                <div>
                                    * You can return your iPad even if you engrave it. And when you’re ready to upgrade, it won’t change your trade-in 
                                </div>
                                <div>
                                    value.
                                </div>
                            </div>
                        </div>
                        <div style={{ background: '#F5F5F7', width: '816px', height: '118.1px', transform: 'translate(0px, 542px)', borderRadius: '0px 0px 19.5px 19.5px', lineHeight: '16px', paddingTop: '25px', fontSize: '12px' }}>
                            <Icon
                                name="chat"
                                size="large"
                                style={{ color: 'gray', transform: 'translateX(400px) scale(1.3)' }}
                            />
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                <b>Have questions about buying an iPad?</b>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <a style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}>Chat with an iPad Specialist</a>
                            </div>  
                        </div>
                    </Modal>
                    <div style={{ marginTop: '1.5em', display: 'flex', justifyContent: 'center' }}>
                        <button style={{ borderRadius: '15px', border: '.5px solid gray', width: '60em', height: '83px', background: 'transparent' }}>
                            <h3 style={{ display: 'flex', justifyContent: 'flex-start', margin: '0em 0em 0em 1em', transform: 'translateY(10px)' }}>Add Engraving</h3>
                            <h5 style={{ display: 'flex', justifyContent: 'flex-end', margin: '0em 1em 0em 0em', transform: 'translateY(-10px)' }}>Free</h5>
                        </button>
                    </div>
                    <div style={{ margin: '1em 0em 0em 0em', display: 'flex', justifyContent: 'center' }}>
                        <button style={{ borderRadius: '15px', border: '.5px solid gray', width: '60em', height: '83px', background: 'transparent' }}>
                            <h3 style={{ display: 'flex', justifyContent: 'flex-start', margin: '0em 0em 0em 1em' }}>No Engraving</h3>
                        </button>
                    </div>
                    <Divider style={{ margin: '27px 0px 27px 0px' }} />
                    <div style={{ background: '#F5F5F7', borderRadius: '5px', padding: '30px' }}>
                        <h1 style={{ fontWeight: '900', margin: '5px 0px 10px 0px' }}>
                            $599.00
                        </h1>
                        <div>
                            or
                        </div>
                        <h1 style={{ fontWeight: '900', marginTop: '10px' }}>
                            $49.91/mo. for 12 mo.*
                        </h1>
                        <div style={{ marginTop: '-10px' }}>
                            <a style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}>Learn how to pay monthly at 0% APR when you choose Apple Card Monthly Installments</a>
                        </div>
                        <Divider style={{ marginTop: '27px' }} />
                        <h3>
                            <b>Protect your new iPad Air.</b>
                        </h3>
                        <div>
                            <Icon
                                name="apple"
                                color="red"
                            />
                            <Grid>
                                <Grid.Column width={14}>
                                    <b>AppleCare+</b>
                                </Grid.Column>
                                <Grid.Column width={2}>
                                <a style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}>Add</a>
                                </Grid.Column>
                            </Grid>
                        </div>
                        <div>
                            <b>$79.00 or $3.99/mo.</b>
                        </div>
                        <div style={{ lineHeight: '20px' }}>
                            <div>
                                Protect your iPad, Apple Pencil, and
                            </div>
                            <div>
                                Apple-branded keyboard from
                            </div>
                            <div>
                                accidental drops and spills with
                            </div>
                            <div>
                                AppleCare+.
                            </div>
                        </div>
                        <div>
                            <a style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}>Learn more</a>
                        </div>
                        <h3 style={{ margin: '1.5em 0em 0.5em 0em' }}>
                            Apple Trade-in
                        </h3>
                        <div>
                            
                            <Grid>
                                <Grid.Column width={11}>
                                    <div style={{ transform: 'translateX(3px)' }}>
                                        <Icon 
                                            name="random"
                                        />
                                        <b>Apple Trade In</b>
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={5} style={{ transform: 'translateX(23.5px)' }}>
                                    <a style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}>Get started</a>
                                </Grid.Column>
                            </Grid>
                        </div>
                        <div>
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Get up to $655 in credit when you </div>
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; trade in your iPad.</div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button style={{ margin: '3em 0em 2.5em 0em', color: 'white', background: '#0066CC', border: '0px', borderRadius: '10px', width: '80vw', height: '35px' }}>
                                Continue
                            </button>
                        </div>
                        <Grid>
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
