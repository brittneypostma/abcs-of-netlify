import styles from './BrowserBox.module.scss';

export default function BrowserBox({ children }) {
  return (
    <div className={styles.browser}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
}
