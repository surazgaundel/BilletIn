import React from 'react'
import { useFilterContext } from '../context/filtercontext';
import Product from './Product';
import {ListView} from '../component'
import {Loading} from '../component';

export default function ProductList() {
    const {filteredProducts,filterLoading,gridView}=useFilterContext();


  if(filterLoading){
    return (<div className="container"><Loading/></div>);
  }
  if(filteredProducts.length<1){
    return(
      <h1>Sorry, I didn&apos;t find the lost unicorn you were searching for.</h1>
    )
  }
  if(gridView===false){
    return(<ListView/>)
  }
  return (
    <div className="flex flex-wrap gap-1">
        {filteredProducts.map(product=>{
            return(<Product key={product.id} {...product}/>)
        })}
    </div>
  )
}
