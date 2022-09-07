import { useTime, useTimer } from 'react-timer-hook';

const Timer = ({expiryTimestamp}) => {
    const {
        seconds,
        minutes,
        hours,
        days,
        ampm,
        isRunning,
        start,
        pause,
        resume,
        restart,
      } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return ( 
      <div style={{fontSize: '20px'}}>
        <span className='bg-secondary text-white text-[16px] rounded-md py-1 px-2'>{hours}</span><span className='px-2 text-secondary'>:</span><span className='bg-secondary text-white text-[16px] rounded-md py-1 px-2'>{minutes}</span><span className='px-2 text-secondary'>:</span><span className='bg-secondary text-white text-[16px] rounded-md py-1 px-2'>{seconds}</span><span>{ampm}</span>
      </div> 
  );
}
export default Timer