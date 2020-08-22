import * as init from "./init";
import { AuthRepositoryImpl } from "../domains/auth/AuthRepository";
import { AuthTranslatorImpl } from "../domains/auth/AuthTranslator";
import { AuthUseCaseImpl } from "../domains/auth/AuthUseCase";

export const authTranslator = new AuthTranslatorImpl(init.responseHandlerImpl);
export const authRepository = new AuthRepositoryImpl(
  init.apiConnection,
  authTranslator
);
export const authUseCaseImpl = new AuthUseCaseImpl(
  authRepository,
  authTranslator
);
