import * as React from 'react';
import GuestHome from '../GuestHome/GuestHome';
import UserHome from '../UserHome/UserHome';

declare global {
    interface Window {
        user: object;
    }
}

export default class Home extends React.PureComponent {
    public render() {
        return this.isLoggedIn() ? <UserHome /> : <GuestHome />;
    }

    private isLoggedIn() {
        return !!window.user;
    }
}
