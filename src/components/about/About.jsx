"use client"

import Line from '../line/Line'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS faylini import qilish

export default function About() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animatsiya davomiyligi (ms)
            offset: 100, // Scroll boshlangan joydan necha px pastga kelganda ishlashi
            once: false, // Bir marta ishga tushishi
        });
    }, []);

    return (
        <div id='about' className='Container h-[560px] flex justify-between'>
            {/* Matn qismi (Chap tomondan chiqishi kerak) */}
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className='max-w-[600px] flex flex-col justify-center gap-6'>
                <div className='flex items-center gap-5'>
                    <Line color={'bg-[#996830]'} />
                    <h4 className='font-semibold text-[14px] leading-[20px] text-[#996830]'>ABOUT US</h4>
                </div>
                <h1 className='font-normal text-[60px] leading-[72px] text-[#2C2C2C]'>We help to bring your <span className='italic text-[#101218]'>dream home</span> to reality</h1>
                <p className='text-[#444444]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.</p>
                <p className='text-[#444444]'>Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris posuere auctor justo. Habitant proin aliquet volutpat leo ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc. Faucibus sit odio bibendum lobortis diam.</p>
            </div>

            {/* Rasm qismi (O'ng tomondan chiqishi kerak) */}
            <div data-aos='fade-left'
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className='flex gap-5 relative'>
                <div className='absolute -top-20 right-56'>
                    <img src="/aboutBadge.png" loading='lazy' alt="about badge" />
                </div>
                <div className='flex items-start'>
                    <img src="/about-left.png" loading='lazy' alt="about-img-left" />
                </div>
                <div className='flex items-end'>
                    <img src="/about-right.png" loading='lazy' alt="about-img-right" />
                </div>
            </div>
        </div>
    )
}
