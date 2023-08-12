import React from 'react'
import { BsStarFill,BsStarHalf, BsStar } from 'react-icons/bs';
export default function Stars({stars, reviews}) {
    console.log(stars)
    const tempStar=Array.from({length:5},(item,index)=>{
        const number=index+0.5;
        return(
            <span key={index} >
                {
                    stars >=index+1?
                    <BsStarFill/>:
                    stars>=number?
                    <BsStarHalf/>:
                    <BsStar/>
                }
            </span>
        )
    });
  return (
    <div className="flex gap-2 my-2">
        <div className="flex gap-1 items-center">{tempStar}</div>
        <div><span className="font-bold">({reviews}</span> customer reviews)</div>
    </div>
  )
}
