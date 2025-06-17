import React, { useEffect, useState } from 'react'
import { ProductCard } from '../../../components/Elements/ProductCard'
import { ProductList } from '../../products/ProductList'


export const Featured = () => {
  const [products,setProducts]=useState([])
 useEffect(()=>{
   const fetchProducts=async ()=>{
    try {
        const res = await fetch("http://localhost:8000/featured_products")
        const data = await res.json()
        setProducts(data)
      } catch (error) {
        console.error("Error fetching featured products:", error)
      }
  }
  fetchProducts();
 },[])
  return (
    <div className='flex flex-wrap-3'>
 {products.map((pro)=>
( <ProductCard key={pro.id} products={pro} />))}
       
    </div>
  )
}
