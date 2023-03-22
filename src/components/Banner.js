import React from 'react';

import {useState, useEffect} from 'react'

import Image from '../assets/img/house-banner.png'

import bg1 from '../assets/img/bg.jpg'
import bg2 from '../assets/img/bg2.jpg'
import bg3 from '../assets/img/bg3.jpg'

import Search from '../components/Search'

const Banner = () => {

  
  const images = [
    'first-bg',
    'second-bg',
    'third-bg'
  ]
  
  const [img, setImg] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setImg((img + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [img]);

  const backgroundImage = images[img]


  console.log(bg3)

  return <section  className={`h-full xl:py-[18em] ${backgroundImage} transition-transform ease-in-out bg-[#a79e9e] bg-blend-multiply  mb-8 xl:mb-12`}>
    <div className='flex flex-col lg:flex-row mb-7'>
    <div className='  flex flex-col mt-11 items-center text-center justify-center flex-1 px-4 lg:px-0'>
      <h1 className='text-4xl typewriter text-focus-in tracking-widest text-[#fffdff]  shadow-2xl xl:text-[3.85rem] font-semibold leading-none mb-6'>
        <span className='text-[#f8f8f8]'>იპოვეთ</span> თქვენი ოცნების სახლი</h1>
      <p className=' mb-8 text-[1.15rem] shadow-2xl text-[#efeeff]'>Elysium Properties Real Estate, ჩვენ ვუზრუნველყოფთ კომფორტს.
      </p>
    </div>
    {/*Image*/}
    
    </div>
    <Search />
    </section>;
};

export default Banner;
