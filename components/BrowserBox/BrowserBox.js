import styles from './BrowserBox.module.scss';

export default function BrowserBox({ children }) {
  return <div className={styles.browser}>{children}</div>;
}
