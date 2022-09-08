import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Pagination } from "swiper";

const SwiperSlider = ({categories}) => {
    return (
        <>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, ]}
          className="md:hidden"
        >
           {
            categories?.map((cat, i) => <SwiperSlide key={i} className='py-5 px-5 gap-4 rounded-lg bg-light shadow cursor-pointer'>
                <cat.catIcon className='text-3xl'/>
                <h1 className="text-xl">{cat.catTittle}</h1>
            </SwiperSlide>)
           }
          
        </Swiper>
      </>
    );
};

export default SwiperSlider;