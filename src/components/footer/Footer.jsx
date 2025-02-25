"use client"
import { FacebookOutlined, Instagram, Twitter, YouTube } from '@mui/icons-material'
import React from 'react'
import Line from '../line/Line'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
            once: false, 
        });
    }, []);


    return (
        <footer className='Container'>
            <hr />
            <div className="my-10 lg:ml-0 sm:ml-2 ml-5 lg:gap-0 sm:gap-3 gap-5 w-full flex flex-wrap justify-between">
                <div data-aos="fade-right" className="max-w-[590px] w-full">
                    <h1 className="text-4xl sm:text-xl md:text-2xl font-normal text-[#2C2C2C]">
                        Kick-start your dream home with us
                    </h1>
                    <h2 className="text-[#996830] italic text-[48px] sm:text-[32px] leading-[60px] sm:leading-[40px] underline decoration-[1px] underline-offset-4">
                        Send us a hi
                    </h2>
                </div>
                <div data-aos="fade-left" className="max-w-[280px] w-full sm:w-auto flex flex-col gap-8">
                    <div>
                        <h2 className="font-normal text-2xl leading-8 text-[#2C2C2C]">Brooklyn, New York</h2>
                        <h4 className="text-[14px] font-light leading-6">
                            962 Fifth Avenue Str, 3rd Floor-Trump Building NY 10006, United State.
                        </h4>
                    </div>
                    <div>
                        <h3 className="font-light text-sm leading-6 text-[#2C2C2C]">Email us at</h3>
                        <h2 className="text-[#996830] font-normal text-2xl leading-8">hello@landify.design</h2>
                    </div>
                    <div>
                        <h3 className="font-light text-sm leading-6 text-[#2C2C2C]">If you're hurry, quick call for us</h3>
                        <h2 className="text-[#996830] font-normal text-2xl leading-8">+8(663)125-08-59</h2>
                    </div>
                </div>
            </div>

            <hr />
            <div className='w-full my-10 lg:ml-0 ml-5 lg:gap-0 md:gap-5 gap-1 flex flex-wrap justify-between items-center'>
                <div>
                    <h3 className='text-[#444444] font-light text-[16px] leading-6 break-words'>© 2022 Inteo - Award winning studio. Made with love by <span className='text-[#996830]'>Landify</span></h3>
                </div>
                <div className='flex flex-wrap items-center gap-6'>
                    <div className='w-full flex items-center gap-6'>
                        <h3>CONNECT</h3>
                        <Line color={'bg-[#444444]'} />
                    </div>
                    <div className='w-full flex justify-between'>
                        <div className='rounded-full w-[40px] h-[40px] border border-[#E6D8CC] text-[#996830] flex justify-center items-center'>
                            <Instagram />
                        </div>
                        <div className='rounded-full w-[40px] h-[40px] border border-[#E6D8CC] text-[#996830] flex justify-center items-center'>
                            <FacebookOutlined />
                        </div>
                        <div className='rounded-full w-[40px] h-[40px] border border-[#E6D8CC] text-[#996830] flex justify-center items-center'>
                            <YouTube />
                        </div>
                        <div className='rounded-full w-[40px] h-[40px] border border-[#E6D8CC] text-[#996830] flex justify-center items-center'>
                            <Twitter />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
