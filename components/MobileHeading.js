import { Sticky } from 'semantic-ui-react';

export default function MobileHeading() {
  return (
    <>
      <Sticky>
        <div
          style={{
            position: 'relative',
            top: '0px',
            zIndex: '5',
            width: '100',
          }}
        >
          <div
            style={{
              height: '49px',
              background: 'linear-gradient(to bottom, #e8faff, white)',
              paddingTop: '3px',
            }}
          >
            <span
              style={{
                fontSize: '15px',
                fontWeight: '600',
                display: 'flex',
                justifyContent: 'center',
                transform: 'translateY(10px)',
              }}
            >
              iPad Air
            </span>
          </div>
        </div>
      </Sticky>
    </>
  );
}
