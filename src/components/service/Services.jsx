import React from 'react'
import Line from '../line/Line'
import ServiceCard from './ServiceCard'

export default function Services() {
    const ServiceData = [
        {
            id: 1,
            img: '/Building.png',
            title: 'Architectural & Interior design',
        },
        {
            id: 2,
            img: '/Nigga.png',
            title: 'Building Renovation',
        },
        {
            id: 3,
            img: '/cursor.png',
            title: 'Construciton Management',
        },
    ]
    return (
        <div id='services' className='Container'>
            <div className='lg:w-[800px] w-full flex flex-col gap-6 lg:px-0 md:px-10 px-2'>
                <div className='flex gap-5 items-center'>
                    <Line color={'bg-[#996830]'} />
                    <h4 className='text-[#996830]'>OUR SERVICES</h4>
                </div>
                <h1 className='w-full text-[#101218] font-normal text-[60px] sm:text-[36px] leading-[72px]'>We provide the  <span className='italic'>best solutions</span> for your dream home</h1>
            </div>
            <div className='w-full grid lg:grid-cols-3 grid-cols-1 justify-between lg:px-0 px-10'>
                {
                    ServiceData.map((item) => (
                        <ServiceCard key={item.id} {...item}/>
                    ))
                }
            </div>
        </div>
    )
}
