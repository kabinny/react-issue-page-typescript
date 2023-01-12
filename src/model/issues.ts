export interface DataItem {
  login: string;
  title: string;
}

export interface Data {
  data: DataItem[];
}

// Partial 하나만 있을 수도 있다.
export type List = Partial<DataItem> & { name: string };
