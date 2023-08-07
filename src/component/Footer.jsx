import React from 'react'

export default function Footer() {
  return (
    <div className="bg-green text-darkGreen flex flex-col justify-center h-[10vh] items-center">
      <h5>&copy; {new Date().getFullYear()}<span className="ml-1 font-semibold">BilletIn</span></h5>
      <h5>All rights reserved.</h5>
    </div>
  )
}
