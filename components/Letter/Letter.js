import { useRef } from 'react';
import styles from './Letter.module.scss';

export default function Letter({ letter }) {
  const boxEl = useRef(null);

  const handleMouseMove = (e) => {
    if (!boxEl?.current) {
      return;
    }

    const r = boxEl.current.getBoundingClientRect();

    boxEl.current.style.setProperty(
      '--x',
      e.clientX - (r.left + Math.floor(r.width / 2))
    );
    boxEl.current.style.setProperty(
      '--y',
      e.clientY - (r.top + Math.floor(r.height / 2))
    );
  };

  const handleMouseOut = () => {
    if (!boxEl?.current) {
      return;
    }

    boxEl.current.addEventListener('mouseleave', () => {
      boxEl.current.style.setProperty('--x', 0);
      boxEl.current.style.setProperty('--y', 0);
      boxEl.current.style.setProperty('--z', 0);
    });
  };

  return (
    <div
      ref={boxEl}
      className={styles.box}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
    >
      <div className={styles.wrapper}>
        {Array.from({ length: 12 }, () => (
          <div className={styles.letter}>{letter}</div>
        ))}
      </div>
    </div>
  );
}
