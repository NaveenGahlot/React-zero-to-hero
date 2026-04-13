import React from 'react'
import { Route, Routes } from "react-router-dom"; 
import Home from "../Home/Home";
import Products from "../Products/Products";
import Articles from "../Articles/Articles";
import Admin from "../Admin/Admin";  
import Contact from "../../contact/contact";
import NotFound from "../NotFound/NotFound";
import SingleProduct from "../Products/SingleProduct"; 
import Sales from "../Admin/Seles";
import Sellers from "../Admin/Sellers"; 

const AllRoutes = () => {
  return ( 
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/admin" element={<Admin />}>
              <Route path="sales" element={<Sales />} />
              <Route path="sellers" element={<Sellers />} />
            </Route>
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<NotFound />} />
          </Routes> 
  )
}

export default AllRoutes
