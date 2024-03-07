
import { Button, Card, CardBody, CardFooter, CardHeader,Typography } from '@material-tailwind/react'
import React from 'react'
import bed from "../assets/images/bed.png"
import bath from "../assets/images/bath.png"
import unfurnished from "../assets/images/unfurnished.png"

export function DetailsPage() {
  return (
    <Card className="w-full max-w-[60rem] pt-2 px-4 pb-6 mb-4 h-auto border flex flex-wrap"> 
        <CardHeader shadow={false}
          floated={false}
          
          className="mx-8 mt-5  shrink-0 rounded-r-none text-black" >
            <div>
            <div className='flex space-x-2'> <div className='leading-8 text-lg font-semibold'><span>₹</span>1.2Cr </div>
            <a className='leading-8 text-sm underline' href='#'> EMI - ₹ 16k </a>
            <span className='leading-8'> |</span>
            <a className='leading-8 text-sm underline' href="#">Can I afford it?</a>
            </div>
            </div>
            <div className='text-sm flex mt-2'><div><span>2 BHK 901Sq-ft Flat For Sale </span>
            <span className='underline font-semibold'> <a href="#">Parsodi Wardha Road, Nagpur</a> </span></div></div>
            </CardHeader>


        <CardBody 
        floated={false} 
        className="rounded-md flex flex-row w-full max-w-[20rem] flex-wrap">
          <div className='flex flex-shrink-0 flex-row'>
            <div className='mr-4'>
        <img className="w-80 mb-1 rounded-t-lg block"
            src="https://img.staticmb.com/mbimages/project/Photo_h0_w320/2023/02/14/Project-Photo-9-Golden-Vista-Nagpur-5391585_1200_1600_0_320.jpg"
            alt="ui/ux review check"
          />
          <div>
            <ul className='flex max-w-[48rem]'>
        <li>
        <img className="me-1 h-20 rounded-b-lg" src="https://img.staticmb.com/mbimages/project/Photo_h0_w320/2023/02/14/Project-Photo-12-Golden-Vista-Nagpur-5391585_1200_1600_0_320.jpg" alt="Building3" />
        </li>
        <li>
        <img className="h-20" src="https://img.staticmb.com/mbimages/project/Photo_h0_w320/2023/03/03/Project-Photo-25-Golden-Vista-Nagpur-5391585_1200_1600_0_320.jpg" alt="Building2"/>
        </li>
        <li>
        <img className=" block rounded-b-lg h-20" src="https://img.staticmb.com/mbimages/project/Photo_h0_w320/2023/03/03/Project-Photo-26-Golden-Vista-Nagpur-5391585_1200_1600_0_320.jpg" alt="Building3" />
        </li></ul>
        </div>
        </div>

        <div >
            <div  className="mb-4 p-5 max-w-lg bg-gray-200 rounded-md flex-wrap flex">
            <ul className="flex flex-wrap space-x-4 text-black">
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
            

                 <div>
                 <div>
                    <ul className="flex flex-wrap space-x-2 gap-4 justify-start items-start mb-2 text-sm font-normal text-black max-w-96">
                        <li>
                            <div className='font-normal leading-3'>Super Built-up Area</div>
                            <div className="flex">
                                <div className='font-semibold'>901<span>sqft<span className="flex"></span>
                                </span></div>
                                <div><span>$</span>3900/sqft</div>
                            </div>
                        </li>
                        <li>
                            <div className='font-normal leading-3'>Developer</div>
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

                 </div> 
                 
        
        
        </div>
        
       
        </CardBody>
        <CardFooter>
        
        <div className="flex w-max gap-4 max-w-[48rem]">
      <Button className='rounded-full' color="red">Contact Builder</Button>
      <Button className="rounded-full text-red-600 border border-red-400 bg-white" >Download Brochure</Button></div>
        </CardFooter>
    </Card>
  )
}
