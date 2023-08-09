import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className="h-[70vh] flex flex-row items-center justify-center">
        <div>
            <h1>&quot;Unwind your Mind,<br/> Embrace Serenity&quot;</h1>
            <p> Seek out furniture that beckons you to sink in and indulge in pure bliss. Picture yourself lounging on plush sofas or nestling into the embrace of an armchair with delightfully cushioned seating. Enhance your comfort zone by opting for a peaceful art that allows you to fully unwind or a chaise lounge that invites endless relaxation possibilities</p>
            <Link to='/products' className=' px-2 py-1 mt-5 rounded-md text-white transition ease-in-out delay-150 bg-darkRed hover:-translate-y-1 hover:scale-110 hover:bg-green duration-300'>Explore</Link>
        </div>
    </div>
  )
}
