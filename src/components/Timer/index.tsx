import Button from "../Button"
import Watch from "./Watch"
import style from './timer.module.css'

function Timer() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Chose a task and start the timer</p>
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
