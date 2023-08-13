/* eslint-disable react/prop-types */
import {useState} from "react";
import {BiExpand} from 'react-icons/bi'
import { priceFormat } from '../utils/helper';
import { Link } from 'react-router-dom'

export default function Product({id,name,image,price,length}) {
  const [hoverState,setHoverState]=useState(Array(length).fill(false));

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
  <div key={id} className="flex flex-col rounded-md items-center justify-around md:w-[15rem] m-auto my-3 h-min shadow-md hover:scale-105">
      <div className="relative">
        <img src={image} className={`h-40 w-[40rem] object-cover rounded-t-md`} onMouseOver={() => handleHoverEnter(id)} onMouseOut={() => handleHoverOut(id)} alt={`featured products${name}`} />
        <Link to={`/products/${id}`} className={`${hoverState[id] ? 'opacity-100' : 'opacity-0'} hover:opacity-100 absolute top-1 right-1 bg-white p-1 text-darkRed rounded-full text-xl z-10`}>
          <BiExpand />
        </Link>
      </div>
      <h1 className='capitalize font-bold my-2'>{name}</h1>
      <p className='text-sm text-darkRed font-bold leading-8 tracking-wide'>{priceFormat(price)}</p>
      </div>
      );
    }