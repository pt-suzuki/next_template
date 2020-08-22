import { ApiConnection } from "../ApiConnection";
import { UserTranslator } from "./UserTranslator";
import { Response } from "../Response";
import { ApiUri } from "../../enums/ApiUri";
import { User } from "./User";
import { UserSearchForm } from "./UserSearchForm";
import { Result } from "../Result";

export interface UserRepository {
  select(userForm: UserSearchForm): Promise<Response<Result<User>>>;
  getContent(id: number): Promise<Response<User>>;
  getCurrent(): Promise<Response<User>>;
  store(model: User): Promise<Response<User>>;
  update(model: User): Promise<Response<User>>;
  delete(model: User): Promise<Response<unknown>>;
  fileUpload(model: User): Promise<Response<User>>;
}

export class UserRepositoryImpl implements UserRepository {
  private client: ApiConnection;
  private translator: UserTranslator;

  constructor(client: ApiConnection, translator: UserTranslator) {
    this.client = client;
    this.translator = translator;
  }

  async select(userForm: UserSearchForm): Promise<Response<Result<User>>> {
    const param = this.translator.translateSearchFormToJson(userForm);
    if (userForm.access_url === "") {
      userForm.access_url = ApiUri.USER.BASIC;
    }
    const response = await this.client.get(userForm.access_url, param);
    return this.translator.translateResponseToList(response);
  }

  async getContent(id: number): Promise<Response<User>> {
    const response = await this.client.get(`${ApiUri.USER.BASIC}/${id}`, {});
    return this.translator.translateResponseToContent(response);
  }

  async getCurrent(): Promise<Response<User>> {
    const response = await this.client.get(ApiUri.USER.CURRENT, {});
    return this.translator.translateResponseToContent(response);
  }

  async store(model: User): Promise<Response<User>> {
    const response = await this.client.post(
      ApiUri.USER.BASIC,
      this.translator.translateContentToJson(model)
    );
    return this.translator.translateResponseToContent(response);
  }

  async update(model: User): Promise<Response<User>> {
    const response = await this.client.put(
      `${ApiUri.USER.BASIC}/${model.id}`,
      this.translator.translateContentToJson(model)
    );
    return this.translator.translateResponseToContent(response);
  }

  async delete(model: User): Promise<Response<unknown>> {
    const response = await this.client.delete(
      `${ApiUri.USER.BASIC}/${model.id}`,
      {}
    );
    return this.translator.translateResponseToDeleteResult(response);
  }

  async fileUpload(model: User): Promise<Response<User>> {
    const form = this.translator.translateContentToFileForm(model);
    const response = await this.client.post_file(
      `${ApiUri.USER.UPLOAD.IMAGE}${model.id}`,
      form
    );
    return this.translator.translateResponseToContent(response);
  }
}
