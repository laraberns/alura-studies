import React, { useState } from 'react'
import Button from '../Button'
import style from './form.module.scss'
import { ITasks } from '../../types/ITasks'
import { v4 as uuidv4 } from 'uuid'

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>
}

function Form({ setTasks }: Props) {
    const [newTask, setNewTask] = useState({
        task: '',
        time: '00:00:00'
    })

    function addTask(e: React.FormEvent) {
        e.preventDefault()
        setTasks(oldTasks =>
            [
                ...oldTasks,
                {
                    ...newTask,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ])
        setNewTask({
            task: '',
            time: '00:00:00'
        })
    }
    return (
        <form className={style.novaTarefa} onSubmit={(e) => addTask(e)}>
            <div className={style.inputContainer}>
                <label htmlFor="task">Add new study</label>
                <input
                    type="text"
                    name='task' id='task'
                    value={newTask.task}
                    placeholder='What do you want to study?'
                    onChange={(event) => {setNewTask({ ...newTask, task: event.target.value }) }}
                    required />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">Time</label>
                <input
                    type="time"
                    step={1}
                    name='time'
                    id='time'
                    value={newTask.time}
                    onChange={(event) => {setNewTask({ ...newTask, time: event.target.value }) }}
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

export default Form
