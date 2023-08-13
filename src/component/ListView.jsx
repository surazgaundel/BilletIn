import React from 'react'
import { useFilterContext } from '../context/filtercontext';
import { priceFormat } from '../utils/helper';
import { Link } from 'react-router-dom';
import {FiLink2} from 'react-icons/fi'
export default function ListView() {
    const {filteredProducts}=useFilterContext();


  return (
    <div>
        <div className="flex flex-wrap gap-1">
        {filteredProducts.map(product=>{
            const {id,name,image,price,description} = product;
            return(
                <div key={id} className="flex flex-row rounded-md gap-1 items-center justify-around md:w-full m-auto my-3 h-min shadow-md hover:scale-105">
                <div>
                <img src={image} className={`h-40 w-[40rem] object-cover rounded-t-md`} alt={`featured products${name}`} />
                </div>
                <div className="flex flex-col gap-2">
                <h1 className='capitalize font-bold my-2'>{name}</h1>
                <p className='text-sm text-darkRed font-bold leading-8 tracking-wide'>{priceFormat(price)}</p>
                <p>{description.substring(0,150)}...</p>
                <Link to={`/products/${id}`} className='text-darkRed text-base w-[5rem]'>
                Details<FiLink2 className='inline-block ml-1 text-center'/></Link>
                </div>
                </div>
            )
        })}
    </div>
    </div>
  )
}
