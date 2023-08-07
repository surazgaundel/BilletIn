import React from "react";
import { NavLink } from "react-router-dom";
import {TiShoppingCart} from 'react-icons/ti';
import {AiOutlineLogin,AiOutlineLogout} from 'react-icons/ai';
export function Cart() {

  return <div className='gap-5 flex '> 
            <NavLink to='/cart' className='flex gap-1 justify-center items-center'>
                Cart
                <span className='text-green text-xl relative'>
                <TiShoppingCart />
                <span className=" text-xs item-number">{"2"}</span>
                </span>
            </NavLink>
            <NavLink to='/login'className='flex gap-1 justify-center items-center'>
                Login
                <span className='text-green text-xl'><AiOutlineLogin/></span></NavLink>
        </div>;
}
