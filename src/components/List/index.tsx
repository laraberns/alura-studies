import style from './list.module.scss'
import Item from './Item'

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
        <aside className={style.listaTarefas}>
            <h2>Studies of the day</h2>
            <ul>
                {tasks.map((task, index) => (
                    <Item
                        key={index}
                        {...task}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List
