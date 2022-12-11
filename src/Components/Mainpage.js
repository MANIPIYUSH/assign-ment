import React from 'react'
import image from "../assets/img2.PNG"
import image1 from "../assets/img3.PNG"
import image2 from "../assets/img5.PNG"

function Mainpage() {
  return (
    <>
    <div className='bg-slate-100'>
    <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-72 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center h-18">
                <img
                  className="block ml-24 w-auto lg:hidden"
                  src={image}
                  alt="Your Company"
                />
                <img
                  className="hidden w-auto lg:block"
                  src={image}
                  alt="Your Company"
                />
              </div>
            </div>
            <div className='items-center justify-center mr-36 mt-28'>
                 <img className="w-5/6" src={image2} alt="" />
            </div>
            <div className='flex flex-shrink-0 items-center h-18 mr-4'>
                <img className='block w-auto lg:hidden ' src={image1} alt="" />
                <img className='hidden w-auto lg:block ' src={image1} alt="" />
            </div> 
                      
          </div>
         

        </div>

        
      

        </div>
  </>
  )
}

export default Mainpage
