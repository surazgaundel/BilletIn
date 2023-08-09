import React from 'react'
import { GiCompass} from 'react-icons/gi'
import { services } from '../utils/component';

export default function Services() {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-around h-[30vh]">
        <h1 className="text-2xl md:text-3xl font-bold leading-10">Exclusively Crafted Furniture<br/>
        Tailored Just for You</h1>
        <p className="md:text-xl md:w-[40%] p-1 mt-2 md:mt-0">Step into our world of relaxation and let your mind unwind as you immerse yourself in the peaceful ambiance we've created just for you.</p>
      </div>
      <div className="flex flex-wrap gap-5 mt-10">
        {services.map(service=>{
          let{id,title,text}=service;
          return(
              <div key={id} className="flex flex-col p-2 sm:rounded-md items-center justify-center  md:w-[30rem] m-auto h-[30vh] text-white bg-green hover:scale-105">
                <div className="p-3 text-xl bg-darkRed rounded-full">
                  <GiCompass/>
                </div>
                <h1 className='capitalize  md:text-xl mb-2'>{title}</h1>
                <p className='text-sm tracking-wide h-[20vh]'>{text}</p>
              </div>
          )
        })}
      </div>
    </div>
  )
}
