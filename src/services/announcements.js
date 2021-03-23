import { http } from './config'

export default {

    listAnnouncements: ({ minPrice, maxPrice, minKm, maxKm }) => {
        return http.get(`/announcements?minPrice=${minPrice}&minKm=${minKm}&maxPrice=${maxPrice}&maxKm=${maxKm}`)
    },
}