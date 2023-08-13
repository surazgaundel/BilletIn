import {useState} from 'react'
import {CiSearch} from 'react-icons/ci'
import { useFilterContext } from '../context/filtercontext'
export default function Filter() {
  const {allProducts,updateFilters,clearFilters,
    filters:{
      text,category,company,color,minPrice,maxPrice,shipment
    }
  }=useFilterContext();

  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  }
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
          <h1>asdd</h1>
          <h1>asdd</h1>
          <h1>asdd</h1>
          <h1>asdd</h1>
          <h1>asdd</h1>
          <h1>asdd</h1>
          <h1>asdd</h1>
          <h1>asdd</h1>
          <h1>asdd</h1>
          <h1>asdd</h1>
        </div>
    </div>
  )
}
