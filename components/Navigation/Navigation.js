import styles from './Navigation.module.scss';

export default function Navigation({ items, hrefType }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
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
