import React from 'react'
import scalingServerless from '../assets/scalingServerless.png';
import archServerless from '../assets/archServerless.png';

const Certification = () => {
  return (
    <div name='certification' className='bg-[#0a192f] md:h-screen text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-600'>Certifications</p>
                <p className='py-6'>Check out some of my certifications</p>
            </div>
            {/* Container */}
   
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style= {{backgroundImage:`url(${archServerless})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-dv'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <div className='text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>Architecting Serverless Applications</span>
                            <div>
                                <a href="https://drive.google.com/file/d/1cRyB8r6JczRton_eCahbaKkwUeoxS3ER/view">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Link</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${scalingServerless})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-dv'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <div className='text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>Scaling Serverless Architectures</span>
                            <div>
                                <a href="https://drive.google.com/file/d/1kmXr--3EjRtQwE46EqDWPao2f-vG28N7/view">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Link</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Certification