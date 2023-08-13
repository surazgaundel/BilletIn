import React from 'react'
import { useFilterContext } from '../context/filtercontext';
import Product from './Product';
// import Empty from '../assets/Empty.svg';
import {Error} from '../pages';
import {ListView} from '../component'
import {Loading} from '../component';

export default function ProductList() {
    const {filteredProducts,filterLoading,gridView}=useFilterContext();


  if(filterLoading){
    return (<div className="container"><Loading/></div>);
  }
  if(filteredProducts.length<1){
    return(
      <Error/>
    )
  }
  if(gridView===true){
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
