import { API_URL } from '../utils/constants';
import User from '../models/User';
import RequestUtils from '../utils/RequestUtils';

export default class UsersController {
    static signIn(data: User, onSuccess: (data) => void, onError: (res) => void) {
        RequestUtils.post(API_URL.LOG_IN, data, onSuccess, onError);
    }

    static signUp(data: User, onSuccess: (data) => void, onError: (res) => void) {
        RequestUtils.post(API_URL.SIGN_UP, data, onSuccess, onError);
    }

    static checkUsername(username: string, onSuccess: (data) => void, onError: (res) => void) {
        RequestUtils.get(API_URL.LOG_IN, { username: username }, onSuccess, onError);
    }
}
