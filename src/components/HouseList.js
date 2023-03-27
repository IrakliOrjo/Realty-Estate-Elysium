import React, {useContext, useRef} from 'react';

import {HouseContext} from './HouseContext';

import House from './House';

import {Link} from 'react-router-dom';

import {ImSpinner2} from 'react-icons/im'

const HouseList = () => {

  const myRef = useRef(null);
  const {houses,loading } = useContext(HouseContext);

//if loading is true
if(loading) {
  return(<ImSpinner2 className='mx-auto
  animate-spin text-violet-700 text-4xl mt-[200px]' />)
}

  if(houses.length < 1 ) {
    return <div className='text-center text-3xl text-gray-400 mt-48'>არაფერი არ მოიძებნა</div>
  }


  return <section className='mb-24 '>
    <div id='houseList' className=' mx-auto'>
      <div ref={myRef} className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-14'>
      {houses.map((house,index) =>{
        return (
          <Link to={`/property/${house.id}`} key={index}>
            <House house={house} />
          </Link>
        )
      })}
    </div>
    </div>
  </section>;
};

export default HouseList;
