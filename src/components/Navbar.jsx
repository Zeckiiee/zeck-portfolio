import React, { useState } from 'react'
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

function Navbar() {
    const[show, setShow] = useState(false);
    const handleClick = () =>{
        setShow(!show)
        console.log(show)
    }
  return (
    <div className='flex w-full md:justify-around justify-evenly h-20 items-center relative '>
        <div onClick={handleClick} className=' md:hidden block ml-5 cursor-pointer'><IoMenu size={25}/></div>
        <div className=' mr-5 md:mr-0 font-bold text-2xl font-poppins logo-text-gradient cursor-pointer'>&#123; zeck &#125;</div>
        <ul className={ `text-[#6b6b6b] font-semibold text-[15px] top-20 md:translate-x-0 translate-x-[-100%] md:static space-x-10 absolute md:flex duration-300 md:shadow-none shadow-2xl ${show ? 'translate-x-[0]' : ""}`}>
            <div className='flex flex-col md:flex-row  md:space-x-5 lg:space-x-10 items-center md:space-y-0 space-y-14 md:py-0 py-10 px-[90px]'>
              <li className='cursor-pointer'>Home</li>
              <li className='cursor-pointer'>About</li>
              <li className='cursor-pointer'>TechStack</li>
              <li className='cursor-pointer'>Projects</li>
              <li className='cursor-pointer'>Contact</li>
              <li className='cursor-pointer block md:hidden'>Github</li>
              <li className='cursor-pointer block md:hidden'>Facebook</li>
              <li className='cursor-pointer block md:hidden'>Linkedin</li>

              <div className='md:flex space-x-2 hidden'>
              <FaGithub size={20} className='cursor-pointer '/>
               <FaFacebook size={20} className='cursor-pointer '/>
               <FaLinkedin size={20} className='cursor-pointer'/>
              </div>
            </div>

    
               
           
        </ul>
    </div>
  )
}

export default Navbar