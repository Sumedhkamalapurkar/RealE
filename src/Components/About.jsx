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



//Property card Dropdown button code

// <div id="propType" className="float-left w-[315px] pb-5 ]">
//                   <div className="w-full text-sm md:text-base pb-3">Property Type</div>
//                   <div className="relative float-left">
//                     <div className="relative float-left">
//                       <select
//                         onChange={handlePropertyChange}
//                         id="propType"
//                         name="propType"
//                         className=" z-[-999] p-1 md:w-[315px] right-0 bg-gray-100 w-[280px] block"
//                       >
//                         <option
//                           value="-1"
//                           className="py-[2px] px-[5px] border-b-0 text-sm"
//                         >
//                           Select property type
//                         </option>
//                         <optgroup
//                           label="All Residential"
//                           className="fon"
//                         ></optgroup>
//                         <option
//                           value="Flat/Apartment"
//                           className="py-[2px] px-[5px] border-b-0 text-sm"
//                         >
//                           Flat/Apartment
//                         </option>
//                         <option
//                           value="Residential House"
//                           className="py-[2px] px-[5px] border-b-0 text-sm"
//                         >
//                           Residential House
//                         </option>
//                         <option value="Villa">Villa</option>
//                         <option value="Builder Floor Apartment">
//                           Builder Floor Apartment
//                         </option>
//                         <option value="Penthouse">Penthouse</option>
//                         <option value="Studio Apartment">
//                           Studio Apartment
//                         </option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>
