import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
           <div className='sm:text-right pb-8 pl-4'>
                  <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>About</p>
            </div>                
        <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold '>
            <p>Hi, I'm Prasenjit, nice to meet you. Please take a look around</p>
          </div>
          <div>
          Experienced Software Developer with a demonstrated history of working in both product and service based industries. Skilled in AWS services, Nodejs, Typescript, Reactjs, Expressjs, Angularjs, databases (DynamoDB, MongoDB, SQL) and etc. Strong engineering professional with a B.Tech focused in Electronics and Communications Engineering from West Bengal University of Technology.  
          </div>                
        </div> 
      </div>
      </div>  
  )
}

export default About