import React from 'react'
import {BsLinkedin,BsTwitter,BsInstagram} from 'react-icons/bs'

export default function Footer() {
  return (
    <div className="bg-green text-white flex flex-row justify-around h-[10vh] items-center">
      <div>
      <h5>&copy; {new Date().getFullYear()}<span className="ml-1 font-semibold">BilletIn</span></h5>
      <h5>All rights reserved.</h5>
      </div>
      <div className="flex  justify-center gap-5 w-[20%] items-center text-xl cursor-pointer">
        <span><BsLinkedin/></span>
        <span><BsTwitter/></span>
        <span><BsInstagram/></span>
        </div>
    </div>
  )
}
