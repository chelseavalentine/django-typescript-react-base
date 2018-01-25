import Cookies from 'js-cookie';
import Request from 'superagent';
import { CONTENT_TYPE, REQUEST_HEADER } from '../utils/constants';

export default class RequestUtils {
    public static get(path: string, query: object, onSuccess: (data) => void, onError: (res) => void) {
        Request
            .get(path)
            .query(query)
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

    public static post(path: string, data, onSuccess: (data) => void, onError: (res) => void) {
        if (!data) {
            return;
        }

        Request
            .post(path)
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
}
