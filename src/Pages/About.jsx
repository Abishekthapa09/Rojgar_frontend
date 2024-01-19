import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-primary font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7 text-Black'>
            Welcome to Rojgar.com, your premier destination for navigating the dynamic landscape of career
             opportunities in Nepal. We understand that finding the right job or the perfect candidate is a
              transformative experience, and Rojgar.com is designed to make that journey seamless and impactful.
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify text-Black'>
        <p>
        As a dedicated job portal based in Nepal, Rojgar.com takes pride in offering a comprehensive and
         user-friendly platform for job seekers and employers alike. For job seekers, we provide access to
          a diverse range of job listings across various industries, enabling them to explore and apply for
           positions that align with their skills and aspirations. Our user-friendly interface ensures a 
           hassle-free experience, allowing candidates to build compelling profiles and stay informed about 
           the latest job openings.
        </p>
      </div>
      <div className='leading-8 px-5 text-justify text-Black'>
        <p>
        For employers, Rojgar.com offers a streamlined recruitment process, connecting businesses with 
        top-tier talent. With innovative features and a deep understanding of the local job market, 
        we empower employers to find the right candidates efficiently. At Rojgar.com, we are passionate 
        about fostering meaningful connections that drive personal and professional growth. Join us in 
        shaping the future of employment in Nepal, where opportunities abound, talent thrives, and success 
        knows no bounds. Explore, connect, and achieve your career goals with Rojgar.com!
        </p>
      </div>
    </div>
  );
};

export default About;
