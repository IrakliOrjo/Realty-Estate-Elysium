import React from 'react';

import {housesData} from '../data'

import {useParams} from 'react-router-dom'

import {BiBed, BiBath, BiArea,BiMailSend} from 'react-icons/bi'
import {IoIosConstruct} from 'react-icons/io'
import {MdBalcony} from 'react-icons/md'
import {FaToilet,FaParking,FaChair} from 'react-icons/fa'
import {GiHeatHaze,GiElevator} from 'react-icons/gi'
import {BsPhoneFill} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'



import {Link} from 'react-router-dom'

import ImageSlider from '../components/ImageSlider';

const PropertyDetails = () => {
  //get house id
  const {id} = useParams();
 

  //get house based on the id 
  const house = housesData.find(house => {
    return house.id === parseInt(id)
  })
  
 
  

  return (
  <section>
    <div className='container mx-auto min-h-[800px] mb-14 '>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <h2 className='text-2xl font-semibold'>{house.name}</h2>
          <h3 className='text-lg mb-4'>{house.address}</h3>
          
        </div>
        <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
          <div className='bg-green-500 text-white px-3 rounded-full'>{house.type}</div>
          <div className='bg-violet-500 text-white px-3 rounded-full'>{house.country}</div>
        </div>
        <div className='text-3xl font-semibold text-violet-600'> {house.price}</div>
      </div>
      <div className='flex flex-col items-start gap-8 lg:flex-row'>
        <div className='max-w-[768px]'>
          <div className='mb-8'>
            <ImageSlider slides={house.slides}/>
          </div>
          <div className='flex gap-x-6 text-violet-700 mb-6 '>
            <div className='flex gap-x-2 items-center'>
              <BiBed className='text-2xl'/>
              <div>{house.bedrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiBath className='text-2xl'/>
              <div>{house.bathrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiArea className='text-2xl'/>
              <div>{house.surface}</div>
            </div>
          </div>
          <div className='m-0'>
            <div className='border-b-2 m-0 border-b-violet-400 border-solid 
            flex flex-col justify-between py-8 gap-6 lg:flex-wrap lg:h-[230px]'>
              
              <p className=''>
                <IoIosConstruct className='mr-1 text-2xl text-violet-500 inline-block' />
                {house.details.repair}
                </p>
              <p className={`${house.details.balcony ? 'visible' : 'line-through'}`}>
                <MdBalcony className={`mr-1 text-2xl  text-violet-500 inline-block`} />
                აივანი
                </p>
                <p className=''>
                <FaToilet className='mr-1 text-2xl text-violet-500 inline-block' />
                სველი წერტილი: {house.details.toilet}
                </p>
                <p className=''>
                <GiHeatHaze className='mr-1 text-2xl text-violet-500 inline-block' />
                გათბობა: {house.details.heat}
                </p>
                <p className={`${house.details.parking ? 'visible' : 'line-through'}`}>
                <FaParking className='mr-1 text-2xl text-violet-500 inline-block' />
                პარკინგი
                </p>
                <p className={`${house.details.furniture ? 'visible' : 'line-through'}`}>
                <FaChair className='mr-1 text-2xl text-violet-500 inline-block' />
                ავეჯი
                </p>
                <p className={`${house.details.elevator ? 'visible' : 'line-through'}`}>
                <GiElevator className='mr-1 text-2xl text-violet-500 inline-block' />
                ლიფტი
                </p>
              
            </div>
            <div className='mt-8'>
              <p>{house.description}</p>
            </div>
          </div>
        </div>
        <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8 '>
          <div className='flex items-center gap-x-4 mb-8 '>
            <div className='w-20 h-20 p-1 border border-gray-300 rounded-full '>
              <img src={house.agent.image} />
            </div>
            <div>
              <div className='font-bold text-lg '>{house.agent.name}</div>
              <Link to='' className='text-violet-700 text-sm '>Director</Link>
            </div>
          </div>
          {/*form */}
          <div className='h-[1px] bg-[#9e7e9a] mb-4 w-[99%]'></div>
          <div className=''>
            <BsPhoneFill className='text-2xl text-violet-500 mr-2 inline-block' />
            <p className='inline-block font-semibold mb-2'>{house.agent.phone}</p>
            <br />
            <BiMailSend className='text-2xl text-violet-500 mr-2 inline-block' />
            <p className='inline-block font-semibold mb-2'>{house.agent.email}</p>
            
            
          </div>
        </div>
      </div>
    </div>
    </section>);
};

export default PropertyDetails;
