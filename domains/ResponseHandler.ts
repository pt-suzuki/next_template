import { AxiosResponse } from "axios";
import { Result, initResult } from "./Result";
import { Response, initResponse } from "./Response";

export interface ResponseHandler {
  translateAxiosResponseToResponse<T>(response: AxiosResponse): Response<T>;
  translateAxiosResponseToListResponse<T>(
    response: AxiosResponse
  ): Response<Result<T>>;
}

export class ResponseHandlerImpl implements ResponseHandler {
  translateAxiosResponseToResponse<T>(response: AxiosResponse): Response<T> {
    const result: Response<T> = initResponse<T>(response.data.result_data);
    result.status = response.data.result_status;
    result.status_code = response.status;
    result.error = response.status !== 200;
    result.message = response.data.message;
    return result;
  }

  translateAxiosResponseToListResponse<T>(
    response: AxiosResponse
  ): Response<Result<T>> {
    const result: Response<Result<T>> = initResponse<Result<T>>(
      initResult<T>()
    );
    result.status = response.data.result_status;
    result.status_code = response.status;
    result.error = response.status !== 200;
    result.message = response.data.message;
    result.body = response.data.result_data;
    result.body.pageNation = this.getPageNation<T>(result.body);
    result.body.total_count = response.data.result_data.total;
    return result;
  }

  private getPageNation<T>(result: Result<T>): number[] {
    const pageNation = [];
    let start_page = result.current_page - 2;
    if (start_page <= 0) {
      start_page = 1;
    }
    let end_page = start_page + 4;
    if (result.last_page < end_page) {
      end_page = result.last_page;
    }

    for (let i = start_page; i <= end_page; i += 1) {
      pageNation.push(i);
    }
    return pageNation;
  }
}
