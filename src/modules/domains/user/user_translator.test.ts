import axios, { AxiosResponse } from 'axios';
import { ResponseError } from '../response_error';
import { ResponseHandlerImpl } from '../response_handler';
import { Result } from '../result';
import { User } from './user';
import { UserTranslator, UserTranslatorImpl } from './user_translator';

let translator: UserTranslator;

describe('HolidayのTranslatorテスト', () => {
  beforeAll(() => {
    const responseHandler = new ResponseHandlerImpl();
    translator = new UserTranslatorImpl(responseHandler);
  });

  describe('APIのレスポンスをHolidayの構造体リストに変換するテスト', () => {
    let result: Result<User[], ResponseError>;
    beforeAll(async () => {
      const userList = [
        {
          id: 1,
          company_id: 1,
          company_name: "testCompanyName",
          email: "test@example.com",
          name: "testName",
          address: "testAddress",
          birthday: "1995-3-10",
        },
        {
          id: 2,
          company_id: 2,
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

    it('resultがSuccessでリストのサイズが正しいこと', (done: jest.DoneCallback) => {
      if (result.isFailure()) fail('ResultがFailureである');
      expect(result.isSuccess()).toBeTruthy();
      expect(result.getValue()).toBeInstanceOf(Array);
      expect(result.getValue().length).toEqual(2);
      done();
    });

    it('誕生日が日付になっていること', (done: jest.DoneCallback) => {
      if (result.isFailure()) fail('ResultがFailureである');
      expect(result.getValue()[0].birthday).toEqual(new Date('1995-03-10T00:00:00'));
      expect(result.getValue()[1].birthday).toEqual(new Date('1995-10-15T09:00:00'));
      done();
    });
  });
});
