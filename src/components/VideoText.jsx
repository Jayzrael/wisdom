import React from 'react'

const VideoText = ({ title, percent, text1, text2, text3, bgcolor, videoUrl, reverseFlex }) => {
  return (
    <section className={`flex flex-wrap ${reverseFlex} justify-center items-center mb-40 gap-24 px-5 max-lg:px-4 `}>
      <div className="flex w-[40%] max-lg:w-full  flex-col gap-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <h1 className="text-3xl font-bold">{text1}</h1>
        <p className="">{text2}</p>
        <div className='flex justify-center items-center gap-2 mt-8'>
          <span className='text-7xl font-bold text-[#481A54]'>{percent}</span><p>{text3}</p>
        </div>
      </div>
      <div
        className=" rounded-md "
      >
        {/* <div className={`absolute w-[65%] h-[90vh] ml-auto rounded-curve-2 inset-0 ${bgcolor} -z-10 mt-10`}></div> */}
        {/* Render VideoDisplay component and pass the active section */}
        <video src={videoUrl} autoPlay muted loop width={600} className='rounded-[10px]'></video>
      </div>
    </section>
  )
}

export default VideoText