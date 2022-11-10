import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Checkoutpage from './Checkoutpage';
import Home from './Home';
import Loginpage from './Loginpage';
import Paymentpage from './Paymentpage';
import Privateroute from './Privateroute';
import Productspage from './Productspage';
import Signup from './Signup';
import Singleproductpage from './Singleproductpage';
import Cart from "./Cart"
import Admin from "./admin"

const Mainroutes = () => {
  return (
    <div>
  <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/ProductsPage' element={<Productspage></Productspage>}></Route>
        <Route path='/SingleProductPage/:id' element={<Singleproductpage></Singleproductpage>}></Route>
        <Route path='/Login' element={<Loginpage></Loginpage>}></Route>
        <Route path='/Signup' element={<Signup></Signup>}></Route>
        <Route path='/PaymentPage' element={<Paymentpage></Paymentpage>}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
        <Route path='/CheckoutPage' element={<Checkoutpage></Checkoutpage>}></Route>
        <Route path='/admin' element={<Admin />}></Route>
       
    </Routes>
    </div>
  )
}

export default Mainroutes