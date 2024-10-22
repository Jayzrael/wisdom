import React, { useState } from 'react';
import Header from '../components/header';

const Home = () => {

  return (
    <main className='overflow-hidden'>
      <Header />
      <section className='max-lg:mt-5 mt-2'>
        <div className="container flex flex-row-reverse justify-center items-center">
          <img className='max-lg:hidden' src="/images/hero.svg" alt="" width={500} />
          <div>
            <h1 className='text-4xl font-bold max-lg:text-2xl'>The Ultimate online learning experience with just a few clicks? Say Hello to Wisdom!</h1>
            <p className='my-4'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, labore neque. Nisi incidunt obcaecati ipsum?
            </p>
            <button className='bg-blue-900 text-white py-2 px-4 rounded-[12px] border-none'>
              Contact Us
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Home;
