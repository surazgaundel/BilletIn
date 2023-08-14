/* eslint-disable no-case-declarations */


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
        default:
        return{...state}
    }
}

export default cart_reducer;