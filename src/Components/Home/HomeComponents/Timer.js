import { useTime } from 'react-timer-hook';

const Timer = ( ) => {
  const {
    seconds,
    minutes,
    hours, 
  } = useTime({ format: '24-hour'}); 
  return ( 
      <div>
        <span className='bg-secondary text-white text-[16px] rounded-md py-1 px-2'>{hours}</span><span className='px-2 text-secondary'>:</span><span className='bg-secondary text-white text-[16px] rounded-md py-1 px-2'>{minutes}</span><span className='px-2 text-secondary'>:</span><span className='bg-secondary text-white text-[16px] rounded-md py-1 px-2'>{seconds}</span> 
      </div> 
  );
}
export default Timer