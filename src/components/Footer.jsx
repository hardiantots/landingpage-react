import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-6xl mx-auto mt-4 gap-10 sm:gap-0 flex flex-col sm:flex-row sm:justify-between sm:items-center rounded-t-xl bg-green-800 px-8 py-6'>
        <div className='flex items-center gap-4'>
            <h1 className='text-4xl sm:text-2xl lg:text-3xl text-white'>
                ID<span className='font-bold'>Foods</span>
            </h1>
        </div>
        <div>
            <ul className="flex flex-col sm:flex-row gap-8 sm:gap-4 text-white">
                <li><a className="px-4 py-2 bg-white text-green-900 font-semibold duration-300 rounded-2xl hover:bg-green-500 hover:text-white" href="https://web.facebook.com/profile.php?id=100080415930922">Facebook</a></li>
                <li><a className="px-4 py-2 bg-white text-green-900 font-semibold duration-300 rounded-2xl hover:bg-green-500 hover:text-white" href="https://www.instagram.com/hardianto_ts/">Instagram</a></li>
                <li><a className="px-4 py-2 bg-white text-green-900 font-semibold duration-300 rounded-2xl hover:bg-green-500 hover:text-white" href="https://www.linkedin.com/in/hardianto-ts/">LinkedIn</a></li>
            </ul>
        </div> 
    </div>
  )
}

export default Footer