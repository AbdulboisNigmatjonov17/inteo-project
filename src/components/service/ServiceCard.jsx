import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS faylini import qilish

export default function ServiceCard({ img, title }) {
        useEffect(() => {
            AOS.init({
                duration: 1000, // Animatsiya davomiyligi (ms)
                offset: 100, // Scroll boshlangan joydan necha px pastga kelganda ishlashi
                once: false, // Bir marta ishga tushishi
            });
        }, []);
    
    return (
        <div data-aos="zoom-in-up" className='my-20 w-[385px] h-[415px] flex flex-col justify-between p-10 border border-[#E6D8CC] rounded-sm'>
            <div>
                <img src={img} alt={`${img}-`+ `${title}`} />
            </div>
            <div className='w-full flex flex-col gap-4'>
                <h1 className='font-normal text-[36px] leading-[48px] text-[#2C2C2C]'>{title}</h1>
                <p className='text-[#444444] font-light text-lg leading-8'>Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.</p>
            </div>
        </div>
    )
}
