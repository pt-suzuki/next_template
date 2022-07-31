export interface KeyValue {
  key: any;
  value: string;
}

export const initKeyValue = (): KeyValue => {
  return {
    key: "",
    value: "",
  };
};
