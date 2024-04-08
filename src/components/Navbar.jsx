import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import Logo from '../assets/Logo.png';
import pic from '../assets/Youhana.jpg';

const Navbar = () => {
    const [toggle , setToggle] = useState(false);

  return (
    <nav className='fixed left-0 top-0 z-30 bg-black/70 grid w-full gap-2 py-3 px-4 sm:gap-4 grid-cols-[1fr_1.5fr] sm:grid-cols-2 duration-250 transition-all'>
        <div className='flex flex-row items-center gap-3 text-[#FFF]'>
            <Link to='/' className='flex items-center gap-3'>
                <img src={Logo} alt="" className='w-10 h-10 rounded-full mr-0.2' />
                <h1>Bacground AI</h1>
            </Link>
        </div>
        <div className='flex items-center justify-end'>
            <img src={toggle ? close : menu } alt=''
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => {setToggle(!toggle)}}
            />
            <div className={`${!toggle ? 'hidden': 'flex'} p-6 bg-[#313131] text-[#B1B1B1] absolute top-[55px] right-0 mx-4 my-2 min-w-[140px] z-10 rounded`}>
                <ul>
                    <li className='divide-gray-90 mb-3'><Link><img src={pic} alt="" className='w-10 h-10 rounded-3xl cursor-pointer inline-block'/> Youhana Gergis </Link></li>
                    <hr className='w-full border border-black-600' />
                    <li className='mb-3 mt-2 hover:text-gray-400' onClick={() => {setToggle(!toggle);}}><Link to='dashboard'>My Dashboard</Link></li>
                    <li className='mb-3 hover:text-gray-400' onClick={() => {setToggle(!toggle);}} ><Link to='setting'>Edit profile</Link></li>
                    <li className='text-[#02EE8B] hover:text-green-600' onClick={() => {setToggle(!toggle);}}><Link>Log Out</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
