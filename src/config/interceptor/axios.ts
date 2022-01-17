import {
  CONSOLE_REQUEST_ENABLE,
  CONSOLE_RESPONSE_ENABLE,
  ERROR_LOGIN_CODE,
} from "./index";
export function requestSuccessFunc(requestObj: any) {
  // showLoading在Api，其他参数设置
  const { showLoading = true } = requestObj ?? {};
  console.log(showLoading);

  CONSOLE_REQUEST_ENABLE &&
    console.log(
      `%c id: ${requestObj.id}`,
      "color: #f00; requestInterceptorFunc",
      `url: ${requestObj.url}`,
      requestObj.method
    );
  return requestObj;
}

export function requestFailFunc(requestError: any) {
  // Toast.clear();
  CONSOLE_REQUEST_ENABLE &&
    console.info(
      "requestInterceptorFunc",
      `url: ${requestError.url}`,
      requestError
    );
  return Promise.reject(requestError);
}

export function responseSuccessFunc(responseObj: any) {
  CONSOLE_RESPONSE_ENABLE &&
    console.info("响应返回成功", `url: ${responseObj.config.url}`, responseObj);
  // Toast.clear();
  if (responseObj.status !== 200) {
    (responseObj.data?.msg || responseObj?.statusText) &&
      Toast(responseObj.data?.msg || responseObj?.statusText);
    return Promise.reject(responseObj.data);
  }
  if (responseObj.data.code !== 0) {
    // responseObj.data?.msg && Toast(responseObj.data?.msg);
    // token异常需要重定向
    if (ERROR_LOGIN_CODE[responseObj.data.code]) {
      // 重定向到login
      return Promise.reject(responseObj.data);
    }

    return Promise.reject(responseObj.data);
  }

  return responseObj.data;
}

export function responseFailFunc(responseError: any) {
  // 响应失败，可根据 responseError.message 和 responseError.response.status 来做监控处理
  // responseError.msg && Toast({
  // 	message: responseError?.msg,
  // });

  // const { status } = responseError.response;
  // const responseObj = responseError.response;
  // const resData = responseObj.data;
  // if (status === 404) {
  // 是否需要有个错误路由页面
  // window.GLOBAL.vbus.$emit('router', {
  //   name: '404'
  // });
  // }

  return Promise.reject(responseError);
}
