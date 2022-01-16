import axios from 'axios';
// import md5 from "js-md5"
import {
    Message,
    MessageBox
} from 'element-ui';
// import Cookies from 'js-cookie'
//路由配置
import router from '@/router'



// import qs from 'qs'

const service = axios.create({
    baseURL: "http://api.szdbtest.zksj.com.cn/guarantee",
    timeout: 120000
})
service.interceptors.request.use(
    config => {
        config.headers = {
            "Authorization": process.env.VUE_APP_down_token_API
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)
service.interceptors.response.use(
    response => {
        if (response.status === 200) { // 如果状态码是200  会执行.then的第一个函数
            return Promise.resolve(response.data)
        } else { //除了200 在2xx的范围 会执行.then的第二个函数  Promise.reject(res)  1
            return Promise.reject(response)
        }
    },
    err => {
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = '错误请求'
                    break;
                case 401:
                   
                    break;
                case 403:
                    err.message = '拒绝访问'
                    break;
                case 404:
                    err.message = '请求错误,未找到该资源'
                    break;
                case 405:
                    err.message = '请求方法未允许'
                    break;
                case 408:
                    err.message = '请求超时'
                    break;
                case 500:
                    err.message = '服务器端出错'
                    break;
                case 501:
                    err.message = '网络未实现'
                    break;
                case 502:
                    err.message = '网络错误'
                    break;
                case 503:
                    err.message = '服务不可用'
                    break;
                case 504:
                    err.message = '网络超时'
                    break;
                case 505:
                    err.message = 'http版本不支持该请求'
                    break;
                default:
                    err.message = `连接错误${err.response.status}`
            }
        } else {
            err.message = "连接到服务器失败"
        }
        Message({
            message: err.message,
            type: 'error',
            duration: 3 * 1000
        })
        return Promise.reject(err.response);
    }
)

export default service;
