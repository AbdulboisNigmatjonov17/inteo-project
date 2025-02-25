import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Statistics() {
    const stsData = [
        {
            id: 1,
            content: '100%',
            about: 'SATISFACTION CLIENTS'
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
            duration: 2000,
            offset: 100,
            once: false,
        });
    }, []);

    return (
        <div className='my-20'>
            <div className="max-w-[90%] lg:max-w-[1440px] mx-auto">
                <div className='w-full flex flex-wrap justify-center lg:justify-between gap-5 sm:gap-10 text-center'>
                    {
                        stsData.map((item) => (
                            <div data-aos="flip-up" key={item.id} className='w-full sm:w-[48%] lg:w-[30%] flex justify-center items-center text-center gap-2 p-4'>
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