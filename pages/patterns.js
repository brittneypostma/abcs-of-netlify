import { useEffect } from 'react';
import { createLayout, createRandom } from '@georgedoescode/nugget';
import { createPattern } from '../utils/create-pattern';

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default function Patterns() {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    createLayout('section', {
      layoutWidth: 1920,
      layoutHeight: 1920,
      minContentGap: 64,
      minPatternGap: 8,
      cellDimensions: {
        min: 16,
        max: 128,
      },
      fillIterations: 20_000,
      seed: Math.random() * 100_000,
      onUpdate(layout, target) {
        const dpr = window.devicePixelRatio;

        canvas.width = target.offsetWidth * dpr;
        canvas.height = target.offsetHeight * dpr;

        ctx.scale(dpr, dpr);

        createPattern(ctx, layout.rects, 123456);

        canvas.toBlob((blob) => {
          const url = URL.createObjectURL(blob);

          target.style.backgroundImage = `url(${url})`;
          target.style.backgroundSize = '100%';
          target.style.backgroundRepeat = 'no-repeat';
        });
      },
    });
  }, []);

  return (
    <section
      style={{
        width: '100vw',
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <h1 data-track-bounds style={{ fontSize: '3rem' }}>
        Hey there!
      </h1>
    </section>
  );
}
