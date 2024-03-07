import { React, useState } from "react";
import whatsapp from "../assets/images/whatsapp.jpg";
import { checkbox } from "@material-tailwind/react";
import Select from "react-select";

const countryCodes = [
  { label: "+1 (USA)", value: "+1" },
  { label: "+44 (UK)", value: "+44" },
  { label: "+91 (IND)", value: "+91" },
];

function Property() {
  const [formValues, setFormValues] = useState({
    Name: "",
    Email: "",
    Mobile: "",
  });
  const [errors, setErrors] = useState({});

  const handleInput= (name, value) => {  
    setFormValues({...formValues, [name]:value})
    console.log(formValues)
  }

   const handleSubmit = (e) => {
     e.preventDefault();
     setErrors(Validate(formValues));

     if (Object.keys(errors).length === 0){
      console.log(form)
     }
   }

   const Validate = (values) => {
     const errors = {};
     const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if (!values.Name) {
       errors.Name = "Name is Required";
     }
     if(!values.Email){
      errors.Email = "Email is Required";
     }
     if (!email_pattern.test(values.Email)) {
       errors.Email = "Email is not correct";
     }
     if (mobile.length !== 10) {
       errors.mobile = "Contact number must be 10 digits.";
     }

     return errors;
   }

  const [selectedProperty, setSelectedProperty] = useState("");

  const handlePropertyChange = (event) => {
    setSelectedProperty(event.target.value);
  };

  return (
    <form
      action="Property"
      method="Post"
      className="m-0 p-0 border-0 font-normal items-baseline"
    >
      <div className="w-[412px] md:max-w-[600px] m-auto md-w-[1200px] flex justify-center"> 
        <div className="md:w-[500px] m-0 py-0 "> 
          <div className="pt-16 pb-8 px-0 box-border md:w-[500px] ">
            <span>
              <h1 className="text-3xl font-bold pb-2.5">
                Sell or Rent your Property
              </h1>
              <div className="md:w-[500px]">
                You are posting this property for{" "}
                <span className="w-12 bg-[#fc3] inline-block text-center font-semibold border rounded-sm">
                  Free
                </span>
              </div>
            </span>
          </div>

          <div className="border-t-0 border-solid">
            <div className="pt-2.5 pb-5 ">
              <div className="text-lg pb-7 font-bold text-[#303030] ">
                Personal Details
              </div>
              <div id="formEle" className=" float-left w-[315px] pb-5">
                <div className="md:pr-8 pr-6 float-left leading-4 text-sm md:text-base text-[#606060]">
                  I am
                </div>
                <div className="float-left relative  text-sm md:text-base">
                  <div>
                    <ul className="font-normal list-none m-0 p-0">
                      <li className="ml-0 inline">
                        <span className="w-5 h-5 mr-[3px] inline-block cursor-pointer">
                          <input
                            type="radio"
                            name="iam"
                            id="owner"
                            className="w-5 box-border opacity-80"
                          />
                        </span>
                        <label className="cursor-pointer relative text-[#303030]">
                          Owner
                        </label>
                      </li>
                      <li className="inline ml-5">
                        <span className="w-5 h-5 mr-[3px] inline-block cursor-pointer">
                          <input
                            type="radio"
                            name="iam"
                            id="agent"
                            className="w-5 box-border opacity-80"
                          />
                        </span>
                        <label className="cursor-pointer relative text-[#303030]">
                          Agent
                        </label>
                      </li>
                      <li className="inline ml-5">
                        <span className="w-5 h-5 mr-[3px] inline-block cursor-pointer">
                          <input
                            type="radio"
                            name="iam"
                            id="builder"
                            className="w-5 box-border opacity-80"
                          />
                        </span>
                        <label className="cursor-pointer relative text-[#303030]">
                          Builder
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  id="Name"
                  className="float-left w-[315px] pb-5 mt-4 text-[#303030] block"
                >
                  <div className="w-full text-sm md:text-base pb-1 pt-2">Name</div>
                  <div id="formvalue" className="relative text-sm md:text-base">
                    <span className="inline-block relative">
                      <input
                        name="Name"
                        placeholder="Enter Your Name"
                        value={formValues.Name}
                        type="text"
                        className="h-8 leading-8 w-[280px] md:w-[315px] cursor-text pr-2 bg-none border-solid  border-b-[2px]"
                        onChange={handleInput}
                      />
                      {/* {errors.name && (
                        <p style={{ color: "red" }}>{errors.name}</p>
                      )} */}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
          {/* Contact Number */}
          <Select
            options={countryCodes}
            value={formValues.countryCode}
            onChange={(selectedOption) =>
              handleInput("countryCode", selectedOption)
            }
            className="w-32 text-base"
          />
          <input
            label="contact Number"
            type="tel"
            size="sm"
            placeholder="Mobile Number"
            className="text-sm "
            onChange={(e) => handleInput("Mobile",e.target.value)}
          />
        </div>

                <div id="mobile" className="block float-left w-[315px] pb-5">
                  <div className="w-full pb-1 text-sm md:text-base">Mobile</div>
                  <div className="relative text-sm md:text-base float-left border-0 border-b-2">
                    <div className="mr-2.5  relative float-left ">
                      <input
                        type="button"
                        name="mobile"
                        className="w-[90px] h-8"
                        onChange={handleInput}
                      />
                      {errors.mobile && (
                        <p style={{ color: "red" }}>{errors.mobile}</p>
                      )}
                      <span className="absolute left-0 h-8 w-[92px] opacity-70 mt-2">
                        IND +91
                      </span>
                    </div>
                    <div className="relative float-left">
                      <span className="inline-block relative">
                        <input
                          id="mobileNo"
                          name="email"
                          placeholder="Mobile Number"
                          type="text"
                          className="w-[180px] h-8 leading-8 cursor-text"
                          onChange={handleInput}
                        />
                      </span>
                    </div>
                  </div>
                  <div
                    id="wrapper"
                    className="w-[302px] md:w-[350px] h-[72px] py-3 px-4 border mt-14 rounded-lg border-solid border-[#ffde82] bg-[#fffcf2]"
                  >
                    <div className="text-sm font-semibold">
                      Enter your{" "}
                      <span className="w-6 h-6 inline-block align-middle mx-1 ">
                        <img src={whatsapp} alt="#" />
                      </span>
                      WhatsApp No. to get enquiries from Buyer / Tenant
                    </div>
                  </div>
                </div>

                <div id="Email" className="block float-left w-[315px] pb-5">
                  <div className="w-full text-sm md:text-base pb-1 pt-2">Email</div>
                  <div className="relative float-left text-sm md:text-base">
                    <span className="inline-block relative">
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter Your Email"
                        className="border-b-2 w-[280px] md:w-[315px] overflow-hidden leading-8 h-8 pr-2 cursor-text"
                      />
                    </span>
                  </div>
                </div>

                <div id="property" className="pt-2 pb-4">
                  <div className="text-lg  pb-5 font-bold text-[#303030]">
                    Property Details{" "}
                  </div>
                  <div className="w-[360px] float-left pb-5 text-[#303030]">
                    <div className="pr-6 md:pr-8 text-sm md:text-base float-left leading-4 text-[#606060]">
                      For
                    </div>
                    <div id="formval" className="relative float-left text-sm">
                      <div classname="">
                        <ul className="m-0 p-0 font-normal">
                          <li className="ml-0 inline float-left list-none">
                            <span className="w-5 h-5 mr-[3px] inline-block cursor-pointer align-[1px]">
                              <input
                                id="sale"
                                name="for"
                                type="radio"
                                className="h-5 md:h-6 w-4"
                              />
                            </span>
                            <label className="relative left-[1px] text-sm md:text-base top-[-5px]">
                              Sale
                            </label>
                          </li>
                          <li className="inline ml-5 md:ml-8 float-left">
                            <span className="w-5 h-5 mr-[3px] inline-block cursor-pointer align-[1px]">
                              <input
                                id="Rent"
                                name="for"
                                type="radio"
                                className="h-5 md:h-6 w-4"
                              />
                            </span>
                            <label className="relative left-[px] text-sm md:text-base top-[-5px]">
                              Rent / Lease
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="propType" className="float-left w-[315px] pb-5 ]">
                  <div className="w-full text-sm md:text-base pb-3">Property Type</div>
                  <div className="relative float-left">
                    <div className="relative float-left">
                      <select
                        onChange={handlePropertyChange}
                        id="propType"
                        name="propType"
                        className=" z-[-999] p-1 md:w-[315px] right-0 bg-gray-100 w-[280px] block"
                      >
                        <option
                          value="-1"
                          className="py-[2px] px-[5px] border-b-0 text-sm"
                        >
                          Select property type
                        </option>
                        <optgroup
                          label="All Residential"
                          className="fon"
                        ></optgroup>
                        <option
                          value="Flat/Apartment"
                          className="py-[2px] px-[5px] border-b-0 text-sm"
                        >
                          Flat/Apartment
                        </option>
                        <option
                          value="Residential House"
                          className="py-[2px] px-[5px] border-b-0 text-sm"
                        >
                          Residential House
                        </option>
                        <option value="Villa">Villa</option>
                        <option value="Builder Floor Apartment">
                          Builder Floor Apartment
                        </option>
                        <option value="Penthouse">Penthouse</option>
                        <option value="Studio Apartment">
                          Studio Apartment
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div id="propLocation " className="float-left">
                  <div className="pt-[10px] pb-[15px] ">
                    <div className="pb-4 text-lg font-bold text-[#303030]">
                      Property Location
                    </div>
                    <div className="w-full text-sm md:text-base pb-2">City</div>
                    <div className="float-left text-sm md:text-base">
                      <span className="inline-block relative">
                        <input
                          type="text"
                          id="city"
                          placeholder="Enter City"
                          className="h-8 leading-8 w-[280px] md:w-[315px] cursor-text border-0 border-b-[2px]"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="relative w-[315px] pb-5">
                    <div className="pr-6 pt-10 leading-4 text-sm md:text-base pb-2">
                      Locality
                    </div>
                    <div className="float-left text-sm md:text-base">
                      <span className="inline-block relative">
                        <input
                          type="text"
                          id="locality"
                          placeholder="Enter Locality"
                          className="h-8 leading-8 w-[280px] md:w-[315px] cursor-text border-0 border-b-[2px] "
                        />
                      </span>
                    </div>
                  </div>
                </div>

                <div id="login" className="pt-14 float-left">
                   <div className="pt-3 text-sm md:text-base">
                    <ul>
                      <li className="w-[630px] ml-0">
                        <span className="mr-1 w-5 h-5 align-[2px]">
                          <input
                            type="checkbox"
                            name="exclusive"
                            id="exclusive"
                          />
                        </span>
                        <label className="relative left-[1px] md:ml-4 ml-2">
                          I am Posting this property 'exclusively' on
                          Magicbricks
                        </label>
                      </li>
                    </ul>
                  </div> 
                   <div className="pt-3 text-sm md:text-base">
                    <ul>
                      <li className="w-[412px] md:w-[630px] ml-0">
                        <span className="mr-1 w-5 h-5 align-[2px]">
                          <input type="checkbox" name="terms" id="terms" />
                        </span>
                        <label className="relative left-[1px] ml-2 md:ml-4">
                          I agree to Magicbricks T&C, Privacy Policy, & Cookie
                          Policy
                        </label>
                      </li>
                    </ul>
                  </div> 
                   <div className="pt-3 text-sm md:text-base">
                    <ul>
                      <li className="w-[630px] ml-0">
                        <span className="mr-1 w-5 h-5 align-[2px]">
                          <input
                            type="checkbox"
                            name="whatsapp"
                            id="whatsapp"
                          />
                        </span>
                        <label className="relative left-[1px] ml-2 md:ml-4">
                          I want to receive responses on{" "}
                          <span>
                            <img
                              className="w-4 h-4 inline-block align-middle mr-[2px] "
                              src={whatsapp}
                              alt="whatsapp"
                            />
                          </span>{" "}
                          Whatsapp
                        </label>
                      </li>
                    </ul>
                  </div> 

                   <div
                    id="loginBtn"
                    className="pt-[25px] pb-[30px] w-[200px] relative"
                  >
                    <a
                      href="#"
                      id="btnLogin"
                      className="h-8 leading-8 p-2 text-sm md:text-base text-center border rounded text-[#fff] bg-blue-700  hover:bg-blue-800"
                    >
                      Login & Post Property
                    </a>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Property;
