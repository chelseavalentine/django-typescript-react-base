import ClassNames from 'classnames';
import * as React from 'react';
import { KEY_CODE } from '../../utils/constants';
import './style.scss';

export interface InputProps extends React.Props<React.Component<any>> {
    className?: string;
    fieldClassName?: string;
    disabled?: boolean;
    focused?: boolean;
    label?: string;
    name?: string;
    onfocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onblur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onenter?: (e: React.KeyboardEvent<HTMLInputElement>, val: string) => void;
    onkeyup?: (e: React.KeyboardEvent<HTMLInputElement>, val: string) => void;
    placeholder?: string;
    type?: string;
    value?: string;
    note?: string;
}

export default class Input extends React.PureComponent<InputProps, {}> {
    protected input: HTMLInputElement;

    public componentDidMount() {
        if (this.props.disabled) {
            this.disable();
        }
    }

    public disable = () => {
        this.input.disabled = true;
    }

    public enable = () => {
        this.input.disabled = false;
    }

    public getValue = () => {
        return this.input.value;
    }

    public getName = () => {
        return this.input.name;
    }

    public render() {
        const className = ClassNames({
            'input': true,
            [`${this.props.className}`]: this.props.className,
            'input-disabled': this.props.disabled,
        });

        return (
            <div className={className}>
                {this.renderLabel()}
                {this.renderInput()}
                {this.renderNote()}
            </div>
        );
    }

    private renderLabel() {
        if (!this.props.label) {
            return;
        }

        return (
            <label className="input__label">
                {this.props.label}
            </label>
        );
    }

    private renderInput() {
        const className = ClassNames({
            input__field: true,
            [`${this.props.fieldClassName}`]: this.props.fieldClassName,
        });

        return (
            <input
                className={className}
                ref={(ref) => this.input = ref}
                defaultValue={this.props.value}
                name={this.props.name}
                placeholder={this.props.placeholder}
                type={this.props.type}
                onKeyUp={this.props.onkeyup || this.props.onenter ? this.onKeyUp : null}
                onFocus={this.props.onfocus}
                onBlur={this.props.onblur}
                autoFocus={!!this.props.focused} />
        );
    }

    private renderNote() {
        if (!this.props.note) {
            return null;
        }

        return (
            <p className="input__note">{this.props.note}</p>
        );
    }

    private onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (this.props.onkeyup) {
            this.props.onkeyup(e, this.getValue());
        }

        if (this.props.onenter && e.keyCode === KEY_CODE.ENTER) {
            this.props.onenter(e, this.getValue());
        }
    }
}
