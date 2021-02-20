import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 15000
})


// 请求拦截器
service.interceptors.request.use(
  config => {
    config.headers.toekn = ''
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use((res) => {
  // 对响应数据做点什么
  return JSON.parse(Encrypt(res.data));
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default service
