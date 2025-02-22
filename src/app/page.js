"use client"
import Navbar from '../components/navbar/Navbar'
import Header from '@/components/header/Header'
import Banner from '@/components/banner/Banner'
import Footer from '@/components/footer/Footer'
import About from '@/components/about/About'
import Statistics from '@/components/sts/Statistics'
import Works from '@/components/works/Works'
import Services from '@/components/service/Services'
import { ArrowUpward } from '@mui/icons-material'

export default function Home() {
  const handleScrollToTop = () => {
    let currentPosition = window.scrollY;
    const scrollStep = currentPosition / 20;

    const scrollAnimation = () => {
      if (currentPosition > 0) {
        currentPosition -= scrollStep;
        window.scrollTo(0, currentPosition);
        requestAnimationFrame(scrollAnimation);
      }
    };

    requestAnimationFrame(scrollAnimation);
  };
  return (
    <>
      <Navbar />
      <Header />
      <Banner />
      <About />
      <Statistics />
      <Services />
      <Works />
      <button className="fixed bottom-10 lg:right-30 md:right-10 right-5 w-[50px] h-[50px] rounded-full bg-[#2C2C2C] text-white cursor-pointer" onClick={() => {
        handleScrollToTop();
      }}>
        <ArrowUpward />
      </button>
      <Footer />
    </>
  )
}
