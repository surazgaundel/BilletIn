import { createContext, useReducer,useContext, useEffect } from "react"
import reducer from '../reducers/cart_reducer';


const getLocalStorage=()=>{
    let cart=localStorage.getItem('cart');
    if(cart){
        return JSON.parse(localStorage.getItem('cart'))
    }
    else{
        return [];
    }
}

const initialState ={
    cart:getLocalStorage(),
    totalItems:0,
    totalAmount:0,
    shippingFee:230,
}

const CartContext=createContext();

export const CartProvider =({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);

    //add to cart
    const  addToCart=(id,color,amount,product)=>{
        dispatch({type:'ADD_TO_CART',payload:{id,color,amount,product}});
    }

    //remove item
    const removeItem=(id)=>{
        // dispatch({type:})
    }
    const toggleAmount=(id,value)=>{
        // dispatch({type:})
    }
    const clearCart=()=>{
        // dispatch({type:})
    }

    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(state.cart));    
    },[state.cart])

    return(
        <CartContext.Provider value={{...state,addToCart,removeItem,toggleAmount,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}


export const useCartContext=()=>{
    return useContext(CartContext);
}