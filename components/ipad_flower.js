import Front from '../components/ipadFront';
import Back from '../components/ipadBack2';
import styles from '../styles/ipad.module.css';
import { useRouter } from 'next/router';

export default function Flower() {
  const router = useRouter();

  return (
    <>
      <div
        onClick={() => router.push('/ipadair')}
        style={{ transform: 'translate(400px, -2620px)', position: 'absolute' }}
      >
        <div style={{ transform: 'translate(500px, 2000px) scale(0.55)' }}>
          <div
            style={{
              transform: 'translate(-403px, 535px) rotate(16deg)',
              position: 'relative',
              zIndex: '6',
            }}
          >
            <div
              className={styles.hidden}
              style={{
                transform: 'translate(-570px, -1999px) rotate(15deg) scaleX(1.05) perspective(900px) rotateY(-45deg)',
              }}
            >
              <Front />
            </div>
          </div>
          <div
            className={styles.frame}
            style={{
              background: 'linear-gradient(to bottom, #ADD8E6, #74D7F7)',
              position: 'relative',
              zIndex: '4',
              transform: 'translate(-56px, -1893px) rotate(270deg) perspective(900px) rotateY(45deg) scaleX(1.0)',
              boxShadow: '-2px 0px 10px black',
            }}
          >
            <div style={{ transform: 'translate(-301px, 419.7px)' }}>
              <Back />
            </div>
          </div>
          <div
            className={styles.frame}
            style={{
              background: 'linear-gradient(to bottom, #F9F3EE, #E3C5AC)',
              position: 'relative',
              zIndex: '3',
              transform: 'translate(-38px, -2030px) rotate(330deg) perspective(900px) rotateY(45deg) scaleX(1.0)',
              boxShadow: '-2px 0px 10px black',
            }}
          >
            <div
              style={{
                transform: 'translate(-301px, 419.7px)',
                position: 'relative',
                zIndex: 4,
              }}
            >
              <Back />
            </div>
          </div>
          <div
            className={styles.frame}
            style={{
              background: 'linear-gradient(to bottom, #B8AFE6, #7867C7)',
              position: 'relative',
              zIndex: '2',
              transform: 'translate(-360px, -2340px) rotate(30deg) perspective(900px) rotateY(45deg) scaleX(1.0)',
              boxShadow: '-2px 0px 10px black',
            }}
          >
            <div style={{ transform: 'translate(-301px, 419.7px)' }}>
              <Back />
            </div>
          </div>
          <div
            className={styles.frame}
            style={{
              background: 'linear-gradient(to bottom, #a7adba, #343d46)',
              position: 'relative',
              zIndex: '1',
              transform: 'translate(-705px, -3035px) rotate(90deg) perspective(900px) rotateY(45deg) scaleX(1.0)',
              boxShadow: '-2px 0px 10px black',
            }}
          >
            <div style={{ transform: 'translate(-301px, 419.7px)' }}>
              <Back />
            </div>
          </div>
          <div
            className={styles.frame}
            style={{
              background: 'linear-gradient(to bottom, #FAE0D8, #fAB19B)',
              position: 'relative',
              zIndex: '0',
              transform: 'translate(-725px, -3940px) rotate(150deg) perspective(900px) rotateY(45deg) scaleX(1.0)',
              boxShadow: '-2px 0px 10px black',
            }}
          >
            <div
              className={styles.hidden2}
              style={{ transform: 'translate(-301px, 419.7px)' }}
            >
              <Back />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
