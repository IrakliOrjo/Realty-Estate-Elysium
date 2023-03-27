import { useContext } from 'react';

import {BsFillTelephoneFill} from 'react-icons/bs';
import {AiFillMail} from 'react-icons/ai'

import { HouseContext } from './HouseContext';

const Footer = () => {

   const {showHouses } = useContext(HouseContext);

  return <footer className='bg-[#141414] justify-center items-center  lg:flex lg:flex-col py-8 text-[#e4e1e1] '>
    <div className='flex gap-11 md:px-11 px-4 text-[0.9rem] lg:px-32 mb-6'>
      <div className='flex flex-col'>
      <p className='text-[0.9rem] max-w-[14em] md:max-w-[30em] mb-2'>უძრავი ქონების სააგენტო <span className='text-violet-700'>"Elysium Luxury Properties"</span></p>
      <div>
        <BsFillTelephoneFill className='inline-block mr-2' /><p className='inline-block'>598 99 18 18</p>
        </div>
      <div>
      <AiFillMail className='inline-block mr-2'/><p className='inline-block'>tikadgebuadze@yahoo.com</p>
        </div>
        </div>
        <div>
          <p className='font-semibold tracking-widest mb-2 text-white'>განცხადებები</p>
          <ul>
            <li>ბინები</li>
            <li onClick = {showHouses} className='cursor-pointer hover:text-violet-600'>სახლები</li>
            <li>მიწები</li>
            <li>კომერციული</li>
          </ul>
        </div>
        <div className='hidden md:flex flex-col'>
          <p className='font-semibold tracking-widest mb-2 text-white'>ბინები</p>
          <ul>
            <li>ბინები ვაკეში</li>
            <li>ბინები საბურთალოზე</li>
            <li>ბინები დიღომში</li>
            <li>ბინები გლდანში</li>
            <li>ბინები ვარკეთილში</li>
            
          </ul>
        </div>
        <div className='hidden md:flex flex-col'>
          <p  className='font-semibold cursor-pointer tracking-widest mb-2 text-white'>სახლები</p>
          <ul>
            <li>სახლები დიღომში</li>
            <li>სახლები საგურამოში</li>
            <li>სახლები წავკისში</li>
            <li>სახლები წყნეთში</li>
          </ul>
        </div>
    </div>
    
    <div className='border-t-[1px] text-center md:px-11 px-4 lg:px-32 pt-6 border-[white]'>
      Elysium Properties &copy; 2023. ყველა უფლება დაცულია</div>
  </footer>;
};

export default Footer;
