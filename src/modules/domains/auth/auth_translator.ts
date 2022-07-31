import { AxiosResponse } from "axios";
import { ResponseHandler } from "../response_handler";
import { SignInForm, SignInFormJson } from "./signIn_form";
import { Auth } from "./auth";
import { Result } from "../result";
import { ResponseError } from "../response_error";

export interface AuthTranslator {
  translateLoginFormToJson(login_form: SignInForm): SignInFormJson;
  translateLoginResult(response: AxiosResponse): Result<Auth, ResponseError>;
}

export class AuthTranslatorImpl implements AuthTranslator {
  private responseHandler: ResponseHandler;

  constructor(responseHandler: ResponseHandler) {
    this.responseHandler = responseHandler;
  }

  public translateLoginFormToJson(signInForm: SignInForm): SignInFormJson {
    const param: SignInFormJson = { ...signInForm };
    param.username = signInForm.username;
    param.grant_type = "password";
    return param;
  }

  public translateLoginResult(response: AxiosResponse): Result<Auth, ResponseError> {
    return this.responseHandler.translateResponseToModel<Auth>(
      response
    );
  }
}
