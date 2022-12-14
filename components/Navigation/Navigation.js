import Link from 'next/link'
import cn from 'classnames'
import styles from './Navigation.module.scss'
import NetlifyGem from '../NetlifyGem/NetlifyGem'
import { useRouter } from 'next/router'

function NavigationLink({ item, hrefType }) {
  const { asPath } = useRouter()
  const path = '/' + item.filePath.replace(/\.mdx?$/, '')
  const ariaCurrent = path === asPath ? 'page' : undefined

  return (
    <li className={styles.item} key={item.data.title}>
      <a
        href={hrefType === 'anchor' ? `#${item.data.title}` : path}
        className={styles.link}
        aria-current={ariaCurrent}
      >
        <span className={styles.text}>{item.data.title}</span>
      </a>
    </li>
  )
}

export default function Navigation({ items, hrefType }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <a rel="prefetch" href="https://www.netlify.com/" className={cn(styles.link, styles.logo)}>
            <NetlifyGem />
          </a>
        </li>
        {items.map((item) => (
          <NavigationLink
            item={item}
            hrefType={hrefType}
            key={item.data.title}
          />
        ))}
      </ul>
    </nav>
  )
}
