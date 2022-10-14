import Button from './Button';
import Space from './Space';
import Tabs from './Tabs';

import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.buttonContainer}>
        {/* repo name */}
        <div className={styles.repoNameContainer}>
          <a href="/" className={styles.userName}>
            kabinny
          </a>
          <span className={styles.divider}>/</span>
          <a href="/" className={styles.repoName}>
            github-issue-ex
          </a>
        </div>
        <Button buttonStyle="default">
          Watch
          {' '}
          <div className={styles.circle}>5</div>
        </Button>
        <Space />
        <Button buttonStyle="default">Fork</Button>
        <Space />
        <Button buttonStyle="default">Star</Button>
        {' '}
      </div>
      <Tabs />
    </div>
  );
}
