import React from 'react'
import {BsLinkedin,BsTwitter,BsInstagram} from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="bg-green text-white flex flex-row justify-around h-[10vh] items-center">
      <div>
      <h5>&copy; {new Date().getFullYear()}<span className="ml-1 font-semibold">BilletIn</span></h5>
      <h5>All rights reserved.</h5>
      </div>
      <div className="flex  justify-center gap-5 w-[20%] items-center text-xl cursor-pointer">
        <span><Link to='https://www.linkedin.com'><BsLinkedin/></Link></span>
        <span><Link to='https://www.x.com'><BsTwitter/></Link></span>
        <span><Link to='https://www.instagram.com'><BsInstagram/></Link></span>
        </div>
    </div>
  )
}
