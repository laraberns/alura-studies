import React from 'react'

function List() {
    const tasks = [{
        task: 'React',
        time: '01:00:00'
    },
    {
        task: 'JavaScript',
        time: '01:00:00'
    },
    {
        task: 'TypeScript',
        time: '01:30:00'
    }]
    return (
        <div>
            <aside>
                <h2>Studies of the day</h2>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <h3>{task.task}</h3>
                            <span>{task.time}</span>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    )
}

export default List
