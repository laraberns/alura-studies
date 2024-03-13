import { ITasks } from '../../../types/ITasks'
import style from './item.module.scss'

interface Props extends ITasks {
    selectTask: (selectTask: ITasks) => void
}

function Item({ task, time, completed, id, selected, selectTask }: Props) {
    
    return (
        <li 
        className={`${style.item} ${selected ? style.itemSelecionado : ''}`}
            onClick={() => selectTask({ task, time, completed, id, selected })}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}

export default Item
