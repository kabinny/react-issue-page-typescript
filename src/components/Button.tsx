/* eslint-disable react/button-has-type */
import cx from 'clsx';
import styles from './Button.module.css';

type Props = {
  buttonStyle: string,
  children: React.ReactNode,
  type?: 'button' | 'submit',
  disabled?: boolean,
}

export default function Button({
  buttonStyle,
  children,
  type = 'button',
  disabled,
}: Props) {
  return (
    <button
      className={cx(styles.button, styles[buttonStyle])}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
