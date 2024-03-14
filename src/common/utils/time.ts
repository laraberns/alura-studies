export function timeToSeconds(time: string){
    const [hours = "0", minutes = "0", seconds= "0"] = time.split(':')

    const hoursInSeconds = Number(hours) * 3600
    const minutesInSeconds = Number(minutes) * 60
    
    return hoursInSeconds + minutesInSeconds + Number(seconds)
}


export function timeToMinutesAndSeconds(time: number){
    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const [minuteSet, minuteUnit] = String(minutes).padStart(2, "0")
    const [secondSet, secondUnit] = String(seconds).padStart(2, "0")

    return { minuteSet, minuteUnit, secondSet, secondUnit };
}