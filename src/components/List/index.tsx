import style from './list.module.scss'
import Item from './Item'
import { ITasks } from '../../types/ITasks'

interface Props {
    tasks: ITasks[],
    selectTask: (selectTask: ITasks) => void
}

function List({ tasks, selectTask }: Props) {

    return (
        <aside className={style.listaTarefas}>
            <h2>
                Studies of the day
            </h2>
            <ul>
                {tasks.map((task) => (
                    <Item
                        selectTask={selectTask}
                        key={task.id}
                        {...task}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List
