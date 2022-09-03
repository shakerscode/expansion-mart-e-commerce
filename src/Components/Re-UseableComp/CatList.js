import React from 'react';

const CatList = ({list, handleCat}) => {
    return (
        <li 
        onClick={() => handleCat(list)}
        className='cursor-pointer hover:text-secondary hover:bg-light hover:rounded-md px-5 py-1 transition-all ease-in-out duration-150'>{list}</li>
    );
};

export default CatList;