import { BaseURL } from './config';
import axios from 'axios';
import store from '../store'
const axiosService = axios.create({
  //  baseURL:BaseURL,
    timeout: 4000,
})
//cookies缓存
//axiosService.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

//请求
axiosService.interceptors.request.use(beforeRequest, requestError)
//响应
axiosService.interceptors.response.use(afterResponse, responseError)

//请求处理
function beforeRequest(config: any) {
    if(config.params) ContentHeaders(config)
   
    console.log(config)
    return config;
}
//响应处理
function afterResponse(response: any) {
    switch (response.status) {
        case 200:
//console.log('请求成功。。。',response.data)
            break;
        default: '';
    }
    return Promise.resolve(response.data);
}
//请求设置
function ContentHeaders(obj: any) {
    const contentType = obj.params.headers !== 'undefined' ? obj.params.headers : ''
    console.log(obj.method)
    switch (obj.method) {
        case 'get':
            obj.headers.get['Content-Type'] = contentType || 'application/json;charset=utf-8';
            break;
        case 'post':
            obj.headers.post['Content-Type'] = contentType || 'application/json;charset=utf-8';
            break;
        case 'put':
            obj.headers.put['Content-Type'] = contentType || 'application/json;charset=utf-8';
            break;
        case 'delete':
            obj.headers.delete['Content-Type'] = contentType || 'application/json;charset=utf-8';
            break;
        default: ''
    }
    console.log(store.state)
    obj.headers.common.token = store.state.token || sessionStorage.getItem('token') || localStorage.getItem('token')
}
//错误处理
function requestError(error: any) {
    Promise.reject(error)
}
function responseError(error: any) {
    Promise.reject(error)
}
export default axiosService;