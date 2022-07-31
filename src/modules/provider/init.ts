import { HttpClient } from "../domains/http_client";
import { ResponseHandlerImpl } from "../domains/response_handler";

export const http_client = new HttpClient();
export const responseHandlerImpl = new ResponseHandlerImpl();
