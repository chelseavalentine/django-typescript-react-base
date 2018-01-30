import User from '../models/User';
import { API_URL } from '../utils/constants';
import RequestUtils from '../utils/RequestUtils';

export default class UsersController {
    public static signIn(data: User, onSuccess: (data) => void, onError: (res) => void) {
        RequestUtils.post(API_URL.LOG_IN, data, onSuccess, onError);
    }

    public static signUp(data: User, onSuccess: (data) => void, onError: (res) => void) {
        RequestUtils.post(API_URL.SIGN_UP, data, onSuccess, onError);
    }

    public static checkUsername(username: string, onSuccess: (data) => void, onError: (res) => void) {
        RequestUtils.get(API_URL.LOG_IN, { username }, onSuccess, onError);
    }
}
