import $api from "../api"

export default class AuthService {
    static async login(email, password) {
        return $api.post('/api/user/logout', { email, password })
    }

    static async registration(email, password) {
        return $api.post('/api/user/registration', { email, password })
    }

    static async logout() {
        return $api.get('/api/user/logout')
    }
}