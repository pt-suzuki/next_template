import { UserRepository } from "./user_repository";
import { Response } from "../response";
import { User } from "./user";
import { UserSearchForm } from "./user_search_form";
import { Result } from "../result";

export interface UserUseCase {
  select(userForm: UserSearchForm): Promise<Response<Result<User>>>;
  getContent(id: number): Promise<Response<User>>;
  getCurrent(): Promise<Response<User>>;
  submit(model: User): Promise<Response<User>>;
  delete(model: User): Promise<Response<unknown>>;
}

export class UserUseCaseImpl implements UserUseCase {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async select(userForm: UserSearchForm): Promise<Response<Result<User>>> {
    return this.repository.select(userForm);
  }

  async getContent(id: number): Promise<Response<User>> {
    return this.repository.getContent(id);
  }

  async getCurrent(): Promise<Response<User>> {
    return this.repository.getCurrent();
  }

  async submit(model: User): Promise<Response<User>> {
    if (model.id == null) {
      return this.repository.store(model);
    }
    return this.repository.update(model);
  }

  async delete(model: User): Promise<Response<unknown>> {
    return this.repository.delete(model);
  }
}
