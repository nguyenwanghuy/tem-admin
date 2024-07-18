import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Customer from './partials/ecommerce/Customer.jsx';
import Order from './partials/ecommerce/Order.jsx';
import Invoice from './partials/ecommerce/Invoice.jsx';
import Shop from './partials/ecommerce/Shop.jsx';
import Shop2 from './partials/ecommerce/Shop2.jsx';
import SingleProduct from './partials/ecommerce/SingleProduct.jsx';
import Login from './partials/login/Login.jsx';
import Register from './partials/register/Register.jsx';
function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/customers" element={<Customer />} />
        <Route exact path="/orders" element={<Order/>} />
        <Route exact path="/invoices" element={<Invoice />} />
        <Route exact path="/shop" element={<Shop/>} />
        <Route exact path="/shop2" element={<Shop2 />} />
        <Route exact path="/product" element={<SingleProduct />} />
        <Route exact path="/signin" element={<Login />} />
        <Route exact path="/signup" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
