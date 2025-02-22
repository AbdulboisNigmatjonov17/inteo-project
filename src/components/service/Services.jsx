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
            <div className='w-[800px] flex flex-col gap-6'>
                <div className='flex gap-5 items-center'>
                    <Line color={'bg-[#996830]'} />
                    <h4 className='text-[#996830]'>OUR SERVICES</h4>
                </div>
                <h1 className='text-[#101218] font-normal text-[60px] leading-[72px]'>We provide the  <span className='italic'>best solutions</span> for your dream home</h1>
            </div>
            <div className='w-full flex justify-between'>
                {
                    ServiceData.map((item) => (
                        <ServiceCard key={item.id} {...item}/>
                    ))
                }
            </div>
        </div>
    )
}
