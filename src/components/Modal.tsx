import React, { useEffect, useState } from 'react';
import cx from 'clsx';

import styles from './Modal.module.css';

interface Props {
  opened: boolean;
  title: string;
  onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
  placeholder: string;
  searchDataList: { name: string }[];
  onClickCell: (value: Record<string, string>) => void;
}
export default function Modal({
  opened,
  title,
  onClose,
  placeholder,
  searchDataList,
  onClickCell,
}: Props) {
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(searchDataList);

  useEffect(() => {
    setFilteredData(searchDataList);
  }, [searchDataList]);

  useEffect(() => {
    // 보통 정규식을 사용한다.
    if (searchValue === '') {
      setFilteredData(searchDataList);
    } else {
      const filteredSearchList = searchDataList.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filteredSearchList);
    }
  }, [searchDataList, searchValue]);

  return (
    <div className={cx(styles.modal, { [styles.opened]: opened })}>
      <div className={styles.header}>
        <span>Filter by {title}</span>
        <button type="button" onClick={onClose}>
          X
        </button>
      </div>
      <div className={styles.input}>
        <input
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className={styles.list}>
        {filteredData.map((data) => (
          <div
            role="button"
            key={data.name}
            onClick={() => {
              const isLabel = title.toLowerCase() === 'label';
              const paramKey = isLabel ? 'labels' : title.toLowerCase();

              onClickCell({ [paramKey]: data.name });
            }}
            className={styles.item}
          >
            {data.name}
          </div>
        ))}
      </div>
    </div>
  );
}
