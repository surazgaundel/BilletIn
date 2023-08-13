import React from 'react'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/productcontext'
import {Error} from '../pages'
import {Loading,Product} from '../component'
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
        return <Error/>
    }
    


  return (
    <div className="h-max p-10 bg-slate-100 flex flex-col justify-center items-center gap-3">
        <h1 className="text-2xl md:text-4xl font-bold underline underline-offset-8">Featured Products</h1>
        <div className="flex flex-row flex-wrap gap-4 my-5">
        {products.slice(0,4).map(product =>{
            return(
            <Product key={product.id} {...product} length={products.length}/>
            )
        })}
        </div>
        <div>
        <Link to='/products' className="hover-btn uppercase">All Products</Link>
        </div>
</div>
  )
}