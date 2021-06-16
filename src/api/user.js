import axios from './http'

const user = {
    signIn(params) {
        return axios.post('/', params)
    }
}

export default user