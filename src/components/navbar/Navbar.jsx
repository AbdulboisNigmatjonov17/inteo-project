"use client"
import Link from 'next/link'
import React from 'react'
import Button from '../button/Button'

export default function Navbar() {
    // const scrollToSection = (id) => {
    //     const element = document.getElementById(id);
    //     if (element) {
    //         window.scrollTo({
    //             top: element.offsetTop,
    //             behavior: "smooth",
    //         });
    //     }
    // };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const targetPosition = element.offsetTop;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1000; // 1.5 sekund
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    };


    return (
        <nav className='Container h-[10dvh] px-5 flex justify-between items-center'>
            <div>
                <Link href={'/'}>
                    <img src='/Logo.svg' alt="inteo" />
                </Link>
            </div>
            <div className='flex items-center gap-4'>
                <ul className='flex gap-4'>
                    <button onClick={() => scrollToSection("about")} className="cursor-pointer">
                        <li>About</li>
                    </button>
                    <button onClick={() => scrollToSection("services")} className="cursor-pointer">
                        <li>Services</li>
                    </button>
                    <button onClick={() => scrollToSection("works")} className="cursor-pointer">
                        <li>Our work</li>
                    </button>
                </ul>
                <Button />
            </div>
        </nav>
    )
}
