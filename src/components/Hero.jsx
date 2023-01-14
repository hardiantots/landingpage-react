import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 pt-4 pb-0 sm:px-0 sm:pt-0 sm:p-4'>
        <div className='sm:max-h-[500px] relative'>
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center'>
                <h1 className="px-4 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">Best <span className='text-green-400'>Delivered</span></h1>
                <h1 className="px-4 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold"><span className="text-green-400">Indonesian </span>Foods</h1>
            </div>
            <img className="w-full max-h-[500px] object-cover" src="https://images.unsplash.com/photo-1630910104722-21fe97230ef9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1478&q=80" alt="firstimg"></img>
        </div>
    </div>
  )
}

export default Hero