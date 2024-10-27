import React from 'react'

const ScrollContent = ({ Ref, Id, title, percent, text1, text2, text3 }) => {
  return (
    <section ref={Ref} id={Id} className="h-screen flex flex-col gap-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <h1 className="text-3xl font-bold">{text1}</h1>
      <p className="">{text2}</p>
      <div className='flex justify-center items-center gap-2'>
        <span className='text-7xl font-bold text-purple-900'>{percent}</span><p>{text3}</p>
      </div>
    </section>
  )
}

export default ScrollContent