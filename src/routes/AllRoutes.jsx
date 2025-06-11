import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages";
import { ProductList } from "../pages/products/ProductList";

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList/>}/>
        
    </Routes>
    </>
  )
}