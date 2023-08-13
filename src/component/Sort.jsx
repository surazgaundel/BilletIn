import {useState} from 'react'
import { useFilterContext } from '../context/filtercontext'
import {BsList,BsGrid} from 'react-icons/bs'

export default function Sort() {
  const {filteredProducts,gridView}=useFilterContext();

  const handleView=()=>{

  }
  return (
    <div className="mt-3">
      <div className="flex gap-1">
        <button className={`${gridView?'bg-green text-white':''} border-2 border-green rounded-sm p-[0.1rem]`}><BsGrid/></button>
        <button className={`${!gridView?'bg-green text-white':''} border-2 border-green rounded-sm p-[0.1rem]`}><BsList/></button>
      <p>{filteredProducts.length} Products Found</p>
      <p className='w-[40%] h-0.5 bg-green mt-4 ml-4'/>
      </div>
    </div>
  )
}
