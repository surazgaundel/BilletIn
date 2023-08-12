import React from 'react'
import { Link } from 'react-router-dom'

export default function PageHero({title,product}) {
  return (
    <div className="h-[10vh] bg-green text-white flex items-center justify-center">
        <div className="w-[85%] md:text-2xl capitalize">
            <Link to='/' className='text-darkRed'>Home</Link>/
            {product && <Link to='/products' className='text-darkRed'>Products</Link>}{product && '/'}{title}
        </div>
    </div>
  )
}
