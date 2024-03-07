import React from 'react'
import { Button } from '@material-tailwind/react'
import bed from "../assets/images/bed.png"
import bath from "../assets/images/bath.png"
import unfurnished from "../assets/images/unfurnished.png"



function Page() {
  return (
    <div className='max-w-[1000px] h-auto  md:py-[80] py-5 p-9 flex border-2 rounded-lg mt-12 flex-wrap'>
         <div className=''>
         <div>
            <div className='mx-2 flex space-x-2'> <div className='leading-8 text-lg font-semibold'><span>₹</span>1.2Cr 
            </div>
            <a className='leading-8 text-sm underline' href='#'> EMI - ₹ 16k </a>
            <span className='leading-8'> |</span>
            <a className='leading-8 text-sm underline' href="#">Can I afford it?</a>
            </div>
            </div>
            <div className='text-sm flex mt-2 '><div><span>2 BHK 901Sq-ft Flat For Sale </span>
            <span className='underline font-semibold'> <a  href="#">Parsodi Wardha Road, Nagpur</a> </span></div></div>
            <img className='w-80 rounded-t-lg h-52 mt-5' src="https://img.staticmb.com/mbimages/project/Photo_h0_w320/2023/02/14/Project-Photo-9-Golden-Vista-Nagpur-5391585_1200_1600_0_320.jpg"
            alt="ui/ux review check" />
            <div className='flex '><img className='h-20 me-1 rounded-b-lg mt-1' src="https://img.staticmb.com/mbimages/project/Photo_h0_w320/2023/02/14/Project-Photo-12-Golden-Vista-Nagpur-5391585_1200_1600_0_320.jpg" alt="Building3" />
            <img className='h-20 mt-1' src="https://img.staticmb.com/mbimages/project/Photo_h0_w320/2023/03/03/Project-Photo-25-Golden-Vista-Nagpur-5391585_1200_1600_0_320.jpg" alt="Building2" />
            </div>
            
            <div className="flex w-max gap-4 max-w-[48rem] mt-16">
                
      <Button className='rounded-full' color="red">Contact Builder</Button>
      <Button className="rounded-full text-red-600 border border-red-400 bg-white" >Download Brochure</Button></div></div>
            


        <div className=''>
            <div  className="mb-4 p-5 bg-gray-200 rounded-md flex-wrap flex  mt-20">
        <ul className="flex flex-wrap space-x-4 text-black ">
        <li>
                    <img className='w-6 h-6 block absolute ' src={bed} alt="bed" />
                    <span className='pr-0.5 font-semibold ml-8'>2</span> Beds
                </li> 
                <span>|</span>
                <li>
                    < img className='w-6 h-6 absolute block' src={bath} alt="bath" /><span className='pr-0.5 font-semibold ml-8'> 2</span> Baths
                </li>
                <span>|</span>
                <li>
                    <img className='w-6 h-6 block absolute' src={unfurnished} alt="cupboard" />
                   <span className='ml-8'> Unfurnished</span></li>
                </ul>
                </div>
                <div className='flex flex-wrap gap-y-16'>
                    <ul className="flex flex-wrap  gap-3 mt-4 h-auto  text-sm font-normal gap-y-8 text-black w-[32rem]">
                        <li>
                            <div className='font-normal leading-3 justify-start'>Super Built-up Area</div>
                            <div className="flex">
                                <div className='font-semibold'>901<span>sqft<span className="flex"></span>
                                </span></div>
                                <div><span>$</span>3900/sqft</div>
                            </div>
                        </li>
                        <li>
                            <div className='font-normal leading-3 '>Developer</div>
                            <div className='font-semibold leading-4 ' > <a href="#">Devprath Construction LLP</a>
                            </div>
                        </li>
                        <li>
                            <div className='font-normal leading-3'>Project</div>
                            <div className='font-semibold leading-4 '><a href="#">Mangalmurti Residency</a>
                            </div>
                        </li>
                        <li>
                            <div className='font-normal leading-3'>Transaction Type</div>
                            <div className='font-semibold leading-4 '>New Property
                            </div>
                        </li>
                        <li>
                            <div className='font-normal leading-3'>Status</div>
                            <div className='font-semibold leading-4 ' >Under Construction
                            </div>
                        </li>
                        <li>
                            <div className='font-normal leading-3'>Lifts</div>
                            <div className='font-semibold leading-4 '>3
                            </div>
                        </li>
                        <li>
                            <div className='font-normal leading-3'>Furnished Status</div>
                            <div className='font-semibold leading-4 ' > Unfurnished
                            </div>
                        </li>
                        <li>
                            <div className='font-normal leading-3'>Car Parking</div>
                            <div className='font-semibold leading-4 '>
                               1 Open
                            </div>
                        </li>
                    </ul>
                 </div>
        </div>
        <FooterWithSocialLinks/>
    </div>
   
  )
}

export default Page


{/* <a className='mr-3 py-0 px-5 h-10 leading-9 text-white bg-red-700 border border-solid border-red-800 w-auto inline-block text-center text-sm font-semibold no-underline capitalize rounded-3xl bg-clip-padding transition-all'>Contact Builder</a>
                <a className='mr-0 py-0 px-5 h-10 leading-9 text-red-800 border border-solid border-red-800 w-auto inline-block text-center text-sm font-semibold no-underline capitalize rounded-3xl bg-clip-padding transition-all appearance-none'>Download  Brochure</a> */}