// 当前宿主平台 兼容多平台应该通过一定特定函数来取得
export const HOST_PLATFORM = "APP";

export const NODE_ENV: string = process.env.NODE_ENV || "production";

// 是否强制所有请求访问本地MOCK，每个请求也可以单独控制是否请求MOCK
export const AJAX_LOCALLY_ENABLE = false;

// 是否开启监控
export const MONITOR_ENABLE = true;

// 路由默认配置，路由表并不从此引入
export const ROUTER_DEFAULT_CONFIG = {
  waitForData: true,
  transitionOnLoad: true,
};

// axios 默认配置
export const AXIOS_DEFAULT_CONFIG = {
  timeout: 20000,
  maxContentLength: 2000,
  withCredentials: false,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": '"application/json; charset=utf-8',
    "Accept-Language": "en-US",
  },
};

// vuex 默认配置
export const VUEX_DEFAULT_CONFIG = {
  strict: process.env.NODE_ENV !== "production",
};
// API 默认配置
export const API_DEFAULT_CONFIG = {
  mockBaseURL: "https://test/api/mock",
  baseURL: process.env.VUE_APP_DOMAIN,
  mock: process.env.NODE_ENV !== "production",
  debug: false,
  sep: "/",
  ipTestBaseUrl: "http://10.29.194.222:8080",
};

// CONST 默认配置
export const CONST_DEFAULT_CONFIG = {
  sep: "/",
};

// 业务相关配置

// 登录错误码
export const ERROR_LOGIN_CODE: Record<number, string> = {
  8: "Token为空",
  9: "Token过期,请重新登录",
  10: "Token不正确",
  11: "用户未登录",
};

// 开发配置
export const CONSOLE_REQUEST_ENABLE = false; // 开启请求参数打印
export const CONSOLE_RESPONSE_ENABLE = false; // 开启响应参数打印
export const CONSOLE_MONITOR_ENABLE = false; // 监控记录打印
