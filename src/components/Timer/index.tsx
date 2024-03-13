import { useState } from "react"
import { timeToSeconds } from "../../common/utils/time"
import { ITasks } from "../../types/ITasks"
import Button from "../Button"
import Watch from "./Watch"
import style from './timer.module.css'

interface Props{
    selected: ITasks | undefined
}

function Timer({selected}: Props) {

    const [time, setTime] = useState<number>()

    if(selected?.time){
        setTime(timeToSeconds(selected?.time))
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Chose a task and start the timer</p>
            <p>{time}</p>
            <div className={style.relogioWrapper}>
                <Watch />
            </div>
            <Button>
                Start
            </Button>
        </div>
    )
}

export default Timer
