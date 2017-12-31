import * as React from 'react';
import './style.scss';

interface FooterProps extends React.Props<React.Component<any>> {
}

export default class Footer extends React.PureComponent<FooterProps, {}> {
    public render() {
        return (
            <footer>
            </footer>
        );
    }
}
