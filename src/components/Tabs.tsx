import { useLocation, Link } from 'react-router-dom';
import cx from 'clsx';
import styles from './Tabs.module.css';

const TabList = [
  { name: 'Code', pathname: '/code' },
  { name: 'Issues', pathname: '/issue' },
  { name: 'Pull requests', pathname: '/pulls' },
  { name: 'Actions', pathname: '/actions' },
  { name: 'Projects', pathname: '/projects' },
  { name: 'Security', pathname: '/security' },
];

interface TabProps {
  item: { name:string, pathname: string }
  selected: boolean
  number?: number
}

function Tab({ item, selected, number }: TabProps) {
  return (
    <li>
      <Link to={item.pathname} className={styles.link}>
        <button
          type="button"
          className={cx(styles.tab, { [styles.selected]: selected })}
        >
          <span>{item.name}</span>
          {number && <div className={styles.circle}>{number}</div>}
        </button>
      </Link>
    </li>
  );
}

export default function Tabs() {
  const { pathname } = useLocation();

  return (
    <ul className={styles.tabList}>
      {TabList.map((tab) => (
        <Tab
          key={tab.name}
          item={tab}
          selected={(pathname === '/' ? '/issue' : pathname) === tab.pathname}
        />
      ))}
    </ul>
  );
}
