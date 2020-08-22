import * as init from "./init";
import { UserRepositoryImpl } from "../domains/user/UserRepository";
import { UserTranslatorImpl } from "../domains/user/UserTranslator";
import { UserUseCaseImpl } from "../domains/user/UserUseCase";

export const userTranslator = new UserTranslatorImpl(init.responseHandlerImpl);
export const userRepository = new UserRepositoryImpl(
  init.apiConnection,
  userTranslator
);
export const userUseCaseImpl = new UserUseCaseImpl(userRepository);
