import Image from "next/image"

export default function WorksCard({ data }) {
    return (
        <div className='w-full flex flex-col gap-4'>
            <div className='w-full overflow-hidden'>
                <Image src={data.img} width={16} height={9} layout="responsive" className={`${data.css} hover:scale-125 cursor-pointer transition duration-300 ease-in-out`} alt={`${data.title}`} loading='lazy' />
            </div>
            <h2 className='text-[#2C2C2C] font-normal text-[36px] leading-[48px] '>{data.title}</h2>
            <p className='text-[#444444]'>{data.about}</p>
        </div>
    )
}
