import * as React from 'react';
import Base from '../../components/Base/Base';
import Input from '../../components/Input/Input';
import UsersController from '../../controllers/users';
import './style.scss';

export default class SignIn extends React.PureComponent<React.Props<React.Component<any>> , {}> {
    private username: Input;
    private password: Input;

    public render() {
        return (
            <Base>
                Sign in.
            </Base>
        );
    }

    private signIn(e: React.MouseEvent<HTMLElement>) {
        const userData = {
            username: this.username.getValue(),
            password: this.password.getValue(),
        };

        const onSuccess = (data) => window.location.pathname = '/';

        // TODO: display errors
        const onError = (res) => console.log(res);

        UsersController.signIn(userData, onSuccess, onError);
    }
}
