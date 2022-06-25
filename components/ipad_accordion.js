import Front from '../components/ipadFront';
import Back from '../components/ipadBack2';
import styles from '../styles/ipad.module.css';

export default function Accordion () {
    return (
        <>
            <div style={{ transform: 'translate(200px, 800px) scale(0.38)' }}>
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
            </div>
        </>
    );
}