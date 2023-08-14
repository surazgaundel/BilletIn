/* eslint-disable react/prop-types */
import React from 'react'
import {CiCircleRemove} from 'react-icons/ci'
import {FaMinus,FaPlus} from 'react-icons/fa'
import { priceFormat } from '../utils/helper';
import { useCartContext } from '../context/cartcontext';
import {Amount} from '../component';
export default function CartItem({id,image,name,color,price,amount}) {
  const {removeItem,toggleAmount}=useCartContext();

  const IncreaseAmount=()=>{
    toggleAmount(id,'increase')
}

const DecreaseAmount=()=>{
    toggleAmount(id,'decrease')
}

  return (
    <>
      <div key={id} className="cart-grid">
        <div className='flex flex-col md:flex-row gap-2 first-child'>
        <img src={image} className={`h-16 md:h-24 w-24 object-cover rounded-md`} alt={`featured products${name}`} />
          <section>
          <h1 className='capitalize font-bold text-sm my-2'>{name}</h1>
          <p className='text-sm text-darkRed font-bold leading-8 tracking-wide'>{priceFormat(price)}</p>
          <p>Colors:<button className='h-4 w-4 ml-1 rounded-full'  style={{backgroundColor:color}} ></button></p>
          </section>
        </div>
        <div className=" second-child flex items-center justify-around gap-2">
            <Amount 
            amount={amount} 
            IncreaseAmount={IncreaseAmount} 
            DecreaseAmount={DecreaseAmount}/>
            <p className="hidden sm:block font-bold">{priceFormat(amount*price)}</p>
            <section className='text-2xl text-darkRed cursor-pointer'>
                <CiCircleRemove onClick={()=>removeItem(id)}/>
            </section>
        </div>
    </div>
        <hr className="my-2"/>
        </>
  )
}
