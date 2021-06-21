import axios from 'axios'
import { config } from 'shelljs'

var instance = axios.create({
        headers: {
            'Content-Type': 'application/json',
        },
        baseURL: ""

    })
    // 设置请求接口的时候请求头携带token
instance.interceptors.request.use(config => {
        if (localStorage.getItem('token')) {
            config.headers.common['token'] = localStorage.getItem('token')
        }
        return config
    })
    // 对接口的响应进行处理，返回的code正确的，返回resolve，调用then回调函数中onfullfilled参数对应内容；不正确返回reject，调用then回调函数中onrejected参数对应内容
instance.interceptors.response.use(res => {
    if (res.data.resultCode == 1) {
        return Promise.resolve(res)
    } else {
        return Promise.reject(res)
    }
})
export default instance