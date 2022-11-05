import cx from 'clsx';
import styles from './Pagination.module.css';

// onClick 은 그대로 보낸 것이라 같은 것. 중복해서 쓰기 보다는 확장을 이용해서 개선
interface OnClickProps {
  onClick: (page: number) => void;
}

interface PageButtonProps extends OnClickProps {
  number: number;
  selected: boolean;
}
function PageButton({ number, onClick, selected }: PageButtonProps) {
  return (
    <button
      type="button"
      className={cx(styles.button, { [styles.selected]: selected })}
      onClick={() => onClick(number)}
    >
      {number}
    </button>
  );
}

interface Props extends OnClickProps {
  maxPage: number;
  currentPage: number;
}
export default function Pagination({ currentPage, maxPage, onClick }: Props) {
  return (
    <div>
      <button
        type="button"
        className={cx(styles.button, styles.blueButton)}
        disabled={currentPage === 1}
      >
        {'< Previous'}
      </button>
      {new Array(maxPage).fill(null).map((_, index) => (
        <PageButton
          // eslint-disable-next-line react/no-array-index-key
          key={index + 1}
          number={index + 1}
          onClick={onClick}
          selected={index + 1 === currentPage}
        />
      ))}
      <button
        type="button"
        className={cx(styles.button, styles.blueButton)}
        disabled={currentPage === maxPage}
      >
        {'Next >'}
      </button>
    </div>
  );
}
