/* eslint-disable no-case-declarations */

const filter_reducer=(state,action)=>{
    switch(action.type){
        case 'LOAD_PRODUCTS':
            return {
                ...state,
                allProducts:[...action.payload],
                filteredProducts:[...action.payload]
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
                    // return {...state,filteredProducts:tempProducts};
            }
        default:
            return {...state};
    }
}

export default filter_reducer;