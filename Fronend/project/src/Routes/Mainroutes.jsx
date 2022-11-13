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
import Admin from "./admin"

import Thankyou from './Thankyou';

import Cart from './Cart';


const Mainroutes = () => {
  return (
    <div>
  <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/ProductsPage' element={<Productspage></Productspage>}></Route>
        <Route path='/SingleProductPage/:id' element={<Singleproductpage></Singleproductpage>}></Route>
        <Route path='/Login' element={<Loginpage></Loginpage>}></Route>
        <Route path='/Signup' element={<Signup></Signup>}></Route>
        <Route path='/PaymentPage' element={<Privateroute><Paymentpage></Paymentpage></Privateroute>}></Route>
        <Route path='/Cart' element={<Privateroute><Cart /></Privateroute>}></Route>
        <Route path='/CheckoutPage' element={<Privateroute><Checkoutpage></Checkoutpage></Privateroute>}></Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/ThankYou' element={<Thankyou />}></Route>

       
    </Routes>
    </div>
  )
}

export default Mainroutes