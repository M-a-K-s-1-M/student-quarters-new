import $api from "./index";

export default class UserService {
    static fetchUsers() {
        return $api.get('/users')
    }
}