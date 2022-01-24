// 登录接口配置
export default [
  {
    name: "password",
    method: "POST",
    desc: "账号密码登录",
    path: "/loginApp",
    contentType: "application/json",
    mock: false,
    id: 1000,
  },
  {
    name: "wechat",
    method: "GET",
    desc: "账号密码登录",
    path: "/wxLogin",
    mock: false,
    id: 1000,
  },
];
