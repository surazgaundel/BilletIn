import {useState} from 'react'
import {CiSearch} from 'react-icons/ci'
import { useFilterContext } from '../context/filtercontext'
import { getUniqueValues } from '../utils/helper';
export default function Filter() {
  const {allProducts,updateFilters,clearFilters,
    filters:{
      text,category,company,color,minPrice,maxPrice,shipment
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

  const categories=getUniqueValues(allProducts,'category')
  const companies=getUniqueValues(allProducts,'company')
  const colors=getUniqueValues(allProducts,'colors')

  return (
    <div className=" mt-5 ml-2 flex flex-col gap-2 items-center md:items-start justify-center">
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
          <div>
          <h1 className='font-bold text-xl'>Company</h1>
          <select value={company} onChange={updateFilters} className='bg-white border border-green checked:bg-green rounded-sm' name='company'>
          { companies.map((item,index)=>{
            return(
              <option key={index} value={item} className='hover:bg-green '>{item}</option>
            )
          })
          }
        </select> 
          </div>
          <h1 className='font-bold text-xl'>Colors</h1>
          <div className='flex gap-2 flex-row items-center'>
            {colors.map((item,index)=>{
              return (<button 
              className='h-3 w-3 rounded-full border border-black' 
              onChange={updateFilters}  
              style={{backgroundColor:item}} 
              key={index}
              value={item}
              ></button>)
            })}
          </div>
      
        </div>
    </div>
  )
}
