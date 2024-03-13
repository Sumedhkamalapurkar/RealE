import React from 'react';
import ServiceProvider from './ServiceProvider'; 
import Acsevices from '../assets/images/Acsevices.png';
import Acimage1 from '../assets/images/services/Acimage1.jpg'
import Acimage2 from '../assets/images/services/Acimage2.jpg'
import Acimage3 from '../assets/images/services/Acimage3.jpg'
import Acimage4 from '../assets/images/services/Acimage4.jpg'
import Acimage5 from '../assets/images/services/Acimage5.jpg'
import Acimage6 from '../assets/images/services/Acimage6.jpg'
import Acimage7 from '../assets/images/services/Acimage7.jpg'
import whatsapp from "../assets/images/whatsapp.jpg";



import Vijay from '../assets/images/Vijay.png';


function ServiceCardA() {
  const serviceProviders = [
    {
      name: 'Arjun Ravat',
      company: 'Indian AC Services',
      location: 'Hadapsar, Pune - 411028',
      services: [
        'Pre-service checks',
        'Jacket for mess-free service',
        'Indoor unit Foam-jet cleaning',
        'Outdoor unit Powerjet cleaning',
        'Final checks & clean-up',
        'Personal energy saving report'
      ],
      images: [Acimage1,Acimage2,Acimage3,Acimage4,Acimage5],
      image: Acsevices 
    },
    {
        name: 'Vijay Shinde',
        company: 'Shine Air Conditioning',
        location: 'Wagholi, Pune - 412207',
        services: [
          'Pre-service checks',
          'Jacket for mess-free service',
          'Indoor unit Foam-jet cleaning',
          'Outdoor unit Powerjet cleaning',
          'Final checks & clean-up',
          'Personal energy saving report'
        ],
        images: [Acimage7,Acimage6,Acimage5,Acimage4,Acimage3],
        image: Vijay 
      },
      {
      name: 'Krishna Rao',
      company: 'Krishna AC Services',
      location: 'Kharadi, Pune - 411030',
      services: [
        'Pre-service checks',
        'Jacket for mess-free service',
        'Indoor unit Foam-jet cleaning',
        'Outdoor unit Powerjet cleaning',
        'Final checks & clean-up',
        'Personal energy saving report'
      ],
      images: [Acimage1,Acimage2,Acimage3,Acimage4,Acimage5],
      image: Acsevices
    },
       {
      name: 'Sachin Borde',
      company: 'Air Cool Solution',
      location: 'Katraj, Pune - 411006',
      services: [
        'Pre-service checks',
        'Jacket for mess-free service',
        'Indoor unit Foam-jet cleaning',
        'Outdoor unit Powerjet cleaning',
        'Final checks & clean-up',
        'Personal energy saving report'
      ],
      images: [Acimage7,Acimage6,Acimage5,Acimage4,Acimage3],
      image: Vijay 
    },
    
    
  ];

  return (
    <div>
      <ServiceProvider serviceProviders={serviceProviders} />
    </div>
  );
}

export default ServiceCardA;
