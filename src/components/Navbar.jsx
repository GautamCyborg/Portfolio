import React,{useState} from 'react';
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';

const Navbar = () => {
  const [nav, setNav]=useState(false)
  const handleClick= () =>setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        
          {/*Menu */}
          <ul className='hidden md:flex'>
          <li>
              <Link to="home" smooth={true} duration={500}>Home</Link>
             </li>
             <li>
              <Link to="About" smooth={true} duration={500}>About</Link>
             </li>
             <li>
              <Link to="skills" smooth={true} duration={500}>Skills</Link>
             </li>
             <li>
              <Link to="work" smooth={true} duration={500}>Work</Link>
             </li>
             
          </ul>

        {/*Hamburger Menu */}
        <div onClick={handleClick} className='md:hidden z-10'>
         {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/*Mobile menu */}
        <ul className={!nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
            <li className='py-6 text-4xl'><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li className='py-6 text-4xl'><Link to="About" smooth={true} duration={500}>About</Link></li>
            <li className='py-6 text-4xl'><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li className='py-6 text-4xl'><Link to="work" smooth={true} duration={500}>Work</Link></li>
        </ul>

        {/*Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[120px] h-[50px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/gautam-singh-jadon-93062519b">LinkedIn <FaLinkedin/></a>
            </li>
            <li className='w-[120px] h-[50px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-gray-800'>
              <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/GautamCyborg?tab=repositories">Github <FaGithub/></a>
            </li>
            <li className='w-[120px] h-[50px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-red-800'>
              <a className='flex justify-between items-center w-full text-gray-300' href="https://mail.google.com/mail/?extsrc=mailto&url=mailto%3A%3Fto%3Dgautamjadon18%40gmail.com">Email <HiOutlineMail/></a>
            </li>
            {/*<li className='w-[120px] h-[50px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-gray-600'>
              <a className='flex justify-between items-center w-full text-gray-300' href="/">Resume <BsFillPersonLinesFill/></a>
            </li>*/}
          </ul>
        </div>

    </div>
  )
}

export default Navbar