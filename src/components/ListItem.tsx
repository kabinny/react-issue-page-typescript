import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React from 'react';
// import ListItemLayout from './ListItemLayout';
// import Badge from './Badge';

import styles from './ListItem.module.css';

dayjs.extend(relativeTime);

interface Props {
  checked: boolean
  // onClickCheckBox:
  onClickTitle: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  data: {
    labels: string
    state: string
    created_at: string
    closed_at: string
    title: string
    number: number
    user: {
      login: string
    }
  }
}

export default function ListItem({
  checked,
  // onClickCheckBox,
  onClickTitle,
  data,
}: Props) {
  const badges = data.labels;
  const state = data.state === 'open' ? 'opened' : 'closed';
  const date = data.state === 'open' ? data.created_at : data.closed_at;

  return (
  // <ListItemLayout checked={checked} onClick={onClickCheckBox}>
    <div>
      <div role="button" onClick={onClickTitle} className={styles.title}>
        {data.title}
        {/* {badges.length > 0
            && badges.map((badgeProps, index) => (
              <Badge key={index} {...badgeProps} />
            ))} */}
      </div>
      <div className={styles.description}>
        #
        {data.number}
        {' '}
        {state}
        {' '}
        {dayjs(date).fromNow()}
        {' '}
        {data.user.login}
      </div>
    </div>
  // </ListItemLayout>
  );
}
