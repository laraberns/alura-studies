import React from 'react';
import style from './botao.module.scss';

interface Props {
    children?: React.ReactNode,
    type?: 'button' | 'submit',
    onClick?: () => void
}

function Button({ children, type, onClick }: Props) {
    return (
        <button
            className={style.botao}
            type={type}
            onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
