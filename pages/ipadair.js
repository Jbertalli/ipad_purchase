import Back from '../components/ipadBack2';
import styles from '../styles/ipad.module.css';

export default function Air () {
    return (
        <>
            <div style={{ transform: 'translate(500px, 500px)' }}>
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
            </div>
        </>
    );
}