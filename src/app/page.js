"use client"
import { Navbar, Header, Banner, About, Statistics, Works, Services, Footer } from '@/components/index'
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
