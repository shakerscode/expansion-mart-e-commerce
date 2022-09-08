import { useTime } from 'react-timer-hook';

const Timer = ( ) => {
  const {
    seconds,
    minutes,
    hours, 
    ampm
  } = useTime({ format: '12-hour'}); 
  if(hours === '12:00am'){
      console.log('its time to leave');
  }
  return ( 
      <div className='md:text-[16px] text-[13px]'>
        <span className='bg-secondary text-white rounded-md py-1 px-2'>{hours === '12 : 00 am' ? '00' : hours}</span><span className='px-2 text-secondary'>:</span><span className='bg-secondary text-white rounded-md py-1 px-2'>{minutes === '12 : 00 am' ? '00' : minutes}</span><span className='px-2 text-secondary'>:</span><span className='bg-secondary text-white rounded-md py-1 px-2'>{ seconds === '12 : 00 am' ? '00' : seconds}</span> 
      </div> 
  );
}
export default Timer