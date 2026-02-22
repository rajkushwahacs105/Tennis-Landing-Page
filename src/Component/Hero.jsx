import React from 'react'

const Hero = () => {
  return (
    <div className=' bg-[url("./img3.jpg")] bg-cover bg-center h-[80vh] m-7 rounded-xl  relative'>
        <div  className=' absolute top-[10%]  left-1/2 -translate-x-1/2 p-10 rounded-xl text-center w-full ' >
            <h1 className='text-5xl   text-slate-200 font-bold text-center'>Unleash Your inner Champian Today.</h1>
            <h1 className='text-5xl text-slate-200 font-bold text-center'>All in One Place.</h1>
            <p className='text-center w-130 mx-auto my-5 text-white font-semibold'>Lorem ipsum dolor sing elit. Inventore, itaque impedit, minus odio iure dolor fuga dolore aut pariatur nemo neque.</p>
            <div className="flex justify-center">
             <button className='bg-blue-950 text-white font-bold px-5 py-2 rounded-3xl active:scale-95'>
              Start Your Own Journey
              </button>
            </div>
        </div>
        
    </div>
  )
}

export default Hero