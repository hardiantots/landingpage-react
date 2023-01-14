import React from 'react'

const HeadlineCard = () => {
  return (
    <div className='max-w-6xl mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative overflow-hidden'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4 lg:px-4'>Let's Energy Up</p>
                <p className='px-2 lg:px-4'>Through 8/26</p>
                <button className='lg:mx-4 border-white bg-white text-black mx-2 px-2 py-1 text-sm sm:px-4 sm:py-2 sm:text-md rounded-lg absolute bottom-4'>Order Now</button>
            </div>
            <img className="max-h-[130px] md:max-h-[200px] w-full object-cover" src="https://images.unsplash.com/photo-1658218615125-00be0c916735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1ha2FuYW4lMjBpbmRvbmVzaWF8ZW58MHx8MHx8&w=1000&q=80" alt="headcard1"></img>
        </div>

        <div className='rounded-xl relative overflow-hidden'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='lg:px-4 font-bold text-2xl px-2 pt-4'>New Foods</p>
                <p className='lg:px-4 px-2'>Updated Always</p>
                <button className='lg:mx-4 border-white bg-white text-black mx-2 px-2 py-1 text-sm sm:px-4 sm:py-2 sm:text-md rounded-lg absolute bottom-4'>Order Now</button>
            </div>
            <img className="max-h-[130px] md:max-h-[200px] w-full object-cover" src="https://images.unsplash.com/photo-1572656631137-7935297eff55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kb25lc2lhbiUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80" alt="headcard1"></img>
        </div>

        <div className='rounded-xl relative overflow-hidden'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='lg:px-4 font-bold text-2xl px-2 pt-4'>Wide Variety of Food</p>
                <p className='lg:px-4 px-2'>500+ type foods</p>
                <button className='lg:mx-4 border-white bg-white text-black mx-2 px-2 py-1 text-sm sm:px-4 sm:py-2 sm:text-md rounded-lg absolute bottom-4'>Order Now</button>
            </div>
            <img className="max-h-[130px] md:max-h-[200px] w-full object-cover" src="https://media.istockphoto.com/id/1284142814/photo/balinese-rijsttafel-with-sate-lilit-pork-satay-gedang-mekuah-chicken-tum-fried-shrimp.jpg?b=1&s=170667a&w=0&k=20&c=p5VeUYPHm8hxnNAWaPFK3t6EgVWX6G0P4WuiFMO2PAo=" alt="headcard1"></img>
        </div>
    </div>
  )
}

export default HeadlineCard