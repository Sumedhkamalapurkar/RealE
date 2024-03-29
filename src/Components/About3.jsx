import { React, useState } from "react";
import aboutbg3 from "../assets/images/aboutbg3.jpg";
import { Footer3 } from "./Footer3";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.jpg";

function About3() {
  const Data = [
    {
      text_content:
        "Overall, it's been a great experience and even more than that. It's always productive and fun to work with professionals like the True Homes Property Group team.",
    },
    {
      text_content:
        "I just closed my first transaction with the good people at True Homes Property Group and wanted to take a moment to thank you for your professionalism and assistance throughout such a difficult sale.",
    },
    {
      text_content:
        "Absolutely excellent! Very responsive with timing and ability to accommodate. Any of my concerns were immediately addressed.",
    },
    {
      text_content:
        "I’d like to say that [True Homes Property Group] worked diligently to get my property out of foreclosure status. Without them I don’t know what would’ve happened to my credit rating. Thanks…for all your hard work!",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = Data.length;

  const previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  return (
    <div className="w-full md:w-full h-full">
      <div id='header'>
        <div className="relative max-h-[350px] overflow-hidden flex justify-center items-center h-[250px]">
          <img
            src={aboutbg3}
            alt="about"
            className="w-full h-full absolute object-cover align-middle overflow-clip "
          />
          <div className="relative">
            <h1 className="text-[#fff] text-6xl font-bold text-center ">
              ABOUT US
            </h1>
          </div>
        </div>
      </div>
      <div id="trueHomes" className="box-border block relative">
        <div className=" md:w-auto flex flex-wrap flex-row justify-center px-20">
          <div className="py-[40px] flex flex-col text-center">
            <div>
              <h2 className="text-xl text-[#353535] py-2 font-semibold">
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
            <h1 className="text-2xl text-[#353535] font-semibold pb-3">
              OUR FAVORITE QUOTE
            </h1>
            <p className="text-base text-[#353535] pb-2">
              "To give real service you must add something which cannot be
              bought or measured with money, and that is sincerity and
              integrity."
            </p>
            <span className="text-lg font-semibold text-[#DDB55D] ">
              -Douglas Adams-
              <p className="text-sm text-[#DDB55D]">Author</p>
            </span>
          </div>
          <div className="float-right w-[740px] text-[#353535]">
            <h1 className="text-2xl font-semibold">ABOUT US</h1>
            <div className="pb-2 pt-2 text-base">
              <span>
                Real Estate Property Group is a professional, full service real
                estate solutions firm that buys and sells properties throughout
                the Space Coast area of Florida. We specialize in buying
                distressed homes, renovating and reselling them to retail home
                buyers and landlords.
              </span>
            </div>
            <div className="text-base">
              <span>
                At Real Estate, our team is highly motivated, knowledgeable,
                ethical and resourceful. Qualified to handle any real estate
                transaction, our dedicated staff is committed to helping people
                with their real estate needs and making successful deals happen.
                Our team of professionals has the integrity to follow up on our
                promises, and the expertise to navigate any transaction to
                ensure you're fully informed for making the best decision
                possible.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-20 text-center py-8 ">
        <div className="pb-4">
          <h1 className="md:text-[58px] text-[34px] text-[rgb(53,53,53)]">
            OUR APPROACH
          </h1>
        </div>

        <div className="flex justify-center">
          <span className="text-base text-[#353535] md:w-[600px]">
            At Real Estate, it's our goal to not only have a positive effect on
            ourselves and our families - but also to inspire, motivate, and
            create lasting change in everyone we encounter
          </span>
        </div>
      </div>

      <div className="relative py-4">
        {/* <img src={aboutbg4} alt="aboutbg" className="w-full h-full absolute object-cover"/>  */}
        <div className=" md:flex flex-row px-20 justify-center gap-8 text-center overflow-clip bg-gray-100 text-[#353535] relative p-10">
          <div className="md:w-1/3  ">
            <h1 className="text-[24px] pb-7 md:pb-8 font-semibold">
              COMMUNITY REJUVENATION
            </h1>
            <p className="text-base pb-7 md:pb-4 font-medium">
              We aim to rejuvenate neighborhoods and increase the standard of
              living by improving the overall quality of housing for the
              residents
            </p>
          </div>
          <div className="md:w-1/3 ">
            <h1 className="text-[24px] pb-4 md:pb-2 font-semibold ">
              SOLUTIONS & SYSTEMS ORIENTED
            </h1>
            <p className="text-base pb-7 md:pb-4 font-medium">
              Our core business lies within our systems, education and knowledge
              of the real estate industry
            </p>
          </div>
          <div className="md:w-1/3">
            <h1 className="text-[24px] pb-7 md:pb-8 font-semibold">TEAM APPROACH</h1>
            <p className="text-base font-medium">
              We have an aggressive team approach, and a top-notch ability to
              expand our client base through our knowledge of deal structuring
              and advanced real estate techniques
            </p>
          </div>
        </div>
      </div>

      <div className="px-20 text-center py-10 ">
        <div className="pb-4">
          <h1 className="text-2xl text-[rgb(53,53,53)] font-semibold">
            WHY CHOOSE US
          </h1>
        </div>
        <div className="flex justify-center">
          <span className="text-base text-[#353535] md:w-[800px] pb-6">
            Real Estate is committed to rejuvenating Space Coast communities
            through our systematic and disciplined approach, and creating
            lasting change in every neighborhood we encounter.
          </span>
        </div>
        {/* <div className="flex w-full justify-evenly ">
          <div className="flex flex-col justify-center"><img src={image1}  alt="" className="h-[172px] w-[120px] "/>
          <span><h2>Benjamin Bazemore</h2>
          <p>CEO & Acquisitions Specialist</p>
          </span>
          </div>
          <div><img src={image2} alt="" className="h-[170px] w-[130px]" />
          <span><h2>Benjamin Bazemore</h2>
          <p>CEO & Acquisitions Specialist</p></span>
          </div>
          <div><img src={image3} alt="" className="h-[170px] w-[140px]"/>
          <span><h2>Benjamin Bazemore</h2>
          <p>CEO & Acquisitions Specialist</p></span>
          </div>
        </div> */}
      </div>

      <section
        id="testimonial"
        className="flex w-full my-auto justify-center text-center items-center p-10 mb-10"
      >
        <div className="flex justify-center w-[700px] px-4 shadow-xl py-4 items-center bg-blue-200 border-0 rounded-md text-[#353535] transition-transform">
          {Data.map(
            (item, index) =>
              index === current && (
                <div key={index}>
                  <h1 className="pb-6 text-4xl flex justify-center">
                    Testimonials
                  </h1>
                  <div>
                    <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                      integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
                      crossorigin="anonymous"
                      referrerpolicy="no-referrer"
                    />
                  </div>

                  <div className="flex pb-4 items-center">
                    <div>
                      <button
                        type="button"
                        className="bg-gray-200 p-2 mr-4 hover:bg-gray-300"
                        onClick={previous}
                      >
                        <i class="fa-solid fa-arrow-left"></i>
                      </button>
                    </div>
                    <div>
                      <span className="text-xl mr-1">
                        <i class="fa-solid fa-quote-left"></i>
                      </span>
                      <span>{item.text_content}</span>
                    </div>
                    <div>
                      {" "}
                      <button
                        onClick={next}
                        className="bg-gray-200 p-2 ml-4 hover:bg-gray-300"
                        type="button"
                      >
                        <i class="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </section>

      <div className="p-[5px] md:flex flex-row px-20 justify-center gap-4 text-center text-[#353535] relative md:my-8 ">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <div className="md:w-1/3 pb-5">
          <h1 className="text-[24px] pb-5 ">
            <i class="fa-solid fa-envelope"></i>
          </h1>
          <p className="text-base pb-4">Ben.Bazemore@ RealEstate.com</p>
        </div>
        <div className="md:w-1/3 pb-5">
          <h1 className="text-[24px] pb-4 ">
            <i class="fa-solid fa-phone"></i>
          </h1>
          <p className="text-base pb-4">321.323.9507</p>
        </div>
        <div className="md:w-1/3">
          <h1 className="text-[24px] pb-4">
            <i class="fa-solid fa-location-dot"></i>
          </h1>
          <p className="text-base">PO Box 140398, Melbourne, FL 32940</p>
        </div>
      </div>
      <Footer3 />
    </div>
  );
}

export default About3;
