import { BadgeProps } from '../components/Badge';

export interface DataItem {
  login: string;
  title: string;
}

export interface Data {
  data: DataItem[];
}

// Partial 하나만 있을 수도 있다.
export type List = Partial<DataItem> & { name: string };

export interface ListItem {
  id: string;
  labels: BadgeProps[];
  state: 'open' | 'close';
  created_at: string;
  closed_at: string;
  title: string;
  number: number;
  user: {
    login: string;
  };
}
