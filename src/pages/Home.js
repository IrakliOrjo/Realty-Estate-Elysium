import React from 'react';

import Search from '../components/Search'

import Banner from '../components/Banner';
import HouseList from '../components/HouseList';


const Home = () => {
  return <div className='min-h-[1400px]'>
    <Banner />
    <HouseList />
    </div>;
};

export default Home;
