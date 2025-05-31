import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { AiTwotoneGift } from "react-icons/ai";
import { IoStatsChartSharp } from "react-icons/io5";
import { AiTwotonePieChart } from "react-icons/ai";
import { BsBank } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";



import { Pagination, Navigation } from 'swiper/modules';
const DashboardBoxes = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="dashboardBoxesSlider">

            <SwiperSlide>
                <div className='bg-white box p-5 cursor-pointer hover:bg-[#fafafa] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4'>
                    <AiTwotoneGift className='text-[40px] text-[#3872fa]' />
                    <div className='info w-[70%]  '>
                        <h3>
                            New Orders
                        </h3>
                        <b>1000</b>
                    </div>
                    <IoStatsChartSharp className='text-[50px] text-[#3872fa]' />

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='bg-white box p-5 cursor-pointer hover:bg-[#fafafa] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4'>
                    <AiTwotonePieChart className='text-[40px] text-[#10b981]' />
                    <div className='info w-[70%]  '>
                        <h3>
                            Sales
                        </h3>
                        <b>4,00,000</b>
                    </div>
                    <IoStatsChartSharp className='text-[50px] text-[#10b981]' />

                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-white box p-5 cursor-pointer hover:bg-[#fafafa] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4'>
                    <BsBank className='text-[30px] text-[#7928ca]' />
                    <div className='info w-[70%]  '>
                        <h3>
                            Revenue
                        </h3>
                        <b>2,40,000</b>
                    </div>
                    <IoStatsChartSharp className='text-[30px] text-[#7928ca]' />

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='bg-white box p-5 cursor-pointer hover:bg-[#fafafa] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4'>
                    <RiProductHuntLine className='text-[40px] text-[#312be1d8]' />
                    <div className='info w-[70%]  '>
                        <h3>
                            Total Products
                        </h3>
                        <b>11000</b>
                    </div>
                    <IoStatsChartSharp className='text-[30px] text-[#312be1d8]' />

                </div>
            </SwiperSlide>





        </Swiper>
    )
}

export default DashboardBoxes