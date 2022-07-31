import { AxiosResponse } from "axios";
import { ResponseHandler } from "../response_handler";
import { Result } from "../result";
import { User } from "./user";
import { UserSearchForm } from "./user_search_form";
import { UserDropDownForm } from "./user_drop_down_form";
import { ResponseError } from "../response_error";

export interface UserTranslator {
  translateSearchFormToJson(searchForm: UserSearchForm): any;
  translateDropDownFormToJson(dropDownForm: UserDropDownForm): UserDropDownForm;
  translateResponseToList(response: AxiosResponse): Result<User[], ResponseError>;
  translateResponseToContent(response: AxiosResponse): Result<User, ResponseError>;
  translateResponseToDeleteResult(response: AxiosResponse): Result<unknown, ResponseError>;
  translateContentToJson(content: User): any;
  translateContentToFileForm(content: User): FormData;
}

export class UserTranslatorImpl implements UserTranslator {
  private responseHandler: ResponseHandler;

  constructor(responseHandler: ResponseHandler) {
    this.responseHandler = responseHandler;
  }

  public translateResponseToList(response: AxiosResponse): Result<User[], ResponseError> {
    return this.responseHandler.translateResponseToModel<User[]>(response);
  }

  public translateResponseToContent(response: AxiosResponse): Result<User, ResponseError> {
    const result: Result<User, ResponseError> = this.responseHandler.translateResponseToModel<User>(response);
    if (result.isFailure()) return result;
    result.getValue().role_list = result.getValue().role_list ? result.getValue().role_list : [];
    result.getValue().group_list = result.getValue().group_list ? result.getValue().group_list : [];
    return result;
  }

  public translateResponseToDeleteResult(
    response: AxiosResponse<any>
  ): Result<unknown, ResponseError> {
    return this.responseHandler.translateResponseToModel<unknown>(response);
  }

  public translateContentToJson(content: User): any {
    return content;
  }

  public translateSearchFormToJson(searchForm: UserSearchForm): any {
    const json: any = searchForm;
    json.order = searchForm.isAsc ? "asc" : "desc";
    return json;
  }

  public translateDropDownFormToJson(dropDownForm: UserDropDownForm): UserDropDownForm {
    return dropDownForm;
  }

  public translateContentToFileForm(content: User): FormData {
    const formData = new FormData();
    formData.append("user_image_file", content.upload_file);
    return formData;
  }
}
