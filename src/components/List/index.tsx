import style from './list.module.scss'
import Item from './Item'
import { ITasks } from '../../types/ITasks'

function List({ tasks }: { tasks: ITasks[] }) {

    return (
        <aside className={style.listaTarefas}>
            <h2>
                Studies of the day
            </h2>
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
