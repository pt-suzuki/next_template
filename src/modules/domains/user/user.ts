import { KeyValue } from "../key_value";

export interface User {
  id?: number;
  company_id: number;
  company_name: string;
  email: string;
  reenter_email: string;
  name: string;
  password: string;
  reenter_password: string;
  address: string;
  birthday?: Date;
}

export const initUser = (): User => {
  return {
    company_id: 0,
    company_name: "",
    email: "",
    reenter_email: "",
    name: "",
    password: "",
    reenter_password: "",
    address: "",
  };
};
