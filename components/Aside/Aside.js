import Link from 'next/link'

import { Fragment, useEffect } from 'react'
import styles from './Aside.module.css'
import { createLayout } from '@georgedoescode/nugget'
import { createPattern } from '../../utils/create-pattern'

export default function Header({ heading }) {
  useEffect(() => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    createLayout('aside', {
      minContentGap: 2,
      minPatternGap: 8,
      cellDimensions: {
        min: 4,
        max: 16,
      },
      fillIterations: 20_000,
      seed: 123456,
      onUpdate(layout, target) {
        const dpr = window.devicePixelRatio

        canvas.width = target.offsetWidth * dpr
        canvas.height = target.offsetHeight * dpr

        ctx.scale(dpr, dpr)

        createPattern(ctx, layout.rects)

        target.style.backgroundImage = `url(${canvas.toDataURL()})`
        target.style.backgroundSize = '100%'
        target.style.backgroundRepeat = 'no-repeat'
      },
    })
  })

  const Heading = heading ? 'h1' : Fragment

  return (
    <aside className={styles.aside}>
      <Link href="/">
        <a className={styles.heading}>
          <Heading>
            <span>
              <span data-track-bounds>ABCs</span>
              <br />
              <span data-track-bounds>of Netlify</span>
            </span>
          </Heading>
        </a>
      </Link>
    </aside>
  )
}
