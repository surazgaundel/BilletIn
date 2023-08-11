import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/productcontext'
import Loading from './Loading';
import ErrorPage from '../pages/ErrorPage';
import {BiExpand} from 'react-icons/bi'
import { priceFormat } from '../utils/helper';
export default function FeaturedProducts() {
  const {
    featuredProducts:products,
        productsLoading:loading,
        productsError:error
    
      } =useProductsContext();
      
      const [hoverState,setHoverState]=useState(Array(products.length).fill(false));

    if(loading){
        return <Loading/>;
    }
    if(error){
        return <ErrorPage/>
    }
    
    const handleHoverEnter=(id)=>{
      setHoverState((prev)=>{
        const newState = [...prev];
        newState[id]=true;
        return newState;
      })
    }
    const handleHoverOut=(id)=>{
      setHoverState((prev)=>{
        const newState = [...prev];
        newState[id]=false;
        return newState;
      })
    }


  return (
    <div className="h-max p-10 bg-slate-100 flex flex-col justify-center items-center gap-3">
        <h1 className="text-2xl md:text-4xl font-bold underline underline-offset-8">Featured Products</h1>
        <div className="flex flex-row flex-wrap gap-4 my-5">
        {products.slice(0,4).map(product =>{
            const {id,image,name,price}=product;
            return(
                <div key={id} className="flex flex-col rounded-md items-center justify-center md:w-[20rem] m-auto h-min shadow-md hover:scale-105">
                <div className="relative">
                  <img src={image} className={`h-40 w-[40rem] object-cover rounded-t-md`} onMouseOver={()=>handleHoverEnter(id)} onMouseOut={()=>handleHoverOut(id)} alt={`featured products${name}`}/>
                  <Link to={`/products/${id}`} className={`${hoverState[id]?'opacity-100':'opacity-0'} hover:opacity-100 absolute top-1 right-1 bg-white p-1 text-darkRed rounded-full text-xl z-10`}>
                    <BiExpand/>
                  </Link>
                </div>
                <h1 className='capitalize font-bold my-2'>{name}</h1>
                <p className='text-sm text-darkRed font-bold leading-8 tracking-wide'>{priceFormat(price)}</p>
              </div>
            )
        })}
        </div>
        <div>
        <Link to='/products' className="hover-btn uppercase">All Products</Link>
        </div>
</div>
  )
}