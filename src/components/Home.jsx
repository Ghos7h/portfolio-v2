import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll';
import Typed from 'react-typed';


const Home = () => {
  
  return (
    
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-yellow-600 font-bold'>
                Hi, my name is 
            </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Prasenjit Kumar Ghosh</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Developer</h2>
            <Typed className="text-2xl sm:text-5xl font-bold text-[#8892b0] my-4" strings={["Cloud Development", "Web Development"]} typeSpeed={40} backSpeed={60} loop/>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a Software Developer specializing in building applications such as cloud applications (microservices) and web applications.</p>
            <div>
            <Link to="work" smooth={true} duration={500}><button className='text-white group border-2 px-6 py-3  my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600'>View Work<span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span></button></Link> 
            </div>
        </div>

     
        
    </div>
  )
}

export default Home