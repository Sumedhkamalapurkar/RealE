import React from 'react'
import about from "../assets/images/about.jpg"


function About2() {
  return (
    <div>
       <div className='block relative box-border'>
            <div className='w-full h-full flex flex-wrap flex-row shrink-0 mb-[0vh] flex-grow-0 relative'>
                <div className='h-auto text-center overflow-hidden m-0 relative '>
                <img src={about} alt="about" className=' w-full align-top  h-auto block border-0 bg-cover' />
                </div>
                <div className=' block text-center w-full absolute '>
                    <div className='flex justify-center relative align-middle basis-full  top-14'>
                        <div className='text-center relative align-middle m-0 inline-block'><h1 className='text-[rgb(255,255,255)] flex text-3xl'>ABOUT US</h1>
                        </div>
                    
                    </div>
                   
                </div>
            </div>

       </div>
    </div>
    
  )
}

export default About2