import React from 'react'
import { links } from '../utils/component';
import { Cart } from './Cart';
import { NavLink } from 'react-router-dom';
import { useProductsContext } from '../context/productcontext';
export default function Sidebar() {
  const {isSidebarOpen}=useProductsContext();
  console.log(isSidebarOpen)
  return (
    <div className={`${isSidebarOpen==false ? 'hidden':''} md:hidden`}>
        <div className="flex flex-col gap-2 justify-around">
          {
            links.map(link=>{
              const {id,text,url}=link;
              return <NavLink key={id} to={url} className='capitalize text-xl  hover:underline hover:text-green'>{text}</NavLink>
            })
          }
          <NavLink to='/checkout' className='capitalize text-xl hover:underline hover:text-green'>Checkout</NavLink>
        </div>
        <div className='flex justify-center'>
          <Cart/>
        </div>
    </div>
  )
}
