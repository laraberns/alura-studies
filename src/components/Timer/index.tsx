import { useEffect, useState } from "react"
import { timeToSeconds } from "../../common/utils/time"
import { ITasks } from "../../types/ITasks"
import Button from "../Button"
import Watch from "./Watch"
import style from './timer.module.css'

interface Props {
    selected: ITasks | undefined,
    endTask: () => void
}

function Timer({ selected, endTask}: Props) {

    const [time, setTime] = useState<number>()

    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSeconds(selected.time))
        }
    }, [selected])

    function regressive(time: number = 0) {
        setTimeout(() => {
            if (time > 0) {
                setTime(time - 1)
                return regressive(time - 1)
            }
            endTask()
        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Choose a task and start the timer</p>
            <div className={style.relogioWrapper}>
                <Watch time={time} />
            </div>
            <Button
                onClick={() => regressive(time)}>
                Start
            </Button>
        </div>
    )
}

export default Timer
