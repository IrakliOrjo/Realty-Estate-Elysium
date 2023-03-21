import React, {useState, useEffect, useContext} from 'react';

import {RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

import { Menu } from '@headlessui/react'

import {HouseContext} from './HouseContext'

const PriceRangeDropdown = () => {
  const {price, setPrice} = useContext(HouseContext)



  const [isOpen, setIsOpen] = useState(false)

  const prices = [
    {
      value: 'ნებისმიერი ფასი'
    },
    {
      value: '0 - 100000'
    },
    {
      value: '100000 - 200000'
    },
    {
      value: '200000 - 3000000'
    },
    {
      value: '300000 - 400000'
    },
    {
      value: '400000 - 500000'
    },
    {
      value: '500000 - 1000000'
    },
  ]

  return <Menu as='div' className='dropdown relative' >
    <Menu.Button className='dropdown-btn w-full text-left' onClick={()=> setIsOpen(!isOpen) }>
      <RiWallet3Line className='dropdown-icon-primary' />
      <div>
        <div className='text-[15px] font-medium leading-tight'>{price}</div>
        <div className='text-[13px]'>აირჩიეთ ფასი</div>
      </div>
        {
          isOpen ? (
            <RiArrowUpSLine 
            className='dropdown-icon-secondary' />
            ) : (
            <RiArrowDownSLine className='dropdown-icon-secondary' />
          )
        }
    </Menu.Button>

        <Menu.Items className='dropdown-menu'>
          {prices.map((price,index) => {
            return (
              <Menu.Item onClick={() => setPrice(price.value)}
               className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>{price.value}</Menu.Item>
            )
          })}
        </Menu.Items>

    </Menu>;
};

export default PriceRangeDropdown;
