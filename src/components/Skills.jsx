import React from 'react'

import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import typescript from '../assets/typescript.png'
import AWS from '../assets/aws.png';
import jest from '../assets/jest.png';
import Azure from '../assets/Azure.png';

const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen bg-[#0a192f]  text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>
            Skills
          </p>
          <p className='py-4'>
            These are the technologies I've worked with
          </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={AWS} alt="AWS" />
            <p className='my-4'>AWS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt="Nodejs" />
            <p className='my-4'>Nodejs</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={typescript} alt="TypeScript" />
            <p className='my-4'>Typescript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="Javascript" />
            <p className='my-4'>Javascript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GitHub} alt="GitHub" />
            <p className='my-4'>GitHub</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="Reactjs" />
            <p className='my-4'>Reactjs</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={jest} alt="Jest" />
            <p className='my-4'>Jest</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto my-2' src={Azure} alt="Azure Devops" />
            <p className='my-4'>Azure Devops</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills