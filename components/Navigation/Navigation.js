import styles from './Navigation.module.scss';

export default function Navigation({ items }) {
  console.log(items);
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        {items.map((item) => (
          <li key={item.data.title}>
            <a href={`#${item.data.title}`} className={styles.link}>
              {item.data.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
