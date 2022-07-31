import * as init from "./init";
import { UserRepositoryImpl } from "../domains/user/user_repository";
import { UserTranslatorImpl } from "../domains/user/user_translator";
import { UserUseCaseImpl } from "../domains/user/user_use_case";

export const userTranslator = new UserTranslatorImpl(init.responseHandlerImpl);
export const userRepository = new UserRepositoryImpl(
  init.apiConnection,
  userTranslator
);
export const userUseCaseImpl = new UserUseCaseImpl(userRepository);
