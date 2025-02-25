import React from 'react'
import Line from '../line/Line'
import Button from '../button/Button'
import ServiceCard from './WorksCard'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

export default function Works() {
    const bigCardData = {
        img: "/Interior.png",
        title: 'Villa Furnishing & Interior',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.',
        css: 'w-full h-[445px]'
    }
    const smTopCardData = {
        img: "/Luxury.png",
        title: 'Luxury Hotel Renovation',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.',
        css: 'w-full h-[360px]'
    }
    const smBottomCardData = {
        img: "/Residence.png",
        title: 'Residence Swimming Pool',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.',
        css: 'w-full h-[360px]'
    }

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
            once: false,
        });
    }, []);


    return (
        <div id='works' className='max-w-[1440px] mx-auto flex flex-wrap justify-between gap-8 py-10 lg:px-0 px-10'>
            <div className='lg:w-[590px] w-full flex flex-col justify-between lg:gap-0 gap-5 items-start'>
                <div className='flex gap-5 items-center'>
                    <Line color={'bg-[#996830]'} />
                    <h4 className='text-[#996830]'>RECENT WORKS</h4>
                </div>
                <h1 className='text-[#101218] font-normal text-[60px] leading-[72px]'>Some of <span className='italic'>our crafts</span> made with love</h1>
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" >
                    <ServiceCard data={bigCardData} />
                </div>
                <Button />
            </div>
            <div className='lg:w-[480px] w-full flex flex-col gap-20'>
                <div data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" 
                    className='w-full flex justify-center'>
                    <ServiceCard data={smTopCardData} />
                </div>
                <div data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" >
                    <ServiceCard data={smBottomCardData} />
                </div>
            </div>
        </div>
    )
}
