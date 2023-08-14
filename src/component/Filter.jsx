import {useState} from 'react'
import {CiSearch} from 'react-icons/ci'
import { useFilterContext } from '../context/filtercontext'
import { getUniqueValues, priceFormat } from '../utils/helper';
import {FaCheck} from 'react-icons/fa';
export default function Filter() {
  const {allProducts,updateFilters,clearFilters,
    filters:{
      text,category,company,color,price,minPrice,maxPrice,shipment
    }
  }=useFilterContext();

  const [isInputFocused, setIsInputFocused] = useState(false);
  //to show search icons dynamically.
  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  }
  //get the unique array of categories, companies and colors.
  const categories=getUniqueValues(allProducts,'category')
  const companies=getUniqueValues(allProducts,'company')
  const colors=getUniqueValues(allProducts,'colors')

  return (
    <div className=" mt-5 ml-2 flex flex-col gap-2 items-start justify-center">
        {/* search box */}
        <form className='relative' onSubmit={(e)=>e.preventDefault()}>
          <input 
          name='text' 
          value={text} 
          onChange={updateFilters} 
          className='bg-sky-200 text-green border-2 border-green rounded-md p-1' 
          type='search' 
          placeholder='search your products'
          onFocus={handleFocus}
          onBlur={handleBlur}/>
          {!isInputFocused && (
          <CiSearch className='absolute top-2.5 right-2 border-3 border-red-500'/>
            )}
        </form>
        {/* category item */}
        <div>
          <h1 className='font-bold text-xl'>Category</h1>
          <div className='flex flex-col items-start'>
            {categories.map((item,index)=>{
              return (
              <button 
              onClick={updateFilters} 
              className={`capitalize ${category===item.toLowerCase()?'active':null}`} 
              key={index}
              name='category'
              >{item}</button>)
            })}
          </div>
        </div>
          {/* company */}
          <div>
          <h1 className='font-bold text-xl'>Company</h1>
          <select value={company} onChange={updateFilters} className='bg-white border border-green checked:bg-green rounded-sm' name='company'>
          { companies.map((item,index)=>{
            return(
              <option key={index} value={item} className='hover:bg-green'>{item}</option>
            )
          })
          }
        </select> 
          </div>
          {/* colors */}
          <div>
          <h1 className='font-bold text-xl'>Colors</h1>
          <div className='flex gap-2 flex-row items-center'>
            {colors.map((item,index)=>{
              if(item==='all'){
                return(<button
                  key={index}     
                  className={`capitalize ${color==='all'?'active':null}`} 
                  name='color' 
                  onClick={updateFilters} 
                  data-color='all'>All</button>)
              }
              return (<button 
              key={index}
              name='color'
              className={`h-4 w-4 m-0.5 rounded-full border border-black`} 
              onClick={updateFilters}  
              data-color={item}
              style={{backgroundColor:item}} 
              >{color===item?<FaCheck className='text-white p-[0.2rem]'/>:null}</button>)
            })}
          </div>
        </div>

            {/* price */}
            <div>
            <h1 className='font-bold text-xl'>Price</h1>
            <p>{priceFormat(price)}</p>
            <input 
              type="range" 
              name='price'
              value={price}
              min={minPrice} 
              max={maxPrice} 
              onChange={updateFilters}
              className='accent-darkRed'
            />
            </div>

            {/* shipment */}
            <div>
              <label htmlFor='shipment'>Free Shipment</label>
              <input 
                id='shipment'
                name='shipment'
                type='checkbox'
                onChange={updateFilters}
                checked={shipment}
                className='accent-green ml-2'
                />
            </div>

            {/* clear filter */}
            <div>
              <button
              className='border border-green px-2 py-1 rounded-sm bg-red-600 text-white hover:scale-105'
              onClick={clearFilters}
              >Clear Filters</button>
            </div>
    </div>
  )
}
