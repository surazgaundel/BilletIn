
const products_reducer=(state,action)=>{
    switch(action.type){
        case 'OPEN_SIDEBAR':
                return {...state,isSidebarOpen:true};
        case 'CLOSE_SIDEBAR':
                return {...state,isSidebarOpen:false};
        case 'TOGGLE_SIDEBAR':
                return {...state,isSidebarOpen:!state.isSidebarOpen};
        case 'GET_PRODUCTS_BEGIN':
                return {...state,productsLoading:true}
        case 'GET_PRODUCTS_SUCCESS':
                const featuredProducts=action.payload.filter(product =>product.featured===true);
                return {
                        ...state,
                        productsLoading:false,
                        payload:action.payload,
                        featuredProducts
                }
        case 'GET_PRODUCTS_ERROR':
                return {...state,
                productsLoading:false,
                productsError:true
                }
        default:
                return state;
    }

}

export default products_reducer;