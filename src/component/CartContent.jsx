import React from 'react'
import { useCartContext } from '../context/cartcontext'
import { Link } from 'react-router-dom';
import {CartItem,CartTotal } from '../component';
export default function CartContent() {
    const {cart,clearCart}=useCartContext();

  return (
    <div className="mt-4">
        <div>
            {cart.map(item=>{
                return <CartItem key={item.id} {...item}/>
            })}
        </div>
        <div className="flex justify-around items-center bg-teal-50 h-[10vh]">
        <Link to='/products' className='hover-btn bg-green hover:scale-105 text-base'>CONTINUE SHOPPING</Link>
        <button className='hover-btn bg-red-600 hover:bg-red-700 text-base hover:scale-105' onClick={clearCart}>CLEAR CARTS</button>
        </div>
        <CartTotal/>
    </div>
  )
}
