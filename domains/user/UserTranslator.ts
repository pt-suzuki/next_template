import { AxiosResponse } from "axios";
import { ResponseHandler } from "../ResponseHandler";
import { Response } from "../Response";
import { Result } from "../Result";
import { User } from "./User";
import { UserSearchForm } from "./UserSearchForm";
import { UserDropDownForm } from "./UserDropDownForm";

export interface UserTranslator {
  translateSearchFormToJson(searchForm: UserSearchForm): any;
  translateDropDownFormToJson(dropDownForm: UserDropDownForm): UserDropDownForm;
  translateResponseToList(response: AxiosResponse<any>): Response<Result<User>>;
  translateResponseToContent(response: AxiosResponse<any>): Response<User>;
  translateResponseToDeleteResult(response: AxiosResponse): Response<unknown>;
  translateContentToJson(content: User): any;
  translateContentToFileForm(content: User): FormData;
}

export class UserTranslatorImpl implements UserTranslator {
  private responseHandler: ResponseHandler;

  constructor(responseHandler: ResponseHandler) {
    this.responseHandler = responseHandler;
  }

  public translateResponseToList(
    response: AxiosResponse<any>
  ): Response<Result<User>> {
    return this.responseHandler.translateAxiosResponseToListResponse<User>(
      response
    );
  }

  public translateResponseToContent(
    response: AxiosResponse<any>
  ): Response<User> {
    const result: Response<User> = this.responseHandler.translateAxiosResponseToResponse<
      User
    >(response);
    if (result.error) return result;
    result.body.role_list = result.body.role_list ? result.body.role_list : [];
    result.body.group_list = result.body.group_list
      ? result.body.group_list
      : [];
    return result;
  }

  public translateResponseToDeleteResult(
    response: AxiosResponse<any>
  ): Response<unknown> {
    return this.responseHandler.translateAxiosResponseToResponse(response);
  }

  public translateContentToJson(content: User): any {
    return content;
  }

  public translateSearchFormToJson(searchForm: UserSearchForm): any {
    const json: any = searchForm;
    json.order = searchForm.isAsc ? "asc" : "desc";
    return json;
  }

  public translateDropDownFormToJson(
    dropDownForm: UserDropDownForm
  ): UserDropDownForm {
    return dropDownForm;
  }

  public translateContentToFileForm(content: User): FormData {
    const formData = new FormData();
    formData.append("user_image_file", content.upload_file);
    return formData;
  }
}
