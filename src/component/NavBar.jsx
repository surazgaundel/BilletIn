import React from 'react'
import Logo from '/Logo.svg';
import { NavLink } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import {RxCross2} from 'react-icons/rx';
import {TiShoppingCart} from 'react-icons/ti'
import { links } from '../utils/component';

export default function NavBar() {
  return (
    <div className="flex justify-around items-center">
        <div>
        <NavLink to='/' >
        <img src={Logo} className='w-32 sm:w-40 md:w-52' alt="Logo" />
        </NavLink>
        </div>
        <div className="flex gap-2 justify-around w-1/3">
          {
            links.map(link=>{
              const {id,text,url}=link;
              return <NavLink key={id} to={url} className='capitalize text-xl'>{text}</NavLink>

            })
          }
        </div>
        <div className='flex gap-2'> 
            <NavLink to='/cart'className='flex gap-1 justify-center items-center'>Cart<span className='text-green text-xl'><TiShoppingCart/></span></NavLink>
            <NavLink to='/login'>Login</NavLink>
        </div>
        <button type='button' className='text-green text-xl'><GiHamburgerMenu/></button>
        <button type='button' className='text-green text-xl'><RxCross2/></button>
    </div>
  )
}
