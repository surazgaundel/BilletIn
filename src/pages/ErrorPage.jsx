import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageNotFoundImage from '../assets/error.png';
export default function ErrorPage() {
  const navigate=useNavigate()
  return (
    <div className="container flex flex-col items-center justify-center">
      <img src={PageNotFoundImage} className="object-fit w-24 md:w-max" alt='page not found image'/>
      <h2 className="mt-2 text-xs sm:text-sm md:text-base font-semibold">Sorry, I didn&apos;t see clearly, you might be. Better to return home.</h2>
      <button onClick={()=>navigate('/')} className=' px-2 py-1 mt-5 rounded-md text-white transition ease-in-out delay-150 bg-darkRed hover:-translate-y-1 hover:scale-110 hover:bg-green duration-300'>Back Home</button>
    </div>
  )
}
