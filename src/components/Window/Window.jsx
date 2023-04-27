import React, { useState } from 'react'
import styles from './Window.module.css'
import Plus from '../Puls/Plus'
import { useEffect } from 'react'
const Counter = () => {
    const [opas, setOpas] = useState(false)
    const [hours, setHours] = useState(0)
    const [minets, setMinets] = useState(0)
    const [seconds, setSeconds] = useState(0)


    useEffect(() => {
        if (seconds >= 0 && opas === true) {
            setTimeout(() => {
            if (hours === 0 && seconds === 0 && minets === 0) {
                alert('stop')
            }else {
            if(minets === 0 && hours !== 0) {
                setHours(hours - 1)
                setMinets(59)
            }else {
                if (seconds === 0 && minets !== 0) {
                    setSeconds(59)
                    setMinets(minets - 1)
                    
                }else {
                    setSeconds(seconds - 1)
                }
            }
            }
            }, 1000);
        }
    })

return (
    <>
    {   opas === false ?
        <div className={styles.startWindow}>
            <div className={styles.hours}>
                <Plus data={hours} setData={setHours}/>
            </div>
        <div className={styles.slash}></div>
            <div className={styles.minets}>
                <Plus data={minets} setData={setMinets}/>
            </div>
        <div className={styles.slash}></div>
            <div className={styles.seconds}>
                <Plus data={seconds} setData={setSeconds}/>
            </div>
        <div className={styles.startBtn} onClick={() => setOpas(opas === true ? false : true)}>Start</div>
        </div>

        :

        <>
            <div className={styles.startWindow}>
                <div className={styles.counter}>
                {hours < 10 ? `0${hours}` : hours} : {minets < 10 ? `0${minets}` : minets} : {seconds < 10 ? `0${seconds}` : seconds}
                </div>
                <div className={styles.startBtn} onClick={() =>{
                        setOpas(opas === true ? false : true)
                        setHours(0)
                        setMinets(0)
                        setSeconds(0)
                    setTimeout(() => {
                        setHours(0)
                        setMinets(0)
                        setSeconds(0)
                    }, 900);
                }}>Stop</div>
            </div>
        </>
    }
    </>
)
}
export default Counter