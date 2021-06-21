import axios from './http'

const user = {
    signIn(params) {
        return axios.post('/user/login', params)
    },
    signUp(params) {
        return axios.post('/user/reister', params)
    }
}

export default user