
import { Swiper, SwiperSlide } from 'swiper/react';
import { Avatar } from 'flowbite-react';
import PicAvatar from "../assets/Avatar1.jpg"
import ThirdPic from "../assets/thirdPic.png.jpg"
import ForthPic from "../assets/forthPic.png.jpg"
import FifthPic from "../assets/fifthPic.png.jpg"
import SecondPic from "../assets/secondPic.png.jpg"
import 'swiper/css';
import 'swiper/css/pagination';

import { FaStar } from "react-icons/fa6"
import { Pagination } from 'swiper/modules';

const Review = () => {
    return (
        <div className="my-12 px-4 lg:px-24">
            <h2 className="text-5xl font-bold text-center mb-10 leading-snug">Our Customers</h2>

            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/* text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                I appreciate the comprehensive information provided on your website. It's clear, concise, and helps me make informed decisions about my healthcare needs.
                                </p>
                                <Avatar alt="avatar of Jese" img={PicAvatar} rounded className='w-10 mb-4'/>
                                <h5 className='text-lg font-medium'>Nimra</h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/* text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                I love the convenience of ordering medications online through your website. The process is straightforward, and the timely delivery adds an extra layer of reliability.
                                    </p>
                                <Avatar alt="avatar of Jese" img={SecondPic} rounded className='w-10 mb-4'/>
                                <h5 className='text-lg font-medium'>Fatima</h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/* text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                I appreciate the transparency in detailing medication information. It helps build trust, and I feel confident in the quality and authenticity of the products I order from your website.
                                </p>
                                <Avatar alt="avatar of Jese" img={ThirdPic} rounded className='w-10 mb-4'/>
                                <h5 className='text-lg font-medium'>Areeba</h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/* text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                Your medicine website goes beyond just transactions; it feels like a trustworthy healthcare companion.Your medicine website goes beyond just transactions.
                                </p>
                                <Avatar alt="avatar of Jese" img={ForthPic} rounded className='w-10 mb-4'/>
                                <h5 className='text-lg font-medium'>Sheeza</h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/* text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                The quick and efficient order processing on your medicine website is commendable. It saves me time, and the notifications keep me informed every step of the way.
                                </p>
                                <Avatar alt="avatar of Jese" img={FifthPic} rounded className='w-10 mb-4'/>
                                <h5 className='text-lg font-medium'>Laiba</h5>
                            </div>
                        </div>
                    </SwiperSlide>                   
                    
                </Swiper>
            </div>
        </div>
    )
}

export default Review