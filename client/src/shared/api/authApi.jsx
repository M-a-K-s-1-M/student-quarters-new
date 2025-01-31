import axios from "axios";
import AuthService from "../service/AuthService"
import { API_URL } from './index';

export const registration = async (email, password) => {
    try {
        const response = await AuthService.registration(email, password);
        localStorage.setItem('token', response.data.accessToken);
    } catch (e) {
        console.log(e.response?.data?.message);
    }
}

export const login = async (email, password) => {
    try {
        const response = await AuthService.login(email, password);
        localStorage.setItem('token', response.data.accessToken);
    } catch (e) {
        console.log(e.response?.data?.message);
    }
}

export const logout = async () => {
    try {
        await AuthService.logout();
        localStorage.removeItem('token');
    } catch (e) {
        console.log(e.response?.data?.message);
    }
}


export const checkAuth = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/user/refresh`, { withCredentials: true })

        localStorage.setItem('token', response.data.accessToken);

    } catch (e) {
        console.log(e);
    }
}