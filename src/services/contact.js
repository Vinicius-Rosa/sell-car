import { http } from './config'

export default {

    postMessage: payload => {
        return http.post('/contact', payload)
    },
}