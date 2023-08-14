/* eslint-disable no-case-declarations */

import { CartItem } from "../component";


const cart_reducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            const {id,color,amount,product}=action.payload;
            const tempItem=state.cart.find((item)=>item.id=== id+color)
            //this functionality add the item in cart if the item is already present
            if(tempItem){
                const tempCart=state.cart.map(item=>{
                    console.log(item)
                    if(item.id===id+color){
                        let newAmount=item.amount+amount;
                        if(newAmount>item.max){
                            newAmount=item.max;
                        }
                        return {...item,amount:newAmount}
                    }
                    else{
                        return item;
                    }
                })
                return {...state,cart:tempCart}
            }
            else{
                //this functionality add a cart if item is new item
                const newItem={
                    id:id+color,
                    name:product.name,
                    color,
                    amount,
                    image:product.images[0].url,
                    price:product.price,
                    max:product.stock
                    
                }
                return {...state,cart:[...state.cart,newItem]}
            }
        case 'REMOVE_CART_ITEM':
            return {...state,cart:state.cart.filter((item)=>item.id!==action.payload)}
        case 'CLEAR_CART':
            return {...state,cart:[]}
        case 'TOGGLE_CART_ITEM_AMOUNT':
            const {id:id1,value}=action.payload;
            let tempCart=state.cart.map((cartItem)=>{
                if(cartItem.id===id1){
                    switch(value){
                        case 'increase':
                            let newAmount=cartItem.amount+1;
                            if(newAmount>cartItem.max){
                                newAmount=cartItem.max;
                        }
                            return{...cartItem,amount:newAmount};
                        case 'decrease':
                            let newAmount2=cartItem.amount-1;
                            if(newAmount2<1){
                                newAmount2=1;
                            }
                        return {...cartItem,amount:newAmount2};
                        default:
                            return cartItem;
                    }
                }else{
                    return cartItem
                }
            });
            return {...state,cart:tempCart }

        case 'COUNT_CART_ITEMS':
            const {totalItems,totalAmount} =state.cart.reduce((total,cartItem)=>{
                const {amount,price}=cartItem;
                total.totalItems+=amount;
                total.totalAmount+=price*amount;
                return  total;
            },{totalItems:0,totalAmount:0})
            return {...state,totalItems,totalAmount}
        default:
        return{...state}
    }
}

export default cart_reducer;