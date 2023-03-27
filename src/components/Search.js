import React, { useContext } from 'react';

import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import StatusDropdown from './StatusDropdown';


import { RiSearch2Line } from 'react-icons/ri';
import { HouseContext } from './HouseContext';

import {Link} from 'react-scroll'


const Search = () => {
  const {handleClick} = useContext(HouseContext)

  return <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between
  gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-[#f2dcfacc]  lg:backdrop-blur rounded-lg '>
    <CountryDropdown />
    <PropertyDropdown />
    <StatusDropdown />
    <button
     onClick={()=> handleClick()}
     className='bg-violet-700 hover:bg-violet-800 
     transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg '>
       <Link to='#houseList' spy={true} smooth={true} offset={50} duration={500}>
      <RiSearch2Line />
   </Link>
    </button>
    </div>;
};

export default Search;
