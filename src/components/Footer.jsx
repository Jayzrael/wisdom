import React from 'react'
import { TiSocialLinkedin } from 'react-icons/ti';
import { SlSocialInstagram } from 'react-icons/sl';
import { FaFacebook, FaTiktok } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { BsTwitterX } from 'react-icons/bs';

const Footer = () => {
  return (
    <section className='flex justify-between mt-10 mb-10 max-lg:mb-10 px-10'>
      <h1 className='text-xl'>Visit our pages</h1>
      <div className='flex justify-center items-center gap-4'>
        <TiSocialLinkedin size={35} cursor="pointer" />
        <SlSocialInstagram size={20} cursor="pointer" />
        <FaFacebook size={20} cursor="pointer" />
        <BsTwitterX size={20} cursor="pointer" />
        <IoLogoYoutube size={20} cursor="pointer" />
        <FaTiktok size={20} cursor="pointer" />
      </div>
    </section>
  )
}

export default Footer