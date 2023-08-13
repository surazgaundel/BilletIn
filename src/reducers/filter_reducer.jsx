/* eslint-disable no-case-declarations */


const filter_reducer=(state,action)=>{
    switch(action.type){
        case 'LOAD_PRODUCTS':
            let maxPrice=action.payload.map(p=>p.price);
            maxPrice=Math.max(...maxPrice) 

            return {
                ...state,
                allProducts:[...action.payload],
                filteredProducts:[...action.payload],
                filters:{...state.filters,maxPrice,price:maxPrice}
            }
        case 'SET_GRID_VIEW':
            return{...state,gridView:true}
        case 'SET_LIST_VIEW':
            return{...state,gridView:false}
        case 'UPDATE_SORT':
            return {...state,sort:action.payload}
        case 'SORT_PRODUCTS':
            // eslint-disable-next-line no-case-declarations
            const {filteredProducts,sort}=state;
            let tempProducts=[...filteredProducts];
            switch(sort){
                case 'price-ascend':
                    tempProducts= filteredProducts.sort((a,b)=>a.price-b.price);
                    break
                case 'price-descend':
                    tempProducts= filteredProducts.sort((a,b)=>b.price-a.price);
                    break
                case 'name-ascend':
                    tempProducts= filteredProducts.sort((a,b)=>a.name.localeCompare(b.name));    
                    break
                case 'name-descend':
                    tempProducts= filteredProducts.sort((a,b)=>b.name.localeCompare(a.name));    
                    break
                default:
                    return {...state}
            }
            return {...state};
        case 'UPDATE_FILTERS':
            const {name,value}=action.payload;
            return {...state,filters:{...state.filter,[name]:value}}
        case 'FILTER_PRODUCTS':
            console.log('sd')
            return {...state};
        default:
            return {...state};
    }
}

export default filter_reducer;