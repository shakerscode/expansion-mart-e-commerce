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
          slidesPerView={2}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, ]}
          className="md:hidden block"
        >
           {
            categories?.map((cat, i) => <SwiperSlide key={i} className=' p-4 flex flex-col items-center gap-2 rounded-lg bg-light shadow cursor-pointer'>
                <img src={cat?.image} alt="" className="w-8 h-8"/>
                <h1 className="text-md">{cat.catTittle}</h1>
            </SwiperSlide>)
           }
          
        </Swiper>
      </>
    );
};

export default SwiperSlider;