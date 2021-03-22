import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://us-central1-spotz-prod.cloudfunctions.net/function-sell-my-car/',
    headers: {
        "Content-Type": "application/json"
    }
})

http.interceptors.response.use((response) => {
    return response
}, (error) => {
    if (error.response.status === 401) {
        window.location = '/'
    }

    return Promise.reject(error)
})