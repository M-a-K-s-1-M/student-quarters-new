import $api from "../api/index";

export default class AuthService {
    static async login(email, password) {
        return $api.post('/api/users/login', { email, password })
    }

    static async registration(email, password) {
        return $api.post('/api/users/registration', { email, password })
    }

    static async logout() {
        return $api.get('/api/users/logout')
    }
}