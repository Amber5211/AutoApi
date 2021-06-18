import axios from './http'

const user = {
    signIn(params) {
        return axios.post('/login', params)
    },
    signOut(params) {
        return axios.post('/loginout', params)
    }
}

export default user