import * as React from 'react';
import Base from '../../components/Base/Base';
import './style.scss';

interface UserHomeState {
    example?: string;
}

export default class UserHome extends React.PureComponent<React.Props<React.Component<any>>, UserHomeState> {
    constructor(props: React.Props<React.Component<any>>) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <Base>
                Signed in.
            </Base>
        );
    }
}
