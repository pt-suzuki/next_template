import { format, parseISO } from 'date-fns';

export const currentMonthList: string[] = [...Array(13)].map((_, i) => {
  const today = new Date();
  const date = new Date(today.getFullYear(), today.getMonth() - i, today.getDate());
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return year + '/' + month;
});

export const futureMonthList: string[] = [...Array(13)].map((_, i) => {
  const today = new Date();
  const date = new Date(today.getFullYear(), today.getMonth() + i, today.getDate());
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return year + '/' + month;
});

export const accountCriteriaMonthList = (): string[] => {
  const monthList = [...currentMonthList, ...futureMonthList.slice(0, 7)];
  const resultList: string[] = [];
  monthList.map((item) => {
    if (resultList.indexOf(item) !== -1) {
      return;
    }
    resultList.push(item);
  });
  return resultList;
};

export const formatDateMonth = (date: Date): string => {
  return format(date, 'yyyy/M');
};

export const formatDateMonthJa = (date: Date): string => {
  return format(date, 'yyyy年M月');
};

export const formatDateJa = (date: Date): string => {
  return format(date, 'yyyy年M月d日');
};

export const formatDate = (date?: Date | null): string => {
  if (!date) return '';
  return format(date, 'yyyy/M/d');
};

export const formatInputDate = (date: Date): string => {
  return format(date, 'yyyy-MM-dd');
};

export const CurrentYear = (): number => {
  return new Date().getFullYear();
};

export const MinYear = 1999;

export const FoundedYearFrom = (): number => {
  return MinYear + 1;
};

export const BirthYearFrom = (): number => {
  return CurrentYear() - 100;
};

export const differenceMonth = (date1: Date, date2: Date): number => {
  return (
    date1.getFullYear() * 12 + date1.getMonth() - (date2.getFullYear() * 12 + date2.getMonth())
  );
};

export const parseDate = (date: string): Date => {
  return parseISO(date);
};

export const MaxMonth = 12;

export const currentMonthListReverse: string[] = currentMonthList.reverse();
