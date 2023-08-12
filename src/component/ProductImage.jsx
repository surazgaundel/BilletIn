/* eslint-disable react/prop-types */
import { useState } from 'react'

export default function ProductImage({images=[{url:''}]}) {
    const [headImage,setHeadImage]=useState(images[0]);

  return (
    <div className="flex flex-col justify-center">
        <img className='md:h-[50vh] object-cover rounded-sm shadow-md' src={headImage.url} alt={headImage.filename}/>
        <div className='flex flex-row flex-wrap justify-around shadow-md p-1 sm:gap-2 my-2'>
        {images.map((image,index)=><img key={image.id} className={`${image.url===headImage.url && 'border-4'} h-[5vh] w-[4rem] sm:h-[15vh] sm:w-[8rem] md:h-[14vh] object-cover p-[0.2rem] rounded-sm hover:border-2 cursor-pointer border-green`} onClick={()=>setHeadImage(images[index||0])} src={image.url} alt={image.filename}/>)}
        </div>
    </div>
  )
}
