import { children, createContext, useContext, useReducer } from "react"
import { filterReducer } from "../reducers/filterReducer"

const filterIntialState={
    productList:[],
    SortBy:null,
    rating:null,
    onlyInStock:false,
    BestSeller:false
}


const FilterContext=createContext(filterIntialState)


export const FilterProvider=({children})=>{
    const [state,dispatch]=useReducer(filterReducer,filterIntialState)

function initialProductList(products){
    dispatch({
        type:"PRODUCT_LIST",
        payload:{
            products:products
        }
    })
}

    const value={
        products:state.productList,
        initialProductList
    }
    return(
        <FilterContext.Provider value={value}>

           {children}
        </FilterContext.Provider>
    )
}


export const useFilter=()=>{
    const context=useContext(FilterContext)
return context}

