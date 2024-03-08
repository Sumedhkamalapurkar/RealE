import React from "react";
import about from "../assets/images/about.jpg";

function About3() {
  return (
    <div className="w-full h-full">
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
        <div className="w-[400px] md:w-auto flex flex-wrap flex-row justify-center px-20">
          <div className="py-[40px] flex flex-col text-center">
            <div>
              <h2 className="text-xl text-[#353535] pb-2">
                A REAL ESTATE SOLUTIONS COMPANY
              </h2>
            </div>
            <div>
              <h1 className="text-5xl text-[#353535]">
                TRUE HOMES PROPERTY GROUP, LLC
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div id="aboutUs" className="w-full">
        <div className="flex flex-wrap px-20 w-full gap-5 pt-8 pb-8 bg-[rgba(238,238,238,0.66)]">
          <div className="w-[350px] md-w-1/3 md:float-left">
            <h1 className="text-2xl text-[#353535] pb-3">OUR FAVORITE QUOTE</h1>
            <p className="text-sm">
              "To give real service you must add something which cannot be
              bought or measured with money, and that is sincerity and
              integrity."
            </p>
            <span className="text-lg text-[#DDB55D]">
              -Douglas Adams-
              <p className="text-sm text-[#DDB55D]">Author</p>
            </span>
          </div>
          <div className="float-right w-[700px] text-[#353535]">
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
    </div>
  );
}

export default About3;
