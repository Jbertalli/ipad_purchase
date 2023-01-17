import Back from '../../components/ipadBack2';
import Front from '../ipadFront';
import Sidebar from '../sidebar';
import Footing from '../footing';
import { Grid } from 'semantic-ui-react';
import Accordion from '../ipad_accordion';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'visible';
    };
  }, []);

  return (
    <>
      <div>
        <Grid
          style={{
            display: 'flex',
            justifyContent: 'center',
            transform: 'translate(107px)',
            position: 'fixed',
          }}
        >
          <Grid.Column
            style={{ width: '450px', transform: 'translateX(541px)' }}
          >
            <Accordion />
            <div style={{ transform: 'translate(-304px, -5790px)' }}>
              <Footing />
            </div>
          </Grid.Column>
        </Grid>
      </div>
      <div>
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
