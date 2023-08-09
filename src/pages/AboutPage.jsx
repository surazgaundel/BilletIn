import React from 'react'
import {PageHero} from '../component'
import About from '../assets/about.jpeg';

export default function AboutPage() {
  return (
    <div>
    <PageHero title='About'/>
    <div className="flex flex-col md:flex-row items-center justify-around h-full container">
        <img src={About} className="h-[50vh] sm:h-[60vh] md:h-[70vh] mt-5 object-cover shadow-lg shadow-green rounded-md" alt='about image'/>
        <article className="md:ml-4 md:w-1/2 my-5">
          <h2 className='text-2xl md:text-4xl font-semibold underline underline-offset-4 my-4'>Our Story</h2>
          <p className='text-sm md:text-base w-[96%] md:w-full'>Our e-commerce platform is a one-stop destination for furniture and interior design products. We are dedicated to promoting local brands and uplifting the livelihood of local communities. Every purchase you make not only adds beauty to your home but also supports talented artisans and craftsmen who pour their heart and skill into each creation. Join us in making a positive impact while creating the perfect ambiance for your living spaces.</p>
        </article>
      </div>
    </div>
  )
}
