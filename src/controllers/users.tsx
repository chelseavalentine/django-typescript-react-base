import Cookies from 'js-cookie';
import Request from 'superagent';
import { API_URL, REQUEST_HEADER, CONTENT_TYPE } from '../utils/constants';
import User from '../models/User';

export default class UsersController {
    static signIn(data: User, onSuccess: (data) => void, onError: (res) => void) {
        Request
            .post(API_URL.LOG_IN)
            .send(data)
            .set(REQUEST_HEADER.ACCEPT, CONTENT_TYPE.JSON)
            .set(REQUEST_HEADER.CSRF, Cookies.get('csrftoken'))
            .end((err, res) => {
                if (res && res.ok) {
                    if (onSuccess) {
                        onSuccess(res.body);
                    }
                } else {
                    if (onError) {
                        onError(res);
                    }
                }
            });
    }

    static signUp(data: User, onSuccess: (data) => void, onError: (res) => void) {
        Request
            .post(API_URL.SIGN_UP)
            .send(data)
            .set(REQUEST_HEADER.ACCEPT, CONTENT_TYPE.JSON)
            .set(REQUEST_HEADER.CSRF, Cookies.get('csrftoken'))
            .end((err, res) => {
                if (res && res.ok) {
                    if (onSuccess) {
                        onSuccess(res.body);
                    }
                } else {
                    if (onError) {
                        onError(res);
                    }
                }
            });
    }

    static checkUsername(username: string, onSuccess: (data) => void, onError: (res) => void) {
        Request
            .get(API_URL.LOG_IN)
            .query({ username: username })
            .end((err, res) => {
                if (res && res.ok) {
                    if (onSuccess) {
                        onSuccess(res.body);
                    }
                } else {
                    if (onError) {
                        onError(res);
                    }
                }
            });
    }
}
