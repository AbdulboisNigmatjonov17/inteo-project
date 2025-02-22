import Link from 'next/link'
import React from 'react'
import Button from '../button/Button'

export default function Navbar() {
    return (
        <nav className='Container h-[10dvh] px-5 flex justify-between items-center'>
            <div>
                <Link href={'/'}>
                    <img src='/Logo.svg' alt="inteo" />
                </Link>
            </div>
            <div className='flex items-center gap-4'>
                <ul className='flex gap-4'>
                    <li>About</li>
                    <li>Services</li>
                    <li>Our Work</li>
                </ul>
                <Button />
            </div>
        </nav>
    )
}
