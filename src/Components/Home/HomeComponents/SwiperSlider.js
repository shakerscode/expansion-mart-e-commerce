import React  from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";


// import required modules
import { FreeMode, Autoplay } from "swiper";

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
          autoplay={{delay: 1000}}
          modules={[FreeMode, Autoplay]}
          className="md:hidden block"
        >
           {
            categories?.map((cat, i) => <SwiperSlide key={i} className=' p-4 flex flex-col items-center gap-1 rounded-lg bg-light shadow cursor-pointer'>
                <img src={cat?.image} alt="" className="second-slider-img"/>
                <h1 className="text-md">{cat.catTittle}</h1>
            </SwiperSlide>)
           }
          
        </Swiper>
      </>
    );
};

export default SwiperSlider;