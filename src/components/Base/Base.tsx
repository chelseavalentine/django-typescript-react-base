import * as React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './style.scss';

interface BaseProps extends React.Props<React.Component<any>> {
}

export default class Base extends React.PureComponent<BaseProps, {}> {
    public render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
