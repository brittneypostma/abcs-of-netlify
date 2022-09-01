import { useRef } from 'react';
import styles from './Letter.module.scss';
import A from '../../svg/a.svg';

export default function Letter() {
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

  return (
    <div ref={boxEl} onMouseMove={handleMouseMove} className={styles.box}>
      <A />
    </div>
  );
}
