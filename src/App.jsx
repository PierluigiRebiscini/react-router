import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import DefaultLayout from "./layout/DefaultLayout"

import HomePage from "./pages/HomePage"
import AboutUs from "./pages/AboutUs"
import Products from "./pages/Products"
import SingleProduct from './products/SingleProduct'
import SingleProductList from './products/SingleProductList'
import NotFound from './pages/NotFound'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/products/:id" element={<SingleProduct />} ></Route>
            <Route path="*" element={<NotFound />}></Route>

          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
