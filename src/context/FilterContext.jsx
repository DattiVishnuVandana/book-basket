import { children, createContext, useContext } from "react"

const filterIntialState={
    productList:[],
    SortBy:null,
    rating:null,
    onlyInStock:false,
    BestSeller:false
}


const FilterContext=createContext(filterIntialState)


export const FilterProvider=({children})=>{
    const value={
        productList:[1,2,3]
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

