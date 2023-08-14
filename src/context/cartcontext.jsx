import { createContext, useReducer,useContext } from "react"
import reducer from '../reducers/cart_reducer';

const initialState ={
    cart:[],
    totalItems:0,
    totalAmount:0,
    shippingFee:230,
}

const CartContext=createContext();

export const CartProvider =({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);

    //add to cart
    const  addToCart =(id,color,amount,product)=>{
        dispatch({type:'ADD_TO_CART',payload:{id,color,amount,product}});
    }
    return(
        <CartContext.Provider value={{...state,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}


export const useCartContext=()=>{
    return useContext(CartContext);
}