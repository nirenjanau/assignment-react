import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import '../assets/style.css'

import CartButtons from '../components/CartButtons'

export default function DisplayCart() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchCart()
  }, [])

  const fetchCart = () =>{
    getFetch('https://fakestoreapi.com/carts')
  }
  
  const handleLimit = () => {
    getFetch('https://fakestoreapi.com/carts',{
      limit: 5
    })
    
  }

  const handleSort = () => {
    getFetch('https://fakestoreapi.com/carts', {
      sort:'desc'
    })
  
  }
  const handleDateRange = () => {
    getFetch('https://fakestoreapi.com/carts', {
      startdate: '2019-12-10',
      enddate:'2020-10-10'
    })
  }

  const handleUserCart = () => {
    getFetch('https://fakestoreapi.com/carts', {
      user:2
    })
  }
  
  const fetchAdd = () => {
    fetch('https://fakestoreapi.com/carts', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( {
        userId: 5,
        date: 2020-0o2-0o3,
        products: [
          {productId:5, quantity:1}, 
          {productId:1, quantity:5}
        ]
      })
    })
    .then(res => res.json())
    .then(newCart => {
      console.log(newCart)
      setData([...data, newCart])
    })
    .catch(error => {
      console.error('Errror fetching the data', error)
    })
  }

  function getFetch(url, params = {}) {
    return axios ( {
      url: url,
      method:'GET',
      params: params
    })
      .then(response => response.data)
      .then(data => setData(data))
    }

  return (
    <div className="container-cart">
      <div className="text-cart">
        <h1>🎉 Welcome, Nirenjana ! 🎉 </h1>
        <h2>
          Your cart is looking fantastic! 🛒✨ <br />
          Ready to make your day even brighter? 
          Let's get these goodies home to you!
        </h2>
      </div>
      <CartButtons 
        handleLimit={handleLimit}
        handleSort={handleSort}
        handleDateRange={handleDateRange}
        handleUserCart={handleUserCart}
        fetchAdd={fetchAdd}
      />
      <table className="display-cart">
        <thead>
          <tr>
            <th className="cart-head">ID</th>
            <th className="cart-head">USER ID</th>
            <th className="cart-head">DATE</th>
            <th className="cart-head">PRODUCTS</th>
          </tr>
        </thead>
        {data.map((cart) => (
          <tbody key={cart.id} className="cart-body">
            <tr className="cart-row">
              <td className="cart-data">
                <Link to='/singlecart'>
                  <h3>{cart.id}</h3>
                </Link>
              </td>
              <td className="cart-data">
                <h3>{cart.userId}</h3>
              </td>
              <td className="cart-data">
                <h3>{cart.date}</h3>
              </td>
              <td className="cart-data" >
                {cart.products.map((product) => (
                  <h3>
                    PRODUCT Id: {product.productId}, QUANTITY: {product.quantity}
                  </h3>
                ))}
              </td>
            </tr>
          </tbody>
        ))} 
      </table>
    </div>
  )
}