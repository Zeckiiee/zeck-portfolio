import React from 'react'
import myPicture from '../assets/pictures/photo_2024-06-30_15-52-24.jpg'

function MainPage() {
  return (
    <div className='w-screen flex justify-evenly items-center py-[8rem]'>
        <div className=''>
            <p className='font-poppins font-bold text-[50px]'>
                Hi<br/>
                My Name is <br />
                <span className=' text-gradient'>Ezeckiel</span> <br />
                Frontend Web Developer
            </p>
        </div>
        <div className='w-[365px] h-[365px] bg-gradient-to-t from-[#19aaf2] via-[#7366d2] to-[#cc21b2] rounded-full bg-black flex justify-center items-center'>
            <img src={myPicture} alt="myPicture" className='  w-[349px] h-[349px] rounded-full' />
        </div>
    </div>
  )
}

export default MainPage