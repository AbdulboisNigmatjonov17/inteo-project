"use client"
import { FacebookOutlined, Instagram, Twitter, YouTube } from '@mui/icons-material'
import React from 'react'
import Line from '../line/Line'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS faylini import qilish

export default function Footer() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animatsiya davomiyligi (ms)
            offset: 100, // Scroll boshlangan joydan necha px pastga kelganda ishlashi
            once: false, // Bir marta ishga tushishi
        });
    }, []);


    return (
        <footer className='Container'>
            <hr />
            <div className='my-10 lg:mx-0 mx-10 lg:gap-0 gap-5 w-full flex flex-wrap justify-between'>
                <div data-aos="fade-right" className='w-[590px] '>
                    <h1 className='text-[48px] font-normal leading-[60px] text-[#2C2C2C]'>Kick-start your dream home with us</h1>
                    <h2 className='text-[#996830] italic text-[48px] leading-[60px] underline decoration-[1px] underline-offset-4'>Send us a hi</h2>
                </div>
                <div data-aos="fade-left" className='w-[280px] flex flex-col gap-8'>
                    <div>
                        <h2 className='font-normal text-2xl leading-8 text-[#2C2C2C]'>Brooklyn, New York</h2>
                        <h4 className='text-[14px] font-light leading-6'>962 Fifth Avenue Str, 3rd Floor-Trump Building NY 10006, United State.</h4>
                    </div>
                    <div>
                        <h3 className='font-light text-sm leading-6 text-[#2C2C2C]'>Email us at</h3>
                        <h2 className='text-[#996830] font-normal text-2xl leading-8'>hello@landify.design</h2>
                    </div>
                    <div>
                        <h3 className='font-light text-sm leading-6 text-[#2C2C2C]'>If you're hurry, quick call for us</h3>
                        <h2 className='text-[#996830] font-normal text-2xl leading-8'>+8(663)125-08-59</h2>
                    </div>
                </div>
            </div>
            <hr />
            <div className='w-full my-10 lg:mx-0 mx-10 lg:gap-0 gap-5 flex flex-wrap justify-between items-center'>
                <div>
                    <h3 className='text-[#444444] font-light text-[16px] leading-6'>© 2022 Inteo - Award winning studio. Made with love by <span className='text-[#996830]'>Landify</span></h3>
                </div>
                <div className='flex items-center gap-6'>
                    <h3>CONNECT</h3>
                    <Line color={'bg-[#444444]'} />
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
        </footer>
    )
}
