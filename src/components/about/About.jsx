"use client"

import Line from '../line/Line'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
            once: false,
        });
    }, []);

    return (
        <div id='about' className='max-w-[90%] mx-auto lg:max-w-[1440px] min-h-[560px] flex lg:flex-row flex-col items-center lg:items-stretch justify-center lg:justify-between gap-10 lg:gap-0'>

            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className='max-w-[600px] flex flex-col justify-center gap-6'>
                <div className='flex items-center gap-5'>
                    <Line color={'bg-[#996830]'} />
                    <h4 className='font-semibold text-[14px] leading-[20px] text-[#996830]'>ABOUT US</h4>
                </div>
                <h1 className='font-normal text-[40px] lg:text-[60px] leading-[50px] lg:leading-[72px] text-[#2C2C2C]'>
                    We help to bring your <span className='italic text-[#101218]'>dream home</span> to reality
                </h1>
                <p className='text-[#444444]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.</p>
                <p className='text-[#444444]'>Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris posuere auctor justo. Habitant proin aliquet volutpat leo ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc. Faucibus sit odio bibendum lobortis diam.</p>
            </div>

            <div data-aos='fade-left'
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className='flex lg:flex-row flex-col gap-5 relative'>

                <div className='absolute -top-10 right-10 lg:-top-20 lg:right-56'>
                    <img src="/aboutBadge.png" loading='lazy' alt="about badge" />
                </div>

                <div className='flex flex-row gap-5'>
                    <div className='flex items-start'>
                        <img src="/about-left.png" loading='lazy' alt="about-img-left" className='object-cover' />
                    </div>
                    <div className='flex items-end'>
                        <img src="/about-right.png" loading='lazy' alt="about-img-right" className='object-cover' />
                    </div>
                </div>
            </div>
        </div>

    )
}
