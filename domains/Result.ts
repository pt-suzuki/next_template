export interface Result<T> {
  total_count: number;
  next_page_url: string;
  prev_page_url: string;
  current_page: number;
  last_page: number;
  from: number;
  to: number;
  data: T[];
  page_url: string;
  first_page_url: string;
  last_page_url: string;
  pageNation: number[];
}

export const initResult = <T>(): Result<T> => {
  return {
    total_count: 0,
    next_page_url: '',
    prev_page_url: '',
    current_page: 0,
    last_page: 0,
    from: 0,
    to: 0,
    data: [],
    page_url: '',
    first_page_url: '',
    last_page_url: '',
    pageNation: []
  };
};
