import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// slider images
import slide1 from '../assets/home/slide1.jpg'
import slide2 from '../assets/home/slide2.jpg'
import slide3 from '../assets/home/slide3.jpg'
import slide4 from '../assets/home/slide4.jpg'
import slide5 from '../assets/home/slide5.jpg'
const CategorySwiper = () => {
    return (
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h1 className='text-3xl font-semibold text-white -mt-16 text-center uppercase'>Salad</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h1 className='text-3xl font-semibold text-white -mt-16 text-center uppercase'>Pizza</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h1 className='text-3xl font-semibold text-white -mt-16 text-center uppercase'>Soup</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h1 className='text-3xl font-semibold text-white -mt-16 text-center uppercase'>Desert</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h1 className='text-3xl font-semibold text-white -mt-16 text-center uppercase'>Salad</h1>
        </SwiperSlide>
       
      </Swiper>
    );
};

export default CategorySwiper;