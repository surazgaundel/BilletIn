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
                    return {...state,featuredProducts:tempProducts}
            }
            return {...state};

        case 'UPDATE_FILTERS':
            const {name,value}=action.payload;
            return {...state,filters:{...state.filters,[name]:value}}

        case 'FILTER_PRODUCTS':
            const {allProducts}=state;
            const {text,category,company,color,price,shipment}=state.filters;
            let tempProductsArray=[...allProducts];
            //filter from text search input
            if(text){
                tempProductsArray=tempProductsArray.filter((product)=>{
                    return product.name.toLowerCase().startsWith(text.toLowerCase())
                })
            }
            //filter from the category
            if(category!=='all'){
                tempProductsArray=tempProductsArray.filter((product)=>{
                    return(product.category=== category)
                })
            }
            
            //filter from the company
            if(company!=='all'){
                tempProductsArray=tempProductsArray.filter((product)=>{
                    return(product.company=== company)
                })
            }

            //filter from the colors
            if(color!=='all'){
                tempProductsArray=tempProductsArray.filter((product)=>{
                    return product.colors.find((item)=>item===color)
                })
            }
            //filter from the price
            tempProductsArray=tempProductsArray.filter((product)=>product.price<=price)
            
            //filter from the shipment
            if(shipment){
                tempProductsArray=tempProductsArray.filter((product)=>product.shipping===true)
            }
            return {...state,filteredProducts:tempProductsArray};

        case 'CLEAR_FILTERS':
            return{...state,filters:{
                ...state.filters,
                text:'',
                company:'all',
                category:'all',
                color:'all',
                minPrice:0,
                price:state.filters.maxPrice,
                shipment:false
            }}

        default:
            return {...state};
    }
}

export default filter_reducer;