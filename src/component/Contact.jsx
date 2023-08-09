import React from 'react'

export default function Contact() {

  return (
    <div className='bg-teal-50 h-[50vh] flex flex-col justify-center items-center'>
        <div className='flex flex-col gap-2'>
        <h1 className='text-xl md:text-3xl m-auto font-bold'>Join our newsletter and get 13% off</h1>
        <p className='text-sm md:text-base w-[70%] m-auto tracking-wide'>By subscribing to our newsletter, you will unlock a 13% discount on your next purchase. Don&apos;t miss out on this opportunity to save while staying connected with us! Simply join and enjoy the benefits of being part of our community.</p>
        </div>
        <form className='flex gap-3 h-[10vh] items-center md:w-[30%]'
        action="https://formspree.io/f/xbjvgdwa"
        method="POST"
        >
            <input type='email' placeholder='example@email.com' className='bg-transparent border-green border-2 p-1 rounded-l-lg w-[90%]' name='email'/>
            <button type='submit' className='bg-green text-white rounded-r-lg px-3 py-1 hover:bg-darkRed'>Join</button>
        </form>
    </div>
  )
}
