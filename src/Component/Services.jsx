import React from 'react'

const Services = () => {
  return (
    <div className='flex h-[60vh]  p-5 justify-between'>

      <div className='bg-gray-300 h-[45vh] w-[50vh] m-5 p-8 rounded-2xl  flex flex-col justify-between items-start font-semibold'>
          <div className='border-2 w-21 rounded-3xl px-3 '>Services</div>
          <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto magni nam enim </div>
          <button className='px-3 bg-blue-900 rounded-2xl p-1'>Explor more</button>
      </div>

      <div className="bg-[url('/Jannik.jpg')] bg-cover bg-center h-[45vh] w-[50vh] m-5 rounded-2xl flex flex-col justify-between items-start">
      <div className=' m-5 px-2 py-1 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl shadow-lg'>Traning program</div>
      <div className='text-white w-50 m-3 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      </div>
      <div className='bg-amber-50 h-[45vh] w-[50vh] m-5 rounded-2xl'>
        <div className='bg-[url(/Ball.jpg)] bg-cover bg-center h-[55%] rounded-2xl flex flex-col justify-between items-start'>
          <div className=' m-5 px-2 py-1 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl shadow-lg '>Court accese</div>
          <div className='text-white m-3 font-bold rounded-2xl px-2 py-1 '>Hourly court Rental</div>
        </div>
        <div className='w-[55%] m-5 font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
      </div>

    </div>
  )
}

export default Services