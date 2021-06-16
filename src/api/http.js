import axios from 'axios'

var instance = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
    baseURL: "127.0.0.1:80"

})

export default instance