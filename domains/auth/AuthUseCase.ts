import { Response } from "../Response";
import { SignInForm } from "./SignInForm";
import { AuthRepository } from "./AuthRepository";
import { AuthTranslator } from "./AuthTranslator";
import { Auth } from "./Auth";
import { Token } from "../../enums/Token";

export interface AuthUseCase {
  signIn(login_form: SignInForm): Promise<Response<Auth>>;
  checkLogin(): Promise<Boolean>;
  checkAdmin(): Promise<Boolean>;
}

export class AuthUseCaseImpl implements AuthUseCase {
  private repository: AuthRepository;
  private translator: AuthTranslator;

  constructor(repository: AuthRepository, translator: AuthTranslator) {
    this.repository = repository;
    this.translator = translator;
  }

  async signIn(login_form: SignInForm): Promise<Response<Auth>> {
    const param = this.translator.translateLoginFormToJson(login_form);
    if (login_form.secret_id !== undefined) {
      param.client_id = login_form.secret_id;
    }
    if (login_form.secret_key !== undefined) {
      param.client_secret = login_form.secret_key;
    }
    const result = await this.repository.signIn(param);

    if (typeof window !== "undefined") {
      const date = new Date();
      localStorage.setItem(Token.ACCESS, result.body.access_token);
      localStorage.setItem(Token.REFRESH, result.body.refresh_token);
      localStorage.setItem(
        Token.EXPIRES_IN,
        String(result.body.expires_in + date.getTime())
      );
    }
    return result;
  }

  async checkLogin(): Promise<Boolean> {
    if (localStorage.getItem(Token.ACCESS) === "") return false;
    if (localStorage.getItem(Token.REFRESH) === "") return false;
    if (localStorage.getItem(Token.EXPIRES_IN) === "") return false;

    const date = new Date();
    if (date.getTime() < Number(localStorage.getItem(Token.EXPIRES_IN)))
      return false;

    return this.repository.checkLogin();
  }

  async checkAdmin(): Promise<Boolean> {
    return this.repository.checkAdmin();
  }
}
