import React from 'react';
import Navbar from '@/components/layout/LandingPage/Nav/Navbar';
import Section1 from '@/components/layout/LandingPage/Sections/section1';
import Section2 from '@/components/layout/LandingPage/Sections/section2';
import Section3 from '@/components/layout/LandingPage/Sections/section3';
import Section4 from '@/components/layout/LandingPage/Sections/section4';
import Section5 from '@/components/layout/LandingPage/Sections/section5';
import Footer from '@/components/layout/LandingPage/Footer/Footer';


export default function Home() {
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </>
  );
}
