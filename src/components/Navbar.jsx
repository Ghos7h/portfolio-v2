import React, {useState} from 'react'
import {FaBars, FaTimes, /* FaGithub, */ FaLinkedin} from 'react-icons/fa';
// import {HiOutlineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill } from "react-icons/bs";

import {Link} from 'react-scroll';

import Logo from '../assets/code_book.png'
const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <Link to="home" smooth={true} duration={500}><img src={Logo} alt="Logo image" style={{width: '50px'}}/></Link>
        </div>
        {/* menu */}
        
            <ul className='hidden md:flex'>
                <li>
                <Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li><Link to="work" smooth={true} duration={500}>Work</Link></li>
                <li><Link to="certification" smooth={true} duration={500}>Certification</Link></li>
                <li><Link to="contacts" smooth={true} duration={500}>Contact</Link></li>
            </ul>
        
        {/* hamburger */}
        <div className='md:hidden z-10' onClick={ handleClick }>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}> 
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="certification" smooth={true} duration={500}>Certification</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="contacts" smooth={true} duration={500}>Contact</Link></li>
        </ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/prasenjit-ghosh/'> LinkedIn <FaLinkedin size={30}/></a>
                </li>
                {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='/'> Github <FaGithub size={30}/></a>
                </li> */}
                {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='/'> Email <HiOutlineMail size={30}/></a>
                </li>    */}
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://drive.google.com/file/d/12A0jH2O1IPQS5HUvp9DRhubkEkadp7qq/view?usp=sharing'> Resume <BsFillPersonLinesFill size={30}/></a>
                </li>                              
            </ul>
        </div>
    </div>
  )
}

export default Navbar