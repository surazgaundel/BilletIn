/* eslint-disable react/prop-types */
import { useState } from 'react'
import {FaCheck} from 'react-icons/fa';
import {Amount} from '../component';
import { useCartContext } from '../context/cartcontext';
import {Link} from 'react-router-dom';

export default function AddToCart({product}) {

    const {addToCart}=useCartContext();
    const {id,stock,colors}=product;

    const [mainColor,setMainColor]=useState(colors[0])
    const [amount, setAmount]=useState(1);

    console.log(mainColor);
    const handleColor=(color)=>{
        setMainColor(color)
    }

    const IncreaseAmount=()=>{
        setAmount(prev=>{
            let tempAmount=prev+1;
            if(tempAmount>stock){
                tempAmount=stock;
            }
            return tempAmount;
        })
    }

    const DecreaseAmount=()=>{
        setAmount(prev=>{
            let tempAmount=prev-1;
            if(tempAmount<1){
                tempAmount=1;
            }
            return tempAmount;
        })
    }

  return (
    <div>
        <div>
            <span>Colors:</span>
            {colors.map((color,index)=>{
                return(
                    <button
                        key={index}
                        style={{backgroundColor:color}}
                        className={`h-4 w-4 m-1  rounded-full`}
                        onClick={()=>handleColor(color)}
                        >{mainColor===color?<FaCheck className='text-white p-[0.2rem]'/>:null}</button>
                )
            })}
        </div>
        <div>
            <Amount 
            amount={amount} 
            IncreaseAmount={IncreaseAmount} 
            DecreaseAmount={DecreaseAmount}/>
        </div>
        <Link to='/cart' className='hover-btn text-base' onClick={()=>addToCart(id,mainColor,amount,product)}>Add to Cart</Link>
    </div>
  )
}
