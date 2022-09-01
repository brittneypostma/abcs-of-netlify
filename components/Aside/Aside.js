import Link from 'next/link';
import styles from './Aside.module.css';

export default function Header() {
  return (
    <aside className={styles.aside}>
      <div className={styles.asideContainer}>
        <Link href="/">
          <a>
            <h1 className="md:text-4xl font-semibold">
              ABCs <br /> of Netlify
            </h1>
          </a>
        </Link>
      </div>
    </aside>
  );
}
