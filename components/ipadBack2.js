import styles from '../styles/ipad.module.css';
import Logo from '../components/apple_logo';
import { useMediaQuery } from 'react-responsive';

export default function Back() {

  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  const isTablet = useMediaQuery(
    { minWidth: 100, maxWidth: 1290 }
  );

  const isLandscapePhone = useMediaQuery(
    { minHeight: 200, maxHeight: 470 }
  );

  return (
    <>
      <div className={styles.main}>
        {' '}
        <div>
          <div>
            <div
              className={styles.camera}
              style={{ margin: '-504px 0px 0px 15px' }}
            />
            <div
              className={styles.box1}
              style={{
                transform: 'translate(.5px, -.5px)',
                position: 'static'
              }}
            />
            <div className={styles.box2} />
            <div
              style={{
                position: 'absolute',
                border: '.5px solid #000000',
                width: '52px',
                height: '52px',
                borderRadius: '10px',
                zIndex: '3',
                transform: 'translate(16.5px, -50.5px)'
              }}
            />
          </div>
          <div
            className={styles.cameras}
            style={{ transform: 'translate(23px, -146px)' }}
          >
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
          <div
            className={styles.sensor_flash}
            style={{ transform: 'translateY(-67px)' }}
          >
            <div className={styles.sensor} />
            <div className={styles.flash} />
          </div>
        </div>
        <div style={{ transform: 'translateY(215px)' }}>
          <div className={styles.writing}>
            <div style={{ fontSize: '15px' }}>iPad</div>
            <div style={{ fontSize: '2px', margin: '-6px 0px 0px -8px' }}>
              Designed by Apple in California Model A2228
            </div>
            <div style={{ fontSize: '2px', margin: '-17px 0px 0px -6.5px' }}>
              Assembled in China Serial:DMPD4Z1JPTRF
              <div
                style={{
                  transform: 'translate(16px, 10px) rotate(90deg)',
                  position: 'fixed'
                }}
              >
                <div className={styles.dots} />
                <div className={styles.dots} />
                <div className={styles.dots} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ transform: 'translateY(350.1px)' }}>
          <div
            style={{
              transform: (isPortrait || isTablet || isLandscapePhone) ? 'translateY(2.3px)' : null
            }}
          >
            <div className={styles.power_button} /> 
          </div>
          <div>
            <div
              className={styles.volume_button}
              style={{ margin: '17px 0px 6px 0px' }}
            />
            <div className={styles.volume_button} />
          </div>
        </div>
        <div
          className={styles.glare}
          style={{ transform: 'translate(26px, -303.45px)' }}
        />
       <div style={{ transform: 'translateY(411px)' }}>
         {!(isPortrait || isTablet || isLandscapePhone) ? (
         <>
          <div
            className={styles.band1}
            style={{ transform: 'translate(5.35px, -762px)' }}
          />
          <div
            className={styles.band2}
            style={{ transform: 'translate(390.7px, -772px)' }}
          />
         </>
         ): null}
        </div>
        <div
          className={styles.mic}
          style={{ transform: (isPortrait || isTablet || isLandscapePhone) ? 'translate(52px, -315px' : 'translate(52px, -335px' }}
        />
        <div
          className={styles.box}
          style={{ 
            transform: (isPortrait || isTablet || isLandscapePhone) ? 'translate(5px, -369.8px)' : 'translate(5px, -389.8px)'
          }}
        />
        {/* <Icon
              name="apple"
              size="huge"
              color="red"
              style={{ transform: 'translate(169px, -200px) scale(1.2)' }}
          /> */}
        <Logo />
      </div>
      <div
        className={styles.dimension}
        style={{ transform: 'translate(102px, -514.7px)' }}
      />
    </>
  );
}
