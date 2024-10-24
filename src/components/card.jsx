import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';

const CardBox = ({ title, description }) => {
  return (
    <div>
      <Card className="mt-6 w-64 max-lg:w-full h-full bg-black rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 py-4">
        <CardHeader color="blue-gray" className="relative h-56 flex justify-center ">
          <img
            src="/images/work.svg"
            alt="card-image"
            width={200}
            className='max-lg:w-full'

          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2 text-[16px] font-bold text-center">
            {title}
          </Typography>
          <Typography className='text-center'>
            {description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex justify-center mt-3">
          <Button className='bg-transparent text-black border border-black text-[12px] py-2 rounded-xl px-3'>Read More</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CardBox