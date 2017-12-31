import * as React from 'react';
import Base from '../../components/Base/Base';
import './style.scss';
import Input from '../../components/Input/Input';
import UsersController from '../../controllers/users';

export default class GuestHome extends React.PureComponent<React.Props<React.Component<any>>, {}> {
    private username: Input;
    private email: Input;
    private password: Input;

    public render() {
        return (
            <Base>
                Not signed in.
            </Base>
        );
    }

    private signUp() {
        const userData = {
            username: this.username.getValue(),
            email: this.email.getValue(),
            password: this.password.getValue(),
        };

        const onSuccess = data => {
            console.log(data);
            window.location.pathname = '/';
        };

        const onError = res => {
            console.log(res);
        };

        UsersController.signUp(userData, onSuccess, onError);
    }
}
