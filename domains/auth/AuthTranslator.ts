import { AxiosResponse } from "axios";
import { ResponseHandler } from "../ResponseHandler";
import { Response } from "../Response";
import { SignInForm } from "./SignInForm";
import { Auth, initAuth } from "./Auth";

export interface AuthTranslator {
  translateLoginFormToJson(login_form: SignInForm): any;
  translateLoginResult(response: AxiosResponse<any>): Response<Auth>;
}

export class AuthTranslatorImpl implements AuthTranslator {
  private responseHandler: ResponseHandler;

  constructor(responseHandler: ResponseHandler) {
    this.responseHandler = responseHandler;
  }

  public translateLoginFormToJson(signInForm: SignInForm): any {
    const param: any = signInForm;
    param.username = signInForm.username;
    param.grant_type = "password";
    return param;
  }

  public translateLoginResult(response: AxiosResponse): Response<Auth> {
    const result = this.responseHandler.translateAxiosResponseToResponse<Auth>(
      response
    );
    result.body = initAuth();
    result.body.access_token = response.data.access_token;
    result.body.refresh_token = response.data.refresh_token;
    return result;
  }
}
