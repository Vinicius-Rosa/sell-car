// import { http } from './config'
import mock from './mock.api'

export default {

    listAnnouncements: () => {
        // return http.get(`announcements/`)
        return mock();
    },
}