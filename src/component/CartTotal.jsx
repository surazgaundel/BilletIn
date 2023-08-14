import React from 'react'
import { useCartContext } from '../context/cartcontext'
import { priceFormat } from '../utils/helper';
import { Link } from 'react-router-dom';
export default function CartTotal() {
    const {totalAmount,shippingFee}=useCartContext();

  return (
    <div>
        <section className="w-[94%] md:w-[40%] m-auto border rounded-md p-2 border-black">
            <h2 className="grid grid-cols-2 justify-items-end font-bold">SubTotal:<span>{priceFormat(totalAmount)}</span></h2>
            <h3 className="grid grid-cols-2 justify-items-end">Shipping Charge:<span>{priceFormat(shippingFee)}</span></h3>
            <hr/>
            <h1 className="grid grid-cols-2 justify-items-end font-bold">Total:<span>{priceFormat(totalAmount+shippingFee)}</span></h1>
        </section>
        <section className="mt-5 flex justify-center">
        <Link to='/checkout' className="hover-btn w-[40%] text-center">Checkout</Link>
        </section>
    </div>
  )
}
