import Link from 'next/link'
import styles from './aside.module.css'

export default function Header({ heading }) {
  return (
    <aside className={styles.aside}>
      <div className={styles.asideContainer}>
        <Link href="/">
          {heading ? (
            <a>
              <h1 className={styles.title}>
                ABCs <br /> of Netlify
              </h1>
            </a>
          ) : (
            <a className={styles.title}>ABCs <br /> of Netlify</a>
          )}
        </Link>
      </div>
    </aside>
  )
}
