import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, Divider, Grid } from 'semantic-ui-react';
import styles from '../styles/ipad.module.css';

export default function ColorButton() {
  const [color, setColor] = useState(false);
  const [gray, setGray] = useState('');
  const [pink, setPink] = useState('');
  const [purple, setPurple] = useState('');
  const [blue, setBlue] = useState('');
  const [starlight, setStarlight] = useState('');

  const router = useRouter();

  // console.log(router.pathname);
  // router.pathname === '/colorSelection/ipadhome'
  // router.pathname === '/colorSelection/grayipad'
  // router.pathname === '/colorSelection/pinkipad'
  // router.pathname === '/colorSelection/purpleipad'
  // router.pathname === '/colorSelection/blueipad'
  // router.pathname === '/colorSelection/starlightipad'

  function changing() {
    if (router.pathname === '/colorSelection/grayipad') {
      {
        `${gray}`;
      }
    } else if (router.pathname === '/colorSelection/pinkipad') {
      pink;
    } else if (router.pathname === '/colorSelection/purpleipad') {
      purple;
    } else if (router.pathname === '/colorSelection/blueipad') {
      blue;
    } else if (router.pathname === '/colorSelection/starlightipad') {
      starlight;
    } else {
      return;
    }
  }

  return (
    <>
      <div>
        {!color ? (
          <>
            <Divider />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  paddingBottom: '5px',
                  transform: 'translateY(8px)',
                }}
              >
                {/* {`${gray}`} {`${pink}`} {`${purple}`} {`${blue}`} {`${starlight}`} */}
                {changing()}
              </div>
              <div
                style={{
                  cursor: 'pointer',
                  color: '#0070c9',
                  transform: 'translate(-16px, 9px)',
                  opacity: '0.8',
                }}
                onClick={() => setColor(true)}
              >
                <a className={styles.bluehovering}>Change</a>
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                fontSize: '17px',
                marginBottom: '15px',
                fontWeight: '500',
              }}
            >
              Finish
            </div>
            <Grid>
              <Grid.Column width={8}>
                <Grid.Row>
                  <Button
                    href="#colors"
                    style={{
                      width: '197px',
                      height: '103px',
                      color: 'black',
                      background: 'transparent',
                      borderRadius: '8px',
                      border: '.5px solid gray',
                      fontWeight: 'normal',
                      marginBottom: '15px',
                    }}
                    onMouseUp={() => {
                      router.push('/colorSelection/grayipad'),
                        setColor(false),
                        setGray('Space Gray');
                    }}
                  >
                    <div
                      className={styles.buttonHover}
                      style={{ transform: 'translate(15px)' }}
                    >
                      <pre
                        style={{
                          height: '30px',
                          width: '30px',
                          borderRadius: '50%',
                          background: 'linear-gradient(to bottom, #343d46, gray)',
                          transform: 'translate(48px, -3px)',
                        }}
                      />
                      <div style={{ transform: 'translate(-14px, -8px)' }}>
                        Space Gray
                      </div>
                    </div>
                  </Button>
                </Grid.Row>
                <Grid.Row>
                  <Button
                    href="#colors"
                    style={{
                      width: '197px',
                      height: '103px',
                      color: 'black',
                      background: 'transparent',
                      borderRadius: '8px',
                      border: '.5px solid gray',
                      fontWeight: 'normal',
                      marginBottom: '15px',
                    }}
                    onClick={() => {
                      router.push('/colorSelection/purpleipad'),
                        setColor(false),
                        setPurple('Purple');
                    }}
                  >
                    <div
                      className={styles.buttonHover}
                      style={{ transform: 'translate(15px)' }}
                    >
                      <pre
                        style={{
                          height: '30px',
                          width: '30px',
                          borderRadius: '50%',
                          background: 'linear-gradient(to bottom, #7867C7, #B8AFE6)',
                          transform: 'translate(48px, -3px)',
                        }}
                      />
                      <div style={{ transform: 'translate(-14px, -8px)' }}>
                        Purple
                      </div>
                    </div>
                  </Button>
                </Grid.Row>
                <Grid.Row>
                  <Button
                    href="#colors"
                    style={{
                      width: '197px',
                      height: '103px',
                      color: 'black',
                      background: 'transparent',
                      borderRadius: '8px',
                      border: '.5px solid gray',
                      fontWeight: 'normal',
                      margin: '0px 0px 0px 0px',
                    }}
                    onClick={() => {
                      router.push('/colorSelection/starlightipad'),
                        setColor(false),
                        setStarlight('Starlight');
                    }}
                  >
                    <div
                      className={styles.buttonHover}
                      style={{ transform: 'translate(15px)' }}
                    >
                      <pre
                        style={{
                          height: '30px',
                          width: '30px',
                          borderRadius: '50%',
                          background: 'linear-gradient(to bottom, #E3C5AC, #F9F3EE)',
                          transform: 'translate(48px, -3px)',
                        }}
                      />
                      <div style={{ transform: 'translate(-13px, -8px)' }}>
                        Starlight
                      </div>
                    </div>
                  </Button>
                </Grid.Row>
              </Grid.Column>
              <Grid.Column width={8}>
                <Grid.Row>
                  <Button
                    href="#colors"
                    style={{
                      width: '197px',
                      height: '103px',
                      color: 'black',
                      background: 'transparent',
                      borderRadius: '8px',
                      border: '.5px solid gray',
                      fontWeight: 'normal',
                      marginBottom: '15px',
                      marginLeft: '-7px',
                    }}
                    onClick={() => {
                      router.push('/colorSelection/pinkipad'),
                        setColor(false),
                        setPink('Pink');
                    }}
                  >
                    <div
                      className={styles.buttonHover}
                      style={{ transform: 'translate(15px)' }}
                    >
                      <pre
                        style={{
                          height: '30px',
                          width: '30px',
                          borderRadius: '50%',
                          background: 'linear-gradient(to bottom, #fAB19B, #FAE0D8)',
                          transform: 'translate(48px, -3px)',
                        }}
                      />
                      <div style={{ transform: 'translate(-13px, -8px)' }}>
                        Pink
                      </div>
                    </div>
                  </Button>
                </Grid.Row>
                <Grid.Row>
                  <Button
                    href="#colors"
                    style={{
                      width: '197px',
                      height: '103px',
                      color: 'black',
                      background: 'transparent',
                      borderRadius: '8px',
                      border: '.5px solid gray',
                      fontWeight: 'normal',
                      marginLeft: '-7px',
                    }}
                    onClick={() => {
                      router.push('/colorSelection/blueipad'),
                        setColor(false),
                        setBlue('Blue');
                    }}
                  >
                    <div
                      className={styles.buttonHover}
                      style={{ transform: 'translate(15px)' }}
                    >
                      <pre
                        style={{
                          height: '30px',
                          width: '30px',
                          borderRadius: '50%',
                          background: 'linear-gradient(to bottom, #74D7F7, #ADD8E6)',
                          transform: 'translate(48px, -3px)',
                        }}
                      />
                      <div style={{ transform: 'translate(-14px, -8px)' }}>
                        Blue
                      </div>
                    </div>
                  </Button>
                </Grid.Row>
              </Grid.Column>
            </Grid>
          </>
        )}
      </div>
    </>
  );
}
