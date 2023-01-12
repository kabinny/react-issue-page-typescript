import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React from 'react';
import ListItemLayout from './ListItemLayout';
import Badge from './Badge';

import styles from './ListItem.module.css';
import { ListItem } from '../model/issues';

dayjs.extend(relativeTime);

interface Props {
  checked: boolean;
  onClickCheckBox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickTitle?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  data: ListItem;
}

// eslint-disable-next-line max-len, prettier/prettier
export default function ListItem({
  checked,
  onClickCheckBox,
  onClickTitle,
  data,
}: Props) {
  const badges = data.labels;
  const state = data.state === 'open' ? 'opened' : 'closed';
  const date = data.state === 'open' ? data.created_at : data.closed_at;

  return (
    <ListItemLayout checked={checked} onClick={onClickCheckBox}>
      <div>
        <div role="button" onClick={onClickTitle} className={styles.title}>
          {data.title}
          {badges.length > 0 &&
            badges.map((badgeProps) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <Badge key={badgeProps.name} {...badgeProps} />
            ))}
        </div>
        <div className={styles.description}>
          #{data.number} {state} {dayjs(date).fromNow()} {data.user.login}
        </div>
      </div>
    </ListItemLayout>
  );
}
