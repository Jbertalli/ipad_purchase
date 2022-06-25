import { useState } from 'react';
import { Button, Divider, Container, Grid } from 'semantic-ui-react';
import Logo from '../components/apple_logo';
import styles from '../styles/ipad.module.css';
import Back from '../components/ipadBack';
import Head from 'next/head';

// const colors = ["purple", "green", "blue", "yellow", "red"];

function Color () {
    
    const [isGray, setIsGray] = useState(false);
    const [isPink, setIsPink] = useState(false);
    const [isPurple, setIsPurple] = useState(false);
    const [isBlue, setIsBlue] = useState(false);
    const [isStarlight, setIsStarlight] = useState(false);
    // const [backgroundColor, setBackgroundColor] = useState("");
    
    const setGray = () => {
        setIsGray(current => !current);
    }

    const setPink = () => {
        setIsPink(current => !current);
    }

    const setPurple = () => {
        setIsPurple(current => !current);
    }

    const setBlue = () => {
        setIsBlue(current => !current);
    }

    const setStarlight = () => {
        setIsStarlight(current => !current);
    }

    return (
        <>
            {/* <div
                className="Color"
                style={{
                    backgroundColor
                }}
                >
                <style>
                    {`
                    .circle {
                        border-radius: 0%;
                        width: 50px;
                        height: 50px;
                        border: 1px solid black;
                        display: inline-block;
                        cursor: pointer;
                    }

                    #screen {
                        width: 100vw;
                        height: 100vh;
                    }
                `}
                </style>
                {colors.map((c) => {
                    return (
                    <div
                        key={c}
                        style={{
                            backgroundColor: c
                        }}
                            class="circle"
                            onClick={() => setBackgroundColor(c)}
                        >
                        </div>
                    );
                })}
            </div> */}


            <Head>
                <title>iPad Color Selection</title>
                <meta name="description" content="color" />
            </Head>
            <div style={{ height: '45px', background: 'linear-gradient(to bottom, #e8faff, white)' }}>
                <span style={{ fontSize: '20px', fontWeight: '500', display: 'flex', justifyContent: 'flex-start', transform: 'translate(18px, 12px)' }}>
                    iPad Air
                </span>
                <span style={{ fontSize: '15px', display: 'flex', justifyContent: 'flex-end', transform: 'translate(-20px, -9px)' }}>
                    From $599 or $49.91/mo. for 12 mo.*
                </span>
            </div>
            <Divider style={{ margin: '0em', opacity: 0.5 }} />
                <Container style={{ position: 'fixed' }}>
                    <div style={{ transform: 'translateX(7px)' }}>
                        <h3 style={{ color: 'red', fontWeight: 'lighter' }}>New</h3>
                        <h1 style={{ fontSize: '40px', transform: 'translateY(-25px)' }}>Buy iPad Air</h1>
                        <h3 style={{ color: 'black', fontWeight: '500' }}>Finish</h3>
                    </div>
                    {/* <div className={styles.color1} /> */}
                    <Button
                        style={{ color: 'black', background: 'transparent', borderRadius: '8px', border: '.5px solid gray', fontWeight: 'normal', margin: '7px' }}
                        className={styles.buttonStructure}
                        onClick={setGray}
                    >
                        <pre style={{ height: '30px', width: '30px', borderRadius: '50%', background: 'linear-gradient(to bottom, #343d46, gray)', transform: 'translate(48px, -3px)' }} />
                        <div style={{ transform: 'translateY(-8px)' }}>
                           Space Gray
                        </div>
                    </Button>
                    <Button
                        style={{ color: 'black', background: 'transparent', borderRadius: '8px', border: '.5px solid gray', fontWeight: 'normal', margin: '7px' }}
                        className={styles.buttonStructure}
                        onClick={setPink}
                    >
                        <pre style={{ height: '30px', width: '30px', borderRadius: '50%', background: 'linear-gradient(to bottom, #fAB19B, #FAE0D8)', transform: 'translate(48px, -3px)' }} />
                        <div style={{ transform: 'translateY(-8px)' }}>
                            Pink
                        </div>
                    </Button>
                    <Button 
                        content="Purple"
                        style={{ color: 'black', background: 'transparent', borderRadius: '8px', border: '.5px solid gray', fontWeight: 'normal', margin: '7px' }}
                        className={styles.buttonStructure}
                        onClick={setPurple}
                    >
                        <pre style={{ height: '30px', width: '30px', borderRadius: '50%', background: 'linear-gradient(to bottom, #7867C7, #B8AFE6)', transform: 'translate(48px, -3px)' }} />
                        <div style={{ transform: 'translateY(-8px)' }}>
                            Purple
                        </div>
                    </Button>
                    <Button
                        style={{ color: 'black', background: 'transparent', borderRadius: '8px', border: '.5px solid gray', fontWeight: 'normal', margin: '7px' }}
                        className={styles.buttonStructure}
                        onClick={setBlue}
                    >
                        <pre style={{ height: '30px', width: '30px', borderRadius: '50%', background: 'linear-gradient(to bottom, #74D7F7, #ADD8E6)', transform: 'translate(48px, -3px)' }} />
                        <div style={{ transform: 'translateY(-8px)' }}>
                            Blue
                        </div>
                    </Button>
                    <Button 
                        content="Starlight"
                        style={{ color: 'black', background: 'transparent', borderRadius: '8px', border: '.5px solid gray', fontWeight: 'normal', margin: '7px' }}
                        className={styles.buttonStructure}
                        onClick={setStarlight}
                    >
                        <pre style={{ height: '30px', width: '30px', borderRadius: '50%', background: 'linear-gradient(to bottom, #E3C5AC, #F9F3EE)', transform: 'translate(48px, -3px)' }} />
                        <div style={{ transform: 'translateY(-8px)' }}>
                            Starlight
                        </div>
                    </Button>
                </Container>
            <div 
                className={styles.button1} 
                style={{
                    background: isGray ? 'linear-gradient(to bottom, #a7adba, #343d46)' : 'gray'
                  }}
            />
            <div 
                className={styles.button2} 
                style={{
                    background: isPink ? 'linear-gradient(to bottom, #a7adba, #343d46)' : 'linear-gradient(to bottom, #FAE0D8, #fAB19B)'
                  }}
            />
            <div 
                className={styles.button3} 
                style={{
                    background: isPurple ? 'linear-gradient(to bottom, #a7adba, #343d46)' : 'linear-gradient(to bottom, #B8AFE6, #7867C7)'
                  }}
            />
            <div 
                className={styles.button4} 
                style={{
                    background: isBlue ? 'linear-gradient(to bottom, #a7adba, #343d46)' : 'linear-gradient(to bottom, #ADD8E6, #74D7F7)'
                  }}
            />
            <div 
                className={styles.button5} 
                style={{
                    background: isStarlight ? 'linear-gradient(to bottom, #a7adba, #343d46)' : 'linear-gradient(to bottom, #F9F3EE, #E3C5AC)'
                  }}
            />
            

            

            <div className={styles.main}> {/* style={{ transform: 'rotate(10deg)' }} */}
                <div className={styles.frame} 
                    style={{
                        background: 'linear-gradient(to bottom, #a7adba, #343d46)'
                    }}
                /> 
                <div className={styles.frame} 
                    style={{
                        background: isPink ? 'linear-gradient(to bottom, #a7adba, #343d46)' : 'linear-gradient(to bottom, #FAE0D8, #fAB19B)'
                    }}
                />
                <div className={styles.frame} 
                    style={{
                        background: isPurple ? 'linear-gradient(to bottom, #a7adba, #343d46)' : 'linear-gradient(to bottom, #B8AFE6, #7867C7)'
                    }}
                />
                <div className={styles.frame} 
                    style={{
                        background: isBlue ? 'linear-gradient(to bottom, #a7adba, #343d46)' : 'linear-gradient(to bottom, #ADD8E6, #74D7F7)'
                    }}
                />
                <div className={styles.frame}
                    style={{
                        background: isStarlight ? 'linear-gradient(to bottom, #a7adba, #343d46)' : 'linear-gradient(to bottom, #F9F3EE, #E3C5AC)'
                    }}
                />






                
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
                <div className={styles.box} style={{ transform: 'translate(5px, -389.8px)' }} />
                {/* <Icon
                    name="apple"
                    size="huge"
                    color="red"
                    style={{ transform: 'translate(169px, -200px) scale(1.2)' }}
                /> */}
                <Logo />
            </div>
            <div className={styles.dimension} style={{ transform: 'translate(102px, -514.7px)' }} />
        </>
    );
}

export default Color;
