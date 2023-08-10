import React from 'react'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/productcontext'
import Loading from './Loading';
import ErrorPage from '../pages/ErrorPage';
import {BiExpand} from 'react-icons/bi'
export default function FeaturedProducts() {
    const {
        featuredProducts:products,
        productsLoading:loading,
        productsError:error
    
    } =useProductsContext();

    if(loading){
        return <Loading/>;
    }
    if(error){
        return <ErrorPage/>
    }


  return (
    <div className="h-[80vh] bg-slate-100 flex flex-col justify-center items-center gap-3">
        <h1 className="text-2xl md:text-4xl font-bold underline underline-offset-8">Featured Products</h1>
        <div className="flex flex-row flex-wrap">
        {products.map(product =>{
            const {id,image,name,price}=product;
            return(
                <div key={id} className="flex flex-col sm:rounded-md items-center justify-center  md:w-[30rem] m-auto h-[30vh] text-white bg-green hover:scale-105">
                <div className="p-3">
                  <img src={image} className='h-24' alt='featured products'/>
                  <Link to={`/products/${id}`}>
                    <BiExpand/>
                  </Link>
                </div>
                <h1 className='capitalize  md:text-xl mb-2'>{name}</h1>
                <p className='text-sm tracking-wide h-[20vh]'>{price}</p>
              </div>
            )
        })}
        </div>
        <div>
        <Link to='/products' className="hover-btn">All Products</Link>
        </div>
</div>
  )
}