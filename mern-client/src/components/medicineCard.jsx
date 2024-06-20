
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaCartShopping } from 'react-icons/fa6'
import { useCart } from '../contects/cardContext';



const MedicineCard = ({ headline, medicine }) => {
    const { addToCart } = useCart();

    return (
        <div className="my-16 px-4 lg:px-24">
            <h1 className="text-5xl text-center font-bold text-black" >{headline}</h1>

            {/* CARDS  */}
            <div className='mt-12'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper w-full h-full"
                >

                    {
                        medicine.map((medicine) => (
                        <SwiperSlide key={medicine._id} >
                                <div className='relative'>
                                    
                            
                            {console.log("Medicine ID:", medicine._id)}
                            {/* {console.log("Medicine ID:", medicine._id)} */}
                                    <img src={medicine.imageUrl} alt=''  onError={(e) => console.error("Image Error:", e)} />
                                
                                    {/* <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                                       <button onClick={() => addToCart({ ...medicine, price: medicine.medicinePricePKR })}>
                                            <FaCartShopping className='w-4 h-4 text-white' />
                                        </button> 
                        </div> */}
                                </div>
                                <div>
                                    <div>
                                        <h3>{medicine.medicineName}</h3>
                                    </div> 
                                </div>
                        </SwiperSlide>
                        
                        ))
                    }
                </Swiper>
            </div>

        </div>
    )
}

export default MedicineCard