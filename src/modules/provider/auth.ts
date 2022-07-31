import * as init from "./init";
import { AuthRepositoryImpl } from "../domains/auth/auth_repository";
import { AuthTranslatorImpl } from "../domains/auth/auth_translator";
import { AuthUseCaseImpl } from "../domains/auth/auth_use_case";

export const authTranslator = new AuthTranslatorImpl(init.responseHandlerImpl);
export const authRepository = new AuthRepositoryImpl(
  init.apiConnection,
  authTranslator
);
export const authUseCaseImpl = new AuthUseCaseImpl(
  authRepository,
  authTranslator
);
