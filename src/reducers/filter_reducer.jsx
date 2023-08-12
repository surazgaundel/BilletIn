
const filter_reducer=(state,action)=>{
    switch(action.type){
        case 'LOAD_PRODUCTS':
            return {
                ...state,
                allProducts:[...action.payload],
                filteredProducts:[...action.payload],
            }
        default:
            return state;
    }
}

export default filter_reducer;