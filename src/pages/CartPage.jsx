import React from 'react'
import { useCartContext } from '../context/cartcontext'
import { Link } from 'react-router-dom';
import { PageHero } from '../component';
export default function CartPage() {
  const {cart}=useCartContext();
  if(cart.length<1){
    return(
      <div className='container flex flex-col justify-center items-center'>
        <h1 className='text-xl'>Your cart is empty.</h1>
        <Link to='/products' className='hover-btn text-base'>All products</Link>
      </div>
    )
  }
  return (
    <div>
      <PageHero title='cart'/>
      <div className='container'>

      </div>
    </div>
  )
}
