import React, {useState} from 'react'

import {housesData} from '../data'


const ImageSlider = ({slides}) => {
  const [currentIndex,setCurrentIndex] = useState(0)

  function goToPrevious () {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function goToNext () {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    
  }

  console.log(slides)
    return (
    <div className='h-full relative'>
       <div className='absolute inline hover:bg-[#2b1026bb] bg-[#3f393e81] rounded-full  top-[40%] text-white transform 
       translate-x-[-50%] left-[2rem] text-[4rem] cursor-pointer'
       onClick={goToPrevious}
       > {`<`} </div>
       <div className='absolute hover:bg-[#2b1026bb] bg-[#3f393e81] rounded-full inline top-[39%] text-white  transform 
       translate-x-[-50%] right-[0.1rem] text-[4rem] cursor-pointer'
       onClick={goToNext}
       > {`>`} </div>
        <div className=' '
        
        > 
            <img className='object-cover w-full h-full' src={`${slides[currentIndex].url}`} alt='house' />

        </div>
    </div>
  )
}

export default ImageSlider