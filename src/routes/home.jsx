import React, { useState } from 'react';
import Header from '../components/header';
import AnimatedText from '../components/animatedText';
import Button from '../components/Button';
import { RiShakeHandsLine } from 'react-icons/ri';
import { BsFileSpreadsheet } from 'react-icons/bs';
import { HiOutlineHome, HiOutlineShoppingCart } from 'react-icons/hi';
import ScrollSpyLayout from '../components/animatedSection';
import VideoText from '../components/VideoText';
import { CardList, VideoList } from '../components/lists';
import CurvedContainer from '../components/CurvedSection';
import CardBox from '../components/card';


const Home = () => {

  return (
    <main className='overflow-hidden'>
      <Header />
      <section className='flex flex-col justify-center items-center gap-4 max-lg:mt-20 mt-20 '>
        <AnimatedText />
        <div>
          <Button Class="bg-[#611F69] hover:bg-[#481A54] py-4 px-10 rounded-md text-xl text-white" Text="GET STARTED" />
        </div>
        <p className='text-xl max-lg:px-7 max-lg:text-center font-semibold mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </section>
      <section className='mb-10 '>
        <div className='container flex justify-center items-center'>
          <video src="/videos/video1.mp4" width="900" height="600" muted loop autoPlay className='rounded-lg' />
        </div>
      </section>
      <section className='rounded-curve mt-[-150px]  bg-slate-50 pt-[200px] '>
        <div className='container flex gap-10 flex-col justify-center items-center'>
          <h1 className='text-center font-bold text-5xl max-lg:text-2xl'>Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className='flex gap-10 flex-wrap justify-center'>
            <span className='flex justify-center items-center gap-3'>
              <RiShakeHandsLine size={30} />
              <h2>COLLABORATION</h2>
            </span>
            <span className='flex justify-center items-center gap-3'>
              <BsFileSpreadsheet size={30} />
              <h2>COLLABORATION</h2>
            </span>
            <span className='flex justify-center items-center gap-3'>
              <HiOutlineHome size={30} />
              <h2>COLLABORATION</h2>
            </span>
            <span className='flex justify-center items-center gap-3'>
              <HiOutlineShoppingCart size={30} />
              <h2>COLLABORATION</h2>
            </span>
          </div>
        </div>
        <div className='mt-24'>
          {/* <ScrollSpyLayout /> */}
          {VideoList.map((item) => (
            <VideoText
              title={item.title}
              percent={item.percent}
              text1={item.text1}
              text2={item.text2}
              text3={item.text3}
              bgcolor={item.bgcolor}
              videoUrl={item.videoUrl}
              reverseFlex={item.reverseFlex}
            />
          ))}
        </div>
      </section>
      {/* video gallery  */}
      <section>
        <div>
        </div>
      </section>
      <CurvedContainer />
      <section className='mt-24 mb-24'>
        <h1 className='text-black mb-10 font-bold text-3xl text-center'>Your Wisdom deep dive starts here.</h1>
        <div className='flex flex-wrap max-lg:px-10 justify-center items-center gap-7'>
          {CardList.map((data) => (
            <CardBox title={data.title} description={data.description} galleryUrl={data.galleryUrl} />
          ))}
        </div>
      </section>
      <section className='bg-[#4A154B] mb-40 py-24 rounded-curve-b max-lg:rounded-none'>
        <div className='flex flex-col gap-10 justify-center items-center text-white'>
          <h1 className='text-5xl font-bold mt-10 max-lg:text-center'>See all you can accomplish in Wisdom.</h1>
          <div className='flex max-lg:flex-col gap-4 max-lg:w-full max-lg:px-8'>
            <button className='bg-white text-[#4A154B] py-3 px-7'>GET STARTED</button>
            <button className='bg-transparent border-white border py-3 px-7'>CONTACT US</button>
          </div>
        </div>
      </section>


    </main>
  );
}

export default Home;
