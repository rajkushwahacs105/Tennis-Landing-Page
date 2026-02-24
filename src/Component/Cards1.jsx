import React from 'react'

const Cards1 = () => {
  return (
    <>
    <div className='flex h-[60vh]  p-5 justify-between'>

      <div className='bg-gradient-to-r from-blue-950 to-blue-900 
                      h-[50vh] w-[50vh] 
                      m-5 p-8 rounded-2xl text-white
                      flex flex-col justify-between'>

        <img 
          src="/tennis-court.png" 
          alt="Tennis Court" 
          className='h-11 w-10'
        />

        <p className='text-lg leading-relaxed'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati inventore architecto ratione porro qui aperiam iusto magnam 
        </p>

        <div className="flex items-center gap-3">
          <div className="h-6 w-14 bg-white rounded-full flex items-center p-1">
            <div className="h-4 w-4 bg-blue-500 rounded-full"></div>
          </div>
          <span>Game Mode</span>
        </div>

      </div>

      <div className="bg-[url('/card.jpg')] bg-cover bg-center h-[50vh] w-[50vh] m-5 rounded-2xl flex justify-center items-center">
      <div className='backdrop-blur-sm text-white px-5 py-2 rounded-4xl'>Private & Group Lessons</div>
      </div>
      <div className='bg-emerald-600 h-[50vh] w-[50vh] m-5 rounded-2xl'></div>

    </div>
    <h3 className='text-center text-2xl m-1 '>A few more Fact About As in Numbers</h3>
    <div className=' h-24 m-5 p-5 flex items-center justify-around'>
        <div className='text-center'>
            <h1 className='text-3xl font-bold'>12 000+</h1>
            <p>Hours of Play annul</p>
        </div>
        <div className='text-center'>
            <h1 className='text-3xl font-bold'>89%</h1>
            <p>Player Retention rate</p>
        </div>
        <div className='text-center'>
            <h1 className='text-3xl font-bold'>1,200+</h1>
            <p>Active members</p>
        </div>
        <div className='text-center'>
            <h1 className='text-3xl font-bold'>125+</h1>
            <p>Annul tournaments</p>
        </div>
    </div>
    </>
  )
}

export default Cards1