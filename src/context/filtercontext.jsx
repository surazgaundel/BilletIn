
import { createContext, useEffect, useReducer, useContext } from 'react';
import reducer from '../reducers/filter_reducer';
import { useProductsContext } from './productcontext';


const initialState={
    allProducts:[],
    filteredProducts:[],
    filterLoading:false,
    gridView:true

}

const FilteredContext=createContext();

export const FilterProvider=({children})=>{
    const {products} =useProductsContext();
    const [state,dispatch]=useReducer(reducer,initialState);

    const loadProducts=()=>{
        dispatch({type:'LOAD_PRODUCTS',payload:products})
        dispatch({type:'LOAD_PRODUCTS_SUCCESS'})
    }

    useEffect(()=>{
        loadProducts();
    },[products])

    return(
        <FilteredContext.Provider value={{...state}}>
            {children}
        </FilteredContext.Provider>
    )
}

export const useFilterContext=()=>{
    return useContext(FilteredContext);
}