import axios from 'axios';
import React, { useEffect, useState } from 'react';
// React Rating
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import SectionTile from './sectionTile';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    // const [rating, setRating] = useState(0);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const { data } = await axios.get('reviews.json')
        setReviews(data);
    }
    return (
        <div className='mb-24'>
            <div>
                <SectionTile subtitle={'What Our Clients Say'} title={'TESTIMONIALS'}></SectionTile>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='flex flex-col justify-center items-center'>

                            <div>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                            </div>
                            <p className='w-9/12 mx-auto text-center'>{review.details}</p>
                            <h2 className='text-2xl font-bold text-orange-400 text-center mt-2 mb-6'>{review.name}</h2>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Reviews;