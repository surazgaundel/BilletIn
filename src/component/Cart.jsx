import React from "react";
import { NavLink } from "react-router-dom";
import {TiShoppingCart} from 'react-icons/ti';
import {AiOutlineLogin,AiOutlineLogout} from 'react-icons/ai';
import { useProductsContext } from "../context/productcontext";
import { useCartContext } from "../context/cartcontext";
export function Cart() {
    const{closeSidebar} = useProductsContext();
    const {totalItems} = useCartContext();

  return <div className='gap-5 flex '> 
            <NavLink to='/cart' className='flex gap-1 justify-center items-center' onClick={closeSidebar}>
                Cart
                <span className='text-green text-xl relative'>
                <TiShoppingCart />
                <span className=" text-xs item-number">{totalItems}</span>
                </span>
            </NavLink>
            <NavLink to='/login'className='flex gap-1 justify-center items-center' onClick={closeSidebar}>
                Login
                <span className='text-green text-xl'><AiOutlineLogin/></span></NavLink>
        </div>;
}
