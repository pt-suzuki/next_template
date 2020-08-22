import { KeyValue } from "../KeyValue";

export interface User {
  id: number | null;
  company_id: number | null;
  company_name: string | null;
  email: string | null;
  reenter_email: string | null;
  name: string | null;
  password: string | null;
  reenter_password: string | null;
  avatar_url: string | null;
  prefectures_code: number | null;
  prefectures_name: string | null;
  address: string | null;
  zip_code: string | null;
  description: string | null;
  group_name: string | null;
  entering_company_date: Date | null;
  closest_station: string | null;
  birthday: Date | null;
  role_list: KeyValue[];
  group_list: KeyValue[];
  upload_file: string;
  upload_file_name: string;
  upload_file_path: string;
}

export const initUser = (): User => {
  return {
    id: 0,
    company_id: 0,
    company_name: "",
    email: "",
    reenter_email: "",
    name: "",
    password: "",
    reenter_password: "",
    avatar_url: "",
    prefectures_code: 0,
    prefectures_name: "",
    address: "",
    zip_code: "",
    description: "",
    group_name: "",
    entering_company_date: null,
    closest_station: "",
    birthday: null,
    role_list: [],
    group_list: [],
    upload_file: "",
    upload_file_name: "",
    upload_file_path: "",
  };
};
