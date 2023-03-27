import React, {useState, useEffect, useContext} from 'react';

import {RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

import { Menu } from '@headlessui/react'

import {HouseContext} from './HouseContext'

const StatusDropdown = () => {
  const {status, setStatus, statuses} = useContext(HouseContext)



  const [isOpen, setIsOpen] = useState(false)
  return <Menu as='div' className='dropdown relative' >
    <Menu.Button className='dropdown-btn w-full text-left' onClick={()=> setIsOpen(!isOpen) }>
      <RiHome5Line className='dropdown-icon-primary' />
      <div>
        <div className='text-[15px] hover:text-[17px] hover:text-[#413d42] font-medium leading-tight'>{status}</div>
        <div className='text-[13px]'>გარიგების ტიპი</div>
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
          {statuses.map((status,index) => {
            return (
              <Menu.Item onClick={() => setStatus(status)}
               className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>{status}</Menu.Item>
            )
          })}
        </Menu.Items>

    </Menu>;
};

export default StatusDropdown;
