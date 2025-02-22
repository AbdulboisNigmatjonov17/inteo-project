"use client"
import { FacebookOutlined, Instagram, Twitter, YouTube } from '@mui/icons-material'
import React from 'react'

export default function Footer() {
    return (
        <footer className='Container mt-10'>
            <hr />
            <div className='w-full flex justify-between'>
                <div className='w-[590px] '>
                    <h1>Kick-start your dream home with us</h1>
                    <h1>Send us a hi</h1>
                </div>
                <div className='w-[280px]'>
                    <div>
                        <h2>Brooklyn, New York</h2>
                        <h4>962 Fifth Avenue Str, 3rd Floor-Trump Building NY 10006, United State.</h4>
                    </div>
                    <div>
                        <h3>Email us at</h3>
                        <h2>hello@landify.design</h2>
                    </div>
                    <div>
                        <h3>If you're hurry, quick call for us</h3>
                        <h2>+8(663)125-08-59</h2>
                    </div>
                </div>
            </div>
            <hr />
            <div className='w-full flex justify-between items-center'>
                <div>
                    <h3>© 2022 Inteo - Award winning studio. Made with love by <span>Landify</span></h3>
                </div>
                <div className='flex items-center'>
                    <h3>CONNECT</h3>
                    <div className='bg-[#444444] w-[64px] h-[1px]'></div>
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
