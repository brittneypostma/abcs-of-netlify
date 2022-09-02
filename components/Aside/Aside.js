import Link from 'next/link';

import { useEffect } from 'react';
import styles from './Aside.module.css';
import { createLayout } from '@georgedoescode/nugget';
import { createPattern } from '../../utils/create-pattern';

export default function Header({ heading }) {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    createLayout('aside', {
      minContentGap: 16,
      minPatternGap: 8,
      cellDimensions: {
        min: 12,
        max: 12,
      },
      fillIterations: 20_000,
      seed: 123456,
      onUpdate(layout, target) {
        const dpr = window.devicePixelRatio;

        canvas.width = target.offsetWidth * dpr;
        canvas.height = target.offsetHeight * dpr;

        ctx.scale(dpr, dpr);

        createPattern(ctx, layout.rects);

        target.style.backgroundImage = `url(${canvas.toDataURL()})`;
        target.style.backgroundSize = '100%';
        target.style.backgroundRepeat = 'no-repeat';
      },
    });
  });
  return (
    <aside className={styles.aside}>
      <Link href="/">
        {heading ? (
          <a data-track-bounds>
            <h1 className={styles.title}>
              ABCs <br /> of Netlify
            </h1>
          </a>
        ) : (
          <a data-track-bounds className={styles.title}>
            ABCs <br /> of Netlify
          </a>
        )}
      </Link>
    </aside>
  );
}
