import Back from '../../components/ipadBack2';
import Front from '../ipadFront';
import styles from '../../styles/ipad.module.css';
import Sidebar from '../sidebar';
import Footing from '../footing';
import { Grid } from 'semantic-ui-react';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Pink() {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'visible';
    };
  }, []);

  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  return (
    <>
      <div
        style={{
          transform: isPortrait ? 'translate(-140px, -20.3px) scale(0.7)' : null,
          position: isPortrait ? 'fixed' : null
        }}
      >
        <Grid
          style={{
            display: 'flex',
            justifyContent: 'center',
            transform: 'translate(107px)',
            position: 'fixed',
          }}
        >
          <Grid.Column
            style={{ width: '450px', transform: 'translateX(241px)' }}
          >
            <div
              style={{ transform: 'translate(9em, 68px)', position: 'fixed' }}
            >
              <div
                style={{
                  position: 'relative',
                  zIndex: '1',
                  transform: 'scaleX(0.98)',
                }}
              >
                <Front />
              </div>
              <div
                className={styles.frame}
                style={{
                  background: 'linear-gradient(to bottom, #FAE0D8, #fAB19B)',
                  position: 'relative',
                  zIndex: '0',
                  transform: 'translate(-90px, -520px)',
                }}
              >
                <div style={{ transform: 'translate(-301px, 419.7px)' }}>
                  <Back />
                </div>
              </div>
            </div>
            <Footing />
          </Grid.Column>
        </Grid>
      </div>
      <div
        style={{
          transform: isPortrait ? 'translate(-260px, -24px) scale(0.8)' : null
        }}
      >
        <Grid
          style={{
            display: 'flex',
            justifyContent: 'center',
            transform: 'translate(560px)',
            position: isPortrait ? 'fixed' : null
          }}
        >
          <Grid.Column>
            <Sidebar />
          </Grid.Column>
        </Grid>
      </div>
    </>
  );
}
