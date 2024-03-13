import React from 'react'
import Acsevices from '../assets/images/Acsevices.png';
import AC from '../assets/images/AC.jpg';
import Plumbing from '../assets/images/Plumbing.jpg';
import Painting from '../assets/images/Painting.jpg';
import Carpaenter from '../assets/images/Carpaenter.jpg';
import Security from '../assets/images/Security.jpg';

function ServicesCard() {
  return (
    <section className='bg-blue-gray-100 w-full min-h-screen'>
        <h1 className='text-2xl font-bold text-center pt-6 underline'>AC Service Providers</h1>

        <div className='card flex flex-col lg:flex-row bg-[#ffffff] rounded-xl shadow-lg mx-10 md:mx-20 lg:mx-36 p-4 mt-10'>
            <div className='mx-4 '>
                <div className='flex items-center'>
                 <img className='border rounded-full' src={Acsevices} alt="AC" />
                   <div className='card p-1 ml-2'>
                    <h1 className='font-bold text-[16px]'>Arjun Ravat</h1> 
                    <span className='text-gray-700 font-medium'>Indian Ac Services</span>
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='text-base font-semibold'>Service Flow</h3>
                    <ul className='text-sm font-normal mt-3 list-disc mx-4'>
                        <li>Pre-service checks</li>
                        <li>Jacket for mess-free service</li>
                        <li>Indoor unit Foam-jet cleaning</li>
                        <li>Outdoor unit Powerjet cleaning</li>
                        <li>Final checks & clean-up</li>
                        <li>Personal energy saving report</li>
                    </ul>
                </div>

                <div className='mt-5 '>
                    <span><i class="fa-solid fa-location-dot"></i><span className='ml-2 text-gray-700'>Hadapsar, Pune - 411028</span></span>
                    </div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </div>

            <div className='md:ml-6'>
                <div className='text-end md:mb-4'>Stars
                </div>
                <div>
                    <h1 className='text-center  font-mono font-normal text-[24px] md:mb-5'>We are here to help you...</h1>
                    <div className='flex flex-wrap mx-2 items-center md:flex-row gap-5'>
                    <img className='w-[100px] h-[100px] rounded-lg' src={AC} alt="" />
                    <img className='w-[100px] h-[100px] rounded-lg' src={Plumbing} alt="" />
                    <img className='w-[100px] h-[100px] rounded-lg' src={Painting} alt="" />
                    <img className='w-[100px] h-[100px] rounded-lg' src={Carpaenter} alt="" />
                    <img className='w-[100px] h-[100px] rounded-lg' src={Security} alt="" />
                    <img className='w-[100px] h-[100px] rounded-lg' src={Security} alt="" />
                    </div>
                   
                    </div>
                <div className='text-end mt-12' >
                    <button type='button' className='border rounded-2xl p-1 bg-green-500 hover:bg-green-700 text-white w-32 font-semibold text-base' onClick={() => alert('Contact button clicked')}><i class="fa-solid fa-phone"></i><span className='ml-2 '>Contact</span></button>
                </div>
            </div>

        </div>
    </section>
  )
}

export default ServicesCard