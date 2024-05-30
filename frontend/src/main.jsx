import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import RoteLayout from './layout/RoteLayout.jsx';
import ErrorPage from './components/errorPage/ErrorPage.jsx';
import Home from './pages/Home/Home.jsx';
import ProductShop from './pages/productShop/ProductShop.jsx';
import ProductDeatils from './pages/ProductDeatlis/ProductDeatils.jsx';
import Cart from './pages/cart/Cart.jsx';
import { store } from './Store'
import { Provider } from 'react-redux'





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RoteLayout />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<ProductShop/>}/>
        <Route path='/productDeatils/:id' element={<ProductDeatils/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Route>
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
    
  
)
