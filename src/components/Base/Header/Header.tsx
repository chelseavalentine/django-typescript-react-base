import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

interface HeaderProps extends React.Props<React.Component<any>> {
}

export default class Header extends React.PureComponent<HeaderProps, {}> {
    public render() {
        return (
            <header className="header">
                <main className="header__main">
                    <NavLink
                        to="/"
                        className="header__homeLink a-adaptive">
                        Link to Home
                    </NavLink>

                    {this.renderNavigationLinks()}
                </main>
            </header>
        );
    }

    private renderNavigationLinks() {
        if (!this.isSignedIn()) {
            return (
                <NavLink
                    to="/login"
                    className="header__signIn a-adaptive">
                    Sign in
                </NavLink>
            );
        }
    }

    private isSignedIn() {
        return !!window.user;
    }
}
