import React from 'react';

const Ads = ({url}) => {
    return (
        <div className='w-[80%] mx-auto my-8'>
            <img src={url} alt="" className='w-full h-auto'/>
        </div>
    );
};

export default Ads;