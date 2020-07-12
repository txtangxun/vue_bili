import axios from 'axios'
// axios.defaults.headers.post['Content-type'] = 'text/plain'
const http = axios.create({
    baseURL: "http://112.74.99.5:3000/web/api"
})

export default http