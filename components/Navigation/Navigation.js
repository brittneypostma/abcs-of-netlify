import Link from 'next/link';

import styles from './Navigation.module.scss';
import NetlifyGem from '../NetlifyGem/NetlifyGem';

export default function Navigation({ items, hrefType }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li className="flex">
          <Link href="/">
            <a className={styles.logo}>
              <NetlifyGem />
            </a>
          </Link>
        </li>
        {items.map((item) => (
          <li className={styles.item} key={item.data.title}>
            <a
              href={
                hrefType === 'anchor'
                  ? `#${item.data.title}`
                  : `/${item.filePath.replace(/\.mdx?$/, '')}`
              }
              className={styles.link}
            >
              {item.data.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
