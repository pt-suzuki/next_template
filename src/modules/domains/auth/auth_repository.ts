import { HttpClient } from "../http_client";
import { ApiUri } from "../../../enums/api_uri";
import { AuthTranslator } from "./auth_translator";
import { SignInFormJson } from "./signIn_form";
import { Auth } from "./auth";
import { Result } from "../result";
import { ResponseError } from "../response_error";

export interface AuthRepository {
  signIn(login_form: SignInFormJson): Promise<Result<Auth, ResponseError>>;
  checkLogin(): Promise<Boolean>;
  checkAdmin(): Promise<Boolean>;
}

export class AuthRepositoryImpl implements AuthRepository {
  private client: HttpClient;
  private translator: AuthTranslator;

  constructor(client: HttpClient, translator: AuthTranslator) {
    this.client = client;
    this.translator = translator;
  }

  async signIn(param: SignInFormJson): Promise<Result<Auth, ResponseError>> {
    const loginResponse = await this.client.post(
      ApiUri.OAUTH.ACCESS_TOKEN,
      param
    );
    return this.translator.translateLoginResult(loginResponse);
  }

  async checkLogin(): Promise<Boolean> {
    const checkResponse = await this.client.get(ApiUri.OAUTH.LOGIN_CHECK, {});
    return checkResponse.status === 200;
  }

  async checkAdmin(): Promise<Boolean> {
    const checkResponse = await this.client.get(ApiUri.OAUTH.ADMIN_CHECK, {});
    return checkResponse.status === 200;
  }
}
