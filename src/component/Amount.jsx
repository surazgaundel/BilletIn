import React from 'react'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
export default function Amount({IncreaseAmount,DecreaseAmount,amount}) {
  return (
    <div className="flex gap-3 my-3">
        <button onClick={DecreaseAmount} className="border-2 p-1 rounded-md hover:ring-2 ring-green"><AiOutlineLeft/></button>
        <h1 className="text-2xl font-bold">{amount}</h1>
        <button onClick={IncreaseAmount} className="border-2 p-1 rounded-md hover:ring-2 ring-green"><AiOutlineRight/></button>
    </div>
  )
}
