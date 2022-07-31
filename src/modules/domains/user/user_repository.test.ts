import axios, { AxiosResponse } from 'axios';
import { HttpClient } from '../http_client';
import { ResponseError } from '../response_error';
import { ResponseHandlerImpl } from '../response_handler';
import { Result } from '../result';
import { User } from './user';
import { UserRepository, UserRepositoryImpl } from './user_repository';
import { initUserSearchForm } from './user_search_form';
import { UserTranslatorImpl } from './user_translator';

let repository: UserRepository;

describe('UserのRepositoryテスト', () => {
  beforeAll(() => {
    const apiConnection = new HttpClient();
    const responseHandler = new ResponseHandlerImpl();
    const translator = new UserTranslatorImpl(responseHandler);
    repository = new UserRepositoryImpl(apiConnection, translator)
  });

  describe('APIでUserのリストを取得する', () => {
    let result: Result<User[], ResponseError>;
    describe('正常系', () => {
      beforeAll(async () => {
        const searchForm = initUserSearchForm()
        result = await repository.select(searchForm);
      });
      it('結果が成功であること', (done: jest.DoneCallback) => {
        if (result.isFailure()) fail('ResultがFailureである');
        expect(result.isSuccess()).toBeTruthy();
        done();
      });
      it('リストのサイズが正しいこと', (done: jest.DoneCallback) => {
        if (result.isFailure()) fail('ResultがFailureである');
        expect(result.getValue()).toBeInstanceOf(Array);
        expect(result.getValue().length).toEqual(2);
        done();
      });
    });
  });
});
