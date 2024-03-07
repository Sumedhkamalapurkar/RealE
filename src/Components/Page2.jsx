import React, { useState } from 'react'
import { Button } from '@material-tailwind/react'
import bed from "../assets/images/bed.png"
import bath from "../assets/images/bath.png"
import unfurnished from "../assets/images/unfurnished.png"
import build1 from "../assets/images/build1.jpg"
import build2 from "../assets/images/build2.jpg"
import build3 from "../assets/images/build3.jpg"
import build4 from "../assets/images/build4.jpg"
import { Footer3 } from './Footer3'



function Page2() {
 
  const [ownerClicked,setOwnerClicked] = useState(false)
  const [brochureClicked,setBrochureClicked] = useState(false)
      const ownerbtn = () =>
      {
        alert("Clicked")
        setOwnerClicked(true);
      }
      const brochurebtn = () =>
      {
        alert("btn clicked")
        setBrochureClicked(true);
      }

      const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const imageSources = [ build2, build3];

  return (
           <div className='w-full h-auto'>
    <div className='w-[400px] md:w-[966px] h-auto block  md:max-w-[1300px] shadow-lg max-w-[400px] md:flex md:shrink-0 md:py-[80] py-[80] shrink-0 mt-14 mb-16 ml-4 md:ml-10 '>

      <section className='w-full h-auto pt-6 pr-8 pb-8 pl-8 border border-solid rounded-lg  bg-clip-padding'>
        <div className='box-border'>
          <div className='pb-1 w-full h-auto flex justify-start items-center relative'>
            <div className='text-lg font-semibold leading-8'>
              <span className='font-normal mr-0.5 leading-normal'>₹</span>35.1 Lac
            </div>
            <span className='my-0 ml-3  text-sm leading-5 inline-block text-gray-700 hover:text-gray-900'>EMI - ₹ 16k</span>
            <span className='ml-3'>|</span>
            <span className='my-0 ml-3 text-sm leading-5 inline-block text-gray-700 hover:text-gray-900' >Can I afford it?</span>
            <div className='w-auto flex justify-start items-center pl-4'>
              <span className='mr-0 text-xs font-semibold uppercase relative rounded-sm md:h-5  bg-clip-padding w-auto flex justify-start items-center py-1 pr-1 pl-5 border border-solid text-green-400'>Zero Brokerage</span></div> 
          </div>

          <div className='w-full h-auto pb-4 pt-1.5 flex '>
            <div className='w-full text-sm font-medium leading-5 flex justify-start items-center'>
              <span className='pr-1  text-sm font-medium inline align-text-top text-gray-700'>2 BHK 901 Sq-ft Flat For Sale</span>
            <span className=' text-sm font-medium align-text-top'>
              <a className='text-sm font-semibold underline text-gray-800 hover:text-gray-900' href="#">Parsodi Wardha Road, Nagpur</a></span></div>
              </div>
            <div className='w-full h-auto flex justify-start items-start flex-wrap pb-4'>
              <div className='w-80 h-auto overflow-hidden rounded-lg bg-clip-padding '>
                <div className='w-full h-44 rounded-t-lg rounded-b-none bg-clip-padding'>
                <img
            onClick={() => openModal(build1)}
            className='w-full h-full object-cover hover:cursor-pointer'
            src={build1}
            alt="building1"
          />
                  </div>
                <ul className='w-full pt-1 flex justify-start items-start list-none m-0 p-0'> {imageSources.map((imageSrc, index) => (
            <li key={index} className='h-20 mr-1 overflow-hidden relative w-1/3 list-none m-0 p-0'>
              <img
                className='w-full h-full object-cover hover:cursor-pointer'
                src={imageSrc}
                alt={`building${index + 1}`}
                onClick={() => openModal(imageSrc)}
              />
            </li>
          ))}
           <img
            onClick={() => openModal(build4)}
            className='w-1/3 object-cover hover:cursor-pointer h-20 relative list-none m-0 p-0 overflow-hidden'
            src={build4}
            alt="building4"
          />
                </ul>
              </div>
              {modalOpen && (
        <div className='modal fixed left-0 top-0 w-full h-full overflow-auto bg-[rgba(0,0,0,0.7)]'>
          <span className='close absolute top-14 right-6 md:top-14 md:right-20 text-4xl font-semibold cursor-pointer hover:bg-white' onClick={closeModal}>&times;</span>
          <img className='modal-content m-auto block h-[300px] md:w-[600px] md:h-[400px] mt-28 ' src={selectedImage} alt='fullSizeImage' />
        </div>
      )}

              <div className=' w-[550px] h-auto  md:ml-auto pl-4 -ml-4'>
                <ul className='w-full h-16 flex justify-start items-center mb-6 py-0 pr-3  rounded-lg bg-clip-padding list-none m-0 bg-gray-200 md:flex md:shrink-0 mt-5 md:mt-auto '>
                  <li className='w-full py-0 pr-2.5 pl-4 my-0 mr-3 ml-0 text-sm font-normal leading-5 border-r-2 border-solid list-none flex justify-center items-center'>
                  <img className='mr-2 w-6 h-6 block' src={bed} alt="bed"/> 
                  <span className='font-semibold pr-0.5 '>2</span>Beds</li>|
                  <li className='w-full py-0 pr-2.5 pl-6 my-0 mr-3 ml-0 text-sm font-normal leading-5 border-r-2 border-solid list-none flex justify-center items-center'>
                  < img className='w-6 h-6  block mr-2 ' src={bath} alt="bath"/>
                  <span className='font-semibold pr-0.5'>2</span>Baths</li>|
                  <li className='w-full py-0 pl-6 my-0 border-r-0 ml-0 text-sm font-normal leading-5 pr-0 mr-0  list-none flex justify-center items-center'>
                    <img className='w-6 h-6 block mr-2' src={unfurnished} alt="cupboard" />
                  <span className='font-semibold pr-0.5'></span >Unfurnished</li></ul>
                  
                  <ul className='w-full h-auto flex justify-start items-start flex-wrap list-none m-0 p-0'>
                  <li className='w-1/3 h-auto pb-7 pr-3 list-none p-0 m-0'>
                    
                  <div className='text-sm font-normal leading-4 pb-1 capitalize'>Super Built-Up Area</div>
                  <div className='text-sm font-semibold leading-5 flex-col  flex'><div className='w-auto h-auto flex justify-start  flex-wrap  text-gray-900'>901<span className='mr-2 ml-0.5 '><span className='flex items-center font-normal'>sqft</span></span></div>
                  <div className='text-xs font-normal leading-4 '><span className='font-normal mr-0.5 leading-normal'>₹</span>3900/sqft</div></div></li>
                  <li className='w-1/3 h-auto pb-7 pr-3 list-none m-0 p-0'><div className='text-sm font-normal leading-4 pb-1 capitalize '>Developer</div>
                  <div className='text-sm font-semibold leading-5'><span className=' text-sm font-semibold leading-5 text-gray-900' >Devprath Constructions LLP</span></div></li>
                  <li className='pr-0 w-1/3 h-auto pb-7 list-none m-0 p-0'> <div className='text-sm font-normal leading-4 pb-1 capitalize'>Project</div>
                  <div className='text-sm font-semibold leading-5'><span className='text-sm font-semibold leading-5 text-gray-900' >Mangalmurti Residency</span></div></li>
                  <li className='w-1/3 h-auto pb-7 pr-3 list-none m-0 p-0'>
                    <div className='text-sm font-normal leading-4 pb-1 capitalize'>Transaction type</div>
                    <div className='text-sm font-semibold leading-5 text-gray-900'>New Property</div>
                  </li>
                  <li className='w-1/3 h-auto pb-7 pr-3 list-none m-0 p-0'>
                    <div className='text-sm font-normal leading-4 pb-1 capitalize'>Status</div>
                    <div className='text-sm font-semibold leading-5 text-gray-900'>Under Construction</div>
                  </li>
                  <li className='pb-0 pr-0 w-1/3 h-auto list-none p-0 m-0'><div className='text-sm font-normal leading-4 pb-1 capitalize'>Lifts</div>
                  <div className='text-sm font-semibold leading-5 text-gray-900'>3</div></li>
                  <li className='pb-0 w-1/3 h-auto list-none m-0 p-0 pr-3'><div className='text-sm font-normal leading-4 pb-1 capitalize'>Furnished Status</div>
                  <div className='text-sm font-semibold leading-5 text-gray-900'>Unfurnished</div></li>
                  <li className='pb-0 w-1/3 h-auto pr-3 list-none m-0 p-0'>
                    <div className='text-sm font-normal leading-4 pb-1 capitalize'>Car Parking</div>
                    <div className='text-sm leading-5 font-semibold text-gray-900'>1 Open</div>
                  </li>
                  </ul></div>
            </div>
            <div className='w-full h-auto flex justify-start items-center relative'></div>
            <div className='w-full h-auto pt-5 mt-5 flex border-t-2 border-solid'>
              <div className='w-auto grow flex gap-x-2 shrink  h-auto '>
              <Button id='ContactBtn' onClick={ownerbtn} className={`rounded-full hover:bg-red-800 ${ownerClicked ? 'clicked' : ''}`} color="red"> Contact Owner</Button>
      <Button id='BrochureBtn' onClick={brochurebtn}  className={`rounded-full text-red-600 border border-red-400 bg-white hover:bg-red-500 hover:text-white ${brochureClicked ? 'clicked' : ''}`} >Download Brochure</Button>
              </div>
            </div>
          </div>
      
      
      </section>

    
    </div>
    <Footer3/>
    </div>
    
    
    
    
  )
}

export default Page2