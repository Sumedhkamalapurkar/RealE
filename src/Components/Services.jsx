import React from 'react'
import AC from "../assets/images/AC.jpg";
import Plumbing from "../assets/images/Plumbing.jpg";
import Painting from "../assets/images/Painting.jpg";
import Carpaenter from "../assets/images/Carpaenter.jpg";
import Security from "../assets/images/Security.jpg";
import Pest from "../assets/images/Pest.jpg";
import Electrical from "../assets/images/Electrical.jpg";
import Wifi from "../assets/images/Wifi.jpg";
import Grocery from "../assets/images/Grocery.jpg";
import House from "../assets/images/House.jpg";
import Dth from "../assets/images/Dth.jpg";
import Gardening from "../assets/images/Gardening.jpg";

function Services() {
  return (
    <section className='w-full h-full pt-[96px]'>
        <div className='h-[48px] font-semibold text-3xl leading-10'>
            <h1 className='flex justify-center'>Different Services That Makes your Life Easy</h1>
        </div>

        <div id='container' className='justify-center pt-10 '>

            <div id='row1' className=' relative flex h-[270px] gap-16 justify-center mb-10 '>
            <div className='flex justify-center cursor-pointer hover:border transform transition-all'>
            <img className='object-cover h-full w-[250px] border rounded-3xl relative' src={AC} alt="AC" />
            <p className='bg-white text-black absolute -bottom-5 flex justify-center p-3 w-40 border shadow-md rounded-lg'>AC Services</p>
            </div>
            <div className='flex justify-center cursor-pointer hover:border transform transition-all'>
            <img className='object-cover h-full w-[250px] border rounded-3xl' src={Plumbing} alt="Plumbing" />
            <p className='bg-white text-black absolute -bottom-5 flex justify-center p-3 w-40 border shadow-md rounded-lg'>Plumbing</p>
            </div>
            <div className='flex justify-center cursor-pointer hover:border transform transition-all'>
            <img className='object-cover h-full w-[250px] border rounded-3xl' src={Painting} alt="Painting" />
            <p  className='bg-white text-black absolute -bottom-5 flex justify-center p-3 w-40 border shadow-md rounded-lg'>Painting</p>
            </div>
            </div>

            <div id='row1' className=' relative flex h-[270px] gap-16 justify-center mb-10'>
            <div className='flex justify-center cursor-pointer hover:border transform transition-all'>
            <img className='object-cover h-full w-[250px] border rounded-3xl' src={Carpaenter} alt="Carpaenter" />
            <p  className='bg-white text-black absolute -bottom-5 flex justify-center p-3 w-40 border shadow-md rounded-lg'>Carpaenter</p>
            </div>
            <div className='flex justify-center cursor-pointer hover:border transform transition-all'>
            <img className='object-cover h-full w-[250px] border rounded-3xl' src={Security} alt="Security" />
            <p  className='bg-white text-black absolute -bottom-5 flex justify-center p-3 w-40 border shadow-md rounded-lg'>Security</p>
            </div>
            <div className='flex justify-center cursor-pointer hover:border transform transition-all'>
            <img className='object-cover h-full w-[250px] border rounded-3xl' src={Pest} alt="Pest" />
            <p  className='bg-white text-black absolute -bottom-5 flex justify-center p-3 w-40 border shadow-md rounded-lg'>Pest</p>
            </div>
            </div>

            <div id='row1' className=' relative flex h-[270px] gap-16 justify-center mb-10'>
            <div className='flex justify-center cursor-pointer hover:border transform transition-all'>
            <img className='object-cover h-full w-[250px] border rounded-3xl' src={Electrical} alt="Electrical" />
            <p  className='bg-white text-black absolute -bottom-5 flex justify-center p-3 w-40 border shadow-md rounded-lg'>Electrical</p>
            </div>
            <div className='flex justify-center cursor-pointer hover:border transform transition-all'>
            <img className='object-cover h-full w-[250px] border rounded-3xl' src={Wifi} alt="Wifi" />
            <p  className='bg-white text-black absolute -bottom-5 flex justify-center p-3 w-40 border shadow-md rounded-lg'>Wifi</p>
            </div>
            <div className='flex justify-center cursor-pointer hover:border transform transition-all'>
            <img className='object-cover h-full w-[250px] border rounded-3xl' src={Grocery} alt="Grocery" />
            <p  className='bg-white text-black absolute -bottom-5 flex justify-center p-3 w-40 border shadow-md rounded-lg'>Grocery</p>
            </div>
            </div>

            <div id='row1' className=' relative flex h-[270px] gap-16 justify-center mb-16'>
            <div className='flex justify-center cursor-pointer hover:border transform transition-all'>
            <img className='object-cover h-full w-[250px] border rounded-3xl' src={House} alt="House" />
            <p  className='bg-white text-black absolute -bottom-5 flex justify-center p-3 w-40 border shadow-md rounded-lg'>House</p>
            </div>
            <div className='flex justify-center cursor-pointer hover:border transform transition-all'>
            <img className='object-cover h-full w-[250px] border rounded-3xl' src={Dth} alt="Dth" />
            <p  className='bg-white text-black absolute -bottom-5 flex justify-center p-3 w-40 border shadow-md rounded-lg'>Dth</p>
            </div>
            <div className='flex justify-center cursor-pointer hover:border transform transition-all'>
            <img className='object-cover h-full w-[250px] border rounded-3xl' src={Gardening} alt="Gardening" />
            <p  className='bg-white text-black absolute -bottom-5 flex justify-center p-3 w-40 border shadow-md rounded-lg'>Gardening</p>
            </div>
            </div>
            
        </div>
    </section>

  )
}

export default Services