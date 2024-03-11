import React, { useState } from 'react'

function TestimonialSlider() {
const Data = [
   { 
    text_content: "Overall, it's been a great experience and even more than that. It's always productive and fun to work with professionals like the True Homes Property Group team."
   },
   { 
   text_content: "I just closed my first transaction with the good people at True Homes Property Group and wanted to take a moment to thank you for your professionalism and assistance throughout such a difficult sale."
  },
  { 
  text_content: "Absolutely excellent! Very responsive with timing and ability to accommodate. Any of my concerns were immediately addressed."
 },
 {
 text_content:"I’d like to say that [True Homes Property Group] worked diligently to get my property out of foreclosure status. Without them I don’t know what would’ve happened to my credit rating. Thanks…for all your hard work!"
}
]
const [current, setCurrent]=useState(0);
const length = Data.length;

const previous =() => {
    setCurrent(current === 0 ? length -1 : current -1); 
}
const next = () => {
    setCurrent(current === length -1 ? 0 : current + 1);
}
  return (
    <section className='flex w-full my-auto justify-center text-center items-center'>
        <div className='flex justify-center w-[700px] px-4 shadow-xl py-4 items-center bg-gray-200'>
        {Data.map((item, index) => index === current && <div key={index}>
            <h1  className='pb-4 text-4xl flex justify-center'>Testimonials</h1>
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </div>
            <div className='flex'>
                <div>
                <button type='button' className='bg-gray-400 p-3 mr-4' onClick={previous}>
                    <i class="fa-solid fa-arrow-left"></i>
                    </button>
                </div>
            <div><span >{item.text_content}</span></div>
                <div>  <button onClick={next} className='bg-gray-400 p-3 ml-4' type='button'>
                    <i class="fa-solid fa-arrow-right"></i>
                    </button></div>
                 </div>
        </div>    
         )
        }
    </div>
    </section>
  )
}

export default TestimonialSlider