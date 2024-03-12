import React from 'react'
import Button from '../Button'
import style from './form.module.scss'

class Form extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">Add new study</label>
                    <input
                        type="text"
                        name='task' id='task'
                        placeholder='What do you want to study?'
                        required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">Time</label>
                    <input
                        type="time"
                        step={1}
                        name='time'
                        id='time'
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button>
                    Add
                </Button>
            </form>
        )
    }
}

export default Form