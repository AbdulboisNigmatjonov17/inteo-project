import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS faylini import qilish

export default function Statistics() {
    const stsData = [
        {
            id: 1,
            content: '100%',
            about: 'SATISFITATION CLIENTS'
        },
        {
            id: 2,
            content: '250',
            about: 'EMPLOYEES ON WORLDWIDE'
        },
        {
            id: 3,
            content: '3469',
            about: 'PROJECTS COMPLETED ON 60 COUNTRIES'
        },
    ]

    useEffect(() => {
        AOS.init({
            duration: 2000, // Animatsiya davomiyligi (ms)
            offset: 100, // Scroll boshlangan joydan necha px pastga kelganda ishlashi
            once: false, // Bir marta ishga tushishi
        });
    }, []);

    return (
        <div className='my-20'>
            <div className="max-w-[90%] lg:max-w-[1440px] mx-auto">
                <div className='w-full flex justify-center lg:justify-between'>
                    {
                        stsData.map((item) => (
                            <div data-aos="flip-up" key={item.id} className='w-[385px] flex lg:flex-row flex-col items-start lg:items-center text-left gap-5'>
                                <h1 className='font-normal text-[60px] leading-[72px] '>{item.content}</h1>
                                <p className='w-[175px]'>{item.about}</p>
                            </div>
                        ))
                    }
                </div>
                <br /><br />
                <hr />
            </div>
        </div>
    )
}
