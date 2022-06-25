import Back from '../../components/ipadBack2';
import Front from '../ipadFront';
import styles from '../../styles/ipad.module.css';
import Sidebar from '../sidebar';
import Heading from '../heading';
import Footing from '../footing';
import { Grid } from 'semantic-ui-react';

import Accordion from '../ipad_accordion';
import Flower from '../ipad_flower';

export default function Gray () {
    
    return (
        <>
            <div>
                <Heading />
                <Grid>
                    <Grid.Column>
                        &nbsp;
                    </Grid.Column>
                    <Grid.Column style={{ width: '450px', transform: 'translateX(241px)' }}>
                        <div style={{ transform: 'translate(9em, 68px)', position: 'fixed' }}>
                            <div style={{ position: 'relative', zIndex: '1', transform: 'scaleX(0.98)' }}>
                                <Front />
                            </div>
                            <div className={styles.frame} style={{ background: 'linear-gradient(to bottom, #a7adba, #343d46)', position: 'relative', zIndex: '0', transform: 'translate(-90px, -520px)' }}>
                                <div style={{ transform: 'translate(-301px, 419.7px)' }}>
                                    <Back />
                                </div>
                            </div>
                        </div>
                        <Footing />




                        {/* <div style={{ border: '1px solid black', width: '370px', height: '370px', borderRadius: '50%', transform: 'translate(-90px, 1900px)' }}>
                            <div style={{ height: '370px', width: '1px', border: '1px solid black', transform: 'translate(185px)' }} />
                            <div style={{ height: '370px', width: '1px', border: '1px solid black', transform: 'translate(185px, -370px) rotate(90deg)' }} />
                        </div>
                        <div style={{ border: '17px solid red', borderRadius: '50%', width: '70px',  height: '70px', transform: 'translate(62.3px, 1680.5px)', position: 'relative', zIndex: '0' }} />
                        <div style={{ transform: 'translate(0px, 800px) scale(0.27)' }}>
                            <div style={{ position: 'relative', zIndex: '1' }}>
                                <div className={styles.hidden} style={{ transform: 'translate(-455px, -1705px) rotate(40deg)', position: 'relative', zIndex: '6' }}>
                                    <Front />
                                </div>
                            </div>
                            <div className={styles.frame} style={{ background: 'linear-gradient(to bottom, #ADD8E6, #74D7F7)', position: 'relative', zIndex: '0', transform: 'translate(-110px, -2080px) rotate(280deg)' }}>
                                <div style={{ transform: 'translate(-301px, 419.7px)', position: 'relative', zIndex: 5 }}>
                                    <Back />
                                </div>
                            </div>
                            <div className={styles.frame} style={{ background: 'linear-gradient(to bottom, #F9F3EE, #E3C5AC)', position: 'relative', zIndex: '0', transform: 'translate(-80px, -2230px) rotate(340deg)' }}>
                                <div style={{ transform: 'translate(-301px, 419.7px)', position: 'relative', zIndex: 4 }}>
                                    <Back /> 
                                </div>
                            </div>
                            <div className={styles.frame} style={{ background: 'linear-gradient(to bottom, #B8AFE6, #7867C7)', position: 'relative', zIndex: '0', transform: 'translate(-390px, -2530px) rotate(40deg)' }}>
                                <div style={{ transform: 'translate(-301px, 419.7px)', position: 'relative', zIndex: 3 }}>
                                    <Back />
                                </div>
                            </div>
                            <div className={styles.frame} style={{ background: 'linear-gradient(to bottom, #a7adba, #343d46)', position: 'relative', zIndex: '0', transform: 'translate(-730px, -3210px) rotate(100deg)' }}>
                                <div style={{ transform: 'translate(-301px, 419.7px)', position: 'relative', zIndex: 2 }}>
                                    <Back />
                                </div>
                            </div>
                            <div className={styles.frame} style={{ background: 'linear-gradient(to bottom, #FAE0D8, #fAB19B)', position: 'relative', zIndex: '0', transform: 'translate(-750px, -4098px) rotate(160deg)' }}>
                                <div className={styles.hidden2} style={{ transform: 'translate(-301px, 419.7px)', position: 'relative', zIndex: 1 }}>
                                    <Back />
                                </div>
                            </div>
                        </div> */}


                        <Grid>
                            <Grid.Column width={8}>
                                {/* <div style={{ background: 'black', width: '200px', height: '230px', transform: 'translate(-250px, 1100px)', color: 'white', fontFamily: 'SF Pro Text', position: 'relative', zIndex: '2' }}>
                                    <center>
                                        <div style={{ color: '#FF6600', fontSize: '12px', fontWeight: '400', lineHeight: '25px' }}>New</div>
                                        <div style={{ fontSize: '40px', fontWeight: '600', lineHeight: '44px' }}>iPad air</div>
                                        <div style={{ fontSize: '21px', fontWeight: '600', lineHeight: '25px', marginTop: '7px' }}>Light. Bright.</div>
                                        <div style={{ fontSize: '21px', fontWeight: '600', lineHeight: '25px' }}>Full of might.</div>
                                        <div style={{ fontSize: '17px', fontWeight: '400', lineHeight: '25px' }}>From $599</div>
                                        <button style={{ borderRadius: '50px', border: 'transparent', padding: '8px 16px 8px 16px', background: '#0066CC', color: 'white', marginBottom: '9px', marginTop: '7px', fontWeight: '400px', fontSize: '17px' }}>Buy</button>
                                        <div style={{ color: '#0066CC', fontSize: '17px', fontWeight: '400', lineHeight: '25px', cursor: 'pointer' }}>Learn more {'>'}</div>
                                    </center>
                                    <div className={styles.wrapper2} style={{ transform: 'translate(57px, -230px) scale(0.35)', position: 'relative', zIndex: '0' }}>
                                        <div className={styles.neon_wrapper2}>
                                            <span className={styles.txt2} style={{ fontFamily: 'Brush Script MT, Brush Script Std, cursive', transform: 'translate(-10px, 0px)' }}>air</span>
                                            <span className={styles.gradient2} />
                                        </div>
                                    </div>
                                </div> */}
                            </Grid.Column>
                            <Grid.Column width={8}>
                               
                            </Grid.Column>
                        </Grid>


                        {/* <div style={{ border: '1px solid black', width: '370px', height: '370px', borderRadius: '50%', transform: 'translate(-90px, 1900px)' }}>
                            <div style={{ height: '370px', width: '1px', border: '1px solid black', transform: 'translate(185px)' }} />
                            <div style={{ height: '370px', width: '1px', border: '1px solid black', transform: 'translate(185px, -370px) rotate(90deg)' }} />
                        </div> */}
                        {/* <div style={{ border: '20px solid red', borderRadius: '50%', width: '70px',  height: '70px', transform: 'translate(62.3px, 1680.5px)', position: 'relative', zIndex: '0' }} /> */}
                        
                        {/* <div style={{ transform: 'translate(70px, -1230px)'}}>
                            <div style={{ border: '20px solid black', background: 'black', width: '1000px',  height: '800px', transform: 'translate(-350px, 1850px)', position: 'relative', zIndex: '-10' }} />
                            <div style={{ transform: 'translate(60px, 800px) scale(0.38)' }}>
                                <div style={{ transform: 'translate(-413px, 535px) rotate(16deg)', position: 'relative', zIndex: '6' }}>
                                    <div className={styles.hidden} style={{ transform: 'translate(-570px, -2000px) rotate(15deg) scaleX(1.05) perspective(900px) rotateY(-45deg)' }}>
                                        <Front />
                                    </div>
                                </div>
                                <div className={styles.frame} style={{ background: 'linear-gradient(to bottom, #ADD8E6, #74D7F7)', position: 'relative', zIndex: '4', transform: 'translate(-56px, -1893px) rotate(270deg) perspective(900px) rotateY(45deg) scaleX(1.0)', boxShadow: '-2px 0px 10px black' }}>
                                    <div style={{ transform: 'translate(-301px, 419.7px)' }}>
                                        <Back />
                                    </div>
                                </div>
                                <div className={styles.frame} style={{ background: 'linear-gradient(to bottom, #F9F3EE, #E3C5AC)', position: 'relative', zIndex: '3', transform: 'translate(-38px, -2030px) rotate(330deg) perspective(900px) rotateY(45deg) scaleX(1.0)', boxShadow: '-2px 0px 10px black' }}>
                                    <div style={{ transform: 'translate(-301px, 419.7px)', position: 'relative', zIndex: 4 }}>
                                        <Back /> 
                                    </div>
                                </div>
                                <div className={styles.frame} style={{ background: 'linear-gradient(to bottom, #B8AFE6, #7867C7)', position: 'relative', zIndex: '2', transform: 'translate(-360px, -2340px) rotate(30deg) perspective(900px) rotateY(45deg) scaleX(1.0)', boxShadow: '-2px 0px 10px black' }}>
                                    <div style={{ transform: 'translate(-301px, 419.7px)' }}>
                                        <Back />
                                    </div>
                                </div>
                                <div className={styles.frame} style={{ background: 'linear-gradient(to bottom, #a7adba, #343d46)', position: 'relative', zIndex: '1', transform: 'translate(-705px, -3035px) rotate(90deg) perspective(900px) rotateY(45deg) scaleX(1.0)', boxShadow: '-2px 0px 10px black' }}>
                                    <div style={{ transform: 'translate(-301px, 419.7px)' }}>
                                        <Back />
                                    </div>
                                </div>
                                <div className={styles.frame} style={{ background: 'linear-gradient(to bottom, #FAE0D8, #fAB19B)', position: 'relative', zIndex: '0', transform: 'translate(-725px, -3940px) rotate(150deg) perspective(900px) rotateY(45deg) scaleX(1.0)', boxShadow: '-2px 0px 10px black' }}>
                                    <div className={styles.hidden2} style={{ transform: 'translate(-301px, 419.7px)' }}>
                                        <Back />
                                    </div>
                                </div>
                            </div>
                        </div> */}


                            {/* <div className={styles.frame} style={{ background: 'linear-gradient(to bottom, #a7adba, #343d46)', position: 'relative', zIndex: '1', transform: 'translate(-200px, -3075px) rotate(-90deg) perspective(500px) rotateY(80deg) scale(0.7)' }}>
                                <div style={{ transform: 'translate(-301px, 419.7px)' }}>
                                    <Back />
                                </div>
                            </div>
                            <div style={{ width: '490px', height: '14px', border: '1px solid gray', transform: 'translate(-245px, -3304px)', position: 'relative', zIndex: '-1', borderRadius: '0px 0px 10px 10px', background: 'linear-gradient(to right, #a7adba, black)' }} /> */}
                        
          
                        
                        {/* <div className={styles.wrapper}>
                            <div className={styles.neon}>
                                <span className={styles.cursive} style={{ transform: 'translate(-400px, 400px)' }}></span>
                                <span className={styles.gradient}></span>
                            </div>
                        </div> */}

{/* <div style={{ transform: 'translate(50px)' }}>
    <div className={styles.wrapper} style={{ transform: 'scale(3.5)', position: 'relative', zIndex: '0' }}>
        <div className={styles.neon_wrapper}>
            <span className={styles.txt} style={{ fontFamily: 'Brush Script MT, Brush Script Std, cursive', transform: 'translate(-10px, 0px)' }}>air</span>
            <span className={styles.gradient} />
        </div>
    </div>
    <div style={{ transform: 'translate(130px, -85px) scaleX(1.4)' }}>
        <div style={{ position: 'relative', zIndex: '2', transform: 'translate(0px, 2200px)'}}>
            <div className={styles.frame} style={{ background: 'linear-gradient(to bottom, #a7adba, #343d46)', position: 'relative', zIndex: '1', transform: 'translate(-200px, -3075px) rotate(-90deg) perspective(500px) rotateY(80deg) scale(0.7)' }}>
                <div style={{ transform: 'translate(-301px, 419.7px)' }}>
                    <Back />
                </div>
            </div>
            <div style={{ width: '490px', height: '17px', border: '1px solid #343d46)', transform: 'translate(-245px, -3304px)', position: 'relative', zIndex: '-1', borderRadius: '0px 0px 10px 10px', background: 'linear-gradient(to right, #a7adba, black)' }} />
        </div>
    </div>
</div> */}
                        {/* <div style={{ transform: 'translate(200px, 800px) scale(0.38)' }}>
                            <div style={{ transform: 'translate(-413px, 535px) rotate(16deg)', position: 'relative', zIndex: '11' }}>
                                <div style={{ transform: 'translate(-570px, -2000px) perspective(1000px) rotate(10deg) rotateY(15deg) rotateX(10deg)' }}>
                                    <Front />
                                </div>
                            </div>
                            <div className={styles.frame} style={{ background: 'linear-gradient(to bottom, #B8AFE6, #7867C7)', position: 'relative', zIndex: '10', transform: 'translate(-565px, -2089px) rotate(5deg) perspective(2000px) rotateX(10deg) rotateY(20deg) scaleY(0.95)' }}>
                                <div style={{ transform: 'translate(-301px, 419.7px)' }}>
                                    <Back />
                                </div>
                            </div>
                                <div style={{ border: '0.1px solid #343d46', position: 'relative', zIndex: '9', width: '400px', height: '525px', background: 'linear-gradient(to bottom, #B8AFE6, #7867C7)', borderRadius: '6% 4% 4% 5%', transform: 'translate(-568px, -2610.5px) rotate(5deg) perspective(2000px) rotateX(10deg) rotateY(20deg) scale(1, 0.95)', boxShadow: '-2px 0px 15px black', opacity: 0.985 }}>
                                    <div style={{ position: 'relative', zIndex: '100', width: '17px', height: '3px', background: 'linear-gradient(to bottom, black, #46505a, #a7adba)', borderRadius: '25%', transform: 'translate(-5px, 54px) rotate(90deg)' }} />
                                    <div style={{ position: 'relative', zIndex: '100', width: '17px', height: '3px', background: 'linear-gradient(to bottom, black, #46505a, #a7adba)', borderRadius: '25%', transform: 'translate(-5px, 74px) rotate(90deg)' }} />
                                    <div style={{ position: 'relative', zIndex: '100', width: '50px', height: '1px', background: '#46505a', borderRadius: '40px', transform: 'translate(-23.7px, 255px) rotate(90deg)', opacity: '0.65' }} />
                                    <div style={{ position: 'relative', zIndex: '100', width: '15px', height: '1.5px', background: 'black', borderRadius: '10px', transform: 'translate(195px, 514.5px)' }} />
                                    <div style={{ transform: 'translate(50px, 499.7px)' }}>............</div>
                                </div>
                            <div style={{ transform: 'translateY(-526px)', position: 'relative', zIndex: '4'  }}>
                                <div className={styles.frame} style={{ background: 'linear-gradient(to bottom, #ADD8E6, #74D7F7)', position: 'relative', zIndex: '8', transform: 'translate(-695px, -2590px) rotate(-15deg) perspective(2000px) rotateX(30deg) rotateY(10deg) scaleX(0.95)' }}>
                                    <div style={{ transform: 'translate(-301px, 419.7px)' }}>
                                        <Back />
                                    </div>
                                </div>
                                <div style={{ border: '0.1px solid #343d46', position: 'relative', zIndex: '7', width: '400px', height: '525px', background: 'linear-gradient(to bottom, #ADD8E6, #74D7F7)', borderRadius: '6% 4% 4% 5%', transform: 'translate(-697px, -3110.8px) rotate(-15deg) perspective(2000px) rotateX(30deg) rotateY(10deg) scale(0.952, 1.0001)', boxShadow: '-2px 0px 15px black', opacity: 0.985 }}>
                                    <div style={{ position: 'relative', zIndex: '100', width: '17px', height: '3px', background: 'linear-gradient(to bottom, black, #46505a, #a7adba)', borderRadius: '25%', transform: 'translate(-5px, 54px) rotate(90deg)' }} />
                                    <div style={{ position: 'relative', zIndex: '100', width: '17px', height: '3px', background: 'linear-gradient(to bottom, black, #46505a, #a7adba)', borderRadius: '25%', transform: 'translate(-5px, 74px) rotate(90deg)' }} />
                                    <div style={{ position: 'relative', zIndex: '100', width: '50px', height: '1px', background: '#46505a', borderRadius: '40px', transform: 'translate(-23.9px, 260px) rotate(90deg)', opacity: '0.65' }} />
                                    <div style={{ position: 'relative', zIndex: '100', width: '15px', height: '1.5px', background: 'black', borderRadius: '10px', transform: 'translate(195px, 514.5px)' }} />
                                    <div style={{ transform: 'translate(50px, 499.7px)' }}>............</div>
                                </div>
                            </div>
                            <div style={{ transform: 'translateY(-1049px)', position: 'relative', zIndex: '3'  }}>
                                <div className={styles.frame} style={{ background: 'linear-gradient(to bottom, #FAE0D8, #fAB19B)', position: 'relative', zIndex: '6', transform: 'translate(-796px, -3028px) rotate(-35deg) perspective(5000px) rotateX(20deg) rotateY(35deg) scale(1, 0.85)' }}>
                                    <div className={styles.hidden2} style={{ transform: 'translate(-301px, 419.7px)' }}>
                                        <Back />
                                    </div>
                                </div>
                                <div style={{ border: '0.1px solid #343d46', position: 'relative', zIndex: '5', width: '400px', height: '525px', background: 'linear-gradient(to bottom, #FAE0D8, #fAB19B)', borderRadius: '6% 4% 4% 5%', transform: 'translate(-797.5px, -3548px) rotate(-35deg) perspective(5000px) rotateX(20deg) rotateY(35deg) scale(1, 0.851)', boxShadow: '-2px 0px 15px black', opacity: 0.985 }}>
                                    <div style={{ position: 'relative', zIndex: '100', width: '17px', height: '3px', background: 'linear-gradient(to bottom, black, #46505a, #a7adba)', borderRadius: '25%', transform: 'translate(-5px, 54px) rotate(90deg)' }} />
                                    <div style={{ position: 'relative', zIndex: '100', width: '17px', height: '3px', background: 'linear-gradient(to bottom, black, #46505a, #a7adba)', borderRadius: '25%', transform: 'translate(-5px, 74px) rotate(90deg)' }} />
                                    <div style={{ position: 'relative', zIndex: '100', width: '50px', height: '1px', background: '#46505a', borderRadius: '40px', transform: 'translate(-23.7px, 260px) rotate(90deg)', opacity: '0.65' }} />
                                    <div style={{ position: 'relative', zIndex: '100', width: '15px', height: '1.5px', background: 'black', borderRadius: '10px', transform: 'translate(205px, 514.25px)' }} />
                                    <div style={{ transform: 'translate(50px, 499.2px)' }}>............</div>
                                </div>
                            </div>
                            <div style={{ transform: 'translateY(-1570px)', position: 'relative', zIndex: '2'  }}>
                                <div className={styles.frame} style={{ background: 'linear-gradient(to bottom, #F9F3EE, #E3C5AC)', position: 'relative', zIndex: '4', transform: 'translate(-890px, -3477px) rotate(308deg) perspective(2000px) rotateX(35deg) rotateY(25deg) scale(0.85, 0.96)' }}>
                                    <div style={{ transform: 'translate(-301px, 419.7px)', position: 'relative', zIndex: 4 }}>
                                        <Back /> 
                                    </div>
                                </div>
                                <div style={{ border: '0.1px solid #343d46', position: 'relative', zIndex: '3', width: '400px', height: '525px', background: 'linear-gradient(to bottom, #F9F3EE, #E3C5AC)', borderRadius: '6% 4% 4% 5%', transform: 'translate(-891px, -3997px) rotate(308deg) perspective(2000px) rotateX(35deg) rotateY(25deg) scale(0.85, 0.96)', boxShadow: '-2px 0px 15px black', opacity: 0.985 }}>
                                    <div style={{ position: 'relative', zIndex: '100', width: '17px', height: '3px', background: 'linear-gradient(to bottom, black, #46505a, #a7adba)', borderRadius: '25%', transform: 'translate(-5px, 54px) rotate(90deg)' }} />
                                    <div style={{ position: 'relative', zIndex: '100', width: '17px', height: '3px', background: 'linear-gradient(to bottom, black, #46505a, #a7adba)', borderRadius: '25%', transform: 'translate(-5px, 74px) rotate(90deg)' }} />
                                    <div style={{ position: 'relative', zIndex: '100', width: '50px', height: '1px', background: '#46505a', borderRadius: '40px', transform: 'translate(-23.9px, 260px) rotate(90deg)', opacity: '0.65' }} />
                                    <div style={{ position: 'relative', zIndex: '100', width: '15px', height: '1.5px', background: 'black', borderRadius: '10px', transform: 'translate(199px, 514.5px)' }} />
                                    <div style={{ transform: 'translate(50px, 499.7px)' }}>............</div>
                                </div>
                            </div>
                            <div style={{ transform: 'translateY(-2100px)', position: 'relative', zIndex: '1' }}>
                                <div className={styles.frame} style={{ background: 'linear-gradient(to bottom, #a7adba, #343d46)', position: 'relative', zIndex: '2', transform: 'translate(-955px, -3910px) rotate(292deg) perspective(1000px) rotateX(30deg) rotateY(35deg) scale(0.85, 0.9)' }}>
                                    <div style={{ transform: 'translate(-301px, 419.7px)' }}>
                                        <Back />
                                    </div>
                                </div>
                                <div style={{ border: '0.1px solid #343d46', position: 'relative', zIndex: '1', width: '400px', height: '525px', background: 'linear-gradient(170deg, #a7adba, #343d46)', borderRadius: '6% 4% 4% 5%', transform: 'translate(-956px, -4430px) rotate(292deg) perspective(1000px) rotateX(30deg) rotateY(35deg) scale(0.85, 0.9)', boxShadow: '-2px 0px 15px black', opacity: 0.985 }}>
                                    <div style={{ position: 'relative', zIndex: '100', width: '17px', height: '3px', background: 'linear-gradient(to bottom, black, #46505a, #a7adba)', borderRadius: '25%', transform: 'translate(-5px, 54px) rotate(90deg)' }} />
                                    <div style={{ position: 'relative', zIndex: '100', width: '17px', height: '3px', background: 'linear-gradient(to bottom, black, #46505a, #a7adba)', borderRadius: '25%', transform: 'translate(-5px, 74px) rotate(90deg)' }} />
                                    <div style={{ position: 'relative', zIndex: '100', width: '50px', height: '1px', background: '#46505a', borderRadius: '40px', transform: 'translate(-23.7px, 275px) rotate(90deg)', opacity: '0.65' }} />
                                    <div style={{ position: 'relative', zIndex: '100', width: '15px', height: '1.5px', background: 'black', borderRadius: '10px', transform: 'translate(195px, 514.25px)' }} />
                                    <div style={{ transform: 'translate(50px, 499.7px)' }}>............</div>
                                </div>
                            </div>
                        </div> */}
                        <Accordion />
                        <Flower />
                    </Grid.Column>
                    <Grid.Column style={{ transform: 'translate(-24px)' }}>
                        <Sidebar />
                    </Grid.Column>
                    <Grid.Column>
                        &nbsp;
                    </Grid.Column>
                </Grid>
            </div>
        </>
    );
}
