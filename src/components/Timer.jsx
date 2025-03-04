import { useEffect, useRef } from "react"
import Countdown from "react-countdown"

const Counter = ({props}) => <span>{props.minutes + ' : ' + props.seconds}</span>

export const Timer = ({start, setGameOver}) => {

    const timerRef = useRef()

    const handleEnd = () => {
        setGameOver(true)
    }

    useEffect(() => {
        if(start){
            timerRef.current.start()
        }else{
            timerRef.current.pause()
        }
    }, [start])

    return (
        <div className='flex justify-center items-center bg-amber-600 col-span-4'>
            <h3 className="text-slate-600 font-semibold text-xl">
            <Countdown 
                date={Date.now() + 90000}
                renderer={props => <Counter props={props} />}
                onComplete={handleEnd}
                autoStart={false}
                ref={timerRef}
            /> Sec
            </h3>
            <span className="px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`h-8 w-8 text-white ${start ? 'animate-bounce' : ''}`}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </span>
            
        </div>
    )
}
