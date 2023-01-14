import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag} from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite, MdHelp} from 'react-icons/md'
import {FaWallet, FaUserFriends} from 'react-icons/fa'

const HeaderNav = () => {
const [nav, setNav] = useState(false)

  return (
    <div className='max-w-6xl mx-auto flex justify-between items-center p-4 lg:p-0 lg:py-6 lg:px-2'>
        <div className='flex items-center gap-4'>
            <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                <AiOutlineMenu size={30}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl text-green-800'>
                ID<span className='font-bold'>Foods</span>
            </h1>
            <div className='hidden lg:flex items-center gap-1 bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-green-800 text-white rounded-full p-2'>Delivery</p>
                <p>Pickup</p>
            </div>
        </div>

        <div className='flex items-center bg-gray-200 rounded-full px-2 w-[105px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={25}/>
            <input className="bg-transparent p-2 w-full focus:outline-none" type="text" placeholder='Search the foods'/>
        </div>

        <button className='hidden md:flex items-center bg-green-800 text-white py-2 px-4 rounded-xl gap-2'>
            <BsFillCartFill size={20}/>
            <p>Cart</p>
        </button>

        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>
        </div> : ''}
            
        <div className={nav ? 'fixed top-0 left-0 w-full sm:w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <AiOutlineClose onClick={() => setNav(!nav)} size={30} className="absolute right-4 top-5 cursor-pointer"/>
            <h2 className='text-2xl px-4 py-5 text-green-800'>ID<span className='font-bold'>Foods</span></h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-md sm:text-xl py-4 flex gap-4'>
                        <TbTruckDelivery className="hidden sm:block" size={30}/>
                        <TbTruckDelivery className="block sm:hidden" size={24}/>
                        Orders
                    </li>
                    <li className='text-md sm:text-xl py-4 flex gap-4'>
                        <MdFavorite className="hidden sm:block" size={30}/>
                        <MdFavorite className="block sm:hidden" size={24}/>
                        Favorites
                    </li>
                    <li className='text-md sm:text-xl py-4 flex gap-4'>
                        <FaWallet className="hidden sm:block" size={30}/>
                        <FaWallet className="block sm:hidden" size={24}/>
                        Wallet
                    </li>
                    <li className='text-md sm:text-xl py-4 flex gap-4'>
                        <MdHelp className="hidden sm:block" size={30}/>
                        <MdHelp className="block sm:hidden" size={24}/>
                        Help
                    </li>
                    <li className='text-md sm:text-xl py-4 flex gap-4'>
                        <AiFillTag className="hidden sm:block" size={30}/>
                        <AiFillTag className="block sm:hidden" size={24}/>
                        Promotions
                    </li>
                    <li className='text-md sm:text-xl py-4 flex gap-4'>
                        <BsFillSaveFill className="hidden sm:block" size={30}/>
                        <BsFillSaveFill className="block sm:hidden" size={24}/>
                        Best Ones
                    </li>
                    <li className='text-md sm:text-xl py-4 flex gap-4'>
                        <FaUserFriends className="hidden sm:block" size={30}/>
                        <FaUserFriends className="block sm:hidden" size={24}/>
                        Invite Friends
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default HeaderNav