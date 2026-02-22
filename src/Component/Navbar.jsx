import React from 'react'

const Navbar = () => {
  return (
    <div className='h-14 flex justify-between '>
        <div className='text-2xl font-bold px-5 py-2'>Horizon court</div>
        <div className='flex py-3 justify-between w-xl '>
            <div>About Us</div>
            <div>Services</div>
            <div>Coaches</div>
            <div>Event</div>
            <div>Contect</div>
        </div>
        <button className='bg-black text-white mx-5 my-2 p-2 rounded-3xl active:scale-95'>Book Now</button>
    </div>
  )
}

export default Navbar