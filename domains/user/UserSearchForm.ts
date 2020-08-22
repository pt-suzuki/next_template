import { AbstractSearchForm } from "../AbstractSearchForm";

export interface UserSearchForm extends AbstractSearchForm {
  name: string | null;
  group_id: string | null;
}

export const initUserSearchForm = (): UserSearchForm => {
  return {
    name: null,
    group_id: null,
    access_url: "",
    rows: 20,
    key: "",
    isAsc: true,
  };
};
