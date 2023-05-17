import React from 'react'

const Contacts = () => {
  return (
    // <div name='contacts' className='bg-[#0a192f] w-full h-screen flex justify-center items-center p-4'>
    //     <form action="" className='flex flex-col max-w-[600px] w-full'>
    //         <div className='pb-8'>
    //             <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
    //             <p className='text-gray-300 py-4'>Submit the form below. Send an email - pras6enjit@gmail.com</p>
    //         </div>
    //         <input type="text" placeholder='Name'  name='name' className='bg-[#ccd6f6] p-2 rounded'/>
    //         <input type="email" placeholder='Eame'  name='email' className='my-4 p-2 bg-[#ccd6f6] rounded'/>
    //         <textarea name="message" rows="10" className='bg-[#ccd6f6] p-2 rounded' placeholder='Message'></textarea>
    //         <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Lets Collaborate</button>
    //     </form>

    // </div>
    //  md:h-screen
    <div name='contacts' className='bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          {/* <div className='font-bold'>Contacts Info</div> */}
          <div className='pb-8 '>
              <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-600'>Contact Info</p>
          </div>      
          <p><b>Email:</b> pras6enjit@gmail.com</p>
      </div> 
    </div>
  )
}

export default Contacts