import React from 'react';
import AC from '../assets/images/AC.jpg';
import Plumbing from '../assets/images/Plumbing.jpg';
import Painting from '../assets/images/Painting.jpg';
import Carpaenter from '../assets/images/Carpaenter.jpg';
import Security from '../assets/images/Security.jpg';
import Pest from '../assets/images/Pest.jpg';
import Electrical from '../assets/images/Electrical.jpg';
import Wifi from '../assets/images/Wifi.jpg';
import Grocery from '../assets/images/Grocery.jpg';
import House from '../assets/images/House.jpg';
import Dth from '../assets/images/Dth.jpg';
import Gardening from '../assets/images/Gardening.jpg';


const ServiceCard = ({ imageSrc, altText, description,onClick }) => (
  <div className='flex flex-col items-center cursor-pointer transform transition-all relative'>
    <img  className='object-cover w-full md:w-[250px] shadow-xl lg:w-[250px] h-[200px] md:h-[200px] lg:h-72 hover:shadow-2xl rounded-3xl hover:scale-105' src={imageSrc} alt={altText} onClick={onClick}/>
    <p className='bg-[#FFFFFF] text-black text-center p-3 md:w-auto lg:w-auto w-full  border shadow-md rounded-lg absolute hover:bg-gray-100 -bottom-6 md:text-lg'>{description}</p>
  </div>
);

function Services2() {
    
  return (

    <section className='w-auto h-auto mt-8'>  
      <div className=' font-semibold text-2xl '>
        <h1 className='flex justify-center text-center'>
            Different Services That Make Your Life Easy
            </h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16 mx-10 justify-center p-14 md:p-20'>
        <ServiceCard 
         imageSrc={AC}  altText='AC' description='AC Services' onClick={()=>alert("Clicked")} 
         />
        <ServiceCard 
        imageSrc={Plumbing} altText='Plumbing' description='Plumbing Services' 
        />
        <ServiceCard 
        imageSrc={Painting} altText='Painting' description='Painting Services' 
        />
        <ServiceCard 
        imageSrc={Carpaenter} altText='Carpaenter' description='Carpaenter Services' 
        />
        <ServiceCard 
        imageSrc={Security} altText='Security' description='Security Services' 
        />
        <ServiceCard 
        imageSrc={Pest} altText='Pest' description='Pest Control Services' 
        />
        <ServiceCard 
        imageSrc={Electrical} altText='Electrical' description='Electrical Services' 
        />
        <ServiceCard 
        imageSrc={Wifi} altText='Wifi' description='Wifi Services' 
        />
        <ServiceCard 
        imageSrc={Grocery} altText='Grocery' description='Grocery Services' 
        />
        <ServiceCard 
        imageSrc={House} altText='House' description='HouseKeeping Services' 
        />
        <ServiceCard 
        imageSrc={Dth} altText='Dth' description='Dth Services' 
        />
        <ServiceCard 
        imageSrc={Gardening} altText='Gardening' description='Gardening Services' 
        />
      </div>
    </section>
  );
}

export default Services2;
