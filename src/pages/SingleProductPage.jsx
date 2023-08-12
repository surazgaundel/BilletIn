import { useEffect } from 'react'
import { useParams,Link } from 'react-router-dom';
import { useProductsContext } from '../context/productcontext'
import { single_product_url as url } from '../utils/component';
import { priceFormat } from '../utils/helper';
import Loading from '../component/Loading';
import ErrorPage from './ErrorPage';
 import {PageHero, ProductImage, Stars} from '../component';
export default function SingleProductPage() {
  const {id}=useParams();

  const {
    singleProduct:product,
    singleProductLoading:loading,
    singleProductError:error,
    fetchSingleProduct} =useProductsContext();

  useEffect(()=>{
    fetchSingleProduct(`${url}${id}`)
  }, [id])

  const {name,price,description,stock,stars,reviews,company,images}=product;


  if(loading){
    return <div className="container"><Loading/> </div>;
  }
  if(error){
      return <ErrorPage/>
  }

  return (
    <div>
      <PageHero title={name} product/>
      <div className="m-4">
      <Link to='/products' className="hover-btn uppercase"> All Products</Link>
      </div>
      <div className="flex flex-col w-[96%] m-auto lg:flex-row my-3 gap-2 justify-around">
        <div className="lg:w-[50%]">
        <ProductImage images={images}/>
      </div>
      <section className="flex flex-col w-[80%] lg:w-[50%] m-auto">
        <h2 className="font-bold text-2xl md:text-4xl capitalize tracking-wider">{name}</h2>
        <Stars stars={stars} reviews={reviews}/>
        <h5 className='font-bold text-darkRed '>{priceFormat(price)}</h5>
        <p className='w-[96%] md:w-[80%] mb-5'>{description}</p>
        <p >
          <span className='w-5 font-bold'>Available:</span>{stock>0?'In Stock':'Out Of Stock'}
        </p>
        <p className='capitalize'>
          <span className='font-bold'>Brand:</span>{company}</p>
        <hr/>
        {/* {stock && <AddToCart/>} */}
      </section>
    </div>
    </div>
  )
}
