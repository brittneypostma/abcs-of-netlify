import { useEffect } from 'react';
import { createLayout } from '@georgedoescode/nugget';
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
      layoutWidth: document.body.offsetWidth,
      layoutHeight: document.body.offsetHeight,
      minContentGap: 48,
      minPatternGap: 8,
      cellDimensions: {
        min: 8,
        max: 256,
      },
      fillIterations: 20_000,
      seed: Math.random() * 100_000,
      onUpdate(layout, target) {
        const dpr = window.devicePixelRatio;

        canvas.width = target.offsetWidth * dpr;
        canvas.height = target.offsetHeight * dpr;

        ctx.scale(dpr, dpr);

        createPattern(ctx, layout.rects);

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
    <>
      <section
        style={{
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <h1
          data-track-bounds
          style={{
            fontSize: '3rem',
            margin: '50vh 0',
          }}
        >
          Hey there!
        </h1>
        <p data-track-bounds style={{ maxWidth: '60ch', margin: '25vh 0' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p data-track-bounds style={{ maxWidth: '60ch', margin: '25vh 0' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p data-track-bounds style={{ maxWidth: '60ch', margin: '25vh 0' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p data-track-bounds style={{ maxWidth: '60ch', margin: '25vh 0' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </section>
    </>
  );
}
