import React, { useState } from 'react'
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

function Navbar() {
    const[show, setShow] = useState(false);
    const handleClick = () =>{
        setShow(!show)
        console.log(show)
    }
    const NavLinks = [
      { id: 1, name: "Home" , url: "#Home"  },
      { id: 2, name: "About" , url: "#About"  },
      { id: 3, name: "TechStack" , url: "#TechStack"  },
      { id: 4, name: "Projects" , url: "#Projects"  },
      { id: 5, name: "Contact" , url: "#Contact"  }
    ]
    
  return (
    <div className='flex w-full justify-between md:justify-around h-20 items-center relative '>
        <div onClick={handleClick} className=' md:hidden block ml-5 cursor-pointer'><IoMenu size={25}/></div>
        <div className=' mr-5 md:mr-0 font-bold text-2xl font-poppins logo-text-gradient cursor-pointer'>&#123; zeck &#125;</div>
        <ul className={ ` bg-white text-[#6b6b6b] font-semibold text-[15px] top-20 md:translate-x-0 translate-x-[-100%] md:static absolute md:flex duration-300 md:shadow-none shadow-2xl ${show ? 'translate-x-[0]' : ""}`}>
              {NavLinks.map(link =>(
                <li className='px-24 md:px-10 py-[3.6rem] md:py-0 text-center'><a href={link.url}>{link.name}</a></li>
              ))}

              {/* <div className='md:flex space-x-2 hidden'>
              <FaGithub size={20} className='cursor-pointer '/>
               <FaFacebook size={20} className='cursor-pointer '/>
               <FaLinkedin size={20} className='cursor-pointer'/>
              </div> */}
        </ul>
    </div>
  )
}

export default Navbar