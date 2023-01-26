import styles from '../styles/ipad.module.css';
import { Icon } from 'semantic-ui-react';

export default function Front() {
  let date = new Date();

  let hour = date.getHours() % 12 || 12;
  let minute = String(date.getMinutes()).padStart(2, '0');
  let day = date.getDate();

  let weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  let weekdayValue = date.getDay();
  let weekdayName = weekdays[weekdayValue];

  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let monthValue = date.getMonth();
  let monthName = months[monthValue];

  let time = `${hour}:${minute}`;
  let today = `${weekdayName}, ${monthName} ${day}`;

  // console.log(time);
  // console.log(today);
  // console.log(today.length);

  return (
    <>
      <div style={{ transform: 'translate(0px, 0px)' }}>
        {' '}
        {/* rotate3d(2, -1, -1, 0.75turn) */}
        <div className={styles.front}>
          {' '}
          {/* style={{ width: '23.48vw' }} */}
          <div
            className={styles.screen}
            style={{ transform: 'translate(12px, 16.2px)' }}
          >
            <div
              style={{
                transform: 'translate(168px, -34.6px) rotate(90deg)',
                position: 'fixed',
              }}
            >
              <div className={styles.frontSensor} />
              <div className={styles.frontCamera} />
              <div className={styles.frontSensor} />
              <div className={styles.frontSensor} />
            </div>
            <div style={{ transform: 'translate(125px, 35px)' }}>
              <div
                style={{
                  transform: 'translate(10px, -21px) scaleX(.8)',
                  color: 'white',
                }}
              >
                <Icon name="lock open" size="large" />
              </div>
              {/* <time className={styles.time}>
                    10:52
                </time>
                <div className={styles.date} style={{ transform: 'translate(9px)' }}>
                    Saturday, June 4
                </div> */}
              {hour < 10 ? (
                <>
                  <div
                    style={{
                      transform: 'translate(15px, 0px)',
                      fontSize: '50px',
                      fontWeight: '100',
                      marginBottom: '9px',
                      color: 'white',
                    }}
                  >
                    {time}
                  </div>
                  <div
                    style={{
                      transform:(today.length > 19) ? 'translate(-5px, 4px)' : 'translate(8px, 4px)',
                      fontSize: '13px',
                      fontWeight: '300',
                      color: 'white',
                    }}
                  >
                    {today}
                  </div>
                </>
              ) : (
                <>
                  <div
                    style={{
                      transform: 'translate(0px, 0px)',
                      fontSize: '50px',
                      fontWeight: '100',
                      marginBottom: '9px',
                      color: 'white',
                    }}
                  >
                    {time}
                  </div>
                  <div
                    style={{
                      transform:(today.length > 19) ? 'translate(-4px, 4px)' : 'translate(8px, 4px)',
                      fontSize: '13px',
                      fontWeight: '300',
                      color: 'white',
                    }}
                  >
                    {today}
                  </div>
                </>
              )}
            </div>
            <div
              className={styles.home}
              style={{ transform: 'translate(123px, 405px)' }}
            />
            <div style={{ transform: 'translate(245px, -79px) scale(.6)' }}>
              <span style={{ color: 'white' }}>
                <Icon name="wifi" style={{ margin: '3px' }} />
                <span style={{ margin: '3px' }}>78%</span>
                <Icon name="battery high" style={{ margin: '3px' }} />
              </span>
            </div>
            <div>
              <div
                className={styles.frontPower}
                style={{ transform: 'translate(335px, -115px)' }}
              />
              <div style={{ transform: 'translate(386.6px, -91.5px)' }}>
                <div
                  className={styles.frontVolume}
                  style={{ margin: '17px 0px 6px 0px' }}
                />
                <div className={styles.frontVolume} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
