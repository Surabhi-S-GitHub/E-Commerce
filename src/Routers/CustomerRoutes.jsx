import React from 'react'
import HomePages from '../Customer/Pages/HomePages/HomePages'
import Cart from '../Customer/Components/Cart/Cart'
import Footer from '../Customer/Components/Footer/Footer'
import Product from '../Customer/Components/Product/Product'
import { Routes, Route } from "react-router-dom";
import Navigation from "../Customer/Components/Navigation/Navigation"; // Ensure this path is correct
import ProductDetails from '../Customer/Components/ProductDetails/ProductDetails'
import Checkout from '../Customer/Components/Checkout/Checkout'
import Order from '../Customer/Components/Order/Order'
import OrderDetails from '../Customer/Components/Order/OrderDetails'

function CustomerRoutes() {
  return (
    <div>
      <div>
         <Navigation/>
      </div>
      <Routes>
        <Route path='/' element={<HomePages/>}  ></Route>
        <Route path='/cart' element={<Cart/>} ></Route>
        <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}  ></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/product/:productId' element={<ProductDetails/>}  ></Route>
        <Route path='/account/order' element={<Order/>}  ></Route>
        <Route path='/account/order/:orderId' element={<OrderDetails/>}  ></Route>


      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default CustomerRoutes
