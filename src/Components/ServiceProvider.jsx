import React from 'react';

function ServiceProvider({ serviceProviders }) {
  return (
    <section className='bg-blue-gray-100 w-full min-h-screen '>
        <h1 className='text-2xl font-bold text-center pt-6 underline '>AC Service Providers</h1>
      {serviceProviders.map((provider, index) => (
        <div key={index} className='card flex flex-col lg:flex-row bg-[#ffffff] rounded-xl shadow-xl mx-10 md:mx-20 lg:mx-36 p-5 mt-10  hover:shadow-2xl cursor-pointer mb-10 '>
          <div className='mx-4 '>
            <div className='flex items-center'>
              <img className='border rounded-full' src={provider.image} alt={provider.name} />
              <div className='card p-1 ml-2'>
                <h1 className='font-bold text-[18px]'>{provider.name}</h1>
                <span className='text-gray-600 font-medium'>{provider.company}</span>
              </div>
            </div>

            <div className='mt-5'>
              <h3 className='text-base font-semibold'>Service Flow</h3>
              <ul className='text-sm font-normal mt-3 list-disc mx-4'>
                {provider.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>

            <div className='mt-5 '>
              <span><i className="fa-solid fa-location-dot"></i><span className='ml-2 text-gray-700'>{provider.location}</span></span>
            </div>
          </div>

          <div className='md:ml-6'>
            <div className='text-end md:mb-4'>.....</div>
            <div>
              <h1 className='text-center  font-mono font-normal text-[24px] md:mb-5'>We are here to help you...</h1>
              <div className='flex flex-wrap mx-2 items-center md:flex-row gap-5'>
                {provider.images.map((image, index) => (
                  <img key={index} className='w-[115px] h-[110px] rounded-lg' src={image} alt="" />
                ))}
              </div>
            </div>
            <div className='text-end mt-10' >
              <button type='button' className='border rounded-full p-2 bg-green-500 hover:bg-green-700 text-white w-36 font-semibold text-base' onClick={() => alert('Contact button clicked')}>
                <i className="fa-solid fa-phone"></i><span className='ml-2'>Contact</span>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default ServiceProvider;
