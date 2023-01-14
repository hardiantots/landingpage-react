import React, { useState } from 'react'
import {data} from '../data/data.js'

const ListFood = () => {

  const [foods, setFoods] = useState(data);

  const filterPrice = (price) => {
    setFoods(
        data.filter((item) => {
            return item.price === price;
        })
    )
  }

  return (
    <div className='max-w-6xl mx-auto px-4 py-6'>
        <h1 className='font-bold text-green-800 text-4xl text-center'>Top Rated Menu Items</h1>
        
        <div className='flex flex-col mt-6'>
            <p className='font-bold text-gray-700 mx-auto sm:mx-0 text-lg sm:text-md'>Filter Price</p>
            <div className='grid grid-cols-2 mx-auto sm:mx-0 sm:flex sm:justify-between max-w-[390px] w-full gap-3 mt-3'>
                <button onClick={() => filterPrice('Rp15.000')} className='px-3 py-2 border rounded-lg duration-300 border-green-800 text-green-800 hover:bg-green-800 hover:text-white'>Rp15.000</button>
                <button onClick={() => filterPrice('Rp20.000')} className='px-3 py-2 border rounded-lg duration-300 border-green-800 text-green-800 hover:bg-green-800 hover:text-white'>Rp20.000</button>
                <button onClick={() => filterPrice('Rp30.000')} className='px-3 py-2 border rounded-lg duration-300 border-green-800 text-green-800 hover:bg-green-800 hover:text-white'>Rp30.000</button>
                <button onClick={() => filterPrice('Rp40.000')} className='px-3 py-2 border rounded-lg duration-300 border-green-800 text-green-800 hover:bg-green-800 hover:text-white'>Rp40.000</button>
            </div>  
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
            {foods.map((item, index)=> (
                <div key={index} className="border shadow-lg duration-300 rounded-lg overflow-hidden hover:scale-105">
                    <img className="w-full h-[200px] object-cover " src={item.image} alt={item.name}/>
                    <div className='flex flex-col sm:flex-row items-center sm:justify-between sm:gap-0 gap-3 sm:py-4 px-6 py-6'>
                        <p className='font-bold text-green-800'>{item.name}</p>
                        <p>
                            <span className='bg-green-900 text-white text-xs rounded-3xl px-4 py-2'>{item.price}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ListFood