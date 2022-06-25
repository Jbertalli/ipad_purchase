import styles from '../styles/ipad.module.css';
import Head from 'next/head';
// import Logo from '../components/apple_logo';
import { Icon, Button, Divider } from 'semantic-ui-react';
import Back from '../components/ipadBack';
import Front from '../components/ipadFront';

export default function ipad () {
    return (
        <>
            <Head>
                <title>iPad</title>
            </Head>
            {/* <div className={styles.main}> */} {/* style={{ transform: 'rotate(10deg)' }} */}
                {/* <div className={styles.frame} />
                <div>
                    <div>
                        <div className={styles.camera} style={{ margin: '-504px 0px 0px 15px' }} />
                        <div className={styles.box1} />
                        <div className={styles.box2} />
                    </div>
                    <div className={styles.cameras} style={{ transform: 'translate(23px, -146px)' }}>
                        <div>
                            <div className={styles.camera1} />
                            <div className={styles.camera11} />
                            <div className={styles.camera12} />
                            <div className={styles.camera13} />
                        </div>
                        <div style={{ transform: 'translateY(-133px)' }}>
                            <div className={styles.camera2} />
                            <div className={styles.camera21} />
                            <div className={styles.camera22} />
                            <div className={styles.camera23} />
                        </div>
                    </div>
                    <div className={styles.sensor_flash} style={{ transform: 'translateY(-67px)' }}>
                        <div className={styles.sensor} />
                        <div className={styles.flash} />
                    </div>
                </div>
                <div style={{ transform: 'translateY(215px)' }}>
                    <div className={styles.writing}>
                        <div style={{ fontSize: '15px' }}>
                            iPad
                        </div> 
                        <div style={{ fontSize: '2px', margin: '-6px 0px 0px -8px' }}>
                            Designed by Apple in California Model A2228
                        </div> 
                        <div style={{ fontSize: '2px', margin: '-17px 0px 0px -6.5px' }}>
                            Assembled in China Serial:DMPD4Z1JPTRF
                            <div style={{ transform: 'translate(16px, 10px) rotate(90deg)', position: 'fixed' }}>
                                <div className={styles.dots} />
                                <div className={styles.dots} />
                                <div className={styles.dots} />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ transform: 'translateY(350.1px)' }}>
                    <div>
                        <div className={styles.power_button} />
                    </div>
                    <div>
                        <div className={styles.volume_button} style={{ margin: '17px 0px 6px 0px' }} />
                        <div className={styles.volume_button} />
                    </div>
                </div>
                <div className={styles.glare} style={{ transform: 'translate(26px, -303.45px)' }} />
                <div style={{ transform: 'translateY(411px)' }}>
                    <div className={styles.band1} style={{ transform: 'translate(5.35px, -762px)' }} />
                    <div className={styles.band2} style={{ transform: 'translate(390.7px, -772px)' }} />
                </div>
                <div className={styles.mic} style={{ transform: 'translate(52px, -335px' }} />
                <div className={styles.box} style={{ transform: 'translate(5px, -389.8px)' }} /> */}
                {/* <Icon
                    name="apple"
                    size="huge"
                    color="red"
                    style={{ transform: 'translate(169px, -200px) scale(1.2)' }}
                /> */}
                {/* <Logo />
            </div>
            <div className={styles.dimension} style={{ transform: 'translate(102px, -514.7px)' }} /> */}
            {/* <Button 
                content='Red Button'
                color='red'
                onClick={() => (console.log('hello'))} 
            /> */}



            {/* <div style={{ transform: 'translate(100px, -400px)' }}> */} {/* rotate3d(2, -1, -1, 0.75turn) */}
                {/* <div className={styles.front}>
                    <div className={styles.screen} style={{ transform: 'translate(12px, 16.2px)' }}>
                        <div style={{ transform: 'translate(168px, -34.6px) rotate(90deg)', position: 'fixed' }}>
                            <div className={styles.frontSensor} />
                            <div className={styles.frontCamera} />
                            <div className={styles.frontSensor} />
                            <div className={styles.frontSensor} />
                        </div>
                        <div style={{ transform: 'translate(125px, 35px)' }}>
                            <div style={{ transform: 'translate(10px, -21px) scaleX(.8)', color: 'white' }}>
                                <Icon
                                    name="lock open"
                                    size="large"
                                />
                            </div>
                            <time className={styles.time}>
                                10:52
                            </time>
                            <div className={styles.date} style={{ transform: 'translate(9px)' }}>
                                Saturday, June 4
                            </div>
                        </div>
                        <div className={styles.home} style={{ transform: 'translate(123px, 400px)' }} />
                        <div style={{ transform: 'translate(243px, -85px) scale(.6)' }}>
                            <span style={{ color: 'white' }}>
                                <Icon
                                    name="wifi"
                                    style={{ margin: '3px' }}
                                />
                                <span style={{ margin: '3px' }}>78%</span>
                                <Icon
                                    name="battery high"
                                    style={{ margin: '3px' }}
                                />
                            </span>
                        </div>
                        <div>
                            <div className={styles.frontPower} style={{ transform: 'translate(335px, -121.5px)' }} />
                            <div style={{ transform: 'translate(386.6px, -98px)' }}>
                                <div className={styles.frontVolume} style={{ margin: '17px 0px 6px 0px' }} />
                                <div className={styles.frontVolume} />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}



            {/* <div style={{ transform: 'translate(-250px, 0px)', position: 'fixed' }}>
               <Back /> 
            </div>
            <div style={{ transform: 'translate(150px, 600px) rotate(15deg)', position: 'fixed' }}>
                <Front />
            </div> */}

            <div style={{ transform: 'translate(90px, -400px)', position: 'fixed', background: 'black' }}>
                <div style={{ transform: 'translate(0px, -600px) scale(.35)' }}>
                    <div className={styles.hidden} style={{ transform: 'translate(-155px, 182px) rotate(40deg)', position: 'relative', zIndex: 6 }}>
                        <Front />
                    </div>
                    <div style={{ transform: 'translate(0px, -120px) rotate(280deg)', position: 'relative', zIndex: 5 }}>
                        <Back />
                    </div>
                    <div style={{ transform: 'translate(-110px, -370px) rotate(340deg)', position: 'relative', zIndex: 4 }}>
                        <Back />
                    </div>
                    <div style={{ transform: 'translate(-390px, -830px) rotate(40deg)', position: 'relative', zIndex: 3 }}>
                        <Back />
                    </div>
                    <div style={{ transform: 'translate(-570px, -1580px) rotate(100deg)', position: 'relative', zIndex: 2 }}>
                        <Back />
                    </div>
                    <div style={{ transform: 'translate(-475px, -2370px) rotate(160deg)', position: 'relative', zIndex: 1 }}>
                        <Back />
                    </div>
                </div>
            </div>



            {/* <div style={{ transform: 'translate(90px, -300px)', position: 'fixed' }}>
                <div style={{ transform: 'translate(0px, -600px) scale(.35)' }}>
                    <div style={{ transform: 'translate(-150px, 150px) rotate(40deg)', position: 'relative', zIndex: 6 }}>
                        <Front />
                    </div>
                    <div style={{ transform: 'translate(-30px, -180px) rotate(280deg)', position: 'relative', zIndex: 5 }}>
                        <Back />
                    </div>
                    <div style={{ transform: 'translate(-120px, -470px) rotate(340deg)', position: 'relative', zIndex: 4 }}>
                        <Back />
                    </div>
                    <div style={{ transform: 'translate(-365px, -965px) rotate(40deg)', position: 'relative', zIndex: 3 }}>
                        <Back />
                    </div>
                    <div style={{ transform: 'translate(-522px, -1675px) rotate(100deg)', position: 'relative', zIndex: 2 }}>
                        <Back />
                    </div>
                    <div style={{ transform: 'translate(-437px, -2415px) rotate(160deg)', position: 'relative', zIndex: 1 }}>
                        <Back />
                    </div>
                </div>
            </div> */}
            
            

            {/* <Button 
                content="Space Gray"
                onClick={setGray}
            />
            <Button 
                content="Pink"
                onClick={setPink}
            />
            <Button 
                content="Purple"
                onClick={setPurple}
            />
            <Button 
                content="Blue"
                onClick={setBlue}
            />
            <Button 
                content="Starlight"
                onClick={setStarlight}
            /> */}



            <div style={{ transform: 'translate(150px, -430px) scale(.35)', position: 'fixed' }}>
                <div style={{ transform: 'translate(-50px, 80px) rotate(30deg)',  position: 'relative', zIndex: 5 }}>
                    <Front />
                </div>
                <div style={{ transform: 'translate(-430px, -700px) rotate(15deg)',  position: 'relative', zIndex: 4 }}>
                    <Back />
                </div>
                <div style={{ transform: 'translate(-580px,-1200px) rotate(0deg)',  position: 'relative', zIndex: 3 }}>
                    <Back />
                </div>
                <div style={{ transform: 'translate(-700px, -1650px) rotate(-15deg)',  position: 'relative', zIndex: 2 }}>
                    <Back />
                </div >
                <div style={{ transform: 'translate(-803px, -2080px) rotate(-30deg)',  position: 'relative', zIndex: 1 }}>
                    <Back />
                </div>
                <div style={{ transform: 'translate(-870px, -2494px) rotate(-45deg)',  position: 'relative', zIndex: 0 }}>
                    <Back />
                </div>
            </div>
        </>
    );
}
