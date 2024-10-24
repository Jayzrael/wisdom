import React, { useState } from 'react';
import Header from '../components/header';
import AnimatedText from '../components/animatedText';
import Button from '../components/Button';


const Home = () => {

  return (
    <main className='overflow-hidden'>
      <Header />
      <section className='flex flex-col justify-center items-center gap-4 max-lg:mt-5 mt-20'>
        <AnimatedText />
        <div>
          <Button Class="bg-purple-900 hover:bg-purple-950 py-4 px-10 rounded-md text-xl text-white" Text="GET STARTED" />
        </div>
        <p className='text-xl font-semibold mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </section>
      <section className='mb-10'>
        <div className='container flex justify-center items-center'>
          <video src="/videos/video1.mp4" width="900" height="600" muted loop autoPlay className='rounded-lg' />
        </div>
      </section>
      <section className='mb-10'>
        <div className='container'>
          <h1 className='text-center font-bold text-4xl max-lg:text-2xl'>Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae earum ab harum.</h1>
        </div>
      </section>


    </main>
  );
}

export default Home;
