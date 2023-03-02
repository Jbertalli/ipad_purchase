import Back from '../../components/ipadBack2';
import Front from '../ipadFront';
import Sidebar from '../sidebar';
import Footing from '../footing';
import { Grid } from 'semantic-ui-react';
import Accordion from '../ipad_accordion';
import Image from 'next/image';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Home() {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'visible';
    };
  }, []);

  const isTablet = useMediaQuery(
    { minWidth: 800, maxWidth: 1189 }
  );

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
            {isTablet ? (
            <>
              <div
                style={{
                  transform: 'translate(-210px, 170px)',
                  position: 'absolute'
                }}
              >
                <Image
                  src="/images/NewAccordion.png"
                  priority
                  alt="ipad"
                  width={700}
                  height={546}
                />
                <div style={{ transform: 'translate(-60px, -560px) scale(0.9)' }}>
                  <Footing />
                </div>
              </div>
            </>
            ):(
            <>
              <Accordion />
            </>
            )}
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
