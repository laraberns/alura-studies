
import { timeToMinutesAndSeconds } from '../../../common/utils/time'
import style from './watch.module.css'

interface Props {
    time?: number
}

function Watch({ time = 0 }: Props) {

    const { minuteSet, minuteUnit, secondSet, secondUnit } = timeToMinutesAndSeconds(time)

    return (
        <>
            <span className={style.relogioNumero}>{minuteSet}</span>
            <span className={style.relogioNumero}>{minuteUnit}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secondSet}</span>
            <span className={style.relogioNumero}>{secondUnit}</span>
        </>
    )
}

export default Watch
