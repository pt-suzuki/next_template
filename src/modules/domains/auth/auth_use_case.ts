import { SignInForm } from "./signIn_form";
import { AuthRepository } from "./auth_repository";
import { AuthTranslator } from "./auth_translator";
import { Auth } from "./auth";
import { Token } from "../../../enums/Token";
import { Result } from "../result";
import { ResponseError } from "../response_error";

export interface AuthUseCase {
  signIn(login_form: SignInForm): Promise<Result<Auth, ResponseError>>;
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

  async signIn(login_form: SignInForm): Promise<Result<Auth, ResponseError>> {
    const param = this.translator.translateLoginFormToJson(login_form);
    if (login_form.secret_id !== undefined) {
      param.client_id = login_form.secret_id;
    }
    if (login_form.secret_key !== undefined) {
      param.client_secret = login_form.secret_key;
    }
    const result = await this.repository.signIn(param);
    if (result.isFailure()) {
      return result
    }

    if (typeof window !== "undefined") {
      const date = new Date();
      localStorage.setItem(Token.ACCESS, result.getValue().access_token);
      localStorage.setItem(Token.REFRESH, result.getValue().refresh_token);
      localStorage.setItem(
        Token.EXPIRES_IN,
        String(result.getValue().expires_in + date.getTime())
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
