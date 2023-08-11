import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useProductsContext } from '../context/productcontext'
import { single_product_url as url } from '../utils/component';
import { priceFormat } from '../utils/helper';
import Loading from '../component/Loading';
import ErrorPage from './ErrorPage';
 
export default function SingleProductPage() {
  const {id}=useParams();
  const {
    singleProduct:product,
    singleProductLoading:loading,
    singleProductError:error,
    fetchSingleProduct} =useProductsContext();

  useEffect(()=>{
    fetchSingleProduct(`${url}${id}`)
  },[id])

  console.log(product)

  if(loading){
    return <Loading/>;
  }
  if(error){
      return <ErrorPage/>
  }


  console.log(useParams())
  return (
    <div>SingleProductPage</div>
  )
}
