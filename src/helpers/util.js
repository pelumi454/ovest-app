import { merge } from "lodash";

import { LOGOUT_USER } from "../store/user/user.constants";
import { Dispatcher } from "./dipatcher";
import { HttpException } from "./exceptions";

export class Util {
  static handleAxiosError(error, url) {
    const { data = {}, status } = error.response;
    const message = data.message || "";

    if (url !== "/login" && status === 401) {
      Dispatcher.$dispatch({ type: LOGOUT_USER });
    }

    const exception = new HttpException(message, status, data.errors);

    throw exception;
  }

  static parseQueryString(queryString = "") {
    queryString = queryString.replace("?", "");
    const keyValue = queryString.split("&");

    return keyValue.reduce((acc, cur) => {
      const [key, value] = cur.split("=");

      return merge(acc, { [key]: decodeURIComponent(value) });
    }, {});
  }

  static dispatchLogoutUser() {
    Dispatcher.$dispatch({ type: LOGOUT_USER });
  }
}
