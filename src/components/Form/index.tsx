import React from 'react'
import Button from '../Button'
import style from './form.module.scss'
import { ITasks } from '../../types/ITasks'
import { v4 as uuidv4 } from 'uuid'

class Form extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>
}> {
    state = {
        task: '',
        time: '00:00:00'
    }

    addTask(e: React.FormEvent) {
        e.preventDefault()
        this.props.setTasks(oldTasks =>
            [
                ...oldTasks,
                {
                    ...this.state,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ])
        this.setState({
            task: '',
            time: '00:00:00'
        })
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">Add new study</label>
                    <input
                        type="text"
                        name='task' id='task'
                        value={this.state.task}
                        placeholder='What do you want to study?'
                        onChange={(event) => { this.setState({ ...this.state, task: event.target.value }) }}
                        required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">Time</label>
                    <input
                        type="time"
                        step={1}
                        name='time'
                        id='time'
                        value={this.state.time}
                        onChange={(event) => { this.setState({ ...this.state, time: event.target.value }) }}
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button type="submit">
                    Add
                </Button>
            </form>
        )
    }
}

export default Form

function setTasks(arg0: () => void) {
    throw new Error('Function not implemented.')
}
