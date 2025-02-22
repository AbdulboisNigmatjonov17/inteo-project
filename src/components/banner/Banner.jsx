"use client"
import { bannerData } from './bannerData'
import Line from '../line/Line'

export default function Banner() {
    return (
        <div className='mb-40'>
            <div className='h-[640px] relative  '>
                <img src='/hero-image.png' alt="home-img" className='w-full h-full' loading='lazy'/>
                <div className='absolute -top-16 left-40'>
                    <img src="/CTAButton.png" alt="CTAButton" />
                </div>
            </div>
            <div className='bg-[#2C2C2C] '>
                <div className='Container text-[#D9D9D6] flex gap-5 justify-between py-6'>
                    <div className='flex items-center gap-5'>
                        <h3 className='italic font-normal text-2xl leading-8 -rotate-90'>Awards</h3>
                        <Line color={'bg-white'}/>
                    </div>
                    {
                        bannerData.map((item) => (
                            <div key={item.id} className='max-w-[300px] flex items-center gap-3'>
                                <img src={item.img} alt={'item-' + `${item.title}`} />
                                <div className='w-full'>
                                    <h4 className='w-full'>{item.title}</h4>
                                    <h4>{item.year}</h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
