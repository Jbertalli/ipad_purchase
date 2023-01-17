import styles from '../styles/appleLogo.module.css';

export default function Logo() {
  return (
    <>
      <div
        style={{
          transform: 'translate(-72px, 167px) scale(.26)',
          position: 'relative',
          zIndex: '9998',
        }}
      >
        <div
          className={styles.cutout}
          style={{
            transform: 'translate(295.3px, -485px) scale(.5) rotate(266deg)',
          }}
        />
        <div
          className={styles.cutout1}
          style={{ transform: 'translate(307.3px, -480.9px) rotate(120deg)' }}
        />
        <div
          className={styles.cutout2}
          style={{ transform: 'translate(303.2px, -525.3px) rotate(22deg)' }}
        />
        <div
          className={styles.cutout3}
          style={{ transform: 'translate(279.6px, -546.7px) rotate(-31deg)' }}
        />
        <div
          className={styles.cutout4}
          style={{ transform: 'translate(281px, -607.5px) rotate(-112deg)' }}
        />
        <div
          className={styles.cutout5}
          style={{
            transform: 'translate(276.5px, -656.49px) rotate(-188.5deg)',
          }}
        />
        <div
          className={styles.cutout6}
          style={{ transform: 'translate(304px, -708px) rotate(-115deg)' }}
        />
        <div
          className={styles.cutout7}
          style={{ transform: 'translate(285px, -726.8px)' }}
        />
        <div
          className={styles.cutout8}
          style={{ transform: 'translate(305.4px, -742px) rotate(-50deg)' }}
        />
        <div
          className={styles.stem2}
          style={{ transform: 'translate(300px, -803px) rotate(-2deg)' }}
        />
        <div
          className={styles.patch}
          style={{ transform: 'translate(292px, -799.6px) rotate(15deg)' }}
        />
        <div
          className={styles.patch}
          style={{ transform: 'translate(302px, -803.7px) rotate(-16deg)' }}
        />
        <div
          className={styles.patch}
          style={{ transform: 'translate(302px, -766.2px) rotate(17deg)' }}
        />
        <div
          className={styles.patch}
          style={{ transform: 'translate(293px, -770px) rotate(-17deg)' }}
        />
      </div>
    </>
  );
}
