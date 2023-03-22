import React from 'react';

import { Link } from 'react-router-dom'

import Logo from '../assets/img/logo.png';

import Image from '../assets/img/house-banner.png'

import Search from '../components/Search'



const Header = () => {
  return <header id='head' className='bg-[#a79e9e] bg-blend-multiply   border-b-[red] '>
    <div className=" bg-[#6e9aeb17]  py-6 px-4  sm:px-14 md:px-28 lg:px-40
     w-full mx-auto flex justify-between items-center backdrop-blur border-b-[1px] border-gray-400 backdrop-contrast-150 backdrop-brightness-125">
      <ul className='flex gap-6'>
        <li className='text-white text-[1.1rem] rounded-sm hover:bg-violet-600 hover:ease-in hover:duration-300 hover:transition-colors delay-75 cursor-pointer w-24 h-12 flex items-center justify-center font-[500]'>მთავარი</li>
        <li className='text-white text-[1.1rem] rounded-sm hover:bg-violet-600 hover:ease-in hover:duration-300
        hover:transition-colors delay-100 w-24 h-12 flex items-center cursor-pointer justify-center font-[500]'>სახლები</li>
        <li className='text-white text-[1.1rem] rounded-sm hover:bg-violet-600 hover:ease-in hover:duration-300
        hover:transition-colors delay-100 w-24 h-12 flex items-center cursor-pointer justify-center font-[500]'>მიწები</li>
        <li className='text-white text-[1.1rem] rounded-sm hover:bg-violet-600 hover:ease-in hover:duration-300
        hover:transition-colors delay-100 w-32 h-12 flex items-center cursor-pointer justify-center font-[500]'>კომერციული</li>
        <li className='text-white text-[1.1rem] rounded-sm hover:bg-violet-600 hover:ease-in hover:duration-300
        hover:transition-colors delay-100 w-36 h-12 flex items-center cursor-pointer justify-center font-[500]'>ჩვენს შესახებ</li>
      </ul>
      {/*Button*/}
      <div className='flex items-center  gap-6'>
        <Link to='/' >
        <img className='w-32' src={Logo} alt='logo'/>
      </Link>
        <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to=''>კონტაქტი</Link>
      </div>
    </div>
    
    </header>;
};

export default Header;
