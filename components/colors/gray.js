import Back from '../../components/ipadBack2';
import Front from '../ipadFront';
import styles from '../../styles/ipad.module.css';
import Sidebar from '../sidebar';
import Footing from '../footing';
import { Grid } from 'semantic-ui-react';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Gray() {
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
          transform: isPortrait ? 'translate(90px, -210px) scale(0.8)' : null
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
                  background: 'linear-gradient(to bottom, #a7adba, #343d46)',
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
          transform: isPortrait ? 'translate(65px, -205px) scale(0.8)' : null
        }}
      >
        <Grid
          style={{
            display: 'flex',
            justifyContent: 'center',
            transform: 'translate(560px)',
          }}
        >
          <Grid.Column style={{ transform: 'translate(-24px)' }}>
            <Sidebar />
          </Grid.Column>
        </Grid>
      </div>
    </>
  );
}
