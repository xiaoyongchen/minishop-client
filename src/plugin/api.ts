import axios, { AxiosRequestConfig } from "axios";
import { isArray, isObject, assign } from "lodash";
import API_MANAGER from "@/service";
import qs from "qs";
import { isFormData, assert } from "@/util/common";
import { API_DEFAULT_CONFIG } from "@/config/interceptor";
class MakeApi {
  public api: any;

  constructor(options: any) {
    this.api = {};
    this.apiBuilder(options);
  }

  public apiBuilder({
    sep = "|",
    config = {},
    mock = false,
    debug = false,
    mockBaseURL = "",
  }: {
    sep: string;
    config: any;
    mock: boolean;
    debug: boolean;
    mockBaseURL: string;
  }) {
    Object.keys(config).map((namespace: string) => {
      this._apiSingleBuilder({
        namespace,
        mock,
        mockBaseURL,
        sep,
        debug,
        config: config[namespace],
      });
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public _apiSingleBuilder({
    namespace = "",
    sep = "|",
    config = [],
    mock = false,
    debug = false,
    mockBaseURL = "",
  }) {
    config.forEach((api: any) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const {
        name,
        id,
        desc,
        params,
        method,
        path,
        mock: _mock,
        mockPath,
        ipTest,
        contentType,
      } = api;
      const { parentPath: appName } = api;
      const apiName = `${namespace}${sep}${name}`;
      const regExp = /^\//;
      // 这里覆盖baseURL
      const baseURL: string = API_DEFAULT_CONFIG.baseURL;
      let url = `${appName}/${path}`;
      if (regExp.test(path)) {
        url = path;
        // baseURL = "";
      }
      if (mock) {
        // 目前暂无mock接口
      }
      if (debug) {
        assert(name, `${url} :接口name属性不能为空`);
        assert(url.indexOf("/") === 0, `${url} :接口路径path，首字符应为/`);
      }

      Object.defineProperty(this.api, apiName, {
        value(outerParams: any = {}, outerOptions: any) {
          let _data = assign({}, params, outerParams);
          if (isArray(outerParams)) {
            _data = outerParams;
          }
          if (isFormData(outerParams)) {
            _data = outerParams;
          }
          const axiosConfig: AxiosRequestConfig = _normalize(
            assign(
              {
                url,
                id,
                desc,
                baseURL,
                method,
                contentType,
              },
              outerOptions
            ),
            _data
          );

          return axios(axiosConfig);
        },
      });
    });
  }
}

/**
 * 标准化axios config 参数
 * @param options 接口请求基本配置 {Object}
 * @param data
 * @private
 */
function _normalize(
  options: AxiosRequestConfig & { contentType: string },
  data: any
): AxiosRequestConfig {
  if (isObject(data)) {
    Object.keys(data).forEach((item) => {
      if (options.url && options.url.search(`:${item}`) > -1) {
        options.url = options.url.replace(
          `:${item}`,
          data[item as keyof typeof data]
        );
        delete data[item as keyof typeof data];
      }
    });
  }

  const method = options.method?.toLowerCase();
  if (method) {
    if (method === "post" || method === "patch" || method === "put") {
      // 是否序列化，看后端配置
      options.data = qs.stringify(data);
      // 如果配置是application/json
      if (options?.contentType === "application/json") {
        options.data = data;
      }
    } else {
      options.params = data;
    }
  }
  return options;
}

export default new MakeApi({
  config: API_MANAGER,
  ...API_DEFAULT_CONFIG,
}).api;
