import React from 'react'
import { useFilterContext } from '../context/filtercontext'
import {BsList,BsGrid} from 'react-icons/bs'

export default function Sort() {
  const {filteredProducts,gridView,setGridView,setListView,sort,updateSort}=useFilterContext();


  return (
    <div className="mt-3 text-sm md:text-base">
      <div className="flex gap-1">
        <button onClick={setGridView} className={`${gridView?'bg-green text-white':''} border-2 border-green rounded-sm p-[0.1rem]`}><BsGrid/></button>
        <button onClick={setListView} className={`${!gridView?'bg-green text-white':''} border-2 border-green rounded-sm p-[0.1rem]`}><BsList/></button>
      <p>{filteredProducts.length} Products Found</p>
      <p className='lg:w-[30%] h-0.5 bg-green mt-4 ml-4'/>
      <form>
        <label htmlFor='sort'>Sort By:</label>
        <select value={sort} onChange={updateSort} className='bg-white border-2 border-green checked:bg-green rounded-sm' name='sort' id='sort'>
          <option value='price-ascend' className='hover:bg-green'>Price (low to high)</option>
          <option value='price-descend' className='hover:bg-green'>Price (high to low)</option>
          <option value='name-ascend' className='hover:bg-green'>Name (A-Z)</option>
          <option value='name-descend' className='hover:bg-green'>Name (Z-A)</option>
        </select>
      </form>
      </div>
    </div>
  )
}
