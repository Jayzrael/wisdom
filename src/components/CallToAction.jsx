import React from 'react'

const CallToAction = () => {
  return (
    <section className='bg-[#4A154B] py-24 rounded-curve-b max-lg:rounded-none'>
      <div className='flex flex-col gap-10 justify-center items-center text-white'>
        <h1 className='text-5xl font-bold mt-10 max-lg:text-center'>See all you can accomplish in Wisdom.</h1>
        <div className='flex max-lg:flex-col gap-4 max-lg:w-full max-lg:px-8'>
          <button className='bg-white text-[#4A154B] py-3 px-7'>GET STARTED</button>
          <button className='bg-transparent border-white border py-3 px-7'>CONTACT US</button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction