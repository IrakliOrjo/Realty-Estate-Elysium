import React, { useContext, useState, useEffect,  } from 'react';

import { Link } from 'react-router-dom'

import Logo from '../assets/img/logo.png';

import Image from '../assets/img/house-banner.png'

import Search from '../components/Search'

import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

import { HouseContext } from './HouseContext';







const Header = () => {



  const [navMobile, setNavMobile] = useState(false)
  const [bg, setBg] = useState(false)

 

  //scroll event
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setBg(true) : setBg(false)
            
    },)
})

 const {showHouses,showFlats,setHouseType } = useContext(HouseContext);

  return <header id='head' className={`${bg ?
        "border-b-[1px] border-gray-300 shadow-md" : "border-gray-800 border-b-[1px]" 
       }
  bg-[#a79e9e] fixed w-full z-50 bg-blend-multiply transition-all duration-300 `}>
    <div className=" bg-[#6e9aeb17]  py-6 px-4  sm:px-14 md:px-28 lg:px-40
     w-full mx-auto flex justify-between md:justify-center lg:justify-between items-center backdrop-blur 
      border-gray-400 backdrop-contrast-150 backdrop-brightness-125">
      <ul className=' gap-2 hidden md:flex'>
        <li className='text-white text-[1.1rem] rounded-sm hover:bg-violet-600 hover:ease-in hover:duration-300 hover:transition-colors delay-75 cursor-pointer w-24 h-12 flex items-center justify-center font-[500]'>
          <a href="https://elisha.ge/">მთავარი</a></li>
       
        <li onClick = {showHouses} className='text-white text-[1.1rem] rounded-sm hover:bg-violet-600 hover:ease-in hover:duration-300
        hover:transition-colors delay-100 w-24 h-12 flex items-center cursor-pointer justify-center font-[500]'>
              სახლები       </li>
              <li onClick = {showFlats} className='text-white text-[1.1rem] rounded-sm hover:bg-violet-600 hover:ease-in hover:duration-300
        hover:transition-colors delay-100 w-24 h-12 flex items-center cursor-pointer justify-center font-[500]'>
              ბინები       </li>
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
        <Link className='bg-violet-700 hover:bg-violet-800 hidden md:flex text-white px-4 py-3 rounded-lg transition' to=''>კონტაქტი</Link>
      </div>
      <div onClick={() => setNavMobile(!navMobile)} className='md:hidden '>
      {!navMobile && <AiOutlineMenu className='text-slate-200 bg-slate-500 bg-opacity-70 rounded-2xl w-12 h-8 cursor-pointer' />}
      {navMobile && <AiOutlineClose className='text-slate-200 bg-slate-500 bg-opacity-70 rounded-2xl w-12 h-8 cursor-pointer' />}
      </div>
      <div className={`${
            navMobile ? 'h-[190px]' : 'max-h-0'
          } fixed w-full bg-violet-700 shadow-lg top-[78px] left-0 h-full overflow-hidden transition-all`}
        >
               <nav className='h-full '>
      <ul className='flex flex-col leading-8 tracking-widest justify-center items-center h-full '>
        <li className='text-white text-[1.1rem] active:bg-slate-300 active:text-slate-900 font-[500]'>
          <Link to='/'>მთავარი</Link></li>
        <li onClick = {showHouses} className='text-white text-[1.1rem] 
       cursor-pointer active:bg-slate-300 active:text-slate-900 font-[500]'>სახლები</li>
        <li className='text-white text-[1.1rem] 
       cursor-pointer active:bg-slate-300 active:text-slate-900 font-[500]'>მიწები</li>
        <li className='text-white text-[1.1rem] 
       cursor-pointer active:bg-slate-300 active:text-slate-900 font-[500]'>კომერციული</li>
        <li className='text-white text-[1.1rem] 
       cursor-pointer active:bg-slate-300 active:text-slate-900 font-[500]'>ჩვენს შესახებ</li>
      </ul>
    </nav>
            </div>
    </div>
    
    </header>;
};

export default Header;
