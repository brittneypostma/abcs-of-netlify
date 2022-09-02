import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import styles from './Navigation.module.scss';

export default function Navigation({ items, hrefType }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <Link href="/">
            <a className={cn(styles.link, styles.logo)}>
              <Image src="/netlify-logo.svg" alt="" width="30" height="30" />
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
