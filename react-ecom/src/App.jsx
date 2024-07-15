import {HashRouter as Router, Routes, Route} from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import ProductPage from './pages/ProductPage'
import UserPage from './pages/UserPage'
import CategoriesPage from './pages/CategoriesPage'
import CartPage from './pages/CartPage'
import SingleProduct from './pages/SingleProduct'
import SingleUser from './pages/SingleUser'
import SingleCart from './pages/SingleCart'

import './assets/style.css'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/categories' element={<CategoriesPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/user' element={<UserPage/>}/>
        <Route path='/singleproduct' element={<SingleProduct />}/>
        <Route path='/singleuser' element={<SingleUser />}/>
        <Route path='/singlecart' element={<SingleCart />}/>
      </Routes>
    </Router>
  )
}