import {get,post} from '@/axios/request.js'

//登录接口
export function user_login(data, other) {
    return post('/login/userLogin', data, other)
}
//获取用户信息接口
export function get_user(data, other) {
    return post('/login/getUser', data, other)
}
