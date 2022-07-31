import axios, { AxiosResponse } from 'axios';
import { ResponseError } from '../response_error';
import { ResponseHandlerImpl } from '../response_handler';
import { Result } from '../result';
import { User } from './user';
import { UserTranslator, UserTranslatorImpl } from './user_translator';

let translator: UserTranslator;

describe('UserのTranslatorテスト', () => {
  beforeAll(() => {
    const responseHandler = new ResponseHandlerImpl();
    translator = new UserTranslatorImpl(responseHandler);
  });

  describe('APIのレスポンスをUserの構造体リストに変換するテスト', () => {
    let result: Result<User[], ResponseError>;
    describe('正常系', () => {
      beforeAll(async () => {
        const userList = [
          {
            id: 1,
            company_id: 3,
            company_name: "testCompanyName",
            email: "test@example.com",
            name: "testName",
            address: "testAddress",
            birthday: "1995-03-10",
          },
          {
            id: 2,
            company_id: 4,
            company_name: "testCompanyName2",
            email: "test2@example.com",
            name: "testName2",
            address: "testAddress2",
            birthday: "1995-10-15",
          }
        ];
        const response: AxiosResponse = {
          data: userList,
          status: 200,
          statusText: '',
          headers: axios.defaults.headers,
          config: {},
        };
        result = await translator.translateResponseToList(response);
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

      it('Idが数字になっていること', (done: jest.DoneCallback) => {
        if (result.isFailure()) fail('ResultがFailureである');
        expect(result.getValue()[0].id).toEqual(1);
        expect(result.getValue()[1].id).toEqual(2);
        done();
      });

      it('CompanyIdが数字になっていること', (done: jest.DoneCallback) => {
        if (result.isFailure()) fail('ResultがFailureである');
        expect(result.getValue()[0].company_id).toEqual(3);
        expect(result.getValue()[1].company_id).toEqual(4);
        done();
      });

      it('誕生日が日付になっていること', (done: jest.DoneCallback) => {
        if (result.isFailure()) fail('ResultがFailureである');
        expect(result.getValue()[0].birthday).toEqual(new Date('1995-03-10T09:00:00+09:00'));
        expect(result.getValue()[1].birthday).toEqual(new Date('1995-10-15T09:00:00+09:00'));
        done();
      });
    });
    describe('異常系', () => {
      beforeAll(async () => {
        const response: AxiosResponse = {
          data: [],
          status: 429,
          statusText: '',
          headers: axios.defaults.headers,
          config: {},
        };
        result = await translator.translateResponseToList(response);
      });
      it('結果が失敗であること', (done: jest.DoneCallback) => {
        expect(result.isFailure()).toBeTruthy();
        done();
      });
    })
  });
});
