import React from 'react';
import style from './botao.module.scss';

class Button extends React.Component<{ children: string, type?: 'button' | 'submit' }> {
    render() {
        const {type = 'button'} = this.props

        return (
            <button className={style.botao} type={type}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;
