"use client"

import { useState } from "react";
import { Menu } from "@mui/icons-material";
import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import Link from "next/link";
import Button from "../button/Button";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const targetPosition = element.offsetTop;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 800; // 0.8 sekund
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
        <nav className="fixed top-0 w-full h-[10dvh] px-6 sm:px-10 flex justify-between items-center z-50 bg-white shadow-md">

            <div>
                <Link href={"/"}>
                    <img src="/Logo.svg" alt="inteo" className="h-10" />
                </Link>
            </div>

            <div className='flex items-center gap-2'>
                <div className='sm:hidden'>
                    <IconButton onClick={() => setOpen(true)}>
                        <Menu />
                    </IconButton>
                </div>

                <ul className='hidden sm:flex gap-4 md:flex'>
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

            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                <List className="w-[200px]">
                    <ListItem component="button" onClick={() => { scrollToSection("about"); setOpen(false); }}>
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem component="button" onClick={() => { scrollToSection("services"); setOpen(false); }}>
                        <ListItemText primary="Services" />
                    </ListItem>
                    <ListItem component="button" onClick={() => { scrollToSection("works"); setOpen(false); }}>
                        <ListItemText primary="Our Work" />
                    </ListItem>
                </List>
            </Drawer>
        </nav>
    );
}
