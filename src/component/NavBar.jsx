import {useState} from 'react'
import { Cart } from './Cart';
import Logo from '/Logo.svg';
import { NavLink } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import { links } from '../utils/component';
import {RxCross2} from 'react-icons/rx';
import { useProductsContext } from '../context/productcontext';

export default function NavBar() {
  const{isSidebarOpen,toggleSidebar } =useProductsContext();

  return (
    <div className="flex justify-around items-center h-10vh">
        <div>
        <NavLink to='/' >
        <img src={Logo} className='w-32 sm:w-40 md:w-52' alt="Logo" />
        </NavLink>
        </div>
        <div className="gap-2 justify-around w-1/3 hidden md:flex">
          {
            links.map(link=>{
              const {id,text,url}=link;
              return <NavLink key={id} to={url} className='capitalize text-xl hover:underline hover:text-darkRed'>{text}</NavLink>

            })
          }
        </div>
        <div className='hidden md:block'>
        <Cart/>
        </div>
        <button type='button' className='text-green text-xl md:hidden' onClick={toggleSidebar}>{!isSidebarOpen?<GiHamburgerMenu/>:<RxCross2/>}</button>
    </div>
  )
}