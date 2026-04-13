import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <h1>Products compent</h1>
      <ul>
        <li>
          <Link to="/products/1">Product 1</Link>
        </li>
        <li>  
          <Link to="/products/2">Product 2</Link>
        </li>
        <li>
          <Link to="/products/3">Product 3</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default Products
