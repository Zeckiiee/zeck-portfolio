import React from 'react'
import myPicture from '../assets/pictures/photo_2024-06-30_15-52-24.jpg'

function MainPage() {
  return (
    <div className='w-screen flex justify-evenly md:flex-row flex-col-reverse items-center md:py-[8rem] py-[5rem] '>
        <div className='py-10'>
            <p className='font-poppins font-bold text-[30px] md:text-[40px] lg:text-[50px] md:text-left text-center'>
                Hi <br className='hidden md:block'/>
                My Name is <br className='hidden md:block' />
                <span className=' text-gradient'>Ezeckiel</span> <br className='' />
                Frontend Web Developer
            </p>
        </div>
        <div className='lg:w-[365px] lg:h-[365px]  w-[300px] h-[300px]  bg-gradient-to-t from-[#19aaf2] via-[#7366d2] to-[#cc21b2] rounded-full bg-black flex justify-center items-center'>
            <img src={myPicture} alt="myPicture" className='  lg:w-[349px] lg:h-[349px] w-[285px] h-[285px] rounded-full' />
        </div>
    </div>
  )
}

export default MainPage