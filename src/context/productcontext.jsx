import { createContext,useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/products_reducer';

const initialState ={
    isSidebarOpen:false
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

    return(
        <ProductsContext.Provider value={{...state,openSidebar,closeSidebar,toggleSidebar}}>
            {children}
        </ProductsContext.Provider>
    )
} 

export const useProductsContext=()=>{
    return useContext(ProductsContext);
}