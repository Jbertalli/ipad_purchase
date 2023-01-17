import styles from '../styles/ipad.module.css';
import Logo from '../components/apple_logo';
import { Button } from 'semantic-ui-react';

export default function Back() {
  return (
    <>
      {/*<Button 
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
      <div className={styles.main}>
        {' '}
        {/* style={{ transform: 'rotate(10deg)' }} */}
        <div className={styles.frame} />
        <div>
          <div>
            <div
              className={styles.camera}
              style={{ margin: '-504px 0px 0px 15px' }}
            />
            <div
              className={styles.box1}
              style={{ transform: 'translate(-.5px, -.5px)' }}
            />
            <div className={styles.box2} />
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
                  position: 'fixed',
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
          <div>
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
          <div
            className={styles.band1}
            style={{ transform: 'translate(5.35px, -762px)' }}
          />
          <div
            className={styles.band2}
            style={{ transform: 'translate(390.7px, -772px)' }}
          />
        </div>
        <div
          className={styles.mic}
          style={{ transform: 'translate(52px, -335px' }}
        />
        <div
          className={styles.box}
          style={{ transform: 'translate(5px, -389.8px)' }}
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
      {/* <Button 
          content='Red Button'
          color='red'
          onClick={() => (console.log('hello'))} 
      /> */}
    </>
  );
}
