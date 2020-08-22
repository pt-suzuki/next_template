import { ApiConnection } from "../ApiConnection";
import { ApiUri } from "../../enums/ApiUri";
import { Response } from "../Response";
import { AuthTranslator } from "./AuthTranslator";
import { SignInForm } from "./SignInForm";
import { Auth } from "./Auth";

export interface AuthRepository {
  signIn(login_form: SignInForm): Promise<Response<Auth>>;
  checkLogin(): Promise<Boolean>;
  checkAdmin(): Promise<Boolean>;
}

export class AuthRepositoryImpl implements AuthRepository {
  private client: ApiConnection;
  private translator: AuthTranslator;

  constructor(client: ApiConnection, translator: AuthTranslator) {
    this.client = client;
    this.translator = translator;
  }

  async signIn(param: any): Promise<Response<Auth>> {
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
