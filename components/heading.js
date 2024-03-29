import { Divider, Sticky } from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';

export default function Heading() {

  const isTablet = useMediaQuery(
    { minWidth: 100, maxWidth: 1290 }
  );

  const isLandscapePhone = useMediaQuery(
    { minHeight: 200, maxHeight: 470 }
  );

  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  
  return (
    <>
      <Sticky
        style={{
          width: isLandscapePhone ? '169%' : null
        }}
      >
        <div 
          style={{ 
            position: 'relative', 
            top: '0px',
            zIndex: '5'
          }}
        >
          <div
            style={{
              height: '50px',
              background: 'linear-gradient(to bottom, #e8faff, white)',
              paddingTop: '3px',
            }}
          >
            <span
              style={{
                fontSize: '21px',
                fontWeight: '600',
                display: 'flex',
                justifyContent: 'center',
                transform: isPortrait ? 'translate(-300px, 12px)' : 'translate(-455px, 12px)'
              }}
            >
              iPad Air
            </span>
            <div>
              <span
                style={{
                  fontSize: '17px',
                  fontWeight: '600',
                  display: 'flex',
                  justifyContent: isTablet ? 'flex-end' : 'center',
                  transform: isTablet ? 'translate(-100.5px, -7px)' : 'translate(344px, -7px)'
                }}
              >
                From $599 or $49.91/mo. for 12 mo.*
              </span>
            </div>
            <Divider style={{ transform: 'translateY(-6.5px)' }} />
          </div>
        </div>
      </Sticky>
    </>
  );
}
