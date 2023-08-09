import React from 'react'
import { Link } from 'react-router-dom'

export default function PageHero({title}) {
  return (
    <div className="h-[10vh] bg-green text-white flex items-center justify-center">
        <div className="w-[85%] text-2xl">
            <Link to='/' className='text-darkRed'>Home</Link>/{title}
        </div>
    </div>
  )
}
