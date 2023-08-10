import React from 'react'
import { links } from '../utils/component';
import { Cart } from './Cart';
import { NavLink } from 'react-router-dom';
import { useProductsContext } from '../context/productcontext';
export default function Sidebar() {
  const {isSidebarOpen,closeSidebar}=useProductsContext();
  
  return (
    <div className={`${!isSidebarOpen ? 'hidden':''} md:hidden absolute left-0 z-10 bg-white w-full h-[50vh] p-5`}>
        <div className="flex flex-col gap-2 justify-around">
          {
            links.map(link=>{
              const {id,text,url}=link;
              return <NavLink key={id} to={url} className=' px-2 py-1 rounded-sm capitalize text-xl  hover:underline hover:text-darkRed hover:bg-green' onClick={closeSidebar}>{text}</NavLink>
            })
          }
          <NavLink to='/checkout' className='px-2 py-1 rounded-sm capitalize text-xl hover:underline hover:text-darkRed hover:bg-green' onClick={closeSidebar}>Checkout</NavLink>
        </div>
        <div className='flex justify-center mt-5'>
          <Cart/>
        </div>
    </div>
  )
}
