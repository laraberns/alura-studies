import React from 'react'
import style from './botao.module.scss'

class Button extends React.Component {
    render() {
        return (
            <button className={style.botao}>
                Add
            </button>
        )
    }
}

export default Button