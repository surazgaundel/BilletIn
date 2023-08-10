import axios from "axios";
import { createContext,useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/products_reducer';
import {products_url as url} from '../utils/component';



const initialState ={
    isSidebarOpen:false,
    productsLoading:false,
    productsError:false,
    products:[],
    featuredProducts:[],
};

const ProductsContext=createContext();

export const ProductsProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);

    const openSidebar =()=>{
        dispatch({type:"OPEN_SIDEBAR"});
    }
    const closeSidebar =()=>{
        dispatch({type:"CLOSE_SIDEBAR"});
    }
    const toggleSidebar =()=>{
        dispatch({type:"TOGGLE_SIDEBAR"});
    }

    const fetchProducts=async(url)=>{
        dispatch({type:'GET_PRODUCTS_BEGIN'})
        try{
            const response = await axios.get(url)
            const products=response.data;
            dispatch({type:'GET_PRODUCTS_SUCCESS',payload:products})

        }
        catch(err){
            dispatch({type:'GET_PRODUCTS_ERROR'})
        }
    };

    useEffect(()=>{
        fetchProducts(url);
    },[])

    return(
        <ProductsContext.Provider value={{...state,openSidebar,closeSidebar,toggleSidebar}}>
            {children}
        </ProductsContext.Provider>
    )
} 

export const useProductsContext=()=>{
    return useContext(ProductsContext);
}