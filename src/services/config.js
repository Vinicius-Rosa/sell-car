import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://us-central1-spotz-prod.cloudfunctions.net/function-sell-my-car/',
    headers: {
        "Content-Type": "application/json"
    }
})