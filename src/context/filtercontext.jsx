
import { createContext, useEffect, useReducer, useContext } from 'react';
import reducer from '../reducers/filter_reducer';
import { useProductsContext } from './productcontext';


const initialState={
    allProducts:[],
    filteredProducts:[],
    gridView:false,
    sort:'price-ascend'

}

const FilteredContext=createContext();

export const FilterProvider=({children})=>{
    const {products} =useProductsContext();
    const [state,dispatch]=useReducer(reducer,initialState);

    //load products into filtered products and all products
    const loadProducts=()=>{
        dispatch({type:'LOAD_PRODUCTS',payload:products})
    }

    useEffect(()=>{
        loadProducts();
    },[products])

    //change the view to grid and list
    const setGridView=()=>{
        dispatch({type:'SET_GRID_VIEW'})
    }
    const setListView=()=>{
        dispatch({type:'SET_LIST_VIEW'})
    }

    //to get the option value when user choose different sorting options 
    const updateSort=(e)=>{
        const value=e.target.value;
        dispatch({type:'UPDATE_SORT',payload:value})
    }   

    //sort the products on options
    const sortProducts=()=>{
        dispatch({type:'SORT_PRODUCTS'})
    }

    useEffect(()=>{
        sortProducts();
    },[state.sort])



    return(
        <FilteredContext.Provider value={{...state,setGridView,setListView,updateSort}}>
            {children}
        </FilteredContext.Provider>
    )
}

export const useFilterContext=()=>{
    return useContext(FilteredContext);
}