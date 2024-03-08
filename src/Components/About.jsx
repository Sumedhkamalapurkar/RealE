import React from 'react'
import about from "../assets/images/about.jpg"

function About() {
  return (
    <div id='about' className='block box-border'>
<div className='block box-border'>
    <div className='mb-[0vh] relative box-border block'>
        <div className='relative h-full'>
            <div className='flex  box-border flex-wrap flex-row h-full'>
                <div className='box-border shrink-0 text-center relative'>
                    <div className='overflow-hidden m-0 '>
                        <img src={about} alt="about" className=' w-full align-top block h-auto border-0' /></div> </div>
                        <div className='block text-center'>
                            <div className='absolute flex justify-center'>
                                <div className='w-full
                                h-full'>
                                    <div className='flex flex-wrap flex-row h-full'>
                                        <div className=' basis-full pr-0 pl-0 flex-grow-0 flex-shrink-0 '>
                                            <div className='overflow-hidden flex flex-column'>
                                                <div className='text-center relative'>
                                                    <div className='m-0 relative inline-block box-border'>
                                                        <div className='box-border block text-center'>
                                                            <h1 className='text-[rgb(255,255,255)]'>ABOUT US</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    </div>
</div>









        {/* <div className='mb-0 relative h-full flex flex-row flex-wrap '>
            <div className='text-center relative'>
                <div className='block relative h-0'>
                <img id='about' src={about} alt="about" classname='absolute top-0 left-0 w-full h-full'/>
                </div>
            </div>
            <div className='absolute top-14 bottom-0 right-0 left-0'>
                <div className='box-border flex flex-wrap flex-row justify-center align-middle text-center'>
                    <div className='inline-block'>
                        <h1 className='text-[rgb(255,255,255)] text-3xl'>ABOUT US</h1>
                    </div>
                </div>
            </div>
        </div> */}




        {/* <div className=''>
            <img id='about' src={about} alt="about" classname='w-full block h-auto'/>
            <span >About</span>
            
        </div> */}
    </div>
  )
}

export default About