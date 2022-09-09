 
import React from "react";
import heroOne from '../../assets/Slider/hero-1.png'
import heroTwo from '../../assets/Slider/hero-2.jpg'
import heroThree from '../../assets/Slider/hero-3.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

 
// import required modules
import { Pagination, Autoplay } from "swiper";
 
const Slider = () => {

    const slider = [
        {tittle: 'Get Amazing Fashion Products', subTittle: 'Choose the best outfit for yourself.', offer:'20%', image: heroTwo},
        {tittle: 'Feel the sports thrill like real', subTittle: 'Watch world cup football in super LED Tv.', offer:'35%', image: heroThree},
        {tittle: 'get YOUR DAILY NEEDS', subTittle: 'Choose healthy foods for you.', offer:'25%', image: heroOne},
    ]
    return (
        <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{delay: 2000}}
        modules={[Pagination, Autoplay]}
        className="h-full relative rounded-lg "
      >
        {
            slider?.map((slide, i) => <SwiperSlide key={i} >
                <img src={slide?.image} alt=""  className="rounded-lg swiper-img"/>
                <div className="absolute md:bottom-16 bottom-6 pl-7 py-2 min-h-fit md:w-auto w-[90%] md:py-5 md:px-7 rounded-l-full right-0  bg-bgLight text-start">
                    <p className="bg-secondary md:w-20 w-12 text-sm px-2  rounded-full text-center text-white md:text-2xl md:px-2 font-semibold">{slide?.offer}</p>
                    <h2 className="md:text-3xl text-mb md:py-1 uppercase font-bold text-white">{slide?.tittle}</h2>
                    <p className="md:text-md text-sm md:pl-3 text-light">{slide?.subTittle}</p>
                </div>
                </SwiperSlide> )
        } 
      </Swiper>
    </>
    );
};

export default Slider;
 
