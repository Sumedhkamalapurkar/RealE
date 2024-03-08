import React from "react";
import about from "../assets/images/about.jpg";
import aboutbg from "../assets/images/aboutbg.jpg"; 

function About3() {
  return (
    <div className="w-full md:w-full h-full">
      <header className="h-68 w-full relative">
        <img
          src={about}
          alt="about"
          className="w-full h-full object-cover  absolute"
        />
        <div className="p-32">
          <h1 className="text-white text-6xl relative text-center font-bold">
            ABOUT US
          </h1>
        </div>
      </header>

      <div id="trueHomes" className="box-border block relative">
        <div className=" md:w-auto flex flex-wrap flex-row justify-center px-20">
          <div className="py-[40px] flex flex-col text-center">
            <div>
              <h2 className="text-xl text-[#353535] pb-2">
                A REAL ESTATE SOLUTIONS COMPANY
              </h2>
            </div>
            <div>
              <h1 className="text-[34px] md:text-[58px] text-[#353535]">
                TRUE HOMES PROPERTY GROUP, LLC
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div id="aboutUs" className="w-full">
        <div className="flex flex-wrap flex-row px-20 w-full gap-5 pt-8 pb-8  bg-[rgba(238,238,238,0.66)]">
          <div className="w-[350px] md-w-1/3 md:float-left">
            <h1 className="text-2xl text-[#353535] pb-3">OUR FAVORITE QUOTE</h1>
            <p className="text-sm text-[#353535] pb-2">
              "To give real service you must add something which cannot be
              bought or measured with money, and that is sincerity and
              integrity."
            </p>
            <span className="text-lg text-[#DDB55D] ">
              -Douglas Adams-
              <p className="text-sm text-[#DDB55D]">Author</p>
            </span>
          </div>
          <div className="float-right w-[740px] text-[#353535]">
            <h1 className="text-2xl">ABOUT US</h1>
            <div className="pb-2 pt-2 text-sm">
              <span>
                True Homes Property Group is a professional, full service real
                estate solutions firm that buys and sells properties throughout
                the Space Coast area of Florida. We specialize in buying
                distressed homes, renovating and reselling them to retail home
                buyers and landlords.
              </span>
            </div>
            <div className="text-sm">
              <span>
                At True Homes Property Group, LLC, our team is highly motivated,
                knowledgeable, ethical and resourceful. Qualified to handle any
                real estate transaction, our dedicated staff is committed to
                helping people with their real estate needs and making
                successful deals happen. Our team of professionals has the
                integrity to follow up on our promises, and the expertise to
                navigate any transaction to ensure you're fully informed for
                making the best decision possible.
              </span>
            </div>
          </div>
        </div>
      </div>

<div className="px-20 text-center py-8 ">
  <div className="pb-4">
    <h1 className="md:text-[58px] text-[34px] text-[rgb(53,53,53)]">OUR APPROACH</h1>
    </div>
    
  <div className="flex justify-center">
    <span className="text-sm text-[#353535] md:w-[600px]">At True Homes Property Group, it's our goal to not only have a positive effect on ourselves and our families - but also to inspire, motivate, and create lasting change in everyone we encounter</span>
  </div>
</div>

 <div className="relative py-4 ">
  <img src={aboutbg} alt="aboutbg" className="w-full h-full absolute object-cover opacity-70" />
<div className="p-[5px] md:flex flex-row px-20 justify-center gap-4 text-center text-white relative my-8 ">

  <div className="md:w-1/3 pb-5">
<h1 className="text-[24px] pb-5 ">COMMUNITY REJUVENATION</h1>
    <p className="text-sm pb-4">We aim to rejuvenate neighborhoods and increase the standard of living by improving the overall quality of housing for the residents</p>
  </div>
  <div className="md:w-1/3 pb-5">
    <h1 className="text-[24px] pb-4 md:pb-0">SOLUTIONS & SYSTEMS ORIENTED</h1>
    <p className="text-sm pb-4">Our core business lies within our systems, education and knowledge of the real estate industry</p>
  </div>
  <div className="md:w-1/3">
    <h1 className="text-[24px] pb-4">TEAM APPROACH</h1>
    <p className="text-sm">We have an aggressive team approach, and a top-notch ability to expand our client base through our knowledge of deal structuring and advanced real estate techniques</p>
  </div>
</div>
</div> 


<div className="px-20 text-center py-14 ">
  <div className="pb-4">
    <h1 className="text-2xl text-[rgb(53,53,53)]">WHY CHOOSE US</h1>
    </div>
    
  <div className="flex justify-center">
    <span className="text-sm text-[#353535] md:w-[600px]">True Homes Property Group is committed to rejuvenating Space Coast communities through our systematic and disciplined approach, and creating lasting change in every neighborhood we encounter.</span>
  </div>
</div>

<div className="p-[5px] md:flex flex-row px-20 justify-center gap-4 text-center text-[#353535] relative md:my-8 ">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <div className="md:w-1/3 pb-5">
<h1 className="text-[24px] pb-5 ">
<i class="fa-solid fa-envelope"></i></h1>
    <p className="text-sm pb-4">
    Ben.Bazemore@
RealEstate.com
    </p>
  </div>
  <div className="md:w-1/3 pb-5">
    <h1 className="text-[24px] pb-4 "><i class="fa-solid fa-phone"></i></h1>
    <p className="text-sm pb-4">321.323.9507</p>
  </div>
  <div className="md:w-1/3">
    <h1 className="text-[24px] pb-4"><i class="fa-solid fa-location-dot"></i></h1>
    <p className="text-sm">PO Box 140398, Melbourne, FL 32940</p>
  </div>
</div>


        
    </div>
  );
}

export default About3;
