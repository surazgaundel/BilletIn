import React from 'react'
import { Link } from 'react-router-dom'
import AboutImage from '../assets/about.jpeg';
import HeroImage from '../assets/hero.jpeg';
export default function Hero() {
  return (
    <div className="h-[70vh] flex flex-row items-center justify-around">
        <article className="p-1 w-[80%] md:w-[60%]">
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold tracking-wider'>&quot;Unwind your Mind,<br/> Embrace Serenity&quot;</h1>
            <p className='text-sm md:text-xl leading-8 my-10'> Seek out furniture that beckons you to sink in and indulge in pure bliss. Picture yourself lounging on plush sofas or nestling into the embrace of an armchair with delightfully cushioned seating. Enhance your comfort zone by opting for a peaceful art that allows you to fully unwind or a chaise lounge that invites endless relaxation possibilities</p>
            <Link to='/products' className=' px-4 text-xl py-2 rounded-md text-white transition ease-in-out delay-150 bg-darkRed hover:bg-green'>Shop Now</Link>
        </article>
        <article className='hidden relative md:block w-[20%] mr-3'>
            <img src={HeroImage} className='absolute bottom-0 rounded-md -left-10 h-32 border-green border-2' alt='hero image'/>
            <img src={AboutImage} className='rounded-md border-green border-2' alt='about image'/>
        </article>
    </div>
  )
}
