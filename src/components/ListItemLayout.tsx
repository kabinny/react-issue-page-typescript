import cx from 'clsx';
import React from 'react';
import styles from './ListItemLayout.module.css';

interface Props {
  checked: boolean;
  onClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
  className: string;
}
export default function ListItemLayout({
  checked,
  onClick,
  children,
  className,
}: Props) {
  return (
    <div className={cx(styles.wrapper, className)}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={checked}
        onChange={onClick}
      />
      {children}
    </div>
  );
}
