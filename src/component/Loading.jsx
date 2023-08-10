import React from 'react'
import loading from '../assets/loading.gif';
export default function Loading() {

  return (
    <div className='flex justify-center items-center'>
        <img src={loading} className='h-32 object-cover' alt='loading image'/>
    </div>
  )
}
