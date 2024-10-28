import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const CardBox = ({ title, description, galleryUrl }) => {
  return (
    <div>
      <Card className="mt-6 w-72 pt-3 pb-0 max-lg:w-full h-full bg-black backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 px-3 shadow-xl transform transition-transform duration-300 hover:scale-105">
        <CardHeader color="blue-gray" className="relative ">
          <img
            src={galleryUrl}
            alt="card-image"
            // width={200}
            className='max-lg:w-full w-[100%]'

          />
        </CardHeader>
        <CardBody className='ml-0 pl-2'>
          <Typography variant="h5" className="mb-2 text-[16px] text-[#454245] ">
            {title}
          </Typography>
          <Typography className='text-2xl font-bold'>
            {description}
          </Typography>
        </CardBody>
        <CardFooter className="flex pl-2 justify-between items-center">
          <Button className='bg-transparent text-[#1264A3]  text-[18px]'>Read More</Button>
          <HiArrowNarrowRight size={20} color='#1264A3' />
        </CardFooter>
      </Card>
    </div>
  )
}

export default CardBox