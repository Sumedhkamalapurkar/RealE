import React from 'react';
import { Link } from 'react-router-dom';
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

const ServiceBlock = ({ imageSrc, altText, description, serviceId }) => (
  <Link to={`/service/${serviceId}`} className='flex flex-col items-center transform transition-all'>
    <img className='object-cover w-full h-[48vw] md:h-[32vw] lg:h-[24vw] border rounded-3xl mb-2' src={imageSrc} alt={altText} />
    <p className='bg-white text-black text-center p-3 w-full border shadow-md rounded-lg'>{description}</p>
  </Link>
);

function Services3() {
  const services = [
    { id: 1, imageSrc: AC, altText: 'AC', description: 'AC Services' },
    { id: 2, imageSrc: Plumbing, altText: 'Plumbing', description: 'Plumbing Services' },
    // ... other services
  ];

  return (
    <section className='w-full h-full pt-[96px]'>
      <div className='h-[48px] font-semibold text-3xl leading-10'>
        <h1 className='flex justify-center'>Different Services That Make Your Life Easy</h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center pt-10'>
        {services.map((service) => (
          <ServiceBlock key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Services3;
