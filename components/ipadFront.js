import styles from '../styles/ipad.module.css';
import { Icon } from 'semantic-ui-react';

export default function Front () {
    return (
        <>
            <div style={{ transform: 'translate(0px, 0px)' }}> {/* rotate3d(2, -1, -1, 0.75turn) */}
                <div className={styles.front}> {/* style={{ width: '23.48vw' }} */}
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
                        <div style={{ transform: 'translate(245px, -85px) scale(.6)' }}>
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
            </div>
        </>
    );
}
