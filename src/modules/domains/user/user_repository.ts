import { ApiConnection } from "../api_connection";
import { UserTranslator } from "./user_translator";
import { ApiUri } from "../../../enums/api_uri";
import { User } from "./user";
import { UserSearchForm } from "./user_search_form";
import { Result } from "../result";
import { ResponseError } from "../response_error";

export interface UserRepository {
  select(userForm: UserSearchForm): Promise<Result<User[], ResponseError>>;
  getContent(id: number): Promise<Result<User, ResponseError>>;
  getCurrent(): Promise<Result<User, ResponseError>>;
  store(model: User): Promise<Result<User, ResponseError>>;
  update(model: User): Promise<Result<User, ResponseError>>;
  delete(model: User): Promise<Result<unknown, ResponseError>>;
}

export class UserRepositoryImpl implements UserRepository {
  private client: ApiConnection;
  private translator: UserTranslator;

  constructor(client: ApiConnection, translator: UserTranslator) {
    this.client = client;
    this.translator = translator;
  }

  async select(userForm: UserSearchForm): Promise<Result<User[], ResponseError>> {
    const param = this.translator.translateSearchFormToJson(userForm);
    if (userForm.access_url === "") {
      userForm.access_url = ApiUri.USER.BASIC;
    }
    const response = await this.client.get(userForm.access_url, param);
    return this.translator.translateResponseToList(response);
  }

  async getContent(id: number): Promise<Result<User, ResponseError>> {
    const response = await this.client.get(`${ApiUri.USER.BASIC}/${id}`, {});
    return this.translator.translateResponseToContent(response);
  }

  async getCurrent(): Promise<Result<User, ResponseError>> {
    const response = await this.client.get(ApiUri.USER.CURRENT, {});
    return this.translator.translateResponseToContent(response);
  }

  async store(model: User): Promise<Result<User, ResponseError>> {
    const response = await this.client.post(
      ApiUri.USER.BASIC,
      this.translator.translateContentToJson(model)
    );
    return this.translator.translateResponseToContent(response);
  }

  async update(model: User): Promise<Result<User, ResponseError>> {
    const response = await this.client.put(
      `${ApiUri.USER.BASIC}/${model.id}`,
      this.translator.translateContentToJson(model)
    );
    return this.translator.translateResponseToContent(response);
  }

  async delete(model: User): Promise<Result<unknown, ResponseError>> {
    const response = await this.client.delete(
      `${ApiUri.USER.BASIC}/${model.id}`,
      {}
    );
    return this.translator.translateResponseToDeleteResult(response);
  }
}
